/**
 *
 *
 */

let event = reactor.getEvent("boss_beidler");
if (null != event && event.getVariable("dropItems") == "0") {
    event.setVariable("dropItems", "1");
    reactor.dropItemsOld(0, 0, 0,
        // 2614005, 1000000,//100萬突破


        4001714, 1000000,//100萬金幣
        4310098, 1000000,//低階貝幣
        1113073, 15000,//	1113073	中級貝勒德戒指
        1122265, 12700,//1122265	中級貝勒德刻印吊墜
        1132244, 12500,//1132244	中級貝勒德刻印腰帶
        1032221, 12600//1032221	中級貝勒德耳環
    );
}