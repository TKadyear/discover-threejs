import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
} from 'three';

export const createCube = (color="#ffffff")=>{
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshBasicMaterial({color});
  const cube = new Mesh(geometry,material);
  return cube;
}