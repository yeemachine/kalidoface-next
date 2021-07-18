import { Application } from '../../_snowpack/pkg/@pixi/app.js';
import { Ticker } from '../../_snowpack/pkg/@pixi/ticker.js';

import Live2D_Display from "../../_snowpack/pkg/pixi-live2d-display.js";
const { Live2DModel } = Live2D_Display;
Live2DModel.registerTicker(Ticker);
import {clamp} from '../utils/helpers.js'
import Vector from "../utils/vector.js";
import { get } from '../../_snowpack/pkg/svelte/store.js';
import { DIM } from '../stores.js';
import {userModel,hoverOver} from './character.svelte.js'
import {profiles} from './profiles.svelte.js'

import {p2pConnection} from '../connections/Peer.svelte.js';

export async function loadModel(data, stage) {
  //check data type
  if (typeof data !== "string" && typeof data !== "object") {
    return;
  }
  console.log(data)
  let model =
    typeof data === "string"
      ? await Live2DModel.from(data, { autoInteract: false })
      : typeof data === "object"
      ? await Live2DModel.from(data, { autoInteract: false })
      : null;
  stage.addChild(model);
  model.interactive = true;
  model.autoInteract = false;
  model.anchor.set(0.5, 0.5);
  return model;
}

export const updatePos = (
  model,
  { width = 0, height = 0, zoom = 0, position = { x: 0.5, y: 0.5 } } = {}
) => {
  if (!model) {
    return;
  }
  
  let size = Math.min(width, height) * 0.95 * (1 + zoom);
  
  if (width > height) {
    model.height = size;
    model.scale.x = model.scale.y;
  } else {
    model.width = size;
    model.scale.y = model.scale.x;
  }
  model.position.set(width * position.x, height * position.y);
};

export const destroyModel = async (profile) => {
  profile.destroying = true;
  profile.live2d.destroy();
  profile.live2d = null;
  profiles.set(get(profiles))
};

export const mapCubism2Params = (model,map={}) => {
  let params = model.internalModel.coreModel._$MT._$vo._$4S
  params.forEach(e=>{
    map[e._$wL.id] = {
      min:e._$TT,
      max:e._$LT,
      default:e._$FS
    }
  })
  return map
}

export const mapCubism4Params = (model,map={}) => {
  let params = model.internalModel.coreModel._model.parameters
  for (let i=0; i < params.count-1; i++){
    map[params.ids[i]] = {
      min:params.minimumValues[i],
      max:params.maximumValues[i],
      default:params.defaultValues[i]
    }
  }
  return map
}

//Custom value interpolation based on param
const supportedParams = {
    ParamAngleX : ((a)=>{return a.head.x*1.5}),
    ParamAngleY : ((a)=>{return a.head.y*1.5}),
    ParamAngleZ : ((a)=>{return a.head.z}),
    ParamBodyAngleZ : ((a)=>{return a.head.z*.3}),
    ParamBodyAngleY : ((a)=>{return a.head.y*.3}),
    ParamBodyAngleX : ((a)=>{return a.head.x*.3}),
    ParamMouthOpenY : ((a)=>{return a.mouth.y}),
    ParamMouthForm : ((a)=>{return 0.4 + 1 * a.mouth.x}),
    ParamEyeLSmile : ((a)=>{return 0.4 + 1 * a.mouth.x}),
    ParamEyeRSmile : ((a)=>{return 0.4 + 1 * a.mouth.x}),
    ParamEyeLOpen : ((a)=>{return a.eye.l}),
    ParamEyeROpen : ((a)=>{return a.eye.r}),
    ParamEyeBallX : ((a)=>{return a.pupil.x}),
    ParamEyeBallY : ((a)=>{return a.pupil.y}),
    ParamBrowLY : ((a)=>{return a.brow * .3 - 0.1 * (1 - (a.eye.l+a.eye.r)/2)}),
    ParamBrowRY : ((a)=>{return a.brow * .3 - 0.1 * (1 - (a.eye.l+a.eye.r)/2)}),
    ParamBrowLForm : ((a)=>{return a.brow * .3 - 0.1 * (1 - (a.eye.l+a.eye.r)/2)}),
    ParamBrowRForm : ((a)=>{return a.brow * .3 - 0.1 * (1 - (a.eye.l+a.eye.r)/2)}),
    // ParamBrowRAngle : ((a)=>{return  0 - .3 * a.mouth.x}),
    // ParamBrowLAngle : ((a)=>{return  0 - .3 * a.mouth.x}),
    ParamEyeBallForm : ((a)=>{return 0 - a.brow*.3}),
    PARAM_ANGLE_X : ((a)=>{return a.head.x*1.5}),
    PARAM_ANGLE_Y : ((a)=>{return a.head.y*1.5}),
    PARAM_ANGLE_Z : ((a)=>{return a.head.z}),
    PARAM_BODY_ANGLE_Z : ((a)=>{return a.head.z*.3}),
    PARAM_BODY_ANGLE_X : ((a)=>{return a.head.x*.3}),
    PARAM_MOUTH_OPEN_Y : ((a)=>{return a.mouth.y}),
    PARAM_MOUTH_FORM : ((a)=>{return 0.4 + 1 * a.mouth.x}),
    PARAM_EYE_L_OPEN : ((a)=>{return a.eye.l}),
    PARAM_EYE_R_OPEN : ((a)=>{return a.eye.r}),
    PARAM_EYE_L_SMILE : ((a)=>{return 0.4 + 1 * a.mouth.x}),
    PARAM_EYE_R_SMILE : ((a)=>{return 0.4 + 1 * a.mouth.x}),
    PARAM_EYE_BALL_X : ((a)=>{return a.pupil.x}),
    PARAM_EYE_BALL_Y : ((a)=>{return a.pupil.y}),
    PARAM_EYE_BALL_FORM : ((a)=>{return 0 - a.brow*.3}),
    PARAM_EYE_FORM : ((a)=>{return 0 - a.brow*.3}),
    PARAM_EYE_SIZE: ((a)=>{return 0 - a.brow*.3}),
    PARAM_BROW_L_Y : ((a)=>{return a.brow * .3 - 0.1 * (1 - (a.eye.l+a.eye.r)/2)}),
    PARAM_BROW_R_Y : ((a)=>{return a.brow * .3 - 0.1 * (1 - (a.eye.l+a.eye.r)/2)}) 
}

