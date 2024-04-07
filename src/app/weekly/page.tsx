"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './weekly.module.css'; // CSSモジュールをインポート

const WeeklyReportPage: React.FC = () => {
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
        <div className={`${styles.card} card mx-auto`}>
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold mb-4">先週のアクションレポート</h2>
            <p className="text-center text-xl mb-4 italic">山田さん、今週は色々な人に挨拶をしてコミュニケーションをとりましたね。今週は積極的に質問するようにしましょう。</p>
            <p className="text-center text-lg mb-2">今週の強化アクションはコチラになります</p>
            <p className="text-center mt-4 text-2xl font-semibold pt-50">遮らずに相手の話を聞こう</p>
            <div className={styles.progressBarContainer}>
              <div className={`${styles.progressBar}`} style={{ width: '40%' }}>
                40%
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className={`${styles.footer} footer items-center p-4`}>
        <aside className="items-center grid-flow-col">
          {/* Footer content */}
          <p className="text-lg">Copyright © 2024 - All rights reserved team IKOI</p>
        </aside>
      </footer>
    </div>
  );
};

export default WeeklyReportPage;
