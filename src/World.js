// HelloPoint1.js (c) 2012 matsuda
// Vertex shader program

var VSHADER_SOURCE = 
  `
  precision mediump float;
  attribute vec4 a_Position;
  attribute vec2 a_UV;
  varying vec2 v_UV;
  uniform mat4 u_ModelMatrix;
  uniform mat4 u_GlobalRotationMatrix;
  uniform mat4 u_ViewMatrix;
  uniform mat4 u_ProjectionMatrix;
  void main() {
    gl_Position = u_ProjectionMatrix * u_ViewMatrix * u_GlobalRotationMatrix * u_ModelMatrix * a_Position;
    v_UV = a_UV;
  }`;

// Fragment shader program
var FSHADER_SOURCE =
  `
  precision mediump float;
  varying vec2 v_UV; 
  uniform vec4 u_FragColor;
  uniform sampler2D u_Sampler0;
  uniform sampler2D u_Sampler1;
  uniform sampler2D u_Sampler2;
  uniform sampler2D u_Sampler3;
  uniform sampler2D u_Sampler4;
  uniform int u_whichTexture;
  void main() {
    if(u_whichTexture == -2) {
      gl_FragColor = u_FragColor;
    } else if(u_whichTexture == -1) {
      gl_FragColor = vec4(v_UV, 1.0, 1.0); 
    } else if(u_whichTexture == 0) {
      gl_FragColor = texture2D(u_Sampler0, v_UV);
    } else if(u_whichTexture == 1) {
      gl_FragColor = texture2D(u_Sampler1, v_UV);
    }
    else if(u_whichTexture == 2) {
      gl_FragColor = texture2D(u_Sampler2, v_UV);
    } 
    else if(u_whichTexture == 3) {
      gl_FragColor = texture2D(u_Sampler3, v_UV);
    }
    else if(u_whichTexture == 4) {
      gl_FragColor = texture2D(u_Sampler4, v_UV);
    }  
    else {
      gl_FragColor = vec4(1, 0.2, 0.2, 1); 
    }
    
    
  }`;

let canvas;
let gl;
let a_Position; 
let a_UV;
let u_ModelMatrix;
let u_GlobalRotationMatrix;
let u_ProjectionMatrix;
let u_ViewMatrix;
let u_Sampler0;
let u_Sampler1;
let u_Sampler2;
let u_Sampler3;
let u_Sampler4;
let u_whichTexture;
let size = 10;
let camera;
let segments = 10;
let g_rotationAngle = {
  x: 0,
  y: 0
};
let u_FragColor;
let rgba = {
  'red' : 1,
  'green' : 1,
  'blue' : 1,
  'alpha' : 1
}
let g_animation = true;
let shiftAnim = false;
let currentBlock = 1;


function setupWebGL() {
  // Retrieve <canvas> element
  canvas = document.getElementById('webgl');

  // Get the rendering context for WebGL
  // gl = getWebGLContext(canvas);
  gl = canvas.getContext("webgl", { preserveDrawingBuffer: true})
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL');
    return;
  }

  gl.enable(gl.DEPTH_TEST)
}

function connectVariablesToGLSL() {
  // Initialize shaders
  if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
    console.log('Failed to intialize shaders.');
    return;
  }

  a_Position = gl.getAttribLocation(gl.program, 'a_Position');
  if(a_Position < 0) {
    console.log('Failed to get the storage location of a_Position');
    return;
  }

  a_UV = gl.getAttribLocation(gl.program, 'a_UV') 
  if(a_UV < 0) {
    console.log('Failed to get the storage location of a_UV');
    return;
  }

  u_ModelMatrix = gl.getUniformLocation(gl.program, 'u_ModelMatrix');
  if(u_ModelMatrix < 0) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }

  u_GlobalRotationMatrix = gl.getUniformLocation(gl.program, 'u_GlobalRotationMatrix');
  if(u_GlobalRotationMatrix < 0) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }

  u_ProjectionMatrix = gl.getUniformLocation(gl.program, 'u_ProjectionMatrix');
  if(u_ProjectionMatrix < 0) {
    console.log('Failed to get the storage location of u_ProjectionMatrix');
    return;
  }

  u_ViewMatrix = gl.getUniformLocation(gl.program, 'u_ViewMatrix');
  if(u_ViewMatrix < 0) {
    console.log('Failed to get the storage location of u_ViewMatrix');
    return;
  }

  u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor');
  if(u_FragColor < 0) {
    console.log('Failed to get the storage location of u_FragColor');
    return;
  }

  u_Sampler0 = gl.getUniformLocation(gl.program, 'u_Sampler0');
  if (!u_Sampler0) {
    console.log('Failed to get the storage location of u_Sampler');
    return false;
  }

  u_Sampler1 = gl.getUniformLocation(gl.program, 'u_Sampler1');
  if (!u_Sampler1) {
    console.log('Failed to get the storage location of u_Sampler1');
    return false;
  }

  u_Sampler2 = gl.getUniformLocation(gl.program, 'u_Sampler2');
  if (!u_Sampler2) {
    console.log('Failed to get the storage location of u_Sampler2');
    return false;
  }

  u_Sampler3 = gl.getUniformLocation(gl.program, 'u_Sampler3');
  if (!u_Sampler3) {
    console.log('Failed to get the storage location of u_Sampler3');
    return false;
  }

  u_Sampler4 = gl.getUniformLocation(gl.program, 'u_Sampler4');
  if (!u_Sampler4) {
    console.log('Failed to get the storage location of u_Sampler4');
    return false;
  }

  u_whichTexture = gl.getUniformLocation(gl.program, 'u_whichTexture');
  if (!u_whichTexture) {
    console.log('Failed to get the storage location of u_whichTexture');
    return false;
  }

  //Set an initial avalue for this matrix to identify
  var identityM = new Matrix4();
  gl.uniformMatrix4fv(u_ModelMatrix, false, identityM.elements)

  //Set an initial avalue for the rotation matrix to identify
  gl.uniformMatrix4fv(u_ModelMatrix, false, new Matrix4().elements)

}

