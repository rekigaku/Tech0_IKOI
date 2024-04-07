"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './report.module.css'; // CSSモジュールをインポート

const DailyReport: React.FC = () => {
  return (
    <div className="flex flex-col mx-auto p-10">
      <div className={`navbar ${styles.navbar}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </label>
          </div>
          <div className="ml-4 lg:ml-12">
            <Image src="/ikoi.png" alt="IKOI logo" width={150} height={50} />
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-xl ml-50">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        
        <div className="navbar-end">
          <Link href="/report" passHref>
            <button className={`btn btn-ghost text-lg mr-7 ${styles.btn}`}>記録する</button>
          </Link>
          <Link href="/weekly" passHref>
            <button className={`btn btn-ghost text-lg mr-7 ${styles.btn}`}>レポートを見る</button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
        <div className={`card ${styles.card}`}>
          <div className="card-body">
            <h2 className="text-2xl text-center font-semibold mb-6">部下へのアクション</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-gray-800">
              <button className={`btn ${styles.btn} ${styles.btnHover}`}>あいさつした</button>
              <button className={`btn ${styles.btn} ${styles.btnHover}`}>笑顔で接した</button>
              <button className={`btn ${styles.btn} ${styles.btnHover}`}>遮らずに相手の話を聞いた</button>
              <button className={`btn ${styles.btn} ${styles.btnHover}`}>目をみて話した</button>
              <button className={`btn ${styles.btn} ${styles.btnHover}`}>状況や進捗状態の声かけをした</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center p-10 bg-gray-100">
        <div className={`card ${styles.card}`}>
          <div className="card-body">
            <h2 className="text-2xl text-center font-semibold mb-6">部下からのアクション</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-gray-800">
              <button className={`btn ${styles.btn} ${styles.btnHover}`}>あいさつしてくれた</button>
              <button className={`btn ${styles.btn} ${styles.btnHover}`}>笑顔で接してくれた</button>
              <button className={`btn ${styles.btn} ${styles.btnHover}`}>あいづちを打ってくれた</button>
              <button className={`btn ${styles.btn} ${styles.btnHover}`}>目をみて話してくれた</button>
              <button className={`btn ${styles.btn} ${styles.btnHover}`}>質問をしてくれた</button>
            </div>
          </div>
        </div>

        <div className={styles.submitContainer}>
          <input type="submit" value="登録する" className={styles.submitButton} />
        </div>
      </div>

      <footer className={`footer items-center p-4 ${styles.footer}`}>
        <aside className="items-center grid-flow-col">
          <p className="text-lg">Copyright © 2024 - All right reserved team IKOI</p>
        </aside>
        {/* Footer の中の Social Icons 等 */}
      </footer>
    </div>
  );
};

export default DailyReport;

