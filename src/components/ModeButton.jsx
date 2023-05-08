import React, { useState } from 'react';
import styles from './ModeButton.module.css';
import { MdDarkMode, MdBrightnessLow } from 'react-icons/md';

export default function ModeButton() {
  const [mode, setMode] = useState(true);

  if (mode) {
    return (
      <button type="button" className={styles.button} title="라이트 모드" onClick={() => setMode(false)}>
        <MdBrightnessLow />
      </button>
    );
  } else {
    return (
      <button type="button" className={styles.button} title="다크 모드" onClick={() => setMode(true)}>
        <MdDarkMode />
      </button>
    );
  }
}
