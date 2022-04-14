import React from 'react'
import "./index.scss"
import LOGO from "../img/quochai.img.png"

export default function Content() {
  return (
    <div className='container-fluid'>
        <div className='header'>
            <hr/>
            <h3><b>CHUYÊN DOANH THIẾT BỊ VĂN PHÒNG COPIER-COMPUTER</b></h3>
            <h4><b>CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ QUỐC HẢI</b></h4>
            <img src={LOGO} alt="" />
            <h6><b>Hỗ trợ online: 090.646.75.75 (Mr.Hải)</b></h6>
        </div>
        <hr/>
        <div className='container content'>
            <h3><b>Chuyên cho thuê máy photocopy kỹ thuật số</b></h3>
            <div className="card ">
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
            <div className="card ">
                <div className="card-body">
                    <h5 className="card-title">- Giới thiệu về công ty TNHH thương mại và dịch vụ QUỐC HẢI</h5>
                    <p className="card-text">Công ty TNHH thương mại và dịch vụ QUỐC HẢI, có trụ sở chính tại 92 Nguyễn Du, thành phố Đà Nẵng, là công ty cho thuê máy photocopy kỹ thuật số uy tín 
                    và chuyên nghiệp tại thành phố Đà Nẵng. Hoạt động hơn 17 năm trong lĩnh vực bán và cho thuê máy. Với bề dày kinh nghiệm trong dịch vụ cho thuê, đội ngủ nhân 
                    viên đông đảo luôn sẳn sàng đáp ứng nhu cầu thuê máy của khách hàng cá nhân, doanh nghiệp. Luôn được khách hàng khắp nơi phản hồi tích cực.</p>
                </div>
            </div> 
            <br/>
            <div className="card ">
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

        <div className='footer'>
            <br/><br/>
            <h5><b>CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ QUỐC HẢI</b></h5>
            <h6><b>Địa chỉ: 92 Nguyễn Du, thành phố Đà Nẵng.</b></h6>
            <h6><b>Điện thoại: 02363-889786 – 0913422930 </b></h6>
            <h6><b>Hotline: 090.646.75.75 ( Mr.Hải )</b></h6>
            <h6><b>Email: dichvuthuemayphotocopy kỹ thuật số@gmail.com</b></h6>
        </div>
    </div>
  )
}
