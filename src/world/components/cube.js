import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from 'three';

export const createCube = (type = "basic", color = "#ffffff") => {
  const seletedMaterial = {
    basic: () => new MeshBasicMaterial({color}),
    standard: () => new MeshStandardMaterial({color})
  }
  const geometry = new BoxGeometry(2, 2, 2);
  const referenceMaterial = seletedMaterial[type];
  const material = referenceMaterial();
  const cube = new Mesh(geometry, material);
  return cube;
}