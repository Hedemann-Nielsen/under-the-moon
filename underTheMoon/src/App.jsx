import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Style } from "./components/MainStyle/style";
import { Header } from "./components/header/Header";
import { Main } from "./components/Main/Main";
function App() {
  return (
    <>
      <Header></Header>
      <Style></Style>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
