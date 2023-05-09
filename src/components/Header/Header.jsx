import React from 'react';
import styles from './Header.module.css';

const today = new Intl.DateTimeFormat('ko', { dateStyle: 'full' }).format(
  new Date(),
);

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>{today}</h1>
      </header>
    </>
  );
}
