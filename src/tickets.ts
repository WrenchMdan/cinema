export function BuyTickets(_scene:Entity) {
    const v = new Entity('v')
    engine.addEntity(v)
    v.setParent(_scene)
    const transform23 = new Transform({
        position: new Vector3(4.9380621910095215, 2.36374568939209, 2.8079617023468018),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(0.5922598838806152, 0.5922598838806152, 0.5922598838806152)
    })
    v.addComponentOrReplace(transform23)
    const gltfShape11 = new GLTFShape("models/v-1.glb")
    gltfShape11.withCollisions = true
    gltfShape11.isPointerBlocker = true
    gltfShape11.visible = true
    v.addComponentOrReplace(gltfShape11)

    //售票按键声音
     let vAudioClip = new AudioClip('sounds/音箱按键声.mp3')
    const vSource = new AudioSource(vAudioClip)
    v.addComponentOrReplace(vSource)
    vSource.loop = false
    vSource.playing = false

    //售票按键动画
    let animator = new Animator()
    const vAnimationClip = new AnimationState('Cylinder012|Take 001|BaseLayer')
    animator.addClip(vAnimationClip)
    v.addComponentOrReplace(animator)
    vAnimationClip.playing = false
    vAnimationClip.looping = false

    v.addComponent(new OnClick(() => {
        vAnimationClip.playing = false
        vAnimationClip.playing = true
        vSource.playOnce()
        //executeTask(async () => {
        //await marketplace.createOrder(
        //    `0xd35147be6401dcb20811f2104c33de8e97ed6818`,
        //    28706,
        //    30
        //    )   
        //}
        //)
    },
        { hoverText: "Buy" }))
}