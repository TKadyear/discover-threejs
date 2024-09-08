import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
} from 'three';

export const createCube = (color="#ffffff")=>{
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshStandardMaterial({color});
  const cube = new Mesh(geometry,material);
  return cube;
}