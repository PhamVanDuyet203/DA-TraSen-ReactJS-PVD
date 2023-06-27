import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const isActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "rgb(170, 188, 68)" : "black"
    }
  }

  return (
    <div>
      <nav>
        <div className="logo">
          <img src="./img/baiviet/BAIVIET copy.png" alt="" />
        </div>
        <ul>
          <li className="li">
            {/* <a href="/trangchu.html">TRANG CHỦ</a> */}

            <NavLink style={isActiveStyle} to={'trangchu'} >
              TRANG CHỦ
            </NavLink>
          </li>
          <li className="li">
            {/* <a href="/gioithieu.html">GIỚI THIỆU</a> */}
            <NavLink style={isActiveStyle} to={'gioithieu'}>
              GIỚI THIỆU

            </NavLink>

          </li>
          <li className="li">
            {/* <a href="/sanpham.html">SẢN PHẨM</a> */}
            <NavLink style={isActiveStyle} to={'sanpham'}>
              SẢN PHẨM
            </NavLink>
          </li>
          <li className="li">
            {/* <a href="/tintuc.html">TIN TỨC</a> */}
            <NavLink style={isActiveStyle} to={'tintuc'}>
              TIN TỨC
            </NavLink>
          </li>
          <li className="li">
            {/* <a href="/lienhe.html">LIÊN HỆ</a> */}
            <NavLink style={isActiveStyle} to={'lienhe'}>
              LIÊN HỆ
            </NavLink>
          </li>
        </ul>
      </nav>

    </div>
  )
}
export default Header