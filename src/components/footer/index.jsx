// Components
import List from "../list";

const Footer = (props) => {
  return (
    <footer>
      <h3>{props.text}</h3>
      <List listArray={props.listArray} />
    </footer>
  );
};

export default Footer;
