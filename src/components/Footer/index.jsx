// Components
import List from "../List";

const Footer = (props) => {
  return (
    <footer>
      <h3>{props.text}</h3>
      <List listArray={props.listArray} />
    </footer>
  );
};

export default Footer;
