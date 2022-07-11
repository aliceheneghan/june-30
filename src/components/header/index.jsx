// Components
import List from "../list";

const Header = (props) => {
  return (
    <header>
      <h3>{props.text}</h3>
      <List listArray={props.listArray} />
    </header>
  );
};

export default Header;
