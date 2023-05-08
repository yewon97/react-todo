import React, { useEffect, useState } from 'react';
import styles from './AppToDo.module.css';
import { MdDeleteForever, MdCancel, MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdEditSquare } from 'react-icons/md';

export default function AppToDo() {
  const [input, setInput] = useState('');
  const [lists, setLists] = useState(() => JSON.parse(window.localStorage.getItem('todos')) || []);
  const [status, setStatus] = useState('All');

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(lists));
  }, [lists]);

  const handleAdd = () => {
    if (input === '') {
      return;
    }
    const todo = input.trim();
    const id = Date.now();
    const checked = false;

    setLists((prevLists) => [...prevLists, { id, todo, checked }]);
    setInput('');
  };

  const handleDelete = (id) => {
    setLists((prevLists) => prevLists.filter((list) => list.id !== id));
  };

  const handleUpdate = (id) => {
    const todo = prompt(`수정해주세요.`);

    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === id) {
          return { ...list, todo };
        }
        return list;
      }),
    );
  };

  const handleCheck = (id, newChecked) => {
    setLists((prevLists) =>
      prevLists.map((list) => {
        if (list.id === id) {
          return { ...list, checked: newChecked };
        }
        return list;
      }),
    );
  };

  const filteredLists = (() => {
    switch (status) {
      case 'All':
        return lists;
      case 'Active':
        return lists.filter((list) => !list.checked);
      case 'Completed':
        return lists.filter((list) => list.checked);
      default:
        return lists;
    }
  })();

  return (
    <div className={styles.container}>
      <div className={styles.header}>ToDo List</div>
      <ul className={styles.tab}>
        <li className={`${styles.tabItem}`}>
          <button type="button" className={`${styles.tabButton} ${status === 'All' ? styles.tabActive : ''}`} onClick={() => setStatus('All')}>
            All({lists.length})
          </button>
        </li>
        <li className={styles.tabItem}>
          <button type="button" className={`${styles.tabButton} ${status === 'Active' ? styles.tabActive : ''}`} onClick={() => setStatus('Active')}>
            Active({lists.filter((list) => !list.checked).length})
          </button>
        </li>
        <li className={styles.tabItem}>
          <button type="button" className={`${styles.tabButton} ${status === 'Completed' ? styles.tabActive : ''}`} onClick={() => setStatus('Completed')}>
            Completed({lists.filter((list) => list.checked).length})
          </button>
        </li>
      </ul>

      <div className={styles.toDoBox}>
        <ul className={styles.toDoList}>
          {filteredLists.map(({ id, todo, checked }) => {
            return <ToDoItem key={id} id={id} title={todo} handleDelete={handleDelete} handleUpdate={handleUpdate} handleCheck={handleCheck} checked={checked} />;
          })}
        </ul>
      </div>
      <form className={styles.inputBox}>
        <input
          type="text"
          name="input1"
          id="input1"
          maxLength={100}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (e.nativeEvent.isComposing) return;
              handleAdd();
            }
          }}
        />
        {input.length ? (
          <button
            type="button"
            className={styles.btnRemove}
            title="지우기"
            onClick={() => {
              setInput('');
            }}
          >
            <MdCancel />
          </button>
        ) : null}
        <button type="button" className={styles.btnAdd} onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
}

function ToDoItem({ id, title, handleDelete, handleUpdate, handleCheck, checked }) {
  const [localChecked, setLocalChecked] = useState(checked);

  const handleCheckboxChange = (event) => {
    const { checked: newChecked } = event.target;
    setLocalChecked(newChecked);
    handleCheck(id, newChecked);
  };

  return (
    <li>
      <div className={styles.toDoContent}>
        <div className={styles.checkbox}>{localChecked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}</div>
        <input type="checkbox" name={`chk1${id}`} id={`chk1${id}`} checked={localChecked} onChange={handleCheckboxChange} />
        <label htmlFor={`chk1${id}`}>{title}</label>
      </div>
      <div>
        <button
          type="button"
          className={styles.btnDelete}
          title="수정하기"
          onClick={() => {
            handleUpdate(id);
          }}
        >
          <MdEditSquare />
        </button>
        <button
          type="button"
          className={styles.btnDelete}
          title="삭제하기"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
}
