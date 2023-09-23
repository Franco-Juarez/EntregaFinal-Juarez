import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import NavBar from "../components/NavBar.jsx";
import { Category } from "../pages/Category.jsx";
import { ItemDetailContainer } from "../pages/ItemDetailContainer.jsx";
import NotFound from "../pages/NotFound.jsx";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category/:categoryId" element={<Category />} />
        <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
