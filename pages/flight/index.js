import { useState } from "react";
import Header from "../../components/Header";
import GetTenkiAPI from "../../components/GetTenkiAPI";
import Footer from "../../components/Footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import flight_data from "../../components/flight_data.json";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function index() {
  return (
    <>
      <Header title="九州国際空港-フライト" />
      <MainVisual />
      <FlightInfomation />
      <GetTenkiAPI />
      <JapanAirline />
      <CarryOnBag />
      <AirlineAll />
      <Footer />
    </>
  );
}

const MainVisual = () => {
  return (
    <section id="flight-main-visual">
      <div className="text-content">
        <h1>飛行機に乗る</h1>
        <h4>-Flight-</h4>
      </div>
    </section>
  );
};

const FlightInfomation = () => {
  // ソート機能用セレクトメニューの値保持用
  const [goal, setGoal] = useState("");
  const [airline, setAirline] = useState("");
  // ソート機能用セレクトメニューの値が変更されたときにステートを更新
  const selectGoalMenuHandleChange = (event) => {
    setGoal(event.target.value);
  };
  const selectAirlineMenuHandleChange = (event) => {
    setAirline(event.target.value);
  };

  // 空の変数を用意。
  // 下記変数にソートして作成したDOMが格納される。
  let sortData;
  //下記Switch文は長文のため最小化を推奨。
  switch (goal) {
    case "東京":
      sortData = flight_data.flight.map((v, i) => {
        if (v.goal === "東京") {
          switch (airline) {
            case "ANA":
              if (v.airline === "ANA") {
                return (
                  <tr key={i}>
                    <td>{v.time}</td>
                    <td>
                      {v.goal}・{v.airline}
                    </td>
                    <td>{v.status}</td>
                  </tr>
                );
              }
              break;

            case "JAL":
              if (v.airline === "JAL") {
                return (
                  <tr key={i}>
                    <td>{v.time}</td>
                    <td>
                      {v.goal}・{v.airline}
                    </td>
                    <td>{v.status}</td>
                  </tr>
                );
              }
              break;

            case "SKY":
              if (v.airline === "SKY") {
                return (
                  <tr key={i}>
                    <td>{v.time}</td>
                    <td>
                      {v.goal}・{v.airline}
                    </td>
                    <td>{v.status}</td>
                  </tr>
                );
              }
              break;

            default:
              return (
                <tr key={i}>
                  <td>{v.time}</td>
                  <td>
                    {v.goal}・{v.airline}
                  </td>
                  <td>{v.status}</td>
                </tr>
              );
          }
        }
      });
      break;

    case "大阪":
      sortData = flight_data.flight.map((v, i) => {
        if (v.goal === "大阪") {
          switch (airline) {
            case "ANA":
              if (v.airline === "ANA") {
                return (
                  <tr key={i}>
                    <td>{v.time}</td>
                    <td>
                      {v.goal}・{v.airline}
                    </td>
                    <td>{v.status}</td>
                  </tr>
                );
              }
              break;
            case "JAL":
              if (v.airline === "JAL") {
                return (
                  <tr key={i}>
                    <td>{v.time}</td>
                    <td>
                      {v.goal}・{v.airline}
                    </td>
                    <td>{v.status}</td>
                  </tr>
                );
              }
              break;
            case "SKY":
              if (v.airline === "SKY") {
                return (
                  <tr key={i}>
                    <td>{v.time}</td>
                    <td>
                      {v.goal}・{v.airline}
                    </td>
                    <td>{v.status}</td>
                  </tr>
                );
              }
              break;

            default:
              return (
                <tr key={i}>
                  <td>{v.time}</td>
                  <td>
                    {v.goal}・{v.airline}
                  </td>
                  <td>{v.status}</td>
                </tr>
              );
          }
        }
      });
      break;

    case "北海道":
      sortData = flight_data.flight.map((v, i) => {
        if (v.goal === "北海道") {
          switch (airline) {
            case "ANA":
              if (v.airline === "ANA") {
                return (
                  <tr key={i}>
                    <td>{v.time}</td>
                    <td>
                      {v.goal}・{v.airline}
                    </td>
                    <td>{v.status}</td>
                  </tr>
                );
              }
              break;
            case "JAL":
              if (v.airline === "JAL") {
                return (
                  <tr key={i}>
                    <td>{v.time}</td>
                    <td>
                      {v.goal}・{v.airline}
                    </td>
                    <td>{v.status}</td>
                  </tr>
                );
              }
              break;
            case "SKY":
              if (v.airline === "SKY") {
                return (
                  <tr key={i}>
                    <td>{v.time}</td>
                    <td>
                      {v.goal}・{v.airline}
                    </td>
                    <td>{v.status}</td>
                  </tr>
                );
              }
              break;

            default:
              return (
                <tr key={i}>
                  <td>{v.time}</td>
                  <td>
                    {v.goal}・{v.airline}
                  </td>
                  <td>{v.status}</td>
                </tr>
              );
          }
        }
      });
      break;

    default:
      sortData = flight_data.flight.map((v, i) => {
        switch (airline) {
          case "ANA":
            if (v.airline === "ANA") {
              return (
                <tr key={i}>
                  <td>{v.time}</td>
                  <td>
                    {v.goal}・{v.airline}
                  </td>
                  <td>{v.status}</td>
                </tr>
              );
            }
            break;
          case "JAL":
            if (v.airline === "JAL") {
              return (
                <tr key={i}>
                  <td>{v.time}</td>
                  <td>
                    {v.goal}・{v.airline}
                  </td>
                  <td>{v.status}</td>
                </tr>
              );
            }
            break;
          case "SKY":
            if (v.airline === "SKY") {
              return (
                <tr key={i}>
                  <td>{v.time}</td>
                  <td>
                    {v.goal}・{v.airline}
                  </td>
                  <td>{v.status}</td>
                </tr>
              );
            }
            break;

          default:
            return (
              <tr key={i}>
                <td>{v.time}</td>
                <td>
                  {v.goal}・{v.airline}
                </td>
                <td>{v.status}</td>
              </tr>
            );
        }
      });
  }

  // ソート結果の最大表示を切り替える。button用
  const [maxVisible, setMaxVisible] = useState(false);
  const toggleMaxVisible = () => {
    setMaxVisible((prev) => !prev);
  };

  return (
    <section id="flight-infomation">
      <h1>本日のフライト情報</h1>

      <div className="flight-search-container">
        <h2>国内線</h2>

        <div className="search-container">
          <div className="target">
            <FormControl
              variant="filled"
              sx={{
                m: 1,
                minWidth: 120,
                background: "white",
              }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                目的地
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={goal}
                onChange={selectGoalMenuHandleChange}
              >
                <MenuItem value="">
                  <em>ALL</em>
                </MenuItem>
                <MenuItem value={"北海道"}>北海道</MenuItem>
                <MenuItem value={"東京"}>東京</MenuItem>
                <MenuItem value={"大阪"}>大阪</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="airline">
            <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 120, background: "white" }}
            >
              <InputLabel id="demo-simple-select-filled-label">
                航空会社
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={airline}
                onChange={selectAirlineMenuHandleChange}
              >
                <MenuItem value="">
                  <em>ALL</em>
                </MenuItem>
                <MenuItem value={"JAL"}>JAL</MenuItem>
                <MenuItem value={"ANA"}>ANA</MenuItem>
                <MenuItem value={"SKY"}>SKY</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="result-container">
        <table>
          <thead>
            <tr>
              <th>出発時刻</th>
              <th>目的地・航空会社</th>
              <th>状況</th>
            </tr>
          </thead>

          {maxVisible ? (
            <tbody className="maxvisible">{sortData}</tbody>
          ) : (
            <tbody className="maxvisible-7">{sortData}</tbody>
          )}
        </table>
        <button onClick={toggleMaxVisible} className="max-visible-button">
          {maxVisible ? (
            <>
              <KeyboardArrowUpIcon />
              表示を少なくする
            </>
          ) : (
            <>
              <KeyboardArrowDownIcon />
              全て表示
            </>
          )}
        </button>
      </div>
    </section>
  );
};

