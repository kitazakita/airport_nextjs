import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ChairIcon from "@mui/icons-material/Chair";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import InfoIcon from "@mui/icons-material/Info";

const Footer = () => {
  return (
    <footer>
      <div className="inner-container">
        <div className="logo">
          <img src="./images/footer-logo.png" alt="" />
        </div>
        <ul className="footer-content">
          <li>
            <h4>
              <FlightTakeoffIcon />
              飛行機に乗る
            </h4>
            <p>国内線に乗る</p>
            <p>国際線に乗る</p>
            <p>航路別時刻表</p>
            <p>航空会社一覧</p>
          </li>
          <li>
            <h4>
              <ChairIcon />
              空港で過ごす
            </h4>
            <p>館内マップ</p>
            <p>レストラン</p>
            <p>ショップ</p>
            <p>免税店</p>
          </li>
          <li>
            <h4>
              <DirectionsCarIcon />
              交通アクセス
            </h4>
            <p>JR</p>
            <p>地下鉄</p>
            <p>高速バス</p>
            <p>お車でお越しの方</p>
          </li>
          <li>
            <h4>
              <InfoIcon />
              空港について
            </h4>
            <p>企業情報</p>
            <p>採用情報</p>
            <p>法人の方へ</p>
            <p>プライバシーポリシー</p>
          </li>
        </ul>
      </div>

      <div className="copy-right">
        <small>&copy; kitazaki 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
