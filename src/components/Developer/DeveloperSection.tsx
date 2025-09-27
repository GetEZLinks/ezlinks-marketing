'use client';
import { motion } from 'framer-motion';
import styles from './DeveloperSection.module.scss';

import Image from 'next/image';
import CheckIcon from '../../../public/icons/checkmark.svg';

const codeExamples = [
  {
    icon: '/icons/deep-links.svg',
    title: 'Links That Actually Work',
    description: 'Universal deep links that don\'t break. No complex fallback logic required.',
    code: `const link = ezlinks.create({ campaign:
'summer_promo', fallback: 'https://
app.store', data: { promo_code:
'SUMMER20' } }); // Just works. Period.`
  },
  {
    icon: '/icons/campaigns.svg',
    title: 'Attribution You Can Trust',
    description: 'Open-source attribution modeling. See exactly how we calculate everything.',
    code: `// First-party data, zero black boxes
const attribution = await
ezlinks.getAttribution({ user_id:
'user_123', window: '7d', model:
'last_click' // or build your own });`
  },
  {
    icon: '/icons/edge-deploy.svg',
    title: 'Ship Fast, Debug Faster',
    description: 'Real-time tracking with millisecond precision. No waiting for batch processing.',
    code: `// Real-time events, zero lag
ezlinks.track('purchase', { value:
29.99, currency: 'USD', source:
'instagram_story' }); // Analytics
update instantly`
  }
];

export default function DeveloperSection() {
  return (
    <section className={styles.developerSection}>
      <div className="container">
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className={styles.sectionLabel}>Super EZ to Use</p>
          <h2 className={styles.title}>
            Built for Developer by Developers
          </h2>
          <p className={styles.subtitle}>
            Stop stitching together multiple tools. Get complete attribution in one developer-friendly platform.
          </p>
        </motion.div>

        <motion.div 
          className={styles.usageHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* <h3 className={styles.usageTitle}>Super EZ to Use</h3> */}
          
        </motion.div>

        <div className={styles.codeExamples}>
          {codeExamples.map((example, index) => (
            <motion.div
              key={example.title}
              className={styles.codeExample}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className={styles.exampleContent}>
                <Image
                  src={example.icon}
                  alt=''
                  height={24}
                  width={24}
                />
                <h4 className={styles.exampleTitle}>{example.title}</h4>
                <p className={styles.exampleDescription}>{example.description}</p>
              </div>
              
              <div className={styles.codeBlock}>
                <div className={styles.codeHeader}>
                  <div className={styles.codeDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <pre className={styles.codeContent}>
                  <code>{example.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}