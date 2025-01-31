/*
 * NeroMS MapleStory server emulator written in Java
 * Copyright (C) 2017-2018  dgms
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 
 * @author dgms
 */
let nowTime = new Date().getTime();
let n = player.getIntQuestRecordEx(500773, "manager");

let npcId = 9400920 + n;
// let npcId = 94000930 + n;
let message;
let ret = npc.sayE("#face0#尚未開放", npcId);
/*
if (npcId == 9400920) {
        message = new Array(
                "#face0#每次有新人搬來的時候，我就感覺很激動。但也會擔心我們艾咪會不會又闖出什麼事故……....",
                "#face0#水下世界是什麼地方？我看到過在那裡制作的珊瑚燈，真是太神秘了。總有一天，我要去看看。....",
                "#face0#沙發似乎越多越好。因為你不知道好友什麼時候會來玩嘛？",
                "#face0#如果伊森在，應該就能幫上#h0#的忙，真是可惜。他是我們村子裡最棒的木匠。現在為了尋找木材而出去旅行了。",
                "#face0#只要更改屋頂的顏色，就能改變整個家的氣氛！",
                "#face0#米蘭達在運營跳蚤市場之前是個畫家，再之前是作曲家，再之前是攝像師。",
                "#face0#特魯迪真的就像我的親弟弟。因為我是看著他長大的！你知道特魯迪最先說的一句話是什麼嗎？那就是“凱~蒂~”。是不是很可愛？",
                "#face0#你有聽說凱尼斯家進了新的家具的消息嗎？ ",
                "#face0#餓啊，#h0#~~。#h0#吃飯了嗎？",
                "#face0##h0#已經吃遍楓之谷世界的食物了呢？真是太羨慕了！什麼是最好吃的？ ",
                "#face0#嗯~那面牆看起來有點空曠呢。至少應該掛一個相框吧！ ",
                "#face0#艾咪又去哪裡了，一大早就不見人影了呢，應該不是去了什麼危險的地方吧？",
                //"#face0#艾丹雖然有點調皮，但是個善良的朋友。而且內心還很柔軟。",
                //"#face0#今天我去廣場，見到了艾丹，我很想知道他有沒有好好使用桌子。",
                "#face0#今天我去參觀了其他朋友的家，果然還是#h0#的家最漂亮。",
                "#face0#……看來給凱蒂餵食的人越來越多了。最近它一直在變胖呢~必須增加散步時間了！ ",
                "#face0#隔壁好像又搬來了新人！雖然多個鄰居是件好事，但是卻因此連阿爾文哥哥的面都見不到了。估計他現在正在幫忙進行裝修呢吧？ ","#face0#真是的，不久前我想吃奶油面包，所以去了趟特魯迪家，結果居然賣完了？看著他們生意這麼好，我應該開心的……但還是有點遺憾啊……本來這是我專屬的美食店呢~！ "
                );
} else if (npcId == 9400921) {
        message = new Array("#face0#我喜歡在家休息，而艾咪喜歡在外面玩。雖然我們是雙胞胎，但是性格完全相反。",
				"#face0#今天沒有什麼有趣的事情嗎？請跟我說說吧！ ",
                "#face0#特魯迪等了很久，然後回去了！他說想見見#h0#呢~\r\n如果你有時間，那就去廣場找特魯迪玩吧。\r\n",
				
                "#face0#艾咪非常喜歡吃東西。我只要看著艾咪吃的樣子就飽了。",
                "#face0#別看艾咪那樣，其實他超級~~膽小。剛才看到花盆裡的蟲子都被嚇到了吧？",
                "#face0#今天米蘭達也在噴泉的長椅上畫畫，每天都在努力的她，實力肯定會有所增長的。",
                "#face0#廣場上的人非常多，難道是有我不知道的活動？ ",
                "#face0##h0#，冒險是什麼樣的感覺？",
                "#face0##h0#！你回來了啊？你今天都去了哪兒？ ",
                "#face0#嗯，魔法真是難呢。增益技能就這麼難，怎樣才能呼風喚雨呢？真正的魔法師真的好棒啊！",
                "#face0#今天也辛苦你了，#h0#，是不是很累？躺在椅子上休息一下吧！ ",
                "#face0##h0#最喜歡什麼食物？這是個秘密哦，我最近正在練習做菜呢！嘿嘿",
                "#face0#別看艾咪那樣，其實他超級~~膽小。剛才看到花盆裡的蟲子都被嚇到了吧？",
                "#face0#嗯……？#h0#？你還沒睡？",
                "#face0#嗯……該來了……啊！#h0#你來了啊？……我正在等父母的聯絡。他們每年都一定會寄信來，看來今年要晚一點了。",
                "#face0#今天米蘭達也在噴泉的長椅上畫畫，每天都在努力的她，實力肯定會有所增長的。",				
                "#face0#艾咪已經睡著了。只要一過晚上10點，她就會陷入夢鄉。"
                );
} else if(n==2){
	npcId+=238;
	message = new Array("#face0#今天有什麼有趣的事情嗎？請跟我說說吧！ ",
				
                );
}
let text = message[Math.floor(Math.random() * message.length)] + "";
let resetdate = player.getIntQuestRecordEx(500773, "resetdate");
let nowDate = getMyDate(nowTime);
if (!nowDate.equals(resetdate)) {
        player.updateQuestRecordEx(500773, "bonusTalk", "0");
        player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));
}
let bonusTalk = player.getIntQuestRecordEx(500773, "bonusTalk");
	if (bonusTalk <= 0) {
		text += "\r\n\r\n #L1##b和#p" + npcId + "#對話#k#l";
	}
	if(n != 2){
		text += "\r\n\r\n\r\n #L2##b切換管理人珍妮#k#l";
	}
//text += "\r\n\r\n #L99##b查看管理人信息#k#l";
let sel = npc.askMenuA(text, npcId);

switch (sel) {
        case 99:
                player.showSpecialUI(1, "UIHousingManager");
                break;
        case 2:
				player.updateQuestRecordEx(500773, "manager", "2");
				player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));
				player.showSystemMessage("更換後請等待幾秒，刷新資料。重開介面顯示珍妮");
                break;
        case 1:
                //let nSel = npc.askMenuA("",npcId);
				day = player.getWorldShareRecord(500773, "resetdate");
				resetdate = nowTime
				
				if(day != getMyDate(resetdate)){
					updateManager();
				} else {
					player.scriptProgressMessage​("今天已經跟一個管理人交流過了！！");
				}
                break;

}
function updateManager() {
		// resetdate = nowTime + 24 * 60 * 60 * 1000;
		resetdate = nowTime ;
        let sText = "和#p" + npcId + "#對話, 提升了\r\n";
		let questnpc = 501465 + n;
        var ss = Math.floor(Math.random() * 4) + 1;
        let src = player.getIntQuestRecordEx(questnpc, "s" + ss);
        let value = src + 2;
        switch (ss) {
                case 1:
                        sText += "家務 #b" + src + "#k -> #b" + value + "#k (#r+2#k)\r\n";
                        break;
                case 2:
                        sText += "美感 #b" + src + "#k -> #b" + value + "#k (#r+2#k)\r\n";
                        break;
                case 3:
                        sText += "財務管理 #b" + src + "#k -> #b" + value + "#k (#r+2#k)\r\n";
                        break;
                case 4:
                        sText += "社交術 #b" + src + "#k -> #b" + value + "#k (#r+2#k)\r\n";
                        break;
        }
        player.updateQuestRecordEx(questnpc, "s" + ss, String(value));
        src = player.getIntQuestRecordEx(questnpc, "s5");
        value = src + 2;
        sText += "親密度 #b" + src + "#k -> #b" + value + "#k (#r+2#k)";
        player.updateQuestRecordEx(questnpc, "s5", String(value));
        player.updateQuestRecordEx(questnpc, "bonusTalk", "1");
        player.updateQuestRecordEx(questnpc, "resetdate", getMyDate(resetdate));
        player.updateQuestRecordEx(500773, "resetdate", getMyDate(resetdate));
        player.updateWorldShareRecord(questnpc, player.getQuestRecordEx(questnpc));
        player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));
        npc.sayNextE(sText, npcId);
}

/*function updateManager() {
        resetdate = nowTime + 24 * 60 * 60 * 1000;
        let sText = "和#p" + npcId + "#對話, 提升了\r\n";
        var ss = Math.floor(Math.random() * 4) + 1;
        let src = player.getIntQuestRecordEx(500773, "s" + ss);
        let value = src + 2;
        switch (ss) {
                case 1:
                        sText += "家務 #b" + src + "#k -> #b" + value + "#k (#r+2#k)\r\n";
                        break;
                case 2:
                        sText += "美感 #b" + src + "#k -> #b" + value + "#k (#r+2#k)\r\n";
                        break;
                case 3:
                        sText += "財務管理 #b" + src + "#k -> #b" + value + "#k (#r+2#k)\r\n";
                        break;
                case 4:
                        sText += "社交術 #b" + src + "#k -> #b" + value + "#k (#r+2#k)\r\n";
                        break;
        }
        player.updateQuestRecordEx(500773, "s" + ss, String(value));
        src = player.getIntQuestRecordEx(500773, "s5");
        value = src + 2;
        sText += "親密度 #b" + src + "#k -> #b" + value + "#k (#r+2#k)";
        player.updateQuestRecordEx(500773, "s5", String(value));
        player.updateQuestRecordEx(500773, "bonusTalk", "1");
        player.updateQuestRecordEx(500773, "resetdate", getMyDate(resetdate));
        player.updateWorldShareRecord(500773, player.getQuestRecordEx(500773));
        npc.sayNextE(sText, npcId);
}*/


function getMyDate(str) {
        var oDate = new Date(str),
                oYear = oDate.getFullYear(),
                oMonth = oDate.getMonth() + 1,
                oDay = oDate.getDate(),
                oTime = oYear + '/' + addZero(oMonth) + '/' + addZero(oDay);
        return oTime.substr(2);
}

//補零操作
function addZero(num) {
        if (parseInt(num) < 10) {
                num = '0' + num;
        }
        return num;
}