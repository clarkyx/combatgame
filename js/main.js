var Game = function(){
  var self = this;
  var width, height, fov, aspect, near, far

  width = 900;
  height = 600;
  aspect = width / height;

  fov = 45;
  near = 0.1;
  far = 10000;
  self.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  self.camera.lookAt(new THREE.Vector3(0,0,0));
  self.camera.position.y = 5;
  self.camera.position.z = 30;

  self.scene = new THREE.Scene();
  self.scene.add(self.camera);

  self.renderer = new THREE.WebGLRenderer();
  self.renderer.setSize(width, height);
  self.renderer.setClearColor("#000000");
  document.querySelector("#c").appendChild(self.renderer.domElement);

  var light = new THREE.DirectionalLight(0xFFFFFF, 0.75);
  light.position.set(0,200,40);
  self.scene.add(light);


  var geometry = new THREE.BoxGeometry(10,10,10);
  var material = new THREE.MeshPhongMaterial({color: 0xff0000});
  var mesh = new THREE.Mesh(geometry, material);
  self.mesh = mesh;
  self.scene.add(self.mesh);
}

Game.prototype.render = function(delta){
  var self = this;
  self.mesh.rotation.x += 0.01;
  self.renderer.render(self.scene, self.camera);
}


window.animate = function(){
  requestAnimationFrame(window.animate);
  window.game.render();
}


var game = new Game();
window.animate()
