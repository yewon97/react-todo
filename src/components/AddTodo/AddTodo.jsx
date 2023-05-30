import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdCancel } from 'react-icons/md';
import styles from './AddTodo.module.css'

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
		const newText = text.trim();
    onAdd({ id: uuidv4(), text: newText, status: 'active' });
    if (text.trim().length === 0) {
      return;
    }
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="text1"
        id="text1"
				className={styles.input}
        placeholder="Add Todo"
        value={text}
        onChange={handleChange}
      />
      {text.length ? (
        <button
          type="button"
          title="지우기"
					className={styles['btn-remove']}
          onClick={() => {
            setText('');
          }}
        >
          <MdCancel />
        </button>
      ) : null}
      <button type="button" className={styles['btn-add']} onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
