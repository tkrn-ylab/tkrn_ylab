import { Link } from "react-router-dom";
export const Page4 = () => {
    return (
      <div>
        <h1><p class="no4"><font size="7">大池樹 (OOIKE TATSUKI)</font></p></h1> 
        <br />
       <h3 class="heading04"><font size="7">写真紹介</font></h3>

          <div id="cards">
            <div class="card">
              <div class="picture"><img src="tatsuki.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                  高校の友人と大阪と京都に旅行しに行った時に、着物を着て観光した時の写真です！
                </p>
              </div>
            </div>
            <div class="card" id="card-center">
              <div class="picture"><img src="tatsuki2.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                  友人の誕生日にディズニーシーで大好きな餃子ドッグ食べてる時の顔です！なんでこんな顔したのか謎です笑
                </p>
              </div>
            </div>
            <div class="card">
              <div class="picture"><img src="tatsuki3.jpg" alt="" /></div>
              <div class="description">
              <br />
                <p>
                  豊洲のチームラボに行った時の写真です！すごくキラキラしてて神秘的な空間でした！！
                </p>
              </div>
              
            </div>
          </div> 

          <br /><br /><br /><br /><br /><br /><br /><br /><br />

          <ul>
          <h3 class="heading04"><font size="7">自己紹介</font></h3>
          <h3><font size="6">生年月日：2000年1月20日</font></h3>  
          <h3><font size="6">星座：水瓶座</font></h3>
          <h3><font size="6">趣味：勉強・youtube</font></h3>
          <h3><font size="6">特技：プログラミング</font></h3>
        </ul>
      <br />
        
        <ul>
          <h3 class="heading04"><font size="7">研究内容</font></h3>
          <h3><font size="6">研究テーマ：ユーザーの属性に合わせた、指定したアイテムの高評価画像生成</font></h3>
          <h3><font size="6">利用するデータ：ファッションコーディネートアプリWEARの投稿データ</font></h3>
         </ul>
        <Link to="/">Home</Link>
      </div>
    );
  };
  