import { Button, Input, ToDoItem } from "Components/index";
import React, { Component } from "react";
import Styled from "styled-components";
// import type { IScriptSnapshot } from "typescript";


const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const ToDoListContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`;

interface Props {};
interface State {
  readonly toDo: string;
  readonly toDoList: string[];
}

class App extends Component<Props, State> {
  /** constructor 함수
   * 클래스 컴포넌트는 클래스이므로 생성자 함수 존재
   * 그러나 클래스 컴포넌트에서 State를 사용하지 않아 상태 초기값이 필요하지 않다면 생성자 함수 생략 가능
   * 생성자 함수를 사용할 땐 반드시 super(props) 함수를 호출해서 부모 클래스의 생성자를 호출해야 함
   * 생성자 함수는 해당 컴포넌트가 생성될 때 한 번만 호출됨
   */
  constructor(props:Props) {
    super(props)

    this.state = {
      toDo: '',
      toDoList: []
    }
  }

  private addToDo = (): void => {
    const {toDo, toDoList} = this.state;
    if(toDo) {
      this.setState({
        toDo: '',
        toDoList: [...toDoList, toDo]
      })
    }
  }


    private deleteToDo = (index: number): void => {
      let list = [...this.state.toDoList];
      list.splice(index, 1)
      this.setState({
        toDoList: list,
      })
  }

  /** render 함수
   * 이 함수는 클래스 함수가 렌ㄷ링되는 부분 (화면에 표시되는 부분)을 정의
   * 즉, 이 render 함수의 반환값이 화면에 표시됨
   * render함수는 부모 컴포넌트로부터 받는 Props값이 변경, 또는 this.setState에 의해 State 값이
   * 변경되어 화면 갱신 필요가 있을 때마다 호출됨
   * 
   * 따라서 render함수에서 this.setState를 사용해 직접 상태값을 바꿀 경우 무한 루프에 빠질 위험 주의
   * 이 예제에서는 클릭 이벤트와 연결하여 클릭 이벤트가 발생할 때만 this.setState가 호출되므로 무한루프 가능성 제거
   */
  render() {
    const {toDo, toDoList} = this.state;

    return (
      <Container>
        <Contents>
          <ToDoListContainer data-testid="toDoList">
            {toDoList.map((item, index) => (
              <ToDoItem key={item} label={item} onDelete={() => this.deleteToDo(index)} />
            ))}
          </ToDoListContainer>
          <Input
          placeholder="할 일을 입력해 주세요."
          value={toDo}
          onChange={(text) => this.setState({ toDo: text})} />
          <Button label="추가" onClick={this.addToDo} />
        </Contents>
      </Container>
    )
  }

  /** getDerivedStateFromProps 함수
   * 이 함수는 부모로부터 받은 Props와 State를 동기화할 때 사용됨
   * 부모로부터 받은 Props로 State에 값을 설정하거나, State값이 Props에 의존하여 결정될 때 사용
   * 
   * State에 설정하고 싶은 값을 반환해주고, 동기화할 State가 없으면 null을 반환하면 됨
   */
  // static getDerivedStateFromProps(nextProps: Props, prevState: State) {
  //   console.log('getDerivedStateFromProps')

  //   return null
  // }

  /** componentDidMount 함수
   * 클래스 컴포넌트가 처음으로 화면에 표시된 이후에 호출됨
   * 즉, render 함수가 처음 한 번 호출된 후 이 함수가 호출됨
   * 
   * 컴포넌트가 화면에 처음 표시된 후 한 번만 호출되므로 ajax를 통한 데이터 습득이나 js 라이브러리와의 연동 수행할 때 주로 사용
   * 
   * Props나 this.setState로 State값이 바뀌어도 다시 호출 x
   * 
   * 따라서 render 함수와는 다르게 이 함수에 this.setState를 직접 호출할 수 있으며 
   * ajax를 통해 서버로부터 전달받은 데이터를 this.setState를 사용해 State에 설정하기 가장 적합
   */
  // componentDidMount() {
  //   console.log('componentDidMount');
  // }

  /** getSnapshotBeforeUpdate 함수
   * Props, State가 변경돼 화면을 다시 그리기 위해 render 함수가 호출된 후 
   * 실제로 화면이 갱신되기 직전에 이 함수가 호출됨
   * 
   * 반환값은 다음 함수인 componentDidUpdate의 세번째 매개변수로 전달됨
   * 
   * 자주는 사용 x, 화면 갱신 중 수동으로 스크롤 위치 고정하는 경우 등에 사용
   */
  // getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
  //   console.log('getSnapshotBeforeUpdate');

  //   return {
  //     testData: true,
  //   }
  // }

  /** componentDidUpdate 함수
   * componentDidMount 함수는 컴포넌트가 처음 화면에 표시된 후 실행되고 두 번 다시 호출되지 않는다고 했는데,
   * 반대로 이 함수는 컴포넌트가 처음 화면에 표시될 땐 실행이 안되지만, Props나 State가 변경돼 
   * 화면에 갱신될 때마다 render 함수가 호출된 후 호출됨 
   * 
   * 얘도 자주 사용은 안되지만 스크롤을 수동으로 고정할 때 getSnapshotBeforeUpdate랑 같이 쓰임
  */
  // componentDidUpdate(prevProps: Props, prevState: State, snapshot: IScriptSnapshot) {
  //   console.log('componentDidUpdate');
  // }

  /** shouldComponentUpdate 함수
   * 클래스 컴포넌트를 기본적으로 부모 컴포넌트로부터 받은 Props, State 변경 시 리렌더링돼 화면을 다시 그리는데, 
   * 값은 변경돼도 화면을 다시 그리고 싶지 않을 때 이 함수 사용하여 렌더링 제어
   * 
   * return false를 해주면 리렌더링 수행을 막음
   * 
   * ※ 리렌더링 방지 이유: 렌더링 최적화를 위함
   */
  // shouldComponentUpdate(nextProps: Props, nextState: State) {
  //   console.log('shouldComponentUpdate');
  //   return true    
  // }

  /** componentWillUnmount 함수
   * 해당 컴포넌트가 화면에서 완전히 사라진 후 호출되는 함수
   * 보통 componentDidMount에서 연동한 자바스크립트 라이브러리를 해지하거나 setTimeout, setInterval 등의
   * 타이머를 clearTimeout, clearInterval을 사용해 해제할 때 사용됨
   */
  // componentWillUnmount() {
  //   console.log('componentWillUnmount');
  // }

  /** componentDidCatch 함수
   * render 함수에서 jsx 문법을 사용해 컴포넌트 렌더링 하는 부분에선 try-catch를 ㅅ용할 수 없음
   * 그래서 render 함수의 jsx에서 발생하는 에러의 예외처리할 수 있게 도와주는 라이프사이클 함수가 이 함수임
   * 
   * render 함수의 return 부분에서 에러 발생 시, 이 함수 실행됨
   */
  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // this.setState({
    // error: true,
    // })
  // }
}

export default App;

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDoList, setToDoList] = useState<string[]>([]);

//   const addToDo = (): void => {
//     if (toDo) {
//       setToDoList([...toDoList, toDo]);
//       setToDo("");
//     }
//   };

//   const deleteTodo = (index: number): void => {
//     let list = [...toDoList];
//     list.splice(index, 1);
//     setToDoList(list);
//   };

//   return (
//     <Container>
//       <Contents>
//         <ToDoListContainer data-testid="toDoList">
//           {toDoList.map((item, index) => (
//             <ToDoItem
//               key={item}
//               label={item}
//               onDelete={() => deleteTodo(index)}
//             />
//           ))}
//         </ToDoListContainer>
//         <Input
//           placeholder="할 일을 입력해 주세요."
//           onChange={(text) => setToDo(text)}
//         />
//         <Button label="추가" onClick={addToDo} />
//       </Contents>
//     </Container>
//   );
// }

