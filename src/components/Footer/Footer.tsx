import styles from './Footer.module.scss';
import Image from 'next/image';

const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
    { label: 'SDK', href: '#sdk' },
    { label: 'Demo', href: '#demo' }
  ],
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Contact us', href: '#contact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#blog' }
  ],
  Resources: [
    { label: 'Status', href: '#status' },
    { label: 'DPA', href: '#dpa' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' }
  ]
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <Image
                  src="/ezlinks-logo.svg"
                  alt='EZLinks logo'
                  height={32}
                  width={125}
                />
            </div>
            <p className={styles.tagline}>Your OS for User Growth</p>
          </div>

          <div className={styles.footerLinks}>
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className={styles.linkColumn}>
                <h4 className={styles.columnTitle}>{category}</h4>
                <ul className={styles.linkList}>
                  {links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className={styles.footerLink}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            Copyright © 2025 EZLinks Inc. All rights reserved.
          </p>
          <div className={styles.madeWith}>
            <span>Made with ❤️ for developers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}