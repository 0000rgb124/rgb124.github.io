import * as BABYLON from 'babylonjs';

import 'babylonjs-loaders';

BABYLON.DefaultLoadingScreen.prototype.displayLoadingUI = function () {
  if (document.getElementById('customLoadingScreenDiv')) {
    // Do not add a loading screen if there is already one
    document.getElementById('customLoadingScreenDiv').style.display = 'initial';
    return;
  }
  this._loadingDiv = document.createElement('div');
  this._loadingDiv.id = 'customLoadingScreenDiv';
  this._loadingDiv.innerHTML = 'scene is currently loading';
  var customLoadingScreenCss = document.createElement('style');
  customLoadingScreenCss.type = 'text/css';
  customLoadingScreenCss.innerHTML = `
  #customLoadingScreenDiv{
      background-color: #BB464Bcc;
      color: white;
      font-size:50px;
      text-align:center;
  }
  `;
  document.getElementsByTagName('head')[0].appendChild(customLoadingScreenCss);
  this._resizeLoadingUI();
  window.addEventListener('resize', this._resizeLoadingUI);
  document.body.appendChild(this._loadingDiv);
};

BABYLON.DefaultLoadingScreen.prototype.hideLoadingUI = function () {
  document.getElementById('customLoadingScreenDiv').style.display = 'none';
  console.log('scene is now loaded');
};

let iFrame = 0;

// Get the canvas DOM element
var canvas = document.getElementById('renderCanvas');
// Load the 3D engine
var engine = new BABYLON.Engine(canvas, true, {
  preserveDrawingBuffer: true,
  stencil: true,
});
// CreateScene function that creates and return the scene
var createScene = function () {
  // BASIC SCENE
  var scene = new BABYLON.Scene(engine);
  // CAMERA SETUP
  var camera = new BABYLON.ArcRotateCamera(
    'Camera',
    0,
    0,
    8,
    BABYLON.Vector3.Zero(),
    scene
  );
  // camera.lowerAlphaLimit = Math.PI;
  // camera.upperAlphaLimit = Math.PI * 2;
  camera.attachControl(canvas, false);

  const light = new BABYLON.HemisphericLight(
    'light',
    new BABYLON.Vector3(0, 1, 0),
    scene
  );

  light.intensity = 0.85;

  const pbr = new BABYLON.PBRMetallicRoughnessMaterial('pbr', scene);
  pbr.diffuseColor = new BABYLON.Color3(0, 0, 0, 0.73);
  pbr.specularColor = new BABYLON.Color3(0.21, 0.21, 0.21, 0.83);
  pbr.metallic = 1.0; // set to 1 to only use it from the metallicRoughnessTexture
  pbr.roughness = 1.0; // set to 1 to only use it from the metallicRoughnessTexture
  pbr.metallicRoughnessTexture = new BABYLON.Texture(
    `https://raw.githubusercontent.com/0000rgb124/rgb124.github.io/main/cinema4d/texture/ROUGH_00000.jpg`,
    scene
  );

  // pbr.reflectionTexture = new HDRCubeTexture(
  //   'https://raw.githubusercontent.com/0000rgb124/rgb124.github.io/main/cinema4d/texture/dark_dramatic_key_a.hdr',
  //   scene,
  //   512,
  //   false,
  //   true,
  //   false,
  //   true
  // );

  pbr.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData(
    'https://raw.githubusercontent.com/0000rgb124/rgb124.github.io/main/cinema4d/texture/environment.env',
    scene
  );

  const textureFiles = [];

  for (let i = 0; i < 56; i++) {
    textureFiles.push(
      new BABYLON.Texture(
        `https://raw.githubusercontent.com/0000rgb124/rgb124.github.io/main/cinema4d/texture/emissive/emi2k_000${i
          .toString()
          .padStart(2, '0')}.jpg`,
        scene
      )
    );
    console.log(i + ' texture loaded');
  }

  let counter = 0;
  let currentTexture = textureFiles[counter];

  pbr.baseTexture = currentTexture;

  const logo = BABYLON.SceneLoader.Append(
    'https://raw.githubusercontent.com/0000rgb124/rgb124.github.io/main/cinema4d/',
    'modelinglogo2.obj',
    scene,
    (scene) => {
      scene.meshes.forEach((m) => {
        m.material = pbr;
      });
    }
  );

  logo.material = pbr;

  scene.clearColor = new BABYLON.Color3(1, 1, 1);

  scene.registerBeforeRender(() => {
    pbr.baseTexture = textureFiles[counter];
    if (iFrame % 2 == 0) counter++;
    iFrame++;
    if (counter == 55) counter = 0;
  });

  scene.onPointerDown = (event, pickResult) => {
    console.log(event, pickResult);
  };

  return scene;
};
// call the createScene function
var scene = createScene();
// run the render loop
engine.runRenderLoop(function () {
  scene.render();
});
// the canvas/window resize event handler
window.addEventListener('resize', function () {
  engine.resize();
});
