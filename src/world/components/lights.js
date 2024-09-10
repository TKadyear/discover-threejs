import { DirectionalLight, AmbientLight,HemisphereLight } from 'three';

export const createLights = (color = "white") => {
  const hemisphereLight = new HemisphereLight("white","darkslategrey",5
  );
  const ambientLight = new AmbientLight(color, 1);
  const mainLight = new DirectionalLight(color, 8);
  mainLight.position.set(10, 10, 10);
  return { mainLight, ambientLight ,hemisphereLight};
}