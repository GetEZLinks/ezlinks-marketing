'use client'
// components/ScrollingCards/ScrollingCards.jsx
// import { useEffect, useRef, useState } from 'react';
// import styles from './ScrollingCards.module.scss';
'use client'
import React, { useRef, useEffect, useState } from 'react';
import styles from './ScrollingCards.module.scss';

interface UseCase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  icon: string;
  bgImage: string;
}


const useCases: UseCase[] = [
    {
      id: 'sports-gaming',
      title: 'Fantasy Sports',
      subtitle: 'Fantasy leagues and tournaments',
      description: 'QR code team invites, league attribution tracking, and viral game sharing.',
      benefits: ['PlaySquares integration', 'Tournament brackets', 'Team invites', 'Score tracking'],
      icon: '🎮',
      bgImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop'
    },
    {
      id: 'telehealth',
      title: 'Telehealth',
      subtitle: 'Medical appointments and care',
      description: 'Secure patient onboarding, appointment deep links, and provider attribution.',
      benefits: ['Appointment booking', 'Patient flows', 'Provider tracking', 'Secure routing'],
      icon: '🏥',
      bgImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop'
    },
    {
      id: 'transportation',
      title: 'Transportation',
      subtitle: 'Parking, trains, and rideshare',
      description: 'Smart parking location sharing, train booking flows, and rideshare attribution.',
      benefits: ['Parking spots', 'Train bookings', 'Rideshare links', 'Route optimization'],
      icon: '🚗',
      bgImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      subtitle: 'Product shares and referrals',
      description: 'Product deep links, wishlist sharing, and referral program attribution.',
      benefits: ['Product shares', 'Wishlist links', 'Referral tracking', 'Cart recovery'],
      icon: '🛒',
      bgImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
    },
    {
      id: 'food-hospitality',
      title: 'Food & Hospitality',
      subtitle: 'Restaurants and events',
      description: 'Restaurant reservations, food delivery attribution, and event RSVP tracking.',
      benefits: ['Reservations', 'Delivery tracking', 'Event RSVPs', 'Menu sharing'],
      icon: '🍽️',
      bgImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      subtitle: 'Property listings and tours',
      description: 'Property deep links, virtual tour attribution, and agent referral tracking.',
      benefits: ['Property listings', 'Virtual tours', 'Agent referrals', 'Lead tracking'],
      icon: '🏠',
      bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop'
    },
    {
      id: 'financial',
      title: 'Financial Services',
      subtitle: 'Banking and investments',
      description: 'Investment app referrals, banking sign-ups, and crypto wallet attribution.',
      benefits: ['App referrals', 'Account opening', 'Investment tracking', 'Crypto wallets'],
      icon: '💰',
      bgImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop'
    },
    {
      id: 'fitness',
      title: 'Health & Fitness',
      subtitle: 'Workouts and wellness',
      description: 'Workout class bookings, fitness challenges, and wellness app attribution.',
      benefits: ['Class bookings', 'Fitness challenges', 'Trainer links', 'Progress tracking'],
      icon: '💪',
      bgImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
    },
    {
      id: 'events',
      title: 'Events & Entertainment',
      subtitle: 'Tickets and experiences',
      description: 'Concert tickets, movie bookings, and festival pass attribution tracking.',
      benefits: ['Event tickets', 'Movie bookings', 'Festival passes', 'Experience sharing'],
      icon: '🎫',
      bgImage: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop'
    },
    {
      id: 'education',
      title: 'Education',
      subtitle: 'Learning and courses',
      description: 'Course enrollments, study group invites, and educational platform attribution.',
      benefits: ['Course enrollment', 'Study groups', 'Webinar links', 'Progress tracking'],
      icon: '📚',
      bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop'
    },
    {
      id: 'social',
      title: 'Social & Dating',
      subtitle: 'Connections and communities',
      description: 'Profile sharing, event invites, and social platform attribution tracking.',
      benefits: ['Profile shares', 'Event invites', 'Group chats', 'Social attribution'],
      icon: '💬',
      bgImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      subtitle: 'B2B and internal tools',
      description: 'Employee onboarding, internal tool attribution, and enterprise app linking.',
      benefits: ['Employee onboarding', 'Tool attribution', 'Internal linking', 'Analytics'],
      icon: '🏢',
      bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop'
    }
  ];

const ScrollingCards = () => {
  const scrollContainerRef = useRef <HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const progress = (scrollLeft / maxScroll) * 100;
        setScrollProgress(progress);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToCard = (direction: string) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth * 0.85;
      const gap = 32;
      const scrollAmount = cardWidth + gap;
      
      if (direction === 'left') {
        container.scrollTo({
          left: Math.max(0, container.scrollLeft - scrollAmount),
          behavior: 'smooth'
        });
      } else {
        container.scrollTo({
          left: Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + scrollAmount),
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Use Cases</h2>
        <div className={styles.navigation}>
          <button 
            className={styles.navButton}
            onClick={() => scrollToCard('left')}
            disabled={scrollProgress <= 1}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className={styles.navButton}
            onClick={() => scrollToCard('right')}
            disabled={scrollProgress >= 99}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={styles.scrollContainer} ref={scrollContainerRef}>
        <div className={styles.cardsWrapper}>
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={`${styles.card}`}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div 
                className={styles.cardImage}
                style={{ backgroundImage: `url(${useCase.bgImage})` }}
              />
                </div>
                
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{useCase.title}</h3>
                  <p className={styles.cardDescription}>{useCase.description}</p>
                  <ul className={styles.benefits}>
                  {useCase.benefits.map((benefit, index) => (
                    <li key={index} className={styles.benefit}>
                      {benefit}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.progressIndicator}>
        <div className={styles.progressTrack}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${Math.max(25, scrollProgress + 25)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollingCards;