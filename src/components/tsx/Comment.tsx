import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TextArea } from '..'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/clerk-react'

const CommentFormValidator = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().url().optional(),
  comment: z.string().refine((val) => val.trim().length > 0, {
    message: 'Message field cannot be blank',
  }),
  date: z.string(),
})

type FormData = z.infer<typeof CommentFormValidator>

type CommentsProps = {
  comments: FormData[]
}

const Comment = ({ comments }: CommentsProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(CommentFormValidator) })

  const { isLoaded, isSignedIn, user } = useUser()

  const onSubmit = async (data: FormData) => {
    if (isLoaded && isSignedIn) {
      console.log(user)
      // data.name = user.firstName || ''
      // data.email = user.emailAddresses || ''
      // data.avatar = user.profileImageUrl || undefined
      // data.date = new Date().toJSON() || ''
      return
    }
  }

  return (
    <>
      <div className="grid w-full p-4 ">
        <>
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />

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
          </SignedIn>
        </>
        <>
          <SignedOut>
            <div className="grid w-full place-content-center place-items-center">
              <div className="flex  p-2 bg-black/30 rounded-full ">
                <div className=" text-gray-300/50 font-bold px-4 py-2 ">
                  Wanna leave comment
                </div>
                {/* Signed out users get sign in button */}
                <div className="randomBG1 relative grid w-fit rounded-full px-4 py-2 font-semibold text-white shadow-xl shadow-black transition-all duration-700 hover:animate-pulse hover:bg-black/50">
                  <SignInButton />
                </div>
              </div>
            </div>
          </SignedOut>
        </>
      </div>

      {comments.length > 0 && (
        <div className="relative grid rounded-sm bg-white/[.30] p-2">
          <div className="grid w-full  font-semibold text-green-100">
            Comments
          </div>
          <div className="m-2 rounded-md bg-violet-200 p-2 hover:bg-white/[.80] ">
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
    </>
  )
}

export default Comment
