import { Link } from "react-router-dom";
import './home.css'
import './page.css'

export const Home = () => {
    return (
      
      <div>
        <div class="background1">
          <span class = "sample1">
            <p>山下研究室 M1Ver.</p>
          </span>
        </div>

    <div class="example">
        <img src="g2.jpg" alt="画像1"/>
        <span class = "sample2">
        <p>当研究室のメンバーは、2022年4月に上智大学大学院理工学研究科理工学専攻情報学領域に入学しました。<br></br>
            さまざまな分野に対して多角的視点を持ち、データ分析によってサービス向上を目指しています。</p>
        </span>	
    </div>

    <div class="baseball_akira">
          <img src="akirabaseball.png" alt="画像0" width="15%" height="15%"/>
    </div>
        
    
    <div class ="background2">
      <span class = "sample3">
    <p>学生紹介</p>
    </span>
    </div>

    <div class="centerImg">
    <div><Link to="/page1">
      <img src="akira1.jpg" alt="画像2" width="60%" height="70%"/></Link><p>谷畑 耀(TANIHATA AKIRA)</p>
        <br />
  
    </div>
    <div><Link to="/page2">
      <img src="yuka1.jpg" alt="画像3" width="60%" height="70%"/></Link><p>坂牧 悠香(YUKA SAKAMAKI)</p>
        <br />
    </div>
    <div><Link to="/page3">
        <br /><img src="kana1.jpg" alt="画像5" width="60%" height="70%"/></Link><p>三橋 可奈(KANA MITSUHASHI)</p>
        <br />
        </div>
      <div><Link to="/page4">
        <br /><img src="tatsuki1.jpg" alt="画像5" width="60%" height="70%"/></Link><p>大池 樹(OIKE TATSUKI)</p>
        <br />
      </div>
</div>

<div class ="background2">
      <span class = "sample3">
    <p>課外活動</p>
    </span>
    </div>

<div class ="dken">
    <span class = "sample4">
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCFDyXEywtNhdtwqC3GAkYuA"><img src="D研.png" alt="画像6"/></a>
    </span>
</div>

      </div>
    );
  };
  