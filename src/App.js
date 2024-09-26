import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Sections/Header/Header";
import PageContent from "./Sections/PageContent/PageContent";
import Footer from "./Sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <PageContent></PageContent>
      <Footer></Footer>
    </>
  );
}

export default App;
