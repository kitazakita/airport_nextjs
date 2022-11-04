import React from "react";

const MainMenu = () => {
  return (
    <>
      <section className="main-menu">
        <ul>
          <li>
            {/* メニューボタン */}
            <div className="menu">
              <div className="img">
                <img src="./images/mainMenu1.png" alt="" />
              </div>
              <p>飛行機に乗る</p>
            </div>
            {/* 展開式テーブル */}
            <div className="table">
              <div className="cell">
                <a href="#">国内線</a>
              </div>
              <div className="cell">
                <a href="#">国際線</a>
              </div>
            </div>
          </li>
          <li>
            <div className="menu">
              <div className="img">
                <img src="./images/mainMenu2.png" alt="" />
              </div>
              <p>空港で過ごす</p>
            </div>
            <div className="table">
              <div className="row">
                <div className="cell">
                  <a href="#">館内マップ</a>
                </div>
                <div className="cell">
                  <a href="#">施設サービス</a>
                </div>
              </div>
              <div className="row">
                <div className="cell">
                  <a href="#">レストラン</a>
                </div>
                <div className="cell">
                  <a href="#">ショップ</a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="menu">
              <div className="img">
                <img src="./images/mainMenu3.png" alt="" />
              </div>
              <p>交通アクセス</p>
            </div>
            <div className="table">
              <div className="row">
                <div className="cell">
                  <a href="#">バス</a>
                </div>
                <div className="cell">
                  <a href="#">電車</a>
                </div>
              </div>
              <div className="row">
                <div className="cell">
                  <a href="#">駐車場</a>
                </div>
                <div className="cell">
                  <a href="#">アクセス</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default MainMenu;
