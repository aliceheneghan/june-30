// Styles
import './App.css';

// Data

const headerText= "I am the header";
const headerItems =["Header item one", "Header item two", "Header item three"];
const footerText = "I am the footer";
const footerItems = ["Footer item one", "Footer item two", "Footer item three"];




function App() {
  return (
    <>
      <header>
        <h3>{headerText}</h3>
        <ul>

        </ul>
      </header>
      <footer>
        <h3>{footerText}</h3>
        <ul>

        </ul>
      </footer>
    </>
  )     
}

export default App;
