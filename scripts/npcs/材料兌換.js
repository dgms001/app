/**
 * 材料兌換-新端腳本  
 **/

var items = Array(
    /*格式說明
    Array(
        得到的物品ID,
        Array(
            Array(
                需要的第一個物品ID,需要的第一個物品數量
            ),
            Array(
                需要的第二個物品ID,需要的第二個物品數量
            ),
            Array(
                需要的第三個物品ID,需要的第三個物品數量
            )
            這裡可以繼續寫很多箇。。。。有多少個需要的物品就寫多少個。。。
        ),
        需要的金錢數量
    ),

    */

    //物品1
    Array(
        4310097,
        Array(
            Array(
                4310065, 50
            )
        ),
        0
    ),

    //物品2
    Array(
        4310059,
        Array(
            Array(
                4310065, 50
            )
        ),
        0
    ),

    //物品3
    Array(
        4021041,
        Array(
            Array(
                4310065, 75
            )
        ),
        0
    ),

    //物品3
    Array(
        4021042,
        Array(
            Array(
                4310065, 100
            )
        ),
        0
    ),

    //物品3
    Array(
        4021041,
        Array(
            Array(
                4310059, 3
            )
        ),
        0
    ),

    //物品3
    Array(
        4021042,
        Array(
            Array(
                4021041, 2
            )
        ),
        0
    )
);

//邏輯開始
let selStr = "\r\n"
for (var i = 0; i < items.length; i++) {
    selStr += "#b兌換 #v" + items[i][0] + "# 需要材料:"
    for (var j = 0; j < items[i][1].length; j++) {
        selStr += "#b#v" + items[i][1][j][0] + "# x #r" + items[i][1][j][1] + " "
    }
    if (items[i][2] > 0) selStr += ",#b金幣 #r" + items[i][2];
    selStr += "#r#L" + i + "#點我兌換#v" + items[i][0] + "##l\r\n\r\n"
}
let selected = npc.askMenu(selStr);
selStr = "請輸入兌換 #v" + items[selected][0] + "#的數量：\r\n"
let number = npc.askNumber(selStr, "0", 0, 9999);

//判斷材料是否足夠

if (!player.hasMesos(items[selected][2] * number)) {
    npc.say("金幣不足,需要" + items[selected][2] * number);
} else {
    var cailiaoTag = 0;
    for (var j = 0; j < items[selected][1].length; j++) {
        if (!player.hasItem(items[selected][1][j][0], items[selected][1][j][1] * number)) {
            cailiaoTag++;
            break;
        }
    }
    if (cailiaoTag > 0) {
        npc.say("材料不足");
    } else {
        for (var j = 0; j < items[selected][1].length; j++) {
            player.loseItem(items[selected][1][j][0], items[selected][1][j][1] * number);
        }
        player.gainItem(items[selected][0], number);
        npc.say("兌換成功！");
    }
}

