


/* global npc, player */

function getStyleChoices(gender, currentFace) {
    let color = currentFace % 1000 - (currentFace % 100);
    let styles;
    if (gender == 0)
        styles = [20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20012, 20014];
    else if (gender == 1)
        styles = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21012, 21014];
    for (let i = 0; i < styles.length; i++)
        if (npc.isFaceValid(styles[i] + color)) //prefer current eye color
            styles[i] += color;
    return styles;
}

let faces = getStyleChoices(player.getGender(), player.getFace());
let isAngel = false;
let isBeta = false;
if (player.getBeginner() == 6001) {
    isAngel = npc.askAngelicBuster() != 0;
} else if (player.getBeginner() == 10000) {
    isBeta = npc.askMenu("請選擇：\r\n#b#L0#神之子：阿爾法#l\r\n#L1#神之子：貝塔#l") != 0;
}
let use = npc.askMenu("我是整形外科院長#b#p" + npc.getNpcId() + "##k,你是想換臉型嗎?是想換個新樣子啊?好~ 我就幫你變成你想要的樣子。\r\n#L0##b整容(使用高階會員卡)#l");
if (use == 0) {
    let res = npc.askAvatar("我能把你現在的臉變成全新的臉...你不想換張新的臉嗎?只要有#b#t5152057##k的話,我就給你做整容手術。慢慢挑選你喜歡的臉吧~", faces, 5152057, isAngel, isBeta);
    let selection = res[0];
    let buy = res[1];
    if (player.hasItem(5152057, 1)) {
        player.loseItem(5152057, 1);
        player.setFace(faces[selection]);
        npc.sayNext("好了,你的朋友們一定認不出來是你了!");
    } else if (buy == 1) {
        if (player.getCashShopCurrency(2) >= 980) {
            player.modifyCashShopCurrency(2, -980);
            player.setFace(faces[selection]);
            npc.sayNext("好了,你的朋友們一定認不出來是你了!");
        } else {
            npc.sayNext("嗯……你的抵用券好像不夠哦，那我無法為你進行服務。");
        }
    } else {
        npc.sayNext("嗯……看樣子你沒有整容券……很抱歉，沒有整容券的話，我不能給你做整形手術。");
    }
}
