# React로 TODO APP 만들기
---

### [ToDo App](https://yewon-todoapp.netlify.app/){:target="_blank"}

<img src="/public/images/index.jpg">

<br />

- 리액트를 이용해 만들어 본 TODO APP. 
- Todo 항목을 추가, 삭제, 수정하고 필터링할 수 있고, 다크모드를 이용할 수 있습니다.

## 기능
- Todo 항목 추가: 사용자는 텍스트 입력 필드를 통해 새로운 Todo를 작성하여 추가할 수 있습니다.
- Todo 항목 삭제: 사용자는 삭제 버튼을 클릭하여 특정 Todo 항목을 제거할 수 있습니다.
- Todo 항목 수정: 사용자는 수정 버튼을 클릭하여 Todo 항목의 내용을 변경할 수 있습니다.
- Todo 항목 저장: Todo 항목은 localStorage에 저장되어 새로고침을 해도 이전 데이터를 가져올 수 있습니다.
- Todo 항목 필터링: 사용자는 여러 필터 옵션 중 하나를 선택하여 해당 상태의 Todo 항목만 보여줄 수 있습니다.
- 다크 모드: 애플리케이션은 다크 모드와 라이트 모드를 지원합니다. 사용자는 토글 버튼을 통해 모드를 변경할 수 있습니다.

## 컴포넌트 구성
Todo 앱은 다음과 같은 컴포넌트들로 구성되어 있습니다:
- App: Todo 앱의 최상위 컴포넌트로, 초기 Todo 항목들을 localStorage에서 읽어오고, 화면에 렌더링해줍니다. 또한 Todo 항목을 관리하고 필터링하는 기능을 제공합니다.
- Header: 현재 날짜를 표시하는 헤더 컴포넌트입니다.
- AddTodo: 새로운 Todo 항목을 추가하는 컴포넌트입니다. 사용자는 텍스트 입력 필드에 Todo를 작성하여 추가할 수 있습니다.
- TodoList: Todo 항목을 표시하는 컴포넌트입니다. Todo 항목의 추가, 수정, 삭제 기능을 제공하며, 필터링된 항목들을 보여줍니다.
- Todo: 개별 Todo 항목을 표시하고 관리하는 컴포넌트입니다. 사용자는 Todo 항목의 체크 상태를 변경하거나 삭제할 수 있으며, 항목 내용을 수정할 수도 있습니다.
- TodoFilter: Todo 항목을 필터링하는 컴포넌트입니다. 사용자는 여러 필터 옵션 중 하나를 선택하여 Todo 항목을 필터링할 수 있습니다.
- DarkModeButton: 다크 모드와 라이트 모드 전환 버튼을 제공하는 컴포넌트입니다. 사용자는 버튼을 클릭하여 애플리케이션의 모드를 변경할 수 있습니다.

## 사용된 기술
- useState: App 컴포넌트에서 todos, filter 상태를 관리하기 위해 useState를 사용하였습니다. 상태 업데이트 함수를 통해 상태를 변경하고, 해당 상태를 컴포넌트에 반영했습니다.
- useEffect: App 컴포넌트에서 todos 상태가 변경될 때마다 localStorage에 해당 데이터를 저장하도록 useEffect를 사용했습니다.
- PostCSS를 사용해 `import styles from './FileName.module.css';` 컴포넌트별로 별도의 CSS 파일을 생성하고, import 문을 사용하여 해당 CSS 모듈을 컴포넌트에 적용했습니다. 이를 통해 CSS 스타일이 컴포넌트 스코프 내에서 유지되어, 스타일 충돌을 방지하고 재사용성을 높였습니다.
- createContext 및 useContext: DarkModeContext 컨텍스트를 생성하고, useContext를 통해 다크 모드 상태 및 상태 변경 함수를 컴포넌트에서 사용할 수 있도록 했습니다. 이를 통해 애플리케이션 전체에서 다크 모드 상태를 공유하고 관리할 수 있습니다.
- readTodosFromLocalStorage 함수를 사용하여 todos 데이터를 localStorage에 저장하고 불러왔습니다. setItem을 통해 데이터를 저장하고, getItem을 통해 데이터를 불러왔습니다. 이를 통해 새로고침해도 데이터를 유지할 수 있었습니다.
- [개선] useReducer: todoReducer 함수와 함께 useReducer 훅을 사용하여 상태 관리에 활용했습니다. useReducer를 통해 액션에 따라 상태를 업데이트하고 반환하는 방식으로 상태 관리를 구현했습니다. 이를 통해 상태 업데이트 로직을 중앙 집중화하고, 컴포넌트 간의 상태 공유를 용이하게 했습니다.