import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Homepage.tsx";
import NavBar from "./components/nav/NavBar.tsx";
import GlobalStyle from "./components/style/GlobalStyle.tsx";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
