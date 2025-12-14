// app/privacy/page.tsx
import React from 'react';
import styles from './Privacy.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const PrivacyPolicy = () => {
  const effectiveDate = "May 28, 2025";

  return (
    <main className={styles.container}>
      <header>
        <h1>Privacy Policy</h1>
        <p className={styles.meta}>Effective Date: {effectiveDate}</p>
      </header>

      <div className={styles.content}>
        <p>
          At EZLinks, we are committed to protecting your privacy. This Privacy Policy explains 
          how we collect, use, and protect your information when you use our website, 
          dashboard, and associated services (the “Platform”).
        </p>

        <section>
          <h2>1. Information We Collect</h2>
          <ul>
            <li><strong>Account Information:</strong> Name, email, password, and company info (if applicable).</li>
            <li><strong>App Metadata:</strong> Domains, short link usage, and attribution analytics data.</li>
            <li><strong>Usage Data:</strong> Log files, browser information, IP address, cookies.</li>
            <li><strong>Optional:</strong> Contact forms and email interactions.</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To provide and improve the Platform</li>
            <li>To respond to customer support requests</li>
            <li>To monitor usage and prevent abuse</li>
            <li>To communicate updates or new features</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Sharing</h2>
          <p>
            We do not sell your data. We may share information with trusted service providers 
            solely for operating our infrastructure (e.g., cloud hosting, analytics). 
            These partners are contractually obligated to safeguard your data.
          </p>
        </section>

        <section>
          <h2>4. Cookies</h2>
          <p>
            We use cookies and similar technologies to improve your experience. You can 
            control cookie settings via your browser.
          </p>
        </section>

        <section>
          <h2>5. Data Retention</h2>
          <p>
            We retain your information as long as your account is active or as needed 
            to comply with legal obligations.
          </p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, 
            or restrict the use of your data.
          </p>
        </section>

        <section>
          <h2>7. Security</h2>
          <p>
            We use industry-standard security protocols to protect your information, 
            including encryption and secure server environments.
          </p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>
            For privacy-related inquiries, contact:{' '}
            <a href="mailto:privacy@getezlinks.com">support@getezlinks.com</a>
          </p>
        </section>
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} EZLinks. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <PrivacyPolicy />  
      <Footer />
    </main>
  )
}
