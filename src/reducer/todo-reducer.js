export default function todoReducer(todo, action) {
  switch (action.type) {
    case 'update': {
    }
    case 'added': {
      const { newTodo } = action;
      return [
				...todo,
				newTodo
			]
    }
    case 'deleted': {
    }
    default: {
    }
  }
}
