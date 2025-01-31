/* This is a piece of code

 * author dgms

 * global player

 * 腳本定制 技術支持 QQ 381991414

 */
var status = 0;
var skill = Array(80000654, 80000655,80000656, 80000657,80000658, 80000659,80000660, 80000661);
var itemPQ = Array(
	Array(
		Array(4000000, 1),		
	),
	
	Array(
		Array(4000000, 2),					
	),
	
	Array(	
		Array(4000000, 3),	

	),
	
	Array(
		Array(4000000, 4),				
		),

	Array(
		Array(4000000, 5),				
		),

	Array(
		Array(4000000, 6),		
		),
		
	Array(
		Array(4000000, 7),				
		),
		
	Array(
		Array(4000000, 8),				
		)
);

var successrate =Array(100,70,50,35,25,15,10,5);
var PQ =Array(0,1,2,3,4,5,6,7);
var Name = Array("煥新之力 : 1階段","煥新之力 : 2階段","煥新之力 : 3階段","煥新之力 : 4階段","煥新之力 : 5階段","煥新之力 : 6階段","煥新之力 : 7階段","煥新之力 : 8階段");
var idbans = -1;
var zhizuo = null;
var text = "UI自行寫入\r\n";
var lq1 ="#fUI/UIWindow2.img/crossHunterUI/reward/button/normal/0#"
var lq2 ="#fUI/UIWindow2.img/crossHunterUI/reward/button/disabled/0#"
for(var i = 0; i < skill.length; i++) {
	var tips = "查看詳情";
    text += "#b#L" + i + "#獲得 #q"+skill[i]+"# #r["+tips+"]\r\n";
}
let idbans = npc.askMenuS(text);
var text = "#r#e#q" + skill[idbans] + "##n#b制作材料如下：\r\n";
zhizuo = itemPQ[idbans];
for(var i = 0; i < zhizuo.length; i++) {
	var itemId = zhizuo[i][0];
	var getItemQuantity = zhizuo[i][1];  
	var currentItemQuantity = player.getAmountOfItem(zhizuo[i][0]);
	text += "#v" + itemId + "##b#t" + itemId + "##k #rx " + getItemQuantity + "/#b"+currentItemQuantity+"#k\r\n成功率為:"+successrate[idbans]+"%\r\n";
}
text += "\r\n#d是否現在就升級該技能？#k";
if(player.getPQLog("skill") != PQ[idbans])
npc.say("當前升級等級錯誤,請逐一升級! 目前只能獲得:#r"+(player.getPQLog("skill")+1)+" #k階段技能");
else
let sel = npc.askYesNo(text);
if(sel == 1) {
	if(player.getFreeSlots(1) < 1 || player.getFreeSlots(2) < 1 || player.getFreeSlots(3) < 1 || player.getFreeSlots(4) < 1 || player.getFreeSlots(5) < 1) {
		npc.say("您的背包空間不足,請保證每個欄位至少1格的空間,以避免領取失敗。");
	} else {
			var jilu =0;
			for (var i = 0; i < zhizuo.length; i++) {
			var itemId = zhizuo[i][0];
			var getItemQuantity = zhizuo[i][1];
			if(player.hasItem(itemId,getItemQuantity)) {
				jilu++;
			}
			if(jilu != zhizuo.length){
			player.scriptProgressMessage("材料不足");
			}else{
			for(var i = 0; i < zhizuo.length; i++) {
			var itemId = zhizuo[i][0];
			var getItemQuantity = zhizuo[i][1];
			player.loseItem(itemId, getItemQuantity);
			}
			var Successrates = Math.floor(Math.random()*100);
			if(Successrates <= successrate[idbans]){
			player.setSkillLevel(skill[idbans], 1, 1, false);
			player.setSkillLevel((skill[idbans]-1), 0, 0, false);
			player.resetPQLog("skill");
			player.addPQLog("skill",PQ[idbans]+1,-1);
			npc.say("恭喜您,升級成功！快打開技能列表看看吧！");	
			npc.broadcastWeatherEffectNotice(35,"【技能制作】玩家:"+player.getName()+"制作了"+Name[idbans]+"",10000); 
            break;		
            }else{	
            npc.say("升級失敗！");	
            break;				
			}			
			}		
		}
	}
}