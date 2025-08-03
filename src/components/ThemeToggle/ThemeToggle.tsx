// src/components/ThemeToggle/ThemeToggle.tsx
'use client';
import { useTheme } from '@/hooks/useTheme';
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <button 
      className={styles.themeToggle}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
