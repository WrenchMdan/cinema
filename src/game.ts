import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../7e78cd70-5414-4ec4-be5f-198ec9879a5e/src/item"
import Script2 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script4 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script5 from "../c5cbd030-54d0-4f28-9158-d27401c691b1/src/item"
import Script6 from "../c1da72b5-fbda-4ba5-ad96-a921a3ef0d3b/src/item"
import Script7 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"
import { TheDoorOfTransfer } from "./Portal"
import { CreateRadio} from "./Radio"
import { Dispenser } from './dispenser'
import { CreateWaiter } from './Waiter'
import { BuyTickets } from './tickets'
import * as marketplace from '../node_modules/@dcl/crypto-utils/marketplace/index'

//2楼屏幕链接
let addressOfSecondFloor = 'https://mv.cbi88.com/20201206/ILnAPwEj/index.m3u8'
//3楼屏幕链接
let addressOfThirdFloor = 'https://vod.cdbaiyou.com/20201205/kWkTynjg/index.m3u8'
//外面广告屏幕链接
let addressOfAdvertising = 'https://mhyunbo.com/20191112/wIVjkXKi/1200kb/hls/index.m3u8'

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

//POAP
let Booth = new Dispenser(
    {
        position: new Vector3(5.5,1,11),
        rotation: Quaternion.Euler(0,60,0)
    },
    '405'
)
export let sceneMessageBus = new MessageBus()
sceneMessageBus.on('activatePoap', () => {
    Booth.activate()
})

//门口花
const birdSNestFernContainer = new Entity('birdSNestFernContainer')
engine.addEntity(birdSNestFernContainer)
birdSNestFernContainer.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(3.054534912109375, 1.1109981536865234, 9.519476890563965),
  rotation: new Quaternion(-1.4637534009854201e-15, -0.711460292339325, 8.481264757165263e-8, -0.7027263641357422),
  scale: new Vector3(1.0000008344650269, 1, 1.0000008344650269)
})
birdSNestFernContainer.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("models/PlantPot_02/PlantPot_02.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
birdSNestFernContainer.addComponentOrReplace(gltfShape)

const birdSNestFernContainer2 = new Entity('birdSNestFernContainer2')
engine.addEntity(birdSNestFernContainer2)
birdSNestFernContainer2.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(5.275147438049316, 1.0891200304031372, 9.504096984863281),
  rotation: new Quaternion(-7.781870092739773e-16, -0.7071068286895752, 8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.000004768371582, 1, 1.000004768371582)
})
birdSNestFernContainer2.addComponentOrReplace(transform3)
birdSNestFernContainer2.addComponentOrReplace(gltfShape)

