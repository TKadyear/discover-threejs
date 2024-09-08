import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

export  class World {
  // 1. Create an instance of the World app
  #camera;
  #scene;
  #renderer;

  
  constructor(container) {
    const fov = 35; // AKA Field of View
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1; // the near clipping plane
    const far = 100; 
    this.#camera= createCamera(fov,aspect,near,far);
    this.#scene = createScene();
    this.#renderer = createRenderer();
    
    container.append(this.#renderer.domElement);
    
    const cube = createCube();
    cube.position.set(1,1,1)
    const anotherCube = createCube("#f5f5dc");

    this.#scene.add(cube);
    this.#scene.add(anotherCube);

    const resizer = new Resizer(container, this.#camera, this.#renderer);
  }
  
  // 2. Render the scene
  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}
  
