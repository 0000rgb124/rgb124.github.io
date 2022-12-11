<template>
  <canvas id="babylon" ref="bjsCanvas" />
</template>

<style scoped>
#babylon {
  position: absolute;
  top: 0;
}
</style>

<script setup>
import {
  Engine,
  Scene,
  HemisphericLight,
  Vector3,
  Color3,
  Color4,
  ArcRotateCamera,
  Texture,
  CubeTexture,
  PBRMetallicRoughnessMaterial,
  SceneLoader
} from "@babylonjs/core";


import { OBJFileLoader } from 'babylonjs-loaders';

SceneLoader.RegisterPlugin(new OBJFileLoader())


// the variable name MUST match the ref value used in the html templte above
const bjsCanvas = ref(null);
let engine;
// the canvas is accessible only when the component is already mounted
onMounted(() => {
  const BJS_CANVAS_WIDTH = window.innerWidth;
  const BJS_CANVAS_HEIGHT = window.innerHeight;
  const BJS_CANVAS_ZINDEX = "-1";
  // you have to set the width on the canvas object
  // setting the width and height using css or canvas.style
  // only stretches the canvas to the desired dimensions
  bjsCanvas.value.width = BJS_CANVAS_WIDTH;
  bjsCanvas.value.height = BJS_CANVAS_HEIGHT;
  bjsCanvas.value.style.zIndex = BJS_CANVAS_ZINDEX;
  // do not forget to use the .value property on the ref object
  // everywhere you need to access the HTMLCanvasElement
  engine = new Engine(bjsCanvas.value);
  const scene = new Scene(engine);
  // create a scene
  createScene(scene, bjsCanvas.value);
  // the render loop is actually rendering the scene
  setupRenderLoop(engine, scene);
  window.addEventListener("resize", onWindowResize);
});

const onWindowResize = () => {
  bjsCanvas.value.width = window.innerWidth;
  bjsCanvas.value.height = window.innerHeight;
  if (engine) engine.resize();
};

const cleanup = () => {
  window.removeEventListener("resize", onWindowResize);
};

onUnmounted(() => {
  cleanup();
});

const setupRenderLoop = (engine, scene) => {
  engine.runRenderLoop(() => {
    scene.render();
  });
};

const createScene = (scene, canvas) => {
  // setting up a basic scene
  const camera = new ArcRotateCamera(
    'Camera',
    0.75,
    1.25,
    8,
    Vector3.Zero(),
    scene
  );

  camera.lowerRadiusLimit = 4;
  camera.upperRadiusLimit = 15;
  camera.attachControl(canvas, false);
  camera.useAutoRotationBehavior = true;
  scene.clearColor = new Color4(1, 1, 1, 1);

  const light = new HemisphericLight(
    'light',
    new Vector3(1, 1, 0),
    scene
  );

  light.intensity = 0.25;

  const pbr = new PBRMetallicRoughnessMaterial('pbr', scene);

  pbr.diffuseColor = new Color3(0, 0, 0, 0.73);
  pbr.specularColor = new Color3(0.21, 0.21, 0.21, 0.83);
  pbr.metallic = 0.8; // set to 1 to only use it from the metallicRoughnessTexture
  pbr.roughness = 0.25; // set to 1 to only use it from the metallicRoughnessTexture
  pbr.metallicRoughnessTexture = new Texture(
    `https://raw.githubusercontent.com/0000rgb124/rgb124.github.io/main/cinema4d/texture/ROUGH_00000.jpg`,
    scene
  );

  pbr.environmentTexture = CubeTexture.CreateFromPrefilteredData(
    'https://raw.githubusercontent.com/0000rgb124/rgb124.github.io/main/cinema4d/texture/environment.env',
    scene
  );


  const textureFiles = [];

  for (let i = 0; i < 76; i++) {
    textureFiles.push(
      new Texture(
        `texture/emissive/Emission_v2_000${i
          .toString()
          .padStart(2, '0')}.jpg`,
        scene
      )
    );
  }

  let counter = 0;
  let currentTexture = textureFiles[counter];

  pbr.baseTexture = currentTexture;

  const logo = SceneLoader.Append(
    '',
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

  let iFrame = 0;

  scene.registerBeforeRender(() => {
    pbr.baseTexture = textureFiles[counter];
    if (iFrame % 2 == 0) counter++;
    iFrame++;
    if (counter == 76) counter = 0;
  });

  scene.onPointerDown = (event, pickResult) => {
    console.log(event, pickResult);
  };


};



</script>