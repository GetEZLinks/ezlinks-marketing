'use client';
import { motion } from 'framer-motion';
import styles from './AttributionFlowSection.module.scss';

const flowSteps = [
  {
    step: '1',
    title: 'Link Creation & Click',
    color: 'blue',
    items: [
      'Developer creates universal link via EZLinks API',
      'System generates unique hash for the link',
      'User clicks the link (playsq.ezl.link/abc123)',
      'Attribution service records click details'
    ]
  },
  {
    step: '2', 
    title: 'App Open & Decode',
    color: 'purple',
    items: [
      'App opens via universal link',
      'App requests deep link data (/api/decode/abc123)',
      'Deep link payload returned',
      'App navigates to relevant content'
    ]
  },
  {
    step: '3',
    title: 'Event Recording & Analytics',
    color: 'green', 
    items: [
      'App records "app_open" event with attribution_id',
      'Event saved in events table',
      'Analytics processes attribution and event data',
      'Dashboard displays conversion metrics'
    ]
  }
];

export default function AttributionFlowSection() {
  return (
    <section className={styles.attributionFlowSection}>
      <div className="container">
        <motion.div 
          className={styles.flowHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.title}>
            Complete Attribution Flow
          </h3>
          <p className={styles.subtitle}>
            Three simple steps. One powerful platform. Full attribution visibility.
          </p>
        </motion.div>

        <div className={styles.flowSteps}>
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className={`${styles.flowStep} ${styles[step.color]}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.stepHeader}>
                <div className={styles.stepNumber}>
                  {step.step}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              
              <div className={styles.stepContent}>
                <ul className={styles.stepItems}>
                  {step.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.2) + (itemIndex * 0.1) }}
                      viewport={{ once: true }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Connection arrow */}
              {index < flowSteps.length - 1 && (
                <div className={styles.stepConnector}>
                  <motion.div 
                    className={styles.arrow}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.2) + 0.4 }}
                    viewport={{ once: true }}
                  >
                    →
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}