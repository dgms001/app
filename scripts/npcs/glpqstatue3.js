/*
*/


switch (map.getId()) {
    case 610030500:
        npc.say("每個飛俠都知道,最好的攻擊是一箇你永遠不會看到。來說明這,你會在與平臺和室壁板以匆忙,你只能得到,以及洞悉一切的眼睛,你的匕首或爪必須關閉,永久。畢竟洞悉一切的眼睛已經消除,讓ti小偷雕像,聲稱原始爪!好運！");
        break;
    case 610030000:
        npc.say("一旦被稱為“影子的王子”,大師亮擁有最高速度和力量與短程的匕首和連鎖爪。兼職Bosshunters份子,他reowned融入騎士本身無與倫比的能力。他的傳說長大與深紅色炎時,他感動得太迅速,炎的攻擊只有空氣。偶爾也表現良“檢索”對那些比他更不幸。");
        break;
    case 610030530:
        var event = npc.getEvent("CWKPQ");
        if (event != null) {
            if (parseInt(event.getVariable("glpq5_1")) == 5 && !player.hasItem(4001256, 1)) {
                player.gainItem(4001256, 1);
                npc.say("恭喜你完成任務！");
            } else {
                npc.say("現在就去清理掉所有警惕的眼睛。當你完成任務的時候再來找我。" + parseInt(event.getVariable("glpq5_1")));
            }
        }
        break;
}
