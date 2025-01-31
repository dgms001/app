/**
 *
 *
 */

let event = reactor.getEvent("boss_beidler");
if (null != event && event.getVariable("dropItems") == "0") {
    event.setVariable("dropItems", "1");
    reactor.dropItemsOld(0, 0, 0,
        4001714, 1000000,//100萬金幣
        4310098, 1000000,//低階貝幣		
        1132243, 50000,//1132243	低階貝勒德刻印腰帶
        1122264, 50000,//1122264	低階貝勒德刻印吊墜
        1113072, 50000,//1113072	低階貝勒德戒指
        1032220, 50000//1032220	低階貝勒德耳環


    );
}