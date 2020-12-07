import utils from '../node_modules/decentraland-ecs-utils/index'
export function CreateRadio(_scene: Entity) {
    //创建音箱
    const radio = new Entity('radio')
    engine.addEntity(radio)
    const buttonModel = new GLTFShape("models/radio.glb")
    radio.addComponent(buttonModel)
    radio.setParent(_scene)
    const radioTF = new Transform({
        position: new Vector3(7.723884582519531, 4.525018215179443, 2.0214648246765137),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    radio.addComponentOrReplace(radioTF)

    //创建空物体（放音乐）
    const box = new Entity('box')
    engine.addEntity(box)
    const boxModel = new BoxShape()
    const boxTF = new Transform({
        position: new Vector3(7.723884582519531, 1.5, 2.0214648246765137),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    box.addComponent(boxTF)
    box.setParent(_scene)
    box.addComponent(boxModel)
    boxModel.withCollisions = false
    boxModel.visible=false

    let IsON = true
    
    //按键声音
    let buttonClip = new AudioClip('sounds/音箱按键声.mp3')
    const buttonSource = new AudioSource(buttonClip)
    radio.addComponentOrReplace(buttonSource)
    buttonSource.loop=false
    buttonSource.playing = false
    //按键动画 
    let animator = new Animator()
    const switchClip = new AnimationState('ON/OFF_Action')
    const lightClip = new AnimationState('Light_Action')
    radio.addComponentOrReplace(animator)
    animator.addClip(lightClip)
    switchClip.playing = false
    lightClip.playing = true
    switchClip.looping =false
    lightClip.looping = true
    //本地音乐
    //const radioSong = new AudioClip("sounds/???.mp3")
    //const radioSource = new AudioSource(radioSong)
    //box.addComponent(radioSource)
    //radioSource.playing = false
    //音乐流
    let musicStream = new AudioStream("https://icecast.ravepartyradio.org/ravepartyradio-192.mp3")
    box.addComponentOrReplace(musicStream)
    musicStream.playing = true
    musicStream.volume = 0.002

    //交互
    radio.addComponent(new OnClick(() => {
        //按键声
        buttonSource.playOnce()
        //动画
        lightClip.stop()
        animator.addClip(switchClip)
        switchClip.stop()
        switchClip.play()
        if (!IsON) {    
            radio.addComponent(
                new utils.Delay(500, () => {
                    switchClip.stop()
                    animator.addClip(lightClip)
                    lightClip.stop()
                    lightClip.play()
                    //radioSource.loop = true
                    //radioSource.playing = true
                    musicStream.playing = true
                })
            )
        }
        else {
            //radioSource.playing = false
            musicStream.playing = false
            radio.addComponent(
                new utils.Delay(500, () => {
                    switchClip.stop()
                })
            )
        }
        IsON = !IsON
    }, { hoverText: "Radio On/Off" }
    ))
}