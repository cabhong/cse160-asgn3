let spongeAnim = {
    bodyTransY: 0,
    leftUpperArmRotX: 0,
    leftUpperArmRotY: 0,
    leftLowerArmRotX: 0,
    leftLowerArmRotY: 0,
    rightUpperArmRotX: 0,
    rightUpperArmRotY: 0,
    rightLowerArmRotX: 0,
    rightLowerArmRotY: 0,
  
    leftUpperLegRotX: 0,
    leftUpperLegRotY: 0,
    leftLowerLegRotX: 0,
    leftLowerLegRotY: 0,
    rightUpperLegRotX: 0,
    rightUpperLegRotY: 0,
    rightLowerLegRotX: 0,
    rightLowerLegRotY: 0,
  
    leftHandRotX: 0,
    leftHandRotY: 0,
  
    rightHandRotX: 0,
    rightHandRotY: 0,
  
  
  
    eyeScaleY: 1,
    rightEyeScaleY: 1,

    originX: 16,
    originZ: 16,
    originRot: 0
  }

function animSpongeBob() {
  spongeAnim.bodyTransY = Math.abs(((0.1*Math.sin(6*g_seconds))))
  spongeAnim.leftUpperArmRotX = (85*Math.sin(6*g_seconds)+100)
  spongeAnim.leftUpperArmRotY = -75
  spongeAnim.leftLowerArmRotX = -75

  spongeAnim.rightUpperArmRotX = (-85*Math.sin(6*g_seconds)-80)
  spongeAnim.rightUpperArmRotY = 75
  spongeAnim.rightLowerArmRotX = 75

  spongeAnim.leftUpperLegRotX = (80*Math.sin(6*g_seconds))
  spongeAnim.leftLowerLegRotX = -85

  spongeAnim.rightUpperLegRotX = (-80*Math.sin(6*g_seconds))
  spongeAnim.rightLowerLegRotX = -85
  spongeAnim.eyeScaleY = Math.min((100*Math.cos(2*g_seconds) + 100), 1)

  spongeAnim.originX = 16 - 2*Math.cos(2*g_seconds)
  spongeAnim.originZ = 16 - 2*Math.sin(2*g_seconds)
  spongeAnim.originRot = 0 - 2*g_seconds * (180/Math.PI)
}


