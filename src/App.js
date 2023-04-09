import DataProvider from "./context/DataProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Login from "./components/account/Login";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import CreatePost from "./components/create/CreatePost";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePost/>} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
