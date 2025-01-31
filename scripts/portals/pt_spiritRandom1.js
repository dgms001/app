/**
 * Instance: Spirit Savior
 * @description Portal: pt_RightRandom
 * @author Yukinoshita
 */
portal.abortWarp()
let portals = [3, 7, 8, 9, 10, 12]
player.teleportToPortalId(0, portals[Math.floor(Math.random() * portals.length)])