
export class Resizer {
  constructor(container, camera, renderer) {
    this.#setSize(container,camera,renderer)
    window.addEventListener("resize", ()=>{
      this.#setSize(container,camera,renderer);
      this.onResize()
    })
  }
  #setSize (container,camera,renderer) {
    const width = container.clientWidth;
    const height =  container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width,height);
    renderer.setPixelRatio(window.devicePixelRatio);
  }
  onResize(){
  }
}