function initTextures() {
  
  var image = new Image();  // Create the image object
  if (!image) {
    console.log('Failed to create the image object');
    return false;
  }
  // Register the event handler to be called on loading an image
  image.onload = function(){ sendImageToTEXTUREn(0, image); };
  // Tell the browser to load an image
  image.src = './mats/grass.png'

  var tile = new Image();
  if (!tile) {
    console.log('Failed to create the image object');
    return false;
  }
  tile.onload = function(){ sendImageToTEXTUREn(1, tile); };
  tile.src = './mats/grass.png'

  var plank = new Image();
  if (!plank) {
    console.log('Failed to create the plank object');
    return false;
  }
  plank.onload = function(){ sendImageToTEXTUREn(2, plank); };
  plank.src = './mats/plank.png'

  var log = new Image();
  if (!log) {
    console.log('Failed to create the log object');
    return false;
  }
  log.onload = function(){ sendImageToTEXTUREn(3, log); };
  log.src = './mats/log.jpg'

  var leaves = new Image();
  if (!leaves) {
    console.log('Failed to create the leaves object');
    return false;
  }
  leaves.onload = function(){ sendImageToTEXTUREn(4, leaves); };
  leaves.src = './mats/leaves.jpg'

  return true;
}

function sendImageToTEXTUREn(n, image) {
  

  if(n === 0) {
    var texture = gl.createTexture();   // Create a texture object
    if (!texture) {
      console.log('Failed to create the texture object');
      return false;
    }
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // Flip the image's y axis
    // Enable texture unit0
    gl.activeTexture(gl.TEXTURE0);
    // Bind the texture object to the target
    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Set the texture parameters
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // Set the texture image
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    
    // Set the texture unit 0 to the sampler
    gl.uniform1i(u_Sampler0, 0);
  }

  else if(n === 1) {
    var texture1 = gl.createTexture();   // Create a texture object
    if (!texture1) {
      console.log('Failed to create the texture object');
      return false;
    }
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // Flip the image's y axis
    // Enable texture unit0
    gl.activeTexture(gl.TEXTURE1);
    // Bind the texture object to the target
    gl.bindTexture(gl.TEXTURE_2D, texture1);

    // Set the texture parameters
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // Set the texture image
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
    
    // Set the texture unit 0 to the sampler
    gl.uniform1i(u_Sampler1, 1);
  }
  else if (n === 2) {
    var texture2 = gl.createTexture();   // Create a texture object
    if (!texture2) {
      console.log('Failed to create the texture object');
      return false;
    }
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // Flip the image's y axis
    // Enable texture unit0
    gl.activeTexture(gl.TEXTURE2);
    // Bind the texture object to the target
    gl.bindTexture(gl.TEXTURE_2D, texture2);

    // Set the texture parameters
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // Set the texture image
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    
    // Set the texture unit 0 to the sampler
    gl.uniform1i(u_Sampler2, 2);
  }
  else if (n === 3) {
    var texture3 = gl.createTexture();   // Create a texture object
    if (!texture3) {
      console.log('Failed to create the texture object');
      return false;
    }
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // Flip the image's y axis
    // Enable texture unit0
    gl.activeTexture(gl.TEXTURE3);
    // Bind the texture object to the target
    gl.bindTexture(gl.TEXTURE_2D, texture3);

    // Set the texture parameters
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // Set the texture image
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    
    // Set the texture unit 0 to the sampler
    gl.uniform1i(u_Sampler3, 3);
  }
  else if (n === 4) {
    var texture4 = gl.createTexture();   // Create a texture object
    if (!texture4) {
      console.log('Failed to create the texture object');
      return false;
    }
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // Flip the image's y axis
    // Enable texture unit0
    gl.activeTexture(gl.TEXTURE4);
    // Bind the texture object to the target
    gl.bindTexture(gl.TEXTURE_2D, texture4);

    // Set the texture parameters
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // Set the texture image
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    
    // Set the texture unit 0 to the sampler
    gl.uniform1i(u_Sampler4, 4);
  }
  

  console.log('finished loadTexture');

}
let sky;
function main() {
  //Set up canvas and gl variables
  setupWebGL();

  //Set up GLSL shader programs and connect GLSL Variables
  connectVariablesToGLSL();

  initTextures()
  initMap();
  camera = new Camera()

  canvas.onkeydown=function(ev) {
    // console.log(ev)
    keyPressed(ev);
  }

  canvas.onkeyup=function(ev) {
    // console.log(ev)
    keyReleased(ev);
  }

  canvas.onmousedown = async function(ev) {
    await canvas.requestPointerLock({
      unadjustedMovement: true,
    });
    prevX = ev.clientX
    prevY = ev.clientY
    console.log(ev)
    if(ev.shiftKey) {
      shiftAnim = !shiftAnim
    }
    if(ev.button === 2) placeBlock();
    if(ev.button === 0) destroyBlock();
    // console.log(prevX)
  }
  canvas.onmousemove = function(ev) {
    // console.log(ev);
    camera.rotateCamera(ev.movementX, ev.movementY);
    // if(ev.buttons == 1) {
    //   click(ev);
    // }
  }

  // Specify the color for clearing <canvas>
  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);
  // renderScene();
  requestAnimationFrame(tick)
}



