'use client';

import Link from 'next/link';

export default function GlobalError() {
  return (
    <html>
      <body className="h-screen flex justify-center items-center ">
        <div className="bg-[#1c2647] p-4 rounded-xl">
          <h2>Sorry, Something went wrong !</h2>
          <Link href="/">
            <button className="gradientBackground p-2 mt-4 rounded-lg block">
              Go Back
            </button>
          </Link>
        </div>
      </body>
    </html>
  );
}
