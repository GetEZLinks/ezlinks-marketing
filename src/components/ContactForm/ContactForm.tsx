'use client';

import { useState } from 'react';

// import { validateEmail } from '@/lib/utils';
import styles from './ContactForm.module.scss';
import Link from 'next/link';
import {  LinkIcon } from 'lucide-react';


export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
  // useCase?: string;
  // tools?: string[];
}

const ContactForm = () => {

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const error = await response.json();
        alert(error.error || 'Something went wrong');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
      console.log('Something went wrong. Please try again.', error);
    } finally {
      setIsSubmitting(false);
    }
};

  return (

    <section id="contact" className={styles.contactForm}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <LinkIcon size={24} color="#8b5cf6" />
            <h2 className={styles.title}>Talk to Us</h2>
            <p className={styles.subtitle}>
              Move to a smarter way of deep linking and attribution. Schedule a demo or
              see how EZLinks can boost conversions and save your team time.
            </p>
            <div className={styles.benefits}>
              <div className={styles.benefit}>✓ Create, manage, and route links that work across web and mobile</div>
              <div className={styles.benefit}>✓ Send users to the right app screen or fallback automatically</div>
              <div className={styles.benefit}>✓ See what links drive installs, opens, and conversions</div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            {isSubmitted && (
              <div className={styles.formAlert}>
                <p>
                  🚀 Email sent. Someone from our team will reach out to you soon.
                </p>
              </div>
            )}
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                // placeholder="John Doe"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name *</label>
              <input
                type="text"
                id="lastName"
                required
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                // placeholder="Doe"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Work Email *</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                // placeholder="name@company.com"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="company">Company or App Name</label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                // placeholder="Your Company"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">How can we help you? *</label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            
            <p className={styles.privacyNote}>
              By submitting, you consent to agree with 
                  EZLinks <Link target="_blank" href='terms'>Terms of Use</Link> and <Link target="_blank" href='/privacy'>Privacy Policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;