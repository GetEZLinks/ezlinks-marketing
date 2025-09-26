'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Hero.module.scss';
import HowItWorks from './HowItWorks';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={styles.title}>
            Deep links made <em>simple.</em>
          </h1>
          
          <p className={styles.subtitle}>
            <code>Ship trackable deep links and QR codes in minutes, not days.</code>
          </p>
          
          <div className={styles.cta}>
            <motion.a 
              href="#start" 
              className="btn primary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Linking - Free
            </motion.a>
            <motion.a 
              href="#demo" 
              className="btn secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Demo
            </motion.a>
          </div>
        </motion.div>

        <motion.div 
          className={styles.dashboardPreview}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className={styles.dashboardContainer}>
            <Image
              src="/app-onboard.png"
              alt="EZLinks Analytics Dashboard"
              width={1200}
              height={0}
              priority
              className={styles.dashboardImage}
            />
          </div>
        </motion.div>
        <HowItWorks />
      </div>
    </section>
  );
}