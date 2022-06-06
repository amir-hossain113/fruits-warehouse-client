import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import PageNotFound from './Pages/Shared/PageNotFound/PageNotFound';
import AddItem from './Pages/AddItem/AddItem';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import MyItem from './Pages/MyItem/MyItem';
import About from './Pages/About/About';



function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/inventory/:productId" element={
              <RequireAuth>
                  <ProductDetail></ProductDetail>
              </RequireAuth>
            }></Route>
            <Route path="/manageInventory" element={
              <RequireAuth>
                  <ManageInventory></ManageInventory>
              </RequireAuth>
            }></Route>
            <Route path="/addItem" element={
              <RequireAuth>
                  <AddItem></AddItem>
              </RequireAuth>
            }></Route>
            <Route path="/myItems" element={
              <RequireAuth>
                  <MyItem></MyItem>
              </RequireAuth>
            }></Route>
            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
