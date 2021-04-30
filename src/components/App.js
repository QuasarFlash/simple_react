import "./App.css";
import Home from "./Home/Home";
import Todo from "./Todo/Todo";
import Timer from "./PomodoroTimer/Timer";
import Coins from "./Coins/Coins";
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";
function App() {
  return (
    <div className="App">
      <Header title="Hello Honey"></Header>
      <Content>
        <Home></Home>
        <Todo></Todo>
        <Timer></Timer>
        <Coins></Coins>
      </Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
