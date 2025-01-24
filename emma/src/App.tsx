import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/homePage";
import LiteraturaPage from "./routes/literaturaPage";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LiteraturaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
