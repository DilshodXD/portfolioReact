import React from "react";
import "./component.css";
import "./media.css";
import About1 from "./img/about1.jpg";
import About2 from "./img/about2.jpg";
import About3 from "./img/about3.jpg";

function Home() {
  return (
    <>
      <div class="about" id="about">
        <div class="container">
          <div class="about__inner">
            <div class="about__content">
              <div class="about__content-left">
                <div class="about__content-img">
                  <img src={About1} alt="" class="content__img"></img>
                </div>
                <div class="about__content-img">
                  <img src={About2} alt="" class="content__img"></img>
                </div>
              </div>
              <div class="about__content-middle">
                <div class="about__content-text">
                  <h2 class="about__content-title">Men haqimda</h2>
                  <p class="about__content-subtitle">
                    Hammaga yana bir marotaba salom! Siz bilasizki mening ismim
                    Dilshod. Men haqimda qisqacha malumot: yoshim 18 da, TSTU da
                    talabaman, Workout ga qiziqama va shugullanib turaman. Nega
                    aynan dasturlshni o'rganganimni sorasangiz u kelajak kasbi
                    va menga bu yoqadi. Bolaligimdan ijodni yahshi koraman.
                    Toshkent viloyatining chinoz tumanida yashayman. Front-end
                    dasturchiligi men uchun juda ajoyib kasb va qiziqarli. Har
                    xil kreativ fikirlashlar jarayonlari ayniqsa qiziq.
                    Dasturlashni Proweb o'quv markazida 9 oy mobaynida o'rgandim
                    va undan tashqari imkoniyatlarimdan kelib chiqgan holda
                    bilimlarimni oshirib kelmoqdaman. Ish boshlashdan maqsadim
                    bilimlarimni amalda sinash, malakamni oshirish va yanada
                    tezroq rivojlanishim ucun daromad topish. Maqsadim yanada
                    koproq bilimlarga ega bo'lib Fullstack dasturchi bolish.
                  </p>
                </div>
              </div>
              <div class="about__content-right">
                <div class="about__content-img">
                  <img src={About3} alt="" class="content__img"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
