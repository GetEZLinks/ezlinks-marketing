import styles from './HowItWorks.module.scss';
import Image from 'next/image';

export default function HowItWorks() {
  const steps = [
    {
      icon: '/icons/code-block.svg',
      number: "1",
      title: "Configure Your App in Minutes",
      description: "Connect your iOS or Android app once. We automatically generate and host the technical files needed for deep linking."
    },
    {
      icon: '/icons/deep-links.svg',
      number: "2", 
      title: "Create Links Instantly",
      description: "Generate branded short links and downloadable QR codes for any campaign, directly from your dashboard."
    },
    {
      icon: '/icons/edge-deploy.svg',
      number: "3",
      title: "We Handle the Complex Plumbing", 
      description: "From smart routing to real-time attribution, we manage the infrastructure so you can focus on your product."
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