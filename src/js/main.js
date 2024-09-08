import { World } from '../world/world';


const createWorld = () =>{
  const container = document.querySelector("#scene-container");
  const world = new World(container);
  world.render();
}
const main = ()=>{
  const btn = document.querySelector("#create-btn");
  btn.addEventListener('click', ()=>{
    createWorld()
    btn.remove()  
  })
}
document.addEventListener("DOMContentLoaded",main)
