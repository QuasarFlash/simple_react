import logo from "../shared/images/logo.svg";
import "./App.css";
import Home from "./Home/Home";
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";
function App() {
  return (
    <div className="App">
      <Header title="Hello Honey"></Header>
      <Content>
        <Home></Home>
      </Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
