let mapId = map.getId();
if (mapId == 350112300) {
    npc.askMenu("#r誤入雪龜島的人,除了真正的英雄以外,都留在了這裡。#k\r\n\r\n#L100#...?#l");

    npc.askMenu("#r冒險家，我這裡問你很嚴肅的的問題。你如果能回答上，我就不為難你。\r\n\r\n#L100#請講。#l");

    var fee = npc.askText("#r你覺得五醬漂亮嗎？#b(提示：超漂亮)", "", 0, 999);


    if (fee != "超漂亮") {
        npc.say("你錯了。");
    } else {
        npc.askMenu("#r你透過了!快走吧！冒險家，你是一箇誠實的人！！\r\n\r\n#L100#謝謝不為難之恩！#l");
        player.changeMap(350130500);
    }
}