let g_cubes = [];
function placeBlock() {
  let forwardVec = new Vector3().set(camera.at);
  forwardVec.sub(camera.eye)
  forwardVec.normalize();
  forwardVec.mul(3);
  forwardVec.add(camera.eye)
  let block = {
    'x':Math.round(forwardVec.elements[0]),
    'y':Math.round(forwardVec.elements[1]),
    'z':Math.round(forwardVec.elements[2]),
    'texture': currentBlock
  }
  console.log(currentBlock)
  for(let testBlock of g_map){
    // console.log(testBlock)
    if(block.x === testBlock.x && block.y === testBlock.y && block.z === testBlock.z) {
      console.log("Block here already")
      
      return;
    }
  }
  g_map.push(block);
  let cube = new Cube(new Matrix4(), [1,1,1,1], block.texture)
  // cube.matrix.translate(cube.x,cube.y,cube.z);
  cube.matrix.translate(block.x, block.y, block.z);
  cube.matrix.translate(-0.5,-0.5,-0.5);
  g_cubes.push(cube);
  
  console.log("Block at: ", g_map[g_map.length-1].x, g_map[g_map.length-1].y, g_map[g_map.length-1].z, )
}

function destroyBlock() {
  let forwardVec = new Vector3().set(camera.at);
  forwardVec.sub(camera.eye)
  forwardVec.normalize();
  forwardVec.mul(3);
  forwardVec.add(camera.eye)
  let block = {
    'x':Math.round(forwardVec.elements[0]),
    'y':Math.round(forwardVec.elements[1]),
    'z':Math.round(forwardVec.elements[2]),
    'texture': 2
  }
  for(let i = 0; i < g_map.length; i++){
    testBlock = g_map[i];
    if(block.x === testBlock.x && block.y === testBlock.y && block.z === testBlock.z) {
      g_map.splice(i,1);
      g_cubes.splice(i,1);
      return;
    }
  }
}