export const handleParams = (model, stats, id='user') => {
  let availableParams = []
  if(model._allParams){
    Object.keys(supportedParams).forEach(e=>{
      if(Object.keys(model._allParams).includes(e)){
         availableParams.push(e)
      }
    })
  }
  model.internalModel.eyeBlink = undefined;
  model.internalModel.on("afterMotionUpdate", function() {
    if(availableParams.length === 0){return}
    if(!get(profiles)[id].detected){return}
    
    if (typeof this.coreModel.setParameterValueById === "function") {
      //cubism 4.0
      availableParams.forEach(e=>{
        this.coreModel.setParameterValueById(e,supportedParams[e](stats))
      })
    } else if (typeof this.coreModel.setParamFloat === "function") {
      //cubism 2.0
      availableParams.forEach(e=>{
        this.coreModel.setParamFloat(e,supportedParams[e](stats))
      })
    }
  });
};

 export const handleDrag = (profile) => {
    let dx = 0;
    let dy = 0;
    let pinchDist = null
    if(profile.id === 'friend'){
      profile.live2d.interactive = false;
      return
    }
    profile.live2d.on('pointerdown', (e) => {
      let isMulti = !e.data.originalEvent.touches ? false
            : e.data.originalEvent.touches.length > 1 ? true
            : false
      profile.live2d.dragging = true;
      dx = e.data.global.x - profile.live2d.position.x
      dy = e.data.global.y - profile.live2d.position.y;
    });
    profile.live2d.on('pointerup', (e) => {
      let isTouch = e.data.originalEvent.touches
      if(isTouch){
        pinchDist = isTouch.length === 0 ? null : pinchDist
      }
      profile.live2d.dragging = false
      dx = 0
      dy = 0;
    });
    profile.live2d.on('pointermove', e => {
      if(profile.live2d.dragging){
        let isMulti = !e.data.originalEvent.touches ? false
            : e.data.originalEvent.touches.length > 1 ? true
            : false
        
        if(!isMulti){
          profile.position.x = (e.data.global.x - dx)/get(DIM).cw;
          profile.position.y = (e.data.global.y - dy)/get(DIM).ch;
        }else{
          let touch1 = e.data.originalEvent.touches[0]
          let touch2 = e.data.originalEvent.touches[1]
          let newPinchDist = Vector.distance(
            {x:touch1.clientX,y:touch1.clientY},
            {x:touch2.clientX,y:touch2.clientY},
            2
          )
          pinchDist = !pinchDist ? newPinchDist : pinchDist
          let pinchDiff = newPinchDist - pinchDist
          let scale = profile.zoom + pinchDiff * 0.005;
          scale = clamp(scale,-.5,10);
          profile.zoom = scale
          pinchDist = newPinchDist
        }
        
        profiles.set(get(profiles))
        
        if(get(p2pConnection)){
          get(p2pConnection).send({
            res:{
              positionX: profile.position.x,
              positionY: profile.position.y,
              zoom: profile.zoom
            },
            type:'position'
          })
        }
      }
    })
    profile.live2d.on('pointerover', e => {
      hoverOver.set(profile.id)
    })
    profile.live2d.on('pointerout', e => {
      hoverOver.set(null)
    })
  }
 
  export const handleWheel = (e)=> {
    let profile = get(profiles).user
    e.preventDefault();
    let scale = profile.zoom + event.deltaY * -0.001;
    scale = clamp(scale,-.5,10);
    profile.zoom = scale
    profiles.set(get(profiles))
    if(get(p2pConnection)){
      get(p2pConnection).send({
        res:{
          positionX: profile.position.x,
          positionY: profile.position.y,
          zoom: profile.zoom
        },
        type:'position'
      })
    }
  }