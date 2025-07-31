'use client';
import { motion } from 'framer-motion';
import styles from './PricingSection.module.scss';

const pricingPlans = [
  {
    name: 'Indie',
    description: 'Perfect for solo developers and side projects',
    price: 'Free',
    period: 'Forever',
    features: [
      '5k deep links per month',
      'Full-featured link management',
      'Up to 3 apps',
      'Complete analytics suite',
      'SDK Access',
      '1 team member (just you)',
      '1 projects/app',
      'Custom domains'
    ],
    popular: false
  },
  {
    name: 'Growth',
    description: 'Perfect for small teams, growing startups, and agencies',
    price: '$99',
    period: 'per month',
    features: [
      '50K deep links per month',
      'Up to 10 apps',
      'Advanced analytics dashboard',
      'Custom link domains',
      'Basic attribution tracking',
      'More projects/apps (10+)',
      'Email support',
      'SDK for iOS/Android/Web',
      'Webhook integrations'
    ],
    popular: true
  },
  {
    name: 'Pro',
    description: 'For growing startups and funded companies',
    price: '$199',
    period: 'per month',
    features: [
      '100K deep links per month',
      'Enterprise features',
      'Unlimited everything',
      'Complete analytics suite',
      'SDK Access',
      'SSO integration',
      'Custom integrations',
      'Dedicated support'
    ],
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className={styles.pricingSection}>
      <div className="container">
        <motion.div 
          className={styles.pricingHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>Simple, transparent pricing</h2>
          <p className={styles.subtitle}>
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                
                <div className={styles.priceSection}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
                
                <motion.button 
                  className={`btn ${plan.popular ? 'primary' : 'secondary'}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Free
                </motion.button>
              </div>

              <div className={styles.featuresList}>
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className={styles.feature}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.pricingFooter}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>Need something custom? <a href="#contact">Let&apos;s talk</a></p>
        </motion.div>
      </div>
    </section>
  );
}