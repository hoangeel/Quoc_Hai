import './index.css';
import React from "react";
import LOGO from "../img/quochai.img.png"



function Main() {
    return (
        <div>
            <div className = "container main">
                <div className='row imgmenu'>
                    <div className='col-9'>
                        <h3 className="div2h"><b>CHUYÊN DOANH THIẾT BỊ VĂN PHÒNG COPIER-COMPUTER</b>.</h3>
                        <h5 className="div1h"><b>CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ QUỐC HẢI</b></h5>
                    </div>
                    <div className='col-3'>
                        <img className="divimg" src={LOGO} alt="" />
                    </div>  
                </div>
                <hr/>
                <div className='row'>
                    <div className="col-2 mid_left">
                        <div className="card mid_right" >        
                            <div className="card-body ">
                                <div className="card-title mid_right_header"><h5>Hỗ trợ online</h5></div>
                                <p className="card-text mid_right_number">090.646.75.75 </p>
                                <p className="card-text mid_right_name">Mr.Hải </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-8 mid_mid"> 
                        <br></br>
                        <div className='mid_mid_top'>Chuyên cho thuê máy photocopy kỹ thuật số</div>

                        <div className="card content-1">
                            <div className="card-body">
                                <h5 className="card-title">- Vì sao Dịch Vụ Cho Thuê Máy photocopy kỹ thuật số lại giúp ích cho bạn?</h5>
                                <p className="card-text">1. Không cần trả chi phí cho mua máy. Đặc biệt các dòng máy photocopy kỹ thuật số tốc độ in tốt luôn có giá trị cao.</p>
                                <p className="card-text">2. Máy photocopy kỹ thuật số cho độ bền ổn định cao. Luôn duy trì hiệu suất tốt kể cả khi sử dụng nhiều.</p>
                                <p className="card-text">3. Đơn vị cho thuê luôn hổ trợ để đảm máy photocopy kỹ thuật số luôn trong tình trạng tốt nhất.</p>
                                <p className="card-text">4. Hổ trợ đổi máy photocopy kỹ thuật số khác khi máy photocopy kỹ thuật số đang thuê không đáp ứng đủ nhu cầu, hay hỏng vặt.</p>
                                <p className="card-text">5. Giá cho thuê máy photocopy kỹ thuật số đã bao gồm toàn bộ chi phí: mực in, vật tư, sửa chữa, vận chuyển…</p>
                            </div>
                        </div>
                        <br/> 
                        
                        <div className="card content-1">
                            <div className="card-body">
                                <h5 className="card-title">- Giới thiệu về công ty TNHH thương mại và dịch vụ QUỐC HẢI</h5>
                                <p className="card-text">Công ty TNHH thương mại và dịch vụ QUỐC HẢI, có trụ sở chính tại 92 Nguyễn Du, thành phố Đà Nẵng, là công ty cho thuê máy photocopy kỹ thuật số uy tín 
                                và chuyên nghiệp tại thành phố Đà Nẵng. Hoạt động hơn 17 năm trong lĩnh vực bán và cho thuê máy. Với bề dày kinh nghiệm trong dịch vụ cho thuê, đội ngủ nhân 
                                viên đông đảo luôn sẳn sàng đáp ứng nhu cầu thuê máy của khách hàng cá nhân, doanh nghiệp. Luôn được khách hàng khắp nơi phản hồi tích cực.</p>
                            </div>
                        </div> 
                        <br/>
                        <div className="card content-1">
                            <div className="card-body">
                                <h5 className="card-title">- Cam Kết Chất Lượng</h5>
                                <p className="card-text">1. Máy photocopy kỹ thuật số chính hãng</p>
                                <p className="card-text">2. Hổ trợ nhanh chóng nhất trong mọi tình huống</p>
                                <p className="card-text">3. Lắp đặt máy ngay trong ngày được yêu cầu. </p>
                                <p className="card-text">4. Kiểm tra số counter (số bản in/photocopy kỹ thuật số trên máy) chính xác, rõ ràng thông qua chức năng đếm số counter có sẵn trên máy.</p>
                                <p className="card-text">5. Hổ trợ đổi máy photocopy kỹ thuật số khác tốt hơn (không thu thêm phí) khi máy photocopy kỹ thuật số quý khách sử dụng gặp lỗi nghiêm trọng và không khắc phục được ngay! </p>
                            </div>
                        </div> 
                        <br/>
                    </div>
                    
                    <div className="col-2 ">
                        <div className="card mid_right" >        
                            <div className="card-body ">
                            <div className="card-title mid_right_header"><h5>Hỗ trợ online</h5></div>
                                <p className="card-text mid_right_number">090.646.75.75 </p>
                                <p className="card-text mid_right_name">Mr.Hải </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="end">
                    <h5 className="end_1"><b>CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ QUỐC HẢI</b></h5>

                    <h6 className="end_2"><b>Địa chỉ: 92 Nguyễn Du, thành phố Đà Nẵng.</b></h6>
                    <h6 className="end_2"><b>Điện thoại: 02363-889786 – 0913422930 </b></h6>
                    <h6 className="end_2"><b>Hotline: 090.646.75.75 ( Mr.Hải )</b></h6>
                    <h6 className="end_2"><b>Email: dichvuthuemayphotocopy kỹ thuật số@gmail.com</b></h6>
            </div> 
        </div>
    ); 
}
export default Main;
