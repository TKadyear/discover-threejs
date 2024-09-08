import { WebGLRenderer } from 'three';

export const createRenderer = ()=>{
  const renderer = new WebGLRenderer();
  // turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;
  return renderer;
}