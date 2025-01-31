/// <reference no-default-lib="true"/>

declare const sh: ScriptHelper
declare const player: ScriptPlayer
declare const map: ScriptField
declare const npc: ScriptNpc
declare const portal: ScriptPortalAPI
declare const reactor: ScriptReactor
declare const party: ScriptParty
declare const event: ScriptEvent
declare const em: ScriptEvent
declare const server: ScriptServer

declare const ScriptPath: string

declare function load(script: string): any
declare function require(script: string): any

type byte = number
type short = number
type int = number
type long = number
type double = number
type Integer = number
type String = string
type Object = any
type Consumer<T> = (e: T) => void

type Map<K extends keyof any, V> = {
  [P in K]: V;
} & {
  size(): number
  get(key: K): V | undefined
}

declare interface Point {
    x: number
    y: number
}

declare interface Rectangle {
    x: number
    y: number
    width: number
    hight: number
}

declare interface Pair<L, R> {
    left: L
    right: R
}

declare interface Set<K> {
    size(): number
    contains(key: K): boolean
}

declare interface EventScript {
	init(attachment: any): void
	playerDied(player: ScriptPlayer): void
	playerDisconnected(player: ScriptPlayer): void
	playerChangedMap(player: ScriptPlayer): void
	partyMemberDischarged(party: ScriptParty, player: ScriptPlayer): void
	timerExpired(key: string): void
	mobDied(mob: ScriptMob, killer: ScriptPlayer): void
	mobHit(player: ScriptPlayer, mob: ScriptMob, damage: number, trueDamage: number): void
	playerHit(player: ScriptPlayer, mob: ScriptMob, damage: number): void
	friendlyMobHurt(mob: ScriptMob, damage: number): void
	escortDone(mob): void
	escortNode(mob: ScriptMob, nodeName: string, duration: number): void
	playerHit(player: ScriptPlayer): void
	playerPickupItem(player: ScriptPlayer, itemId: number): void
	playerUseSkill(player: ScriptPlayer, skillId: number): void
	deinit(): void
}

declare function defineEventScript(obj: EventScript): any;


type Mob = any
type SealedItemInfo = any
type MovementFragment = any
type BaseDao = any
type GameMap = any
type ItemType = any
type RewardInfo = any
type MapleUnionRankInfo = any
type EquipItemState = any
type FileTime = any
type ObtacleAtomEntry = any
type Date = any
type Function = any
type LevelUpItemInfo = any
type Random = any
type ItemSpecialData = any
type ItemSpecialExData = any
type ResultSet = any
type GameCharacter = any
type List = any

declare interface AbstractScriptBinding extends ScriptBase {
	getScriptName(): String

	/**
	 * 在服务端打印调试信息
	 */
	debug(s: String): void

}
declare interface PlayerScriptInteraction extends AbstractScriptBinding {
	/**
	 * 根据事件名获取当前频道事件实例
	 * 不需要当前角色处于实例中也可以获取
	 *
	 * @param script 事件名
	 * @return event实例
	 */
	getEvent(script: String): ScriptEvent

	/**
	 * 获取地图记录
	 *
	 * @param variable
	 * @return
	 */
	getRememberedMap(variable: String): [mapId: int, portalId: int]

	/**
	 * 作弊信息记录
	 *
	 * @param msg
	 */
	logSuspicious(msg: String): void

	/**
	 * 创建副本实例
	 *
	 * @param script
	 * @param onlyOne
	 * @param attachment
	 * @return
	 */
	makeEvent(script: String, onlyOne: boolean, attachment: Object): ScriptEvent

	/**
	 * 写入地图记录
	 *
	 * @param variable
	 */
	rememberMap(variable: String): void

	/**
	 * 重置地图记录
	 *
	 * @param variable
	 * @return
	 */
	resetRememberedMap(variable: String): [mapId: int, portalId: int]

	/**
	 * 获取当前频道所有角色
	 */
	getChannelPlayers(): ScriptPlayer[]

}
declare interface ScriptBase {
	/**
	 * 全服广播 显示任务关闭（头顶信封）
	 *
	 * @param questId
	 */
	announcedQuestClose(questId: int): void

	/**
	 * 全服广播 限时任务开启（头顶信封）
	 *
	 * @param questId
	 * @param tDuration
	 */
	announcedQuestOpen(questId: int, tDuration: int): void

	/**
	 * 全服公告 带前缀[公告事项]
	 *
	 * @param msg
	 */
	broadcastNotice(msg: String): void

	/**
	 * 全服公告 不带前缀
	 *
	 * @param msg
	 */
	broadcastNoticeWithoutPrefix(msg: String): void

	/**
	 * 全服 广播玩家聊天窗口信息
	 *
	 * @param type
	 * @param msg
	 */
	broadcastPlayerNotice(type: int, msg: String): void

	/**
	 * 全服 天气效果公告
	 *
	 * @param type
	 * @param msg
	 * @param tDuration
	 */
	broadcastWeatherEffectNotice(type: int, msg: String, tDuration: int): void

	/**
	 * 全服广播 右下角气泡文字
	 *
	 * @param npcId
	 * @param time
	 * @param msg
	 * @param sound
	 */
	broadcastPopupSay(npcId: int, time: int, msg: String, sound: String): void

	/**
	 * 全服广播 道具喇叭消息
	 *
	 * @param name
	 * @param message 必须包含 “{道具名称}”
	 * @param item
	 * @param color
	 */
	broadcastItemMessage(name: String, message: String, item: Item, color: int): void

	/**
	 * 数据库插入操作
	 */
	customSqlInsert(sql: String, ...args: Object[]): long

	/**
	 * 数据库获取操作
	 */
	customSqlResult(sql: String, ...args: Object[]): Map<String, Object>[]

	/**
	 * 数据库查询操作， 只返回第一条结果。
	 */
	customSqlSingleResult(sql: String, ...args: Object[]): Map<String, Object>

	transaction(consumer: Consumer<BaseDao>): void

	/**
	 * 数据库更新操作
	 */
	customSqlUpdate(sql: String, ...args: Object[]): int

	addItemReward(itemId: int, quantity: int, message: String, duration: long): void

	addCSPointReward(csPoint: int, message: String, duration: long): void

	addMesosReward(money: long, message: String, duration: long): void

	addExpReward(exp: long, message: String, duration: long): void

	addExpRateReward(expRate: int, message: String, duration: long): void

	/**
	 * 设置全局共享变量
	 *
	 * @param key 变量标识
	 * @param value 非空时设置变量，否则删除变量
	 */
	setGlobalVariable(key: String, value: Object): void

	/**
	 * 获取全局共享变量
	 *
	 * @param key 变量标识
	 * @return 返回变量值，不存在时返回null
	 */
	getGlobalVariable(key: String): Object

	/**
	 * 获取server脚本实例
	 *
	 * @param name server脚本名
	 * @return
	 */
	getServerInstance(name: String): ScriptServer

	/**
	 * 创建道具实例。
	 * 请在确实需要创建道具实例时使用。
	 * 如果只想获取道具名称，请使用 sh.getItemName(itemId)
	 */
	makeItemWithId(itemId: int): Item

}
declare interface ScriptEvent extends AbstractScriptBinding {
	getVariables(): Map<String, Object>

	setVariable(key: String, value: Object): void

	getVariable(key: String): any

	clearVariables(): void

	getMap(mapId: int): ScriptField

	/**
	 * 创建新的地图实例 event结束时必须调用destroyMap回收此地图实例 否则会造成内存泄漏
	 *
	 * @param mapId 地图ID
	 * @return 地图实例
	 */
	makeMap(mapId: int): ScriptField

	/**
	 * 回收{@link #makeMap(int)}创建的地图实例
	 *
	 * @param map 通过{@link #makeMap(int)}创建的地图实例
	 */
	destroyMap(map: ScriptField): void

	startTimer(key: String, millisDelay: int): void

	stopTimer(key: String): void

	stopTimers(): void

	destroyEvent(): void

	getChannelPlayers(): ScriptPlayer[]

	runScript(player: ScriptPlayer, scriptName: String): void

	runScript(player: ScriptPlayer, scriptName: String, npcId: int): void

	/**
	 * 设置当前频道倍率
	 *
	 * @param type 类型，0经验，1掉落，2金币
	 * @param rate 倍数
	 * @throws Exception 未知类型
	 */
	setRate(type: int, rate: int): void

	/**
	 * 全服广播道具属性信息
	 *
	 * @param msg
	 * @param item
	 */
	broadcastGachaponMsgEx(player: ScriptPlayer, msg: String, item: Item): void

	getChannel(): int

	clearMapInstances(): void

	getName(): String

	isPracticeMode(): boolean

	setPracticeMode(practiceMode: boolean): void

}
declare interface ScriptField {
	reset(): void

	reset(level: int): void

	checkHontale(): boolean

	overrideFieldLimit(val: int): void

	setChangeMobLevel(var1: int): void

	setLimitMobId(var1: int): void

	/**
	 * 地图天气效果
	 */
	blowWeather(itemId: int, msg: String): void

	/**
	 * 地图天气效果
	 */
	blowWeather(itemId: int, msg: String, duration: int): void

	broadcastEventNotice(msg: String): void

	broadcastMsg(type: int, msg: String): void

	broadcastChatMsg(type: int, msg: String): void

	changeBGM(name: String): void

	/**
	 * 清理地图怪物
	 */
	clearMobs(): void

	clearDrops(): void

	/**
	 * 创建地图掉落物
	 *
	 * @param nCreateType always 0
	 * @param count 数量
	 * @param type 最小类型
	 * @param maxType 最大类型
	 * @param top 顶端y值
	 * @param bottom 底部y值
	 */
	createObtacleAtom(nCreateType: int, count: int, type: int, maxType: int, top: int, bottom: int): void

	/**
	 * 创建地图掉落物
	 *
	 * @param count 数量
	 * @param type 类型
	 * @param maxType 最大类型
	 * @param speedMin 最小速度
	 * @param speedMax 最大速度
	 */
	createObtacleAtom(count: int, type: int, maxType: int, speedMin: int, speedMax: int): void

	/**
	 * 创建地图掉落物
	 *
	 * @param count 数量
	 * @param type 类型
	 * @param speed 速度
	 * @param damage 伤害百分比
	 */
	createObtacleAtom(count: int, type: int, speed: int, damage: int): void

	/**
	 * 生成掉落物对象
	 *
	 * @param type 类型
	 * @param top 顶点坐标
	 * @param bottom 底部坐标
	 * @param damageWidth 伤害宽度（像素）
	 * @param damagePercent 伤害百分比
	 * @param createDelay 创建延迟
	 * @param flyDelay 起飞延迟
	 * @param speed 速度
	 * @param acceleration 加速度
	 * @param distance 距离
	 * @param angle 角度
	 * @return 掉落物对象
	 */
	makeObtacleAtom(type: int, top: Point, bottom: Point, damageWidth: int, damagePercent: int, createDelay: int, flyDelay: int, speed: int, acceleration: int, distance: int, angle: int): ObtacleAtomEntry

	/**
	 * 将掉落物对象创建到地图
	 *
	 * @param entry 掉落物对象
	 */
	createObtacleAtom(entry: ObtacleAtomEntry[]): void

	destroyTempNpc(entId: int): void

	disableObjectEffect(name: String): void

	getArea(id: int): Rectangle

	getEventMobCount(): int

	getEventMobCountById(dataId: int): int

	getMap(): GameMap

	getId(): int

	getNumItemsInArea(id: int): int

	getNumItemsInArea(id: int, itemId: int): int

	getNumPlayersInArea(id: int): int

	getNumPlayersItemsInArea(id: int): int

	getNumItemsInArea(name: String): int

	getNumItemsInArea(name: String, itemId: int): int

	getNumPlayersInArea(name: String): int

	getNumPlayersItemsInArea(name: String): int

	getPlayerCount(): int

	/**
	 * 生成怪物
	 */
	makeMob(mobId: int): ScriptMob

	/**
	 * 重写传送口脚本名
	 */
	overridePortal(portalName: String, script: String): void

	/**
	 * 重写反应堆脚本名
	 */
	overrideReactor(reactorName: String, script: String): void

	portalEffect(name: String): void

	/**
	 * 重置地图召唤怪物 一般用于副本地图 使用之前请先 使用 clearMobs() 进行清理怪物
	 */
	resetMobsSpawns(): void

	setFootHoldMove(startPos: Point, endPos: Point, nPos: Point, xPrePixel: int, yPrePixel: int, name: String): void

	setFootholdMan(var0: int): void

	/**
	 * 重置触发器
	 */
	resetReactors(): void

	/**
	 * 召唤自定义反应堆
	 *
	 * @param reactorId 反应堆ID
	 * @param reactorName 反应堆名称，自定义，用于后续获取反应堆状态
	 * @param x x坐标
	 * @param y y坐标
	 */
	spawnReactor(reactorId: int, reactorName: String, x: int, y: int): void

	/**
	 * 移除重写的传送口名称
	 */
	revertPortal(portalName: String): void

	/**
	 * 移除重写的反应堆名称
	 */
	revertReactor(reactorName: String): void

	screenEffect(name: String): void

	showScreenAutoLetterBox(s: String, delay: int, n: int): void

	scriptProgressMessage(msg: String): void

	setMapTaggedObjectSmoothVisible(tag: String, visible: boolean, manual: int, delay: int): void

	setMapTaggedObjectVisible(tag: String, visible: boolean, manual: int, delay: int): void

	setMapTaggedObjectAnimation(name: String, type: int): void

	changeEnvironment(path: String, type: int): void

	/**
	 * 设置是否允许怪物重生
	 */
	setNoSpawn(value: boolean): void

	setReactorState(name: String, state: byte): void

	setReactorState(name: String, state: byte, f: byte): void

	destroyReactor(name: String): void

	showBalrogShip(): void

	showDockShip(): void

	showGiantBossPhase3Clock(total: int, remain: int): void

