let mapA = map.getId();
if (mapA == 993001100) { //限制開啟地圖
    //player.showSystemMessage("在卡BUG頭蓋骨給你打出來 操!!");
} else if (player.getFreeSlots(1) >= 7 && player.getFreeSlots(2) >= 4 && player.getLevel() >= 10) {
    player.loseItem(2431305, 1);
    Gift(player.getJob());
    npc.say("送給你該職業基礎裝備，請注意查收！");
} else {
    npc.say("背包空間不足。");
}

function Gift(job) {
    switch (job) {
        case 13500: //雪吉拉(1轉)
            player.gainItem(1482066, 1);
            player.gainItem(1482069, 1);
            player.gainItem(1482072, 1);
            player.gainItem(1482074, 1);
            break;

        case 110: //狂戰士(2轉)
            player.gainItem(1302138, 1);
            break;
        case 111: //十字軍(3轉
            player.gainItem(1302141, 1);
            break;
        case 112: //英雄(4轉)
            player.gainItem(1302078, 1);
            player.gainItem(1352202, 1);
            break;

        case 120: //見習騎士(2轉)
            player.gainItem(1402081, 1);
            player.gainItem(1412051, 1);
            break;
        case 121: //騎士(3轉)
            player.gainItem(1402084, 1);
            player.gainItem(1412054, 1);
            break;
        case 122: //聖騎士(4轉)
            player.gainItem(1422058, 1);
            player.gainItem(1352212, 1);
            break;

        case 130: //槍騎兵(2轉)
            player.gainItem(1432071, 1);
            player.gainItem(1442099, 1);
            break;
        case 131: //嗜血狂騎(3轉)
            player.gainItem(1432074, 1);
            break;
        case 132: //黑騎士(4轉)
            player.gainItem(1432076, 1);
            player.gainItem(1352222, 1);
            break;

        case 200: //法師(1轉)
            player.gainItem(1372043, 1);
            break;

        case 210: //巫師(火、毒)(2轉)
            player.gainItem(1382017, 1);
            break;
        case 211: //魔導士(火、毒)(3轉)
            player.gainItem(1372069, 1);
            break;
        case 212: //大魔導士(火、毒)(4轉)
            player.gainItem(1382094, 1);
            player.gainItem(1352232, 1);
            break;

        case 220: //巫師(冰、雷)(2轉)
            player.gainItem(1382017, 1);
            break;
        case 221: //魔導士(冰、雷)(3轉)
            player.gainItem(1372069, 1);
            break;
        case 222: //大魔導士(冰、雷)(4轉)
            player.gainItem(1382094, 1);
            player.gainItem(1352242, 1);
            break;

        case 230: //僧侶(2轉)
            player.gainItem(1382017, 1);
            break;
        case 231: //祭司(3轉)
            player.gainItem(1372069, 1);
            break;
        case 232: //主教(4轉)
            player.gainItem(1382094, 1);
            player.gainItem(1352252, 1);
            break;

        case 300: //弓箭手(1轉)
            player.gainItem(1452093, 1);
            player.gainItem(1462078, 1);
            player.gainItem(2060000, 1000); //弓矢
            player.gainItem(2061000, 1000); //弩矢
            break;

        case 310: //獵人(2轉)
            player.gainItem(1452096, 1);
            break;
        case 311: //遊俠(3轉)
            player.gainItem(1452023, 1);
            break;
        case 312: //箭神(4轉)
            player.gainItem(1452101, 1);
            player.gainItem(1352262, 1);
            break;

        case 320: //弩弓手(2轉)
            player.gainItem(1462000, 1);
            break;
        case 321: //狙擊手(3轉)
            player.gainItem(1462008, 1);
            break;
        case 322: //神射手(4轉)
            player.gainItem(1462015, 1);
            player.gainItem(1352272, 1);
            break;

        case 400: //盜賊(1轉)
            player.gainItem(1332063, 1);
            player.gainItem(1472061, 1);
            break;

        case 410: //刺客(2轉)
            player.gainItem(1472008, 1);
            break;
        case 411: //暗殺者(3轉)
            player.gainItem(1472037, 1);
            break;
        case 412: //夜使者(4轉)
            player.gainItem(1472053, 1);
            player.gainItem(1352292, 1);
            break;

        case 420: //俠盜(2轉)
            player.gainItem(1332012, 1);
            break;
        case 421: //神偷(3轉)
            player.gainItem(1332036, 1);
            break;
        case 422: //暗影神偷(4轉)
            player.gainItem(1332052, 1);
            player.gainItem(1352282, 1);
            break;

        case 500: //海盜(1轉)
            player.gainItem(1492066, 1);
            player.gainItem(1482066, 1);
            player.gainItem(2330000, 1000);
            break;

        case 510: //打手(2轉)
            player.gainItem(1482069, 1);
            break;
        case 511: //格鬥家(3轉)
            player.gainItem(1482072, 1);
            break;
        case 512: //拳霸(4轉)
            player.gainItem(1482074, 1);
            player.gainItem(1352902, 1);
            break;

        case 520: //槍手(2轉)
            player.gainItem(1492069, 1);
            break;
        case 521: //神槍手(3轉)
            player.gainItem(1492072, 1);
            break;
        case 522: //槍神(4轉)
            player.gainItem(1492074, 1);
            player.gainItem(1352912, 1);
            break;

        case 1100: //聖魂劍士(1轉)
            player.gainItem(1302135, 1);
            break;
        case 1110: //聖魂劍士(2轉)
            player.gainItem(1302138, 1);
            player.gainItem(1352970, 1);
            break;
        case 1111: //聖魂劍士(3轉)
            player.gainItem(1302141, 1);
            break;
        case 1112: //聖魂劍士(4轉)
            player.gainItem(1302078, 1);
            player.gainItem(1352972, 1);
            break;

        case 1200: //烈焰巫師(1轉)
            player.gainItem(1382085, 1);
            break;
        case 1210: //烈焰巫師(2轉)
            player.gainItem(1382088, 1);
            player.gainItem(1352970, 1);
            break;
        case 1211: //烈焰巫師(3轉)
            player.gainItem(1382091, 1);
            break;
        case 1212: //烈焰巫師(4轉)
            player.gainItem(1382094, 1);
            player.gainItem(1352972, 1);
            break;

        case 1300: //破風使者(1轉)
            player.gainItem(1452093, 1);
            player.gainItem(2060000, 1000);
            break;
        case 1310: //破風使者(2轉)
            player.gainItem(1452096, 1);
            player.gainItem(1352970, 1);
            break;
        case 1311: //破風使者(3轉)
            player.gainItem(1452099, 1);
            break;
        case 1312: //破風使者(4轉)
            player.gainItem(1452101, 1);
            player.gainItem(1352972, 1);
            break;

        case 1400: //暗夜行者(1轉)
            player.gainItem(1472104, 1);
            player.gainItem(2070015, 1000);
            break;
        case 1410: //暗夜行者(2轉)
            player.gainItem(1472107, 1);
            player.gainItem(1352970, 1);
            break;
        case 1411: //暗夜行者(3轉)
            player.gainItem(1472110, 1);
            break;
        case 1412: //暗夜行者(4轉)
            player.gainItem(1472112, 1);
            player.gainItem(1352972, 1);
            break;

        case 1500: //閃雷悍將(1轉)
            player.gainItem(1482066, 1);
            break;
        case 1510: //閃雷悍將(2轉)
            player.gainItem(1482069, 1);
            player.gainItem(1352970, 1);
            break
        case 1511: //閃雷悍將(3轉)
            player.gainItem(1482072, 1);
            break
        case 1512: //閃雷悍將(4轉)
            player.gainItem(1482074, 1);
            player.gainItem(1352972, 1);
            break

        case 2100: //狂狼勇士(1轉)
            player.gainItem(1442096, 1);
            break;
        case 2110: //狂狼勇士(2轉)
            player.gainItem(1442099, 1);
            break;
        case 2111: //狂狼勇士(3轉)
            player.gainItem(1442102, 1);
            break;
        case 2112: //狂狼勇士(4轉)
            player.gainItem(1442105, 1);
            player.gainItem(1352932, 1);
            break;

        case 2200: //龍魔導士(1轉)
            player.gainItem(1372063, 1);
            break;
        case 2211: //龍魔導士(2轉)
            player.gainItem(1372066, 1);
            break;
        case 2214: //龍魔導士(3轉)
            player.gainItem(1372069, 1);
            break;
        case 2217: //龍魔導士(4轉)
            player.gainItem(1372072, 1);
            //player.gainItem(1092089, 1);
            break;

        case 430: //下忍
            player.gainItem(1342000, 1);
            player.gainItem(1332008, 1)
            break;
        case 431: //中忍
            player.gainItem(1342001, 1);
            player.gainItem(1332009, 1);
            break;
        case 432: //上忍
            player.gainItem(1342002, 1);
            player.gainItem(1332014, 1)
            break;
        case 433: //隱忍
            player.gainItem(1342004, 1);
            player.gainItem(1332015, 1);
            break;
        case 434: //影武者
            player.gainItem(1342008, 1);
            player.gainItem(1332052, 1);
            break;

        case 3200: //煉獄巫師(1轉)
            player.gainItem(1382085, 1);
            break;
        case 3210: //煉獄巫師(2轉)
            player.gainItem(1382088, 1);
            break;
        case 3211: //煉獄巫師(3轉)
            player.gainItem(1382091, 1);
            break;
        case 3212: //煉獄巫師(4轉)
            player.gainItem(1382094, 1);
            break;

        case 3300: //狂豹獵人(1轉)
            player.gainItem(1462078, 1);
            player.gainItem(2061000, 1000);
            break;
        case 3310: //狂豹獵人(2轉)
            player.gainItem(1462081, 1);
            break;
        case 3311: //狂豹獵人(3轉)
            player.gainItem(1462084, 1);
            break;
        case 3312: //狂豹獵人(4轉)
            player.gainItem(1462086, 1);
            player.gainItem(1352962, 1);
            break;

        case 3500: //機甲戰神(1轉)
            player.gainItem(1492066, 1);
            break;
        case 3510: //機甲戰神(2轉)
            player.gainItem(1492069, 1);
            break;
        case 3511: //機甲戰神(3轉)
            player.gainItem(1492072, 1);
            break;
        case 3512: //機甲戰神(4轉)
            player.gainItem(1492074, 1);
            player.gainItem(1352702, 1);
            break;

        case 501: //砲手(1轉)
            player.gainItem(1532045, 1);
            break;
        case 530: //重砲兵(2轉)
            player.gainItem(1532049, 1);
            break;
        case 531: //重砲兵隊長(3轉)
            player.gainItem(1532053, 1);
            break;
        case 532: //重砲指揮官(4轉)
            player.gainItem(1532057, 1);
            player.gainItem(1352922, 1);
            break;

        case 2300: //精靈遊俠(1轉)
            player.gainItem(1522000, 1);
            player.gainItem(1352000, 1);
            break;
        case 2310: //精靈遊俠(2轉)
            player.gainItem(1522004, 1);
            //player.gainItem(1352001, 1);
            break;
        case 2311: //精靈遊俠(3轉)
            player.gainItem(1522008, 1);
            //player.gainItem(1352002, 1);
            break;
        case 2312: //精靈遊俠(4轉)
            player.gainItem(1522012, 1);
            player.gainItem(1352003, 1);
            break;

        case 3100: //惡魔殺手(1轉)
            player.gainItem(1322122, 1);
            player.gainItem(1099000, 1);
            break;
        case 3110: //惡魔殺手(2轉)
            player.gainItem(1322124, 1);
            break;
        case 3111: //惡魔殺手(3轉)
            player.gainItem(1322126, 1);
            break;
        case 3112: //惡魔殺手(4轉)
            player.gainItem(1322127, 1);
            player.gainItem(1099004, 1);
            break;

        case 508: //蒼龍俠客(1轉)
            player.gainItem(1492066, 1);
            player.gainItem(2330003, 1000);
            break;
        case 570: //蒼龍俠客(2轉)
            player.gainItem(1492069, 1);
            break;
        case 571: //蒼龍俠客(3轉)
            player.gainItem(1492072, 1);
            break;
        case 572: //蒼龍俠客(4轉)
            player.gainItem(1492074, 1);
            player.gainItem(1352303, 1);
            break;

        case 2400: //幻影俠盜(1轉)
            player.gainItem(1362000, 1);
            player.gainItem(1352100, 1);
            break;
        case 2410: //幻影俠盜(2轉)
            player.gainItem(1362005, 1);
            //player.gainItem(1352101, 1);
            break;
        case 2411: //幻影俠盜(3轉)
            player.gainItem(1362009, 1);
            //player.gainItem(1352102, 1);
            break;
        case 2412: //幻影俠盜(4轉)
            player.gainItem(1362013, 1);
            player.gainItem(1352103, 1);
            break;

        case 5100: //米哈逸(1轉)
            player.gainItem(1302135, 1);
            player.gainItem(1098000, 1);
            break;
        case 5110: //米哈逸(2轉)
            player.gainItem(1302138, 1);
            break;
        case 5111: //米哈逸(3轉)
            player.gainItem(1302141, 1);
            break;
        case 5112: //米哈逸(4轉)
            player.gainItem(1302078, 1);
            player.gainItem(1098003, 1);
            break;

        case 6100: //凱撒(1轉)
            player.gainItem(1402177, 1);
            player.gainItem(1352500, 1);
            break;
        case 6110: //凱撒(2轉)
            player.gainItem(1402081, 1);
            //player.gainItem(1352501, 1);
            break;
        case 6111: //凱撒(3轉)
            player.gainItem(1402084, 1);
            //player.gainItem(1352502, 1);
            break;
        case 6112: //凱撒(4轉)
            player.gainItem(1402075, 1);
            player.gainItem(1352503, 1);
            break;

        case 2700: //夜光(1轉)
            player.gainItem(1212001, 1);
            player.gainItem(1352400, 1);
            break;
        case 2710: //夜光(2轉)
            player.gainItem(1212002, 1);
            break;
        case 2711: //夜光(3轉)
            player.gainItem(1212004, 1);
            break;
        case 2712: //夜光(4轉)
            player.gainItem(1212007, 1);
            player.gainItem(1352403, 1);
            break;

        case 6500: //天使破壞者(1轉)
            player.gainItem(1222001, 1);
            player.gainItem(1352600, 1);
            break;
        case 6510: //天使破壞者(2轉)
            player.gainItem(1222002, 1);
            break;
        case 6511: //天使破壞者(3轉)
            player.gainItem(1222004, 1);
            break;
        case 6512: //天使破壞者(4轉)
            player.gainItem(1222008, 1);
            player.gainItem(1352604, 1);
            break;

        case 4200: //陰陽師(1轉)
            player.gainItem(1552000, 1);
            break;
        case 4210: //陰陽師(2轉)
            player.gainItem(1552002, 1);
            break;
        case 4211: //陰陽師(3轉)
            player.gainItem(1552005, 1);
            break;
        case 4212: //陰陽師(4轉)
            player.gainItem(1552009, 1);

        case 4100: //劍豪(1轉)
            player.gainItem(1542000, 1);
            break;
        case 4110: //劍豪(2轉)
            //player.gainItem(1542002, 1);
            player.gainItem(1352833, 1);
            break;
        case 4111: //劍豪(3轉)
            //player.gainItem(1542005, 1);
            player.gainItem(1352834, 1);
            break;
        case 4112: //劍豪(4轉)
            player.gainItem(1542009, 1);
            player.gainItem(1352835, 1);
            break;

        case 3101: //惡魔復仇者(1轉)
            player.gainItem(1232001, 1);
            player.gainItem(1099006, 1);
            break;
        case 3120: //惡魔復仇者(2轉)
            player.gainItem(1232002, 1);
            player.gainItem(1099007, 1);
            break;
        case 3121: //惡魔復仇者(3轉)
            player.gainItem(1232004, 1);
            break;
        case 3122: //惡魔復仇者(4轉)
            player.gainItem(1232008, 1);
            player.gainItem(1099009, 1);
            break;

        case 3600: //傑諾(1轉)
            player.gainItem(1242001, 1);
            player.gainItem(1353000, 1);
            break;
        case 3610: //傑諾(2轉)
            player.gainItem(1242002, 1);
            break;
        case 3611: //傑諾(3轉)
            player.gainItem(1242004, 1);
            break;
        case 3612: //傑諾(4轉)
            player.gainItem(1242008, 1);
            player.gainItem(1353004, 1);
            break;

        case 11210: //幻獸師
            player.gainItem(1252001, 1);
            player.gainItem(1352810, 1);
            break;
        case 11210: //幻獸師
            player.gainItem(1252002, 1);
            //player.gainItem(1352811, 1);
            break;
        case 11210: //幻獸師
            player.gainItem(1252004, 1);
            //player.gainItem(1352812, 1);
            break;
        case 11210: //幻獸師
            player.gainItem(1252008, 1);
            player.gainItem(1352841, 1);
            break;

        case 2500: //隱月(1轉)
            player.gainItem(1482066, 1);
            player.gainItem(1353100, 1);
            break;
        case 2510: //隱月(2轉)
            player.gainItem(1482069, 1);
            //player.gainItem(1353101, 1);
            break;
        case 2511: //隱月(3轉)
            player.gainItem(1482072, 1);
            //player.gainItem(1353102, 1);
            break;
        case 2512: //隱月(4轉)
            player.gainItem(1482074, 1);
            player.gainItem(1353103, 1);
            break;

        case 14200: //凱內西斯(1轉)
            player.gainItem(1262000, 1);
            player.gainItem(1353200, 1);
            break;
        case 14210: //凱內西斯(2轉)
            player.gainItem(1262001, 1);
            //player.gainItem(1353201, 1);
            break;
        case 14211: //凱內西斯(3轉)
            player.gainItem(1262003, 1);
            //player.gainItem(1353202, 1);
            break;
        case 14212: //凱內西斯(4轉)
            player.gainItem(1262007, 1);
            player.gainItem(1353203, 1);
            break;

        case 3700: //爆拳槍神(1轉)
            player.gainItem(1582000, 1);
            player.gainItem(1353400, 1);
            break;
        case 3710: //爆拳槍神(2轉)
            player.gainItem(1582001, 1);
            //player.gainItem(1353401, 1);
            break;
        case 3711: //爆拳槍神(3轉)
            player.gainItem(1582004, 1);
            //player.gainItem(1353402, 1);
            break;
        case 3712: //爆拳槍神(4轉)
            player.gainItem(1582007, 1);
            player.gainItem(1353403, 1);
            break;

        case 6400: //卡蒂娜(1轉)
            player.gainItem(1272000, 1);
            player.gainItem(1353300, 1);
            break;
        case 6410: //卡蒂娜(2轉)
            player.gainItem(1272001, 1);
            //player.gainItem(1353301, 1);
            break;
        case 6411: //卡蒂娜(3轉)
            player.gainItem(1272003, 1);
            //player.gainItem(1353302, 1);
            break;
        case 6412: //卡蒂娜(4轉)
            player.gainItem(1272007, 1);
            player.gainItem(1353303, 1);
            break;

        case 15200: //伊利恩(1轉)
            player.gainItem(1282000, 1);
            player.gainItem(1353500, 1);
            break;
        case 15210: //伊利恩(2轉)
            player.gainItem(1282001, 1);
            //player.gainItem(1353501, 1);
            break;
        case 15211: //伊利恩(3轉)
            player.gainItem(1282003, 1);
            //player.gainItem(1353502, 1);
            break;
        case 15212: //伊利恩(4轉)
            player.gainItem(1282007, 1);
            player.gainItem(1353503, 1);
            break;

        case 15500: //亞克(1轉)
            player.gainItem(1482066, 1);
            player.gainItem(1353600, 1);
            break;
        case 15510: //亞克(2轉)
            player.gainItem(1482069, 1);
            player.gainItem(1353601, 1);
            break;
        case 15511: //亞克(3轉)
            player.gainItem(1482072, 1);
            player.gainItem(1353602, 1);
            break;
        case 15512: //亞克(4轉)
            player.gainItem(1482074, 1);
            player.gainItem(1353603, 1);
            break;

        case 301: //開拓者(1轉)
            player.gainItem(1592000, 1);
            player.gainItem(1353700, 1);
            break;
        case 330: //開拓者(2轉)
            player.gainItem(1592001, 1);
            //player.gainItem(1353701, 1);
            break;
        case 331: //開拓者(3轉)
            player.gainItem(1592003, 1);
            //player.gainItem(1353702, 1);
            break;
        case 332: //開拓者(4轉)
            player.gainItem(1592007, 1);
            player.gainItem(1353703, 1);
            break;

        case 16400: //虎影(1轉)
            player.gainItem(1292000, 1);
            player.gainItem(1353800, 1);
            break;
        case 16410: //虎影(2轉)
            player.gainItem(1292001, 1);
            //player.gainItem(1353801, 1);
            break;
        case 16411: //虎影(3轉)
            player.gainItem(1292003, 1);
            //player.gainItem(1353802, 1);
            break;
        case 16412: //虎影(4轉)
            player.gainItem(1292007, 1);
            player.gainItem(1353803, 1);
            break;

        case 15100: //阿戴爾(1轉)
            player.gainItem(1354000, 1);
            player.gainItem(1213000, 1);
            break;
        case 15110: //阿戴爾(2轉)
            //player.gainItem(1354001, 1);
            player.gainItem(1213001, 1);
            break;
        case 15111: //阿戴爾(3轉)
            //player.gainItem(1354002, 1);
            player.gainItem(1213004, 1);
            break;
        case 15112: //阿戴爾(4轉)
            player.gainItem(1354003, 1);
            player.gainItem(1213007, 1);
            break;

        case 17500: //墨玄(1轉)
            player.gainItem(1352860, 1);
            player.gainItem(1403000, 1);
            break;
        case 17510: //墨玄(2轉)
            //player.gainItem(1352861, 1);
            player.gainItem(1403001, 1);
            break;
        case 17511: //墨玄(3轉)
            //player.gainItem(1352862, 1);
            player.gainItem(1403004, 1);
            break;
        case 17512: //墨玄(4轉)
            player.gainItem(1352863, 1);
            player.gainItem(1403007, 1);
            break;

        case 6300: //凱殷(1轉)
            player.gainItem(1214000, 1);
            player.gainItem(1354010, 1);
            break;
        case 6310: //凱殷(2轉)
            player.gainItem(1214001, 1);
            //player.gainItem(1354011, 1);
            break;
        case 6311: //凱殷(3轉)
            player.gainItem(1214004, 1);
            //player.gainItem(1354012, 1);
            break;
        case 6312: //凱殷(4轉)
            player.gainItem(1214007, 1);
            player.gainItem(1354013, 1);
            break;

        case 16200: //拉拉
            player.gainItem(1372006, 1);
            player.gainItem(1354020, 1);
            break;
        case 16210: //拉拉
            player.gainItem(1372001, 1);
            player.gainItem(1354021, 1);
            break;
        case 16211: //拉拉
            player.gainItem(1372014, 1);
            player.gainItem(1354022, 1);
            break;
        case 16212: //拉拉
            player.gainItem(1372105, 1);
            player.gainItem(1354023, 1);
            break;
        case 11212: //幻獸師
            player.gainItem(1372063, 1);
            player.gainItem(1352810, 1);
            break;
    }
}