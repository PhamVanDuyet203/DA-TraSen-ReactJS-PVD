import './App.css';
import Header from './components/Header';
import TrangChu from './components/TrangChu';
import BaiViet from './components/BaiViet';
import GioiThieu from './components/GioiThieu';
import LienHe from './components/LienHe/LienHe';
import SanPham from './components/SanPham/SanPham';
import TinTuc from './components/TinTuc/TinTuc';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/trangchu' element={<TrangChu></TrangChu>}></Route>
          <Route path='/moreButton' element={<GioiThieu></GioiThieu>}></Route>
          <Route path='/baiviet' element={<BaiViet></BaiViet>}></Route>
          <Route path='/gioithieu' element={<GioiThieu></GioiThieu>}></Route>
          <Route path='/lienhe' element={<LienHe></LienHe>}></Route>
          <Route path='/sanpham' element={<SanPham></SanPham>}></Route>
          <Route path='/tintuc' element={<TinTuc></TinTuc>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
