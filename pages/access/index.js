import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TrainIcon from '@mui/icons-material/Train';
import { Button } from '@mui/material';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

export default function index() {
  return (
    <>
      <Header title='九州国際空港-アクセス' />
      <MainVisual />
      <AccessTitle />
      <Train />
      <Bus />
      <Car />
      <Footer />
    </>
  );
}

const MainVisual = () => {
  return (
    <section id='access-main-visual'>
      <div className='text-content'>
        <h1>アクセス</h1>
        <h4>- Access -</h4>
      </div>
    </section>
  );
};

const AccessTitle = () => {
  return (
    <section id='access-title'>
      <div className='title'>
        <h1>交通アクセス</h1>
      </div>
    </section>
  );
};

const Train = () => {
  return (
    <section id='access-train'>
      <div className='headline'>
        <div className='logo'>
          <TrainIcon />
        </div>
        <h1 className='title'>電車でお越しの方</h1>
      </div>

      <div className='subway-near'>
        <h4>地下鉄　最寄り駅</h4>
        <div className='description'>
          <p>九州国際空港駅</p>
          <p>国内ターミナルまで徒歩1分</p>
        </div>
      </div>

      <div className='jr-near'>
        <h4>JR最寄り駅</h4>
        <div className='description'>
          <p>九州国際空港駅</p>
          <p>国内ターミナルまで徒歩3分</p>
        </div>
      </div>

      <div className='button-container'>
        <Button variant='contained'>地下鉄&nbsp;公式サイト</Button>
        <Button variant='contained'>JR&nbsp;公式サイト</Button>
      </div>
    </section>
  );
};

const Bus = () => {
  return (
    <section id='access-bus'>
      <div className='headline'>
        <div className='logo'>
          <AirportShuttleIcon />
        </div>
        <h1 className='title'>バスでお越しの方</h1>
      </div>

      <div className='near'>
        <h4>最寄りのバス停</h4>
        <div className='description'>
          <p>九州国際空港入口</p>
          <p>国内ターミナルまで徒歩1分</p>
        </div>
        <div className='description'>
          <p>〇〇一丁目</p>
          <p>国内ターミナルまで徒歩5分</p>
        </div>
      </div>

      <div className='button-container'>
        <Button variant='contained'>市営バス&nbsp;公式サイト</Button>
      </div>
    </section>
  );
};

const Car = () => {
  return (
    <section id='access-car'>
      <div className='headline'>
        <div className='logo'>
          <DirectionsCarIcon />
        </div>
        <h1 className='title'>お車でお越しの方</h1>
      </div>

      <div className='near'>
        <h4>最寄りのインターチェンジ</h4>
        <div className='description'>
          <p>〇〇インターチェンジ</p>
          <p>空港方面に5キロ</p>
        </div>
        <div className='description'>
          <p>〇〇インターチェンジ</p>
          <p>空港方面に15キロ</p>
        </div>
      </div>

      <div className='button-container'>
        <Button variant='contained'>高速道路情報</Button>
      </div>

      <div className='parking'>
        <h4>九州国際空港　駐車場</h4>
        <div className='map-img'>
          <img src='./images/parking-img.png' alt='' />
        </div>
        <ul>
          <li>
            <p>無料駐車場A</p>
            <p>収容台数300台</p>
          </li>
          <li>
            <p>無料駐車場B</p>
            <p>収容台数300台</p>
          </li>
          <li>
            <p>有料駐車場C</p>
            <p>収容台数300台</p>
          </li>
          <li>
            <p>有料駐車場D</p>
            <p>収容台数300台</p>
          </li>
          <li>
            <p>有料駐車場E</p>
            <p>収容台数300台</p>
          </li>
        </ul>
        <p className='parking-price'>
          ※有料駐車場の駐車料金は、1時間200円。 1日の最大料金は1200円です。
        </p>
      </div>
    </section>
  );
};
