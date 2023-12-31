import React from 'react';
import { useEffect } from 'react';
function GioiThieu() {

  useEffect(() => {
    window.scrollTo(0, 0); // Cuộn lên đầu trang
  }, []);
  return (
    <>
      <section>
        <div className="title">
          <h2 style={{ fontFamily: 'Bitter', fontSize: 24 }}>TRÀ SEN</h2>
          <h1 style={{ fontFamily: 'Bitter' }}>BÁCH DIỆP</h1>
        </div>
        <div className="about" >
          <h1 style={{ fontSize: "1.7rem", fontFamily: 'Bitter' }}>GIỚI THIỆU</h1>
          <div className="background">
            <p>
              Bằng sự nỗ nực không ngừng, trải qua hơn 10 năm xây dựng và phát triển
              trong lĩnh vực trà Thái Nguyên, tháng 06/2017, công ty TNNHH Tân Cương
              Xanh chính thức kỉ niệm 20 năm thành lập (1997-2017). Trong 20 năm qua,
              thương hiệu trà Tân Cương Xanh đã ngày càng đi sâu vào thị trường trà
              Việt nói riêng và thế giới đồ uống nói chung.
            </p>
            <p>
              Với mục tiêu mang đến thị trường một sản phẩm trà mang thương hiệu Thái
              Nguyên “sạch” chính hiệu cũng như sự trăn trở về sự phát triển của thị
              trường chè Việt Nam, cách đây 10 năm trên thị trường trà Việt, người con
              ưu tú đó đã thành lập một công ty chuyên sản xuất và phân phối về trà
              sạch mang thương hiệu “Tân Cương Xanh”.
            </p>
            <img src="./img/gioithieu/intro1.jpg" alt="" />
            <p style={{ paddingTop: 60 }}>
              Với phương châm “Uy tín chất lượng sản phẩm là mục tiêu số 1”, Công ty
              TNHH Tân Cương Xanh đã luôn nỗ lực cả về nhân lực, vật lực, xây dựng uy
              tín thương hiệu, niềm tin với khách hàng thông qua những sản phẩm của
              công ty. Cùng với sự tín nhiệm của khách hàng vào sản phẩm của Tân Cương
              Xanh trong thời gian qua, Tân Cương Xanh đã không những phát triển thành
              một công ty vững mạnh trong ngành trà thái nguyên ngon Việt Nam đạt được
              Cúp Vàng thương hiệu Doanh Nhân Tinh hoa Đất Việt và Thương hiệu vàng Uy
              tín… Từ đó tạo nên động lực để Tân Cương Xanh phấn đấu để trở thành một
              trong những tập đoàn sản xuất, chế biến và cung cấp trà hàng đầu Việt
              Nam và thế giới
            </p>
            <p>
              Sản Phẩm của công ty đạt đầy đủ tiêu chuẩn vệ sinh an toàn của Chi Cục
              Vệ Sinh An Toàn Thực Phẩm Của Thái Nguyên - Của chi cục Hà nội.Đạt tiêu
              chuẩn xuất khẩu Chicago - Hoa Kì. Trà Tân Cương một loại đồ uống nổi
              tiếng trong ẩm thực của người Việt Nam có hương thơm cốm dịu dàng đặc
              trưng, màu nước xanh trong, sánh và bền, vị chát dịu, uống xong có hậu
              ngọt lắng sâu trong vị giác người thưởng thức. Sản phẩm trà tân cương
              thái nguyên của nhà máy có tác dụng giải nhiệt, giảm béo, trị tăng huyết
              áp và phòng chống phóng xạ, chống ung thư... Với phương châm "Uy tín
              chất lượng sản phẩm là mục tiêu số 1", Công ty TNHH Tân Cương Xanh không
              ngừng phấn đấu để trở thành một trong những tập đoàn sản xuất, chế biến
              và cung cấp trà hàng đầu Việt Nam và thế giới.
            </p>
          </div>
          <img src="./img/gioithieu/intro2.jpg" alt="" />
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        section {
          padding-top: 40px;
        }

        .title {
          background-image: url(/img/gioithieu/banner1.jpg);
          height: 750px;
          padding-left: 425px;
          padding-top: 310px;
        }

        .title h2 {
          color: #aabc44;
          font-weight: 500;
        }

        .title h1 {
          font-size: 3em;
          font-weight: 500;
        }

        .about {
          padding-top: 20px;
          padding: 0 425px 70px 425px;
          background-image: url(/img/gioithieu/banner02.jpg);
          background-repeat: no-repeat;
          width: 100%;
        }

        .about h1 {
          text-align: center;
          font-size: 38px;
          font-weight: 500;
          padding-bottom: 50px;
        }

        .about p {
          padding-bottom: 45px;
          font-size: 1em;
        }

        .about img {
          border-radius: 7px;
        }
    `,
        }}
      />

    </>
  )
}

export default GioiThieu