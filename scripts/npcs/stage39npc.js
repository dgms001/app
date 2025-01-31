/**
 *
 *
 */

var temp = [];
//存在的怪物
//
var MobName = Array("三尾狐",
    "藍刺豚",
    "蘑菇仔",
    "紅蝸牛",
    "仙人掌寶寶",
    "玩具戰機",
    "猴子",
    "紅色毒蛙",
    "木面怪人",
    "石面怪人",
    "青蛇",
    "刺蘑菇",
    "公沙沙兔",
    "斧木妖",
    "火焰半人馬",
    "血腥哈維",
    "大海馬",
    "追憶的神官",
    "忘卻的祭司",
    "黃蜂將軍",
    "九尾狐",
    "狼人",
    "蝙蝠怪",
    "帕茲王",
    "小石球",
    "沙鼠",
    "紅花蛇",
    "苔蘚木妖",
    "大幽靈",
    "黑食人花",
    "鱷魚"
);

//存在的NPC
var NPCName = Array("赫麗娜",
    "拉里克",
    "洛亞",
    "興兒",
    "達爾米",
    "尤塔",
    "伊貝赫",
    "拉娜",
    "蒂娜",
    "艾寧",
    "坦坦",
    "迪亞",
    "露比",
    "薩皮",
    "佩裡",
    "阿米",
    "艾寧",
    "南哈特",
    "奧茲",
    "瑪茲拉",
    "雅思敏",
    "猶泰",
    "菲爾",
    "坎泰倫",
    "羅德",
    "西溫",
    "稀恩",
    "傑尊",
    "佩法",
    "傑爾米",
    "奧爾卡",
    "魯提",
    "艾利傑",
    "奇姆",
    "希勒爾",
    "布蘭德",
    "伊安",
    "伯納德",
    "文博士",
    "潘姆",
    "亞可",
    "克魯巴",
    "弗裡德",
    "金利奇",
    "扎諾",
    "阿丁",
    "艾娜",
    "黛瑪院長",
    "蕭公"
);

var JobName = Array(
    "英雄",
    "聖騎士",
    "黑騎士",
    "火毒魔導師",
    "冰雷魔導師",
    "主教",
    "神射手",
    "箭神",
    "隱士",
    "俠盜",
    "暗影雙刀",
    "衝鋒隊長",
    "船長",
    "神炮王",
    "龍的傳人",
    "魂騎士",
    "炎術士",
    "風靈使者",
    "夜行者",
    "奇襲者",
    "戰神",
    "龍神",
    "龍神",
    "雙弩精靈",
    "幻影",
    "夜光",
    "隱月",
    "尖兵",
    "惡魔獵手",
    "惡魔復仇者",
    "喚靈鬥師",
    "豹弩遊俠",
    "機械師",
    "爆破手",
    "劍豪",
    "陰陽師",
    "米哈爾",
    "狂龍戰士",
    "爆莉萌天使",
    "神之子",
    "林之靈",
    "超能力者"
);

