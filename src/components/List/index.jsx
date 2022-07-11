// Components
import ListItem from "../ListItem";

const List = (props) => {
  return (
    <ul>
      {props.listArray.map((item, i) => (
        <ListItem text={item} key={i} />
      ))}
    </ul>
  );
};

export default List;
