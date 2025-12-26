import styles from './HowItWorks.module.scss';
import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      icon: '/icons/code-block.svg',
      number: "1",
      title: "Integrate in minutes",
      description: "Drop in the unified SDK, test, and ship your app today. We dynamically serve the AASA and assetlinks files for you."
    },
    {
      icon: '/icons/deep-links.svg',
      number: "2", 
      title: "Launch Your Links",
      description: "Generate smartlinks via API or Dashboard. Our edge network resolves routing logic in <100ms, handling fallback flows automatically."
    },
    {
      icon: '/icons/analytics.svg',
      number: "3",
      title: "Get Clear Insights", 
      description: "Trace the user journey from click to conversion. Get real- time logs, probabilistic matching data, and sources data out of the box."
    }
  ];

  return (
    <section className={styles.section}>
      <h4 className={styles.title}>How It Works</h4>
      <div className={styles.grid}>
        {steps.map((step) => (
          <div key={step.number} className={styles.card}>
            <Image
              src={step.icon}
              alt="Step Icons"
              height={24}
              width={24}
              style={{
                marginBottom: "1rem"
              }}
            />
            <h4 className={styles.cardTitle}>{step.number}. {step.title}</h4>
            <p className={styles.cardDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}