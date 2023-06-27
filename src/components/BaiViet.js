import React from 'react'
import { useEffect } from 'react';
function BaiViet() {

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);

    return (
        <>
            <section id="tin-tuc" className="tin_tuc none">
                <div className="trangchu">
                    <p style={{ paddingBottom: 60 }}>Trang chủ &gt; Tin tức</p>
                    <h1 style={{ paddingBottom: 50 }}>
                        Văn hóa uống trà của người Việt, câu chuyện xưa và nay
                    </h1>
                    <p style={{ paddingBottom: "2em" }}>
                        Trà xanh thái nguyên được phổ biến là một thức uống dân dã, quen thuộc từ
                        bao đời nay. Cây chè xuất hiện chủ yếu ở các tỉnh Thái Nguyên, Phú Thọ,
                        Yên Bái, Lâm Đồng… là nguồn gốc cho ra những sản phẩm chè có chất lượng
                        cao.
                    </p>
                    <p style={{ paddingBottom: 40 }}>
                        Tùy vào đặc trưng của từng vùng địa lý, khí hậu và cách chế biến khác nhau
                        mà tạo ra các thức uống mang hương vị đặc trưng riêng khác nhau. Lá chè
                        tươi sau khi được hái về, rửa sạch, vò nát rồi đun nước uống liền, người
                        ta gọi đó là chè tươi. Còn những búp chè tươi được hái về, qua nhiều công
                        đoạn chế biến như phơi, sấy, sao khô, ướp hương hoa… thì được gọi là trà.
                        Trà có quy trình chế biến phức tạp, nhiều công đoạn, tốn công sức hơn nên
                        giá thành cũng cao hơn chè tươi.
                    </p>
                    <img src="./img/trangchu/black.jpg" alt="" />
                    <p style={{ paddingTop: 30 }}>
                        Theo ghi chép, trà khởi nguồn ở các Chùa chiền, nơi gắn kết trà với đạo
                        Phật. Cũng bởi lý do đó, hình thức thưởng trà này được gọi là Thiền trà.
                        Từ chùa chiền, hình thức thưởng trà nhanh chóng được ưa chuộng trong chốn
                        cung đình. Thời ngày xưa, chỉ có những người thuộc tầng lớp vua quan, quý
                        tộc, dòng dõi quyền quý mới được thưởng thức trà theo hình thức cầu kỳ
                        này, còn người dân thường chỉ uống loại chè tươi hái từ trên cây xuống.
                    </p>
                    <p style={{ paddingTop: 30 }}>
                        Thời phong kiến qua đi, đến các cuộc chiến tranh đã trải qua biết bao
                        thăng trầm của lịch sử khiến cho thú chơi của ngày bình yên bị hạn chế.
                        Tuy nhiên, không vì thế nà văn hóa uống trà của người Việt bị mai một hay
                        mất đi. Những nghệ nhân trà truyền thống tại Hà Nội cũng như nhiều vùng
                        khác trên đất Việt vẫn gìn giữ niềm đam mê và bí quyết chế biến trà cho
                        thế hệ sau này.
                    </p>
                    <p style={{ paddingTop: 30 }}>Văn hóa uống trà thái nguyên ngày nay:</p>
                    <p style={{ paddingTop: 30 }}>
                        Thời thế thay đổi, vì thế văn hóa uống trà của người Việt cũng có những sự
                        thay đổi. Chè tươi bây giờ thường thấy có ở những hàng quán nước vỉa hè mà
                        người ta hay gọi là chè tươi, trà đá, là nơi dừng chân tạm thời, nơi dành
                        cho những câu chuyện ngày thường, đời thường của người trẻ, dành cho sự
                        thảnh thơi, không vội vã.
                    </p>
                    <p style={{ paddingTop: 30, paddingBottom: 120 }}>
                        Trà khô (trà mạn) cũng khác xưa nhiều, không phải chỉ dành cho những gia
                        đình có điều kiện, am hiểu về trà như xưa nữa mà đã được sử dụng rộng rãi,
                        phổ biến hơn. Người ta thích trà mạn, yêu nghệ thuật thưởng trà nên nhiều
                        người thường chú trọng vào ấm trà, cách pha trà và cả cách thưởng thức
                        chúng. Sản phẩm trà cũng đa dạng chủng loại với nhiều hình thức sử dụng
                        hơn.
                    </p>
                </div>
                <div className="about-tt">
                    <h1>BÀI VIẾT MỚI</h1>
                    <div className="content-tt">
                        <img src="./img/trangchu/BAIVIET-Recovered.jpg" alt="" />
                        <p>
                            Trà Sen Tây Hồ - thứ quà tặng giàu giá trị tinh thần của người Hà Thành
                        </p>
                    </div>
                    <div className="content-tt">
                        <img src="./img/trangchu/BAIVIET-Recovered.jpg" alt="" />
                        <p>
                            Trà Sen Tây Hồ - thứ quà tặng giàu giá trị tinh thần của người Hà Thành
                        </p>
                    </div>
                    <div className="content-tt">
                        <img src="./img/trangchu/BAIVIET-Recovered.jpg" alt="" />
                        <p>
                            Trà Sen Tây Hồ - thứ quà tặng giàu giá trị tinh thần của người Hà Thành
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BaiViet