	changeGiantBossMapState(data: String, type: int): void

	/**
	 * 显示计时器
	 */
	showTimer(seconds: int): void

	showMillisecondTimer(millis: int): void

	/**
	 * 暂停计时器
	 *
	 * @param pause 是否暂停
	 * @param leftTime 剩余时间/秒
	 */
	pauseTimer(pause: boolean, leftTime: int): void

	showTimer(type: int, seconds: int): void

	shiftTimer(back: boolean, leftTime: int): void

	timerGauge(max: int, left: int): void

	/**
	 * 显示道场计时器
	 *
	 * @param seconds 总时间
	 * @param elapsedTime 已经经过的时间
	 */
	showDojangTimer(seconds: int, elapsedTime: int): void

	showUndockShip(): void

	soundEffect(name: String): void

	/**
	 * 召唤怪物
	 */
	spawnMob(mobId: int, x: int, y: int): Object

	/**
	 * 召唤怪物
	 */
	spawnMob(mobId: int, x: int, y: int, faceLeft: boolean): Object

	/**
	 * 召唤生成的怪物
	 */
	spawnMob(sMob: ScriptMob, x: int, y: int): Object

	/**
	 * 召唤生成的怪物（带朝向）
	 */
	spawnMob(sMob: ScriptMob, x: int, y: int, faceLeft: boolean): Object

	spawnMob(sMob: ScriptMob, x: int, y: int, faceLeft: boolean, spawnType: int): Object

	spawnTempNpc(npcId: int, x: int, y: int): int

	/**
	 * 转移所有玩家到其他地图
	 */
	transferPlayers(mapId: int): void

	onLucidButterfly(): void

	changeHornState(add: boolean): void

	brokenLucidSteps(): void

	lucidSetPhase3Bg(type: int): void

	getReactorStateId(var1: String): int

	blowWeatherEffectNotice(msg: String, type: int, duration: int): void

	setEvent(event: ScriptEvent): void

	startFieldEvent(): void

	inheritContext(source: ScriptField): void

	endFieldEvent(): void

	startErdaSpectrumQuest(stage: int, level: int, duration: int, ...param: Integer[]): void

	endErdaSpectrumQuest(stage: int, saveScore: boolean): void

	setFastSpawn(b: boolean): void

	showAchieveRate(var1: int): void

	getPlayers(): ScriptPlayer[]

	getMyHomeId(): int

	getMobById(mobId: int): ScriptMob

	initSailEvent(var1: int, var2: int, var3: int, var4: int, var5: int): void

	updateSailEventKill(): void

	prepareStartBingoEvent(info: String, event: ScriptEvent): void

	prepareStartOXQuizEvent(info: String, event: ScriptEvent): void

	showFieldRank(size: int): void

	updateFieldRank(size: int, ranks: int[][]): void

	spawnItemDrop(itemId: int, quantity: int, x: int, y: int, autoPick: boolean, closePick: boolean): void

	spawnItemDrop(itemId: int, quantity: int, x: int, y: int, autoPick: boolean, closePick: boolean, noPetPick: boolean): void

	spawnItemDrop(item: Item, x: int, y: int, autoPick: boolean, closePick: boolean): void

	spawnItemDrop(item: Item, x: int, y: int, autoPick: boolean, closePick: boolean, noPetPick: boolean): void

	spawnFallingDrop(itemId: int): void

	spawnFallingDrop(item: Item, x: int, y: int): void

	/**
	 * 碎梦者关卡信息刷新
	 *
	 * @param op 操作类型
	 * @param deep 深度
	 * @param timer 剩余时间
	 * @param stage 层数
	 */
	updateDreamBreakInfo(op: int, deep: int, timer: int, stage: int): void

	changeFieldObjectColor(var1: int, var2: int, var3: int, var4: int, var5: int, var6: boolean, var7: int): void

	changeFieldObjectGrayScale(var1: int, var2: boolean): void

	getPortalIdByName(name: String): int

	getPortalByName(name: String): ScriptPortal

	getPortalById(id: int): ScriptPortal

	/**
	 * 设定当前地图是否为个人掉落模式
	 *
	 * @param individualDrop true: 为地图中每个角色处理掉落，false: 常规方式处理掉落
	 */
	setIndividualDrop(individualDrop: boolean): void

	setDropDisabled(b: boolean): void

	isDropDisabled(): boolean

	killMobByDataId(id: int): void

	setMobDropProvider(f: Function): void

	slimeSetDead(player: ScriptPlayer): void

	fieldSetVariable(key: String, value: String): void

	toString(): String

	showTextEffect(var0: String, var1: int, var2: int, var3: int, var4: int, var5: int, var6: int, var7: int, var8: int, var9: int, var10: int, var11: String, var12: int, var13: boolean): void

	showTopScreenEffect(effect: String): void

	showTopScreenDelayedEffect(effect: String, delay: int): void

	/**
	 * 当前地图是否存在符文
	 */
	hasRuneStone(): boolean

	guildBossAction(type: int, arg1: int, arg2: int): void

	banbanRealmResult(success: boolean, dataId: int): void

	createMiniRoom(type: int): void

}
declare interface ScriptGuild {
	getId(): int

	getName(): String

	/**
	 * 家族成员数量上限
	 */
	getCapacity(): int

	/**
	 * 家族等级
	 */
	getLevel(): int

	/**
	 * 设置高级技能点
	 *
	 * @param sp 点数
	 */
	setSp(sp: int): void

	/**
	 * 高级技能点数量
	 */
	getSp(): int

	/**
	 * 给GP点数
	 *
	 * @param diff 点数
	 */
	gainGP(diff: int): void

	/**
	 * 重置家族技能
	 *
	 * @param hyper false - 普通技能 true - 高级技能
	 */
	resetSkill(hyper: boolean): void

	/**
	 * 家族技能等级
	 *
	 * @param skillId
	 */
	getSkillLevel(skillId: int): int

	/**
	 * 增加家族成员数量上限
	 *
	 * @param amount 要增加的数量
	 */
	increaseCapacity(amount: int): boolean

	/**
	 * 设置家族族徽
	 */
	setEmblem(arr: int[]): void

}
declare interface ScriptHelper extends AbstractScriptBinding {
	/**
	 * 创建一个Point对象
	 */
	newPoint(x: int, y: int): Point

	/**
	 * 创建一个Random对象
	 */
	newRandom(): Random

	/**
	 * 获取道具名称
	 *
	 * @param itemId 道具id
	 * @return 道具名称
	 */
	getItemName(itemId: int): String

	/**
	 * 获取道具的wz数据
	 *
	 * @param itemId 道具id
	 * @throws net.nautms.data.exception.ItemNotFoundException 道具不存在时
	 * @return wz数据
	 */
	getItemData(itemId: int): ItemData

	/**
	 * 获取所有道具列表
	 */
	getItemDataList(): ItemData[]

	/**
	 * 返回道具id是否存在
	 *
	 * @param itemId 道具id
	 * @return true=存在 false=不存在
	 */
	itemExists(itemId: int): boolean

	/**
	 * 格式化字符串，相当于java.lang.String.format(format, args)
	 */
	sprintf(format: String, ...args: Object[]): String

	/**
	 * 格式化时间戳
	 */
	formatDate(timestamp: long, format: String): String

	/**
	 * 格式化日期对象
	 */
	formatDate(date: Date, format: String): String

	/**
	 * 获取配置项
	 *
	 * @param configName 配置名
	 * @return 如果存在配置，返回该配置，否则返回null
	 */
	getConfig(configName: String): String

	getBytes(s: String): byte[]

	/**
	 * 搜索道具
	 *
	 * @param name 道具名，null则不筛选名称
	 * @param isEquip 是否只搜索装备
	 * @param isCash 是否只搜索现金道具
	 * @return 道具id列表
	 */
	searchItem(name: String, isEquip: boolean, isCash: boolean): Integer[]

	/**
	 * 获取装备附带技能
	 *
	 * @param itemId 道具ID
	 * @param level 装备等级（e.g. 起源戒指等级）
	 * @return [{left: skillId, right: skillLevel}]
	 */
	getEquipSkills(itemId: int, level: int): Pair<Integer, Integer>[]

	/**
	 * 获取潜能描述
	 *
	 * @param optionId 潜能ID
	 * @param level 装备需求等级
	 */
	getOptionDescription(optionId: int, level: int): String

	/**
	 * 计算装备某条涅槃火焰属性的具体值
	 *
	 * @param equip 装备实例
	 * @param type 类型 0-24
	 * @param grade 等级 1-9
	 */
	getExStatValue(equip: Equip, type: int, grade: int): int

	getFamiliarCardId(templateId: int): int

}
declare interface ScriptMob {
	getMob(): Mob

	/**
	 * 改变怪物的基础血量 （包括当前血量和最大血量）
	 *
	 * @param maxHp
	 */
	changeBaseHp(maxHp: double): void

	/**
	 * 扔物品
	 *
	 * @param itemId
	 */
	dropItem(itemId: int): void

	/**
	 * 获取怪物的WZ数据Id
	 *
	 * @return
	 */
	getDataId(): int

	getDropAfter(afterHit: boolean): int

	/**
	 * 获取怪物的实例Id
	 *
	 * @return
	 */
	getEntityId(): int

	/**
	 * 获取怪物的血量
	 *
	 * @return
	 */
	getHp(): long

	/**
	 * 获取怪物当前地图Id
	 *
	 * @return
	 */
	getMapId(): int

	/**
	 * 获取怪物最大血量上限
	 *
	 * @return
	 */
	getMaxHp(): long

	/**
	 * 更改怪物等级
	 *
	 * @param level
	 */
	setForcedMobStat(level: int): void

	/**
	 * 更改怪物能力属性
	 *
	 * @param level 等级
	 * @param rate 倍率（基础能力 * 倍率）
	 */
	setForcedMobStat(level: int, rate: int): void

	setHpLimitPercent(hpLimitPercent: double): void

	getHpLimitPercent(): double

	getForcedMobStat(): ForcedMobStat

	/**
	 * 设置怪物的最大血量
	 *
	 * @param maxHp
	 */
	setMaxHp(maxHp: long): void

	/**
	 * 设置怪物的当前血量
	 *
	 * @param hp
	 */
	setHp(hp: long): void

	setZoneDataType(nCurZoneDataType: int): void

	setDummyBossGroups(...mobs: ScriptMob[]): void

	/**
	 * 对怪物造成伤害 注意被此伤害杀死的怪物不会掉落物品
	 *
	 * @param damage 伤害数值
	 */
	hurt(damage: long): void

	/**
	 * 恢复怪物HP
	 *
	 * @param heal 恢复数值
	 */
	heal(heal: long): void

	disableSpawnRevives(): void

	getHPPercent(): int

	setKeepAggro(keep: boolean): void

	setDropperId(dropperId: int): void

	/**
	 * 按比例减少怪物受到的伤害
	 *
	 * @param reduceDamageR 减伤比例
	 */
	setReduceDamageR(reduceDamageR: double): void

	/**
	 * 判断怪物是否在pos坐标的distance距离内
	 *
	 * @param pos 判断坐标
	 * @param distance 距离
	 * @return
	 */
	checkNearby(pos: Point, distance: int): boolean

	nextNodeAction(): void

	setMoveType(moveType: int): void

	getPosition(): Point

	disableDrops(): void

	showAggroRank(): void

	forcedDirectionAct(n: int): void

}
declare interface ScriptNpc extends PlayerScriptInteraction {
	getNpcId(): int

	getItemId(): int

	say(message: String): void

	say(msg: String, bLeft: boolean): void

	say(msg: String, diffNpcID: int): void

	say(msg: String, diffNpcID: int, bLeft: boolean): void

	sayNoEsc(msg: String): void

	sayNoEsc(msg: String, bLeft: boolean): void

	sayNoEsc(msg: String, diffNpcID: int): void

	sayNoEsc(msg: String, diffNpcID: int, bLeft: boolean): void

	sayS(msg: String): void

	sayS(msg: String, flip: boolean): void

	saySNoEsc(msg: String): void

	saySNoEsc(msg: String, flip: boolean): void

	sayE(msg: String): void

	sayE(msg: String, diffNpcID: int): void

	sayE(msg: String, flip: boolean): void

	sayENoEsc(msg: String): void

	sayENoEsc(msg: String, flip: boolean): void

	sayENoEsc(msg: String, diffNpcID: int): void

	sayENoEsc(msg: String, diffNpcID: int, flip: boolean): void

	sayNext(msg: String): void

	sayNext(msg: String, bLeft: boolean): void

	sayNext(msg: String, diffNpcID: int): void

	sayNext(msg: String, diffNpcID: int, bLeft: boolean): void

	sayNextWait(msg: String, diffNpcID: int, bLeft: boolean, delay: int): void

	sayNextNoEsc(msg: String): void

	sayNextNoEsc(msg: String, bLeft: boolean): void

	sayNextNoEsc(msg: String, diffNpcID: int): void

	sayNextNoEsc(msg: String, diffNpcID: int, bLeft: boolean): void

	sayNextS(msg: String): void

	sayNextS(msg: String, flip: boolean): void

	sayNextSWait(msg: String, flip: boolean, delay: int): void

	sayNextSNoEsc(msg: String): void

	sayNextSNoEsc(msg: String, flip: boolean): void

	sayNextE(msg: String): void

	sayNextE(msg: String, flip: boolean): void

	sayNextE(msg: String, diffNpcID: int): void

	sayNextEWait(msg: String, delay: int): void

	sayNextEWait(msg: String, flip: boolean, delay: int): void

	sayNextEWait(msg: String, diffNpcID: int, delay: int): void

	sayNextENoEsc(msg: String): void

	sayNextENoEsc(msg: String, flip: boolean): void

	sayNextENoEsc(msg: String, diffNpcID: int): void

	sayNextENoEsc(msg: String, diffNpcID: int, flip: boolean): void

	sayZ(msg: String, npcId: int): void

