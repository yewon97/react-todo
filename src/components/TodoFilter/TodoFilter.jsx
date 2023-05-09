import React from 'react';
import styles from './TodoFilter.module.css';

export default function TodoFilter({
  filters,
  filter,
  counts,
  onFilterChange,
}) {
  return (
    <ul className={styles.filters}>
      {filters.map((value, index) => (
        <li key={index}>
          <button
            type="button"
            className={`${styles.filter} ${
              filter === value && styles.selected
            }`}
            onClick={() => onFilterChange(value)}
          >
            {value} ( {counts[value]} )
          </button>
        </li>
      ))}
    </ul>
  );
}
