/* global npc, player, map */


npc.sayNext("海盜擁有出色的敏捷性和力量，能夠使用百發百中的手槍，或瞬間制敵的體術。火槍手能夠利用不同屬性的子彈發動有效進攻，或在搭乘戰船後發動更加強大的攻擊。拳手可透過變身發揮強大的體術。");
let mapIndex = npc.askYesNo("你要體驗一下海盜職業嗎？");
if (mapIndex == 1) {
    player.changeMap(1020500, 0);
}

