'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import styles from './CaseStudySection.module.scss';

const caseStudyFeatures = [
  {
    id: 'share',
    title: 'Share with a Tap',
    description: 'Dynamic invite links and QR codes that drop users right into the app — no friction, no signups.',
    imageSrc: '/playsquares-share.png',
    imageAlt: 'PlaySquares share screen showing invite options'
  },
  {
    id: 'scan',
    title: 'Scan-to-Join Magic',
    description: 'QRs work instantly at real-world events — just scan and you\'re in the game.',
    imageSrc: '/playsquares-qr-demo.png',
    imageAlt: 'PlaySquares QR code scanning experience'
  },
  {
    id: 'landing',
    title: 'Personalized Landing',
    description: 'Deep links preload context — users land on the right board, with no confusion.',
    imageSrc: '/playsquares-board.png',
    imageAlt: 'PlaySquares game board with personalized context'
  }
];

export default function CaseStudySection() {
  const [activeFeature, setActiveFeature] = useState('share');
  const currentFeature = caseStudyFeatures.find(f => f.id === activeFeature) || caseStudyFeatures[0];

  return (
    <section className={styles.caseStudySection}>
      <div className="container">
        <motion.div 
          className={styles.caseStudyHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className={styles.sectionLabel}>Case Study</p>
          <h2 className={styles.title}>
            Built with EZLinks: PlaySquares
          </h2>
          <p className={styles.description}>
            PlaySquares is a Super Bowl-style game platform that needed smart, personalized invites, QR-powered onboarding, and viral sharing. EZLinks made it all happen — powering game board links, league invites, and player attribution.
          </p>
        </motion.div>

        <div className={styles.caseStudyContent}>
          <motion.div 
            className={styles.featuresSection}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.featureNavigation}>
              {caseStudyFeatures.map((feature) => (
                <button
                  key={feature.id}
                  className={`${styles.featurePill} ${
                    activeFeature === feature.id ? styles.active : ''
                  }`}
                  onClick={() => setActiveFeature(feature.id)}
                >
                  {feature.title}
                </button>
              ))}
            </div>

            <motion.div 
              className={styles.featureContent}
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className={styles.featureTitle}>{currentFeature.title}</h3>
              <p className={styles.featureDescription}>{currentFeature.description}</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.phoneDemo}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className={styles.phoneMockup}>
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={styles.phoneImageContainer}
              >
                <Image
                  src={currentFeature.imageSrc}
                  alt={currentFeature.imageAlt}
                  width={300}
                  height={600}
                  className={styles.phoneImage}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}