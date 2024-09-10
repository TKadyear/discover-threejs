import { World } from '../world/world';


const createWorld = () => {
  const container = document.querySelector("#scene-container");
  const world = new World(container);
  return world;
}
const main = () => {
  const world = createWorld();
  world.start();
  // world.render();
  // const create = document.querySelector("#create-btn");
  // create.addEventListener('click', ()=>{
  //   createWorld()
  //   create.remove()  
  // })
  const reset = document.querySelector("#reset-btn");
  reset.addEventListener('click', () => {
    world.reset();
  });
  const save = document.querySelector("#save-btn");
  save.addEventListener('click', () => {
    world.save();
  });
}
document.addEventListener("DOMContentLoaded", main)
