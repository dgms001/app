//boss排行榜 bydgms qq:381991414
var a1 = "#fItem/Cash/0501.img/05010057/effect/default/3#"; //撒花
var a2 = "#fItem/Cash/0501.img/05010143/effect/default/0#"; //皇冠左
var a3 = "#fItem/Cash/0501.img/05010143/effect/default/4#"; //皇冠右
var a4 = "#fItem/Cash/0501.img/05010150/effect/default/2#"; //嘲笑候
var a5 = "#fItem/Cash/0501.img/05010180/effect/default/0#"; //彩虹书
var a6 = "#fItem/Cash/0501.img/05010129/effect/default/0#"; //初音3
var a7 = "#fEffect/ItemEff.img/1005163/effect/default/0#" //中音符
var a8 = "#fEffect/ItemEff.img/1070069/effect/walk1/0#" //彩虹小云0-7
var a88 = "#fEffect/ItemEff.img/1070069/effect/walk1/4#" //彩虹小云0-7
var a888 = "#fEffect/ItemEff.img/1070069/effect/walk1/6#" //彩虹小云0-7
var a9 = "#fEffect/ItemEff.img/1073056/effect/walk1/0#" //好看的花0-7
var a10 = "#fEffect/ItemEff.img/1102420/effect/default/0#" //彩虹中星星0-5
var a11 = "#fEffect/ItemEff.img/1102919/effect/default/0#" //小黄鸭车0-7
var a12 = "#fEffect/ItemEff.img/1102930/effect/default/0#" //雨点彩虹0-15
var a112 = "#fEffect/ItemEff.img/1102930/effect/default/4#" //雨点彩虹0-15
var a122 = "#fEffect/ItemEff.img/1102930/effect/default/12#" //雨点彩虹0-15
var a1222 = "#fEffect/ItemEff.img/1102930/effect/default/13#" //雨点彩虹0-15
var a13 = "#fEffect/ItemEff.img/1102987/effect/default/0#" //卡片绿水蘑菇
var a14 = "#fEffect/ItemEff.img/1103035/effect/default/0#" //彩虹音符长
var a15 = "#fEffect/ItemEff.img/1103094/effect/default/0#" //长花
var a16 = "#fEffect/ItemEff.img/1103440/effect/default/0#" //石头怪
var a17 = "#fEffect/ItemEff.img/1112013/1/5#" //爱心5-9
var a18 = "#fEffect/ItemEff.img/1082692/effect/default/6#" //彩虹熊14-21
var a19 = "#fEffect/ItemEff.img/1053230/effect/default/2#" //爱心兔长
var a20 = "#fEffect/ItemEff.img/1005102/effect/default/3#" //粉色PB长3-5
var a21 = "#fEffect/ItemEff.img/1005103/effect/default/3#" //绿水灵长3-5
var a22 = "#fEffect/ItemEff.img/1103083/effect/default/0#" //中蝴蝶长3-5
var a23 = "#fEffect/ItemEff.img/1005254/effect/default/4#" //蓝色中小星星
var a25 = "#fEffect/ItemEff.img/1005353/effect/default/0#" //绿芽叶中小
var a26 = "#fEffect/ItemEff.img/1073379/effect/default/0#" //幽灵云长
var a27 = "#fEffect/ItemEff.img/1073435/effect/default/3#" //彩虹细云0-3
var a28 = "#fEffect/ItemEff.img/1005692/effect/default/7#" //彩虹星星爱心1005692-1005697
var a29 = "#fEffect/ItemEff.img/1073498/effect/default/7#" //彩虹爱心蝴蝶1073498-1073503
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a33 = "#fEffect/ItemEff.img/1005163/effect/default/0#" //中音符
var a34 = "#fItem/Cash/0501.img/05010056/effect/walk1/5#"; //小草
var a35 = "#fItem/Cash/0501.img/05010056/effect/walk1/6#"; //草
var a36 = "#fItem/Cash/0501.img/05010056/effect/walk1/7#"; //草

var c1 = "#fEffect/ItemEff.img/1005765/effect/default/0#" //小图标
var c2 = "#fEffect/ItemEff.img/1112001/0/0#" //小图标
var c3 = "#fEffect/ItemEff.img/1112002/0/0#" //小图标
var c4 = "#fEffect/ItemEff.img/1032328/effect/default/0#" //小图标
var c5 = "#fEffect/ItemEff.img/1032328/effect/backDefault/0#" //小图标
var c6 = "#fEffect/ItemEff.img/1032329/effect/default/0#" //小图标
var c7 = "#fEffect/ItemEff.img/1032329/effect/backDefault/0#" //小图标
var c8 = "#fEffect/ItemEff.img/1112006/0/1#" //小图标
var c9 = "#fEffect/ItemEff.img/1112806/0/0#" //小图标
var c10 = "#fEffect/ItemEff.img/1112807/0/0#" //小图标
var c11 = "#fEffect/ItemEff.img/1112809/0/0#" //小图标
var c12 = "#fEffect/ItemEff.img/1005799/effect/backDefault/0#" //小图标
var c13 = "#fEffect/ItemEff.img/1112024/0/5#" //小图标
//var 52 = "#fUI/UIWindow2.img/Arbeit/117#"//人气数量
let bossName = ["炎魔[普通]     ", "炎魔[困難]",  "拉圖斯[普通]   ", "拉圖斯[困難]", "皮卡啾[普通]   ", "皮卡啾[困難]", "凡雷恩[普通]   ", "凡雷恩[困難]", "阿卡伊農[普通] ", "阿卡伊農[困難]", "希拉[普通]     ", "希拉[困難]", "西格諾斯[普通] ", "西格諾斯[困難]", "卡翁[普通]     ", "卡翁[困難]", "比艾樂[普通]   ", "比艾樂[困難]", "斑斑[普通]     ", "斑斑[困難]", "血腥女王[普通] ", "血腥女王[困難]", "貝倫[普通]     ", "貝倫[困難]", "森蘭丸[普通]   ", "森蘭丸[困難]", "濃姬[普通]     ", "濃姬[未開]", "梅格耐斯[普通] ", "梅格耐斯[困難]", "培羅德[普通]   ", "培羅德[未開]", "史烏[普通]     ", "史烏[困難]", "戴米安[普通]   ", "戴米安[困難]", "露希妲[普通]   ", "露希妲[困難]", "威爾[普通]     ", "威爾[未開]", "天使守護水靈[普通]", "天使守護水靈[困難]", "戴斯克[普通]   ", "戴斯克[未開]", "真希拉[普通]   ", "真希拉[未開]", "頓凱爾[普通]   ", "頓凱爾[未開]", "黑魔法師[普通] ", "黑魔法師[未開]", "受選的賽蓮     ", "卡洛斯[普通]"]//,"無","賽蓮"]

