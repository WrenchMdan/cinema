import utils from "../../node_modules/decentraland-ecs-utils/index"

export function CreateWaiter(_scene: Entity) {
    const camera = Camera.instance

    const Boy = new GLTFShape("models/v-3.glb")
    const BoyiTF = new Transform({
        position: new Vector3(7, 2.2, 1.6),
        scale: new Vector3(1.3,1.3,1.3)
    })
    const BoyEntity = new Entity()
    BoyEntity.setParent(_scene)
    BoyEntity.addComponent(Boy)
    BoyEntity.addComponent(BoyiTF)
    engine.addEntity(BoyEntity)

    BoyEntity.addComponent(new utils.Interval(100, () => {
        BoyEntity.getComponent(Transform).lookAt(camera.position)
    }))

    const Girl = new GLTFShape("models/v-4.glb")
    const GirlTF = new Transform({
        position: new Vector3(9, 2.2, 1.6),
        scale: new Vector3(1.3, 1.3, 1.3)
    })
    const GirlEntity = new Entity()
    GirlEntity.setParent(_scene)
    GirlEntity.addComponent(Girl)
    GirlEntity.addComponent(GirlTF)
    engine.addEntity(GirlEntity)

    GirlEntity.addComponent(new utils.Interval(100, () => {
        GirlEntity.getComponent(Transform).lookAt(camera.position)
    }))
}