import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div data-testid="nav">
      <Link to="/" data-testid="nav-button">
        <button>Home</button>
      </Link>
      <Link data-testid="nav-button" to="/character-creation">
        <button>Character Creation</button>
      </Link>
      <Link data-testid="nav-button" to="/all-characters">
        <button>View All Characters</button>
      </Link>
    </div>
  );
};

export default Navbar;
