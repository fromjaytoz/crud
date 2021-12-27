import { BrowserRouter as Router, Route } from "react-router-dom";
import CharCreation from "./pages/CharCreation/CharCreation";
import AllCharacters from "./pages/AllCharacters/AllCharacters";
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from "./styled/globalStyles";

import { Header } from "./styled/styled";
import {
  AppView,
  NavBarContentContainer,
  ContentContainer,
} from "./App-styled";

function App() {
  return (
    <AppView>
      <Router>
        <GlobalStyle />
        <NavBarContentContainer>
          <Navbar />
          <ContentContainer>
            <Route path="/character-creation">
              <CharCreation />
            </Route>
            <Route exact path="/">
              <Header data-testid="home">Jorell's Table</Header>
            </Route>
            <Route path="/all-characters">
              <AllCharacters />
            </Route>
          </ContentContainer>
        </NavBarContentContainer>
      </Router>
    </AppView>
  );
}

//test

export default App;
