import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import accordionMenuData from './accordion-data.json';
import HelpIcon from '@mui/icons-material/Help';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import CallIcon from '@mui/icons-material/Call';

export default function index() {
  return (
    <>
      <Header title='九州国際空港-空港について' />
      <MainVisual />
      <Outline />
      <Recruit />
      <Help />
      <QuestionAnswer />
      <Contact />
      <Footer />
    </>
  );
}

const MainVisual = () => {
  return (
    <section id='info-main-visual'>
      <div className='text-content'>
        <h1>空港について</h1>
        <h4>-Info-</h4>
      </div>
    </section>
  );
};

const Outline = () => {
  return (
    <section id='info-outline'>
      <div className='title'>
        <h1>空港の概要</h1>
      </div>

      <table>
        <tbody>
          <tr>
            <td>名称</td>
            <td>九州国際空港</td>
          </tr>
          <tr>
            <td>面積</td>
            <td>2,000,000㎡</td>
          </tr>
          <tr>
            <td>空港の位置</td>
            <td>北緯0度0分 東経0度0分</td>
          </tr>
          <tr>
            <td>基本設計</td>
            <td>滑走路2,000m ✕ 50m</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

const Recruit = () => {
  return (
    <section id='recruit'>
      <div className='title'>
        <h1>採用情報</h1>
      </div>
      <div className='img'>
        <img src='./images/coming-soon.png' alt='' />
      </div>
    </section>
  );
};

const Help = () => {
  return (
    <section id='help'>
      <div className='title'>
        <h1>お手伝いが必要な方</h1>
      </div>

      <figure className='help'>
        <img src='./images/info-help.jpg' alt='' />
        <figcaption>
          お手伝いが必要な方はお気軽に総合案内所までお問い合わせ下さい。
        </figcaption>
      </figure>
    </section>
  );
};

const QuestionAnswer = () => {
  /* 
    アコーディオンメニューの実装
    jsonデータから抽出。
    mapで回す。各liにkeyを設定し、クリックされた該当のkeyをステートに渡す。
  */
  const [click, setClick] = useState(100); //アコーディオンメニューの数より多めに設定

  const handleClick = (i) => {
    if (click === i) {
      return setClick(100);
    }
    return setClick(i);
  };

  return (
    <section id='question-answer'>
      <div className='title'>
        <h1>よくある質問</h1>
      </div>

      <ul className='accordion-menu'>
        {accordionMenuData.menu.map((menu, i) => {
          return (
            <li key={i}>
              <button
                className={click === i ? 'question open' : 'question close'}
                onClick={() => handleClick(i)}
              >
                <p>
                  {<HelpIcon />}&nbsp; {menu.question}
                </p>
                <div className='icon'>
                  <span></span>
                  <span></span>
                </div>
              </button>
              <div className={click === i ? 'answer' : 'answer d-none'}>
                {<HdrAutoIcon />}
                &nbsp;
                {menu.answer}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const Contact = () => {
  return (
    <section id='info-contact'>
      <div className='title'>
        <h1>お問い合わせ</h1>
      </div>

      <div className='container'>
        <h3>ご不明な点は下記よりお問い合わせください。</h3>
        <div className='inner'>
          <div className='content'>
            <h4>九州国際空港コールセンター</h4>
            <p>受付時間:9:00~20:00</p>
            <div className='call-box'>
              {<CallIcon />}
              <a href='tel:000-000000-00000'>000-000-0000</a>
            </div>
            <p className='tel-warning'>クリックすると電話が立ち上がります。</p>
          </div>
        </div>
      </div>
    </section>
  );
};
