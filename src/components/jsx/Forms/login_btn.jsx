import { useSession, signIn, signOut } from 'next-auth/react';
export default function LoginBtn() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div className="text-gray-200">
        <p>
          Hello <strong>{session.user.name}</strong>, please leave your
          comment..
        </p>
        {/* <p>
          You have signed in as {session.user.email} <br />
        </p> */}
        <button
          onClick={() => signOut()}
          className="randomBG1 relative grid rounded-full py-2 px-4 shadow-xl text-white font-semibold shadow-black hover:animate-pulse hover:bg-black/50"
        >
          Sign out
        </button>
      </div>
    )
  }
  return (
    <div>
      <button
        onClick={() => signIn()}
        className="randomBG1 relative grid rounded-full py-2 px-4 shadow-xl text-white font-semibold shadow-black/10 animate-pulse hover:animate-none"
      >
        Sign in
      </button>
    </div>
  )
}
