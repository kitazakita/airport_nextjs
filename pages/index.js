import Header from '../components/Header';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import SubwayIcon from '@mui/icons-material/Subway';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header title='九州国際空港-トップ' />
      <MainVisual />
      <MainMenu />
      <Congestion />
      <News />
      <Topics />
      <Footer />
    </>
  );
}

const MainVisual = () => {
  const sliderImgs = [
    './images/mainVisual1.jpg',
    './images/mainVisual2.jpg',
    './images/mainVisual3.jpg',
  ];
  return (
    <>
      <section className='main-visual'>
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          modules={[Pagination, Autoplay, EffectFade]}
          className='mySwiper'
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={2000}
          effect={'fade'}
        >
          {sliderImgs.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='swiper-content'>
                  {/* Swiper上に設置しているコンテンツ */}
                  <div className='wrapper lightSpeedInRight'>
                    <h2>九州国際空港へようこそ</h2>
                    <h1>お客様に、安心安全の空の旅をお届けします。</h1>
                  </div>
                </div>
                <div className='swiper-bg'>
                  <img src={img} alt='' />
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
      <section className='main-menu'>
        <ul>
          <li>
            {/* メニューボタン */}
            <div className='menu'>
              <div className='img'>
                <img src='./images/mainMenu1.png' alt='' />
              </div>
              <p>飛行機に乗る</p>
            </div>
            {/* 展開式テーブル */}
            <div className='table'>
              <div className='cell'>
                <Link href='./flight'>国内線</Link>
              </div>
              <div className='cell'>
                <Link href='./flight'>国内線</Link>
              </div>
            </div>
          </li>
          <li>
            <div className='menu'>
              <div className='img'>
                <img src='./images/mainMenu2.png' alt='' />
              </div>
              <p>空港で過ごす</p>
            </div>
            <div className='table'>
              <div className='row'>
                <div className='cell'>
                  <Link href='./stay#infomation-map'>館内マップ</Link>
                </div>
                <div className='cell'>
                  <Link href='./stay#stay-service'>施設サービス</Link>
                </div>
              </div>
              <div className='row'>
                <div className='cell'>
                  <Link href='./stay#stay-food'>レストラン</Link>
                </div>
                <div className='cell'>
                  <Link href='./stay#stay-shop'>ショップ</Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className='menu'>
              <div className='img'>
                <img src='./images/mainMenu3.png' alt='' />
              </div>
              <p>交通アクセス</p>
            </div>
            <div className='table'>
              <div className='row'>
                <div className='cell'>
                  <a href='#'>バス</a>
                </div>
                <div className='cell'>
                  <a href='#'>電車</a>
                </div>
              </div>
              <div className='row'>
                <div className='cell'>
                  <a href='#'>駐車場</a>
                </div>
                <div className='cell'>
                  <a href='#'>アクセス</a>
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
    <section id='congestion'>
      <h1>混雑情報</h1>

      <div className='congestion-container'>
        <div className='left-column'>
          <h2>鉄道・バス運行状況</h2>
          <ul className='inner-container'>
            <li className='card'>
              <h3>地下鉄</h3>

              <div className='card-content'>
                <div className='card-icon'>
                  <SubwayIcon />
                </div>
                <p className='card-status'>平常運転</p>
              </div>
            </li>
            <li className='card'>
              <h3>JR</h3>

              <div className='card-content'>
                <div className='card-icon'>
                  <DirectionsSubwayIcon />
                </div>
                <p className='card-status'>平常運転</p>
              </div>
            </li>
            <li className='card'>
              <h3>高速バス</h3>

              <div className='card-content'>
                <div className='card-icon'>
                  <AirportShuttleIcon />
                </div>
                <p className='card-status'>平常運転</p>
              </div>
            </li>
            <li className='card'>
              <h3>路線バス</h3>

              <div className='card-content'>
                <div className='card-icon'>
                  <DirectionsBusIcon />
                </div>
                <p className='card-status'>平常運転</p>
              </div>
            </li>
          </ul>
          <div className='btn-container'>
            <Button variant='contained'>詳しくはコチラ</Button>
          </div>
        </div>
        <div className='right-column'>
          <h2>駐車場混雑情報</h2>
          <ul className='inner-container'>
            <li className='card'>
              <h3>無料駐車場A</h3>
              <p className='card-status bg-red'>満車</p>
            </li>
            <li className='card'>
              <h3>無料駐車場B</h3>
              <p className='card-status bg-red'>満車</p>
            </li>
            <li className='card'>
              <h3>無料駐車場C</h3>
              <p className='card-status bg-yellow'>混雑</p>
            </li>
            <li className='card'>
              <h3>有料駐車場D</h3>
              <p className='card-status'>空車</p>
            </li>
            <li className='card'>
              <h3>有料駐車場E</h3>
              <p className='card-status'>空車</p>
            </li>
          </ul>

          <div className='btn-container'>
            <Button variant='contained'>詳しくはコチラ</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const News = () => {
  return (
    <section id='news'>
      <h1>お知らせ</h1>

      <div className='inner-container'>
        <div className='left-column'>
          <table>
            <tbody>
              <tr className='bg-blue'>
                <td>
                  <time dateTime='2022-11-11'>2022年11月11日</time>
                </td>
                <td className='category'>
                  <img src='./images/news-tag.png' alt='' />
                  新着情報
                </td>
                <td className='category'>
                  <img src='./images/news-tag.png' alt='' />
                  キャンペーン情報
                </td>
              </tr>
              <tr className='bg-blue'>
                <td className='content'>
                  テキストが入ります。テキストが入ります。テキストが入ります。
                </td>
              </tr>
              <tr>
                <td>
                  <time dateTime='2022-11-11'>2022年11月11日</time>
                </td>
                <td className='category'>
                  <img src='./images/news-tag.png' alt='' />
                  新着情報
                </td>
                <td className='category'>
                  <img src='./images/news-tag.png' alt='' />
                  キャンペーン情報
                </td>
              </tr>
              <tr>
                <td className='content'>
                  テキストが入ります。テキストが入ります。テキストが入ります。
                </td>
              </tr>
              <tr className='bg-blue'>
                <td>
                  <time dateTime='2022-11-11'>2022年11月11日</time>
                </td>
                <td className='category'>
                  <img src='./images/news-tag.png' alt='' />
                  新着情報
                </td>
                <td className='category'>
                  <img src='./images/news-tag.png' alt='' />
                  キャンペーン情報
                </td>
              </tr>
              <tr className='bg-blue'>
                <td className='content'>
                  テキストが入ります。テキストが入ります。テキストが入ります。
                </td>
              </tr>
              <tr>
                <td>
                  <time dateTime='2022-11-11'>2022年11月11日</time>
                </td>
                <td className='category'>
                  <img src='./images/news-tag.png' alt='' />
                  新着情報
                </td>
                <td className='category'>
                  <img src='./images/news-tag.png' alt='' />
                  キャンペーン情報
                </td>
              </tr>
              <tr>
                <td className='content'>
                  テキストが入ります。テキストが入ります。テキストが入ります。
                </td>
              </tr>
            </tbody>
          </table>

          <div className='btn-container'>
            <Button variant='contained'>詳しくはコチラ</Button>
          </div>
        </div>

        <div className='right-column'>
          <img src='./images/news-banner.jpg' alt='' />
        </div>
      </div>
    </section>
  );
};

const Topics = () => {
  return (
    <section id='topics'>
      <h1>トピックス</h1>

      <div className='img-container'>
        <div className='img'>
          <img src='./images/topics01.jpg' alt='' />
        </div>
        <div className='img'>
          <img src='./images/topics02.jpg' alt='' />
        </div>
        <div className='img'>
          <img src='./images/topics03.jpg' alt='' />
        </div>
      </div>
    </section>
  );
};
