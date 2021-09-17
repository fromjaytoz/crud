import { BrowserRouter as Router, Route } from "react-router-dom";
import CharCreation from "./pages/CharCreation/CharCreation";
import AllCharacters from "./pages/AllCharacters/AllCharacters";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/character-creation">
        <CharCreation />
      </Route>
      <Route exact path="/">
        <h1 data-testid="home">Jorell's Table</h1>
      </Route>
      <Route path="/all-characters">
        <AllCharacters />
      </Route>
    </Router>
  );
}

export default App;