const plantedFern = new Entity('plantedFern')
engine.addEntity(plantedFern)
plantedFern.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(3.3280272483825684, 11.386959075927734, 13.943471908569336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantedFern.addComponentOrReplace(transform4)
const gltfShape2 = new GLTFShape("models/PlantPot_03/PlantPot_03.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
plantedFern.addComponentOrReplace(gltfShape2)

//电影院外墙
const dianyingy = new Entity('dianyingy')
engine.addEntity(dianyingy)
dianyingy.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8, -0.6, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1,1,1)
})
dianyingy.addComponentOrReplace(transform5)
const gltfShape3 = new GLTFShape("models/dianyingy.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
dianyingy.addComponentOrReplace(gltfShape3)

const foldingChair = new Entity('foldingChair')
engine.addEntity(foldingChair)
foldingChair.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(9, 14.912826538085938, 2.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
foldingChair.addComponentOrReplace(transform6)
const gltfShape4 = new GLTFShape("models/Chair_05/Chair_05.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
foldingChair.addComponentOrReplace(gltfShape4)

const bicycleParkingRack = new Entity('bicycleParkingRack')
engine.addEntity(bicycleParkingRack)
bicycleParkingRack.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(6.124791145324707, 14.89980411529541, 11.879414558410645),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
bicycleParkingRack.addComponentOrReplace(transform7)
const gltfShape5 = new GLTFShape("models/BicycleParking_01/BicycleParking_01.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
bicycleParkingRack.addComponentOrReplace(gltfShape5)

const concreteRoundedTable = new Entity('concreteRoundedTable')
engine.addEntity(concreteRoundedTable)
concreteRoundedTable.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(6, 14.93004322052002, 6.000000953674316),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
concreteRoundedTable.addComponentOrReplace(transform8)
const gltfShape6 = new GLTFShape("models/Table_04/Table_04.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
concreteRoundedTable.addComponentOrReplace(gltfShape6)
//地皮
const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape7 = new GLTFShape("models/FloorBaseConcrete_01/FloorBaseConcrete_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
entity.addComponentOrReplace(gltfShape7)
const transform9 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform9)

//1-》2传送
const signpostTree = new Entity('signpostTree')
engine.addEntity(signpostTree)
signpostTree.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(3, 2.1667861938476562, 4),
  rotation: new Quaternion(7.061511240384708e-15, 0.7071068286895752, -8.429370268459024e-8, 0.7071068286895752),
  scale: new Vector3(0.43490269780158997, 0.43490102887153625, 0.43490269780158997)
})
signpostTree.addComponentOrReplace(transform10)
TheDoorOfTransfer(signpostTree,
    {
        position: new Vector3(5, 9, 8)
    }
)

//1-》3传送
const signpostTree2 = new Entity('signpostTree2')
engine.addEntity(signpostTree2)
signpostTree2.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(2.971576452255249, 2.1667861938476562, 5.915125846862793),
  rotation: new Quaternion(4.731725943138074e-15, 0.70710688829422, -8.42937097900176e-8, 0.7071067690849304),
  scale: new Vector3(0.4349026679992676, 0.43490102887153625, 0.4349026679992676)
})
signpostTree2.addComponentOrReplace(transform11)
TheDoorOfTransfer(signpostTree2,
    {
        position: new Vector3(5, 14, 8)
    }
)

//1-》天空花园传送
const signpostTree3 = new Entity('signpostTree3')
engine.addEntity(signpostTree3)
signpostTree3.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(11.893535614013672, 2.465582847595215, 6.084873676300049),
  rotation: new Quaternion(1.8283312892635427e-14, -0.7071067690849304, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(0.43490350246429443, 0.43490102887153625, 0.43490350246429443)
})
signpostTree3.addComponentOrReplace(transform12)
TheDoorOfTransfer(signpostTree3,
    {
        position: new Vector3(5, 18, 8)
    }
)
//2-》1传送
const signpostTree4 = new Entity('signpostTree4')
engine.addEntity(signpostTree4)
signpostTree4.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(6.0060343742370605, 7.709895610809326, 10.685442924499512),
  rotation: new Quaternion(-1.1233006204076999e-14, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(0.43490415811538696, 0.43490102887153625, 0.43490415811538696)
})
signpostTree4.addComponentOrReplace(transform13)
TheDoorOfTransfer(signpostTree4,
    {
        position: new Vector3(7, 3, 8)
    }
)

//3-》1传送
const signpostTree6 = new Entity('signpostTree6')
engine.addEntity(signpostTree6)
signpostTree6.setParent(_scene)
const transform21 = new Transform({
    position: new Vector3(6.0060343742370605, 12.216497421264648, 10.685442924499512),
    rotation: new Quaternion(-1.1233006204076999e-14, -0.7071068286895752, 8.429368136830817e-8, 0.7071068286895752),
    scale: new Vector3(0.43490487337112427, 0.43490102887153625, 0.43490487337112427)
})
signpostTree6.addComponentOrReplace(transform21)
TheDoorOfTransfer(signpostTree6,
    {
        position: new Vector3(7, 3, 8)
    }
)

//天空花园-》1传送
const signpostTree5 = new Entity('signpostTree5')
engine.addEntity(signpostTree5)
signpostTree5.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(11.16464614868164, 16.009578704833984, 8.189988136291504),
  rotation: new Quaternion(-8.618688987320489e-15, -0.70710688829422, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(0.43490517139434814, 0.43490102887153625, 0.43490517139434814)
})
signpostTree5.addComponentOrReplace(transform14)
TheDoorOfTransfer(signpostTree5,
    {
        position: new Vector3(7, 3, 8)
    }
)

