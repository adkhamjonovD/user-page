import { useState } from "react";
import "./App.css";
import Logo from "./assets/Logo.svg";
import Calendar from "./assets/Calendar.svg";
import Clock from "./assets/Clock.svg";
import User from "./assets/user.svg";
function App() {
  return (
    <>
      <div>
        <div className="section">
          <div className="section_bg">
            <div className="container">
              <div className="section__box">
                <div className="section__row">
                  <div className="logo">
                    <img src={Logo} alt="" />
                  </div>
                  <div className="section__desc">
                    <h1>
                      "Yangi til o'rganishdagi <br /> eng mashhur bahonalar"
                    </h1>
                  </div>
                  <div className="section__card">
                    <div className="card__item">
                      <img src={Calendar} alt="" />
                      <h4>
                        <span>KUNI:</span> <br /> 15-MAY
                      </h4>
                    </div>
                    <div className="card__item">
                      <img src={Clock} alt="" />
                      <h4>
                        <span>VAQTI:</span> <br /> 20:00
                      </h4>
                    </div>
                  </div>
                  <div className="section__on">
                    <img src={User} alt="" />
                  </div>
                  <div className="section__regis">
                    <button>hoziroq Ro‘yxatdan o‘ting</button>
                  </div>
                  <div className="section__num">
                    <h2>01</h2>
                    <p>
                      Sardor Xudouberdiyevdan imtixonda qanday psixologik
                      tayyorlaynish kerakligini bilib olasiz*
                    </p>
                  </div>
                </div>

                <div className="section__user">
                  <div className="user__bg"></div>
                  <div className="user__box"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