const JapanAirline = () => {
  return (
    <section id="japan-airline">
      <div className="title">
        <h1>飛行機の乗り方</h1>
      </div>

      <div className="japan-airline-flow">
        <ol className="figure">
          <li>1.チェックイン</li>
          <li>2.保安検査</li>
          <li>3.搭乗</li>
        </ol>

        <dl className="description">
          <dt>Step.1 チェックイン</dt>
          <dd>
            <h3>1F各航空会社カウンターにてお手続きください。</h3>
            <figure className="inner">
              <img src="./images/flow01.jpg" alt="" />
              <figcaption>
                チェックインカウンター又は自動チェックイン機をご用意しております。
                事前にWEBでチェックイン済のお客様は後述の
                Step.2よりお手続き下さい。
              </figcaption>
            </figure>
          </dd>

          <dt>Step.2 保安検査</dt>
          <dd>
            <h3>2F保安検査場にて手荷物検査を行います。</h3>
            <figure className="inner">
              <img src="./images/flow02.jpg" alt="" />
              <figcaption>
                チェックイン後に搭乗券をお渡ししますので、搭乗券をスタッフにご提示下さい。その場で手荷物検査、ボディチェックを実施いたします。貴重品や身に着けている小物類は、機内持込手荷物にいれ塚、トレイに並べてＸ線検査機に通してください。
              </figcaption>
            </figure>
          </dd>

          <dt>Step.3 搭乗</dt>
          <dd>
            <h3>2F出発口、搭乗ゲートで搭乗ください。</h3>
            <figure className="inner">
              <img src="./images/flow03.jpg" alt="" />
              <figcaption>
                搭乗ゲートでは、各航空会社の係員の指示に従って搭乗ください。搭乗ゲートの場所は、搭乗券に記載してております。　　
              </figcaption>
            </figure>
          </dd>
        </dl>
      </div>
      <div className="shape"></div>
    </section>
  );
};