var Chair = Array(
    "柿子樹鞦韆",
    "龍龍的蛋殼椅",
    "楓葉紀念凳",
    "雲朵洗手間椅子",
    "閃耀星星之夜椅子",
    "奧妙的超級藥水椅子",
    "熱情的紅色藥水椅子",
    "生日派對椅",
    "埃歐雷的小音樂會",
    "希拉的梳妝椅",
    "擺鐘椅子",
    "迷你神獸椅子",
    "發財椅",
    "蘑菇朋友椅子",
    "紅色龍椅子",
    "藍色龍椅子",
    "夏日喵喵椅子 ",
    "仲夏可可島",
    "魔力品克繽",
    "熱帶夏日椅子",
    "千年狐椅子",
    "邪惡黑龍椅子",
    "魔法之書",
    "可愛音符椅子",
    "羊羔椅子",
    "尋找故鄉的月妙椅子",
    "邪惡之毒椅子",
    "喵喵的免費擁抱",
    "邪惡羊椅子",
    "粉色手柄",
    "深夜貓頭鷹",
    "面板皇后椅子",
    "睡覺小鳥椅子",
    "泡泡浴椅子",
    "痊癒10周椅子",
    "兒童鞦韆",
    "扎昆的帝王椅子",
    "拉尼婭野餐椅",
    "翻滾兔子椅子",
    "天使舞臺椅",
    "魔法之書",
    "可愛音符椅子",
    "那就是我！",
    "雲朵洗手間椅子",
    "萬聖節南瓜椅",
    "尋找故鄉的月妙椅子",
    "泡泡浴椅子",
    "兒童鞦韆",
    "和奧爾卡一起看棒球",
    "萬聖節南瓜椅",
    "和半半在一起",
    "開心的皮埃爾",
    "可怕的女王",
    "奇石椅子",
    "嚕嚕啦啦印第安小孩",
    "印第安小孩的朋友",
    "印第安元老的兄弟",
    "巨大白雪人椅子",
    "巨大企鵝王椅子",
    "水晶椅",
    "兔子旋風",
    "白雲漫步椅",
    "威爾士柯基犬椅子",
    "白鸛飛行員椅子"
);

var Town = Array(
    "黃金寺廟",
    "玩具城",
    "勇士部落",
    "瑪加提亞",
    "諾特勒斯",
    "阿里安特",
    "萬神殿",
    "埃德爾斯坦",
    "魔法密林",
    "南港",
    "裡恩",
    "天空之城",
    "金海灘",
    "百草堂",
    "林中之城",
    "神木村",
    "冰峰雪域",
    "射手村",
    "明珠港",
    "廢棄都市",
    "聖地",
    "地球防禦本部",
    "童話村",
    "阿爾泰營地",
    "水下世界"
);
//型別 0 臺詞
var Type_0 = Array(
    Array("這是誰的臺詞 - \"#b我的身手已經大不如前,希望能收儘快收一名徒弟……\"#k？", "吉翁"),
    Array("這是誰的臺詞 - \"#b又要做作業又要學習……好忙啊……\"？", "妖精維英"),
    Array("這是誰的臺詞 - \"#b呃啊……?我的研究材料哪去了?\"？", "魔法師庫迪"),
    Array("這是誰的臺詞 - \"#b海平面必須停止上升才行啊……\"#k？", "弗坦"),
    Array("這是誰的臺詞 - \"#b一箇人玩也是很無聊的……唉~\"#k？", "桉"),
    Array("這是誰的臺詞 - \"#b雖然漢斯不是個壞人……\"#k？", "妖精艾溫"),
    Array("這是誰的臺詞 - \"#b噗噗……這是什麼氣味?\"#k？", "艾比尤拉"),
    Array("這是誰的臺詞 - \"#b你在採集草藥啊……\"#k？", "薩位元拉瑪"),
    Array("這是誰的臺詞 - \"#b天氣好極了,不是嗎?這種天氣最適合和海芘一起散步了.\"#k？", "格萊特"),
    Array("這是誰的臺詞 - \"#b看看我的肌肉,你難道不想變得和我一樣強大嗎?\"#k？", "坤"),
    Array("這是誰的臺詞 - \"#b如果你有惡魔檔案,就把他交給我保管怎麼樣?\"#k？", "基尼"),
    Array("這是誰的臺詞 - \"#b如果你需要更堅固的防具,就進來看看啊?\"#k？", "路德司"),
    Array("這是誰的臺詞 - \"#b你問我能看見前方嗎?為什麼明知故問?\"#k？", "普諾"),
    Array("這是誰的臺詞 - \"#b嗯,你要不要也試試得道修煉呢?\"#k？", "諾功"),
    Array("這是誰的臺詞 - \"#b我是不會原諒那些偷盜的人的！\"#k？", "哈利"),
    Array("這是誰的臺詞 - \"#b我是個很適合穿圍裙的男人！\"#k？", "伊萊克斯"),
    Array("這是誰的臺詞 - \"#b海盜最強!來比試一場吧!\"#k？", "瓦萊莉"),
    Array("這是誰的臺詞 - \"#b最近,怪物們似乎變得越來越凶惡了,真讓人擔心.\"#k？", "莉薩"),
    Array("這是誰的臺詞 - \"#b我身邊的得利巴總是吵著站崗的工作讓他厭煩.\"#k？", "哦爾薩恩"),
    Array("這是誰的臺詞 - \"#b滄海桑田,隨著歲月的流逝,世界也發生了變化\"#k？", "道功"),
    Array("這是誰的臺詞 - \"#b工作雖然重要,不過品嚐美味也是很重要的.\"#k？", "巴斑"),
    Array("這是誰的臺詞 - \"#b據說朋友艾溫給人類造成不便.\"#k？", "妖精羅雯"),
    Array("這是誰的臺詞 - \"#b哼,我根本不能相信一箇外人.\"#k？", "副校長卡拉揚"),
    Array("這是誰的臺詞 - \"#b希望有人能替我弄點吃的來.\"#k？", "朵朵"),
    Array("這是誰的臺詞 - \"#b我正在侍奉古代諾巴之神.\"#k？", "狼牙"),
    Array("這是誰的臺詞 - \"#b用來點燃爐火的燃料不足.\"#k？", "高盧"),
    Array("這是誰的臺詞 - \"#b身體放鬆才沒過多久.\"#k？", "達比"),
    Array("這是誰的臺詞 - \"#b大家必須齊心協力.\"#k？", "拉克里斯")
);


