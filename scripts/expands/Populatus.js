
/*//配置文件名称
let event = ["BossPopulatus_EASY", "BossPopulatus_NORMAL", "BossPopulatus_HARD"];
//记录次数名称
let BossName = ["帕普拉图斯[简单]", "帕普拉图斯[普通]", "帕普拉图斯[困难]"];
let PQLog = ["Populatus_Easy","Populatus_Normal", "Populatus_Chaos"];
//var sType = ["简单", "普通", "困难"];
//开始的地图
let startmap = 220080000;
//等级限制
let minLevel = [80, 150, 200];
let maxLevel = [280, 280, 280];
//次数限制
let maxenter = [1, 1, 1];
//几天一次
let interval = [1, 1, 1];
let onlyOne = true;
//限制人数
let minPlayers = 1;
let maxPlayers = 6;
//怪物最大等级设置
//var moblevel = 255;
var text="";*/

let minPlayers = 1;
let maxPlayers = 6;
let minLevel = [50];
let maxLevel = [275];
let maxenter = [5];
let BossName = [ "帕普拉图斯[困难]"];
let PQLog = ["Populatus_HARD"];
let event = ["BossPopulatus_HARD"];
let onlyOne = true;
let startmap = 220080000;


if (map.getId() == startmap) {
	let text = "";
//if (player.hasItem(4031179,1)) {
	for (var i = 0; i < BossName.length; i++) {
            text += "\r\n#b#L" + i + "#"+BossName[i]+"#r#l";
        }
        let sel = npc.askMenu("#e#r请选择进入模式：#n\r\n" + "#b完成记录将在晚12点初始化"+ text);
		
		 if (party == null || player.getId() != party.getLeader()) {
                npc.sayNextE("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.并且等级在" + minLevel[sel] + "~" + maxLevel[sel] + "范围,\r\n那么请让你的组队长和我对话吧!", true);
        } else if (party.numberOfMembersInChannel() < minPlayers || party.getMembersCount(map.getId(), 1, 275) > maxPlayers) {
                npc.sayNextE("你需要有一个#r" + minPlayers + "~" + maxPlayers + "#k人的队伍.!", true);
        } else if (party.getMembersCount(map.getId(), minLevel[sel], maxLevel[sel]) < minPlayers) {
                npc.sayNextE("你队员的等级要在" + minLevel[sel] + "~" + maxLevel[sel] + "范围!请确认!", true);
        } else if (party.getMembersCount(map.getId(), 1, 275) < party.getMembersCount()) {
                npc.sayNextE("好像有队员在其他地方，请把队员都召集到这里！", true);
        } else if (!party.isAllMembersAllowedPQ(PQLog[sel], maxenter[sel])) {
                npc.sayNextE("你队员#r#e" + party.getNotAllowedMember(PQLog[sel], maxenter[sel]) + "#n#k次数已经达到上限了。", true);
        } else if (npc.makeEvent(event[sel], onlyOne, party) == null) {
                npc.sayNextE("已经有队伍在进行了,请更换其他频道尝试。", true);
        }
//} else {
 //       npc.sayNext("没有#z4031179#是无法进入时间塔的本源！");
//}

} 

       
		
		
		
		