//门口白杨树
const greenPoplars = new Entity('greenPoplars')
engine.addEntity(greenPoplars)
greenPoplars.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(14.143499374389648, 0, 14.76647663116455),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
greenPoplars.addComponentOrReplace(transform15)
const gltfShape8 = new GLTFShape("models/TreeFir_02/TreeFir_02.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
greenPoplars.addComponentOrReplace(gltfShape8)
//自行车
const blueBicycle = new Entity('blueBicycle')
engine.addEntity(blueBicycle)
blueBicycle.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(7.874269962310791, 0, 15),
  rotation: new Quaternion(-4.966839842922765e-15, -0.9866505265235901, 1.1761789409092671e-7, 0.16285240650177002),
  scale: new Vector3(1.341872215270996, 1.3418693542480469, 1.341872215270996)
})
blueBicycle.addComponentOrReplace(transform16)
const gltfShape9 = new GLTFShape("models/Bicycle_02/Bicycle_02.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
blueBicycle.addComponentOrReplace(gltfShape9)
//消防栓
const fireHydrant = new Entity('fireHydrant')
engine.addEntity(fireHydrant)
fireHydrant.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(0.32044386863708496, 0, 15.197534561157227),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
fireHydrant.addComponentOrReplace(transform17)
const gltfShape10 = new GLTFShape("models/FireHydrant_01/FireHydrant_01.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
fireHydrant.addComponentOrReplace(gltfShape10)

const plantedFern2 = new Entity('plantedFern2')
engine.addEntity(plantedFern2)
plantedFern2.setParent(_scene)
plantedFern2.addComponentOrReplace(gltfShape2)
const transform18 = new Transform({
  position: new Vector3(4.188300609588623, 11.386959075927734, 13.943471908569336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantedFern2.addComponentOrReplace(transform18)

const plantedFern3 = new Entity('plantedFern3')
engine.addEntity(plantedFern3)
plantedFern3.setParent(_scene)
plantedFern3.addComponentOrReplace(gltfShape2)
const transform19 = new Transform({
  position: new Vector3(5.109220027923584, 11.386959075927734, 13.943471908569336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantedFern3.addComponentOrReplace(transform19)

const plantedFern4 = new Entity('plantedFern4')
engine.addEntity(plantedFern4)
plantedFern4.setParent(_scene)
plantedFern4.addComponentOrReplace(gltfShape2)
const transform20 = new Transform({
  position: new Vector3(2.45914888381958, 11.386959075927734, 13.943471908569336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
plantedFern4.addComponentOrReplace(transform20)

//售票处标识
//const signpostTree7 = new Entity('signpostTree7')
//engine.addEntity(signpostTree7)
//signpostTree7.setParent(_scene)
//const transform22 = new Transform({
//  position: new Vector3(4.8685078620910645, 3.1221776008605957, 2.742151975631714),
//  rotation: new Quaternion(1.1010136589061342e-14, 0, -1.088531040241566e-15, 1),
//  scale: new Vector3(0.43490317463874817, 0.43490102887153625, 0.43490317463874817)
//})
//signpostTree7.addComponentOrReplace(transform22)

//微信二维码
const v2 = new Entity('v2')
engine.addEntity(v2)
v2.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(10.867931365966797, 2.7662620544433594, 2.4358510971069336),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7112665176391602, 0.7112665176391602, 0.7112665176391602)
})
v2.addComponentOrReplace(transform24)
const gltfShape12 = new GLTFShape("models/v-2.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
v2.addComponentOrReplace(gltfShape12)

//二维码下方
const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(10.845649719238281, 2.4225447177886963, 2.6346547603607178),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6582908630371094, 0.6582908630371094, 0.6582908630371094)
})
externalLink.addComponentOrReplace(transform25)

//收音机

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(13.86950397491455, 10.882447242736816, 4.841712474822998),
  rotation: new Quaternion(-1.9455749640203465e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.081307888031006, 2.0813045501708984, 2.557225465774536)
})
videoStream.addComponentOrReplace(transform27)

//立体环绕音
const ambientSound = new Entity('ambientSound')
engine.addEntity(ambientSound)
ambientSound.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(3.5, 0.941922664642334, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
ambientSound.addComponentOrReplace(transform28)

const squareSignpost = new Entity('squareSignpost')
engine.addEntity(squareSignpost)
squareSignpost.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(1.4423274993896484, 0, 15.570568084716797),
  rotation: new Quaternion(6.262611363874607e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
squareSignpost.addComponentOrReplace(transform29)

const constructionMetalFence = new Entity('constructionMetalFence')
engine.addEntity(constructionMetalFence)
constructionMetalFence.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(7.050220012664795, 14.759166717529297, 10.758320808410645),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
constructionMetalFence.addComponentOrReplace(transform30)
const gltfShape13 = new GLTFShape("models/ConstructionFence_02/ConstructionFence_02.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
constructionMetalFence.addComponentOrReplace(gltfShape13)

//透明墙
const invisibleWall = new Entity('invisibleWall')
engine.addEntity(invisibleWall)
invisibleWall.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(7.6068010330200195, 0.9804689884185791, 10.865206718444824),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-0.1367616057395935, 1.929943561553955, 0.13664396107196808)
})
invisibleWall.addComponentOrReplace(transform31)

const invisibleWall2 = new Entity('invisibleWall2')
engine.addEntity(invisibleWall2)
invisibleWall2.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(10.066097259521484, 0.9804689884185791, 9.821747779846191),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-0.1367616057395935, 1.929943561553955, 0.13664396107196808)
})
invisibleWall2.addComponentOrReplace(transform32)

const invisibleWall3 = new Entity('invisibleWall3')
engine.addEntity(invisibleWall3)
invisibleWall3.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(9.065755844116211, 0.9804689884185791, 10.865206718444824),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-0.1367616057395935, 1.929943561553955, 0.13664396107196808)
})
invisibleWall3.addComponentOrReplace(transform33)