//怪物 - 不存在冒險島的
var Type_1 = Array(
    "貝爾庫里斯",
    "暗黑破壞神",
    "依幕爾克",
    "卡莉雪",
    "老大哥",
    "班·貝儂",
    "胡克",
    "波提切利",
    "比爾澤布",
    "黑暗塞特斯",
    "重型悍馬",
    "藏紅花",
    "日本烏鴉",
    "搭乘型石人",
    "柔軟精",
    "狼牙",
    "索拉立昂",
    "紅辣椒",
    "伯圖斯",
    "亞古獸",
    "迪路獸"
);

var Type_2 = Array(
    Array("黃金寺廟", Array("諾婭", "湯大媽")),
    Array("玩具城", Array("哈爾裡", "舍琵")),
    Array("勇士部落", Array("格里巴", "武術教練")),
    Array("瑪加提亞", Array("韓", "人造人 A", "胡恩族長", "琵麗雅")),
    Array("諾特勒斯", Array("武器商人摩根", "咖哩", "頓特勒斯")),
    Array("阿里安特", Array("拉爾拉", "阿爾丁", "巴一嵐", "雅思敏")),
    Array("萬神殿", Array("卡琳", "塞琳")),
    Array("埃德爾斯坦", Array("阿貝爾特", "安蘇尼", "切奇", "韓利泰")),
    Array("魔法密林", Array("妖精瑪麗")),
    Array("廢都地鐵", Array("冬青")),
    Array("裡恩", Array("普斯拉")),
    Array("天空之城", Array("波達", "莉薩", "珂麗爾")),
    Array("金海灘", Array("梅森", "多普")),
    Array("百草堂", Array("鶴", "小防防")),
    Array("林中之城", Array("克利斯拉瑪")),
    Array("神木村", Array("村長塔塔慢", "馬蒂", "龍伯")),
    Array("冰峰雪域", Array("傑德", "斯卡德", "阿爾卡斯特")),
    Array("射手村", Array("皮亞", "長老斯坦", "斯卡斯")),
    Array("明珠港", Array("金利奇", "特奧", "簡")),
    Array("廢棄都市", Array("休咪", "內拉", "伊卡路斯")),
    Array("聖地", Array("南哈特", "希納斯", "胡克")),
    Array("地球防禦本部", Array("金博士", "波特博士")),
    Array("童話村", Array("墨鐵", "石鐵", "七誠")),
    Array("阿爾泰營地", Array("瑪倫", "杜魯", "蘿夏", "友裡索")),
    Array("水下世界", Array("坎特", "妙斯", "佳佳", "海豚"))
);

