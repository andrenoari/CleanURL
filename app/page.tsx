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
      <div className={styles.content}>
        <h1 className={styles.title}>
          Clean<span className={styles.highlight}>URL</span>
        </h1>
        <p className={styles.subtitle}>
          Remove tracking parameters and clean up your URLs instantly
        </p>

        <div className={styles.inputContainer}>
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

        <div className={styles.whatWeRemove}>
          <h2>What We Remove</h2>
          <div className={styles.grid}>
            <div>UTM Parameters</div>
            <div>Facebook Click ID</div>
            <div>Google Click ID</div>
            <div>Google Analytics</div>
            <div>Instagram Share ID</div>
            <div>Reference Tags</div>
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
            <p className={styles.note}>
              Our URL cleaner helps protect your privacy and creates cleaner, more professional-looking links for sharing.
            </p>
          </div>

          <div className={styles.howItWorks}>
            <h2>How It Works</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>1</span>
                <p>Paste your URL into the input field above</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>2</span>
                <p>Our system automatically identifies and removes tracking parameters</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>3</span>
                <p>Copy your clean URL with one click and share it anywhere</p>
              </div>
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
    </div>
  );
};

export default HomePage;
