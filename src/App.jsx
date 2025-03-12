import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import SearchPage from "./pages/Search";
import SeatsPage from "./pages/Seats";
import  MyBooks from "./pages/Books";
import Tickets from "./pages/Tickets";
import Header from "./component/Header";
import LoginDialog from "./component/loginDialog";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LoginDialog/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/search' element ={<SearchPage/>}/>
        <Route path='/seats' element={<SeatsPage/>}/>
        <Route path="/books" element={<MyBooks />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
