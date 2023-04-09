import React, { useMemo } from 'react'
import { Back } from '..'
import { z } from 'zod'

const NotFoundPropsSchema = z.object({
  message: z.string().optional(),
  returnPath: z.string().optional(),
})

type NotFoundProps = z.infer<typeof NotFoundPropsSchema>

const NotFound: React.FC<NotFoundProps> = ({
  message = 'Not Found!',
  returnPath,
}) => {
  const memoizedMessage = useMemo(() => message, [message])
  const memoizedReturnPath = useMemo(() => returnPath, [returnPath])

  return (
    <>
      <div className="showSlow relative grid w-full place-content-center p-2 pt-4">
        <div className="leafRadius m-4 animate-pulse bg-black/30 bg-gradient-to-r from-red-300 to-red-500 bg-clip-text px-4 py-8 text-xl font-extrabold text-transparent shadow-md shadow-black">
          {memoizedMessage}
        </div>
        <div className="">
          <Back path={memoizedReturnPath} />
        </div>
      </div>
    </>
  )
}

export default NotFound
