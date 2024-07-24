import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const userEmail = sessionStorage.getItem('userEmail');
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
        await signOut(auth);
        sessionStorage.clear();
        navigate('/login');
    } catch (error) {
        alert(error.message);
    }
  };

  useEffect(() => {
    const checkLogin = () => {
      if(!userEmail) {
        navigate("/login")
      }
    }
    checkLogin();
  },[])

  return (
    <nav>
      <Link to="/" className="title">
        FlashCard
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/addQuestions">Add Questions</Link>
        </li>
        <li>
          <Link to="/questions">Question List</Link>
        </li>
        <li>
          <a onClick={logoutUser}>Log Out</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar