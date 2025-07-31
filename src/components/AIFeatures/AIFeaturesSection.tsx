'use client';
import { motion } from 'framer-motion';
import styles from './AIFeaturesSection.module.scss';

const aiFeatures = [
  {
    icon: '🧠',
    title: 'AI Logic Engine',
    description: 'Smart routing based on user context and behavior patterns'
  },
  {
    icon: '🔗',
    title: 'Link Versioning',
    description: 'Proper version control for links with rollback capabilities'
  },
  {
    icon: '📊',
    title: 'Campaign Management',
    description: 'End-to-end campaign lifecycle with automated optimization'
  },
  {
    icon: '⚡',
    title: 'AI Flow Builder',
    description: 'Visual automation for complex attribution workflows'
  }
];

export default function AIFeaturesSection() {
  return (
    <section className={styles.aiFeaturesSection}>
      <div className="container">
        <motion.div 
          className={styles.aiHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.comingSoonBadge}>
            <span className={styles.badgeIcon}>✨</span>
            Coming Soon: AI-Powered Features
          </div>
          
          <h2 className={styles.title}>
            Links That Get Smarter
          </h2>
          <p className={styles.description}>
            We&apos;re building the future of link optimization with AI-powered routing, automated campaign management, and intelligent user journey orchestration.
          </p>
        </motion.div>

        <div className={styles.featuresGrid}>
          {aiFeatures.map((feature, index) => (
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
              <h3 className={styles.featureTitle}>
                {feature.title}
              </h3>
              <p className={styles.featureDescription}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* <motion.div 
          className={styles.earlyAccessCTA}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>Be the first to experience AI-powered attribution.</p>
          <a href="#early-access" className="btn secondary">
            Join Early Access
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}