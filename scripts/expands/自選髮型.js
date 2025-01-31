/**
* 自選髮型-新端腳本修改 幾裏 315342975 
**/

var item = 2430913; //所需物品

let res;
let isAngel = false;
let isBeta = false;
if (player.getBeginner() == 6001) {
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getBeginner() == 10000) {
    isBeta = npc.askMenuA("#fs21##e#r請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n#L1#神之子：貝塔#l") != 0;
}
let selection = npc.askMenuA("#fs21##e#r您好，請選擇你需要的服務。\r\n\r\n\r\n#b#L0#自選髮型,自己填髮型代碼（使用#v"+item+"#）");
switch (selection) {
    case 0:
		let number = npc.askNumber("#fs21##b請填寫髮型代碼（請再三確認過後再填寫！ ）\r\n\r\n#r#e請在楓點商店購買#v2430913#我就幫你換髮型!!!\r\n\r\n#r#e請在楓點商店購買#v2430913#我就幫你換髮型!!!\r\n","30000",30000,80000);
        hairs = [number];
        res = npc.askAvatar("我能把你現在的髮型變成全新的髮型。你對現在的髮型不厭倦嗎?只要你有#b#t2430913##k,我就幫你換髮型。慢慢挑選你想要的髮型吧~", hairs, item, isAngel, isBeta);
        break;
}
selection = res[0];
let buy = res[1];

if (player.hasItem(item, 1)) {
    player.loseItem(item, 1);
    //player.setHair(hairs[selection]);
	modify();
    npc.sayNext("完成了,享受你的新髮型吧!");
}else {
    npc.sayNext("呃……你好像沒有#v"+item+"#啊？很抱歉，沒有#v"+item+"#的話，我不能給你做頭髮。");
}
function modify() {
    if (isAngel) {
        player.setSubHair(hairs[selection]);
		player.modifiedDressUp();
    } else if (isBeta) {
        player.setSubHair(hairs[selection]);
    } else {
        player.setHair(hairs[selection]);
    }
    player.zeroTag(isBeta);
}