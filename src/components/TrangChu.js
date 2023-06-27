import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
function TrangChu() {

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);

    const arrHinh = [
        "img/trangchu/product-1.png",
        "img/trangchu/product-2.png",
        "img/trangchu/product-3.png",
        "img/trangchu/product-4.png",
    ];

    const arrMota = [
        "TRÀ ƯỚP BÔNG SEN",
        "TRÀ ƯỚP NHỊ SEN",
        "TRÀ SHAN TUYẾT",
        "TRÀ Ô LONG",
    ];

    const [index, setIndex] = useState(0);
    const [index2, setIndex2] = useState(1);
    const [index3, setIndex3] = useState(2);
    const [index4, setIndex4] = useState(3);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % arrHinh.length);
            setIndex2((prevIndex) => (prevIndex + 1) % arrHinh.length);
            setIndex3((prevIndex) => (prevIndex + 1) % arrHinh.length);
            setIndex4((prevIndex) => (prevIndex + 1) % arrHinh.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const prev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + arrHinh.length) % arrHinh.length);
        setIndex2((prevIndex) => (prevIndex - 1 + arrHinh.length) % arrHinh.length);
        setIndex3((prevIndex) => (prevIndex - 1 + arrHinh.length) % arrHinh.length);
        setIndex4((prevIndex) => (prevIndex - 1 + arrHinh.length) % arrHinh.length);
    };

    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1) % arrHinh.length);
        setIndex2((prevIndex) => (prevIndex + 1) % arrHinh.length);
        setIndex3((prevIndex) => (prevIndex + 1) % arrHinh.length);
        setIndex4((prevIndex) => (prevIndex + 1) % arrHinh.length);
    };

    const currentHinh = arrHinh[index];
    const currentMota = arrMota[index];

    return (
        <>
            <section id="trang-chu" className="trang_chu">
                {/* <img src="./img/trangchu/banner.png" style="width: 1920px; height: 740px;padding-top: 50px;" alt=""> */}
                <div
                    style={{
                        backgroundImage: "url(./img/trangchu/banner.png)",
                        width: 1899,
                        height: 740,
                        paddingTop: 50
                    }}
                >
                    <div style={{ paddingLeft: 380 }}>
                        <h1 style={{ fontSize: "1.7rem", paddingTop: 120, fontFamily: 'Bitter', fontWeight: 500 }}>
                            TRÀ ƯỚP SEN TÂY HỒ
                        </h1>
                        <p style={{ width: 370, paddingBottom: 30, paddingTop: 150 }}>
                            Sự hòa quyện tuyệt vời giữa hương thơm ngan ngát của sen Bách diệp Hồ
                            Tây và vị đậm đà của trà Tân Cương.
                        </p>
                        <button
                            // style={{
                            //     backgroundColor: "#aabc44",
                            //     border: "none",
                            //     padding: "20px 38px",
                            //     fontSize: "1.2em"
                            // }}
                            className="tryButton"

                        >
                            <a href='#gioithieu' style={{ textDecoration: "none", color: "black", padding: 20, paddingLeft: 50, paddingRight: 50 }}>THỬ NGAY</a>

                        </button>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src="./img/trangchu/around1.png" alt="" />
                    <img src="./img/trangchu/around.png" alt="" />
                    <img src="./img/trangchu/around.png" alt="" />
                </div>
                <div>
                    <img
                        src="./img/trangchu/product-la.png"
                        style={{ paddingLeft: 1690, transform: "translateY(1.5em)" }}
                        alt=""
                    />
                    <h1 style={{ textAlign: "center", fontSize: "1.7rem", fontFamily: 'Bitter' }}>SẢN PHẨM NỔI BẬT</h1>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: 80 }}>
                        <img
                            src="./img/trangchu/backButton.png"
                            style={{ paddingRight: 25, height: 32, transform: "translateY(400%)" }}
                            alt=""
                            onClick={prev}
                        />
                        <div style={{ paddingRight: 60 }}>
                            <img src={arrHinh[index]} id="hinh" alt="" />
                            <p style={{ textAlign: "center" }} id="mota1">
                                {arrMota[index]}
                            </p>
                        </div>
                        <div style={{ paddingRight: 60 }}>
                            <img src={arrHinh[index2]} id="hinh2" alt="" />
                            <p style={{ textAlign: "center" }} id="mota2">
                                {arrMota[index2]}
                            </p>
                        </div>
                        <div style={{ paddingRight: 60 }}>
                            <img src={arrHinh[index3]} id="hinh3" alt="" />
                            <p style={{ textAlign: "center" }} id="mota3">
                                {arrMota[index3]}
                            </p>
                        </div>
                        <div>
                            <img src={arrHinh[index4]} id="hinh4" alt="" />
                            <p style={{ textAlign: "center" }} id="mota4">
                                {arrMota[index4]}
                            </p>
                        </div>
                        <img
                            src="./img/trangchu/nextButton.png"
                            style={{ paddingLeft: 25, height: 32, transform: "translateY(400%)" }}
                            alt=""
                            onClick={next}
                        />
                    </div>
                    <div id="gioithieu"
                        style={{
                            backgroundImage: "url(./img/trangchu/gioithieu.png)",
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                        <img
                            src="./img/trangchu/product-sen.png"
                            style={{ transform: "translateY(-90px)" }}
                            alt=""
                        />
                        {/* <img src="./img/trangchu/gioithieu.png" style="transform: translateY(-423px);z-index: -10;" alt=""> */}
                        <div style={{ transform: "translateY(-200px)", marginTop: -50 }} >
                            <h1 style={{ textAlign: "center", fontSize: "1.7rem", fontFamily: 'Bitter' }} >GIỚI THIỆU</h1>
                            <div style={{ paddingLeft: 1580 }}>
                                <img src="./img/trangchu/introduce-number-phone.png" alt="" />
                                <p
                                    style={{
                                        color: "#aabc44",
                                        fontWeight: 700,
                                        fontSize: "1.3em",
                                        transform: "translateY(-55px)",
                                        paddingLeft: 90
                                    }}
                                >
                                    0999.999.999
                                </p>
                            </div>
                            <div style={{ paddingLeft: 380 }}>
                                <img
                                    src="./img/trangchu/traxanhbachdiep.png"
                                    style={{ paddingTop: 180 }}
                                    alt=""
                                />
                                <p style={{ width: 550, paddingBottom: 30 }}>
                                    Trà ướp Sen Bách Diệp - tinh hoa văn hóa Hà Thành là sự hòa quyện
                                    tuyệt vời giữa hương thơm ngan ngát của bông sen Bách diệp Hồ Tây và
                                    vị đậm đà của trà Tân Cương Thái Nguyên. Qua đôi bàn tay tài hoa và
                                    bí quyết nghề mật truyền nhiều đời của người thợ trà Thăng Long, tạo
                                    ra thức quà tinh túy, kết tinh văn hóa ngàn năm Thăng Long – Hà Nội.
                                </p>
                                <button
                                    // style={{
                                    //     backgroundColor: "#aabc44",
                                    //     border: "none",
                                    //     padding: "20px 38px",
                                    //     fontSize: "1.2em"
                                    // }}
                                    className="moreButton"
                                    id="moreButton"
                                >
                                    <NavLink to={"/moreButton"}>ĐỌC THÊM</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: "url(./img/trangchu/bannernghenhan.png)",
                        backgroundRepeat: "no-repeat",
                        fontSize: "0.9em"
                    }}
                >
                    <h1 style={{ paddingBottom: 75, textAlign: "center", fontSize: "1.7rem", fontFamily: 'Bitter' }}>
                        NGHỆ NHÂN TRÀ ĐẠO
                    </h1>
                    <div
                        style={{ display: "flex", justifyContent: "center", paddingBottom: 240 }}
                    >
                        <div
                            style={{ width: 235, height: 375, marginRight: 30 }}
                        >
                            <div className="container_item"><img src="./img/trangchu/professional-tea-1.png" alt="" className="itemnn" /></div>

                            <h2 style={{ fontSize: 20, padding: "20px 0" }}>Nn. Nguyễn Cao Sơn</h2>
                            <p>
                                Nguyễn Cao Sơn được chọn làm đại diện quảng bá văn hóa Trà Việt tại
                                ngôi nhà di sản 87 Mã Mây, Hà Nội.
                            </p>
                        </div>
                        <div style={{ width: 235, height: 375, marginRight: 30 }}>
                            <div className="container_item"><img src="./img/trangchu/professional-tea-2.png" alt="" className="itemnn" /></div>

                            <h2 style={{ fontSize: 20, padding: "20px 0" }}>Nn. Hướng Anh Sướng</h2>
                            <p>
                                Truyền nhân đời thứ 6 của dòng trà Trường Xuân, Hà Nội chia sẻ về nghệ
                                thuật trà đạo, lĩnh vực mà anh dành hơn nửa cuộc đời nghiên cứu một
                                sách đam mê.
                            </p>
                        </div>
                        <div style={{ width: 235, height: 375, marginRight: 30 }}>
                            <div className="container_item"><img src="./img/trangchu/professional-tea-3.png" alt="" className="itemnn" /></div>

                            <h2 style={{ fontSize: 20, padding: "20px 0" }}>Nn. Nguyễn Thị Dần</h2>
                            <p>
                                Vẫn tự tay chọn hoa, tách gạo, thực hiện từng công đoạn ướp trà sen.
                                Cũng chính bởi nghiện trà, bởi yêu nghề nên cô thiếu nữ Hà thành năm
                                xưa vẫn say hương vị trà sen Tây Hồ.
                            </p>
                        </div>
                        <div style={{ width: 235, height: 375, marginRight: 30 }}>
                            <div className="container_item"><img src="./img/trangchu/professional-tea-4.png" alt="" className="itemnn" /></div>

                            <h2 style={{ fontSize: 20, padding: "20px 0" }}>Nn. Nguyễn Hoài Linh</h2>
                            <p>
                                Vô địch toàn thế giới trong cuộc thi Tea Master Cup International 2018
                                về pha trà được tổ chức tại Huế
                            </p>
                        </div>
                        <div style={{ width: 235, height: 375 }}>
                            <div className="container_item"><img src="./img/trangchu/professional-tea-5.png" alt="" className="itemnn" /></div>

                            <h2 style={{ fontSize: 20, padding: "20px 0" }}>Nn. Viên Trân</h2>
                            <p>
                                Sinh ra và lớn lên trong một gia đình quý tộc phong kiến, trong một
                                môi trường mà việc uống trà và trà cực ngon, cực thượng hạng là điều
                                không bao giờ thiếu trong nhà.
                            </p>
                        </div>
                    </div>
                    <div style={{ paddingBottom: 170 }}>
                        <h1 style={{ textAlign: "center", fontSize: "1.7rem", fontFamily: 'Bitter' }}>MUA NGAY</h1>
                        <img
                            src="./img/trangchu/product-la.png"
                            style={{ paddingLeft: 225, transform: "rotate(25deg)", scale: "0.8" }}
                            alt=""
                        />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <input
                                type="text"
                                placeholder="Số điện thoại/Email"

                                style={{
                                    borderRadius: 7,
                                    border: "3px solid #aabc44",
                                    width: 815,
                                    height: 60,
                                    marginRight: 30,
                                    paddingLeft: 20
                                }}
                            />
                            <button className="myButton" type="submit"
                            // style={{
                            //     padding: "20px 92px",
                            //     backgroundColor: "#aabc44",
                            //     border: "none",
                            //     fontSize: "1.2em"
                            // }}
                            >
                                GỬI
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TrangChu