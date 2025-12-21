// components/UseCases/UseCases.tsx
'use client';

import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './UseCases.module.scss';

interface UseCase {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  icon: string;
  bgImage: string;
}

const UseCases: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const useCases: UseCase[] = [
    {
      id: 'sports-gaming',
      title: 'Sports & Gaming',
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

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const scrollAmount = 320; // Card width + gap
    const newScrollLeft = direction === 'left' 
      ? scrollRef.current.scrollLeft - scrollAmount
      : scrollRef.current.scrollLeft + scrollAmount;
    
    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  return (
    <section className={styles.useCases}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Explore our use cases</h2>
          <div className={styles.controls}>
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`${styles.scrollButton} ${!canScrollLeft ? styles.disabled : ''}`}
              aria-label="Scroll left"
            >
              <ChevronLeft className={styles.icon} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`${styles.scrollButton} ${!canScrollRight ? styles.disabled : ''}`}
              aria-label="Scroll right"
            >
              <ChevronRight className={styles.icon} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className={styles.scrollContainer}
          onScroll={handleScroll}
        >
          {useCases.map((useCase) => (
            <div key={useCase.id} className={styles.card}>
              <div 
                className={styles.cardImage}
                // style={{ backgroundImage: `url(${useCase.bgImage})` }}
              >
                <div className={styles.overlay}>
                  <div className={styles.icon}>{useCase.icon}</div>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{useCase.title}</h3>
                <p className={styles.cardSubtitle}>{useCase.subtitle}</p>
                <p className={styles.description}>{useCase.description}</p>
                <ul className={styles.benefits}>
                  {useCase.benefits.map((benefit, index) => (
                    <li key={index} className={styles.benefit}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;