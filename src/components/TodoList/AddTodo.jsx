import React from 'react';

export default function AddTodo() {
	const handleSubmit = (e) => {
	}

  return (
    <form onSubmit={handleSubmit} className={styles.inputBox}>
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
  );
}
