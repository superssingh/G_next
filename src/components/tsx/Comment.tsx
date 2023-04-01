'use client'
import { useRef } from 'react'
import LoginBtn from '../jsx/login_btn'
import TextArea from '../jsx/myCustomUI/TextArea'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useSession, signOut } from 'next-auth/react'

type CommentsProps = {
  comments: {
    name: string
    email: string
    image: string
    datetime: string
    comment: string
  }[]
}

const schema = yup.object({
  comment: yup.string().min(3).max(100).required(),
})

const Comment = ({ comments }: CommentsProps) => {
  const { data: session } = useSession()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data: any) => {
    // if (success) return;
    if (session) {
      data.name = session.user?.name
      data.email = session.user?.email
      data.image = session.user?.image
      data.datetime = new Date().toJSON()
      console.log('commentData: ', data)
      return
    }
  }

  const form = useRef()

  return (
    <div>
      <div className="grid w-full p-4 ">
        {(session && (
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:flex w-full place-content-center place-items-center rounded-md bg-black/20 p-4 text-white">
                <TextArea
                  name="comment"
                  label="Comment"
                  rows={2}
                  cols={100}
                  required
                  error={errors.comment?.message}
                  register={register}
                />
                <input
                  type="submit"
                  value="Submit"
                  className=" fancyRadius2 h-fit rounded-full shadow-lg shadow-black randomBG1 p-4 m-2 hoverEffect "
                />
              </div>
            </form>
            <button
              onClick={() => signOut()}
              className="randomBG1 relative grid rounded-full py-1 px-2 shadow-xl text-white font-semibold shadow-black hover:animate-pulse hover:bg-black/50"
            >
              Sign out
            </button>
          </div>
        )) || (
          <div className="grid w-full place-content-center place-items-center">
            <div className="flex  p-2 bg-black/30 rounded-full ">
              <div className=" text-gray-300/50 font-bold px-4 py-2 ">
                Wanna leave comment
              </div>
              <LoginBtn />
            </div>
          </div>
        )}
      </div>
      {comments && (
        <div className="relative grid rounded-sm bg-white/[.30] p-2">
          <div className="grid w-full  font-semibold text-green-100">
            Comments
          </div>
          <div className="m-2 rounded-md bg-white/[.60] p-2 hover:bg-white/[.80] ">
            <div className="relative flex w-full place-items-center px-2 pb-2  ">
              <div className="h-8 w-8 rounded-full bg-black/[.30]"></div>
              <div className="pl-2 text-xs font-semibold text-gray-700 ">
                Reviewer Name
              </div>
              <div className="pl-2 text-right text-xs font-light text-gray-500 ">
                {`(OCT 19, 2022)`}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Comment
