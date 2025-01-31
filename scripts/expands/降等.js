
var Icon = Array(
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髏", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("紅心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白臉", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("紅燈", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("紅旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("紅心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("雲朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黃鴨", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("燈組", "#fUI/GuildMark/Mark/Etc/00009020/3#")
);

var JLevel = 285 //降級後的等級
var NeedLevel = 300 //需要達到等級才能降級
var Log = "降級福利"

var JL_item = Array(
    Array(2430453,1),//物品代碼,數量
	Array(5064400,50),//物品代碼,數量
	Array(2635032,50),//物品代碼,數量
	Array(4009411,200),//物品代碼,數量
		Array(2633609,5),//物品代碼,數量
    Array(2644008,2)//物品代碼,數量
) 
var txt = "#fs21##e#r\t\t\t\t 降級系統 \r\n";
txt += "  #fs16##b" + Series(1) + "　將帳號任意一個滿級角色降級到 [ "+ JLevel +"級 ] 並獲得獎勵\r\n";
txt += " 　#b" + Series(2) + "　降級的角色必須達到"+ NeedLevel +"級[#r提示降等成功請點確定#b]\r\n";
txt += " 　#b" + Series(3) + "　不能使用當前角色給自己降級,請使用分身操作\r\n";
txt += " 　#b" + Series(4) + "　降等獎勵#v2430453#*1#v5064400#*50#v2635032#*50#v4009411#*200#v2644008#*2#v2633609#*5\r\n";
txt += " #b#L1#選擇角色降級#l\r\n";
txt += " #b#L2#領取角色降級獎勵 #l\r\n";

txt += " ";

var selection = npc.askMenuA(txt);

if(selection == 1){
    var txt = "#fs21##e#r\t\t\t\t 降級系統 \r\n\r\n#fs13##b";
    let charactersList = getCharacters()

    for (var key in charactersList) {
        txt += "#b#L" + charactersList[key][0] +"#角色名稱:[" + charactersList[key][1] + "]　　等級:[" + charactersList[key][2] + "] \r\n\r\n"
    }
    
    var selection = npc.askMenu(txt)
    check(selection)
}else if(selection == 2){
    
    if(player.getEventValue(Log) == 1){
        for (let i = 0; i < JL_item.length; i++) {
            player.gainItem(JL_item[i][0], JL_item[i][1])
        }
        npc.say("領取成功")
        player.resetEventValue(Log)
    }else{
        npc.say("當前帳號並無降級!")
    }

}


function Series(int) {
    return "#fUI/Basic/LevelNo/" + int + "#";
}


function getCharacters(){
    var charid = player.getAccountId();
    var sql = "SELECT id,name,level FROM characters WHERE accountid = ? order by level desc";
    var data = player.customSqlResult(sql, charid);

    var seeds = Array();
    for (var i = 0; i < data.size(); i++) {
        var result = data.get(i);
        if (null == result) {
            break;
        }
        seeds.push(Array(result.get('id'),result.get('name'), result.get('level')));
    }
    return seeds;
}

function check(charid){
    var sql = "SELECT name,level FROM characters WHERE id = ?";
    var data = player.customSqlResult(sql, charid);

    if(charid == player.getId()){
        npc.say("不允許給自己降級")
        return false;
    }

    if(data[0].level < NeedLevel){
        npc.say("選擇角色等級不足")
        return false;
    }
    
    var sql = "UPDATE characters set level = ? WHERE id = ?";
    player.customSqlResult(sql,JLevel,charid);
    
    npc.say("降級成功!")
    player.addEventValue(Log,1,-1)
	
    npc.broadcastPlayerNotice(39, "[降級福利]" + " : " + "恭喜玩家 " + data[0].name + " 對自己進行了降級,降級後可獲得獎勵");
}