//不存在的    職    業
var Type_3 = Array(
    "美工設計師",
    "死靈法師",
    "幻影大師",
    "舞蹈大師",
    "重炮拳手",
    "惡魔獵人",
    "尋寶獵人",
    "獵龍人",
    "野蠻人",
    "德魯伊"
);


//不存在的椅子
var Type_4 = Array(
    "萊比的柿子樹椅子	",
    "瑪莫斯椅子",
    "鑽石浴缸",
    "錢囤子",
    "輪椅",
    "初戀的純情椅子",
    "3月兔椅子",
    "迴歸我心椅子",
    "情人之詛咒椅",
    "晚年兵長之椅"
);

//不存在的城市
var Type_5 = Array(
    "沉睡之幻影林地",
    "阿庫亞阿庫亞",
    "康寧都市",
    "天鵝村莊",
    "板橋",
    "澳大利亞",
    "洛杉磯",
    "悉尼",
    "堪培拉",
    "布拉格"
);

//不存在的製作材料
var QNA2 = Array(
    "好用的模具",
    "白毛翁種子",
    "氪石原石",
    "毒黴素",
    "鎳",
    "風信子果汁",
    "麥格納斯的汗水",
    "扎昆之淚",
    "真愛巧克力",
    "蝴蝶精之砂"
);