	sayNextZ(msg: String, npcId: int): void

	sayN(msg: String, npcId: int, type: short): void

	sayNextN(msg: String, npcId: int, type: short): void

	sayDelayN(msg: String, npcId: int, overrideMode: short, delay: int): void

	sayNextDelayN(msg: String, npcId: int, overrideMode: short, delay: int): void

	sayIllus(msg: String, delay: int, index: int, left: boolean): void

	sayIllus(msg: String, diffNpcId: int, delay: int, index: int, flip: boolean): void

	sayIllusNoEsc(msg: String, delay: int, index: int, flip: boolean): void

	sayIllusNoEsc(msg: String, diffNpcId: int, delay: int, index: int, flip: boolean): void

	sayNextIllus(msg: String, delay: int, index: int, left: boolean): void

	sayNextIllus(msg: String, diffNpcId: int, delay: int, index: int, flip: boolean): void

	sayNextIllusNoEsc(msg: String, delay: int, index: int, flip: boolean): void

	sayNextIllusNoEsc(msg: String, diffNpcId: int, delay: int, index: int, flip: boolean): void

	askBoxText(message: String, msg2: String, col: int, line: int): String

	askBoxTextNoEsc(message: String, msg2: String, col: int, line: int): String

	askYesNo(msg: String): boolean

	askYesNo(msg: String, bLeft: boolean): boolean

	askYesNo(msg: String, diffNpcID: int): boolean

	askYesNo(msg: String, diffNpcID: int, bLeft: boolean): boolean

	askYesNoNoEsc(msg: String): boolean

	askYesNoNoEsc(msg: String, bLeft: boolean): boolean

	askYesNoNoEsc(msg: String, diffNpcID: int): boolean

	askYesNoNoEsc(msg: String, diffNpcID: int, bLeft: boolean): boolean

	askYesNoS(msg: String): boolean

	askYesNoS(msg: String, flip: boolean): boolean

	askYesNoSNoEsc(msg: String): boolean

	askYesNoSNoEsc(msg: String, flip: boolean): boolean

	askYesNoE(msg: String): boolean

	askYesNoE(msg: String, flip: boolean): boolean

	askYesNoE(msg: String, diffNpcID: int): boolean

	askYesNoENoEsc(msg: String): boolean

	askYesNoENoEsc(msg: String, flip: boolean): boolean

	askYesNoENoEsc(msg: String, diffNpcID: int): boolean

	askYesNoENoEsc(msg: String, diffNpcID: int, flip: boolean): boolean

	askYesNoN(msg: String, npcId: int, type: short): boolean

	askAccept(msg: String): boolean

	askAccept(msg: String, bLeft: boolean): boolean

	askAccept(msg: String, diffNpcID: int): boolean

	askAccept(msg: String, diffNpcID: int, bLeft: boolean): boolean

	askAcceptNoEsc(msg: String): boolean

	askAcceptNoEsc(msg: String, bLeft: boolean): boolean

	askAcceptNoEsc(msg: String, diffNpcID: int): boolean

	askAcceptNoEsc(msg: String, diffNpcID: int, bLeft: boolean): boolean

	askAcceptS(msg: String): boolean

	askAcceptS(msg: String, flip: boolean): boolean

	askAcceptSNoEsc(msg: String): boolean

	askAcceptSNoEsc(msg: String, flip: boolean): boolean

	askAcceptE(msg: String): boolean

	askAcceptE(msg: String, flip: boolean): boolean

	askAcceptE(msg: String, diffNpcID: int): boolean

	askAcceptENoEsc(msg: String): boolean

	askAcceptENoEsc(msg: String, flip: boolean): boolean

	askAcceptENoEsc(msg: String, diffNpcID: int): boolean

	askAcceptENoEsc(msg: String, diffNpcID: int, flip: boolean): boolean

	askAcceptN(msg: String, npcId: int, type: short): boolean

	askAngelicBuster(): int

	askAvatar(msg: String, styles: int[], cItemID: int, bAngelicBuster: boolean, bZeroBeta: boolean): [selection: number, usePoint: number]

	askGuildCreateAgree(name: String): Object

	askGuildName(): Object

	askMenuN(msg: String, npcId: int, type: short): int

	askMenu(msg: String): int

	askMenu(msg: String, bLeft: boolean): int

	askMenu(msg: String, diffNpcID: int): int

	askMenu(msg: String, diffNpcID: int, bLeft: boolean): int

	askMenuNoEsc(msg: String): int

	askMenuNoEsc(msg: String, bLeft: boolean): int

	askMenuNoEsc(msg: String, diffNpcID: int): int

	askMenuNoEsc(msg: String, diffNpcID: int, bLeft: boolean): int

	askMenuF(msg: String, diffNpcID: int): int

	askMenuFNoEsc(msg: String, diffNpcID: int): int

	askMenuS(msg: String): int

	askMenuS(msg: String, flip: boolean): int

	askMenuSNoEsc(msg: String): int

	askMenuSNoEsc(msg: String, flip: boolean): int

	askMenuE(msg: String): int

	askMenuE(msg: String, flip: boolean): int

	askMenuE(msg: String, diffNpcID: int): int

	askMenuENoEsc(msg: String): int

	askMenuENoEsc(msg: String, flip: boolean): int

	askMenuENoEsc(msg: String, diffNpcID: int): int

	askMenuA(msg: String): int

	askMenuA(msg: String, bPlayer: boolean): int

	askMenuA(msg: String, diffNpcID: int): int

	askMenuANoEsc(msg: String): int

	askMenuANoEsc(msg: String, bPlayer: boolean): int

	askMenuANoEsc(msg: String, diffNpcID: int): int

	askMenuZ(msg: String, npcId: int): int

	askNumber(msg: String, def: int, min: int, max: int): int

	askNumberNoEsc(msg: String, def: int, min: int, max: int): int

	askNumberS(msg: String, def: int, min: int, max: int): int

	askNumberSNoEsc(msg: String, def: int, min: int, max: int): int

	askNumberN(msg: String, def: int, min: int, max: int, overrideMode: short): int

	askPet(msg: String): long

	askPet(msg: String, pets: ItemSlotPet[]): long

	askText(msg: String, defText: String, nLenMin: short, nLenMax: short): String

	askTextNoEsc(msg: String, defText: String, nLenMin: short, nLenMax: short): String

	askTextS(msg: String, defText: String, nLenMin: short, nLenMax: short): String

	askTextSNoEsc(msg: String, defText: String, nLenMin: short, nLenMax: short): String

	askTextE(msg: String, defText: String, nLenMin: short, nLenMax: short): String

	askTextE(msg: String, defText: String, nLenMin: short, nLenMax: short, diffNpcID: int): String

	askTextN(msg: String, defText: String, nLenMin: short, nLenMax: short, overrideMode: short): String

	askTextE(msg: String, defText: String, nLenMin: short, nLenMax: short, flip: boolean): String

	askAntiMacroText(msg: String, defText: String, nLenMin: short, nLenMax: short, diffNpcID: int): boolean

	askAntiMacroText(msg: String, defText: String, nLenMin: short, nLenMax: short, diffNpcID: int, captchaText: String, width: int, height: int): String

	askSelectMenu(idd: int, value: int, arr: String[]): int

	askSelectMenu(idd: int, value: int, esc: boolean, index: int, arr: String[]): int

	askNumberKeypad(value: int): String

	askAndroid(message: String, styles: int[], itemId: int): [selection: number, usePoint: number]

	askMixHair(message: String, itemId: int): boolean

	showMixHairResult(itemId: int, flag: int, hair: int, secondHair: int): void

	sendShop(shopId: int): void

	sendStorage(npcId: int): boolean

	sendCustomShop(items: Item[]): void

	setCameraMove(bBack: boolean, nPixelPerSec: int, bSet: boolean, posX: int, posY: int): void

	setCameraZoom(b: boolean, nTime: int, nScale: int, nTimePos: int, posX: int, posY: int, n: int): void

	setDelay(delay: int): void

	setInputUI(nIdx: int): void

	setMonologue(text: String, bEnd: boolean): void

	setMonologueScroll(text: String, bEnd: boolean, nAlign: int, tTime: int, nDecTic: int): void

	setCameraReleaseByType(var1: int): void

	inGameDirection29(msg: String, var1: byte, var2: int, var3: int, var4: int, var5: int, var6: int, var7: String): void

	sayTextNext(var1: String, var2: int, var3: int, var4: int, var5: int, var6: int, var7: int, var8: int, var9: int, var10: int, var11: int, var12: String, var13: int): void

	playMovie(data: String, show: boolean): void

	httpGet(url: String): void

	httpPost(url: String, body: String): void

	setCameraGetX(): int

	setCameraGetY(): int

	setCameraGetScale(): int

	setCameraGetVRLeft(): int

	setCameraGetVRTop(): int

	setCameraGetVRRight(): int

	setCameraGetVRBottom(): int

	setCameraGetMinScale(): int

	setCameraFreeFromUser(): int

	setCameraStickToUser(): int

	setCameraGetLooseLevel(): int

	setCameraSetLooseLevel(puLevel: int): int

	setCameraAbsMove(type: byte, delay: int, x: int, y: int): int

	setCameraRelMove(type: byte, delay: int, x: int, y: int): int

	setCameraScale(type: byte, delay: int, x: int, y: int): int

	setCameraScaleEnd(type: byte, delay: int, y: int): int

	setCameraRelScale(type: byte, delay: int, y: int): int

	setCameraScaleAbsMove(type: byte, delay: int, startScale: int, endScale: int, x: int, y: int): int

	setCameraScaleRelMove(type: byte, delay: int, startScale: int, endScale: int, x: int, y: int): int

	setCameraReturnToUser(type: byte, delay: int): int

	setCameraOnCharacter(dwID: int): void

	setCameraReleaseFromUserPoint(): void

	setPatternInputRequest(data: String, nAct: int, nRequestCount: int, nTime: int): void

	setVansheeMode(bVanshee: boolean): void

	setForcedMove(nForcedMoveDir: int, nForcedMoveFixel: int): void

	setForcedInput(nForcedInput: int): void

	setForcedFlip(nForcedFlip: int): void

	setForcedAction(nAction: int, tDuration: int): void

	setFaceOff(nFaceItemID: int): void

	removeAdditionalEffect(): void

	broadcastGuildMessage(guildId: int, msg: String): void

	clearBackButton(): void

	endConversation(): void

	getAllEyeColors(): int[]

	getAllEyeStyles(): int[]

	getAllHairColors(): int[]

	getAllHairStyles(): int[]

	getAllAndroidHairColors(): int[]

	getAllAndroidEyeColors(): int[]

	getAllSkinColors(): int[]

	isFaceValid(face: int): boolean

	isFaceValid(face: int, gender: int): boolean

	isHairValid(hair: int): boolean

	isHairValid(hair: int, gender: int): boolean

	isValidFace(face: int): boolean

	isValidHair(hair: int): boolean

	isValidSkin(skin: int): boolean

	getFaceGender(face: int): int

	getHairGender(hair: int): int

	openTradeKingShop(): void

	getSlot(): int

	showGuildRanking(): void

	/**
	 * 全服广播道具属性信息
	 *
	 * @param msg
	 * @param item
	 */
	broadcastGachaponMsgEx(msg: String, item: Item): void

	/**
	 * 完成当前上下文所属任务
	 */
	completeQuest(): void

	/**
	 * 开始当前上下文所属任务
	 */
	startQuest(): void

	/**
	 * 开始当前上下文所属任务，并写入数据
	 *
	 * @param data
	 */
	startQuest(data: String): void

	/**
	 * 数据库插入操作
	 */
	customSqlInsert(sql: String, ...args: Object[]): long

	/**
	 * 数据库获取操作
	 */
	customSqlResult(sql: String, ...args: Object[]): Map<String, Object>[]

	/**
	 * 数据库更新操作
	 */
	customSqlUpdate(sql: String, ...args: Object[]): int

	transaction(consumer: Consumer<BaseDao>): void

}
declare interface ScriptParty {
	getId(): int

	/**
	 * 传送组队到指定地图
	 */
	changeMap(mapId: int): void

	/**
	 * 传送组队到指定地图的传送点
	 */
	changeMap(mapId: int, portal: int): void

	/**
	 * 传送组队到指定地图
	 */
	changeMap(field: ScriptField): void

	/**
	 * 传送组队到指定地图的传送点
	 */
	changeMap(field: ScriptField, portal: int): void

	/**
	 * 传送组队到指定地图的传送点
	 */
	changeMap(mapId: int, portal: String): void

	/**
	 * 给与组队经验
	 */
	gainExp(gain: int): void

	getLocalMembers(): ScriptPlayer[]

	getLeader(): int

	/**
	 * 获取当前组队的所有成员数
	 */
	getMembersCount(): int

	/**
	 * 获取符合条件的组队成员数
	 */
	getMembersCount(mapId: int, minLevel: short, maxLevel: short): int

	/**
	 * 判断所有成员是否超过最大允许事件记录
	 */
	isAllMembersAllowedPQ(pqLog: String, maxEnter: int): boolean

	/**
	 * 获取超过最大允许事件记录的队员实例
	 *
	 * @return
	 */
	getNotAllowedMember(pqLog: String, maxEnter: int): ScriptPartyMember

	/**
	 * 判断所有成员是否超过最大允许事件记录
	 */
	isAllMembersAllowedEvent(pqLog: String, maxEnter: int): boolean

	/**
	 * 获取超过最大允许事件记录的队员实例
	 *
	 * @return
	 */
	getEventNotAllowedMember(pqLog: String, maxEnter: int): ScriptPartyMember

	isAllMembersHasItem(itemId: int, quantity: int): boolean

	/**
	 * 移除组队成员对应所有道具
	 */
	loseItem(itemId: int): void

	loseItem(itemId: int, quantity: int): void

	/**
	 * 获取当前频道的组队成员数
	 */
	numberOfMembersInChannel(): int

