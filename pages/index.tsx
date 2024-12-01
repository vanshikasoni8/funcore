import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Gaming Platform</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex w-full flex-1 flex-col items-center justify-center px-20 text-center'>
        <h1 className='text-6xl font-bold text-white'>
          Welcome to <span className='text-blue-200'>FunCore</span>
        </h1>

        <p className='mt-3 text-2xl text-white'>Get started by exploring our games!</p>

        <div className='mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full'>
          <Link
            href='/games'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-200 focus:text-blue-200 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg'
          >
            <h3 className='text-2xl font-bold text-white'>Games &rarr;</h3>
            <p className='mt-4 text-xl text-white'>Explore our collection of exciting games.</p>
          </Link>

          <Link
            href='/leaderboard'
            className='mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-200 focus:text-blue-200 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg'
          >
            <h3 className='text-2xl font-bold text-white'>Leaderboard &rarr;</h3>
            <p className='mt-4 text-xl text-white'>Check out the top players and their scores.</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;