var event = npc.getEvent();
if (event != null) {
    var str = "#e問題：#n";
    var type = Math.floor(Math.random() * 6);//取型別
    var sIdx = Math.floor(Math.random() * 4);
    sort();
    switch (type) {
        case 0://型別 0 臺詞
            var qIndex = Math.floor(Math.random() * Type_0.length);
            var text = Type_0[qIndex][0];
            var ans = Type_0[qIndex][1];
            initRand(NPCName);
            str += text + "\r\n\r\n#b";
            for (var i = 0; i < 4; i++) {
                if (i == sIdx) {
                    str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                } else {
                    str += "#L" + (i + 100) + "#" + (i + 1) + ". " + NPCName[getRand(i)] + "#l\r\n";
                }
            }
            break;
        case 1://不存在冒險島的怪物
            str += "以下怪物，未曾在冒險島中出現過的是？\r\n\r\n#b";
            var qIndex = Math.floor(Math.random() * Type_1.length);
            var ans = Type_1[qIndex];
            initRand(MobName);
            for (var i = 0; i < 4; i++) {
                if (i == sIdx) {
                    str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                } else {
                    str += "#L" + (i + 100) + "#" + (i + 1) + ". " + MobName[getRand(i)] + "#l\r\n";
                }
            }
            break;
        case 2://不存在冒險島的NPC
            initRand(Type_2);
            var qIndex = getRand(0);
            var town = Type_2[qIndex][0];//城鎮
            var list = Type_2[qIndex][1];
            var ans = list[Math.floor(Math.random() * list.length)];
            str += "以下NPC中，在" + town + "中出現過的是？\r\n\r\n#b";
            var tKey;

            for (var i = 0; i < 4; i++) {
                if (i == sIdx) {
                    str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                } else {
                    var tID = getRand(i + 5);
                    if (tID != qIndex) {
                        var tList = Type_2[tID][1];
                        str += "#L" + (i + 100) + "#" + (i + 1) + ". " + tList[Math.floor(Math.random() * tList.length)] + "#l\r\n";
                    }
                }
            }
            break;
        case 3://不存在的職業
            str += "以下職業中，不存在冒險島中的是？\r\n\r\n#b";
            var qIndex = Math.floor(Math.random() * Type_3.length);
            var ans = Type_3[qIndex];
            initRand(JobName);
            for (var i = 0; i < 4; i++) {
                if (i == sIdx) {
                    str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                } else {
                    str += "#L" + (i + 100) + "#" + (i + 1) + ". " + JobName[getRand(i)] + "#l\r\n";
                }
            }
            break;
        case 4://不存在的椅子
            str += "以下椅子中，未曾在冒險島中出現過的是？\r\n\r\n#b";
            var qIndex = Math.floor(Math.random() * Type_4.length);
            var ans = Type_4[qIndex];
            initRand(Chair);
            for (var i = 0; i < 4; i++) {
                if (i == sIdx) {
                    str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                } else {
                    str += "#L" + (i + 100) + "#" + (i + 1) + ". " + Chair[getRand(i)] + "#l\r\n";
                }
            }
            break;
        case 5://不存在的城市
            str += "以下城鎮中，未曾在冒險島中出現過的是？\r\n\r\n#b";
            var qIndex = Math.floor(Math.random() * Type_5.length);
            var ans = Type_5[qIndex];
            initRand(Town);
            for (var i = 0; i < 4; i++) {
                if (i == sIdx) {
                    str += "#L" + i + "#" + (i + 1) + ". " + ans + "#l\r\n";
                } else {
                    str += "#L" + (i + 100) + "#" + (i + 1) + ". " + Town[getRand(i)] + "#l\r\n";
                }
            }
            break;
    }
    if (!"clear".equals(event.getVariable("stage39"))) {
        var selection = npc.askMenuNoEsc(str);
        if (selection >= 100) {
            //回答錯誤 記錄回答錯誤次數
            var value = parseInt(event.getVariable("stage39_killed")) + 1;
            event.setVariable("stage39_killed", String(value));
            if (value >= 2) {
                event.setVariable("stage39_killed", String(0));
                event.setVariable("stage39_Value", String(0));
            }
            npc.sayNextNoEsc("真可惜，你回答錯了！這是你第" + value + "次錯誤！如果回答錯誤兩次就需要重新挑戰！");
        } else if (selection >= 0) {
            //回答正確
            var value = parseInt(event.getVariable("stage39_Value")) + 1;
            event.setVariable("stage39_Value", String(value));
            if (value >= 10 && !"clear".equals(event.getVariable("stage39"))) {
                var stage = parseInt(event.getVariable("stage"));
                event.setVariable("stage" + stage, "clear");
                player.screenEffect("quest/party/clear");
                map.blowWeatherEffectNotice("你現在可以前往下一層了。", 147, 15000);
                npc.sayNextNoEsc("你已經透過了我的考驗！可以進入下一箇階段了！");
            } else {
                npc.sayNextNoEsc("回答正確！你還需要回答" + (10 - value) + "個問題！");
            }

        }
    } else {
        npc.sayNextNoEsc("你已經透過了我的考驗！可以進入下一箇階段了！");
    }
}

function sort() {
    MobName.sort(function () {
        return 0.5 - Math.random();
    });
    NPCName.sort(function () {
        return 0.5 - Math.random();
    });
    JobName.sort(function () {
        return 0.5 - Math.random();
    });
    Chair.sort(function () {
        return 0.5 - Math.random();
    });
    Town.sort(function () {
        return 0.5 - Math.random();
    });

    Type_0.sort(function () {
        return 0.5 - Math.random();
    });

    Type_1.sort(function () {
        return 0.5 - Math.random();
    });

    Type_2.sort(function () {
        return 0.5 - Math.random();
    });

    Type_3.sort(function () {
        return 0.5 - Math.random();
    });

    Type_4.sort(function () {
        return 0.5 - Math.random();
    });

    Type_5.sort(function () {
        return 0.5 - Math.random();
    });
}

function initRand(arr) {
    temp = [];
    for (var i = 0; i < arr.length; i++) {
        temp[i] = i;
    }
    temp.sort(function () {
        return 0.5 - Math.random();
    });
}

function getRand(index) {
    return temp[index];
}