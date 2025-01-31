/**
 * 夜光-命运的分岔路
 */

//黑暗降临 27001201
//耀眼光球 27001100

//光明/黑暗魔法强化(实际为强化暗之魔法) 27000207
//强化光之魔法 27000106

let index = player.getIntKeyValue("LuminousPath") - 1
let sel = npc.askSelectMenu(-1, 0, index != -1, index, ["光明之路", "黑暗之路"])
player.setKeyValue("LuminousPath", sel + 1)
if (sel == 0) { //光明
    let skillLevel0 = Math.max(0, player.getSkillLevel(27001201))
    let skillLevel1 = Math.max(0, player.getSkillLevel(27000207))
    player.setSkillLevel(27001201, -1, 0, false)
    player.setSkillLevel(27000207, -1, 0, false)
    player.setSkillLevel(27001100, skillLevel0, 20, false)
    player.setSkillLevel(27000106, skillLevel1, 5, false)
    player.setSkillLevel(20041005, 1, 1, false);
} else if (sel == 1) { //黑暗
    let skillLevel0 = Math.max(0, player.getSkillLevel(27001100))
    let skillLevel1 = Math.max(0, player.getSkillLevel(27000106))
    player.setSkillLevel(27001100, -1, 0, false)
    player.setSkillLevel(27000106, -1, 0, false)
    player.setSkillLevel(27001201, skillLevel0, 20, false)
    player.setSkillLevel(27000207, skillLevel1, 5, false)
    player.setSkillLevel(20041005, 1, 1, false);

}