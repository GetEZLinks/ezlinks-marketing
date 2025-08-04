'use client';
import { motion } from 'framer-motion';
import styles from './ArchitectureSection.module.scss';

const coreComponents = [
  {
    title: 'Routing Engine',
    description: 'Handles universal links, smart redirects, and deferred deep links. Deployed globally via Fly.io, optimized for sub-50ms response.'
  },
  {
    title: 'Attribution Core', 
    description: 'Real-time logging for clicks, installs, and app opens. Supports granular event streams with audit-ready integrity.'
  },
  {
    title: 'Tracking layer',
    description: 'Millisecond-level logs, UTM capture, referrer fingerprinting'
  },
  {
    title: 'Insights Engine',
    description: 'Actionable dashboards that surface conversion trends and attribution outcomes, with AI-assisted guidance coming soon.'
  }
];

const supportingServices = [
  {
    title: 'EZLinks SDK',
    description: 'Client-side control without native SDKs. Works instantly with web + mobile.'
  },
  {
    title: 'Settings & Config API',
    description: 'Multi-tenant user/org architecture. Modular config for domains, apps, links, and usage patterns.'
  },
  {
    title: 'Compliance & Security',
    description: 'SOC2-aligned infrastructure with end-to-end encryption. Built on Fly.io + Vercel + Postgres stack'
  },
  {
    title: 'Monitoring & Audit Logs',
    description: 'Full event traceability, failure tracking, and internal diagnostics.'
  }
];

const complianceBadges = ['HIPAA', 'SOC2', 'GDPR'];

export default function ArchitectureSection() {
  return (
    <section className={styles.architectureSection}>
      <div className="container">
        <div className={styles.architectureContent}>
          <motion.div 
            className={styles.architectureHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className={styles.sectionLabel}>EZLinks Platform</p>
            <h2 className={styles.title}>
              <span style={{ opacity: 0.3, display: "block", fontWeight: 900, letterSpacing: "-1.5px" }} >Modern Infrastructure.</span>
              No Bloat. Built for AI.
            </h2>
            <p className={styles.description}>
              EZLinks is designed to be invisible until it matters—blazing-fast routing, real-time attribution, 
              and developer-grade observability in a modular stack.
            </p>
          </motion.div>

          {/* <motion.div 
            className={styles.visualContainer}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.architectureVisual}>
              <div className={styles.cubeContainer}>
                <div className={styles.cube}></div>
                <div className={styles.cube}></div>
                <div className={styles.cube}></div>
                <div className={styles.dots}></div>
              </div>
            </div>
          </motion.div> */}
        </div>

        <div className={styles.architectureLayout}>
          <div className={styles.coreEngineSection}>
            {/* <motion.h3 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Core Engine
            </motion.h3> */}
            <div className={styles.coreGrid}>
              {coreComponents.map((component, index) => (
                <motion.div
                  key={component.title}
                  className={`${styles.componentCard} ${styles.coreCard}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className={styles.componentTitle}>{component.title}</h4>
                  <p className={styles.componentDescription}>{component.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.supportingSection}>
            {/* <motion.h3 
              className={styles.sectionTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Supporting Services
            </motion.h3> */}
            <div className={styles.supportingGrid}>
              {supportingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className={styles.componentCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className={styles.componentTitle}>{service.title}</h4>
                  <p className={styles.componentDescription}>{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className={styles.ezlinksMov}
          preload="metadata" // Loads video metadata but not full video until needed
        >
          <source src="/ezlinks.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <motion.div 
          className={styles.complianceSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.complianceBadges}>
            {complianceBadges.map((badge) => (
              <div key={badge} className={styles.complianceBadge}>
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}