function drawMap() {
  g_cubes.forEach(function(block) {
    block.renderfast()
  })
}
function renderScene() {
  //Set an initial avalue for this matrix to identify


  gl.uniformMatrix4fv(u_ProjectionMatrix, false, camera.projectionMatrix.elements);
  gl.uniformMatrix4fv(u_ViewMatrix, false, camera.viewMatrix.elements);

  var globalRotMat = new Matrix4().rotate(g_rotationAngle.x, 0, 1, 0);
  globalRotMat.rotate(g_rotationAngle.y, 1, 0, 0)
  gl.uniformMatrix4fv(u_GlobalRotationMatrix, false, globalRotMat.elements)


  // Clear <canvas>
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.clear(gl.DEPTH_BUFFER_BIT);

  
  sky.renderfast();


  drawMap();


  let forwardVec = new Vector3().set(camera.at);
  forwardVec.sub(camera.eye)
  forwardVec.normalize();
  forwardVec.mul(3);
  
  let lookingCube = new Cube(new Matrix4().set(globalRotMat), [1,1,1,1], -2)
  lookingCube.matrix.translate(Math.round(camera.eye.elements[0] + forwardVec.elements[0]), Math.round(camera.eye.elements[1] + forwardVec.elements[1]), Math.round(camera.eye.elements[2] + forwardVec.elements[2]))
  lookingCube.matrix.translate(-0.5, -0.5, -0.5)
  lookingCube.renderfast();

  // let cube1 = new Cube(new Matrix4().set(globalRotMat), [1,1,1,1], 1)
  // cube1.matrix.translate(0, -1, 0)
  // cube1.matrix.scale(51,1,51)
  // cube1.matrix.translate(-0.5, -0.5, -0.5)
  // cube1.renderfast(); 
  
  drawMap();
  renderSpongeBob();
}



let origin_trans = {
  transX: 0,
  transY: 0,
  transZ: 0,
  rotX : 0,
  rotY: 0,
  scaleX: 1,
  scaleY: 1,
  scaleZ: 1
}

let speed = 0.01
function updateAnimationAngles() {
  // if(g_animation && shiftAnim) {
    
  // }
  // else if (g_animation) {
  // }
  camera.moveCamera();
  camera.panLeft();
  camera.panRight();
}


let g_startTime = performance.now()/1000;
let g_seconds=performance.now()/1000.0-g_startTime;
let reqFrame;
let then = 0;
function tick() {
  camera.updateDeltaTime();
  var now = performance.now()/1000;
  if(!g_animation) {
    cancelAnimationFrame(reqFrame);
    return;
  }
  g_seconds=now-g_startTime
  updateAnimationAngles();
  renderScene();
  let dt = now - then
  then = now;
  document.getElementById("fps").innerHTML = "FPS: " + 1/dt
  reqFrame = requestAnimationFrame(tick);
  
}

let prevX = 0;
let prevY = 0;


function click(ev) {
    g_rotationAngle.x += (ev.movementX) * sens
    g_rotationAngle.y += (ev.movementY) * sens
    prevX = ev.clientX
    prevY = ev.clientY
    renderScene();
}

let forward = false;
let back = false;
let right = false;
let left = false;
let up = false;
let down = false;
let panR = false;
let panL = false; 
function keyPressed(ev) {
  switch(ev.key) {
    case 'a':
      left = true;
      break;
    case 'd':
      right = true;
      break;
    case 'w':
      forward = true;
      break;
    case 's':
      back = true;
      break; 
    case ' ':
      up = true;
      break;
    case 'r':
      down = true;
      break;
    case 'q':
      panL = true;
      break;
    case 'e':
      panR = true;
      break;
  }  

  if(/^[0-9]*$/.test(ev.key)) {
    console.log(Number(ev.key))
    currentBlock = Number(ev.key)
  }
  // console.log([forward, left, right, back]);
}

function keyReleased(ev) {
  switch(ev.key) {
    case 'a':
      left = false;
      break;
    case 'd':
      right = false;
      break;
    case 'w':
      forward = false;
      break;
    case 's':
      back = false;
      break; 
    case ' ':
      up = false;
      break;
    case 'r':
      down = false;
      break;
    case 'q':
      panL = false;
      break;
    case 'e':
      panR = false;
      break;
  }  
  // console.log([forward, left, right, back]);
}

let sizeDisplay = document.getElementById('size');
function handleSizeChange(ev) {
  size = ev.target.value
  sizeDisplay.innerHTML = "Size: " + size
}



function handleSegmentsChange(ev) {
  segments = ev.target.value
}

function handleRotationChange(ev) {
  g_rotationAngle = {
    ...g_rotationAngle,
    [ev.target.id] : ev.target.value
  }
  renderScene();
}

function clearCanvas() {
  renderScene();
}

function handleAnimationToggle(ev) {
  
  g_animation = ev.target.checked
  // console.log(g_animation)
  if(g_animation) {
    requestAnimationFrame(tick)
  }
}

function handleSensChange(ev) {
  camera.sens = ev.target.value
  document.getElementById("sens").innerHTML = "Sensitivity: " + camera.sens
}

function normalizeColor(r, g, b) {
  return [r/255.0, g/255.0, b/255.0, 1]
}