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
        <h1 className={styles.title}>
          Clean<span className={styles.highlight}>URL</span>
        </h1>
        <p className={styles.subtitle}>
          Remove tracking parameters and clean up your URLs instantly
        </p>
      </header>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Paste your URL here..."
          className={styles.input}
        />
        <button onClick={cleanUrl} className={styles.cleanButton}>
          Clean
        </button>
      </div>

      <div className={styles.infoSection}>
        <div className={styles.whatWeRemove}>
          <h2>What We Remove</h2>
          <div className={styles.parameterGrid}>
            <div className={styles.parameter}>UTM Parameters</div>
            <div className={styles.parameter}>Facebook Click ID</div>
            <div className={styles.parameter}>Google Analytics</div>
            <div className={styles.parameter}>Instagram Share ID</div>
            <div className={styles.parameter}>Google Click ID</div>
            <div className={styles.parameter}>Reference Tags</div>
          </div>
        </div>

        <div className={styles.infoColumns}>
          <div className={styles.whyClean}>
            <h2>Why Clean URLs?</h2>
            <p>URLs often contain tracking parameters that:</p>
            <ul>
              <li>Make links unnecessarily long</li>
              <li>Reveal your traffic source</li>
              <li>Track your online behavior</li>
              <li>Clutter your shared links</li>
            </ul>
            <p className={styles.description}>
              Our URL cleaner helps protect your privacy and creates cleaner, more professional-looking links for sharing.
            </p>
          </div>

          <div className={styles.howItWorks}>
            <h2>How It Works</h2>
            <ol>
              <li>Paste your URL into the input field above</li>
              <li>Our system automatically identifies and removes tracking parameters</li>
              <li>Copy your clean URL with one click and share it anywhere</li>
            </ol>
          </div>
        </div>
      </div>

      {cleanedUrl && (
        <div className={styles.result}>
          <div className={styles.cleanedUrl}>
            <p>{cleanedUrl}</p>
            <button 
              onClick={copyToClipboard}
              className={styles.copyButton}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
