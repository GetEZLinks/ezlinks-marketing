// app/terms/page.tsx
import React from 'react';
import styles from './Terms.module.scss';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const Terms = () => {
  const lastUpdated = "October 20, 2025";

  const sections = [
    {
      id: 1,
      title: "Use of Service",
      content: "You agree to use EZLinks in compliance with all applicable laws. You must not abuse, resell, or reverse-engineer the Service."
    },
    {
      id: 2,
      title: "Account Registration",
      content: "You’re responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately if you suspect any unauthorized use."
    },
    {
      id: 3,
      title: "Content and Ownership",
      content: "You retain all rights to your data. We may use aggregated, anonymized data to improve the Service."
    },
    {
      id: 4,
      title: "Termination",
      content: "We may suspend or terminate your account if you violate these Terms or abuse the platform."
    },
    {
      id: 5,
      title: "Limitation of Liability",
      content: "The Service is provided “as is.” EZLinks disclaims all warranties. We are not liable for indirect damages or data loss."
    },
    {
      id: 6,
      title: "Changes to Terms",
      content: "We may update these Terms. Continued use of the Service after updates constitutes acceptance."
    },
    {
      id: 7,
      title: "Governing Law",
      content: "These Terms are governed by the laws of the State of California, United States."
    },
    {
      id: 8,
      title: "Contact",
      content: (
        <>
          Questions about these Terms? Email us at{' '}
          <a href="mailto:support@getezlinks.com">support@getezlinks.com</a>
        </>
      )
    }
  ];

  return (
    <main className={styles.container}>
      <header>
        <h1>Terms of Service</h1>
        <p>Last updated: {lastUpdated}</p>
        <p>These Terms govern your access to and use of EZLinks (the “Service”). By using our Service, you agree to these Terms.</p>
      </header>

      <div className={styles.content}>
        {sections.map((section) => (
          <section key={section.id}>
            <h2>
              <span>{section.id}.</span> {section.title}
            </h2>
            <p>{section.content}</p>
          </section>
        ))}
      </div>

      <footer>
        &copy; {new Date().getFullYear()} EZLinks. All rights reserved.
      </footer>
    </main>
  );
};

export default function TermsPage() {
  return (
    <main>
      <Header />
      <Terms />  
      <Footer />
    </main>
  )
}
