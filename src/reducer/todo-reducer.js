export default function todoReducer(todos, action) {
  const { payload } = action;
  switch (action.type) {
    case 'update': {
      return todos.map((t) => (t.id === payload.id ? payload : t));
    }
    case 'added': {
      return [...todos, payload];
    }
    case 'deleted': {
      return todos.filter((t) => t.id !== payload.id);
    }
    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }
  }
}
