import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Pokemon from "./pages/Pokemon";
import GlobalStyle from "./styles/global";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route exact path="/pokemon/:id" element={<Pokemon />}></Route>
      </Routes>
    </div>
  );
}

export default App;
