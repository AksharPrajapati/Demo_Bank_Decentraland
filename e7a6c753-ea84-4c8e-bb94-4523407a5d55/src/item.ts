import { BubbleSystem, MessageBubbleComponent } from './bubble'

export type Props = {
  text?: string
  fontSize?: number
  removeEntity?: boolean
}

type ChangeTextType = {
  newText: string
}

export default class MessageBubble extends Entity {
  // openClip = new AudioClip('e7a6c753-ea84-4c8e-bb94-4523407a5d55/sounds/MessageBubble.mp3')
  // bubble = new Entity()
  init() {
    // engine.addSystem(new BubbleSystem())
  }

  // toggle(bubble: Entity, text: TextShape, value: boolean = true, playSound = true) {
  //   let bubbleData = bubble.getComponent(MessageBubbleComponent)

  //   if (bubbleData.isOpen === value) return

  //   // if (playSound) {
  //   //   const source = new AudioSource(this.openClip)
  //   //   bubble.addComponentOrReplace(source)
  //   //   source.playing = true
  //   // }

  //   // bubble.getComponent(Transform).rotation = bubbleData.rotation.clone()

  //   // bubbleData.isOpen = value
  //   // bubbleData.transition = 0

  //   // if (value) {
  //   //   // text.value = bubbleData.text.toString()
  //   // } else {
  //   //   // text.value = ''
  //   // }
  // }

  spawn(host: Entity, props: Props, channel: IChannel) {
   
    if(host.hasComponent('bubble')){
      log('Inner If..')
      host.removeComponent(MessageBubble)
    } 
 
  //   log(JSON.stringify(JSON.stringify(host.children)))
  //   for(var property in host.children) {
  //     log('EEEE...',property + "=" + host.children[property]);
  // }

    // log('host.children',JSON.stringify(host.children) )

    const bubble = new Entity()

    bubble.setParent(host)

    bubble.addComponent(new GLTFShape('e7a6c753-ea84-4c8e-bb94-4523407a5d55/models/bubble/MessageBubble.glb'))

    bubble.addComponent(
      new Transform({
        position: new Vector3(0, 0, 0),
        scale: new Vector3(3, 2, 0.25)
      })
    )

    // let bubbleData = new MessageBubbleComponent(
    //   channel,
    //   // props.text,
    //   '',
    //   new Vector3(0, 90, 0)
    // )
    // bubble.addComponent(bubbleData)
 
    // engine.removeEntity(bubble)
    
    // engine.removeEntity(bubble)

    let signText = new Entity()
    
    signText.setParent(bubble)
    
    let text = new TextShape()
    text.fontSize = props.fontSize
    text.color = Color3.FromHexString('#000000')
    // text.outlineWidth = 0.4
    // text.outlineColor = Color3.FromHexString('#8cfdff')

    log(props.text)
    // let preValue = props.text;
    // let currentValue = '';
    // if(preValue === props.text){
    //   currentValue = props.text
    // }else{
    //   currentValue = ''
    // }
    // if(props.removeEntity){
    //   text.value = ''
    // }else{
    //   text.value = props.text
    // }
    text.width = 15
    text.height = 30
    text.hTextAlign = 'center'
    // text.value.replace()
    text.value = props.text

    
    
    text.lineCount = 6
    text.textWrapping = true

    signText.addComponent(text)

    signText.addComponent(
      new Transform({
        position: new Vector3(0.25, 0.45, -0.01),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(0.05, 0.05, 0.05)
      })
    )

  //   if(props.removeEntity === true){
  //     log("alskqouyyyyy", props.removeEntity)
  //     engine.removeEntity(bubble)
  //     engine.removeEntity(signText)
  //     bubble.removeComponent(new GLTFShape('e7a6c753-ea84-4c8e-bb94-4523407a5d55/models/bubble/MessageBubble.glb'))

  //   bubble.removeComponent(
  //     new Transform({
  //       position: new Vector3(0, 0, 0),
  //       scale: new Vector3(3, 2, 0.25)
  //     })
  //   )

  //   bubble.removeComponent(bubbleData)

  //   signText.removeComponent(text)

  //   signText.removeComponent(
  //     new Transform({
  //       position: new Vector3(0.25, 0.45, -0.01),
  //       rotation: Quaternion.Euler(0, 0, 0),
  //       scale: new Vector3(0.05, 0.05, 0.05)
  //     })
  //   )
  //  }

    // bubble.addComponent(
    //   new OnPointerDown(
    //     e => {
    //       this.toggle(bubble, text, !bubbleData.isOpen, true)
    //     },
    //     {
    //       button: ActionButton.POINTER,
    //       hoverText: 'Open/Close',
    //       distance: 8
    //     }
    //   )
    // )

    // handle actions
    // channel.handleAction('open', ({ sender }) => {
    //   this.toggle(bubble, text, true)
    // })
    // channel.handleAction('close', ({ sender }) => {
    //   this.toggle(bubble, text, false)
    // })
    // channel.handleAction<ChangeTextType>('changeText', action => {
    //   text.value = action.values.newText
    //   bubbleData.text = action.values.newText
    // })

    // channel.request<string>('getText', signText => (bubbleData.text = signText))
    // channel.reply<string>('getText', () => bubbleData.text)
  }
}
