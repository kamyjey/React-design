import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import {
  Main
} from "./components/index";

import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;