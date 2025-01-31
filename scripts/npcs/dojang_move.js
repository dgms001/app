var tz13 = "#fEffect/CharacterEff/1112925/0/0#";  //藍星
var tz11 = "#fEffect/CharacterEff/1112904/0/0#";  //彩心
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
var eff2 = "#fEffect/CharacterEff/1112925/0/0#";
var a0 = "#fEffect/CharacterEff/1112926/0/0#";//紅色
var a1 = "#fEffect/CharacterEff/1112924/0/0#";//黃色
var a2 = "#fEffect/CharacterEff/1112925/0/0#";//藍色
var a3 = "#fEffect/CharacterEff/1112924/0/1#";//白色空心
var a4 = "#fEffect/CharacterEff/1112925/0/1#";//藍色空心
var a5 = "#fEffect/CharacterEff/1112926/0/1#";//紅色空心
var b1 = "#fItem/Pet/5000485.img/stand0/0#";//
var b2 = "#fItem/Pet/5000415.img/stand0/0#";//
var b3 = "#fItem/Pet/5000490.img/stand0/0#";//
var b4 = "#fItem/Pet/5000491.img/stand0/0#";//
var b5 = "#fItem/Pet/5000492.img/stand0/0#";//
var b6 = "#fItem/Pet/5000494.img/stand0/0#";//
var b7 = "#fItem/Pet/5000469.img/stand0/0#";//
var b8 = "#fItem/Pet/5000484.img/stand0/0#";//
var eff1 = "#fEffect/CharacterEff/1112924/0/0#";
let title = "";

var jobs = Array(
    //職業名 JOBID 型別 1=新手 2=戰士 3=魔法師 4=弓箭手 5=飛俠 6=海盜 （自己分）
    //Array("英雄", 112, 1),
    //Array("聖騎士", 122, 1),
    //Array("黑騎士", 132, 1),
    //Array("火毒魔導士", 212, 3),
    //Array("冰雷魔導士", 222, 3),
    //Array("主教", 232, 3),
    //Array("神射手", 312, 4),
    //Array("箭神", 322, 4),
    //Array("古蹟獵人", 332, 4),
    //Array("隱士", 412, 5),
    //Array("俠盜", 422, 5),
    //Array("雙刀（5轉）", 434 , 5),
    //Array("衝鋒隊長", 512, 6),
    //Array("船長", 522, 6),
    //Array("神炮王", 532, 6),
    //Array("龍的傳人", 572, 6),
    //Array("魂騎士", 1112, 2),
    //Array("炎術士", 1212, 3),
    //Array("風靈使者", 1312, 4),
    //Array("夜行者", 1412, 4),
    //Array("奇襲者", 1512, 6),
    //Array("戰神", 2112, 2),
    //Array("龍神", 2217 , 3),
    //Array("雙弩精靈", 2312, 4),
    //Array("幻影", 2412, 5),
    //Array("隱月", 2512, 5),
    //Array("夜光法師", 2712, 3),
    //Array("惡魔獵手", 3112, 2),
    //Array("惡魔復仇者", 3122, 2),
    //Array("爆破手", 3712, 6),
    //Array("喚靈法師", 3212, 3),
    //Array("豹弩遊俠", 3312, 4),
    //Array("機械師", 3512, 3),
    //Array("尖兵", 3612, 5	),
    //Array("狂龍戰士", 6112, 2),
    //Array("魔鏈影士(4轉)", 6412, 6),
    //Array("爆莉萌天使", 6512, 2),
    ////米哈爾
    //Array("米哈爾", 5112, 2),
    ////超能力者
    //Array("超能力者（四轉）", 14212, 3),
    ////翼人族
    //Array("聖晶使徒(4轉)", 15212, 2),
    //Array("影魂異人(4轉)", 15512, 5),
    ////阿尼瑪
    //Array("虎影（四轉）", 16412, 5),
    ////御劍騎士
    //Array("御劍騎士（四轉）", 15112, 2),
    //Array("墨玄（四轉）", 17512 ,6),
    ////神之子
    //Array("神之子", 10112, 1),
    ////林之靈
    //Array("林之靈", 11212, 3),
    ////曉之陣
    //Array("劍豪", 4112, 2),
    //Array("陰陽師", 4212, 3),
    //Array("超能力者", 14212 , 3)
);


