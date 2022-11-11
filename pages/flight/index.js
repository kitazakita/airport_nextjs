import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextField from "@mui/material/TextField";

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
  return (
    <section id="flight-infomation">
      <h1>本日のフライト情報</h1>

      <div className="flight-search-container">
        <h4>国内線</h4>

        <div className="search-container">
          <div className="target">
            <h5>目的地</h5>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
