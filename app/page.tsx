'use client';

import React, { useState } from 'react';
import styles from './page.module.css';

const HomePage = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [cleanedUrl, setCleanedUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const cleanUrl = () => {
    try {
      const url = new URL(inputUrl);
      // Remove tracking parameters
      const paramsToRemove = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'fbclid',
        'fbid',
        'gclid',
        '_ga',
        'ref',
        'source',
        'mc_cid',
        'mc_eid',
        'igshid',
      ];

      paramsToRemove.forEach((param) => {
        url.searchParams.delete(param);
      });

      setCleanedUrl(url.toString());
    } catch (error) {
      setCleanedUrl('Please enter a valid URL');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(cleanedUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Our Modern Homepage</h1>
        <p className={styles.subtitle}>Explore the latest features and updates.</p>
      </header>
      <main className={styles.mainContent}>
        <section className={styles.features}>
          <h2>Our Features</h2>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>Feature 1</div>
            <div className={styles.featureItem}>Feature 2</div>
            <div className={styles.featureItem}>Feature 3</div>
          </div>
        </section>
        <div className={styles.inputContainer}>
          <input
            type="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Paste your URL here..."
            className={styles.urlInput}
          />
          <button onClick={cleanUrl} className={styles.cleanButton}>Clean</button>
        </div>
        {cleanedUrl && (
          <div className="relative">
            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-800 dark:text-gray-200 break-all text-left">
                {cleanedUrl}
              </p>
            </div>
            <button
              onClick={copyToClipboard}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        )}
      </main>
      <footer className={styles.footer}> 
        <p> 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