	showGiantBossMiniMap(infos: String): void

	getNotHasItemMember(itemId: int, quantity: int): String

}
declare interface ScriptPartyMember extends ScriptPlayer {
}
declare interface ScriptPlayer extends AbstractScriptBinding {
	/**
	 * 断开客户端连接
	 */
	dissociateClient(): void

	/**
	 * 开启冒险岛联盟
	 */
	actionMapleUnion(): boolean

	/**
	 * 屏幕右下方 显示弹出Npc对话
	 */
	addPopupSay(npcId: int, duration: int, msg: String, sound: String): void

	/**
	 * 增加事件记录值
	 */
	addPQLog(key: String): void

	/**
	 * 增加事件记录值
	 */
	addPQLog(key: String, value: int, resetDays: int): void

	/**
	 * 取消道具Buff
	 */
	cancelItemEffect(itemId: int): void

	/**
	 * 取消技能Buff
	 */
	cancelSkillEffect(skillId: int): void

	/**
	 * 判断能否获取指定数量的道具
	 */
	canGainItem(itemId: int, quantity: int): boolean

	/**
	 * 判断能手册使用
	 */
	canUseSkillBook(skillId: int, masterLevel: int): boolean

	changeBGM(data: String): void

	/**
	 * 传送到指定地图
	 */
	changeMap(mapId: int): void

	/**
	 * 传送到指定地图的传送点
	 */
	changeMap(mapId: int, portal: int): void

	changeMap(mapId: int, gradient: boolean): void

	changeMap(map: ScriptField, gradient: boolean): void

	/**
	 * 传送到指定地图的传送点
	 */
	changeMap(mapId: int, portal: String): void

	/**
	 * 传送到指定地图实例
	 */
	changeMap(map: ScriptField): void

	changeMap(map: ScriptField, portal: int): void

	changeChannelAndMap(channel: int, mapId: int): void

	/**
	 * 检查点距离 距离100
	 */
	checkNearby(pos: Point): boolean

	checkNearby(pos: Point, distance: double): boolean

	/**
	 * 完成指定任务
	 */
	completeQuest(questId: int, npcId: int): void

	createAlliance(allianceName: String): boolean

	/**
	 * 创建家族
	 */
	createGuild(name: String): String

	/**
	 * 移除临时Npc
	 */
	destroyTempNpc(npcId: int): void

	disbandGuild(): void

	doMapleUnionLevelUp(): boolean

	/**
	 * 弹出窗口消息
	 */
	dropAlertNotice(message: String): void

	/**
	 * 显示消息
	 */
	dropMessage(type: int, message: String): void

	/**
	 * 进化宠物
	 */
	evolveBossPet(): boolean

	forfeitQuest(questId: int): void

	/**
	 * 给与AP点
	 */
	gainAp(gain: short): void

	/**
	 * 增加好友数量上限
	 */
	gainBuddySlots(gain: short): void

	/**
	 * 拓展特殊栏位
	 */
	gainCashInventorySlots(delta: short): void

	/**
	 * 给与宠物亲密度
	 */
	gainCloseness(gain: short): void

	/**
	 * 拓展装备栏位
	 */
	gainEquipInventorySlots(delta: short): void

	/**
	 * 拓展其他栏位
	 */
	gainEtcInventorySlots(delta: short): void

	/**
	 * 给与角色经验值
	 */
	gainExp(gain: long): void

	/**
	 * 给与角色经验值
	 *
	 * @param percent 当前经验百分比 1-100
	 */
	gainExpPercent(percent: double): void

	/**
	 * 给与玩家道具并全服广播
	 *
	 * @param from 物品来源
	 * @param itemId 物品ID
	 * @param quantity 物品数量
	 * @param rareness 稀有度(1绿2红3黄)
	 * @return 是否给与成功
	 */
	gainGachaponItem(from: String, itemId: int, quantity: short, rareness: int): boolean

	/**
	 * 给与指定数量的道具
	 * 成功返回true
	 * 否则返回false
	 *
	 * @param itemId
	 * @param quantity
	 * @return
	 */
	gainItem(itemId: int, quantity: int): boolean

	/**
	 * 给与指定数量的道具
	 * 成功返回true
	 * 否则返回false
	 *
	 * @param itemId
	 * @param quantity
	 * @param duration 道具的有效期。1000以下是天 1000以上是毫秒数
	 * @return
	 */
	gainItem(itemId: int, quantity: int, duration: int): boolean

	gainPetItem(itemId: int, day: int): void

	/**
	 * 给与道具
	 */
	gainItem(item: Item): boolean

	equip(slot: short, itemId: int): boolean

	/**
	 * 给与金币
	 */
	gainMeso(gain: long): void

	/**
	 * 给与金币
	 */
	gainMesos(gain: long): void

	/**
	 * 拓展设置栏位
	 */
	gainSetupInventorySlots(delta: short): void

	/**
	 * 给与指定职业的技能点
	 */
	gainSp(skillbook: int, gain: short): void

	/**
	 * 给与当前职业技能点
	 */
	gainSp(gain: short): void

	/**
	 * 拓展消耗栏位
	 */
	gainUseInventorySlots(delta: short): void

	/**
	 * 获取账号Id
	 */
	getAccountId(): int

	getAllianceCapacity(): int

	getAllianceId(): int

	getAllianceRank(): byte

	/**
	 * 获取物品数量，不包含穿戴中的道具
	 */
	getAmountOfItem(itemId: int): int

	/**
	 * 获取物品数量，可以包含穿戴中的道具
	 *
	 * @param itemId 道具ID
	 * @param checkEquipped 是否包含穿戴中的道具
	 */
	getAmountOfItem(itemId: int, checkEquipped: boolean): int

	/**
	 * 获取初始职业ID
	 */
	getBeginner(): int

	/**
	 * 获取好友数量上限
	 */
	getBuddyCapacity(): short

	/**
	 * 获取点券或抵用券
	 */
	getCashShopCurrency(type: int): int

	getChannel(): byte

	/**
	 * 获取基本敏捷属性（不包含技能、装备等附加属性值）
	 */
	getDex(): short

	/**
	 * 获取脸型
	 */
	getFace(): int

	/**
	 * 获取指定背包类型剩余空格
	 */
	getFreeSlots(type: byte): short

	/**
	 * 获取性别
	 */
	getGender(): byte

	/**
	 * 设置角色技能等级
	 */
	setSkillLevel(skill: int, level: int, masterLevel: int, onlyMasterLevel: boolean): void

	/**
	 * 设置发型
	 */
	setHair(hair: int): void

	/**
	 * 设置发型
	 *
	 * @param newHair 发型
	 * @param baseColor 底色
	 * @param mixedColor 混合色
	 * @param mixedPercent 混合比例
	 */
	setHair(newHair: int, baseColor: int, mixedColor: int, mixedPercent: int): void

	/**
	 * 设置脸型
	 */
	setFace(face: int): void

	/**
	 * 设置脸型
	 *
	 * @param newFace 脸型
	 * @param baseColor 底色
	 * @param mixedColor 混合色
	 * @param mixedPercent 混合比例
	 */
	setFace(newFace: int, baseColor: int, mixedColor: int, mixedPercent: int): void

	/**
	 * 设置肤色
	 */
	setSkin(newSkin: byte): void

	/**
	 * 设置第二发型（神之子/天使）
	 *
	 * @param newHair 发型
	 */
	setSubHair(newHair: int): void

	/**
	 * 设置第二发型（神之子/天使）
	 *
	 * @param newHair 发型
	 * @param baseColor 底色
	 * @param mixedColor 混合色
	 * @param mixedPercent 混合比例
	 */
	setSubHair(newHair: int, baseColor: int, mixedColor: int, mixedPercent: int): void

	/**
	 * 设置第二脸型（神之子/天使）
	 *
	 * @param newFace 脸型
	 */
	setSubFace(newFace: int): void

	/**
	 * 设置第二脸型（神之子/天使）
	 *
	 * @param newFace 脸型
	 * @param baseColor 底色
	 * @param mixedColor 混合色
	 * @param mixedPercent 混合比例
	 */
	setSubFace(newFace: int, baseColor: int, mixedColor: int, mixedPercent: int): void

	/**
	 * 设置第二肤色（神之子/天使）
	 *
	 * @param skin 肤色ID
	 */
	setSubSkin(skin: byte): void

	modifiedDressUp(): void

	/**
	 * 设置当前血量
	 */
	setHp(newHp: int): void

	/**
	 * 设置职业Id
	 */
	setJob(newJob: short): void

	getGuild(): ScriptGuild

	/**
	 * 家族Id
	 */
	getGuildId(): int

	/**
	 * 家族职位
	 */
	getGuildRank(): byte

	/**
	 * 给家族贡献
	 *
	 * @param point 点数
	 */
	gainGuildCommitment(point: int): void

	/**
	 * 获取发型
	 */
	getHair(): int

	/**
	 * 获取当前血量
	 */
	getHp(): int

	/**
	 * 获取角色Id
	 */
	getId(): int

	/**
	 * 获取基本智力属性（不包含技能、装备等附加属性值）
	 */
	getInt(): short

	/**
	 * 获取任务记录整数值
	 */
	getIntQuestRecordEx(quest: int, key: String): int

	/**
	 * 获取世界账号共享任务记录整数值
	 */
	getIntWorldShareRecord(quest: int, key: String): int

	/**
	 * 获取指定背包栏位的道具实例
	 *
	 * @param type -1=装备中 1=背包/装备 2=背包/消耗 3=背包/设置 4=背包/其他 5=背包/现金 6=背包/装扮 10 = 仓库
	 */
	getInventorySlot(type: byte, slot: short): Item

	/**
	 * 获取职业ID
	 */
	getJob(): short

	/**
	 * 获取角色等级
	 */
	getLevel(): int

	/**
	 * 获取基本运气属性（不包含技能、装备等附加属性值）
	 */
	getLuk(): short

	/**
	 * 检查疲劳度
	 */
	checkFatigue(): void

	/**
	 * 增减疲劳度
	 */
	modifyFatigue(value: short): void

	/**
	 * 检查匠人效果设置
	 */
	checkMakingSkillEff(): void

	/**
	 * 检查生活技能是否可以升级
	 */
	checkMakingSkillExpFull(craftId: int): boolean

	/**
	 * 增加生活技能经验值
	 */
	addMakingSkillExp(craftId: int, exp: int): void

	/**
	 * 获取生活技能经验
	 */
	getMakingSkillExp(id: int): int

	/**
	 * 获取生活技能等级
	 */
	getMakingSkillLevel(id: int): int

	getMapleUnionLevel(): int

	getMapleUnionNextLevel(): int

	/**
	 * 获取角色名
	 */
	getName(): String

	/**
	 * 获取当前在线时间
	 */
	getNowOnlineTime(): int

	/**
	 * 获取当日账号的总在线时间
	 */
	getOnlineTime(): int

	/**
	 * 获取召唤的宠物数量
	 */
	getPetCount(): int

	/**
	 * 获取事件记录值
	 */
	getPQLog(key: String): int

	/**
	 * 获取任务记录
	 */
	getQuestRecordEx(quest: int): String

	/**
	 * 获取任务记录
	 */
	getQuestRecordEx(quest: int, key: String): String

	/**
	 * 获取技能等级
	 */
	getSkillLevel(skillId: int): int

	/**
	 * 获取对应可提升最高的级的技能
	 */
	getSkillMenu(skillMaster: int): String

	/**
	 * 获取当前职业的技能点
	 */
	getSp(): int

	/**
	 * 获取基本力量属性（不包含技能、装备等附加属性值）
	 */
	getStr(): short

	/**
	 * 获取第二职业类型
	 */
	getSubJob(): short

	setSubJob(var1: short): void

	getWorld(): int

	/**
	 * 获取世界账号共享任务记录
	 */
	getWorldShareRecord(quest: int): String

	/**
	 * 获取世界账号共享任务记录
	 */
	getWorldShareRecord(quest: int, key: String): String

	hasItem(itemId: int): boolean

	/**
	 * 判断指定道具的数量
	 */
	hasItem(itemId: int, quantity: int): boolean

	hasEquipped(itemId: int): boolean

	/**
	 * 判断金币
	 */
	hasMeso(min: long): boolean

	/**
	 * 判断金币
	 */
	hasMesos(min: long): boolean

	increaseAllianceCapacity(): void

	/**
	 * 增加血量上限
	 */
	increaseMaxHp(delta: int): void

	/**
	 * 增加魔量上限
	 */
	increaseMaxMp(delta: int): void

	/**
	 * 判断是否为GM
	 */
	isGm(): boolean

	/**
	 * 判断任务是否启动
	 */
	isQuestActive(questId: int): boolean

	/**
	 * 判断任务是否完成
	 */
	isQuestCompleted(questId: int): boolean

	/**
	 * 判断任务是否开始
	 */
	isQuestStarted(questId: int): boolean

	/**
	 * 清除指定背包的指定栏位的物品
	 */
	loseInvSlot(type: byte, slot: short): boolean

	/**
	 * 移除指定的所有道具
	 */
	loseItem(itemId: int): void

	/**
	 * 移除指定数量的道具
	 */
	loseItem(itemId: int, quantity: int): boolean

	loseItem(itemId: int, slot: short, quantity: int): boolean

	/**
	 * 扣除金币
	 */
	loseMesos(quantity: long): void

	getMeso(): long

	getCash(): long

	getPoint(): long

	/**
	 * 加满当前职业Id的技能
	 */
	maxSkills(): void

	/**
	 * 修改点券等信息
	 */
	modifyCashShopCurrency(type: int, value: int): void

	modifyMoonlightValue(nMoonlightValue: int): void

	offSpineScreen(key: String, value: int): void

	offSpineScreen(key: String, value: int, n: int, s: String): void

	offStaticScreenMessage(): void

	/**
	 * 打开UI
	 */
	openUI(uiId: int): void

	openUIWithOption(uiId: int, option: int): void

