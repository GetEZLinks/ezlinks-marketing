'use client';
import { motion } from 'framer-motion';
import styles from './Features.module.scss';

const features = [
  {
    icon: '🔗',
    title: 'Forever links',
    description: 'Your deep links work permanently. No link rot, no expired URLs, no broken user experiences.'
  },
  {
    icon: '⚡',
    title: 'One API, Full Stack',
    description: 'Complete attribution for iOS, Android, and Web. No need to integrate Branch + PostHog + separate attribution service.'
  },
  {
    icon: '📊',
    title: 'Real-time Attribution',
    description: 'Your deep links work permanently. No link rot, no expired URLs, no broken user experiences.'
  },
  {
    icon: '📈',
    title: 'Clean analytics',
    description: 'See what matters Simple dashboard showing where users actually come from.'
  },
  {
    icon: '🔧',
    title: 'Microservices Built to scale',
    description: 'Deployed as independent microservices. Each component scales separately for reliability.'
  },
  {
    icon: '🌍',
    title: 'Edge deployment',
    description: 'Deployed on Fly.io edge nodes. Sub-50ms response times worldwide.'
  }
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <motion.div 
          className={styles.featuresHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className={styles.sectionLabel}>FEATURES</p>
          <h2 className={styles.title}>
            Built for Fast Launches and Real Growth
          </h2>
          <p className={styles.subtitle}>
            With EZLinks, we are creating attribution tracking with an unrivalled developer experience. EZLinks is optimized for simplicity, speed, and getting real insights.
          </p>
        </motion.div>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.featureCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>
                {feature.title}
              </h3>
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