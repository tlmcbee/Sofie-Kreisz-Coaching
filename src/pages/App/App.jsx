import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from '../../utilities/users-services'
import './App.css';
import Bio from "../Bio/Bio";
import Home from "../Home/Home";
import OrderHistoryPage from '../../pages/OrderHistoryPage/OrderHistoyPage'
import NavBar from "../../components/NavBar/NavBar";


function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      <>
      <header>
        <NavBar user={user} setUser={setUser} />
      </header>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
      </>
    </main>
  );
}

export default App;
