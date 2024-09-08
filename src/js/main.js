import { World } from '../world/world';


const createWorld = () =>{
  const container = document.querySelector("#scene-container");
  const world = new World(container);
  // world.render();
  world.start();
}
const main = ()=>{
  // const btn = document.querySelector("#create-btn");
  // btn.addEventListener('click', ()=>{
    //   createWorld()
    //   btn.remove()  
    // })
    createWorld()
}
document.addEventListener("DOMContentLoaded",main)
