// PricingGrid.tsx
import React from 'react';
import styles from './PricingGrid.module.scss';
import Link from 'next/link';

interface PricingTier {
  name: string;
  price: string;
  bestFor: string;
  credits: string;
  support: string;
  coreFeatures: string;
  attribution: string;
  advancedFeatures: string;
  domainStyle: string;
  cta: string;
  security: string;
  costPerLink: string;
}

const PricingGrid: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      name: 'Indie',
      price: 'Free forever',
      bestFor: 'For solo devs and early MVPs.',
      credits: '50,000',
      coreFeatures: 'Deferred deep links, shortlinks, QR codes, 1 team member, iOS/Android SDKs',
      domainStyle: 'Standard ezl.link subdomain',
      attribution: 'Basic Attribution (source)',
      advancedFeatures: '-',
      security: 'HIPAA',
      support: 'Email support',
      costPerLink: '~$1.00',
      cta: 'Start Free',
    },
    {
      name: 'Starter',
      price: '$99 /mo',
      bestFor: 'For shipping MVPs and small teams.',
      credits: '100,000',
      coreFeatures: 'Everything in Indie + Branded Links, 5 team members',
      domainStyle: 'Custom subdomains (links.nike.com)',
      attribution: 'Basic Attribution (source)',
      advancedFeatures: '30-day Data Retention',
      security: 'HIPAA',
      support: 'Email support',
      costPerLink: '~$1.00',
      cta: 'Start Free Trial'
    },
    {
      name: 'Growth',
      price: '$265 /mo ($199 /mo - yrly)',
      bestFor: 'Growing teams & agencies',
      credits: '250,000',
      coreFeatures: 'Everything in Starter, 10 team members, Webhooks, Full (campaigns) Attribution, SDKs for iOS/Android/Web',
      domainStyle: 'Custom subdomains',
      attribution: 'Full Attribution (campaigns)',
      advancedFeatures: '+ 90-day Data Retention',
      security: 'HIPAA',
      support: 'Priority Email',
      costPerLink: '~$0.40',
      cta: 'Start Free Trial',
    },
    {
      name: 'Scale',
      price: '$499 /mo',
      bestFor: 'Scaling startups & enterprises',
      credits: '500,000',
      coreFeatures: 'Everything in Growth, Unlimited team members, Custom integrations',
      domainStyle: 'Vanity domains (nike.swoosh)',
      attribution: 'Full Attribution (campaigns + user journey + data exports)',
      advancedFeatures: '+ SSO (SAML), Advanced Analytics Dashboards',
      security: 'HIPAA',
      support: '24/7 Slack Support',
      costPerLink: '~$0.20',
      cta: 'Start Free Trial',
    }
  ];

  const features = [
    { label: 'Price', key: 'price' },
    { label: 'Best for', key: 'bestFor' },
    { label: 'Volume credits', key: 'credits' },
    { label: 'Core Features', key: 'coreFeatures' },
    { label: 'Attribution', key: 'attribution' },
    { label: 'Domain Style', key: 'domainStyle' },
    { label: 'Advanced Features', key: 'advancedFeatures' },
    { label: 'Security', key: 'security' },
    { label: 'Support', key: 'support' },
    // { label: 'Cost per 1k Links', key: 'costPerLink' },
    { label: '', key: 'cta' },
  ];

  return (
    <div className={styles.pricingContainer}>
      <div className={styles.pricingGrid}>
        {/* Header Row */}
        <div className={styles.headerRow}>
          <div className={styles.featureCell}></div>
          {tiers.map((tier) => (
            <div key={tier.name} className={styles.tierHeader}>
              <h2>{tier.name}</h2>
            </div>
          ))}
        </div>

        {/* Feature Rows */}
        {features.map((feature) => (
          <div key={feature.key} className={styles.featureRow}>
            <div className={styles.featureLabel}>
              <b>{feature.label}</b>
            </div>
            {tiers.map((tier) => (
              <div key={`${tier.name}-${feature.key}`} className={styles.tierCell}>
                {feature.key === 'price' && (
                  <div className={styles.price}>{tier[feature.key as keyof PricingTier]}</div>
                )}
                {feature.key === 'cta' && (
                  <Link
                    href={`https://dash.getezlinks.io/auth?mode=register&plan=${tier.name.toLowerCase()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  > 
                  <button className="btn primary">
                     {tier[feature.key as keyof PricingTier]} 
                    </button>
                  </Link>
                )}
                {feature.key !== 'price' && feature.key !== 'cta' && (
                  <div className={styles.cellContent}>
                    {tier[feature.key as keyof PricingTier]}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingGrid;