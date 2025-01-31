/**
 * 自選臉型-新端腳本修改
 **/

var item = 5150052; //所需物品

let res;
let isAngel = false;
let isBeta = false;
if (player.getBeginner() == 6001) {
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getBeginner() == 10000) {
    isBeta = npc.askMenu("請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n#L1#神之子：貝塔#l") != 0;
}
let selection = npc.askMenu("您好，請選擇你需要的服務。\r\n查詢臉型網站：www.mxdcode.com\r\n\r\n#b#L0#自選臉型,自己填臉型程式碼（使用#v" + item + "#）");
switch (selection) {
    case 0:
        let number = npc.askNumber("請填寫臉型程式碼（請再三確認過後再填寫！）", "20000", 20000, 29999);
        faces = [number];
        res = npc.askAvatar("我能把你現在的臉型變成全新的臉型。你對現在的臉型不厭倦嗎?只要你有#b#t5150052##k,我就幫你換臉型。慢慢挑選你想要的臉型吧~", faces, item, isAngel, isBeta);
        break;
}
selection = res[0];
let buy = res[1];

if (player.hasItem(item, 1)) {
    player.loseItem(item, 1);
    player.setFace(faces[selection]);
    npc.sayNext("完成了,享受你的新臉型吧!");
} else {
    npc.sayNext("呃……你好像沒有#v" + item + "#啊？很抱歉，沒有#v" + item + "#的話，我不能給你做頭髮。");
}