/**
 *
 *
 */

npc.sayNextNoEsc("嗯，麥加說的果然沒錯，你看上去很有天賦。見到你很高興。我叫凱琳，是海盜船諾特勒斯號的船長，同時也是海盜們的轉職官。聽說你對海盜感興趣，是嗎？");
npc.sayNextNoEsc("我們得先談點個人的事情。為了對抗威脅冒險島世界的人——黑魔法師，我在不久前組建了海盜團。諾特勒斯號的海盜們現在正在冒險島世界各地調查黑魔法師的痕跡。");
npc.sayNextNoEsc("如果你成為海盜的話，就必須幫助調查黑魔法師。當然，這不是義務，而是建議。雖然我是海盜們的轉職官，但不是海盜們的主人。所以不是命令，只是建議。");
npc.sayNextNoEsc("海盜大致分為使用短槍的人和使用體術的人，各自的技能存在很大的差別。如果說有什麼共同點的話，那就是都有華麗的連續技。雖然操作很難，但熟悉了的話，就會變得很強。");

let sel = npc.askAcceptNoEsc("我好像說得太多了……你快決定吧。到底是成為海盜，還是選擇其他職業？如果想成為海盜，我就使用轉職官的特權，馬上邀請你到諾特勒斯號去。#r拒絕的話，我會建議你選擇其他職業。請別擔心#k。");
if (sel == 1) {
    npc.startQuest();
    player.changeMap(120000101, 0);
} else {
    let njob = npc.askMenu("你想選擇海盜以外的其他道路嗎？這也不壞。那你想選擇什麼職業呢？ \r\n#b#L1#戰士#l \r\n#b#L2#魔法師#l \r\n#b#L3#弓箭手#l \r\n#b#L4#飛俠#l");
    player.startQuest(1406, 0, njob);
    switch (njob) {
        case 1:
            npc.sayNextNoEsc("你想選擇戰士嗎？雖然很遺憾，但是沒辦法。武術教練會聯絡你的。你可以留意#b左側的任務提示#k。");
            break;
        case 2:
            npc.sayNextNoEsc("你想走魔法師之路嗎？雖然很遺憾，但我尊重你的選擇。#b漢斯#k會聯絡你的。你可以透過#b左側的任務提示#k檢視。");
            break;
        case 3:
            npc.sayNextNoEsc("你想走弓箭手之路嗎？雖然很遺憾，但我尊重你的選擇。#b赫麗娜#k會聯絡你的。你可以透過#b左側的任務提示#k檢視。");
            break;
        case 4:
            npc.sayNextNoEsc("你想走飛俠之路嗎？雖然很遺憾，但我尊重你的選擇。#b達克魯#k會聯絡你的。你可以透過#b左側的任務提示#k檢視。");
            break;
    }
}