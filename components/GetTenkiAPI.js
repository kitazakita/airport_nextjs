import { useState } from 'react';
import { useEffect } from 'react';

export default function GetTenkiAPI() {
  const url = 'https://api.aoikujira.com/tenki/week.php?fmt=json&city=';
  const cityList = [
    {
      city: '札幌',
      cityId: 306,
      data: [],
    },
    {
      city: '東京',
      cityId: 319,
      data: [],
    },
    {
      city: '大阪',
      cityId: 331,
      data: [],
    },
    {
      city: '福岡',
      cityId: 346,
      data: [],
    },
  ];
  const [tenkiList, setTenkiList] = useState([...cityList]);

  const getTenkiAPI = async () => {
    for (let i = 0; i < cityList.length; i++) {
      cityList[i].data = await fetch(url + cityList[i].cityId)
        .then((v) => v.json())
        .then((json) => json[cityList[i].cityId]);
    }
    setTenkiList([...cityList]);
    setTenkiLoader(true);
  };

  useEffect(() => {
    getTenkiAPI();
  }, []);

  const [tenkiLoader, setTenkiLoader] = useState(false);
  const [sapporoVisible, setSapporoVisible] = useState(false);
  const [tokyoVisible, setTokyoVisible] = useState(false);
  const [osakaVisible, setOsakaVisible] = useState(false);
  const [fukuokaVisible, setFukuokaVisible] = useState(false);

  const sapporoToggle = () => {
    setSapporoVisible((prev) => !prev);
  };
  const tokyoToggle = () => {
    setTokyoVisible((prev) => !prev);
  };
  const osakaToggle = () => {
    setOsakaVisible((prev) => !prev);
  };
  const fukuokaToggle = () => {
    setFukuokaVisible((prev) => !prev);
  };
  let outputTenki;
  outputTenki = tenkiList.map((v, i) => {
    // 各地域の表示をbooleanで切り替え
    if (sapporoVisible) {
      if (v.city === '札幌') {
        return (
          <li key={i}>
            <h3>{v.city}</h3>
            <ul>
              {v.data.map((v2, i2) => {
                return (
                  <li key={i2}>
                    <span>{v2.date}</span>
                    <span>天気:{v2.forecast}</span>
                    <span>最高気温:{v2.maxtemp}度</span>
                    <span>最低気温:{v2.mintemp}度</span>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      }
    }
    if (tokyoVisible) {
      if (v.city === '東京') {
        return (
          <li key={i}>
            <h3>{v.city}</h3>
            <ul>
              {v.data.map((v2, i2) => {
                return (
                  <li key={i2}>
                    <span>{v2.date}</span>
                    <span>天気:{v2.forecast}</span>
                    <span>最高気温:{v2.maxtemp}度</span>
                    <span>最低気温:{v2.mintemp}度</span>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      }
    }
    if (osakaVisible) {
      if (v.city === '大阪') {
        return (
          <li key={i}>
            <h3>{v.city}</h3>
            <ul>
              {v.data.map((v2, i2) => {
                return (
                  <li key={i2}>
                    <span>{v2.date}</span>
                    <span>天気:{v2.forecast}</span>
                    <span>最高気温:{v2.maxtemp}度</span>
                    <span>最低気温:{v2.mintemp}度</span>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      }
    }
    if (fukuokaVisible) {
      if (v.city === '福岡') {
        return (
          <li key={i}>
            <h3>{v.city}</h3>
            <ul>
              {v.data.map((v2, i2) => {
                return (
                  <li key={i2}>
                    <span>{v2.date}</span>
                    <span>天気:{v2.forecast}</span>
                    <span>最高気温:{v2.maxtemp}度</span>
                    <span>最低気温:{v2.mintemp}度</span>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      }
    }
  });

  return (
    <>
      <section id='tenki'>
        <div className='title'>
          <h1>週間 天気予報</h1>
          <p>
            表示したい地域をクリックして下さい。
            <br />
            もう一度クリックすると非表示になります。
          </p>
        </div>
        <div id='japan-map'>
          <svg
            id='_イヤー_3'
            data-name='レイヤー 3'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1600 1200'
          >
            <defs></defs>
            <path
              onClick={sapporoToggle}
              id='sapporo'
              d='M1522.15,118.26h-338.31c-16.15,0-29.24,13.09-29.24,29.24v225.31c0,3.95,3.2,7.16,7.16,7.16h141.98c3.95,0,7.16-3.2,7.16-7.16v-14h211.26c16.15,0,29.24-13.09,29.24-29.24V147.5c0-16.15-13.09-29.24-29.24-29.24Z'
            />
            <path
              onClick={tokyoToggle}
              id='tokyo'
              d='M1469.42,427.43h-62.43c-3.26,0-5.9,2.55-5.9,5.7v26.72h-225.9c-6.47,0-11.71,5.07-11.71,11.32v196.83h-62.51c-19.7,0-35.67,15.66-35.67,34.98v177.76c0,19.32,15.97,34.98,35.67,34.98h362.64c6.47,0,11.71-5.07,11.71-11.32V433.14c0-3.15-2.64-5.7-5.9-5.7Z'
            />
            <rect
              id='sikoku'
              x='502.84'
              y='840.28'
              width='236.62'
              height='119.28'
              rx='18.64'
              ry='18.64'
            />
            <path
              onClick={fukuokaToggle}
              id='fukuoka'
              d='M408.4,840.46h-56.9v-34.33c0-8.84-7.17-16.01-16.01-16.01h-116.04c-.9-.18-1.83-.27-2.78-.27h-52.09c-7.93,0-14.35,6.43-14.35,14.35v37.32c0,7.93,6.43,14.35,14.35,14.35h34.28v156.89c0,8.84,7.17,16.01,16.01,16.01h120.61c8.84,0,16.01-7.17,16.01-16.01v-30.53h56.9c12.15,0,22-9.85,22-22v-97.77c0-12.15-9.85-22-22-22Z'
            />
            <rect
              id='okinawa'
              x='49.27'
              y='962.58'
              width='37.21'
              height='60.43'
              rx='15.71'
              ry='15.71'
            />
            <path
              onClick={osakaToggle}
              id='osaka'
              d='M1017.68,676.38H453.08c-17.18,0-31.1,13.92-31.1,31.1v43.95c0,1.25,.08,2.48,.23,3.69v21.63c0,23.72,19.23,42.95,42.95,42.95h342.93v117.81c0,17.07,13.84,30.9,30.9,30.9h90.82c17.07,0,30.9-13.84,30.9-30.9v-25.87h63.51c13.56,0,24.55-10.99,24.55-24.55v-179.6c0-17.18-13.92-31.1-31.1-31.1Z'
            />
            <text transform='translate(1196.68 278.93)'>
              <tspan x='0' y='0'>
                札幌
              </tspan>
            </text>
            <text transform='translate(1179.48 846.63)'>
              <tspan x='0' y='0'>
                東京
              </tspan>
            </text>
            <text transform='translate(844.59 852.98)'>
              <tspan x='0' y='0'>
                大阪
              </tspan>
            </text>
            <text transform='translate(234.21 909.31)'>
              <tspan x='0' y='0'>
                福岡
              </tspan>
            </text>
          </svg>
        </div>

        <ul id='tenki-menu'>
          {tenkiLoader ? (
            outputTenki
          ) : (
            <h3 className='loader-animation'>
              天気データロード中です
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </h3>
          )}
        </ul>
      </section>
    </>
  );
}