const CarryOnBag = () => {
  return (
    <section id="carry-on-bag">
      <div className="title">
        <h1>手荷物の持ち込み</h1>
      </div>

      <div className="inner-container">
        <figure>
          <figcaption>
            機内への手荷物の持ち込み
            ハサミ、ナイフ類、先の尖ったもの、バット類等は、機内持ち込みができませんので、手荷物カウンターでお預けください。可燃性物質、高圧ガス、引火性液体等は、機内持ち込みもお預りもできませんので、ご確認のうえ、お越しください。
          </figcaption>
          <img src="./images/bad-items01.png" alt="" />
        </figure>
        <figure>
          <figcaption>
            液体類は機内持ち込み制限がございます。
            機内に持ち込む液体物、ジェル等は、100ミリリットル以下の容器に入れてください。液体物が入った容器は、容量1リットル以下、縦横の辺の合計が40cm以内で、透明かつ再封可能なプラスチック製袋に入れてください。
            それ以上のものは機内への持ち込みはできませんので、お預け手荷物に入れてください。
          </figcaption>
          <img src="./images/bad-items02.png" alt="" />
        </figure>
        <figure>
          <figcaption>
            機内持ち込み手荷物サイズは搭乗機の機種によって異なります。詳細は航空会社へお問い合わせください。
          </figcaption>
          <img src="./images/bad-items03.png" alt="" />
        </figure>
      </div>
    </section>
  );
};

const AirlineAll = () => {
  return (
    <section id="airline-all">
      <div className="title">
        <h1>航空会社一覧</h1>
      </div>

      <table>
        <thead>
          <tr>
            <td>航空会社名</td>
            <td>航空会社コード</td>
            <td>連絡先</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>全日本空輸</td>
            <td>ANA</td>
            <td>000-000-0000</td>
          </tr>
          <tr>
            <td>日本航空</td>
            <td>JAL</td>
            <td>000-000-0000</td>
          </tr>
          <tr>
            <td>スカイマーク</td>
            <td>SKY</td>
            <td>000-000-0000</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
