export type Props = {
  text?: string
  fontSize?: number
  removeEntity?: boolean
}

export default class MessageBubble extends Entity {

   bubble = new Entity()
   signText = new Entity()
   text = new TextShape()

  constructor(){
    super();
    this.signText.setParent(this.bubble)

    this.bubble.addComponent(new GLTFShape('e7a6c753-ea84-4c8e-bb94-4523407a5d55/models/bubble/MessageBubble.glb'))

    this.bubble.addComponent(
      new Transform({
        position: new Vector3(0, 0, 0),
        scale: new Vector3(3, 2, 0.25)
      })
    )

    this.text.fontSize = 20
    this.text.color = Color3.FromHexString('#000000')
    this.text.width = 15
    this.text.height = 30
    this.text.hTextAlign = 'center'
   
    this.text.lineCount = 6
    this.text.textWrapping = true
    
    this.signText.addComponent(this.text)

    this.signText.addComponent(
      new Transform({
        position: new Vector3(0.25, 0.45, -0.01),
        rotation: Quaternion.Euler(0, 0, 0),
        scale: new Vector3(0.05, 0.05, 0.05)
      })
    )
  }


  init(){

  }

  spawn(host: Entity, props: Props) {
    
     this.bubble.setParent(host)

     this.text.value = props.text

    
  }
}
