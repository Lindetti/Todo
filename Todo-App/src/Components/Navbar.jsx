import "../Styles/Navbar.css";

const Navbar = ({ itemLength }) => {
  return (
    <nav>
      <p>Done: </p>
      <p>To do: </p>
      <p>All: {itemLength}</p>
    </nav>
  );
};

export default Navbar;
