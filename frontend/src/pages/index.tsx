import type { GetServerSideProps } from 'next';
import '../config/validateEnv';

export default function Home() {
  return (
    <>
      <div>Hello from next.js</div>
    </>
  );
}

const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export { getServerSideProps };