	/**
	 * 打开网页
	 */
	openURL(sURL: String): void

	/**
	 * 打开网页UI
	 *
	 * @param url
	 */
	openWebUI(url: String): void

	/**
	 * 打开网页UI
	 */
	openWebUI(id: int, uiPath: String, url: String): void

	playAmbientSound(sSoundName: String, uVolumeRate: int, value: int): void

	playExclSoundWithDownBGM(data: String): void

	playSoundWithMuteBGM(data: String): void

	removeAdditionalEffect(): void

	/**
	 * 重置角色超级技能
	 */
	resetHyperSkill(): boolean

	/**
	 * 重置角色超级属性技能
	 */
	resetHyperStatSkill(): boolean

	/**
	 * 重置事件记录值
	 */
	resetPQLog(key: String): void

	/**
	 * 重置角色技能
	 */
	resetSkills(): void

	/**
	 * 重置四维属性，并分配指定数值
	 */
	resetStats(str: short, dex: short, _int: short, luk: short): void

	/**
	 * 重置角色V技能 解除所有装备的技能
	 */
	resetVSkills(): void

	/**
	 * 复活宠物
	 */
	revivePet(uniqueId: long): boolean

	/**
	 * 执行其他脚本（注意：使用前请确认下文已经没有其他执行代码）
	 */
	runScript(script: String): void

	runScript(script: String, npcId: int): void

	screenEffect(name: String): void

	/**
	 * 在游戏中间显示通知信息，显示道具图标
	 */
	scriptProgressItemMessage(itemId: int, msg: String): void

	/**
	 * 在游戏中间显示通知信息
	 */
	scriptProgressMessage(msg: String): void

	setAvatarLook(items: int[]): void

	/**
	 * 设置副本可死亡次数
	 */
	setDeathCount(nDeathCount: int): void

	setDirectionMod(bSet: boolean): void

	/**
	 * 设置事件实例
	 */
	setEvent(event: ScriptEvent): void

	setFaceOff(nFaceItemID: int): void

	setForcedAction(nAction: int, tDuration: int): void

	setForcedAction(nAction: int, tDuration: int, n1: int, n2: int): void

	setForcedFlip(nForcedFlip: int): void

	/**
	 * 剧情模式下 设置人物行动
	 */
	setForcedInput(nForcedInput: int): void

	/**
	 * 剧情模式下 设置人物行动
	 */
	setForcedMove(nForcedMoveDir: int, nForcedMoveFixel: int): void

	setGrayScale(type: int, bSet: boolean): void

	setInGameCurNodeEventEnd(bEnd: boolean): void

	setInGameDirectionMode(bSet: boolean, block: boolean, bForceMouseOver: boolean, bShowUI: boolean): void

	isInGameDirectionMode(): boolean

	setLayerBlind(pLayerBlind: boolean, binary: int, duration: int): void

	setLayerBlindWhite(layerBlind: boolean, binary: int, duration: int): void

	setLayerBlind(layerBlind: boolean, binary: int, var3: int, var4: int, var5: int, duration: int, var7: int): void

	setLayerMove(term: int, key: String, rx: int, ry: int): void

	setLayerOff(term: int, key: String): void

	setLayerOn(term: int, key: String, rx: int, ry: int, z: int, uol: String, location: int): void

	setLayerOn(term: int, key: String, rx: int, ry: int, z: int, uol: String, location: int, var7: boolean, var8: int, var9: boolean, var10: int, var11: int): void

	setMapTaggedObjectVisible(var1: String, var2: boolean, var3: int, var4: int): void

	setMapTaggedObjectAnimation(name: String, type: int): void

	setNpcForceFlip(npcId: int, nFlip: int): void

	/**
	 * 设置临时Npc 移动
	 */
	setNpcForceMove(npcId: int, nForceX: int, nMoveX: int, nSpeedRate: int): void

	/**
	 * 显示临时Npc 特殊效果
	 */
	setNpcSpecialAction(npcId: int, action: String, tDuration: int, bLocalAct: boolean): void

	/**
	 * 关闭临时Npc 特殊效果
	 */
	resetNpcSpecialAction(npcId: int): void

	setNpcFadeHide(npcId: int, var2: int, var3: int): void

	setNpcCharacterBaseAction(npcId: int, var2: String, var3: int, var4: boolean): void

	/**
	 * 设置单人模式
	 */
	setStandAloneMode(bAlone: boolean): void

	setStaticScreenMessage(idx: int, msg: String, removeText: boolean): void

	setUserEmotionLocal(type: int, tDuration: int): void

	setVansheeMode(bVanshee: boolean): void

	showAvatarOriented(msg: String): void

	showAvatarOrientedRepeat(show: boolean, msg: String, x: int, y: int): void

	offAvatarOrientedRepeat(): void

	showAvatarOrientedRepeat(var1: String, var2: int, var3: int): void

	showBlindEffect(blind: boolean): void

	showReservedEffectRepeat(data: String, b1: boolean, b2: boolean, b3: boolean, n1: int, n2: int): void

	/**
	 * 副本 显示死亡次数
	 */
	showDeathCount(): void

	/**
	 * 打开道场排行榜
	 */
	showDojangRank(): void

	showDojangRank(jobGroup: int): void

	/**
	 * 神之子武器成长
	 *
	 * @param stage 目标阶段
	 * @param resetOption 重置潜能 0: 不重置，1~4: B~SS
	 * @param resetBonusOption 重置附加潜能 0: 不重置，1~4: B~SS
	 */
	showZeroWeaponGrowthUI(stage: int, resetOption: int, resetBonusOption: int): void

	/**
	 * 显示采集效果
	 */
	showGatherResult(success: boolean): void

	showGiantBossPhase3Clock(total: int, remain: int): void

	/**
	 * 剧情模式下 显示 Npc Wz效果
	 */
	showNpcEffectPlay(customNpcEntityId: int, data: String, tDuration: int, nRx: int, nRy: int, bOverlay: boolean, pOverlay: int, bNotOrigin: boolean, x: int): void

	/**
	 * 剧情模式下 显示 Npc Wz效果
	 */
	showNpcEffectPlay(customNpcEntityId: int, data: String, tDuration: int, nRx: int, nRy: int, bOverlay: boolean, pOverlay: int, bNotOrigin: boolean, x: int, s: String): void

	/**
	 * 剧情模式下 显示 玩家 Wz效果
	 */
	showPlayerEffectPlay(data: String, tDuration: int, nRx: int, nRy: int, bOverlay: boolean, pOverlay: int): void

	/**
	 * 剧情模式下 显示 玩家 Wz效果
	 */
	showPlayerEffectPlay(data: String, tDuration: int, nRx: int, nRy: int, bOverlay: boolean, pOverlay: int, s: String): void

	/**
	 * 剧情模式下 显示 玩家 Wz效果
	 */
	showPlayerEffectPlay(data: String, tDuration: int, nRx: int, nRy: int, bOverlay: boolean, pOverlay: int, bNotOrigin: boolean, x: int): void

	/**
	 * 剧情模式下 显示 玩家 Wz效果
	 */
	showPlayerEffectPlay(data: String, tDuration: int, nRx: int, nRy: int, bOverlay: boolean, pOverlay: int, bNotOrigin: boolean, x: int, s: String): void

	changeGiantBossMapState(data: String, type: int): void

	/**
	 * 显示游戏中间的通知信息 可设置字体
	 */
	showProgressMessageFont(msg: String, fontNameType: int, fontSize: int, fontColorType: int, fadeOutDelay: int): void

	showReservedEffect(data: String): void

	showScreenAutoLetterBox(data: String, delay: int, n: int): void

	showScreenDelayedEffect(msg: String, delay: int): void

	showSpineScreen(var4: int, var5: String, var6: String, var7: String): void

	showSpineScreen(var1: boolean, var2: boolean, var3: boolean, var4: int, var5: String, var6: String, var7: String, var8: boolean, var9: int, var10: int, var11: String): void

	showSpineScreen(var1: boolean, var2: boolean, var3: boolean, var4: int, var5: String, var6: String, var7: String, var8: boolean, var9: int, var10: int, var11: int, var12: int, var13: String): void

	/**
	 * 显示系统通知（红色文字）
	 */
	showSystemMessage(msg: String): void

	/**
	 * 显示计时器
	 */
	showTimer(seconds: double): void

	closeTimer(): void

	showTopScreenEffect(data: String, value: int): void

	showTrembleEffect(bHeavyNShortTremble: boolean, tDelay: int, n: short): void

	/**
	 * 显示次元之门可传送列表
	 */
	showUnityPortal(): void

	showUOLEffect(data: String, reverse: boolean, time: int, mode: int): void

	showUOLEffect(data: String, time: int): void

	showWeatherEffectNotice(msg: String, nType: int, tDuration: int): void

	soundEffect(name: String): void

	soundEffect(name: String, value: int): void

	soundEffect(name: String, value: int, n1: int, n2: int): void

	/**
	 * 召唤临时Npc 只对当前角色可见，不写入地图实例，切换地图消失
	 */
	spawnTempNpc(npcId: int, x: int, y: int): int

	spawnTempNpc(npcId: int, x: int, y: int, stance: int): int

	/**
	 * 开始指定任务
	 */
	startQuest(questId: int, npcId: int): void

	/**
	 * 开始指定任务并写入数据
	 */
	startQuest(questId: int, npcId: int, data: String): void

	stopAmbientSound(sSoundName: String, value: int): void

	teleportToPortalId(portalID: int): void

	teleportToPortalId(nUserCallingType: int, portalID: int): void

	teleportToPos(nUserCallingType: int, dwCallerID: int, x: int, y: int): void

	teleportToPos(nUserCallingType: int, dwCallerID: int, pos: Point): void

	/**
	 * 更新设置伤害皮肤
	 */
	updateDamageSkin(dSkinId: int): void

	/**
	 * 更新道具 （请注意，一定要是原先获取道具的 slot！！）
	 */
	updateItem(slot: short, item: Item): void

	/**
	 * 更新道具 （此道具一定不能更换位置，更换位置请使用带slot的函数）
	 */
	updateItem(item: Item): void

	/**
	 * 更新任务记录
	 */
	updateQuestRecordEx(questid: int, data: String): void

	/**
	 * 更新任务记录
	 */
	updateQuestRecordEx(questid: int, key: String, value: String): void

	/**
	 * 更新世界账号共享任务记录
	 */
	updateWorldShareRecord(questid: int, data: String): void

	/**
	 * 更新世界账号共享任务记录
	 */
	updateWorldShareRecord(questid: int, key: String, value: String): void

	/**
	 * 给与道具Buff
	 *
	 * @param itemId 道具ID
	 */
	useItemEffect(itemId: int): void

	/**
	 * 给与道具Buff
	 *
	 * @param itemId 道具ID
	 * @param duration 持续时间（单位：毫秒）
	 */
	useItemEffect(itemId: int, duration: int): void

	/**
	 * 使用能手册
	 */
	useSkillBook(successRate: int, skillId: int, masterLevel: int): void

	/**
	 * 给与技能Buff
	 */
	useSkillEffect(skillId: int, level: int): void

	useSkillEffect(skillId: int, level: int, duration: int): void

	useMobSkillEffect(skillId: int, level: int): void

	useMobSkillEffect(skillId: int, level: int, duration: int): void

	hasEffect(sourceId: int): boolean

	openPachinko(b: boolean): void

	getPosition(): Point

	setActionBar(id: int): void

	updateActionBar(op: int, type: int, itemId: int, count: int): void

	/**
	 * 账号共享记录值增加1
	 * 一天后重置
	 *
	 * @param event 记录名
	 */
	addEventValue(event: String): void

	/**
	 * 账号共享记录值增加指定数量
	 * 一天后重置
	 *
	 * @param event 记录名
	 * @param value 增加数量
	 */
	addEventValue(event: String, value: int): void

	/**
	 * 账号共享记录值增加指定数量
	 * 永不重置
	 *
	 * @param event 记录名
	 * @param value 增加数量
	 */
	addPermanentEventValue(event: String, value: int): void

	/**
	 * 账号共享记录值增加指定数量
	 * 在设定的天数后重置
	 *
	 * @param event 记录名
	 * @param value 增加数量
	 * @param resetDays 重置天数，-1为永久
	 */
	addEventValue(event: String, value: int, resetDays: int): void

	/**
	 * 删除指定的账号共享记录
	 *
	 * @param event 记录名
	 */
	resetEventValue(event: String): void

	/**
	 * 获取指定的账号共享记录
	 *
	 * @param event 记录名
	 * @return
	 */
	getEventValue(event: String): int

	/**
	 * 给予声望点数
	 *
	 * @param val
	 */
	modifyHonor(val: int): void

	/**
	 * 获取角色账号名
	 */
	getAccountName(): String

	/**
	 * 获取当前地图ID
	 */
	getMapId(): int

	sitOnDummyChair(var1: int, var2: int): void

	/**
	 * 给随机五转核心
	 *
	 * @param type
	 */
	gainRandVSkill(type: int): boolean

	gainVCore(vcoreId: int): boolean

	gainV4Core(): boolean

	runNpc(npcScriptName: String): void

	runNpc(npcId: int): void

	toString(): String

	showSpeechBalloon(bShoutStyle: boolean, chatBoxBg: int, chatBoxType: int, msg: String, duration: int, npcId: int, playerId: int): void

	showSpeechBalloon(bShoutStyle: boolean, chatBoxBg: int, chatBoxType: int, msg: String, duration: int, var6: int, var7: int, npcId: int, var9: int, playerId: int): void

	createMyHome(): void

	getMyHomeType(): int

	addHomeDrawing(var1: int[]): void

	goMyHome(): void

	showSpecialUI(var1: int, var2: String): void

	/**
	 * 获取角色当前event实例
	 * 角色不在event中时返回null
	 */
	getEvent(): ScriptEvent

	startAutoAttack(time: int): boolean

	startAutoAttack(time: int, damRate: double): boolean