function renderSpongeBob() {
  let originMat = new Matrix4()
  originMat.translate(spongeAnim.originX,0.25,spongeAnim.originZ);
  originMat.rotate(spongeAnim.originRot,0,1,0)
    let cube = new Cube(new Matrix4().set(originMat), [1,1,0,1], -2);
    cube.matrix.translate(0, spongeAnim.bodyTransY, 0)
    let bodyParent = new Matrix4().set(cube.matrix)
    cube.matrix.scale(0.7,0.7,0.2)
    cube.matrix.translate(-0.5, -0.5, -0.5)

    let mouth = new Cube(new Matrix4().set(bodyParent), [0.2,0.2,0.2,1], -2)
    mouth.matrix.scale(0.4,0.02,0.1)
    mouth.matrix.translate(-0.5,-6,-1.1)

    let tooth1 = new Cube(new Matrix4().set(bodyParent), [1,1,1,1], -2)
    tooth1.matrix.scale(0.085,0.1,0.1)
    tooth1.matrix.translate(-1.2,-2.2,-1.1)

    let tooth2 = new Cube(new Matrix4().set(bodyParent), [1,1,1,1], -2)
    tooth2.matrix.scale(0.085,0.1,0.1)
    tooth2.matrix.translate(0.5,-2.2,-1.1)

    //Nose
    let nose = new Cylinder(new Matrix4().set(bodyParent), [1,1,0,1], 0.6, 0.3);
    nose.matrix.rotate(-90, 1, 0, 0 )

    let pantsWhite = new Cube(new Matrix4().set(bodyParent), [1,1,1,1], -2);
    let pantsParent = new Matrix4().set(pantsWhite.matrix)
    pantsWhite.matrix.scale(0.69,0.1,0.19)
    pantsWhite.matrix.translate(-0.5, -4.5, -0.5)

    let pantsTie = new Cube(new Matrix4().set(bodyParent), [1,0,0,1], -2);
    pantsTie.matrix.scale(0.11,0.1,0.19)
    pantsTie.matrix.translate(-0.5, -4.5, -0.51)

    let pantsBrown = new Cube(new Matrix4().set(bodyParent), normalizeColor(117,71,0), -2);
    pantsBrown.matrix.scale(0.69,0.1,0.19)
    pantsBrown.matrix.translate(-0.5, -5.5, -0.5)




    let leftEyeWhite = new Cylinder(new Matrix4().set(bodyParent), [1,1,1,1], 5, 0.11);
    leftEyeWhite.matrix.translate(-0.13,0.1,-0.101)
    leftEyeWhite.matrix.scale(0.5,0.5,1)
    leftEyeWhite.matrix.rotate(90, 1, 0, 0)
    leftEyeWhite.matrix.scale(1, 1, spongeAnim.eyeScaleY)
    let leftEyeParent = new Matrix4().set(leftEyeWhite.matrix)

    let blueLeftEye = new Cylinder(new Matrix4().set(leftEyeParent), normalizeColor(126,181,232), 5, 0.11);
    blueLeftEye.matrix.translate(0,-0.01,0)
    blueLeftEye.matrix.scale(0.45,1,0.45)
    // blueLeftEye.matrix.rotate(90, 1, 0, 0)

    let blackLeftEye = new Cylinder(new Matrix4().set(leftEyeParent), normalizeColor(0,0,0), 5, 0.11);
    blackLeftEye.matrix.translate(0,-0.019,0)
    blackLeftEye.matrix.scale(0.2,0.5,0.2)
    // blueLeftEye.matrix.rotate(90, 1, 0, 0)

    let rightEyeWhite = new Cylinder(new Matrix4().set(bodyParent), [1,1,1,1], 5, 0.11);
    rightEyeWhite.matrix.translate(0.13,0.1,-0.101)
    rightEyeWhite.matrix.scale(0.5,0.5,1)
    rightEyeWhite.matrix.rotate(90, 1, 0, 0)
    rightEyeWhite.matrix.scale(1, 1, spongeAnim.eyeScaleY)
    let rightEyeParent = new Matrix4().set(rightEyeWhite.matrix)

    let bluerightEye = new Cylinder(new Matrix4().set(rightEyeParent), normalizeColor(126,181,232), 5, 0.11);
    bluerightEye.matrix.translate(0,-0.01,0)
    bluerightEye.matrix.scale(0.45,1,0.45)

    let blackrightEye = new Cylinder(new Matrix4().set(rightEyeParent), normalizeColor(0,0,0), 5, 0.11);
    blackrightEye.matrix.translate(0,-0.019,0)
    blackrightEye.matrix.scale(0.2,0.5,0.2)

    let upperLeftLeg = new Cylinder(new Matrix4().set(pantsParent), [1,1,0,1], 0.6, 0.15)
    upperLeftLeg.matrix.rotate(180, 1, 0, 0)
    upperLeftLeg.matrix.translate(-0.15, 0.52, 0)
    upperLeftLeg.matrix.rotate(spongeAnim.leftUpperLegRotX, 1, 0, 0)
    let upperLeftLegParent = new Matrix4().set(upperLeftLeg.matrix)


    let lowerLeftLeg = new Cylinder(new Matrix4().set(upperLeftLegParent), [1,1,0,1], 0.6, 0.17)

    lowerLeftLeg.matrix.translate(0, 0.15, 0.03)
    lowerLeftLeg.matrix.rotate(spongeAnim.leftLowerLegRotX, 1, 0, 0)
    lowerLeftLeg.matrix.translate(0, 0, -0.03)
    let lowerLeftLegParent = new Matrix4().set(lowerLeftLeg.matrix)


    let leftShoe = new Cube(new Matrix4().set(lowerLeftLegParent), [0.3,0.3,0.3,1], -2)
    leftShoe.matrix.scale(0.15,0.1,0.2)
    leftShoe.matrix.translate(-0.46, 1, -0.2)

    let upperRightLeg = new Cylinder(new Matrix4().set(pantsParent), [1,1,0,1], 0.6, 0.15)
    upperRightLeg.matrix.rotate(180, 1, 0, 0)
    upperRightLeg.matrix.translate(0.15, 0.52, 0)
    upperRightLeg.matrix.rotate(spongeAnim.rightUpperLegRotX, 1, 0, 0)
    let upperRightLegParent = new Matrix4().set(upperRightLeg.matrix)


    let lowerRightLeg = new Cylinder(new Matrix4().set(upperRightLegParent), [1,1,0,1], 0.6, 0.17)

    lowerRightLeg.matrix.translate(0, 0.15, 0.03)
    lowerRightLeg.matrix.rotate(spongeAnim.rightLowerLegRotX, 1, 0, 0)
    lowerRightLeg.matrix.translate(0, 0, -0.03)
    let lowerRightLegParent = new Matrix4().set(lowerRightLeg.matrix)


    let rightShoe = new Cube(new Matrix4().set(lowerRightLegParent), [0.3,0.3,0.3,1], -2)
    rightShoe.matrix.scale(0.15,0.1,0.2)
    rightShoe.matrix.translate(-0.46, 1, -0.2)

    let leftUpperWhiteArm = new Cylinder(new Matrix4().set(bodyParent), [1,1,1,1], 1, 0.07)
    leftUpperWhiteArm.matrix.translate(-0.37,0,0)
    leftUpperWhiteArm.matrix.rotate(170, 0, 0, 1)
    leftUpperWhiteArm.matrix.rotate(spongeAnim.leftUpperArmRotX, 1, 0, 0)
    leftUpperWhiteArm.matrix.rotate(spongeAnim.leftUpperArmRotY, 0, 0, 1)
    leftUpperWhiteArmParent = new Matrix4().set(leftUpperWhiteArm.matrix)

    let leftUpperArm = new Cylinder(new Matrix4().set(leftUpperWhiteArmParent), [1,1,0,1], 0.6, 0.17)
    let leftUpperArmParent = new Matrix4().set(leftUpperArm.matrix)

    let leftLowerArm = new Cylinder(new Matrix4().set(leftUpperArmParent), [1,1,0,1], 0.6, 0.17)
    leftLowerArm.matrix.translate(0,0.17,0.0265)
    leftLowerArm.matrix.rotate(spongeAnim.leftLowerArmRotX, 1, 0, 0)
    leftLowerArm.matrix.rotate(spongeAnim.leftLowerArmRotY, 0, 0, 1)
    leftLowerArm.matrix.translate(0,0, -0.0265)
    let leftLowerArmParent = new Matrix4().set(leftLowerArm.matrix)

    let leftHand = new Cube(new Matrix4().set(leftLowerArmParent), [1,1,0,1], -2)

    leftHand.matrix.scale(0.1,0.1,0.1)
    leftHand.matrix.translate(0,1.4,0)
    leftHand.matrix.rotate(spongeAnim.leftHandRotX, 1, 0, 0)
    leftHand.matrix.rotate(spongeAnim.leftHandRotY, 0, 0, 1)
    leftHand.matrix.translate(-0.5,0,-0.5)







    let rightUpperWhiteArm = new Cylinder(new Matrix4().set(bodyParent), [1,1,1,1], 1, 0.07)
    rightUpperWhiteArm.matrix.translate(0.37,0,0)
    rightUpperWhiteArm.matrix.rotate(190, 0, 0, 1)
    // rightUpperWhiteArm.matrix.rotate(g_jointRotation.pink, 0, 0, 1)
    // rightUpperArm.matrix.translate(0,0,0.1)
    rightUpperWhiteArm.matrix.rotate(spongeAnim.rightUpperArmRotX, 1, 0, 0)
    rightUpperWhiteArm.matrix.rotate(spongeAnim.rightUpperArmRotY, 0, 0, 1)
    rightUpperWhiteArmParent = new Matrix4().set(rightUpperWhiteArm.matrix)

    let rightUpperArm = new Cylinder(new Matrix4().set(rightUpperWhiteArmParent), [1,1,0,1], 0.6, 0.17)
    // rightUpperArm.matrix.translate(-0.5,0,-0.1)
    // rightUpperArm.matrix.rotate(90, 0, 0, 1)
    // rightUpperArm.matrix.translate(0,0,0.1)
    let rightUpperArmParent = new Matrix4().set(rightUpperArm.matrix)

    let rightLowerArm = new Cylinder(new Matrix4().set(rightUpperArmParent), [1,1,0,1], 0.6, 0.17)
    rightLowerArm.matrix.translate(0,0.17,-0.0265)
    rightLowerArm.matrix.rotate(spongeAnim.rightLowerArmRotX, 1, 0, 0)
    rightLowerArm.matrix.rotate(spongeAnim.rightLowerArmRotY, 0, 0, 1)
    rightLowerArm.matrix.translate(0,0, 0.0265)
    let rightLowerArmParent = new Matrix4().set(rightLowerArm.matrix)

    let rightHand = new Cube(new Matrix4().set(rightLowerArmParent), [1,1,0,1], -2)

    rightHand.matrix.scale(0.1,0.1,0.1)
    rightHand.matrix.translate(0,1.4,0)
    rightHand.matrix.rotate(spongeAnim.rightHandRotX,1,0,0)
    rightHand.matrix.rotate(spongeAnim.rightHandRotY,0,0,1)

    rightHand.matrix.translate(-0.5,0,-0.5)

  

    cube.renderfast()

    mouth.renderfast()

    tooth1.renderfast()

    tooth2.renderfast()


    pantsWhite.renderfast()

    

    

    

    

    

    rightShoe.renderfast()
    pantsTie.renderfast()

    upperRightLeg.renderfast();

    pantsBrown.renderfast()

    lowerRightLeg.renderfast();

    leftUpperWhiteArm.renderfast();

    leftUpperArm.renderfast(); 

    leftLowerArm.renderfast();

    leftShoe.renderfast()

    leftEyeWhite.renderfast();

    blueLeftEye.renderfast();

    blackLeftEye.renderfast();

    rightEyeWhite.renderfast();

    bluerightEye.renderfast();

    blackrightEye.renderfast();

    nose.renderfast();

    leftHand.renderfast()

    rightUpperWhiteArm.renderfast();

    rightUpperArm.renderfast(); 

    rightLowerArm.renderfast();

    rightHand.renderfast()

    upperLeftLeg.renderfast();

    lowerLeftLeg.renderfast();

    upperRightLeg.renderfast();
}