const invisibleWall4 = new Entity('invisibleWall4')
engine.addEntity(invisibleWall4)
invisibleWall4.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(6.603453159332275, 0.9804689884185791, 9.821747779846191),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(-0.1367616057395935, 1.929943561553955, 0.13664396107196808)
})
invisibleWall4.addComponentOrReplace(transform34)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
script1.init(options)
script2.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script1.spawn(signpostTree, {"text":"Second Floor","fontSize":42}, createChannel(channelId, signpostTree, channelBus))
script1.spawn(signpostTree2, {"text":"Third Floor_VIP","fontSize":42}, createChannel(channelId, signpostTree2, channelBus))
script1.spawn(signpostTree3, {"text":"Sky Garden","fontSize":42}, createChannel(channelId, signpostTree3, channelBus))
script1.spawn(signpostTree4, {"text":"First Floor","fontSize":42}, createChannel(channelId, signpostTree4, channelBus))
script1.spawn(signpostTree5, {"text":"First Floor","fontSize":42}, createChannel(channelId, signpostTree5, channelBus))
script1.spawn(signpostTree6, {"text":"First Floor","fontSize":42}, createChannel(channelId, signpostTree6, channelBus))
//script1.spawn(signpostTree7, {"text":"Please buy a ticket to \nthe VIP viewing area","fontSize":35.5}, createChannel(channelId, signpostTree7, channelBus))
script2.spawn(externalLink, {"url":"https://www.dclabc.com/","name":""}, createChannel(channelId, externalLink, channelBus))
script4.spawn(videoStream, {"startOn":false,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"station":"https://theuniverse.club/live/genesisplaza/index.m3u8","customStation":"https://www.bilibili.com/video/BV1gZ4y157eo?from=search&seid=13959562641845662985"}, createChannel(channelId, videoStream, channelBus))
script5.spawn(ambientSound, {"sound":"Town","active":true,"loop":true}, createChannel(channelId, ambientSound, channelBus))
script6.spawn(squareSignpost, {"text":"Cinema","fontSize":30}, createChannel(channelId, squareSignpost, channelBus))
script7.spawn(invisibleWall, {"enabled":true}, createChannel(channelId, invisibleWall, channelBus))
script7.spawn(invisibleWall2, {"enabled":true}, createChannel(channelId, invisibleWall2, channelBus))
script7.spawn(invisibleWall3, {"enabled":true}, createChannel(channelId, invisibleWall3, channelBus))
script7.spawn(invisibleWall4, { "enabled": true }, createChannel(channelId, invisibleWall4, channelBus))