	showLobbyTimer(var1: int, var2: int, var3: int, var4: int): void

	showAchieveRate(var1: int): void

	setAchieveRate(var1: int): void

	setNpcActionLayerRelmove(var1: int, var2: int, var3: int, var4: int): void

	zeroTag(beta: boolean): void

	setPartner(var1: boolean, var2: int, var3: int, var4: boolean): void

	setKeyValue(key: String, value: String): void

	getKeyValue(key: String): String

	getIntKeyValue(key: String): int

	addTrait(type: String, value: int): void

	startNavigation(var1: int, var2: int, var3: String, var4: int): void

	createMGGun(): void

	clearMGGun(): void

	setMGGun(var1: String, var2: String, var3: int, var4: int): void

	setMGAmmo(var1: int): void

	/**
	 * 完成所有怪物收藏
	 */
	completeMobCollection(): void

	/**
	 * 完成指定怪物收藏
	 *
	 * @param mobId
	 */
	registerMobCollection(mobId: int): void

	/**
	 * 检查指定怪物收藏是否完成
	 *
	 * @param n 怪物ID
	 * @return 是否完成
	 */
	checkMobCollection(n: int): boolean

	checkMobComplete(s: String): boolean

	/**
	 * 完成类型下随机怪物收藏
	 *
	 * @param n
	 */
	handleRandCollection(n: int): void

	registerMobCollectionQuest(): boolean

	initTradeKingShop(): void

	closeUI(uiId: int): void

	showPlatformerTimer(var1: int, var2: int, var3: int, var4: int): void

	/**
	 * 获取任务的customData
	 *
	 * @param questId 任务ID
	 * @return customData
	 */
	getQuestEntryData(questId: int): String

	/**
	 * 设置任务的customData
	 *
	 * @param questId 任务ID
	 * @param data customData
	 */
	setQuestData(questId: int, data: String): void

	hasAndroid(): boolean

	getAndroidGender(): int

	/**
	 * 获取机器人脸型
	 */
	getAndroidFace(): int

	/**
	 * 获取机器人发型
	 */
	getAndroidHair(): int

	/**
	 * 获取机器人肤色
	 */
	getAndroidSkin(): int

	/**
	 * 设置机器人发型
	 */
	setAndroidHair(hair: int): void

	/**
	 * 设置机器人发型
	 *
	 * @param hair 发型
	 * @param baseColor 底色
	 * @param mixedColor 混合色
	 * @param mixedPercent 混合比例
	 */
	setAndroidHair(hair: int, baseColor: int, mixedColor: int, mixedPercent: int): void

	/**
	 * 设置机器人脸型
	 */
	setAndroidFace(face: int): void

	/**
	 * 设置机器人脸型
	 *
	 * @param face 脸型
	 * @param baseColor 底色
	 * @param mixedColor 混合色
	 * @param mixedPercent 混合比例
	 */
	setAndroidFace(face: int, baseColor: int, mixedColor: int, mixedPercent: int): void

	setAndroidSkin(skin: byte): void

	updateTowerRank(stage: int, time: int): void

	getSessionValue(key: String): Object

	setSessionValue(var1: String, var2: String): void

	showTextEffect(var1: String, var2: int, var3: int): void

	showTextEffect(var1: String, var2: int, var3: int, var4: int, var5: int, var6: int, var7: int, var8: int, var9: int): void

	showTextEffect(var1: String, var2: int, var3: int, var4: int, var5: int, var6: int, var7: int, var8: int, var9: int, var10: int, var11: int, var12: String, var13: int): void

	showTextEffect(var1: String, var2: int, var3: int, var4: int, var5: int, var6: int, var7: int, var8: int, var9: int, var10: int, var11: int, var12: String, var13: int, var14: boolean): void

	removeAdditionalEffectEx(): void

	getJobCategory(): int

	setNpcViewOrHide(id: int, b1: boolean, b2: boolean): void

	/**
	 * 复原灵魂武器。
	 *
	 * @return int 没有武器(-1),不是灵魂武器(0),成功(1)
	 */
	removeWeaponSoul(): int

	/**
	 * 取消玩家的全部BUFF
	 */
	removeBuffs(): void

	updateSailBoatInfo(): void

	startSailEventTimer(): void

	getMaxHp(): int

	getMaxMp(): int

	/**
	 * 升级所需经验值
	 */
	getExpNeededForLevel(): long

	/**
	 * 角色的等级上限，默认为配置文件里配置。
	 * 可通过setIntKeyValue("MAX_LEVEL", level)设置单个角色的上限。
	 */
	getMaxLevel(): int

	setCustomBuffLevel(level: int): void

	setCustomBuffLevel(buffName: String, level: int): void

	getCustomBuffLevel(): int

	getCustomBuffLevel(buffName: String): int

	gainParcel(itemId: int, quantity: int, message: String): void

	gainParcel(itemId: int, quantity: int, duration: int, message: String): void

	gainParcel(item: Item, message: String): void

	setOverlap(duration: int): void

	setOverlapDetail(var1: int, var2: int, var3: int, var4: boolean): void

	removeOverlapDetail(var1: int): void

	setFieldFloating(var1: int, var2: int, var3: int): void

	setFieldFloating(var1: int, var2: int, var3: int, var4: boolean, var5: int): void

	showFloatingUI(var1: String, var2: int, var3: boolean): void

	changeFieldObjectColor(var1: int, var2: int, var3: int, var4: int, var5: int, var6: boolean, var7: int): void

	showBalloonMsg(msg: String, width: int, timeout: int, point: Point): void

	setBgmVolumeOnly(b: boolean): void

	setBgmVolume(n1: int, n2: int): void

	fieldEffect10(n: int): void

	fieldEffect11(n: int): void

	fieldEffect12(): void

	fieldEffect35_0(s: String, n1: int, n2: int, n3: int, n4: int, s2: String, n5: int, b: boolean, n6: int, b2: boolean, n7: int): void

	fieldEffect35_1(s: String, n: int): void

	fieldEffect35_2(s: String, n1: int, n2: int, n3: int, n4: int): void

	fieldEffect38(s1: String, link: String, b: boolean, n1: int, n2: int, n3: int, n4: int, n5: int, s2: String, b2: boolean, n6: int, n7: int): void

	fieldEffect39(s: String, n: int): void

	fieldEffect40(s1: String, link: String, b1: boolean, n1: int, n2: int, n3: int, n4: int, b2: boolean, b3: boolean, s2: String, b4: boolean, n5: int, b5: boolean, s3: String, b6: boolean, n6: int, n7: int, n8: int): void

	fieldEffect41(s: String, type: int, n: int, s2: String): void

	showStageClear(n: int): void

	inGameDirection5(var0: int, var1: int, var2: int, var3: int, var4: int, var5: int): void

	inGameDirection11(var0: int, var1: int, var2: int): void

	inGameDirection20(b: byte): void

	inGameDirection21(): void

	inGameDirection22(var0: int): void

	inGameDirection23(var0: String): void

	inGameDirection24(var0: String, var1: int, var2: int): void

	/**
	 * 开启斗燃
	 *
	 * @param type 种类 1=普通斗燃 2=极限斗燃
	 * @param endLevel 斗燃结束等级
	 * @param days 斗燃持续时间（天）
	 */
	startBurn(type: int, endLevel: int, days: int): void

	/**
	 * 同步神之子武器属性
	 *
	 * @param src 从哪把武器进行同步
	 */
	synchronizeZeroWeapon(src: Equip): void

	/**
	 * 获取结婚对象角色ID,为0未结婚
	 *
	 * @return
	 */
	getMarriageId(): int

	/**
	 * 设置结婚对象角色ID,设置0为离婚
	 *
	 * @param playerId
	 */
	setMarriageId(playerId: int): void

	/**
	 * 制作一对戒指(结婚戒指,情侣戒指,挚友戒指)
	 *
	 * @param itemId 戒指ID
	 * @param partner 对方的角色对象
	 * @return 戒指数组, 0为制作者的戒指, 1为对方的戒指
	 */
	makeRingWithId(itemId: int, partner: ScriptPlayer): Item[]

	/**
	 * 灵魂拯救者计数器刷新
	 *
	 * @param count 拯救数量
	 */
	updateSpiritSaviorSavedCounter(count: int): void

	getDressingRoomSlot(type: int): int

	setDressingRoomSlot(type: int, value: int): void

	/**
	 * 增加仓库栏位
	 *
	 * @param gain 增加栏位数量
	 * @return 是否增加成功(失败为栏位已满)
	 */
	increaseTrunkCapacity(gain: int): boolean

	/**
	 * 进入商城
	 */
	enterCS(): void

	showAchievementCompleteMessage(aid: Integer[]): void

	/**
	 * 扩展伤害皮肤栏位
	 *
	 * @param amount 扩展数量
	 * @return true=成功 false=失败
	 */
	increaseDamageSkinCapacity(amount: int): boolean

	updateSystemUISkin(): void

	/**
	 * 扩展吊坠栏
	 *
	 * @param days 天数，0为永久,-1为关闭
	 */
	enableEquipSlotExt(days: int): void

	/**
	 * 贝勒德副本 更新地图状态
	 */
	showGiantBossMiniMap(infos: String): void

	/**
	 * 设置分身伤害倍数
	 *
	 * @param count 分身伤害倍数 0=关闭
	 */
	setCloneCount(count: double): void

	/**
	 * 对玩家运行测谎仪
	 *
	 * @param type 测谎仪样式2~7
	 */
	runAntiMacro(type: int): boolean

	/**
	 * 安哈林防御副本 更新进度
	 */
	updateEnheimValue(state: int, kill: int, energy: int): void

	/**
	 * 设置角色人气值
	 */
	setFame(fame: int): void

	/**
	 * 获取角色人气值
	 */
	getFame(): int

	/**
	 * 给予单个表情
	 *
	 * @param eid 表情id
	 * @return true=成功 false=失败
	 */
	gainChatEmoticon(eid: int): boolean

	/**
	 * 给予一组表情
	 *
	 * @param groupId 表情组id
	 * @return true=成功 false=失败
	 */
	gainChatEmoticonGroup(groupId: int): boolean

	/**
	 * 增加聊天表情栏位数量
	 *
	 * @param slot
	 * @return true=成功 false=超过上限
	 */
	gainChatEmoticonSlots(slot: short): boolean

	updateFamiliars(): void

	getFamiliars(): FamiliarInfo[]

}
declare interface ScriptPortal {
	getId(): int

	getName(): String

	getPosition(): Point

}
declare interface ScriptPortalAPI extends PlayerScriptInteraction {
	getName(): String

	/**
	 * 终止传送（如果传送口不执行传送，需要在脚本中调用这个方法）
	 */
	abortWarp(): void

	/**
	 * 传送口已关闭
	 */
	block(): void

	getId(): int

	/**
	 * 播放传送口音效
	 */
	playPortalSE(): void

	/**
	 * 返回传送口是否传送成功
	 *
	 * @return
	 */
	warped(): boolean

	rememberMap(variable: String): void

	getPosition(): Point

}
declare interface ScriptReactor extends PlayerScriptInteraction {
	getName(): String

	/**
	 * 获取reactor wzId
	 *
	 * @return
	 */
	getDataId(): int

	dropItemsOld(...arr: int[]): void

	/**
	 * 掉落金币/物品
	 *
	 * @param minMeso 金币最小值
	 * @param maxMeso 金币最大值
	 * @param mesoChance 金币概率 1000000=100%
	 * @param itemDrops 数组，[itemId,
	 *                   itemChance,
	 *                   itemCountMin(optional,default=1),
	 *                   itemCountMax(optional,default=itemCountMin),
	 *                   quest(optional,default=-1)]
	 */
	dropItems(minMeso: int, maxMeso: int, mesoChance: int, itemDrops: int[][]): void

	/**
	 * 根据数据库掉落数据掉落物品
	 * 受服务器爆率影响
	 *
	 * @param dropperId 对应数据库zdata_drop表中dropperid
	 */
	dropItemsById(dropperId: int): void

	gatherDone(): void

	getPosition(): Point

}
declare interface ScriptServer extends AbstractScriptBinding {
	startTimer(key: String, millisDelay: int): void

	stopTimer(key: String): void

	stopTimers(): void

	/**
	 * 获取某频道的地图实例
	 *
	 * @param channel 频道ID
	 * @param mapId 地图ID
	 * @return 地图实例
	 */
	getMap(channel: int, mapId: int): ScriptField

	getChannelPlayers(channel: int): ScriptPlayer[]

	runScript(player: ScriptPlayer, scriptName: String): void

	runScript(player: ScriptPlayer, scriptName: String, npcId: int): void

	/**
	 * 设置频道倍率
	 *
	 * @param channel 频道
	 * @param type 类型，0经验，1掉落，2金币
	 * @param rate 倍数
	 * @throws Exception 未知类型
	 */
	setRate(channel: int, type: int, rate: int): void

	/**
	 * 获取指定频道的具名event实例
	 *
	 * @param channel 频道
	 * @param name event名称
	 * @return
	 */
	getEvent(channel: int, name: String): ScriptEvent

	/**
	 * 创建副本实例
	 *
	 * @param script
	 * @param onlyOne
	 * @param attachment
	 * @return
	 */
	makeEvent(channel: int, script: String, onlyOne: boolean, attachment: Object): Object

	/**
	 * 根据id查找角色。角色不在线返回null
	 *
	 * @param id
	 * @return 角色实例 角色不在线返回null
	 */
	getPlayer(id: int): ScriptPlayer

	/**
	 * 根据id查找家族。
	 *
	 * @param guildId
	 * @return 角色实例 角色不在线返回null
	 */
	getGuild(guildId: int): ScriptGuild

	/**
	 * 获取全部家族
	 *
	 * @return
	 */
	getGuilds(): ScriptGuild[]

	destroy(): void

}
declare interface Item {
	copy(): Item

	getItemType(): ItemType

	isEquip(): boolean

