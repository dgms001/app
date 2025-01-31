
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
/* global npc, player */
let skin = [0, 1, 2, 3, 4, 9, 10, 11];

let hairs = [
    34000, 34010, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34200, 34210,
    34220, 34230, 34240, 34250, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34350, 34360, 34370, 34380, 34400, 34410, 34420,
    34430, 34440, 34450, 34470, 34480, 34490, 34510, 34540, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34650, 34660, 34670, 34680, 34690,
    34700, 34710, 34720, 34730, 34740, 34750, 34760, 34770, 34790, 34800, 34830, 34860, 34870, 34880, 34890, 34900, 34910, 34990, 33000, 33030,
    33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33140, 33150, 33160, 33170, 33180, 33190, 33200, 33210, 33220, 33230,
    33240, 33250, 33260, 33270, 33280, 33290, 33300, 33310, 33320, 33330, 33340, 33350, 33360, 33370, 33380, 33390, 33400, 33410, 33430, 33440,
    33450, 33460, 33470, 33480, 33500, 33510, 33520, 33530, 33540, 33550, 33580, 33590, 33600, 33610, 33620, 33630, 33640, 33650, 33660, 33670,
    33680, 33690, 33700, 33710, 33720, 33730, 33740, 33750, 33760, 33770, 33800, 33810, 33960, 33970, 33980, 33990
];
let faces = [
    21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019,
    21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21036, 21038, 21041, 21042, 21043,
    21044, 21045, 21046, 21047, 21048, 21049, 21050, 21052, 21053, 21054, 21055, 21056, 21057, 21058, 20000, 20001, 20002, 20003, 20004, 20005,
    20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025,
    20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20035, 20036, 20037, 20038, 20040, 20043, 20044, 20045, 20046, 20047, 20048, 20049,
    20050, 20051, 20052, 20053, 20055, 20056, 20057, 20058, 20059, 20060, 20061
];

let res;
let sel;
let buy;

let cHair;
let cFace;

if (player.hasAndroid()) {
	text = txt = "Welcome to the special trip              " + a38 + "\r\n";

text += "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "" + a30 + "" + a30 + "" + a31 + "" + a31 + "" + a32 + "" + a32 + "\r\n"

    text += "#b你好！我是智慧機器人化妝師。你想重新裝扮自己的機器人？那你就找對人了！我可以為你的智慧機器人更換！\r\n\r\n";
    text += "#b";
    text += "\t#L0#" + f2 + "膚色護理#l  #L1#" + f3 + "變更髮型#l  #L3#" + f4 + "變更臉型#l\r\n\r\n";
   // text += "#L1#" + f3 + "更換髮型#l\r\n";
//text += "#L3#" + f4 + "更換臉型#l\r\n";
    //text += "\r\n";
    if (player.isGm()) {
        text += "\r\n";
        text += "GM\r\n";
        text += "#L2#頭髮染色#l\r\n";
        text += "#L4#眼睛換色#l\r\n";
        text += "#L5#gggggg#l";
    }
    let selection = npc.askMenu(text);
    switch (selection) {
        case 0:
            skinN = [
                [0, "奶油皮膚"],
                [1, "日光浴皮膚"],
                [2, "健康皮膚"],
                [3, "乳白皮膚"],
                [4, "淒涼皮膚"],
                [9, "蒼白皮膚"],
                [10, "貴族皮膚"],
                [11, "華麗皮膚"],
                [12, "精靈皮膚"],
                [13, "惡魔皮膚"],
                [15, "鬆軟花瓣皮膚"],
                [16, "紅暈花瓣皮膚"],
                [18, "浪漫薰衣草皮膚"],
                [19, "紅暈薰衣草皮膚"],
                [24, "玉珠皮膚"],
                [25, "金珠皮膚"],
                [26, "銀珠皮膚"],
                [27, "銅珠皮膚"],
                [28, "尖晶石皮膚"],
                [29, "紫水晶皮膚"],

            ];
            txt = "#n";
            for (let i = 0; i < skinN.length; i++) {
                txt += "#r" + i + " #k" + skinN[i][1] + "\r\n";
            }
            number = npc.askNumber("#b#e請輸入下述數字,更換機器人皮膚\r\n" + txt, 0, 0, 30);
            skin = [number]
            player.setAndroidSkin(skinN[skin][0]);
            break;
        case 1:
            ALLCOUNT = 99999; //台版髮型最大數字
            number = npc.askNumber("#b#e請輸入髮型代碼,更換機器人髮型", 0, 30000, ALLCOUNT);
            hairs = [number];
            player.setAndroidHair(hairs[0]);
            break;
        case 2:
            aa = player.getAllAndroidHairColors()
            npc.say(aa)
            break;
        case 3:
            ALLCOUNT = 99999; //台版髮型最大數字
            number = npc.askNumber("#b#e請輸入臉型代碼,更換機器人臉型", 0, 20000, ALLCOUNT);
            face = [number];
            player.setAndroidFace(face[0]);
            break;
        case 4:
            break;

        case 5:
            res = npc.askAndroid("您想將安卓更換成什麼樣的面板呢？請挑選一下～", npc.getAllSkinColors(), 5153015);
            break;

    }
} else {
    npc.sayNext("沒有智慧機器人的話，我什麼都做不了。你能帶著智慧機器人一起來嗎？");
}

function checkItem(type, itemId) {
    modify(type);
}

function modify(type) {
    switch (type) {
        case 0://臉型
            player.setAndroidFace(cFace[type]);
            break;
        case 1://髮型
            player.setAndroidHair(cHair[type]);
            break;
        case 2://面板
            player.setAndroidSkin(skin[sel]);
            break;
    }
    npc.sayNext("好了,一定認不出來了!");
}


function getHairStyleChoices(currentHair) {
    let color = currentHair % 10;
    let styles = [];
    for (let i = 0; i < hairs.length; i++) {
        if (npc.isAndroidHairValid(hairs[i] + color)) {
            styles.push(hairs[i] + color);
        }
    }
    return styles;
}


function getFaceStyleChoices(currentFace) {
    let color = currentFace % 1000 - (currentFace % 100);
    let styles = [];
    for (let i = 0; i < faces.length; i++) {
        if (npc.isAndroidFaceValid(faces[i] + color)) {
            styles.push(faces[i] + color);
        }
    }
    return styles;
}