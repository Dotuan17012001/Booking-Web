import imageHome from "../../assets/Banner.jpg";
import "./home.scss";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import roomBanner from "../../assets/roomBanner.jpg";
import roomItem from "../../assets/roomItem.jpg";
import { callGetTourRoomHome } from "../../services/api";
import { useEffect, useState } from "react";
import { Rate } from 'antd';
import moment from "moment/moment";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  const [listTour, setListTour] = useState([])
  const [listRoom, setListRoom] = useState([])

  useEffect(() => {
      fetchListTourHome();
      fetchListRoomHome();
  }, []);

  const fetchListTourHome = async() => {
      const res = await callGetTourRoomHome("tour")
      if(res && res?.data){
          setListTour(res.data.data)
        //  console.log("check res",res);
      }
  }
  const fetchListRoomHome = async() => {
    const res = await callGetTourRoomHome("room")
    if(res && res?.data){
        setListRoom(res.data.data)
      //  console.log("check res",res);
    }
  }

  //console.log( moment('2011-02-07 15:13:06').diff(moment('2011-02-01 12:14:06'),"days"));

  return (
    <>
      <div className="home">
        <div className="overlay">
          <img src={imageHome} alt="#img" />
        </div>
        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText">Our Packages</span>
            <h1 className="homeTitle">Search your Holiday</h1>
          </div>
          <div className="cardDiv">
            
            <div className="content">content 2</div>
            <div className="content">content 3</div>
            <div className="content">content 3</div>
         
          </div>
        </div>
      </div>
      <div className="home-tour-container">
        <div className="text-header">
          <h1>Khám phá điểm đến nổi bật</h1>
          <p>
            Nhận cơ hội để đi du lịch | Đi nghỉ | Nghỉ dưỡng cùng gia đình | Tận
            hưởng chính mình
          </p>
        </div>
        <div className="layout-intro">
          <div className="list-img">
            <div className="img-item">
              <img src={img2} alt="#" />
            </div>
            <div className="img-item">
              <img src={img1} alt="#" />
            </div>
            <div className="img-item">
              <img src={img4} alt="#" />
            </div>
            <div className="img-item">
              <img src={img3} alt="#" />
            </div>
          </div>
        </div>
        <div className="text-review">
          <h1>Tour HOT 2023</h1>
          <p>
            Chào hè 2023 sôi động với những Tour du lịch hấp dẫn, những địa điểm
            thu hút khách du lịch tại Nha Trang. Khám phá ngay để có thêm những
            trải nghiệm hè thật sôi động bên gia đình, người thân nào !
          </p>
        </div>
        <div className="tour-list">
          {listTour.length > 0 &&
            listTour?.map(tour => {
              return (
                <>
                  <div className="tour-item">
                    <div className="left-item">
                      <div className="media-tour">
                        <img src={`${tour.logo}`} alt="#imgTour" />
                      </div>

                      <div className="tour-content">
                        <h5 className="tour-name">{tour.name}</h5>
                        <p className="tour-desc">
                         {tour.categories.description}
                        </p>
                        <div className="list-info">
                          <div className="item-info">
                            <span>
                              {moment(`${tour.end_date}`).diff(moment(`${tour.start_date}`),"days")}
                            </span>
                          </div>
                          <div className="item-info">
                            <span>20 người</span>
                          </div>
                          <div className="item-info">
                            <span>4 địa điểm</span>
                          </div>
                          <div className="item-info">
                            <span>Tàu + Ô tô</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="right-item">
                      <div className="review-and-start">
                        <span className="the-reviews">3.1540 Review</span>
                        <span>
                           <Rate disabled defaultValue={5} />
                        </span>
                      </div>
                      <span className="price-tour">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(tour.cost ?? 0)} / Người
                      </span>
                      <button className="btn-booking">Đặt ngay</button>
                    </div>
                  </div>
                </>
              )
            })
          }
          
        </div>
      </div>
      <div className="btn-view-more">
        <button>Xem thêm</button>
      </div>
      <div className="home-room-container">
        <div className="banner-room">
          <img src={roomBanner} alt="#bannerImg" />
        </div>

        <div className="list-room">
          {listRoom.length > 0 && 
          
          listRoom?.map(room => {
            return (
              <>
                <div className="room-item">
                  <div className="room-media">
                    <img src={`${room.logo}`} alt="#roomImg" />
                  </div>
                  <div className="room-info">
                    <div className="room-info-top">
                      <h4 className="room-title">
                        {room.name}
                      </h4>
                      <div className="room-rate">
                          <Rate disabled defaultValue={4} />
                      </div>
                      <div className="room-review">
                        <span style={{color:'red'}}>Đánh giá: 4.0 Rất tốt</span>
                        <span>(1.27k đánh giá)</span>
                      </div>
                      <div className="room-tag">
                        <span className="tag-item">Giá tốt</span>
                        <span className="tag-item">Gần biển</span>
                        <span className="tag-item">Luxury</span>
                      </div>
                    </div>
                    <div className="room-info-bottom">
                      <h3 className="room-price">
                      {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(room.cost ?? 0)}
                      </h3>
                      <p className="room-noti">*Chấp nhận sau 24h</p>
                    </div>
                  </div>
                </div>     
              </>
            )
          })   
          }
        </div>
       
      </div>
            <div className="view-more-room">
           
              <Link>
                <span>
                  Xem thêm
                </span>
              </Link>
         
            </div>
    
    
    </>
  );
};

export default HomePage;
