import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MathUtils
} from 'three';

export const createCube = (type = "basic", color = "#ffffff") => {
  const seletedMaterial = {
    basic: () => new MeshBasicMaterial({ color }),
    standard: () => new MeshStandardMaterial({ color })
  }
  const geometry = new BoxGeometry(2, 2, 2);
  const referenceMaterial = seletedMaterial[type];
  const material = referenceMaterial();
  const cube = new Mesh(geometry, material);

  const radiansPerSecond = MathUtils.degToRad(30);
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}