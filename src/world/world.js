import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

export  class World {
  // 1. Create an instance of the World app
  #camera;
  #scene;
  #renderer;
  #loop;

  
  constructor(container) {
    this.container =container
    const fov = 35; // AKA Field of View
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1; // the near clipping plane
    const far = 100; 
    this.#camera= createCamera(fov,aspect,near,far);
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#loop= new Loop(this.#camera, this.#scene, this.#renderer);
    
    this.#init();
  }
  
  #init(){
    this.container.append(this.#renderer.domElement);
    
    const cube = createCube("basic","purple");
    cube.position.set(2,0,2)
    cube.rotation.set(-1, -0.1, 0.8);
    
    this.#loop.updatables.push(cube);
    const secondCube = createCube("standard","#000000");
    secondCube.position.set(-2,0,2)
    secondCube.rotation.set(-1, -0.1, 0.8);
    const light = createLights("lightyellow");
    light.position.set(1,10,5);
    
    this.#loop.updatables.push(secondCube);
    this.#scene.add(cube, light);


    this.#scene.add(secondCube);
  
    const resizer = new Resizer(this.container, this.#camera, this.#renderer);
    
  }
  start() {
    this.#loop.start();
  }
  
  stop() {
    this.#loop.stop();
  }
  // 2. Render the scene
  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}
  