function distance(pos1: Vector3, pos2: Vector3): number {
    const a = pos1.x - pos2.x
    const b = pos1.z - pos2.z
    return a * a + b * b
}
//2楼电视
const TVClip1 = new VideoClip(addressOfSecondFloor)
const TVTexture1 = new VideoTexture(TVClip1)
const TVMaterial1 = new BasicMaterial()
TVMaterial1.texture = TVTexture1
TVTexture1.playing = false
TVTexture1.volume = 0.3

const screenMain1 = new Entity()
screenMain1.addComponent(new PlaneShape())
screenMain1.setParent(_scene)
screenMain1.addComponent(
    new Transform({
        position: new Vector3(13.07, 8, 5.19),
        rotation: Quaternion.Euler(0, -90, 0),
        scale: new Vector3(16 / 3.13, 9 / 3.13, 1)
    })
)
screenMain1.addComponent(TVMaterial1)
screenMain1.addComponent(
    new OnPointerDown(() => {
        TVTexture1.playing = !TVTexture1.playing
    },
        { button: ActionButton.POINTER, hoverText: "turn on/off", distance: 3 })
)
engine.addEntity(screenMain1)

//3楼电视
const TVClip2 = new VideoClip(addressOfThirdFloor)
const TVTexture2 = new VideoTexture(TVClip2)
const TVMateria2 = new BasicMaterial()
TVMateria2.texture = TVTexture2
TVTexture2.playing = false
TVTexture2.volume = 0.3

const screenMain2 = new Entity()
screenMain2.addComponent(new PlaneShape())
screenMain2.setParent(_scene)
screenMain2.addComponent(
    new Transform({
        position: new Vector3(13.07, 12.6, 5.19),
        rotation: Quaternion.Euler(0, -90, 0),
        scale: new Vector3(16 / 3.13, 9 / 3.13, 1)
    })
)
screenMain2.addComponent(TVMateria2)
screenMain2.addComponent(
    new OnPointerDown(() => {
        TVTexture2.playing = !TVTexture2.playing
    },
        { button: ActionButton.POINTER, hoverText: "turn on/off", distance: 3 })
)
engine.addEntity(screenMain2)

//外广告屏幕
const TVClip3 = new VideoClip(addressOfAdvertising)
const TVTexture3 = new VideoTexture(TVClip3)
const TVMateria3 = new BasicMaterial()
TVMateria3.texture = TVTexture3
TVTexture3.playing = true
TVTexture3.volume=0

const screenMain3 = new Entity()
screenMain3.addComponent(new PlaneShape())
screenMain3.setParent(_scene)
screenMain3.addComponent(
    new Transform({
        position: new Vector3(14, 12.6, 5),
        rotation: Quaternion.Euler(0, 90, 0),
        scale: new Vector3(16 / 2.4, 9 / 2.4, 1)
    })
)
screenMain3.addComponent(TVMateria3)
//screenMain3.addComponent(
//    new OnPointerDown(() => {
//        TVTexture3.playing = !TVTexture3.playing
//    },
//        {button: ActionButton.POINTER,  hoverText: "turn on/off", distance:15 })
//)
engine.addEntity(screenMain3)

//1楼音箱
CreateRadio(_scene)
//服务员
CreateWaiter(_scene)

////售票处
//BuyTickets(_scene)
