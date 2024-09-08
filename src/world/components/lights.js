import { DirectionalLight } from 'three';

export const createLights=(color="white")=>{
  const light = new DirectionalLight(color, 8);
  light.position.set(10, 10, 10);
  return light;
}