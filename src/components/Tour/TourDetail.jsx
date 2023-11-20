import "./tourDetail.scss";
import img1 from "../../assets/img1.jpg";
import img9 from "../../assets/img9.jpg";
import { BsImage } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { MdOutlineRateReview } from "react-icons/md";
import { Rate, DatePicker, Image, Badge } from 'antd';
import dayjs from 'dayjs';
import moment from "moment";
import { useEffect, useState } from "react";
import ModalBooking from "./ModalBooking";

const TourDetail = (props) => {

  const {tourDetail, id} = props
  const [openModalBook, setOpenModalBook] = useState(false)

 
  let dateStart =  tourDetail?.start_date?.substring(0, 10) 
  let dateEnd =  tourDetail?.end_date?.substring(0, 10) 

  
  const handleBooking = () => {
    setOpenModalBook(true)
  }

  
  return (
    <>
      <div className="home-detail">
        <div className="overlay-detail">
          <img src={tourDetail?.banner?.image_data ?? img9} alt="#img" />
        </div>
      </div>
 
      <div className="container-detail-page">
        <div className="main-page">
          <div className="left-content">
            <div className="media-avatar">
              <img src={tourDetail?.logo} alt="#avatar" />
            </div>
            <div className="left-item">
              <div className="type">
                <span><GrOverview  className="icon" /></span>
                <span className="title-icon">Giới thiệu</span>
              </div>
            </div>
            <div className="left-item">
              <div className="type">
              <span><BsImage className="icon" /></span>
                <span className="title-icon">Hình ảnh</span>
              </div>
            </div>
            <div className="left-item">
              <div className="type">
              <span><MdOutlineRateReview className="icon" /></span>
                <span className="title-icon">Đánh giá & bình luận</span>
              </div>
            </div>
          </div>
          <div className="center-content">
            <div className="header-info">
              <h2 className="tour-title">
                 {tourDetail?.name}
              </h2>
              <div className="tour-rate">
                 <Rate disabled defaultValue={5} style={{fontSize:'16px'}}/>
              </div>
              <div className="tour-location">
                Hòn Tre, Vĩnh Nguyên, Tp. Nha Trang, Khánh Hòa, Vietnam
              </div>
            </div>
              <div className="tour-intro">
                <h3>Giới thiệu</h3>
                <p className="tour-description">
                  {tourDetail?.description}
                </p>
              </div>
              <div className="tour-media">
                <h3>Hình ảnh</h3>
                  <div className="list-media">
                    <div className="media-item">
                    <Image
                      width={138}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      style={{borderRadius:'6px'}}
                    />
                    </div>
                    <div className="media-item">
                    <Image
                      width={138}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      style={{borderRadius:'6px'}}
                    />
                    </div>
                    <div className="media-item">
                    <Image
                      width={138}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      style={{borderRadius:'6px'}}
                    />
                    </div>
                    <div className="media-item">
                    <Image
                      width={138}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      style={{borderRadius:'6px'}}
                    />
                    </div>
                  </div>
              </div>

          </div>
          <div className="right-content">
            <div className="btn-group">
                
                  <a className="btn-booking" onClick={()=>handleBooking()}>
                    ĐẶT TOUR NGAY
                  </a>
              
                  <a className="btn-review">
                    VIẾT BÌNH LUẬN
                  </a>
                
            </div>
            <div className="tour-info">
              <span className="title">Ngày khởi hành</span>
              <span className="data-picker" style={{fontSize:'15px', fontWeight:'500'}}>
                {dateStart}
              </span>
              <span className="title">Ngày kết thúc</span>
              <span className="data-picker" style={{fontSize:'15px', fontWeight:'500'}}>
                {dateEnd}
              </span>
              <h5>Ưu đãi</h5>
              <div className="endow-list">
                <ul>
                  <li>Bảo hiểm</li>
                  <li>Bữa ăn</li>
                  <li>Hướng dẫn viên</li>
                </ul>
                <ul>
                  <li>Xe đưa đón</li>
                  <li>Khách sạn 4 sao</li>
                  <li>Vé tham quan</li>
                </ul>
              </div>
              <h5 style={{marginTop:'15px'}}>Giá khách lẻ</h5>
              <span className="tour-price">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(tourDetail?.cost ?? 0)} / Người
              </span>
              <h5 style={{marginTop:'15px'}}>Số người {tourDetail?.categories?.number}</h5>
              <h5 style={{marginTop:'15px'}}><Badge status="processing" text={`Số vé còn lại ${tourDetail?.can_order}`} /></h5>
              <h5 style={{marginTop:'15px'}}>Số ngày {' '}
                          {moment(`${tourDetail?.end_date}`).diff(
                                moment(`${tourDetail?.start_date}`),"days"
                          )} 
              </h5>
              <div className="contact-info">
                <span className="title-contact">Liên hệ ngay</span>
                <span className="phone">Gọi 0389059185</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalBooking
          open = {openModalBook}
          setOpen = {setOpenModalBook}
          tourId = {id}
      />
    </>
  );
};

export default TourDetail;
