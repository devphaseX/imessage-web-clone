import type { GetServerSideProps } from 'next';
import '../config/validateEnv';
import { signIn, useSession, signOut } from 'next-auth/react';

export default function Home() {
  const { data } = useSession();
  console.log('session data', data);
  return (
    <>
      <button type="button" onClick={() => signIn('google')}>
        Sign in
      </button>
      <button type="button" onClick={() => signOut()}>
        Signout
      </button>
    </>
  );
}

const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export { getServerSideProps };
