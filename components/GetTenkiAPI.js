import { useState } from "react";
import { useEffect } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function GetTenkiAPI() {
  const url = "https://api.aoikujira.com/tenki/week.php?fmt=json&city=";
  const cityList = [
    {
      city: "札幌",
      cityId: 306,
      data: [],
    },
    {
      city: "東京",
      cityId: 319,
      data: [],
    },
    {
      city: "大阪",
      cityId: 331,
      data: [],
    },
    {
      city: "福岡",
      cityId: 346,
      data: [],
    },
  ];
  const [tenkiList, setTenkiList] = useState([...cityList]);
  const [tenkiLoader, setTenkiLoader] = useState(false);
  const [tenkiMenuToggle, setTenkiMenuToggle] = useState(false);

  const getTenkiAPI = async () => {
    for (let i = 0; i < cityList.length - 3; i++) {
      cityList[i].data = await fetch(url + cityList[i].cityId)
        .then((v) => v.json())
        .then((json) => json[cityList[i].cityId]);
    }
    setTenkiList([...cityList]);
    setTenkiLoader(true);
  };

  useEffect(() => {
    // コンポーネントレンダリング後に実行
    getTenkiAPI();
  }, []);

  return (
    <>
      <section id="tenki" className={tenkiMenuToggle ? "active" : ""}>
        <div className="flex-container">
          <button>
            {tenkiMenuToggle ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </button>
          <h1>天気予報</h1>
        </div>
        <ul id="tenki-menu">
          {tenkiLoader ? (
            tenkiList.map((v, i) => {
              return (
                <li key={i}>
                  <h3>{v.city}</h3>
                  {/* <h4>{v.cityId}</h4> */}
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
            })
          ) : (
            <h3>ロード中です...</h3>
          )}
        </ul>
      </section>
    </>
  );
}
