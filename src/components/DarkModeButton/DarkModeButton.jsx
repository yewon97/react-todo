import React from 'react';
import styles from './DarkModeButton.module.css';
import { MdDarkMode, MdBrightnessLow } from 'react-icons/md';
import { useDarkMode } from '../../context/DarkModeContext';

export default function DarkModeButton() {
	const {darkMode, toggleDarkMode} = useDarkMode();

  if (darkMode) {
    return (
      <button type="button" className={styles.button} title="라이트 모드" onClick={toggleDarkMode}>
        <MdBrightnessLow />
      </button>
    );
  } else {
    return (
      <button type="button" className={styles.button} title="다크 모드" onClick={toggleDarkMode}>
        <MdDarkMode />
      </button>
    );
  }
}
