import React from 'react';
import './sanpham.css';
import { useState } from 'react';
import { useEffect } from 'react';
function SanPham() {

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);


    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'Trà Sen Tây Hồ', checked: true },
        { id: 2, label: 'Trà Lộc Tân', checked: true },
    ]);

    const handleCheckboxChange = (id) => {
        setCheckboxes((prevCheckboxes) =>
            prevCheckboxes.map((checkbox) =>
                checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
            )
        );
    };

    return (
        <>
            <>
                <div
                    style={{
                        backgroundImage: "url(./img/sanpham/banner.png)",
                        height: 400,
                        marginTop: 40
                    }}
                >
                    <h1 style={{ paddingTop: 160, textAlign: "center", fontSize: 50, fontFamily: 'Bitter' }}>
                        SẢN PHẨM
                    </h1>
                </div>
                <div style={{ padding: "25px 320px 0px 320px" }}>
                    <p style={{ color: "#ccc", paddingBottom: 25 }}>Trang chủ &gt; Sản phẩm</p>
                    <div>
                        <h1 style={{ fontSize: "2.2rem", fontWeight: 500, paddingBottom: 20 }}>
                            Sản phẩm
                        </h1>
                        <br />
                        <hr />
                        <p style={{ color: "#ccc", paddingTop: 25 }}>Bộ lọc sản phẩm</p>
                    </div>
                    <div
                        style={{
                            paddingTop: 25,
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <div style={{ marginRight: 100, width: 300 }}>
                            <h3 style={{ fontWeight: 500, fontSize: 24, paddingBottom: 20 }}>
                                Loại sản phẩm
                            </h3>
                            <div className="item">
                                <input type="checkbox" />
                                <p className="about">Trà xanh Thái Nguyên</p>
                            </div>
                            <div className="item">
                                <input type="checkbox" />
                                <p className="about">Trà Ô long</p>
                            </div>
                            <div className="item">
                                <input type="checkbox" />
                                <p className="about">Trà Shan tuyết</p>
                            </div>
                            <div className="item">
                                <input type="checkbox" />
                                <p className="about">Trà sen</p>
                            </div>
                            <div className="item">
                                <input type="checkbox" />
                                <p className="about">Trà lài</p>
                            </div>
                            <div className="item">
                                <input type="checkbox" />
                                <p className="about">Trà thảo dược</p>
                            </div>
                            <div className="item">
                                <input type="checkbox" />
                                <p className="about">Dụng cụ pha trà </p>
                            </div>
                            <div className="item">
                                <input type="checkbox" />
                                <p className="about">Nước pha trà</p>
                            </div>
                            <h3 style={{ paddingTop: 20 }}>Giá thành</h3>
                            <div className="item">
                                <p className="about">Từ 50.000 đến 200.000</p>
                            </div>
                            <h3 style={{ paddingTop: 50 }}>Thương hiệu</h3>
                            <div className="item">
                                <input type="checkbox" />
                                <p className="about">Trà Tân Cương Xanh</p>
                            </div>
                            {checkboxes.map((checkbox) => (
                                <div className="item">
                                    <input type="checkbox" checked={checkbox.checked}
                                        onChange={() => handleCheckboxChange(checkbox.id)} />
                                    <p className="about">{checkbox.label}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-4 " id="item-list">
                                        <div className="item-list">
                                            <div
                                                style={{ display: "flex", justifyContent: "space-between" }}
                                            >
                                                <div style={{ display: "flex" }}>

                                                    <img
                                                        src="./img/sanpham/5stars.jpg"
                                                        alt=""
                                                        style={{ width: 75, height: 13 }}
                                                    />


                                                    <p style={{ transform: "translateY(-5px)" }}>(467)</p>
                                                </div>
                                                <button className="newButton">
                                                    <p style={{ fontSize: 12, transform: "translateY(3px)" }}>
                                                        NEW
                                                    </p>
                                                </button>
                                            </div>

                                            <img src="./img/sanpham/SANPHAM.jpg" alt="" className="itemt" />
                                            <h3 style={{ marginTop: 17, fontSize: 24, textAlign: "center", fontWeight: 400 }}>
                                                Trà Shan Tuyết
                                            </h3>
                                            <div className="item"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px 10px 0 10px"
                                                }}>
                                                <p style={{ margin: 0, paddingLeft: 2 }}><s>120,000 VNĐ</s></p>
                                                <p style={{ margin: 0 }}>200g</p>
                                            </div>
                                            <div
                                                className="item"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px 10px 0 10px"
                                                }}
                                            >
                                                <div className="item">
                                                    <h3>50,000</h3>
                                                    <p className="removeFor_p">VND</p>
                                                </div>
                                                <p className='removeFor_p'>Đã bán 7,2k</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 " id="item-list">
                                        <div className="item-list">
                                            <div
                                                style={{ display: "flex", justifyContent: "space-between" }}
                                            >
                                                <div style={{ display: "flex" }}>
                                                    <img
                                                        src="./img/sanpham/5stars.jpg"
                                                        alt=""
                                                        style={{ width: 75, height: 13 }}
                                                    />
                                                    <p style={{ transform: "translateY(-5px)" }}>(27)</p>
                                                </div>
                                                <button className="newButton">
                                                    <p style={{ fontSize: 12, transform: "translateY(3px)" }}>
                                                        NEW
                                                    </p>
                                                </button>
                                            </div>
                                            <img src="./img/sanpham/SANPHAM-2.jpg" alt="" className="itemt" />
                                            <h3 style={{ marginTop: 17, fontSize: 24, textAlign: "center", fontWeight: 400 }}>
                                                Trà Ô Long
                                            </h3>
                                            <div
                                                className="item"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px 30px 0 30px"
                                                }}
                                            >
                                                <div className="item">
                                                    <h3>70,000</h3>
                                                    <p>VND</p>
                                                </div>
                                                <p>200g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 " id="item-list">
                                        <div className="item-list">
                                            <div
                                                style={{ display: "flex", justifyContent: "space-between" }}
                                            >
                                                <div style={{ display: "flex" }}>
                                                    <img
                                                        src="./img/sanpham/5stars.jpg"
                                                        alt=""
                                                        style={{ width: 75, height: 13 }}
                                                    />
                                                    <p style={{ transform: "translateY(-5px)" }}>(27)</p>
                                                </div>
                                                <button className="newButton">
                                                    <p style={{ fontSize: 12, transform: "translateY(3px)" }}>
                                                        NEW
                                                    </p>
                                                </button>
                                            </div>
                                            <img src="./img/sanpham/SANPHAM-3.jpg" alt="" className="itemt" />
                                            <h3 style={{ marginTop: 17, fontSize: 24, textAlign: "center", fontWeight: 400 }}>
                                                Trà Búp
                                            </h3>
                                            <div
                                                className="item"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px 30px 0 30px"
                                                }}
                                            >
                                                <div className="item">
                                                    <h3>70,000</h3>
                                                    <p>VND</p>
                                                </div>
                                                <p>200g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 " id="item-list">
                                        <div className="item-list">
                                            <div
                                                style={{ display: "flex", justifyContent: "space-between" }}
                                            >
                                                <div style={{ display: "flex" }}>
                                                    <img
                                                        src="./img/sanpham/5stars.jpg"
                                                        alt=""
                                                        style={{ width: 75, height: 13 }}
                                                    />
                                                    <p style={{ transform: "translateY(-5px)" }}>(17)</p>
                                                </div>
                                                <button className="newButton">
                                                    <p style={{ fontSize: 12, transform: "translateY(3px)" }}>
                                                        NEW
                                                    </p>
                                                </button>
                                            </div>
                                            <img src="./img/sanpham/SANPHAM.jpg" alt="" className="itemt" />
                                            <h3 style={{ marginTop: 17, fontSize: 24, textAlign: "center", fontWeight: 400 }}>
                                                Trà Shan Tuyết
                                            </h3>
                                            <div
                                                className="item"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px 30px 0 30px"
                                                }}
                                            >
                                                <div className="item">
                                                    <h3>50,000</h3>
                                                    <p>VND</p>
                                                </div>
                                                <p>200g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 " id="item-list">
                                        <div className="item-list">
                                            <div
                                                style={{ display: "flex", justifyContent: "space-between" }}
                                            >
                                                <div style={{ display: "flex" }}>
                                                    <img
                                                        src="./img/sanpham/5stars.jpg"
                                                        alt=""
                                                        style={{ width: 75, height: 13 }}
                                                    />
                                                    <p style={{ transform: "translateY(-5px)" }}>(27)</p>
                                                </div>
                                                <button className="newButton">
                                                    <p style={{ fontSize: 12, transform: "translateY(3px)" }}>
                                                        NEW
                                                    </p>
                                                </button>
                                            </div>
                                            <img src="./img/sanpham/SANPHAM-2.jpg" alt="" className="itemt" />
                                            <h3 style={{ marginTop: 17, fontSize: 24, textAlign: "center", fontWeight: 400 }}>
                                                Trà Ô Long
                                            </h3>
                                            <div
                                                className="item"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px 30px 0 30px"
                                                }}
                                            >
                                                <div className="item">
                                                    <h3>70,000</h3>
                                                    <p>VND</p>
                                                </div>
                                                <p>200g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 " id="item-list">
                                        <div className="item-list">
                                            <div
                                                style={{ display: "flex", justifyContent: "space-between" }}
                                            >
                                                <div style={{ display: "flex" }}>
                                                    <img
                                                        src="./img/sanpham/5stars.jpg"
                                                        alt=""
                                                        style={{ width: 75, height: 13 }}
                                                    />
                                                    <p style={{ transform: "translateY(-5px)" }}>(27)</p>
                                                </div>
                                                <button className="newButton">
                                                    <p style={{ fontSize: 12, transform: "translateY(3px)" }}>
                                                        NEW
                                                    </p>
                                                </button>
                                            </div>
                                            <img src="./img/sanpham/SANPHAM-3.jpg" alt="" className="itemt" />
                                            <h3 style={{ marginTop: 17, fontSize: 24, textAlign: "center", fontWeight: 400 }}>
                                                Trà Búp
                                            </h3>
                                            <div
                                                className="item"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px 30px 0 30px"
                                                }}
                                            >
                                                <div className="item">
                                                    <h3>70,000</h3>
                                                    <p>VND</p>
                                                </div>
                                                <p>200g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 " id="item-list">
                                        <div className="item-list">
                                            <div
                                                style={{ display: "flex", justifyContent: "space-between" }}
                                            >
                                                <div style={{ display: "flex" }}>
                                                    <img
                                                        src="./img/sanpham/5stars.jpg"
                                                        alt=""
                                                        style={{ width: 75, height: 13 }}
                                                    />
                                                    <p style={{ transform: "translateY(-5px)" }}>(17)</p>
                                                </div>
                                                <button className="newButton">
                                                    <p style={{ fontSize: 12, transform: "translateY(3px)" }}>
                                                        NEW
                                                    </p>
                                                </button>
                                            </div>
                                            <img src="./img/sanpham/SANPHAM.jpg" alt="" className="itemt" />
                                            <h3 style={{ marginTop: 17, fontSize: 24, textAlign: "center", fontWeight: 400 }}>
                                                Trà Shan Tuyết
                                            </h3>
                                            <div
                                                className="item"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px 30px 0 30px"
                                                }}
                                            >
                                                <div className="item">
                                                    <h3>50,000</h3>
                                                    <p>VND</p>
                                                </div>
                                                <p>200g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 " id="item-list">
                                        <div className="item-list">
                                            <div
                                                style={{ display: "flex", justifyContent: "space-between" }}
                                            >
                                                <div style={{ display: "flex" }}>
                                                    <img
                                                        src="./img/sanpham/5stars.jpg"
                                                        alt=""
                                                        style={{ width: 75, height: 13 }}
                                                    />
                                                    <p style={{ transform: "translateY(-5px)" }}>(27)</p>
                                                </div>
                                                <button className="newButton">
                                                    <p style={{ fontSize: 12, transform: "translateY(3px)" }}>
                                                        NEW
                                                    </p>
                                                </button>
                                            </div>
                                            <img src="./img/sanpham/SANPHAM-2.jpg" alt="" className="itemt" />
                                            <h3 style={{ marginTop: 17, fontSize: 24, textAlign: "center", fontWeight: 400 }}>
                                                Trà Ô Long
                                            </h3>
                                            <div
                                                className="item"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px 30px 0 30px"
                                                }}
                                            >
                                                <div className="item">
                                                    <h3>70,000</h3>
                                                    <p>VND</p>
                                                </div>
                                                <p>200g</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-4 " id="item-list">
                                        <div className="item-list">
                                            <div
                                                style={{ display: "flex", justifyContent: "space-between" }}
                                            >
                                                <div style={{ display: "flex" }}>
                                                    <img
                                                        src="./img/sanpham/5stars.jpg"
                                                        alt=""
                                                        style={{ width: 75, height: 13 }}
                                                    />
                                                    <p style={{ transform: "translateY(-5px)" }}>(27)</p>
                                                </div>
                                                <button className="newButton">
                                                    <p style={{ fontSize: 12, transform: "translateY(3px)" }}>
                                                        NEW
                                                    </p>
                                                </button>
                                            </div>
                                            <img src="./img/sanpham/SANPHAM-3.jpg" alt="" className="itemt" />
                                            <h3 style={{ marginTop: 17, fontSize: 24, textAlign: "center", fontWeight: 400 }}>
                                                Trà Shan Tuyết
                                            </h3>
                                            <div
                                                className="item"
                                                style={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    padding: "10px 30px 0 30px"
                                                }}
                                            >
                                                <div className="item">
                                                    <h3>70,000</h3>
                                                    <p>VND</p>
                                                </div>
                                                <p>200g</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="number_page">
                                    <ul className="pagination">
                                        <li className="page">
                                            <a href="#" className="page_num">1</a>
                                        </li>
                                        <li className="page">
                                            <a href="#" className="page_num">2</a>
                                        </li>
                                        <li className="page">
                                            <a href="#" className="page_num">3</a>
                                        </li>
                                        <li className="page">
                                            <a href="#" className="page_num">4</a>
                                        </li>
                                        <li className="page">
                                            <a href="#" className="page_num">»</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default SanPham