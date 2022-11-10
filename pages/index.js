import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import SubwayIcon from "@mui/icons-material/Subway";
import DirectionsSubwayIcon from "@mui/icons-material/DirectionsSubway";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import Button from "@mui/material/Button";
import LabelIcon from "@mui/icons-material/Label";

export default function Home() {
  return (
    <>
      <Header title="九州国際空港-トップ" />
      <MainVisual />
      <MainMenu />
      <Congestion />
      <News />
    </>
  );
}

const MainVisual = () => {
  const sliderImgs = [
    "./images/mainVisual1.jpg",
    "./images/mainVisual2.jpg",
    "./images/mainVisual3.jpg",
  ];
  return (
    <>
      <section className="main-visual">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          modules={[Pagination, Autoplay, EffectFade]}
          className="mySwiper"
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={2000}
          effect={"fade"}
        >
          {sliderImgs.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="swiper-content">
                  {/* Swiper上に設置しているコンテンツ */}
                  <div className="wrapper lightSpeedInRight">
                    <h2>九州国際空港へようこそ</h2>
                    <h1>お客様に、安心安全の空の旅をお届けします。</h1>
                  </div>
                </div>
                <div className="swiper-bg">
                  <img src={img} alt="" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

const MainMenu = () => {
  return (
    <>
      <section className="main-menu">
        <ul>
          <li>
            {/* メニューボタン */}
            <div className="menu">
              <div className="img">
                <img src="./images/mainMenu1.png" alt="" />
              </div>
              <p>飛行機に乗る</p>
            </div>
            {/* 展開式テーブル */}
            <div className="table">
              <div className="cell">
                <a href="#">国内線</a>
              </div>
              <div className="cell">
                <a href="#">国際線</a>
              </div>
            </div>
          </li>
          <li>
            <div className="menu">
              <div className="img">
                <img src="./images/mainMenu2.png" alt="" />
              </div>
              <p>空港で過ごす</p>
            </div>
            <div className="table">
              <div className="row">
                <div className="cell">
                  <a href="#">館内マップ</a>
                </div>
                <div className="cell">
                  <a href="#">施設サービス</a>
                </div>
              </div>
              <div className="row">
                <div className="cell">
                  <a href="#">レストラン</a>
                </div>
                <div className="cell">
                  <a href="#">ショップ</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="menu">
              <div className="img">
                <img src="./images/mainMenu3.png" alt="" />
              </div>
              <p>交通アクセス</p>
            </div>
            <div className="table">
              <div className="row">
                <div className="cell">
                  <a href="#">バス</a>
                </div>
                <div className="cell">
                  <a href="#">電車</a>
                </div>
              </div>
              <div className="row">
                <div className="cell">
                  <a href="#">駐車場</a>
                </div>
                <div className="cell">
                  <a href="#">アクセス</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

const Congestion = () => {
  return (
    <section id="congestion">
      <h1>混雑情報</h1>

      <div className="congestion-container">
        <div className="left-column">
          <h2>鉄道・バス運行状況</h2>
          <ul className="inner-container">
            <li className="card">
              <h3>地下鉄</h3>

              <div className="card-content">
                <div className="card-icon">
                  <SubwayIcon />
                </div>
                <p className="card-status">平常運転</p>
              </div>
            </li>
            <li className="card">
              <h3>JR</h3>

              <div className="card-content">
                <div className="card-icon">
                  <DirectionsSubwayIcon />
                </div>
                <p className="card-status">平常運転</p>
              </div>
            </li>
            <li className="card">
              <h3>高速バス</h3>

              <div className="card-content">
                <div className="card-icon">
                  <AirportShuttleIcon />
                </div>
                <p className="card-status">平常運転</p>
              </div>
            </li>
            <li className="card">
              <h3>路線バス</h3>

              <div className="card-content">
                <div className="card-icon">
                  <DirectionsBusIcon />
                </div>
                <p className="card-status">平常運転</p>
              </div>
            </li>
          </ul>
          <div className="btn-container">
            <Button variant="contained">詳しくはコチラ</Button>
          </div>
        </div>
        <div className="right-column">
          <h2>駐車場混雑情報</h2>
          <ul className="inner-container">
            <li className="card">
              <h3>無料駐車場A</h3>
              <p className="card-status bg-red">満車</p>
            </li>
            <li className="card">
              <h3>無料駐車場B</h3>
              <p className="card-status bg-red">満車</p>
            </li>
            <li className="card">
              <h3>無料駐車場C</h3>
              <p className="card-status bg-yellow">混雑</p>
            </li>
            <li className="card">
              <h3>有料駐車場D</h3>
              <p className="card-status">空車</p>
            </li>
            <li className="card">
              <h3>有料駐車場E</h3>
              <p className="card-status">空車</p>
            </li>
          </ul>

          <div className="btn-container">
            <Button variant="contained">詳しくはコチラ</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const News = () => {
  return (
    <section id="news">
      <h1>お知らせ</h1>

      <div className="inner-container">
        <ul className="left-column">
          <li>
            <div className="info">
              <span>
                <time dateTime="2022-10-28">2022年10月28日</time>
              </span>
              <span className="category">
                <LabelIcon />
                新着情報
              </span>
              <span className="category">
                <LabelIcon />
                作業進捗
              </span>
            </div>
            <div className="content">M.2SSD購入しました。</div>
          </li>
        </ul>

        <div className="right-column">
          <img src="./images/news-banner.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};
