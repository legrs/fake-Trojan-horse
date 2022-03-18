const cursor = document.getElementById("html");
const htmll = '<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><title>googIe.com</title><style>.inline{display: inline;}#btn{background-color: rgb(58, 109, 224);border-radius: 4px;padding: 8px 16px;color: #fff;text-decoration: none;}*{line-height: 11px;}.aclass{font-size: 16px;color: rgb(102, 102, 102);}span{font-weight: 700;}*{font-family: "Segoe UI",Arial,Meiryo,sans-serif;}h1{color: rgb(119, 119, 119);font-weight: 200;font-size: 28px;}li{text-indent: 28px;}a{font-weight: 500;}div{position: absolute;top: 45%;left: 50%;transform: translateY(-50%) translateX(-50%);transform: translateY(-50%) translateX(-50%);}#btn:active{background-color: rgb(98, 134, 216);}#box{background-color: rgb(255, 255, 255);height: 110vh;width: 100vw;}</style></head><body id="boody"><div id="box"></div><div class="bb"><img id="img1" src="nofile.png" height="72" width="72"><br><br><br><h1>このサイトにアクセスできません</h1><br><a class="aclass"><span>googIe.com </span>にアクセスできません。</a><br><br><br><a class="aclass">次をお試しください:</p><li><a class="aclass">googIe.com がタイプミスでないか確認する</a></li><br><li><a href="#" onclick="curs()">プロキシとファイアウォールを確認する</a></li><br><li><a href=# id="windowss">Windows ネットワーク診断ツールを実行する</a></li><br><br><p style="font-size: 80%;">ERR_CONNECTION_CLOSED</p><br><br><br><br><br><a id="btn" href=# onclick="location.reload()">再読み込み</a><script src="uirusu.js"></script></div></body></html>';
let niseinfo = document.querySelector('ptag');
/* const button = document.getElementById("windowss");
    


button.addEventListener('click',download);

function download() {
    const blob = new Blob([htmll], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.download = 'ウイルス除去.html';
    a.href = url;
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}
 */
function curs() {
    cursor.style.cursor = 'wait';
}

setTimeout(function(){
    niseinfo = '<p id="ptag">ウイルスを検出しています...</p>';
},5000);