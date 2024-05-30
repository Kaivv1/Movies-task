import "./styles/styles.scss";
import Footer from "./ui/Footer/Footer";
import Header from "./ui/Header/Header";
import Main from "./ui/Main/Main";

const App = () => {
  return (
    <div className="page-container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
