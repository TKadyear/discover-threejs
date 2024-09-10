import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { createRenderer } from './systems/renderer.js';
import { createControls } from './systems/controls.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

export  class World {
  // 1. Create an instance of the World app
  #camera;
  #scene;
  #renderer;
  #loop;
  #controls;

  
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
    this.container.append(this.#renderer.domElement);
    this.#controls =createControls(this.#camera,this.#renderer.domElement);
    this.#init();
  }
  
  #init(){
    
    const cube = createCube("basic","purple");
    cube.position.set(2,0,2)
    cube.rotation.set(-1, -0.1, 0.8);
    const secondCube = createCube("standard");
    secondCube.position.set(-2,0,2)
    secondCube.rotation.set(-1, -0.1, 0.8);
    const light = createLights("lightyellow");
    light.position.set(1,10,5);
    
    this.#scene.add(cube, light);
    this.#loop.updatables.push(this.#controls);
    
    this.#scene.add(secondCube);

    const resizer = new Resizer(this.container, this.#camera, this.#renderer);
    
    this.#controls.addEventListener('change', () => {
      this.render();
    });

  }
  start() {
    this.#loop.start();
  }
  save(){
    this.#controls.saveState();
  }
  reset(){
    this.#controls.reset();
  }
  stop() {
    this.#loop.stop();
  }
  // 2. Render the scene
  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }
}
  