let whileStage = true;
while (whileStage) {

    txt = "#fs21##e#b你好,這裡是BOSS通關查詢\r\n";

    //txt += "";
    //txt = "\r\n";
    //txt += "\t\t\t\t#fs32##fc0xFF00caf2##e《Boss排行榜》\r\n#n";
    //txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
    //txt += "#fs17##e#b";
    //txt += "";
    //txt += "";

    for (let i = 0; i < bossName.length; i++) {
        if (i % 2 == 0) {
            txt += "#fs21##e#b\r\n";
        }
        var name = bossName[i];
        //var name = "#fUI/UIWindow2.img/Arbeit/" + (118 + i) + "#";
        var str = new String(name);
        var bytesCount = 0,
            n;
        for (var dd = 0, n = str.length; dd < n; dd++) {
            var c = str.charCodeAt(dd);
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
                bytesCount += 1;
            } else {
                bytesCount += 2;
            }
        }
        if (bytesCount < 14) {
            for (var ii = 0; ii < 14 - bytesCount; ii++) {
                if (ii % 2 == 0) {
                    name += "";
                } else {
                    name = "" + name;
                }
            }
        }
        if (i == 0 || i == 1 || i == 4 || i == 5 || i == 8 || i == 9 || i == 12 || i == 13 || i == 16 || i == 17 || i == 20 || i == 21 || i == 24 || i == 25 || i == 28 || i == 29 || i == 32 || i == 33 || i == 36 || i == 37 || i == 40 || i == 41 || i == 44 || i == 45 || i == 48 || i == 49) {
            txt += "\t#fs20##e#b#L" + i + "##b" + name + "#l"
        } else {
            txt += "\t#fs20##e#b#L" + i + "##b" + name + "#l"
        }

    }

    //txt += "\r\n\r\n   "+tu4+"#r#L10086#口袋精靈：返回上一頁#l"
    let selected = npc.askMenuA(txt);
    //let selected = npc.askMenuA(txt, true);

    switch (selected) {
        case 10086:
            //返回
            player.runScript("排行榜")
            whileStage = false;
            continue;
            break;
        default:
            sql = "select * from (select playersName,min(`time`) as `time` from dgms_bossinfo where bossName='" + bossName[selected] + "' group by playersName) t order by t.`time` asc limit 10 "
            break;
    }

    var resultList = player.customSqlResult(sql);
    var bossName1 = bossName[selected];
    var str = new String(bossName1);
    var bytesCount = 0,
        n;
    for (var dd = 0, n = str.length; dd < n; dd++) {
        var c = str.charCodeAt(dd);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            bytesCount += 1;
        } else {
            bytesCount += 2;
        }
    }

    if (bytesCount < 14) {
        for (var ii = 0; ii < 14 - bytesCount; ii++) {
            if (ii % 2 == 0) {
                bossName1 += " ";
            } else {
                bossName1 = " " + bossName1;
            }
        }
    }

    var text = "";
    text += "#fs21##e#r\t\t\t\t" + bossName1 + "#fs16#\r\n\r\n";
    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        var rank = i + 1;
        var m = Math.floor(parseFloat(result.get("time")) / 60);
        var s = Math.floor(parseFloat(result.get("time")) % 60);
        //text += "" + a8 + "  " + a888 + "" + a888 + "" + a888 + " " + a88 + "";
        if (rank == 1) {
            text += "\t#k第" + rank + "名         #r耗時:" + m + "分" + s + "秒         #b玩家:" + result.get("playersName") + "\r\n"
        } else if (rank == 2) {
            text += "\t#k第" + rank + "名         #r耗時:" + m + "分" + s + "秒         #b玩家:" + result.get("playersName") + "\r\n"
        } else if (rank == 3) {
            text += "\t#k第" + rank + "名         #r耗時:" + m + "分" + s + "秒         #b玩家:" + result.get("playersName") + "\r\n"
        } else {
            text += "\t#k第" + rank + "名         #r耗時:" + m + "分" + s + "秒         #b玩家:" + result.get("playersName") + "\r\n"
        }


    }
    npc.askMenuA(text);
}

function getByteLen(val) {
    var str = new String(val);
    var bytesCount = 0;
    for (var i = 0, n = str.length; i < n; i++) {
        var c = str.charCodeAt(i);
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            bytesCount += 1;
        } else {
            bytesCount += 2;
        }
    }
    return bytesCount;
}