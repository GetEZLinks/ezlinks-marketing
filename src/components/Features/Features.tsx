'use client';
import { motion } from 'framer-motion';
import styles from './Features.module.scss';
import Image from 'next/image';

import DeepLinksIcon from '../../../public/icons/deep-links.svg';
import APIIcon from '../../../public/icons/source-code.svg';
import AttributionIcon from '../../../public/icons/source-attribution.svg';
import QRCodeIcon from '../../../public/icons/qr-code.svg';
import ForeverIcon from '../../../public/icons/forever.svg';
import MicroservicesIcon from '../../../public/icons/microservices.svg';
import EdgeDeployementIcon from '../../../public/icons/edge-deploy.svg';

const features = [
  {
    icon: DeepLinksIcon,
    title: 'Frictionless Deep Linking',
    description: 'Automatically generate and host your AASA and assetlinks.json files. No manual setup, no server configuration. It just works.'
  },
  {
    icon: APIIcon,
    title: 'One API, Full Stack',
    description: 'Complete attribution for iOS, Android, and Web. No need to integrate Branch + PostHog + separate attribution service.'
  },
  {
    icon: AttributionIcon,
    title: 'Real-time Attribution',
    description: 'Real-time vs batch: See conversions as they happen, not hours later. Make decisions on live data, not yesterday\'s reports'
  },
  // {
  //   icon: AnalyticsIcon,
  //   title: 'Clean analytics',
  //   description: 'See what matters Simple dashboard showing where users actually come from.'
  // },
  {
    icon: ForeverIcon,
    title: 'Forever links',
    description: 'Your deep links work permanently. No link rot, no expired URLs, no broken user experiences.'
  },
  {
    icon: MicroservicesIcon,
    title: 'Microservices Built to scale',
    description: 'Modular stack means you only pay for what you use. Add features without rebuilding. Scale components independently.'
  },
  {
    icon: EdgeDeployementIcon,
    title: 'Edge deployment',
    description: 'Edge routing means your users convert before they bounce. Every 100ms delay costs 1% conversion rate.'
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
            Fast Launches and Real Growth
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
                <Image
                  src={feature.icon}
                  alt=""
                  height={20}
                  width={20}
                />
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