	isPet(): boolean

	isFamiliarCard(): boolean

	isPotionPot(): boolean

	asEquip(): Equip

	asPet(): ItemSlotPet

	asFamiliarCard(): ItemSlotFamiliarCard

	asPotionPot(): ItemSlotPotionPot

	getItemId(): int

	setItemId(id: int): void

	getInvSlot(): short

	setInvSlot(invSlot: short): void

	getAttribute(): int

	setAttribute(attribute: int): void

	removeFlag(flag: int): void

	addFlag(flag: int): void

	setQuantity(quantity: short): void

	getQuantity(): short

	isStackable(): boolean

	getTitle(): String

	setTitle(title: String): void

	getDateExpire(): long

	/**
	 * 过期时间戳 -1=max -2=min
	 */
	getExpiration(): long

	setExpiration(expire: long): void

	getSN(): long

	setSN(sn: long): void

	getInventoryId(): long

	setInventoryId(ui: long): void

	getBagIndex(): int

	setBagIndex(bagIndex: int): void

	getGenerateLog(): String

	setGenerateLog(itemLog: String): void

	isTradeAvailable(): boolean

	isPositionLock(): boolean

	setPositionLock(lock: boolean): void

	isTradeBlock(): boolean

	setTradeBlock(tradeBlock: boolean): void

	isTradeOnce(): boolean

	setTradeOnce(tradeOnce: boolean): void

	isAccountSharable(): boolean

	setAccountSharable(accountSharable: boolean): void

	setSealed(sealed: boolean): void

	isSealed(): boolean

	getData(): ItemData

	compareTo(other: Item): int

	toString(): String

	getItemName(): String

	getDataId(): int

	getFtExpire(): FileTime

	getParentId(): long

	setParentId(parentId: long): void

	getOnlyId(): String

}
declare interface Equip extends Item {
	copy(): Equip

	copy(copySn: boolean): Equip

	inherit(src: Equip, dec: Equip): Item

	/**
	 * 使用还原卷轴将装备还原为初始属性
	 * 灵魂宝珠、潜能、涅槃火焰、道具状态 不会被还原
	 * 白金锤次数不会被还原
	 * Ark还原卷轴会保留星之力
	 *
	 * @param resetHyperUpgrade 是否还原星之力
	 */
	reset(resetHyperUpgrade: boolean): void

	getType(): byte

	copyOption(equip: Equip): Equip

	getTotalRUC(): byte

	getRemainUpgradeCount(): byte

	/**
	 * 获得剩余升级次数
	 */
	getRUC(): byte

	/**
	 * 设置剩余升级次数
	 *
	 * @param val
	 */
	setRUC(val: byte): void

	/**
	 * 获得当前升级次数
	 */
	getCUC(): byte

	/**
	 * 设置当前升级次数
	 *
	 * @param val
	 */
	setCUC(val: byte): void

	setRemainUpgradeCount(remainUpgradeCount: byte): void

	addUpgradeCount(val: int): void

	setEcuc(val: byte): void

	getEcuc(): byte

	getTotalStr(): short

	getStr(): short

	setStr(str: short): void

	getTotalDex(): short

	getDex(): short

	setDex(dex: short): void

	getTotalInt(): short

	getInt(): short

	setInt(_int: short): void

	getTotalLuk(): short

	getLuk(): short

	setLuk(luk: short): void

	getTotalMaxHP(): short

	getMaxHp(): short

	setMaxHp(maxHp: short): void

	getTotalMaxMP(): short

	getMaxMp(): short

	setMaxMp(maxMp: short): void

	getTotalPAD(): short

	getPad(): short

	setPad(pad: short): void

	getTotalMAD(): short

	getMad(): short

	setMad(mad: short): void

	getTotalPDD(): short

	getPdd(): short

	setPdd(pdd: short): void

	getTotalCraft(): short

	getCraft(): short

	setCraft(craft: short): void

	getTotalSpeed(): short

	getSpeed(): short

	setSpeed(speed: short): void

	getTotalJump(): short

	getJump(): short

	setJump(jump: short): void

	getCurrentUpgradeCount(): byte

	setCurrentUpgradeCount(currentUpgradeCount: byte): void

	getViciousHammer(): short

	setViciousHammer(ham: short): void

	getItemEXP(): long

	setItemEXP(itemEXP: long): void

	getEquipExp(): long

	getEquipExpForLevel(): long

	getExpPercentage(): long

	getEquipLevel(): int

	getBaseLevel(): int

	getDurability(): int

	setDurability(dur: int): void

	getCurrentHyperUpgradeCount(): int

	setCurrentHyperUpgradeCount(chuc: int): void

	/**
	 * 获取星之力强化次数
	 *
	 * @return
	 */
	getCHUC(): int

	setCHUC(val: int): void

	getOption(pos: int, bonus: boolean): int

	setOption(pos: int, option: int, bonus: boolean): void

	getOption1(): int

	setOption1(en: int): void

	getOption2(): int

	setOption2(en: int): void

	getOption3(): int

	setOption3(en: int): void

	getOption4(): int

	setOption4(en: int): void

	getOption5(): int

	setOption5(en: int): void

	getOption6(): int

	setOption6(en: int): void

	/**
	 * 重新计算ARC/AUT道具属性
	 *
	 * @param job 职业
	 */
	recalculateByJob(job: int): void

	getLevelUpType(): int

	setLevelUpType(inc: int): void

	getCharmEXP(): short

	setCharmEXP(s: short): void

	getPVPDamage(): short

	setPVPDamage(p: short): void

	getSocketState(): short

	getSocket(idx: int): int

	setSocket(idx: int, val: int): void

	getSocket1(): int

	setSocket1(socket: int): void

	getSocket2(): int

	setSocket2(socket: int): void

	getSocket3(): int

	setSocket3(socket: int): void

	getItemSkin(): int

	setItemSkin(id: int): void

	getSpecialAttribute(): short

	setSpecialAttribute(specialAttribute: short): void

	getReqLevel(): short

	getGrowthEnchant(): short

	setGrowthEnchant(growthEnchant: short): void

	getPsEnchant(): byte

	setPsEnchant(psEnchant: byte): void

	getTotalBossDamageR(): short

	getBossDamageR(): short

	setBossDamageR(bossDamageR: short): void

	getTotalIgnorePDR(): short

	getIgnorePDR(): short

	setIgnorePDR(ignorePDR: short): void

	getTotalDamR(): short

	getDamR(): short

	setDamR(damR: short): void

	getTotalStatR(): short

	getStatR(): short

	setStatR(statR: short): void

	getCuttable(): byte

	setCuttable(cuttable: byte): void

	getLimitBreak(): long

	setLimitBreak(lb: long): void

	getLimitBreakEx(): long

	setLimitBreakEx(lb: long): void

	getTotalLimitBreak(): long

	getLevel(): byte

	setLevel(level: byte): void

	gainSealedExp(gain: long): void

	getExp(): long

	setExp(exp: long): void

	getSoulId(): short

	setSoulId(soulId: short): void

	getSoulSocketState(): short

	setSoulSocketState(soulSocketState: short): void

	getSoulOption(): short

	setSoulOption(soulOption: short): void

	getSoulSkill(): int

	getIncReq(): int

	setIncReq(incReq: int): void

	updateHyperUpgrade(): void

	getMadH(): int

	getPadH(): int

	updateBlueUpgrade(): void

	getExGradeOption(): long

	setExGradeOption(flag: long): void

	clearEx(): void

	updateEx(): void

	updateCustomStats(): void

	getArc(): short

	setArc(arc: short): void

	getArcExp(): int

	setArcExp(arcExp: int): void

	getArcLevel(): short

	setArcLevel(arcLevel: short): void

	getAut(): short

	setAut(aut: short): void

	getAutExp(): int

	setAutExp(autExp: int): void

	getAutLevel(): short

	setAutLevel(autLevel: short): void

	getGrade(): byte

	setGrade(grade: byte): void

	getItemType(): ItemType

	getPrevBonusExpRate(): int

	setPrevBonusExpRate(prevBonusExpRate: int): void

	getFtEquipped(): FileTime

	setFtEquipped(ftEquipped: FileTime): void

	getMixColor(): int

	setMixColor(mixColor: int): void

	getAnOption(index: int): int

	setAnOption(index: int, value: int): void

	getFtExpireDate(): FileTime

	setFtExpireDate(ftExpireDate: FileTime): void

	getCSGrade(): int

	setCSGrade(csGrade: int): void

	getItemState(): int

	setItemState(itemState: int): void

	getDurabilityMax(): int

	setDurabilityMax(durabilityMax: int): void

	getReduceReq(): int

	setReduceReq(reduceReq: int): void

	/**
	 * 获取黄金锤提炼次数
	 *
	 * @return
	 */
	getIUC(): int

	/**
	 * 设置黄金锤提炼次数
	 *
	 * @param value
	 */
	setIUC(value: int): void

	/**
	 * 获取白金锤提炼次数
	 *
	 * @return
	 */
	getIUC2(): short

	/**
	 * 设置白金锤提炼次数
	 *
	 * @param iuc2
	 */
	setIUC2(iuc2: short): void

	getTotalIUC(): int

	setIncSkill(incSkill: int): void

	getIncSkill(): int

	getRank(bonus: boolean): int

	getLevelExp(): long

	getCurrentBlueUpgradeCount(): int

	setCurrentBlueUpgradeCount(currentBlueUpgradeCount: int): void

	getCBUC(): int

	setCBUC(value: int): void

	getStrH(): int

	getDexH(): int

	getIntH(): int

	getLukH(): int

	getPddH(): int

	getHpH(): int

	getMpH(): int

	getJumpH(): int

	getSpeedH(): int

	getStrB(): int

	getDexB(): int

	getIntB(): int

	getLukB(): int

	getPadB(): int

	getMadB(): int

	getPddB(): int

	getHpB(): int

	getMpB(): int

	getStrEx(): int

	getDexEx(): int

	getIntEx(): int

	getLukEx(): int

	getHpEx(): int

	getMpEx(): int

	getPadEx(): int

	getMadEx(): int

	getPddEx(): int

	getCraftEx(): int

	getSpeedEx(): int

	getJumpEx(): int

	getBossDamageREx(): int

	getIgnorePDREx(): int

	getDamREx(): int

	getStatREx(): int

	getStrF(): int

	getDexF(): int

	getIntF(): int

	getLukF(): int

	getHpF(): int

	getMpF(): int

	getPadF(): int

	getMadF(): int

	getPddF(): int

	getBossDamageRF(): int

	getIgnorePDRF(): int

	getDamRF(): int

	getStatRF(): int

	getStrE(): int

	getDexE(): int

	getIntE(): int

	getLukE(): int

	getHpE(): int

	getMpE(): int

	getPadE(): int

	getMadE(): int

	getPddE(): int

	setStrE(strE: int): void

	setDexE(dexE: int): void

	setIntE(intE: int): void

	setLukE(lukE: int): void

	setHpE(hpE: int): void

	setMpE(mpE: int): void

	setPadE(padE: int): void

	setMadE(madE: int): void

	setPddE(pddE: int): void

	getSumStr(): short

	getSumDex(): short

	getSumInt(): short

	getSumLuk(): short

	getSumMaxHP(): short

	getSumMaxMP(): short

	getSumPAD(): short

	getSumMAD(): short

	getSumPDD(): short

	getCustomData(): String

	setCustomData(customData: String): void

	getCustomData(key: String): String

	getLongCustomData(key: String): long

	getIntCustomData(key: String): int

	setCustomData(key: String, value: long): void

	setCustomData(key: String, value: String): void

	addCustomData(key: String, diff: int): void

	setMarkState(state: boolean): void

	isMarkState(): boolean

	setItemState(state: EquipItemState, add: boolean): void

	hasItemState(state: EquipItemState): boolean

	isBlueUpgrade(): boolean

	isPositionLock(): boolean

	setPositionLock(lock: boolean): void

	isTradeBlock(): boolean

	setTradeBlock(tradeBlock: boolean): void

	isTradeOnce(): boolean

	setTradeOnce(tradeOnce: boolean): void

	isAccountSharable(): boolean

	setAccountSharable(accountSharable: boolean): void

	setSealed(sealed: boolean): void

	isSealed(): boolean

	compareTo(other: Item): int

}
declare interface ItemSlotFamiliarCard {
	copy(): ItemSlotFamiliarCard

	getItemType(): ItemType

	getFamiliarInfo(): FamiliarInfo

	setFamiliarInfo(familiarInfo: FamiliarInfo): void

}
declare interface ItemSlotPotionPot {
	getItemType(): ItemType

	getCurrentHp(): int

	getCurrentMp(): int

	getCapacity(): int

	setCurrentHp(currentHp: int): void

	setCurrentMp(currentMp: int): void

	setCapacity(capacity: int): void

	addHp(value: int): void

	addMp(value: int): void

	isFullHp(): boolean

	isFullMp(): boolean

	isFull(addHp: int, addMp: int): boolean

	increaseCapacity(value: int): boolean

}
declare interface ItemSlotPet extends Item {
	copy(): ItemSlotPet

	getItemType(): ItemType

	isPositionLock(): boolean

	setPositionLock(lock: boolean): void

	isTradeBlock(): boolean

	setTradeBlock(tradeBlock: boolean): void

	isTradeOnce(): boolean

	setTradeOnce(tradeOnce: boolean): void

	isAccountSharable(): boolean

	setAccountSharable(accountSharable: boolean): void

	setSealed(sealed: boolean): void

	isSealed(): boolean

	getPetName(): String

	setPetName(petName: String): void

	isSummoned(): boolean

	getActiveState(): byte

	setActiveState(activeState: int): void

	getSummoned(): byte

	getTameness(): short

	setTameness(tameness: int): void

	getLevel(): byte

	setLevel(level: int): void

	getRepleteness(): byte

	setRepleteness(repleteness: int): void

	getPetSkill(): short

	setPetSkill(fffh: int): void

