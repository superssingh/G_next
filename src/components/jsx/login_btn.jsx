import { useSession, signIn, signOut } from 'next-auth/react';
export default function LoginBtn() {
  const { data: session } = useSession();
  console.log('userData:', session);

  if (session) {
    return (
      <div>
        Signed in as {session.user.email} <br />
        <button
          onClick={() => signOut()}
          className="randomBG1 relative grid rounded-full p-2 shadow-xl shadow-black hover:animate-pulse hover:bg-black/50"
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div>
      Not signed in <br />
      <button
        onClick={() => signIn()}
        className="randomBG1 relative grid rounded-full p-2 shadow-xl shadow-black hover:animate-pulse hover:bg-black/50"
      >
        Sign in
      </button>
    </div>
  );
}
