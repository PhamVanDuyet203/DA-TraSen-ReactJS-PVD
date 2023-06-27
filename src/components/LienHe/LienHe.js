import React from 'react';
import './lienhe.css';
import { useEffect } from 'react';
function LienHe() {

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, []);

  return (
    <>
      <>
        <section>
          <form action="" className="form_lh">
            <h1 style={{ paddingBottom: 30, fontSize: "1.7rem", fontWeight: 500, fontFamily: 'Bitter' }}>
              LIÊN HỆ VỚI CHÚNG TÔI
            </h1>
            <input type="text" placeholder="Họ tên" />
            <br />
            <input type="email" placeholder="Email" />
            <br />
            <input type="tel" placeholder="Số điện thoại" />
            <br />
            <input type="text" placeholder="Nội dung" />
            <br />
            <button type="submit" className="btn_form">Gửi</button>
          </form>
        </section>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\nbody {\n    background-image: url(/img/lienhe/banner\\ \\(1\\).jpg);"
          }}
        />
      </>


    </>
  )
}

export default LienHe