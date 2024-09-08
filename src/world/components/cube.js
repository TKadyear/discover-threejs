import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MathUtils,
  TextureLoader
} from 'three';

const createMaterial = (type = "basic", color = "#ffffff") => {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(
    '/textures/uv-test-bw.png',
    () => {
      console.log('Texture loaded successfully');
    },
    undefined,
    (err) => {
      console.error('An error occurred while loading the texture', err);
    }
  );

  const seletedMaterial = {
    basic: () => new MeshBasicMaterial({ color }),
    standard: () => new MeshStandardMaterial({ map: texture })
  }
  const referenceMaterial = seletedMaterial[type];
  const material = referenceMaterial();
  return material;
}
export const createCube = (type = "basic", color = "#ffffff") => {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = createMaterial(type, color);
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