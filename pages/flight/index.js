import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import flight_data from "../../components/flight_data.json";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function index() {
  return (
    <>
      <Header />
      <MainVisual />
      <FlightInfomation />
      <Footer />
    </>
  );
}

const MainVisual = () => {
  return (
    <section id="flight-main-visual">
      <div className="text-content">
        <h1>飛行機に乗る</h1>
        <h4>Flight</h4>
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
