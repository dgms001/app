/*  This is mada by dgms    
 *  This source is made by Funms Team
 *  
 *  功能：貝勒德副本 零核 獎勵
 *  
 *  @Author dgms 
 */

/* global rm */

function act() {
    var em = rm.getEventManager("boss_beidler");
    var eim = rm.getEventInstance();
    if (em != null && eim != null) {
        var state = eim.getProperty("BeidlerHead");
        if ("1111".equals(state)) {
            if ("0".equals(eim.getProperty("RewardDone"))) {
                eim.setProperty("RewardDone", "1");
                rm.dropItems(true);
            }
        }
    }
}
