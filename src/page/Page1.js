import { Link } from "react-router-dom";

export const Page1 = () => {
    return (
      <div>
        <h1><p class="no4"><font size="7">谷畑耀 (AKIRA TANIHATA)</font></p></h1> 
        <br />
       <h3 class="heading04"><font size="7">写真紹介</font></h3>

          <div id="cards">
            <div class="card">
              <div class="picture"><img src="akira.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                初めてのサウナハットデビュー！
                @スパジアムジャポン
                </p>
              </div>
            </div>
            <div class="card" id="card-center">
              <div class="picture"><img src="akira2.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                題名
                「研究室にハブられた」
                みんな仲良くしてね。
                </p>
              </div>
            </div>
            <div class="card">
              <div class="picture"><img src="akira3.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                部活の最後の大会。<br />部活人生やっと終わり。
                </p>
              </div>
              
            </div>
          </div> 

          <br /><br /><br /><br /><br /><br /><br /><br />

          <ul>
          <h3 class="heading04"><font size="7">自己紹介</font></h3>
          <h3><font size="6">生年月日：2000年2月3日</font></h3>  
          <h3><font size="6">星座：水瓶座</font></h3>
          <h3><font size="6">趣味：サウナ・筋トレ・麻雀</font></h3>
          <h3><font size="6">特技：アルティメット</font></h3>
        </ul>
      <br />
        
        <ul>
          <h3 class="heading04"><font size="7">研究内容</font></h3>
          <h3><font size="6">研究テーマ：自然言語処理を用いた不定説な投稿の検出</font></h3>
          <h3><font size="6">利用するデータ：未定</font></h3>
         </ul>
      
        
         <br />
        <h3 class="heading04"><font size="6">
        <Link to="/">HOME</Link>
        </font>
        </h3>

       
        
      </div>
    );
  };
  