	getCurrentFh(): int

	setCurrentFh(Fh: int): void

	getPosition(): Point

	setPosition(position: Point): void

	getStance(): int

	setStance(stance: int): void

	getPetItemId(): int

	canConsume(itemId: int): boolean

	getRemainLife(): int

	setRemainLife(sl: int): void

	getAutoBuffSkill(): int

	setAutoBuffSkill(id: int): void

	getPetHue(): int

	setPetHue(petHue: int): void

	getPetCapsule(): int

	setPetCapsule(petCapsule: int): void

	clearExcluded(): void

	addExcluded(i: int, itemId: int): void

	getExcludedList(): Integer[]

	getExcludedString(): String

	getPetAttribute(): short

	setPetAttribute(petAttribute: short): void

	getGiantRate(): short

	setGiantRate(giantRate: short): void

	updatePosition(movement: MovementFragment[]): void

	getWonderGrade(): short

	setWonderGrade(wonderGrade: short): void

	getAutoBuffSkill2(): int

	setAutoBuffSkill2(autoBuffSkill2: int): void

}
declare interface ForcedMobStat {
	getUserCount(): int

	setUserCount(userCount: int): void

	getLevel(): int

	setLevel(level: int): void

	getSpeed(): int

	setSpeed(speed: int): void

	getPushed(): int

	setPushed(pushed: int): void

	getMDRate(): int

	setMDRate(mdRate: int): void

	getPDRate(): int

	setPDRate(pdRate: int): void

	getEva(): int

	setEva(eva: int): void

	getAcc(): int

	setAcc(acc: int): void

	getMatk(): int

	setMatk(matk: int): void

	getWatk(): int

	setWatk(watk: int): void

	getExp(): long

	setExp(exp: long): void

	isChange(): boolean

	setChange(change: boolean): void

}
declare interface ItemData {
	getLevelInfo(): Map<Integer, LevelUpItemInfo>

	getSealedInfo(): Map<Integer, SealedItemInfo>

	getEquipSkills(): Map<Integer, Pair<Integer, Integer>[]>

	getQuests(): Set<Integer>

	getOption(): Integer[]

	getOnlyHeart(): Integer[]

	getOnlyAndroid(): Integer[]

	getScrollReq(): Integer[]

	getRewardInfos(): RewardInfo[]

	getSpecialData(): ItemSpecialData

	getSpecialExData(): ItemSpecialExData

	getBookSkills(): Integer[]

	getItemId(): int

	getName(): String

	getDesc(): String

	getSlotMax(): int

	getReqJob(): int

	getReqSpecJob(): int

	getReqLevel(): int

	getTuc(): int

	getEtuc(): int

	getPrice(): int

	getUnitPrice(): int

	getReqSTR(): int

	getReqDEX(): int

	getReqINT(): int

	getReqLUK(): int

	getReqPOP(): int

	getSetItemID(): int

	getGrade(): int

	getCharmEXP(): int

	getWillEXP(): int

	getInsightEXP(): int

	getSenseEXP(): int

	getCraftEXP(): int

	getCharismaEXP(): int

	getAndroid(): int

	isCash(): boolean

	isTradeBlock(): boolean

	isNotSale(): boolean

	isTimeLimited(): boolean

	isOnly(): boolean

	isEquipTradeBlock(): boolean

	getTradeAvailable(): int

	isNotExtend(): boolean

	isSharableOnce(): boolean

	isAccountSharable(): boolean

	isBlockGoldHammer(): boolean

	isExceptUpgrade(): boolean

	isOnlyEquip(): boolean

	isAccountShareTag(): boolean

	isCashTradeBlock(): boolean

	isNoMoveToLocker(): boolean

	isExceptToadsHammer(): boolean

	isExceptTransmission(): boolean

	isUnsyntesizable(): boolean

	isUndecomposable(): boolean

	isNoPotential(): boolean

	isExpireOnLogout(): boolean

	isQuest(): boolean

	isAbilityTimeLimited(): boolean

	isNActivatedSocket(): boolean

	isJokerToSetItem(): boolean

	isExUpgradeBlock(): boolean

	isNoExpend(): boolean

	isEpicItem(): boolean

	getReplaceItemId(): int

	getReplaceMsg(): String

	getIncMAD(): int

	getIncPAD(): int

	getIncSTR(): int

	getIncDEX(): int

	getIncINT(): int

	getIncLUK(): int

	getIncMMP(): int

	getIncMHP(): int

	getIncACC(): int

	getIncEVA(): int

	getIncSpeed(): int

	getIncJump(): int

	getIncPDD(): int

	getIncMDD(): int

	getIncMHPr(): int

	getIncMMPr(): int

	getImdR(): int

	getBdR(): int

	getRecoveryHP(): int

	getRecoveryMP(): int

	getBuffItemID(): int

	getDurability(): int

	getNickSkill(): int

	getNickTag(): int

	getSuccess(): int

	getCursed(): int

	getFixLevel(): int

	getMaxHP(): int

	getMaxMP(): int

	getRandOption(): int

	getRandStat(): int

	getCreate(): int

	getMob(): int

	getBagType(): int

	getLv(): short

	isPickUpBlock(): boolean

	isMobHP(): boolean

	isSuperiorEqp(): boolean

	getStateChangeItem(): int

	getMeso(): int

	getReqEquipLevelMax(): int

	getSkillID(): int

	getRate(): int

	getAfterImage(): String

	getMaxLevel(): int

	getLimitBreak(): long

	isFloatType(): boolean

	isPickupItem(): boolean

	isLongRange(): boolean

	isPickupAll(): boolean

	isSweepForDrop(): boolean

	isConsumeHP(): boolean

	isConsumeMP(): boolean

	isAutoBuff(): boolean

	isNoRevive(): boolean

	setNoRevive(noRevive: boolean): void

	getForceUpgrade(): int

	isSafetyShield(): boolean

	getDamR(): int

	getIncALB(): int

	isNoCursed(): boolean

	isNoNegative(): boolean

	getRecover(): int

	getLife(): int

	getQuestId(): Integer

	getReqSkillLevel(): int

	getMasterLevel(): int

	getCraft(): short

	getIncArc(): int

	getSpecialGrade(): int

	getFixedGrade(): int

	getFixedPotential(): int

	getEffectItemID(): int

	getSummonMobs(): Pair<Integer, Integer>[]

	getIncAut(): int

	getLimitMin(): int

	setLevelInfo(levelInfo: Map<Integer, LevelUpItemInfo>): void

	setSealedInfo(sealedInfo: Map<Integer, SealedItemInfo>): void

	setEquipSkills(equipSkills: Map<Integer, Pair<Integer, Integer>[]>): void

	setOption(option: Integer[]): void

	setOnlyHeart(onlyHeart: Integer[]): void

	setOnlyAndroid(onlyAndroid: Integer[]): void

	setScrollReq(scrollReq: Integer[]): void

	setRewardInfos(rewardInfos: RewardInfo[]): void

	setSpecialData(specialData: ItemSpecialData): void

	setSpecialExData(specialExData: ItemSpecialExData): void

	setBookSkills(bookSkills: Integer[]): void

	setItemId(itemId: int): void

	setName(name: String): void

	setDesc(desc: String): void

	setSlotMax(slotMax: int): void

	setReqJob(reqJob: int): void

	setReqSpecJob(reqSpecJob: int): void

	setReqLevel(reqLevel: int): void

	setTuc(tuc: int): void

	setEtuc(etuc: int): void

	setPrice(price: int): void

	setUnitPrice(unitPrice: int): void

	setReqSTR(reqSTR: int): void

	setReqDEX(reqDEX: int): void

	setReqINT(reqINT: int): void

	setReqLUK(reqLUK: int): void

	setReqPOP(reqPOP: int): void

	setSetItemID(setItemID: int): void

	setGrade(grade: int): void

	setCharmEXP(charmEXP: int): void

	setWillEXP(willEXP: int): void

	setInsightEXP(insightEXP: int): void

	setSenseEXP(senseEXP: int): void

	setCraftEXP(craftEXP: int): void

	setCharismaEXP(charismaEXP: int): void

	setAndroid(android: int): void

	setCash(cash: boolean): void

	setTradeBlock(tradeBlock: boolean): void

	setNotSale(notSale: boolean): void

	setTimeLimited(timeLimited: boolean): void

	setOnly(only: boolean): void

	setEquipTradeBlock(equipTradeBlock: boolean): void

	setTradeAvailable(tradeAvailable: int): void

	setNotExtend(notExtend: boolean): void

	setSharableOnce(sharableOnce: boolean): void

	setAccountSharable(accountSharable: boolean): void

	setBlockGoldHammer(blockGoldHammer: boolean): void

	setExceptUpgrade(exceptUpgrade: boolean): void

	setOnlyEquip(onlyEquip: boolean): void

	setAccountShareTag(accountShareTag: boolean): void

	setCashTradeBlock(cashTradeBlock: boolean): void

	setNoMoveToLocker(noMoveToLocker: boolean): void

	setExceptToadsHammer(exceptToadsHammer: boolean): void

	setExceptTransmission(exceptTransmission: boolean): void

	setUnsyntesizable(unsyntesizable: boolean): void

	setUndecomposable(undecomposable: boolean): void

	setNoPotential(noPotential: boolean): void

	setExpireOnLogout(expireOnLogout: boolean): void

	setQuest(quest: boolean): void

	setAbilityTimeLimited(abilityTimeLimited: boolean): void

	setNActivatedSocket(nActivatedSocket: boolean): void

	setJokerToSetItem(jokerToSetItem: boolean): void

	setExUpgradeBlock(exUpgradeBlock: boolean): void

	setNoExpend(noExpend: boolean): void

	setEpicItem(epicItem: boolean): void

	setReplaceItemId(replaceItemId: int): void

	setReplaceMsg(replaceMsg: String): void

	setIncMAD(incMAD: int): void

	setIncPAD(incPAD: int): void

	setIncSTR(incSTR: int): void

	setIncDEX(incDEX: int): void

	setIncINT(incINT: int): void

	setIncLUK(incLUK: int): void

	setIncMMP(incMMP: int): void

	setIncMHP(incMHP: int): void

	setIncACC(incACC: int): void

	setIncEVA(incEVA: int): void

	setIncSpeed(incSpeed: int): void

	setIncJump(incJump: int): void

	setIncPDD(incPDD: int): void

	setIncMDD(incMDD: int): void

	setIncMHPr(incMHPr: int): void

	setIncMMPr(incMMPr: int): void

	setImdR(imdR: int): void

	setBdR(bdR: int): void

	setRecoveryHP(recoveryHP: int): void

	setRecoveryMP(recoveryMP: int): void

	setBuffItemID(buffItemID: int): void

	setDurability(durability: int): void

	setNickSkill(nickSkill: int): void

	setNickTag(nickTag: int): void

	setSuccess(success: int): void

	setCursed(cursed: int): void

	setFixLevel(fixLevel: int): void

	setMaxHP(MaxHP: int): void

	setMaxMP(MaxMP: int): void

	setRandOption(randOption: int): void

	setRandStat(randStat: int): void

	setCreate(create: int): void

	setMob(mob: int): void

	setBagType(bagType: int): void

	setLv(lv: short): void

	setPickUpBlock(pickUpBlock: boolean): void

	setMobHP(mobHP: boolean): void

	setSuperiorEqp(superiorEqp: boolean): void

	setStateChangeItem(stateChangeItem: int): void

	setMeso(meso: int): void

	setReqEquipLevelMax(reqEquipLevelMax: int): void

	setSkillID(skillID: int): void

	setRate(rate: int): void

	setAfterImage(afterImage: String): void

	setMaxLevel(maxLevel: int): void

	setLimitBreak(limitBreak: long): void

	setFloatType(floatType: boolean): void

	setPickupItem(pickupItem: boolean): void

	setLongRange(longRange: boolean): void

	setPickupAll(pickupAll: boolean): void

	setSweepForDrop(sweepForDrop: boolean): void

	setConsumeHP(consumeHP: boolean): void

	setConsumeMP(consumeMP: boolean): void

	setAutoBuff(autoBuff: boolean): void

	setForceUpgrade(forceUpgrade: int): void

	setSafetyShield(safetyShield: boolean): void

	setDamR(damR: int): void

	setIncALB(incALB: int): void

	setNoCursed(noCursed: boolean): void

	setNoNegative(noNegative: boolean): void

	setRecover(recover: int): void

	setLife(life: int): void

	setQuestId(questId: Integer): void

	setReqSkillLevel(reqSkillLevel: int): void

	setMasterLevel(masterLevel: int): void

	setCraft(craft: short): void

	setIncArc(incArc: int): void

	setSpecialGrade(specialGrade: int): void

	setFixedGrade(fixedGrade: int): void

	setFixedPotential(fixedPotential: int): void

	setEffectItemID(effectItemID: int): void

	setSummonMobs(summonMobs: Pair<Integer, Integer>[]): void

	setIncAut(incAut: int): void

	setLimitMin(limitMin: int): void

	isNotConsume(): boolean

	setNotConsume(notConsume: boolean): void

	isBossReward(): boolean

	setBossReward(bossReward: boolean): void

	isChoice(): boolean

	setChoice(choice: boolean): void

	getWonderGrade(): int

	setWonderGrade(wonderGrade: int): void

	toString(): String

}
declare interface FamiliarInfo {
	fromResultSet(rs: ResultSet): FamiliarInfo

	copy(): FamiliarInfo

	gainExp(exp: int): void

	getTemplateId(): int

	getSkill(): short

	getLevel(): byte

	getGrade(): byte

	getExp(): int

	getOption1(): int

	getOption2(): int

	getOption3(): int

	setTemplateId(templateId: int): void

	setSkill(skill: short): void

	setLevel(level: byte): void

	setGrade(grade: byte): void

	setExp(exp: int): void

	setOption1(option1: int): void

	setOption2(option2: int): void

	setOption3(option3: int): void

}
