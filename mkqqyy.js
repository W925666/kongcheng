/* 
 * 
[rewrite_local]
^https:\/\/api\.dragonlongzhu\.cn\/.* url script-response-body https://raw.githubusercontent.com/zxs-ai/Xnet/refs/heads/main/zzmusicplay.js

[mitm]
hostname = api.dragonlongzhu.cn
*/
//mikoto - 修改点歌卡片的封面
//使用方法：圈x 添加主机名  api.dragonlongzhu.cn
//修改本配置的文件名为mkqqyy.js
//把这个配置放到文件app-quantumultx-Scripts
//修改本配置显示文本和封面链接
//然后点歌

let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
      obj.data.song_name = ${obj.data.song_name || ""}-${obj.data.song_singer || ""};
      obj.data.song_singer = "z先生定制电台>>>";
      obj.data.cover = "http://q4.qlogo.cn/headimg_dl?dst_uin=719883788&spec=640";
    }
    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    console.log("解析失败:", e);
    $done({ body });
  }
} else {
  $done({});
}
