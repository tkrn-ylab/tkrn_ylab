import { Link } from "react-router-dom";
import './home.css'
export const Home = () => {
    return (

      <div>
        <div class="background">
        <span class = "sample1">
        <h1>山下研究室　理工学専攻情報学領域　M1ver</h1>
        </span>
    </div>

    <div class="example">
        <img src="g2.jpg" alt="画像1"/>
        <span class = "sample2">
        <p>当研究室のメンバーは、2022年4月に上智大学大学院理工学研究科理工学専攻情報学領域に入学しました。<br></br>
            さまざまな分野に対して多角的視点を持ち、データ分析によってサービス向上を目指しています。</p>
        </span>	
      </div>
    
    <div>
      <span class = "sample3">
    <h2>学生紹介</h2>
    </span>
    </div>

    <div class="centerImg">
    <div><Link to="/page1">
      <img src="akira2.jpg" alt="画像2" width="60%" height="70%"/></Link>
        <br />
        <p>谷畑 耀(TANIHATA AKIRA)</p>
    </div>
    <div><Link to="/page2">
      <img src="yuka1.jpg" alt="画像3" width="60%" height="70%"/></Link>
        <br />
        <p>坂牧 悠香(SAKAMAKI YUKA)</p>
    </div>
    <div><Link to="/page3">
      <img src="kana1.jpg" alt="画像4" width="60%" height="70%"/></Link><p>三橋 可奈(MITSUHASHI KANA)</p>
        <br />
    </div>
    <div><Link to="/page3">
        <br /><img src="tatsuki1.jpg" alt="画像5" width="60%" height="70%"/></Link><p>大池 樹(OIKE Tatsuki)</p>
        <br />
        </div>
</div>

<div class ="dken">
    <span class = "sample4">
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCFDyXEywtNhdtwqC3GAkYuA"><img src="D研.png" alt="画像6"/></a><p>データサイエンス研究所(D研)</p>
    </span>
</div>

      </div>
    );
  };
  