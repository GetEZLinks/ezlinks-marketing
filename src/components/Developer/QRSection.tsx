'use client';
import { motion } from 'framer-motion';
import styles from './QRSection.module.scss';

const recentActivity = [
  {
    type: 'link',
    title: 'New Link Created',
    description: 'playsq.ezl.link/promo',
    subtitle: 'Action: special_offer',
    time: '1h ago',
    color: 'blue'
  },
  {
    type: 'config',
    title: 'Configuration Updated',
    description: 'Android settings modified',
    subtitle: 'Added new action: rate_app',
    time: '3h ago',
    color: 'yellow'
  },
  {
    type: 'link',
    title: 'Link Updated',
    description: 'playsq.ezl.link/invite',
    subtitle: 'Changed parameters for tracking',
    time: 'Yesterday',
    color: 'blue'
  }
];

export default function QRSection() {
  return (
    <section className={styles.qrSection}>
      <div className="container">
        <div className={styles.qrContent}>
          <motion.div 
            className={styles.qrInfo}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.qrTitle}>
              Create, Test, and Debug in Real-Time
            </h3>
            <p className={styles.qrDescription}>
              Stop flying blind. Generate deep links and QR codes programmatically, then verify their routing logic instantly in our live console—just like testing an API endpoint.
            </p>
            
            <ul className={styles.qrFeatures}>
              <li>Create links programmatically for campaigns, referrals, or onboarding</li>
              <li>Auto-generate QR codes with custom branding and styles</li>
              <li>Handle deep links natively without complex fallback logic</li>
              <li>Track scans and opens instantly—no analytics setup required</li>
            </ul>
          </motion.div>

          <motion.div 
            className={styles.activityFeed}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={styles.activityTitle}>Recent Activity</h4>
            <div className={styles.activityList}>
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  className={styles.activityItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`${styles.activityDot} ${styles[activity.color]}`}></div>
                  <div className={styles.activityContent}>
                    <div className={styles.activityHeader}>
                      <h5 className={styles.activityName}>{activity.title}</h5>
                      <span className={styles.activityTime}>{activity.time}</span>
                    </div>
                    <p className={styles.activityDescription}>{activity.description}</p>
                    <p className={styles.activitySubtitle}>{activity.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}