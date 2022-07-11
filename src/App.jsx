// Components
import Header from './components/header/index.jsx';
import Footer from './components/footer/index.jsx';

//Styles
import './App.css';

// Data

const headerText= "I am the header";
const headerItems =["Header item one", "Header item two", "Header item three"];
const footerText = "I am the footer";
const footerItems = ["Footer item one", "Footer item two", "Footer item three"];

function App() {
  return (
    <>
      <Header text={headerText} listArray={headerItems}/>
      <Footer text={footerText} listArray={footerItems}/>
    </>
  )     
}

export default App;
