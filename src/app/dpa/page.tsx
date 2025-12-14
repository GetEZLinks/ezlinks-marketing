// app/dpa/page.tsx
import React from 'react';
import styles from './DPA.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const DPA = () => {
  return (
    <article className={styles.container}>
      <header>
        <h1>Data Processing Agreement</h1>
        <div className={styles.dateBadge}>Effective: May 28, 2025</div>
      </header>

      <div className={styles.intro}>
        This Data Processing Agreement (“DPA”) is entered into between the Customer (“Controller”) 
        and EZLinks (“Processor”), in relation to the processing of personal data in accordance 
        with applicable data protection laws, including the GDPR.
      </div>

      <div className={styles.content}>
        <section className={styles.legalSection}>
          <h2>1. Subject Matter</h2>
          <p>
            This DPA governs the processing of personal data by EZLinks in the provision 
            of its deep linking, attribution, and analytics services (the “Services”).
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>2. Roles of the Parties</h2>
          <p><strong>Controller:</strong> The Customer</p>
          <p><strong>Processor:</strong> EZLinks</p>
          <p>EZLinks processes personal data only on behalf of and in accordance with the Controller’s instructions.</p>
        </section>

        <section className={styles.legalSection}>
          <h2>3. Scope of Processing</h2>
          <h3>Categories of Data Subjects</h3>
          <p>End-users of Customer applications.</p>
          <h3>Types of Data</h3>
          <ul>
            <li>IP addresses and user agent strings</li>
            <li>App usage metrics and referral sources</li>
            <li>Device identifiers for attribution</li>
          </ul>
          <h3>Processing Activities</h3>
          <p>Collection, storage, aggregation, analytics, and reporting.</p>
        </section>

        <section className={styles.legalSection}>
          <h2>4. Confidentiality</h2>
          <p>
            EZLinks ensures that all personnel authorized to process personal data are 
            bound by confidentiality obligations or statutory secrecy duties.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>5. Subprocessors</h2>
          <p>
            EZLinks may use third-party subprocessors for infrastructure (Google Cloud). 
            A list of current subprocessors can be requested at:{' '}
            <a href="mailto:privacy@getezlinks.com">support@getezlinks.com</a>.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>6. Data Security</h2>
          <p>
            EZLinks implements appropriate technical and organizational security measures 
            to ensure data protection, including encryption at rest and in transit, 
            access control, and activity monitoring.
          </p>
        </section>

        <section className={styles.legalSection}>
          <h2>12. Contact</h2>
          <p>
            For DPA-related queries, please contact our privacy team at:{' '}
            <a href="mailto:privacy@getezlinks.com">support@getezlinks.com</a>
          </p>
        </section>
      </div>

      <footer>
        &copy; {new Date().getFullYear()} EZLinks Inc. All rights reserved.
      </footer>
    </article>
  );
};


export default function DPAPage() {
  return (
    <main>
      <Header />
      <DPA />  
      <Footer />
    </main>
  )
};