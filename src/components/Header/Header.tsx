// src/components/Header/Header.tsx
'use client';
import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import Image from 'next/image';

export default function Header() {
  return (
    <motion.header 
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image
              src="/ezlinks-logo.svg"
              alt='EZLinks logo'
              height={32}
              width={125}
            />
          </div>
          
          <div className={styles.navLinks}>
            <a href="#docs">Documentation</a>
            <a href="#pricing">Pricing</a>
            <a href="#github">GitHub</a>
            <a href="#dashboard" className="btn secondary">Dashboard</a>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
