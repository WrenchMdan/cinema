import utils from '../node_modules/decentraland-ecs-utils/index'

const clip = new AudioClip("sounds/传送瞬移音效.wav")
const source = new AudioSource(clip)
export function TheDoorOfTransfer(Door: Entity, PlayerTransform: TranformConstructorArgs) {
    let triggerBox = new utils.TriggerBoxShape(
        new Vector3(1.5, 3, 1.5), new Vector3(0, 0, 0))
    Door.addComponent(source);
    Door.addComponent(
        new utils.TriggerComponent(
        triggerBox,
        0,
        0,
        null,
        null,
        () => {
            movePlayerTo(PlayerTransform.position);
            source.playOnce();
        },
        null,
        false
        )
        )
}