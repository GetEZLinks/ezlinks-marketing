import styles from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  Product: [
    // { label: 'Features', href: '#features' },
    { label: 'Pricing', href: 'pricing', target: '' },
    { label: 'Docs', href: 'https://docs.getezlinks.io', target: '_blank' },
    { label: 'SDK', href: 'https://docs.getezlinks.io/sdk', target: '_blank' },
    // { label: 'Demo', href: '#demo' },
  ],
  Company: [
    { label: 'About', href: '#about', target: '' },
    { label: 'Contact', href: '/contact', target: '' },
    { label: 'FAQ', href: '/contact/#faq', target: '' },
    // { label: 'Blog', href: '#blog' }
  ],
  Resources: [
    { label: 'Status', href: '#status', target: '' },
    { label: 'DPA', href: 'dpa', target: '' },
    { label: 'Privacy', href: 'privacy', target: '' },
    { label: 'Terms', href: 'terms', target: '' }
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
                  src="/logo/ezlinks.svg"
                  alt='EZLinks logo'
                  height={32}
                  width={150}
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
                      <Link target={link.target} href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
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