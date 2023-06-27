// import React from 'react'

// export default function Footer() {
//   return (
//     <div>
//         <footer>
//   <div style={{ display: "flex" }}>
//     <div style={{ paddingLeft: 425, paddingTop: 30 }}>
//       <img src="./img/baiviet/BAIVIET copy.png" alt="" />
//       <p>7999.999.999</p>
//       <p>trasenbachdiep@gmail.com</p>
//       <p>
//         Số 12, Quảng An, Hồ Tây, Hà Nội
//       </p>
//     </div>
//     <div style={{ paddingLeft: 195, paddingTop: 50 }}>
//       <h1>VỀ CHÚNG TÔI</h1>
//       <p>Giới thiệu</p>
//       <p>Sản phẩm</p>
//       <p>Tin tức</p>
//     </div>
//     <div style={{ paddingLeft: 260, paddingTop: 50 }}>
//       <h1>LIÊN HỆ</h1>
//       <div>
//         <img
//           style={{ width: 140, height: 40 }}
//           src="./img/trangchu/icon.jpg"
//           alt=""
//         />
//       </div>
//       <p>
//         <small>Copyright @ 2010-2020</small>
//       </p>
//       <small>Tra Sen Bach Diep. All rights reversed.</small>
//     </div>
//   </div>
// </footer>

//     </div>
//   )
// }



import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ paddingLeft: 425, paddingTop: 30 }}>
            <img src="./img/baiviet/BAIVIET copy.png" alt="" />
            <p style={{ paddingTop: 15 }}>7999.999.999</p>
            <p>trasenbachdiep@gmail.com</p>
            <p>Số 12, Quảng An, Hồ Tây, Hà Nội</p>
          </div>
          <div style={{ paddingTop: 36 }}>
            <h1 style={{ fontFamily: 'Bitter' }}>VỀ CHÚNG TÔI</h1>
            <p style={{ paddingTop: 16 }}>Giới thiệu</p>
            <p>Sản phẩm</p>
            <p >Tin tức</p>
          </div>
          <div style={{ paddingRight: 425, paddingTop: 36 }}>
            <h1 style={{ fontFamily: 'Bitter' }}>LIÊN HỆ</h1>
            <div>
              <img
                style={{ width: 140, height: 40 }}
                src="./img/trangchu/icon.jpg"
                alt=""
              />
            </div>
            <p>
              <small>Copyright @ 2010-2020</small>
            </p>
            <small>Tra Sen Bach Diep. All rights reversed.</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
