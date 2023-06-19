export default function todoReducer(todo, action) {
  console.log('todoReducer todo: ', todo);
  switch (action.type) {
    case 'update': {
    }
    case 'added': {
      const { newTodo } = action;
			console.log('newTodo: ', newTodo);
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
