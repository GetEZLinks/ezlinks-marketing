'use client';
import { motion } from 'framer-motion';
import styles from './CTA.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import CheckIcon from '../../../public/icons/checkmark.svg';


export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <motion.div 
          className={styles.ctaCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
             Ship your first deep link in minutes.
            </h2>
            <p className={styles.ctaSubtitle}>
              {/* Start your <strong>30-day free trial</strong> today and see how EZLinks can transform your user journeys. */}
            </p>
            
              <motion.a 
                href="https://forms.gle/orDx5bQKBtFKHSHJ8" 
                className="btn primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >

                Sign up for Early Access
                </motion.a>
            
          </div>
          
          <div className={styles.ctaFeatures}>
            <div className={styles.feature}>
              <span className={styles.checkmark}>
                <Image
                  src={CheckIcon}
                  alt=''
                  height={20}
                  width={20}
                />
              </span>
              <span>No credit card required</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.checkmark}>
                <Image
                  src={CheckIcon}
                  alt=''
                  height={20}
                  width={20}
                />
              </span>
              <span>5-minute setup</span>
            </div>
            <div className={styles.feature}>
              <span className={styles.checkmark}>
                <Image
                  src={CheckIcon}
                  alt=''
                  height={20}
                  width={20}
                />
              </span>
              <span>Full API access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}