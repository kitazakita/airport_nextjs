import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import flight_data from "../../components/flight_data.json";

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
  const [goal, setGoal] = useState("");
  const [airline, setAirline] = useState("");

  const selectGoalMenuHandleChange = (event) => {
    setGoal(event.target.value);
  };
  const selectAirlineMenuHandleChange = (event) => {
    setAirline(event.target.value);
  };

  console.log(goal);

  let testDom;

  switch (goal) {
    case "東京":
      console.log("東京が選択されました");
      testDom = flight_data.flight.map((v, i) => {
        if (v.goal === "東京") {
          return (
            <tr key={i}>
              <td>{v.time}</td>
              <td>
                {v.goal}・{v.airline}
              </td>
            </tr>
          );
        }
      });
      break;

    case "大阪":
      console.log("大阪が選択されました");
      testDom = flight_data.flight.map((v, i) => {
        if (v.goal === "大阪") {
          return (
            <tr key={i}>
              <td>{v.time}</td>
              <td>
                {v.goal}・{v.airline}
              </td>
            </tr>
          );
        }
      });
      break;

    case "北海道":
      console.log("北海道が選択されました");
      testDom = flight_data.flight.map((v, i) => {
        if (v.goal === "北海道") {
          return (
            <tr key={i}>
              <td>{v.time}</td>
              <td>
                {v.goal}・{v.airline}
              </td>
            </tr>
          );
        }
      });
      break;

    default:
      testDom = flight_data.flight.map((v, i) => {
        return (
          <tr key={i}>
            <td>{v.time}</td>
            <td>
              {v.goal}・{v.airline}
            </td>
          </tr>
        );
      });
    // console.log("その他です");
  }

  // console.log(goal);
  // console.log(airline);
  // console.log(flight_data.flight);
  // const task = flight_data.flight.map((v, i) => {
  //   console.log(v);
  //   return v;
  // });

  // flight_data.flight.forEach((v) => {
  //   console.log(v);
  // });

  return (
    <section id="flight-infomation">
      <h1>本日のフライト情報</h1>

      <div className="flight-search-container">
        <h2>国内線</h2>

        <div className="search-container">
          <div className="target">
            <FormControl
              variant="filled"
              sx={{ m: 1, minWidth: 120, background: "white" }}
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
                  <em>None</em>
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
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"JAL"}>JAL</MenuItem>
                <MenuItem value={"ANA"}>ANA</MenuItem>
                <MenuItem value={"SKY"}>SKY</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="submit-button">
            <Button variant="contained" sx={{ padding: "1rem 2rem" }}>
              検索
            </Button>
          </div>
        </div>
      </div>

      <div className="result-container">
        <table>
          <thead>
            <tr>
              <td>出発時刻</td>
              <td>目的地・航空会社</td>
              <td>状況</td>
            </tr>
          </thead>

          <tbody>
            {/* {flight_data.flight.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{v.time}</td>
                  <td>
                    {v.goal}・{v.airline}
                  </td>
                </tr>
              );
            })} */}
            {testDom}
          </tbody>
        </table>
      </div>
    </section>
  );
};
