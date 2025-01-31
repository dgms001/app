/**
 *
 *
 */
let ret = npc.askAccept("由我來說明另一種讓怪怪變得更強的方法吧。");
if (ret == 1) {
    npc.sayNext("怪怪不只能強化，也可以進化呢。透過怪怪圖鑑上的進化分頁就可以進行進化。");
    npc.sayNext("#i3801011#\r\n怪怪們可以進行進化。但是在進化前，必須確認目標怪怪已經抵達 Lv5 (最大等級)。");
    npc.sayNext("#i3801011#\r\n先把Lv5的怪怪放在上方的 Base 欄後，再把相同階級的怪怪材料配置在下方的 Material 欄上，點選進化按鈕即可。");
    npc.sayNext("#i3801011#\r\n進化是無條件成功，做為進化用材料的怪怪也會因失去力量而迴歸自然。");
    npc.sayNext("進行進化的怪怪是會提升階級，階級從低到高分為C級、B級、A級、S級與SS級。");
    npc.startQuest();
    npc.completeQuest();
}
