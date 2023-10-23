import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <button type="button" onClick={() => navigate("/")}>
        Home
      </button>
      <button type="button" onClick={() => navigate("/about")}>
        About Us
      </button>
      <button type="button" onClick={() => navigate("/contact")}>
        Contact
      </button>
    </>
  );
};

export default Navbar;
