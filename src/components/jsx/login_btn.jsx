import { useSession, signIn, signOut } from 'next-auth/react';
export default function LoginBtn() {
  const { data: session } = useSession();
  console.log('userData:', session);

  if (session) {
    return (
      <div className="bg-gray-100">
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
