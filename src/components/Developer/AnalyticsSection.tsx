'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './AnalyticsSection.module.scss';

const analyticsFeatures = [
  {
    icon: '📊',
    title: 'Time-series logging',
    description: 'Log user events with millisecond accuracy'
  },
  {
    icon: '🎯',
    title: 'Source attribution',
    description: 'Aggregate across campaigns, platforms, and channels'
  },
  {
    icon: '🔗',
    title: 'Device fingerprinting',
    description: 'Experience smarter routing and retention tracking'
  },
  {
    icon: '👆',
    title: 'Behavior capture',
    description: 'Easily track CTR, app opens, and conversion trends'
  }
];

export default function AnalyticsSection() {
  return (
    <section className={styles.analyticsSection}>
      <div className="container">
        <motion.div 
          className={styles.analyticsHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.analyticsTitle}>Powerful Analytics</h3>
          <p className={styles.analyticsDescription}>
            Track every click, open, and conversion with real-time telemetry — without the SaaS bloat.
          </p>
        </motion.div>

        <div className={styles.chartsContainer}>
          <motion.div 
            className={styles.chartItem}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.chartPlaceholder}>
              <Image
                src="/performance-chart.png"
                alt="Performance Over Time Chart"
                width={500}
                height={300}
                className={styles.chartImage}
              />
              {/* <div className={styles.placeholderOverlay}>
                <p>Performance Over Time</p>
                <small>Replace with /performance-chart.png</small>
              </div> */}
            </div>
          </motion.div>

          <motion.div 
            className={styles.chartItem}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.chartPlaceholder}>
              <Image
                src="/sources-breakdown.png"
                alt="Sources Breakdown Chart"
                width={500}
                height={300}
                className={styles.chartImage}
              />
              
            </div>
          </motion.div>
        </div>

        <div className={styles.featuresGrid}>
          {analyticsFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h4 className={styles.featureTitle}>
                {feature.title}
              </h4>
              <p className={styles.featureDescription}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}