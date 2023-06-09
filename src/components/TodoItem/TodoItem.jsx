import React from 'react';
import styles from './TodoItem.module.css';
import {
  MdDeleteForever,
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdEditSquare,
} from 'react-icons/md';

export default function TodoItem({ todo, dispatch }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
		dispatch({ type: 'update', id, status });
  };
  const handleDelete = () => dispatch({ type: 'delete', id });
  const handleModify = () => {
    const current = prompt('수정할 목록 내용을 입력해주세요.');
		dispatch({ type: 'modify', id, current });
  };
  return (
    <li className={styles.todo}>
      <label
        htmlFor={id}
        className={`${styles.text} ${
          status === 'completed' ? styles.middleline : ''
        }`}
      >
        <div className={styles.checkbox}>
          {status === 'completed' ? (
            <MdOutlineCheckBox />
          ) : (
            <MdOutlineCheckBoxOutlineBlank />
          )}
        </div>
        <input
          type="checkbox"
          className={styles['default-checkbox']}
          name={id}
          id={id}
          checked={status === 'completed'}
          onChange={handleChange}
        />
        {text}
      </label>
      <div className={styles['btn-wrapper']}>
        <button
          type="button"
          title="수정하기"
          onClick={handleModify}
          className={styles.button}
        >
          <MdEditSquare />
        </button>
        <button
          type="button"
          title="삭제하기"
          onClick={handleDelete}
          className={styles.button}
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
}
