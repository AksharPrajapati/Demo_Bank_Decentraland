import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../3cf05054-0a57-4b00-ba77-a3f21876494d/src/item"
import Script2 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import Script3 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"

import * as ui from '@dcl/ui-scene-utils'

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()


script1.init()
script2.init()
script3.init()


const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const wallPlainWhite = new Entity('wallPlainWhite')
engine.addEntity(wallPlainWhite)
wallPlainWhite.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(24, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 0.5099999904632568, 9.84375)
})
wallPlainWhite.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("45eb9e1a-2eca-4b6f-a5c4-b0278dc7e635/PlainWhiteWall.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
wallPlainWhite.addComponentOrReplace(gltfShape2)

const wallPlainWhite3 = new Entity('wallPlainWhite3')
engine.addEntity(wallPlainWhite3)
wallPlainWhite3.setParent(_scene)
wallPlainWhite3.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(11.5, 0, 11.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 0.5099999904632568, 15.75)
})
wallPlainWhite3.addComponentOrReplace(transform7)

const wallPlainWhite4 = new Entity('wallPlainWhite4')
engine.addEntity(wallPlainWhite4)
wallPlainWhite4.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(8, 2, 27),
  rotation: new Quaternion(3.161013495400766e-8, -0.7071068286895752, 5.2683553519727866e-8, 0.7071068286895752),
  scale: new Vector3(6.750026702880859, 1.5, 0.5000015497207642)
})
wallPlainWhite4.addComponentOrReplace(transform8)
wallPlainWhite4.addComponentOrReplace(gltfShape2)

const wallPlainWhite5 = new Entity('wallPlainWhite5')
engine.addEntity(wallPlainWhite5)
wallPlainWhite5.setParent(_scene)
wallPlainWhite5.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(24.5, 2, 27),
  rotation: new Quaternion(3.161013495400766e-8, -0.7071068286895752, 5.2683553519727866e-8, 0.7071068286895752),
  scale: new Vector3(6.750034332275391, 1.5, 0.5000019073486328)
})
wallPlainWhite5.addComponentOrReplace(transform9)

const wallPlainWhite6 = new Entity('wallPlainWhite6')
engine.addEntity(wallPlainWhite6)
wallPlainWhite6.setParent(_scene)
wallPlainWhite6.addComponentOrReplace(gltfShape2)
const transform10 = new Transform({
  position: new Vector3(21.5, 2, 27),
  rotation: new Quaternion(-2.220446049250313e-15, -1.4901161193847656e-8, 4.470347647611561e-8, -1),
  scale: new Vector3(5.163771629333496, 1.5, 0.5000013113021851)
})
wallPlainWhite6.addComponentOrReplace(transform10)

const wallPlainWhite7 = new Entity('wallPlainWhite7')
engine.addEntity(wallPlainWhite7)
wallPlainWhite7.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(8.1, 8.4, 12.45),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.5150052309036255, 4.13013828277588, 6.9999999403953552)
})
wallPlainWhite7.addComponentOrReplace(transform47)
wallPlainWhite7.addComponentOrReplace(gltfShape2)

const wallPlainWhite8 = new Entity('wallPlainWhite8')
engine.addEntity(wallPlainWhite8)
wallPlainWhite8.setParent(_scene)
wallPlainWhite8.addComponentOrReplace(gltfShape2)
const transform48 = new Transform({
  position: new Vector3(11.9, 11, 12.45),
  rotation: new Quaternion(0, 0, -0.7071068286895752, 0.7071068286895752),
  scale: new Vector3(1.0150072574615479, 2.3400075912475586, 6.9999998807907104)
})
wallPlainWhite8.addComponentOrReplace(transform48)

