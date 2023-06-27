import React from 'react';
import './tintuc.css';
import { useEffect } from 'react';
function TinTuc() {

    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang
    }, []);

    return (
        <>
            <>
                <section>
                    <div>
                        <h1 className="title_tt" style={{ fontFamily: 'Bitter' }}>TIN TỨC</h1>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        {/* 1 */}
                        <div className="col-xs-12 col-sm-6 col-md-4 ">
                            <div className="custom_item">
                                <div className="container_itemtt"><img src="./img/tintuc/TINTUC_01.jpg" alt="" className="itemtt" /></div>

                                <a href='#'>
                                    <h2>Văn hóa uống trà của người Việt, câu chuyện xưa và nay</h2>
                                </a>

                                <p>
                                    Trà xanh thái nguyên được phổ biến là một thức uống dân dã, quen
                                    thuộc từ bao đời nay. Cây chè xuất hiện chủ yếu ở các tỉnh Thái
                                    Nguyên, Phú Thọ, Yên Bái, Lâm Đồng… là nguồn gốc cho ra những sản
                                    phẩm chè có chất lượng cao.
                                </p>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="custom_item special">
                                <div className="container_itemtt">
                                    <img src="./img/tintuc/TINTUC_02-05.jpg" alt="" className="itemtt" /></div>
                                <a href='#'>
                                    <h2>Chè xanh Thái Nguyên ướp hoa nhài</h2></a>
                                <p>
                                    Ở Việt Nam có rất nhiều nơi trồng hoa nhài, đây là loại hoa nở tới 6
                                    tháng/năm nên hoa nhài tự nhiên được sử dụng để ướp trà rất nhiều,
                                    và trà ướp với hoa nhài giá thành rẻ hơn nhiều so với trà ướp bông
                                    sen Tây Hồ.
                                </p>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="custom_item">
                                <div className="container_itemtt">
                                    <img src="./img/tintuc/TINTUC_03.jpg" alt="" className="itemtt" /></div>
                                <a href='#'>
                                    <h2>Cách bảo quản trà Shan Tuyết để giữ được vị hương thơm</h2></a>
                                <p>
                                    Chè là loại thức uống dễ mất hương và vị nhất, cũng dễ hút những mùi
                                    hương khác lạ khiến chè mất dần đi mùi vị ban đầu. Bảo quản chè là
                                    việc hết sức quan trọng mà mỗi người uống chè đều phải biết.
                                </p>
                            </div>
                        </div>
                        {/* 4 */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="custom_item">
                                <div className="container_itemtt">
                                    <img src="./img/tintuc/TINTUC_01.jpg" alt="" className="itemtt" /></div>
                                <a href='#'>
                                    <h2>Văn hóa uống trà của người Việt, câu chuyện xưa và nay</h2></a>
                                <p>
                                    Trà xanh thái nguyên được phổ biến là một thức uống dân dã, quen
                                    thuộc từ bao đời nay. Cây chè xuất hiện chủ yếu ở các tỉnh Thái
                                    Nguyên, Phú Thọ, Yên Bái, Lâm Đồng… là nguồn gốc cho ra những sản
                                    phẩm chè có chất lượng cao.
                                </p>
                            </div>
                        </div>
                        {/* 5 */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="custom_item special">
                                <div className="container_itemtt">
                                    <img src="./img/tintuc/TINTUC_02-05.jpg" alt="" className="itemtt" /></div>
                                <a href='#'>
                                    <h2>Chè xanh Thái Nguyên ướp hoa nhài</h2></a>
                                <p>
                                    Ở Việt Nam có rất nhiều nơi trồng hoa nhài, đây là loại hoa nở tới 6
                                    tháng/năm nên hoa nhài tự nhiên được sử dụng để ướp trà rất nhiều,
                                    và trà ướp với hoa nhài giá thành rẻ hơn nhiều so với trà ướp bông
                                    sen Tây Hồ.
                                </p>
                            </div>
                        </div>
                        {/* 6 */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="custom_item">
                                <div className="container_itemtt">
                                    <img src="./img/tintuc/TINTUC_03.jpg" alt="" className="itemtt" /></div>
                                <a href='#'>
                                    <h2>Cách bảo quản trà Shan Tuyết để giữ được vị hương thơm</h2></a>
                                <p>
                                    Chè là loại thức uống dễ mất hương và vị nhất, cũng dễ hút những mùi
                                    hương khác lạ khiến chè mất dần đi mùi vị ban đầu. Bảo quản chè là
                                    việc hết sức quan trọng mà mỗi người uống chè đều phải biết.
                                </p>
                            </div>
                        </div>
                        {/* 7 */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="custom_item">
                                <div className="container_itemtt">
                                    <img src="./img/tintuc/TINTUC_01.jpg" alt="" className="itemtt" /></div>
                                <a href='#'>
                                    <h2>Văn hóa uống trà của người Việt, câu chuyện xưa và nay</h2></a>
                                <p>
                                    Trà xanh thái nguyên được phổ biến là một thức uống dân dã, quen
                                    thuộc từ bao đời nay. Cây chè xuất hiện chủ yếu ở các tỉnh Thái
                                    Nguyên, Phú Thọ, Yên Bái, Lâm Đồng… là nguồn gốc cho ra những sản
                                    phẩm chè có chất lượng cao.
                                </p>
                            </div>
                        </div>
                        {/* 8 */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="custom_item special">
                                <div className="container_itemtt">
                                    <img src="./img/tintuc/TINTUC_02-05.jpg" alt="" className="itemtt" /></div>
                                <a href='#'>
                                    <h2>Chè xanh Thái Nguyên ướp hoa nhài</h2></a>
                                <p>
                                    Ở Việt Nam có rất nhiều nơi trồng hoa nhài, đây là loại hoa nở tới 6
                                    tháng/năm nên hoa nhài tự nhiên được sử dụng để ướp trà rất nhiều,
                                    và trà ướp với hoa nhài giá thành rẻ hơn nhiều so với trà ướp bông
                                    sen Tây Hồ.
                                </p>
                            </div>
                        </div>
                        {/* 9 */}
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="custom_item">
                                <div className="container_itemtt">
                                    <img src="./img/tintuc/TINTUC_03.jpg" alt="" className="itemtt" /></div>
                                <a href='#'>
                                    <h2>Cách bảo quản trà Shan Tuyết để giữ được vị hương thơm</h2></a>
                                <p>
                                    Chè là loại thức uống dễ mất hương và vị nhất, cũng dễ hút những mùi
                                    hương khác lạ khiến chè mất dần đi mùi vị ban đầu. Bảo quản chè là
                                    việc hết sức quan trọng mà mỗi người uống chè đều phải biết.
                                </p>
                            </div>
                        </div>
                        <div className="number_page">
                            <ul className="pagination">
                                <li className="page">
                                    <a href="#">1</a>
                                </li>
                                <li className="page">
                                    <a href="#">2</a>
                                </li>
                                <li className="page">
                                    <a href="#">3</a>
                                </li>
                                <li className="page">
                                    <a href="#">4</a>
                                </li>
                                <li className="page">
                                    <a href="#">»</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </>

        </>
    )
}

export default TinTuc