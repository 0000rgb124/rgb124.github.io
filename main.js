import * as BABYLON from 'babylonjs';

// Get the canvas DOM element
var canvas = document.getElementById('renderCanvas');
// Load the 3D engine
var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
// CreateScene function that creates and return the scene
var createScene = function(){

  // BASIC SCENE
  var scene = new BABYLON.Scene(engine);

  // CAMERA SETUP
  var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      0,
      0,
      4,
      BABYLON.Vector3.Zero(),
      scene
  );
  camera.lowerAlphaLimit = Math.PI;
  camera.upperAlphaLimit = Math.PI * 2;
  camera.attachControl(canvas, false);

  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

  light.intensity = 0.15;

  // CORNER SHAPE LEFT

  const cornerShapeLeft = new BABYLON.TransformNode('cornerShapeLeft');

  const boxA = BABYLON.MeshBuilder.CreateBox("box", {
      size: 1,
      height: 0.999,
      width: 0.301
      }, 
      scene
  );
  const boxB = BABYLON.MeshBuilder.CreateBox("box", {
      size: 1,
      width: 0.301
      }, 
      scene
  );
  boxB.rotation.y = Math.PI / 2;
  boxB.position.x = 0.35;
  boxB.position.z = 0.35;

  [boxA, boxB].forEach(mesh => {
    // leave meshes already parented to maintain model hierarchy:
    if (!mesh.parent) {
      mesh.parent = cornerShapeLeft
    }
  })
  
  cornerShapeLeft.position.x = -0.75;
  cornerShapeLeft.position.z = 0.4;

  // CORNER SHAPE RIGHT

  const cornerShapeRight = new BABYLON.TransformNode('cornerShapeRight');

  const boxC = BABYLON.MeshBuilder.CreateBox("box", {
      size: 1,
      width: 0.301,
      height: 0.999,
      }, 
      scene
  );
  const boxD = BABYLON.MeshBuilder.CreateBox("box", {
      size: 1,
      width: 0.301
      }, 
      scene
  );
  boxD.rotation.y = Math.PI / 2;
  boxD.position.x = 0.35;
  boxD.position.z = 0.35;

  [boxC, boxD].forEach(mesh => {
    // leave meshes already parented to maintain model hierarchy:
    if (!mesh.parent) {
      mesh.parent = cornerShapeRight
    }
  })
  
  cornerShapeRight.rotation.y =   Math.PI ;
  cornerShapeRight.position.x = 0.75;
  cornerShapeRight.position.z = -0.4;

  const box = BABYLON.MeshBuilder.CreateBox("box", {size: 1}, scene);

  // MATERIAL

  const pbr = new BABYLON.PBRSpecularGlossinessMaterial("pbr", scene);
  pbr.diffuseColor = new BABYLON.Color3(0.2, 0.2, 0.2, 1.0);
  pbr.specularColor = new BABYLON.Color3(0.21, 0.21, 0.21, 0.43);
  pbr.metallic = 0.5;
  pbr.roughness = 0.0;
  pbr.glossiness = 0.87; // Let the texture controls the value 
  pbr.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("https://raw.githubusercontent.com/0000rgb124/rgb124.github.io/gh-pages/assets/textures/Studio_Softbox_2Umbrellas_cube_specular.dds", scene);
  pbr.specularGlossinessTexture = new BABYLON.Texture("https://raw.githubusercontent.com/0000rgb124/rgb124.github.io/gh-pages/assets/textures/reflectivity.png", scene);

  box.material = pbr;
  boxA.material = pbr;
  boxB.material = pbr;
  boxC.material = pbr;
  boxD.material = pbr;


  scene.clearColor = new BABYLON.Color3(1,1,1);

  return scene;



}
// call the createScene function
var scene = createScene();
// run the render loop
engine.runRenderLoop(function(){
    scene.render();
});
// the canvas/window resize event handler
window.addEventListener('resize', function(){
    engine.resize();
});