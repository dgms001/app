//boss排行榜 bydgms qq:381991414
let cat1 = "#fItem/Pet/5000000.img/alert/0#";
let cat2 = "#fItem/Pet/5000000.img/fly/0#";
let cat3 = "#fItem/Pet/5000000.img/cry/0#";
let tu1 = "#fItem/Cash/0501.img/05010045/effect/stand1/1#"
let tu2 = "#fItem/Cash/0501.img/05010002/effect/default/7#"
let tu3 = "#fUI/NameTag/medal/758/w#"
let tu4 = "#fEffect/SetEff.img/245/effect/28#"
let tu5 = "#fUI/NameTag/medal/758/e#"
let tu6 = "#fUI/NameTag/medal/758/c#"
let fy = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/1#";
let fy1 = "#fUI/RunnerGame.img/RunnerGameUI/UI/Point/2#";
let dz = "#fUI/GuildMark/Mark/Etc/00009020/1#";
let dz1 = "#fEffect/CharacterEff/1003393/1/0#";
let star = "#fEffect/CharacterEff/1051294/1/1#"
let eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
let title = "";
let clumn = "";
let data;
let sql;

var GC1 = "#fEffect/CharacterEff/1050312/0/0#"; //最上面的亮粉
var GC2 = "#fEffect/CharacterEff/1051366/0/0#"; //紅心桃心
var GC3 = "#fEffect/CharacterEff/1112924/0/0#"; //"+z+"//小選項用


let bossName = ["世界BOSS"]

let whileStage = true;
while (whileStage) {
    txt = "\r\n";
    txt += "\t\t\t\t#fs32##fc0xFF00caf2##e《Boss排行榜》\r\n#n";
    txt += "" + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + GC2 + "";
    txt += "#fs17##e#b";
    txt += "";
    txt += "";

    for (let i = 0; i < bossName.length; i++) {
        if (i % 2 == 0) {
            txt += "\r\n\t\t";
        }
        var name = bossName[i];
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
                    name += " ";
                } else {
                    name = " " + name;
                }
            }
        }
		if(i == 0 || i == 1 || i == 4 || i == 5 || i == 8 || i == 9 || i == 12 || i == 13 || i == 16 || i == 17 || i == 20 || i == 21 || i == 24 || i == 25 || i == 28 || i == 29 || i == 32 || i == 33 || i == 36 || i == 37 || i == 40 || i == 41 || i == 44 || i == 45 ){
			txt += "#L" + i + "##b" + name + "#l"
		}else{
			txt += "#L" + i + "##r" + name + "#l"
		}
        
    }

    let selected = npc.askMenuA(txt, true);

    switch (selected) {
        case 10086:
            //返回
            player.runScript("排行榜")
            whileStage = false;
            continue;
            break;
        default:
            sql = "select * from (select playersName,max(`damage`) as `damage` from dgms_worldbossinfo where bossName='" + bossName[selected] + "' group by playersName) t order by t.`damage` asc limit 30 "
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

    var text = "#fs18##e#r\t   #b" + bossName1 + "#fs14#\r\n\r\n";

    for (var i = 0; i < resultList.size(); i++) {
        var result = resultList.get(i);
        var rank = i + 1;
        var DamageAll = Math.floor(parseFloat(result.get("damage")/105000000));
        if (rank == 1) {
            text += "\t#r第" + rank + "名 #d總傷害:" + DamageAll + "億 #b玩家:" + result.get("playersName") + "\r\n"
        } else if (rank == 2) {
            text += "\t#d第" + rank + "名 #d總傷害:" + DamageAll + "億 #b玩家:" + result.get("playersName") + "\r\n"
        } else if (rank == 3) {
            text += "\t#g第" + rank + "名 #d總傷害:" + DamageAll + "億 #b玩家:" + result.get("playersName") + "\r\n"
        } else {
            text += "\t#k第" + rank + "名 #d總傷害:" + DamageAll + "億 #b玩家:" + result.get("playersName") + "\r\n"
        }


    }
    npc.say(text, 3003307);
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