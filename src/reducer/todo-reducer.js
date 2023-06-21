export default function todoReducer(todos, action) {
  const { id, status, current, text } = action;

  switch (action.type) {
    case 'update':
      return todos.map((todo) => (todo.id === id ? { ...todo, status } : todo));

    case 'modify':
      return todos.map((todo) =>
        todo.id === id ? { ...todo, text: current } : todo,
      );

    case 'add':
      return [...todos, { id, text, status }];

    case 'delete':
      return todos.filter((todo) => todo.id !== id);

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}
