import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='bg-black'>
      <div className='max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8'>
        <nav className='-mx-5 -my-2 flex flex-wrap justify-center' aria-label='Footer'>
          <div className='px-5 py-2'>
            <Link href='/about' className='text-base text-lime-300 hover:text-white'>
              About
            </Link>
          </div>
          <div className='px-5 py-2'>
            <Link href='/privacy' className='text-base text-lime-300 hover:text-white'>
              Privacy Policy
            </Link>
          </div>
          <div className='px-5 py-2'>
            <Link href='/terms' className='text-base text-lime-300 hover:text-white'>
              Terms of Service
            </Link>
          </div>
          <div className='px-5 py-2'>
            <Link href='/contact' className='text-base text-lime-300 hover:text-white'>
              Contact
            </Link>
          </div>
        </nav>
        <p className='mt-8 text-center text-base text-gray-400'>
          Made with ❣️ by <span className='text-lime-300'>FunCore</span> Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
