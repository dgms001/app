let event = portal.getEvent("kenta");
if (event != null) {

    let members = event.getVariable("members");
    if (map.getId() == 923040100) {
        if (event.getVariable("stage1")) {
            for (let i = 0; i < members.length; i++) {
                members[i].changeMap(map.getId() + 100);
            }
        } else {
            portal.showHint("完成任務後才能透過", 250, 5);
        }
    } else if (map.getId() == 923040200) {
        if (event.getVariable("stage2")) {
            for (let i = 0; i < members.length; i++) {
                members[i].changeMap(map.getId() + 100);
            }
        } else {
            portal.showHint("完成任務後才能透過", 250, 5);
        }
    } else if (map.getId() == 923040300) {
        if (event.getVariable("stage3")) {
            for (let i = 0; i < members.length; i++) {
                members[i].changeMap(map.getId() + 100);
            }
        } else {
            portal.showHint("完成任務後才能透過", 250, 5);
        }
    } else if (map.getId() == 923040400) {
        if (event.getVariable("stage3")) {
            for (let i = 0; i < members.length; i++) {
                members[i].changeMap(map.getId() + 100);
            }
        } else {
            portal.showHint("完成任務後才能透過", 250, 5);
        }
    }
}
portal.abortWarp();