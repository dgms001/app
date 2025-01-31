portal.abortWarp();

switch (map.getId()) {
    case 105200300:
    case 105200700:
        player.runScript("血腥女王");
        break;
    case 105200200:
    case 105200600:
        player.runScript("皮埃爾");
        break;
    case 105200100:
    case 105200500:
        player.runScript("半半");
        break;
    case 105200400:
    case 105200800:
        player.runScript("貝倫");
        break;
}