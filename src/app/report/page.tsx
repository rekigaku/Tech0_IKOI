import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const dailyreport: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto p-10">
      {/* DaisyUI Navbar as the header */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16" />
              </svg>
            </label>
          </div>
          {/* Add padding or margin on the left side of the logo to move it to the right */}
          <div className="ml-4 lg:ml-12"> {/* Adjust the margin as needed */}
            <Image src="/ikoi.png" alt="IKOI logo" width={150} height={50} />
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-xl ml-50">
            {/* Main menu items */}
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
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

       {/* Main*/}

    <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
    <div className="card bg-white shadow-xl rounded-lg max-w-4xl w-full overflow-hidden border border-gray-200">
        <div className="card-body">
        <h2 className="text-2xl text-center font-semibold mb-6">部下へのアクション</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-gray-800">
            <button className="btn border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-md">あいさつした</button>
            <button className="btn border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-md">笑顔で接した</button>
            <button className="btn border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-md">遮らずに相手の話を聞いた</button>
            <button className="btn border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-md">目をみて話した</button>
            <button className="btn border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-md">状況や進捗状態の声かけをした</button>
        </div>
        </div>
    </div>
    </div>



    <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
     <div className="card bg-white shadow-xl rounded-lg max-w-4xl w-full overflow-hidden border border-gray-200">
       <div className="card-body">
        <h2 className="text-2xl text-center font-semibold mb-6">部下からのアクション</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-gray-800">
            <button className="btn border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-md">あいさつしてくれた</button>
            <button className="btn border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-md">笑顔で接してくれた</button>
            <button className="btn border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-md">あいづちを打ってくれた</button>
            <button className="btn border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-md">目をみて話してくれた</button>
            <button className="btn border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 rounded-lg transition duration-300 ease-in-out shadow-sm hover:shadow-md">質問をしてくれた</button>
        </div>
       </div>
     </div>
    

        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
            <input type="submit" value="登録する"
        　　　style={{ backgroundColor: '#37cdbe', color: 'white', padding: '15px 60px', border: 'none', cursor: 'pointer' }}
      　　　/>
        </div>
    </div>

    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        {/* Logo SVG */}
        <div className="fill-current">
          <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            {/* SVG path for Logo */}
            {/* ... */}
          </svg>
        </div>
        {/* Copyright Notice */}
        <p className="text-lg">Copyright © 2024 - All right reserved  team IKOI</p>
      </aside>
      {/* Social Icons */}
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {/* Social Links */}
        <a href="#" aria-label="Twitter" className="hover:text-opacity-80">
          {/* Twitter Icon SVG */}
          {/* ... */}
        </a>
        <a href="#" aria-label="YouTube" className="hover:text-opacity-80">
          {/* YouTube Icon SVG */}
          {/* ... */}
        </a>
        <a href="#" aria-label="Facebook" className="hover:text-opacity-80">
          {/* Facebook Icon SVG */}
          {/* ... */}
        </a>
      </nav>
    </footer>

    </div>
  );
};

export default dailyreport;
