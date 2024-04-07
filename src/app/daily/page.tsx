import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DailyReportPage: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto p-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </label>
          <div className="ml-4 lg:ml-12">
            <Image src="/ikoi.png" alt="IKOI logo" width={150} height={50} />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-xl ml-50">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/report" passHref>
            <button className="btn btn-ghost text-2xl mr-7">記録する</button>
          </Link>
          <Link href="/weekly" passHref>
            <button className="btn btn-ghost text-2xl mr-7">レポートを見る</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
        <div className="card bg-white shadow-xl rounded-lg max-w-4xl w-full mx-auto border border-gray-200">
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold mb-4">今日のアクション振り返り</h2>
            <p className="text-center text-xl mb-4 italic">今日は積極的にコミュニケーションをとりながら、仕事の進捗状況を報告しましたね。</p>
    
        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
            <input type="submit" value="ホームに戻る"
        　　　style={{ backgroundColor: '#37cdbe', color: 'white', padding: '15px 60px', border: 'none', cursor: 'pointer' }}
      　　　/>
        </div>
            
          </div>
        </div>
      </div>
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          {/* SVG for logo goes here */}
          <p className="text-lg">Copyright © 2024 - All rights reserved team IKOI</p>
        </aside>
        {/* Links to social media could also go here */}
      </footer>
    </div>
  );
};

export default DailyReportPage;
