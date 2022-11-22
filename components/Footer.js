import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import ChairIcon from '@mui/icons-material/Chair';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InfoIcon from '@mui/icons-material/Info';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='inner-container'>
        <div className='logo'>
          <Link href='./'>
            <img src='./images/footer-logo.png' alt='' />
          </Link>
        </div>
        <ul className='footer-content'>
          <li>
            <Link href='./flight'>
              <h4>
                <FlightTakeoffIcon />
                飛行機に乗る
              </h4>
            </Link>
            <p>
              <Link href='./flight#flight-infomation'>フライト情報</Link>
            </p>
            <p>
              <Link href='./flight#tenki'>週間天気予報</Link>
            </p>
            <p>
              <Link href='./flight#japan-airline'>飛行機の乗り方</Link>
            </p>
            <p>
              <Link href='./flight#carry-on-bag'>お手荷物の持ち込み</Link>
            </p>
            <p>
              <Link href='./flight#airline-all'>航空会社一覧</Link>
            </p>
          </li>
          <li>
            <Link href='./stay'>
              <h4>
                <ChairIcon />
                空港で過ごす
              </h4>
            </Link>
            <p>
              <Link href='./stay#infomation-map'>館内マップ</Link>
            </p>
            <p>
              <Link href='./stay#stay-service'>施設サービス</Link>
            </p>
            <p>
              <Link href='./stay#stay-food'>レストラン</Link>
            </p>
            <p>
              <Link href='./stay#stay-shop'>ショップ</Link>
            </p>
            <p>
              <Link href='./stay#stay-shop'>免税店</Link>
            </p>
          </li>
          <li>
            <Link href='./access'>
              <h4>
                <DirectionsCarIcon />
                交通アクセス
              </h4>
            </Link>
            <p>
              <Link href='./access#access-title'>交通アクセス</Link>
            </p>
            <p>
              <Link href='./access#access-train'>電車でお越しの方</Link>
            </p>
            <p>
              <Link href='./access#access-bus'>バスでお越しの方</Link>
            </p>
            <p>
              <Link href='./access#access-car'>お車でお越しの方</Link>
            </p>
          </li>
          <li>
            <Link href='./info'>
              <h4>
                <InfoIcon />
                空港について
              </h4>
            </Link>
            <p>
              <Link href='./info#info-outline'>空港の概要</Link>
            </p>
            <p>
              <Link href='./info#recruit'>採用情報</Link>
            </p>
            <p>
              <Link href='./info#help'>お手伝いが必要な方</Link>
            </p>
            <p>
              <Link href='./info#question-answer'>よくある質問</Link>
            </p>
            <p>
              <Link href='./info#info-contact'>お問い合わせ</Link>
            </p>
          </li>
        </ul>
      </div>

      <div className='copy-right'>
        <small>&copy; kitazaki 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
