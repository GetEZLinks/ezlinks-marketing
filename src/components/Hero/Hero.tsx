'use client';
import { motion } from 'framer-motion';

import styles from './Hero.module.scss';
import HowItWorks from './HowItWorks';
import CodeSnippet from '../CodeSnippet/CodeSnippet';
import Image from 'next/image';

// const codeString = `$ npm install ezlinks-sdk
// ✓ Installing attribution without the bloat...
// $ ezlinks init
// ✓ SDK initialized - tracking ready in 30 seconds
// $ ezlinks track --event="app_install" --source="instagram"
// ✓ Event tracked | Attribution: Instagram Story → App Install
// ✓ Revenue impact: $23.50 | ROI: 340%`

const newCodeString = `$ npm install ezlinks
✓ If you can curl it, you can build it.

$ ezlinks init
> Verifying API Key... OK
✓ Region detected: us-east-1 (Latency: 24ms)

$ ezlinks resolve --link "ezl.link/invite"
✓ Device Match: iOS 17 (Probability: 98%)
✓ Routing Logic: Web -> App Store -> Deferred Deep Link
✓ Latency: 124ms | Context Preserved: { promo: "VIP" }`

export default function Hero() {

  const HeroImg = () => {
    return (
      <motion.div 
        className={styles.dashboardPreview}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className={styles.imageContainer}>
          <Image
            src="/ezlinks-dash.webp"
            alt="EZLinks Analytics Dashboard"
            width={1200}
            height={0}
            priority
            className={styles.dashImage}
          />
          <Image
            src="/ezlinks-dash-apps@2x.png"
            alt="EZLinks Analytics Dashboard"
            width={1200}
            height={0}
            priority
            className={styles.mobileImage}
          />
        </div>
      </motion.div>
    )
  }
    
  const CodeBlock = () => {
    return (
      <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <div className={styles.codeDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <CodeSnippet codeString={newCodeString} />
          </div>
        </motion.div>
    )
  }  
      

  const CTA = () => {
    return (
      <div className={styles.cta}>
      <motion.a 
        href="https://docs.getezlinks.io"
        target='_blank'  
        className="btn secondary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Read the Docs
      </motion.a>
      
      <motion.a 
        href="https://dash.getezlinks.io/auth?mode=register&plan=indie" 
        className="btn primary"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Start Linking
      </motion.a>
      </div>
    )
  };

  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className={styles.title}>
            Deep Linking for Builders.
          </h1>
          
          <p className={styles.subtitle}>
            Blazing-fast deferred deep links and attribution without the enterprise overhead. No sales calls, no hidden pricing.
          </p>          
          {/* <p className={styles.subtitle}>
            EZLinks delivers instant attribution and deep linking that just works. Drop in the SDK, test, and ship your app today.
          </p> */}
          <CTA />
        </motion.div>

        {/* <HeroImg /> */}
        <CodeBlock />    
        <HowItWorks />
      </div>
    </section>
  );
}