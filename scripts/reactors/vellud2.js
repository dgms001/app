/**
 *
 *
 */
let event = reactor.getEvent("boss_beidler");
if (null != event && event.getVariable("dropItems") == "0") {
    event.setVariable("dropItems", "1");
    reactor.dropItemsOld(0, 0, 0,
        4310097, 1000000,//貝勒德幣


        // 2614005, 1000000,//100萬突破
        2614005, 1000000,//100萬突破


        4001714, 1000000,//100萬金幣
        //4310098, 500000,//低階貝幣

        1032222, 22000,//高階貝勒地耳環
        1122266, 24000,//高階貝勒地項鍊
        1132245, 25000 //高階貝勒地腰帶
    );
}