/**
 * 自選臉型-新端腳本修改 幾裡  
 **/
var item = 2431272; //所需物品
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var d1 = "#fUI/UIWindow2.img/Arbeit/172#"//脸型


txt = "#fs21##e#r您好，請選擇你需要的服務\r\n\r\n\r\n\t #L0#自選臉型,自己填髮型代碼（使用#v"+item+"#）#l\r\n\r\n";

let res;
let isAngel = false;
let isBeta = false;

if (player.getBeginner() == 6001) {
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getBeginner() == 10000) {
    isBeta = npc.askMenuA("請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n#L1#神之子：蓓塔#l") != 0;
}
let selection = npc.askMenuA(txt, true);
switch (selection) {
    case 0:
        let number = npc.askNumber("#b#fs21##e請輸入臉型代碼\r\n\r\n#r#e請在楓點商店購買#v2431272#我就幫你換臉型!!!!!!\r\n\r\n#r#e請在楓點商店購買#v2431272#我就幫你換臉型!!!\r\n#r#e", 0, 20000, 80000);
        faces = [number];
        res = npc.askAvatar("當前選中臉型為: #b#z" + faces + "##r\r\n\r\n請確認是否要變更為該臉型？", faces, item, isAngel, isBeta);
        break;
}



selection = res[0];
let buy = res[1];

if (player.hasItem(item, 1)) {
    player.loseItem(item, 1);
    modify();
    npc.sayNext("#b#fs18##e完成了，享受你的新臉型吧!!");
} else {
    npc.sayNext("呃……你好像沒有 #v" + item + "# 啊？很抱歉，沒有 #v" + item + "# 的話，我不能給你做臉型。");
}

function modify() {
    if (isAngel) {
       
        player.setSubFace(faces[selection]);
		 player.modifiedDressUp();
    } else if (isBeta) {
        player.setSubFace(faces[selection]);
    } else {
        player.setFace(faces[selection]);
    }
    player.zeroTag(isBeta);
    //npc.sayNext("#fs18##e#b如果無套用,請更換頻道在檢查!");
}