var str = "武陵排行";
str += "\r\n#L100#介紹#l"
str += "\r\n#L101#獎勵#l"
str += "\r\n#L999#全職業排行#l"
str += "\r\n#L998#職業第一排行#l"

for (var i = 0; i < jobs.length; i++) {

    str += "\r\n#L" + i + "#" + jobs[i][0] + "#l"
}

var sel = npc.askMenu(str);
if (sel == 100) {
    npc.say("\r\n#r每週五晚上23:50結算排名併發放獎勵:\r\n#b#v4033320#可用於修改附加潛能#k\r\n#r全職業第1：#v4033320#x3#b、[7天]15品 +240%BOSS傷害#v1142867#\r\n#r全職業第2：#v4033320#x2#b、[7天]12品 +240%BOSS傷害#v1142866#\r\n#r全職業第3~5：#v4033320#x1#b、[7天]10品 +240%BOSS傷害#v1142865#\r\n#r單職業第1:#v4033320#x1#b、[7天]8品 +240%BOSS傷害#v1142864#\r\n")
} else if (sel == 101) {
    player.runScript("全服福利wl")
} else {

    var sql = "SELECT `time` AS `value`,`floor` AS `floor`,IFNULL(charactername,'') AS `name`,IFNULL(job,'')  AS job FROM zz_dojang";

    if (sel != 999 && sel != 998) {
        sql += " where job = '" + jobs[sel][0] + "' "
    }

    sql += " order by `floor` desc,`time` asc limit 20"

    if (sel == 998) {
        sql = "SELECT * FROM (SELECT `time` AS `value`,`floor` AS `floor`,IFNULL(charactername,'') AS `name`,IFNULL(job,'')  AS job FROM zz_dojang ORDER BY floor DESC,time ASC) t GROUP BY t.job  ORDER BY t.floor DESC,t.`value` ASC"
    }
    var resultList = player.customSqlResult(sql);
    var text = "#fs19##e#k" + b1 + b2 + b3 + b7 + b4 + b5 + b8 + b6 + "\r\n\t\t" + title + "         #fs12#\r\n";
    text += "#b#e   名次#n\t#e玩家暱稱   層數   #e時間\t 職業 #n\r\n";

    for (var i = 0; i < resultList.size(); i++) {
        var rank = i + 1;
        if (sel == 998) rank = 1;
        var result = resultList.get(i);
        if (result == null) {
            break;
        }
        if (rank == 1) {
            text += "#r";
        } else if (rank == 2) {
            text += "#g";
        } else if (rank == 3) {
            text += "#b";
        }
        text += "\t " + rank + "\t\t";

        // 填充名字空格
        var name = result.get("name").toString() + "";
        text += name;

        for (var j = 14 - getByteLen(name); j > 0; j--) {
            text += " ";
        }


        let floor = parseInt(result.get("floor"));
        if (parseInt(floor) < 0) {
            text = text.substring(0, text.length - 1)
        }

        text += floor;
        for (var j = 8 - getByteLen(floor + ""); j > 0; j--) {
            text += " ";
        }

        let value = parseInt(result.get("value"));
        if (parseInt(value) < 0) {
            text = text.substring(0, text.length - 1)
        }
        text += value;
        for (var j = 4 - getByteLen(value + ""); j > 0; j--) {
            text += " ";
        }

        text += result.get("job");

        text += "\r\n";
    }
    npc.say(text, 2091011);
}

function getByteLen(val) {
    var str = String(val);
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