const wallcornerWhite = new Entity('wallcornerWhite')
engine.addEntity(wallcornerWhite)
wallcornerWhite.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(24.5, 2, 13.5),
  rotation: new Quaternion(4.2885733399694375e-16, 0.70710688829422, -8.429370268459024e-8, 0.7071067690849304),
  scale: new Vector3(1.0000026226043701, 1.5, 0.5000013113021851)
})
wallcornerWhite.addComponentOrReplace(transform11)
const gltfShape3 = new GLTFShape("91515a72-8f9f-4e7b-8ca5-a4dec6f99402/WhiteCorner.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wallcornerWhite.addComponentOrReplace(gltfShape3)

const wallcornerWhite2 = new Entity('wallcornerWhite2')
engine.addEntity(wallcornerWhite2)
wallcornerWhite2.setParent(_scene)
wallcornerWhite2.addComponentOrReplace(gltfShape3)
const transform12 = new Transform({
  position: new Vector3(8, 8, 13.5),
  rotation: new Quaternion(-0.70710688829422, 1.2644051139432122e-7, 0.7071067690849304, -4.214689397485927e-8),
  scale: new Vector3(1.0000040531158447, 1.5000032186508179, 0.5000020265579224)
})
wallcornerWhite2.addComponentOrReplace(transform12)

const pillarFancy = new Entity('pillarFancy')
engine.addEntity(pillarFancy)
pillarFancy.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(22, 2, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
pillarFancy.addComponentOrReplace(transform13)
const gltfShape4 = new GLTFShape("2583def2-238b-448f-a191-de5e48fbfff1/FancyPillar.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
pillarFancy.addComponentOrReplace(gltfShape4)

const pillarFancy2 = new Entity('pillarFancy2')
engine.addEntity(pillarFancy2)
pillarFancy2.setParent(_scene)
pillarFancy2.addComponentOrReplace(gltfShape4)
const transform14 = new Transform({
  position: new Vector3(12, 2, 12.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
pillarFancy2.addComponentOrReplace(transform14)

const wallHorizontalBoard = new Entity('wallHorizontalBoard')
engine.addEntity(wallHorizontalBoard)
wallHorizontalBoard.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(11, 2, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
wallHorizontalBoard.addComponentOrReplace(transform15)
const gltfShape5 = new GLTFShape("3e7afb1d-3108-475c-a343-57c7f33554a8/HorizontalBoardWall.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
wallHorizontalBoard.addComponentOrReplace(gltfShape5)

const wallHorizontalBoard2 = new Entity('wallHorizontalBoard2')
engine.addEntity(wallHorizontalBoard2)
wallHorizontalBoard2.setParent(_scene)
wallHorizontalBoard2.addComponentOrReplace(gltfShape5)
const transform16 = new Transform({
  position: new Vector3(23.5, 2, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.5, 1)
})
wallHorizontalBoard2.addComponentOrReplace(transform16)

const wallHorizontalBoard3 = new Entity('wallHorizontalBoard3')
engine.addEntity(wallHorizontalBoard3)
wallHorizontalBoard3.setParent(_scene)
wallHorizontalBoard3.addComponentOrReplace(gltfShape5)
const transform17 = new Transform({
  position: new Vector3(11.16, 2, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1)
})
wallHorizontalBoard3.addComponentOrReplace(transform17)

const wallHorizontalBoard4 = new Entity('wallHorizontalBoard4')
engine.addEntity(wallHorizontalBoard4)
wallHorizontalBoard4.setParent(_scene)
wallHorizontalBoard4.addComponentOrReplace(gltfShape5)
const transform18 = new Transform({
  position: new Vector3(24.5, 2, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1)
})
wallHorizontalBoard4.addComponentOrReplace(transform18)

const wallPlainWhite9 = new Entity('wallPlainWhite9')
engine.addEntity(wallPlainWhite9)
wallPlainWhite9.setParent(_scene)
wallPlainWhite9.addComponentOrReplace(gltfShape2)
const transform19 = new Transform({
  position: new Vector3(26.5, 0, 18.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.883798599243164, 0.5205250978469849, 23.624996185302734)
})
wallPlainWhite9.addComponentOrReplace(transform19)

const wallPlainWhite2 = new Entity('wallPlainWhite2')
engine.addEntity(wallPlainWhite2)
wallPlainWhite2.setParent(_scene)
wallPlainWhite2.addComponentOrReplace(gltfShape2)
const transform20 = new Transform({
  position: new Vector3(26.5, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9.883798599243164, 0.5205250978469849, 35.43749237060547)
})
wallPlainWhite2.addComponentOrReplace(transform20)

const floorCreamSmall = new Entity('floorCreamSmall')
engine.addEntity(floorCreamSmall)
floorCreamSmall.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(22, 2, 14),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 1, 1)
})
floorCreamSmall.addComponentOrReplace(transform21)
const gltfShape6 = new GLTFShape("604e60fd-ecd9-4bc8-a0de-6ff71ad4fd48/CreamFloor_Small.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
floorCreamSmall.addComponentOrReplace(gltfShape6)

const coffeeTable = new Entity('coffeeTable')
engine.addEntity(coffeeTable)
coffeeTable.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(11, 2, 17.5),
  // rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752), // first phase
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752), //second

  // scale: new Vector3(2.3750195503234863, 2.575, 1.5000064373016357) //first
  scale: new Vector3(1.9750195503234863, 2.575, 1.8000064373016357) //second

})
coffeeTable.addComponentOrReplace(transform22)
const gltfShape7 = new GLTFShape("61265486-0bbb-462e-80c0-30754daf97ed/Coffee_Table.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
coffeeTable.addComponentOrReplace(gltfShape7)

const coffeeTable1 = new Entity('coffeeTable1')
engine.addEntity(coffeeTable1)
coffeeTable1.setParent(_scene)
const transform221 = new Transform({
  position: new Vector3(10, 2, 17.5),
  // rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752), // first phase
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752), //second

  // scale: new Vector3(2.3750195503234863, 2.575, 1.5000064373016357) //first
  scale: new Vector3(1.9750195503234863, 2.075, 1.8000064373016357) //second

})
coffeeTable1.addComponentOrReplace(transform221)
const gltfShape71 = new GLTFShape("61265486-0bbb-462e-80c0-30754daf97ed/men4.glb")
gltfShape71.withCollisions = true
gltfShape71.isPointerBlocker = true
gltfShape71.visible = true
coffeeTable1.addComponentOrReplace(gltfShape71)

const fakeResponse = {
  1: "Can you please provide me your account number?",
  2:  "Which kind of loan you are looking for?",
  3: "let me process about your checkbook."
};

async function getResponse(j: number) {
  // let url = `https://jsonplaceholder.typicode.com/posts/${j}`
  
  try {
    // let response = await fetch(url)
    // let json = await response.json()
     fakeResponse[j] && script2.spawn(messageBubble, {"text": fakeResponse[j],"fontSize":15, removeEntity:false})
  } catch(error){
    log('error getting data', error)
  }
}


// POST method 
async function addRequest(data = {}) {
  let url = "https://jsonplaceholder.typicode.com/posts"
  try{
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
      
    });
    return response.json(); 
  }catch{
    log('Something went wonrg')
  }
  
  
}

let i = 0;
const canvas = new UICanvas()

coffeeTable.addComponent(
  new OnPointerDown(
    () => {
       const textInput = new UIInputText(canvas)
       textInput.width = "20%"
       textInput.height = "50px"
       textInput.vAlign = "bottom"
       textInput.hAlign = "center"
       textInput.fontSize = 20
       textInput.placeholder = "Write your message here"
       textInput.positionY = "150px"
       textInput.isPointerBlocker = true
       textInput.textWrapping = true
       textInput.positionX = "-300px"
      //  textInput.paddingTop = 30

      const close = new UIImage(canvas, new Texture("images/c-icon.png"))
      close.name = "clickable-image"
      close.width = "20px"
      close.height = "20px"
      close.sourceWidth = 250
      close.sourceHeight = 250
      close.vAlign = "bottom"
      close.hAlign = "center"
      close.isPointerBlocker = true
      close.positionX = "-190px"
      close.positionY = "205px"
      close.onClick = new OnPointerDown(() => {
          canvas.visible = false
          canvas.isPointerBlocker = false
          textInput.visible = false;
          close.visible = false;
      })

       textInput.onTextSubmit = new OnTextSubmit((x) => {
            i += 1;
            addRequest({ title : x.text }).then((data) => {
            log('Added:',data);
            getResponse(i)
          })
          canvas.visible = false
          canvas.isPointerBlocker = false
          textInput.visible = false;
          close.visible = false;
        })

      // let prompt = new ui.FillInPrompt(
      //   '',
      //   (e: string) => {
      //     log(e)
      //     i += 1;
      //     addRequest({ title : e }).then((data) => {
      //       log('Added:',data);
      //       getResponse(i)
      //     })
      //   },
      //   'Submit!',
      //   'Enter your Input',
      //   false,
      // )
    },{
      button: ActionButton.PRIMARY,
      hoverText: "Interact with receptionist",
      showFeedback: true,
      distance: 6
    }
  )
)

// const highBackCourtChair = new Entity('highBackCourtChair')
// engine.addEntity(highBackCourtChair)
// highBackCourtChair.setParent(_scene)
// const transform23 = new Transform({
//   position: new Vector3(9.5, 2, 17.5),
//   rotation: new Quaternion(-1.5014858600494022e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071067690849304),
//   scale: new Vector3(2.140167236328125, 1.55, 1.6098378896713257)
// })
// highBackCourtChair.addComponentOrReplace(transform23)
// const gltfShape8 = new GLTFShape("f7e9fb72-01a7-4260-a98d-32b62acae142/Chair_Wood_01/Chair_Wood_01.glb")
// gltfShape8.withCollisions = true
// gltfShape8.isPointerBlocker = true
// gltfShape8.visible = true
// highBackCourtChair.addComponentOrReplace(gltfShape8)

const sofaBlack = new Entity('sofaBlack')
engine.addEntity(sofaBlack)
sofaBlack.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(23, 2, 18.5),
  rotation: new Quaternion(-1.047248136700049e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
sofaBlack.addComponentOrReplace(transform24)
const gltfShape9 = new GLTFShape("a9bb84fd-6556-4d92-bdd3-d66ffe963b3e/Sofa_Black.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
sofaBlack.addComponentOrReplace(gltfShape9)

const sofaBlack2 = new Entity('sofaBlack2')
engine.addEntity(sofaBlack2)
sofaBlack2.setParent(_scene)
sofaBlack2.addComponentOrReplace(gltfShape9)
const transform25 = new Transform({
  position: new Vector3(23, 2, 24.5),
  rotation: new Quaternion(-1.047248136700049e-15, -0.7071068286895752, 8.429368847373553e-8, 0.7071067690849304),
  scale: new Vector3(1, 1, 1)
})
sofaBlack2.addComponentOrReplace(transform25)

const stoolHigh = new Entity('stoolHigh')
engine.addEntity(stoolHigh)
stoolHigh.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(23.5, 2, 19.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1, 1.5)
})
stoolHigh.addComponentOrReplace(transform26)
const gltfShape10 = new GLTFShape("82ffe8b2-1845-499b-9287-67b022348430/HighStool.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
stoolHigh.addComponentOrReplace(gltfShape10)

const coinGeckoPot = new Entity('coinGeckoPot')
engine.addEntity(coinGeckoPot)
coinGeckoPot.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(24, 2, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
coinGeckoPot.addComponentOrReplace(transform27)
const gltfShape11 = new GLTFShape("19ff62b6-e28c-491f-b2eb-8118f2e429a7/GeckoBush_01/GeckoBush_01.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
coinGeckoPot.addComponentOrReplace(gltfShape11)

const coinGeckoPot2 = new Entity('coinGeckoPot2')
engine.addEntity(coinGeckoPot2)
coinGeckoPot2.setParent(_scene)
coinGeckoPot2.addComponentOrReplace(gltfShape11)
const transform28 = new Transform({
  position: new Vector3(9, 2, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
coinGeckoPot2.addComponentOrReplace(transform28)

const coinGeckoPot3 = new Entity('coinGeckoPot3')
engine.addEntity(coinGeckoPot3)
coinGeckoPot3.setParent(_scene)
coinGeckoPot3.addComponentOrReplace(gltfShape11)
const transform29 = new Transform({
  position: new Vector3(9, 2, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
coinGeckoPot3.addComponentOrReplace(transform29)

const coinGeckoPot4 = new Entity('coinGeckoPot4')
engine.addEntity(coinGeckoPot4)
coinGeckoPot4.setParent(_scene)
coinGeckoPot4.addComponentOrReplace(gltfShape11)
const transform30 = new Transform({
  position: new Vector3(24, 2, 14.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
coinGeckoPot4.addComponentOrReplace(transform30)

const loveseat = new Entity('loveseat')
engine.addEntity(loveseat)
loveseat.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(16, 2, 26),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
loveseat.addComponentOrReplace(transform31)
const gltfShape12 = new GLTFShape("c162b72f-3a64-4593-aaa1-a42f614cf9e5/Couch_01/Couch_01.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
loveseat.addComponentOrReplace(gltfShape12)

const pianoStool = new Entity('pianoStool')
engine.addEntity(pianoStool)
pianoStool.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(14, 2, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1)
})
pianoStool.addComponentOrReplace(transform32)
const gltfShape13 = new GLTFShape("122cdf10-4c2f-437d-933a-0322ff126b5d/Piano chair.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
pianoStool.addComponentOrReplace(gltfShape13)

const vanquisherManuscript = new Entity('vanquisherManuscript')
engine.addEntity(vanquisherManuscript)
vanquisherManuscript.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(14, 3, 26),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
vanquisherManuscript.addComponentOrReplace(transform33)
const gltfShape14 = new GLTFShape("3a29e237-7096-4795-95b7-038c2d584a23/Book_03/Book_03.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
vanquisherManuscript.addComponentOrReplace(gltfShape14)

const ropeLight = new Entity('ropeLight')
engine.addEntity(ropeLight)
ropeLight.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(16, 7.5, 27),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4999999403953552, 1, 0.9999999403953552)
})
ropeLight.addComponentOrReplace(transform34)

const flowerPot = new Entity('flowerPot')
engine.addEntity(flowerPot)
flowerPot.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(23.5, 2.99, 19.9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
flowerPot.addComponentOrReplace(transform35)
const gltfShape15 = new GLTFShape("167c49c5-1918-4deb-9ec1-32dfc99c7b9d/HWN20_FlowerPot_05.glb")
gltfShape15.withCollisions = true
gltfShape15.isPointerBlocker = true
gltfShape15.visible = true
flowerPot.addComponentOrReplace(gltfShape15)

const roofWhiteEdgesSmall = new Entity('roofWhiteEdgesSmall')
engine.addEntity(roofWhiteEdgesSmall)
roofWhiteEdgesSmall.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(24.6, 4, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(8.24999523162842, 1, 8.599999523162842)
})
roofWhiteEdgesSmall.addComponentOrReplace(transform43)
const gltfShape18 = new GLTFShape("0c3187bb-e9ee-4ac9-9ec3-edb6a40e818b/WhiteRoof_4Edges_Small.glb")
gltfShape18.withCollisions = true
gltfShape18.isPointerBlocker = true
gltfShape18.visible = true
roofWhiteEdgesSmall.addComponentOrReplace(gltfShape18)

const wallPlainGlass2 = new Entity('wallPlainGlass2')
engine.addEntity(wallPlainGlass2)
wallPlainGlass2.setParent(_scene)
const gltfShape19 = new GLTFShape("e28ea76e-fe21-4544-a001-a65867b11be0/PlainGlassWall.glb")
gltfShape19.withCollisions = true
gltfShape19.isPointerBlocker = true
gltfShape19.visible = true
wallPlainGlass2.addComponentOrReplace(gltfShape19)
const transform44 = new Transform({
  position: new Vector3(21.5, 2, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999996423721313, 1.5, 0.9999998807907104)
})
wallPlainGlass2.addComponentOrReplace(transform44)

const wallPlainGlass = new Entity('wallPlainGlass')
engine.addEntity(wallPlainGlass)
wallPlainGlass.setParent(_scene)
wallPlainGlass.addComponentOrReplace(gltfShape19)
const transform45 = new Transform({
  position: new Vector3(14, 2, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.4999996423721313, 1.5, 0.9999998807907104)
})
wallPlainGlass.addComponentOrReplace(transform45)

const wallPlainGlass3 = new Entity('wallPlainGlass3')
engine.addEntity(wallPlainGlass3)
wallPlainGlass3.setParent(_scene)
wallPlainGlass3.addComponentOrReplace(gltfShape19)
const transform46 = new Transform({
  position: new Vector3(18.5, 8, 13.5),
  rotation: new Quaternion(0, 0, -0.7071068286895752, -0.7071068286895752),
  scale: new Vector3(0.7499998211860657, 1.130002384185791, 0.9999998211860657)
})
wallPlainGlass3.addComponentOrReplace(transform46)

const mediumStoneStair = new Entity('mediumStoneStair')
engine.addEntity(mediumStoneStair)
mediumStoneStair.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(11.5, 0, 6),
  rotation: new Quaternion(-3.210715444258868e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(3.50000238418579, 4.1, 3.999999523162842)
})
mediumStoneStair.addComponentOrReplace(transform36)
const gltfShape16 = new GLTFShape("ac62c7f6-6ffd-485d-a189-b1236ca94e98/Module_Stair_Straight_3M/Module_Stair_Straight_3M.glb")
gltfShape16.withCollisions = true
gltfShape16.isPointerBlocker = true
gltfShape16.visible = true
mediumStoneStair.addComponentOrReplace(gltfShape16)

const wallLight = new Entity('wallLight')
engine.addEntity(wallLight)
wallLight.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(8.2, 7, 16),
  rotation: new Quaternion(-0.392738792896271, -0.47251299023628235, -0.4834017395973206, 0.43370160460472107),
  scale: new Vector3(1.0000008344650269, 1.0000017881393433, 1.0000014305114746)
})
wallLight.addComponentOrReplace(transform37)
const gltfShape17 = new GLTFShape("d6cbb77a-a9c5-40a3-8eba-7bdf86fc3747/LightWall_01/LightWall_01.glb")
gltfShape17.withCollisions = true
gltfShape17.isPointerBlocker = true
gltfShape17.visible = true
wallLight.addComponentOrReplace(gltfShape17)

const wallLight2 = new Entity('wallLight2')
engine.addEntity(wallLight2)
wallLight2.setParent(_scene)
wallLight2.addComponentOrReplace(gltfShape17)
const transform38 = new Transform({
  position: new Vector3(8.2, 7, 23.5),
  rotation: new Quaternion(-0.3982738792896271, -0.47251299023628235, -0.4834017395973206, 0.43370160460472107),
  scale: new Vector3(1.0000008344650269, 1.0000019073486328, 1.0000015497207642)
})
wallLight2.addComponentOrReplace(transform38)

const wallLight3 = new Entity('wallLight3')
engine.addEntity(wallLight3)
wallLight3.setParent(_scene)
wallLight3.addComponentOrReplace(gltfShape17)
const transform39 = new Transform({
  position: new Vector3(12, 7, 26.8),
  rotation: new Quaternion(-0.7552770972251892, -0.09012005478143692, -0.1487406075000763, 0.6350149512290955),
  scale: new Vector3(1.0000008344650269, 1.0000027418136597, 1.000002145767212)
})
wallLight3.addComponentOrReplace(transform39)

const wallLight4 = new Entity('wallLight4')
engine.addEntity(wallLight4)
wallLight4.setParent(_scene)
wallLight4.addComponentOrReplace(gltfShape17)
const transform40 = new Transform({
  position: new Vector3(21, 7, 26.7),
  rotation: new Quaternion(-0.6552770972251892, -0.09012005478143692, -0.083487406075000763, 0.6350149512290955),
  scale: new Vector3(1.0000008344650269, 1.0000035762786865, 1.0000026226043701)
})
wallLight4.addComponentOrReplace(transform40)

const wallLight5 = new Entity('wallLight5')
engine.addEntity(wallLight5)
wallLight5.setParent(_scene)
wallLight5.addComponentOrReplace(gltfShape17)
const transform41 = new Transform({
  position: new Vector3(24.4, 7, 17),
  rotation: new Quaternion(0.3817531824111938, -0.47792768478393555, -0.453057849407196, -0.42772752046585083),
  scale: new Vector3(1.0000008344650269, 1.0000046491622925, 1.0000033378601074)
})
wallLight5.addComponentOrReplace(transform41)

const wallLight6 = new Entity('wallLight6')
engine.addEntity(wallLight6)
wallLight6.setParent(_scene)
wallLight6.addComponentOrReplace(gltfShape17)
const transform42 = new Transform({
  position: new Vector3(24.4, 7, 25),
  rotation: new Quaternion(0.5317531824111938, -0.47792768478393555, -0.553057849407196, -0.42772752046585083),
  scale: new Vector3(1.0000015497207642, 1.0000052452087402, 1.0000038146972656)
})
wallLight6.addComponentOrReplace(transform42)

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(9.5, 4.5, 16.5),
  rotation: new Quaternion(-1.8446852931893604e-15, 0.60710688829422, 8.429369557916289e-8, -0.7071067094802856),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
messageBubble.addComponentOrReplace(transform49)

const plainText = new Entity('plainText')
engine.addEntity(plainText)
plainText.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(16.5, 10.7, 10.3),
  rotation: new Quaternion(-1.526169564802695e-15, 1, -1.1920928244535389e-7, -2.9802322387695312e-8),
  scale: new Vector3(5.0000004768371582, 5, 4.0000004768371582)
})
plainText.addComponentOrReplace(transform50)





script1.spawn(ropeLight, {"startOn":true,"clickable":true,"onActivate":[{"entityName":"ropeLight","actionId":"activate","values":{}}],"onDeactivate":[{"entityName":"ropeLight","actionId":"activate","values":{}}]}, createChannel(channelId, ropeLight, channelBus))
// script2.spawn(messageBubble, {"text": repliedMessage,"fontSize":15}, createChannel(channelId, messageBubble, channelBus))
script3.spawn(plainText, {"text":"Gupshup Bank","font":"SF_Heavy","color":"#3A3B3C"}, createChannel(channelId, plainText, channelBus))