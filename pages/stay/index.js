import Header from '../../components/Header';
import Footer from '../../components/Footer';
import card_data from './stay_card_data.json';

export default function index() {
  return (
    <>
      <Header title='九州国際空港-過ごす' />
      <MainVisual />
      <InfomationMap />
      <ServiceStay />
      <FoodStay />
      <ShopStay title='ショップ' />
      <ShopStay title='免税店' />
      <Footer />
    </>
  );
}

const MainVisual = () => {
  return (
    <section id='stay-main-visual'>
      <div className='text-content'>
        <h1>空港で過ごす</h1>
        <h4>- Stay -</h4>
      </div>
    </section>
  );
};

const InfomationMap = () => {
  return (
    <section id='infomation-map'>
      <div className='title'>
        <h1>館内マップ</h1>
      </div>

      <div className='map-img'>
        <img src='./images/infomation-map.png' alt='' />
      </div>
    </section>
  );
};

const ServiceStay = () => {
  return (
    <section className='stay-container' id='stay-service'>
      <div className='title'>
        <h1>施設サービス</h1>
      </div>

      <div className='card-container'>
        <ul>
          {card_data.service.map((v, i) => {
            return (
              <li key={i} className='card'>
                <div className='img'>
                  <img src={v.img} alt='' />
                </div>
                <p className='place'>{v.place}</p>
                <h4 className='service-name'>{v.name}</h4>
                <h6 className='category'>{v.category}</h6>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const FoodStay = () => {
  return (
    <section className='stay-container' id='stay-food'>
      <div className='title'>
        <h1>レストラン</h1>
      </div>

      <div className='card-container'>
        <ul>
          {card_data.food.map((v, i) => {
            return (
              <li key={i} className='card'>
                <div className='img'>
                  <img src={v.img} alt='' />
                </div>
                <p className='place'>{v.place}</p>
                <h4 className='service-name'>{v.name}</h4>
                <h6 className='category'>{v.category}</h6>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const ShopStay = (props) => {
  return (
    <section className='stay-container' id='stay-shop'>
      <div className='title'>
        <h1>{props.title}</h1>
      </div>

      <div className='card-container'>
        <ul>
          {card_data.shop.map((v, i) => {
            return (
              <li key={i} className='card'>
                <div className='img'>
                  <img src={v.img} alt='' />
                </div>
                <p className='place'>{v.place}</p>
                <h4 className='service-name'>{v.name}</h4>
                <h6 className='category'>{v.category}</h6>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
