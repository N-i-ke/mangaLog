#API設計のサンプル

<h1>使用技術</h1>
<ul>
  <li>node.js</li>
    <li>express</li>
</ul>
<h1>実装機能</h1>
読んだ漫画の履歴の保存と取得

<h1>動作手順</h1>
npm install

サーバーの起動
node mangaMangaLog.js

<h1>Postmanのインストール</h1>

<a>https://www.postman.com/</a>

<h1>使用方法</h1>


<h1>漫画履歴を保存する</h1>
<ul>
  <li>URI: http://localhost:3001/mangaLog</li>
  <li>パラメータ: name, text</li>
  <li>レスポンス: { "res": true, "readLog": { "name": "ブルーロック", "text": "今流行り終わり？？" }}</li>
  <li>エラー: { "res": false, "error": "invalid parameter" }</li>
</ul>


<h1>漫画履歴一覧を取得する</h1>
<ul>
  <li>URI: http://localhost:3001/mangaLog</li>
  <li>なし</li>
  <li>レスポンス: { "res": true, "readLog": { "name": "ブルーロック", "text": "今流行り終わり？？" }}</li>
  <li>エラー: { "res": false, "error": "invalid parameter" }</li>
</ul>

