import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  NavBarContainer,
  NavBarButton,
} from './Navbar-styled'

function Navbar() {
  const [clicked, setClicked] = useState([false, false, false]);

  return (
    <NavBarContainer data-testid="nav">
      <Link to="/">
        <NavBarButton
          clicked={clicked[0]}
          onClick={(e) =>
            setClicked((prev) => [true, false, false])
          }
        >Home</NavBarButton>
      </Link>
      <Link data-testid="nav-NavBarButton" to="/character-creation">
        <NavBarButton
          clicked={clicked[1]}
          onClick={(e) =>
            setClicked((prev) => [false, true, false])
          }
        >Character Creation</NavBarButton>
      </Link>
      <Link data-testid="nav-NavBarButton" to="/all-characters">
        <NavBarButton
          clicked={clicked[2]}
          onClick={(e) =>
            setClicked((prev) => [false, false, true])
          }
        >View All Characters</NavBarButton>
      </Link>
    </NavBarContainer>
  );
}

export default Navbar;
