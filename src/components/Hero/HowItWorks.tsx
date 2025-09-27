import styles from './HowItWorks.module.scss';
import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      icon: '/icons/code-block.svg',
      number: "1",
      title: "Immediate Sign up",
      description: "Connect your iOS or Android app once. We automatically generate and host the technical files needed for deep linking."
    },
    {
      icon: '/icons/qr-code.svg',
      number: "2", 
      title: "Create & Manage Your Links",
      description: "Generate branded short links and downloadable QR codes for any campaign, directly from your dashboard."
    },
    {
      icon: '/icons/analytics.svg',
      number: "3",
      title: "Gain Full Visibility", 
      description: "See every click, install, and conversion in real-time with developer-friendly logs."
    }
  ];

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>How It Works</h3>
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