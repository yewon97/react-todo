import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  const today = new Intl.DateTimeFormat('ko', { dateStyle: 'full' }).format(new Date());

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>{today}</h1>
      </header>
    </>
  );
}
