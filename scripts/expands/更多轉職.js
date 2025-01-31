/* 圓夢谷 TMS 237 萬能菜單 */
var status = -1
var txt;
/*------------------------- 表情符號 -------------------------*/
var a30 = "#fEffect/CharacterEff/1022223/6/0#" //跑马灯
var a31 = "#fEffect/CharacterEff/1022223/7/0#" //跑马灯
var a32 = "#fEffect/CharacterEff/1022223/8/0#" //跑马灯
var a38 = "#fItem/Pet/5000213.img/stand0/0#";//藍色惡魔
var f2 = "#fUI/CashShop/CSBeauty/hairColor/Enable/2#"
var f3 = "#fUI/CashShop/CSBeauty/hairColor/Enable/3#"
var f4 = "#fUI/CashShop/CSBeauty/hairColor/Enable/4#"
var f5 = "#fUI/CashShop/CSBeauty/hairColor/Enable/5#"
var a10 = "#fEffect/ItemEff.img/1102919/effect/default/0#" //小黄鸭车0-7
var f1 = "#fUI/CashShop/CSBeauty/hairColor/Enable/0#"
var qq1 = "#fUI/EventShop/adventureShop/GradeBuyer/0#"
var s1 = "#fUI/CashShop/CSBeauty/hairColor/Disable/0#"
var a23 = "#fEffect/ItemEff.img/1005254/effect/default/4#" //蓝色中小星星
txt = "#fs21##r#e\r\n\r\n#fs13#";

txt += "#fs16##L1##b" + a23 + "轉職中心#l#L2#" + a23 + "一鍵五轉#l#L5#" + a23 + "核心商店#l\r\n\r\n";
txt += "#fs16##L3##b" + a23 + "一鍵滿技能#l#L7#" + a23 + "一鍵補學技能#l#L4#" + a23 + "強制副手裝備#l\r\n\r\n";


let selection = npc.askMenuA(txt, true);

switch (selection) {
    case 1:
        player.runScript("轉職中心");
        break;
    case 2:
        player.runScript("五轉");
        break;
    case 3:
        player.runScript("滿技能");
        break;
    case 4:
        player.runScript("裝備副手");
        break;
    case 5:
        player.runScript("核心商店");
        break;
    case 6:
        player.runScript("寵物裝備轉職");
        break;
    case 7:
        player.runScript("一鍵補學技能");
        break;
}
