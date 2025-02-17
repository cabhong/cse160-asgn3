function initMap() {
    console.log(g_map)
    sky = new Cube(new Matrix4(), normalizeColor(118,168,255), -2) 
    for(block of g_map) {
      newBlock = new Cube(new Matrix4(), [1,1,1,1], block.texture);
      newBlock.matrix.translate(block.x, block.y, block.z);
      newBlock.matrix.translate(-0.5,-0.5,-0.5);
      g_cubes.push(newBlock);
    }
    sky.matrix.scale(500,500,500)
    sky.matrix.translate(-0.5, -0.5, -0.5)
};

let g_map = [
    {
        "x": 0,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 0,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 1,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 2,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 3,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 4,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 5,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 6,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 7,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 8,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 9,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 10,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 11,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 12,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 13,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 14,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 15,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 16,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 17,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 18,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 19,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 20,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 21,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 22,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 23,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 24,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 25,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 26,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 27,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 28,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 29,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 30,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 0,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 1,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 2,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 3,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 4,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 5,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 6,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 7,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 8,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 9,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 10,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 11,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 12,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 13,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 14,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 15,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 16,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 17,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 18,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 19,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 20,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 22,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 23,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 24,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 25,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 26,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 27,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 28,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 29,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 30,
        "texture": 0
    },
    {
        "x": 31,
        "y": -1,
        "z": 31,
        "texture": 0
    },
    {
        "x": 16,
        "y": 0,
        "z": 5,
        "texture": 2
    },
    {
        "x": 16,
        "y": 0,
        "z": 6,
        "texture": 2
    },
    {
        "x": 16,
        "y": 0,
        "z": 7,
        "texture": 2
    },
    {
        "x": 16,
        "y": 0,
        "z": 8,
        "texture": 2
    },
    {
        "x": 16,
        "y": 0,
        "z": 9,
        "texture": 2
    },
    {
        "x": 16,
        "y": 0,
        "z": 4,
        "texture": 2
    },
    {
        "x": 16,
        "y": 0,
        "z": 3,
        "texture": 2
    },
    {
        "x": 16,
        "y": 0,
        "z": 2,
        "texture": 2
    },
    {
        "x": 16,
        "y": 0,
        "z": 1,
        "texture": 2
    },
    {
        "x": 17,
        "y": 0,
        "z": 1,
        "texture": 2
    },
    {
        "x": 18,
        "y": 0,
        "z": 1,
        "texture": 2
    },
    {
        "x": 19,
        "y": 0,
        "z": 1,
        "texture": 2
    },
    {
        "x": 20,
        "y": 0,
        "z": 1,
        "texture": 2
    },
    {
        "x": 21,
        "y": 0,
        "z": 1,
        "texture": 2
    },
    {
        "x": 22,
        "y": 0,
        "z": 1,
        "texture": 2
    },
    {
        "x": 23,
        "y": 0,
        "z": 1,
        "texture": 2
    },
    {
        "x": 24,
        "y": 0,
        "z": 1,
        "texture": 2
    },
    {
        "x": 25,
        "y": 0,
        "z": 1,
        "texture": 2
    },
    {
        "x": 25,
        "y": 0,
        "z": 2,
        "texture": 2
    },
    {
        "x": 25,
        "y": 0,
        "z": 3,
        "texture": 2
    },
    {
        "x": 25,
        "y": 0,
        "z": 4,
        "texture": 2
    },
    {
        "x": 25,
        "y": 0,
        "z": 6,
        "texture": 2
    },
    {
        "x": 25,
        "y": 0,
        "z": 7,
        "texture": 2
    },
    {
        "x": 25,
        "y": 0,
        "z": 8,
        "texture": 2
    },
    {
        "x": 25,
        "y": 0,
        "z": 5,
        "texture": 2
    },
    {
        "x": 17,
        "y": 0,
        "z": 9,
        "texture": 2
    },
    {
        "x": 18,
        "y": 0,
        "z": 9,
        "texture": 2
    },
    {
        "x": 19,
        "y": 0,
        "z": 9,
        "texture": 2
    },
    {
        "x": 22,
        "y": 0,
        "z": 9,
        "texture": 2
    },
    {
        "x": 24,
        "y": 0,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 0,
        "z": 9,
        "texture": 2
    },
    {
        "x": 23,
        "y": 0,
        "z": 9,
        "texture": 2
    },
    {
        "x": 15,
        "y": 0,
        "z": 10,
        "texture": 3
    },
    {
        "x": 15,
        "y": 1,
        "z": 10,
        "texture": 3
    },
    {
        "x": 15,
        "y": 2,
        "z": 10,
        "texture": 3
    },
    {
        "x": 15,
        "y": 3,
        "z": 10,
        "texture": 3
    },
    {
        "x": 15,
        "y": 4,
        "z": 10,
        "texture": 3
    },
    {
        "x": 26,
        "y": 0,
        "z": 10,
        "texture": 3
    },
    {
        "x": 26,
        "y": 1,
        "z": 10,
        "texture": 3
    },
    {
        "x": 26,
        "y": 2,
        "z": 10,
        "texture": 3
    },
    {
        "x": 26,
        "y": 3,
        "z": 10,
        "texture": 3
    },
    {
        "x": 26,
        "y": 4,
        "z": 10,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 16,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 17,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 18,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 19,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 20,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 21,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 22,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 24,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 23,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 25,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 9,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 8,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 7,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 6,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 5,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 4,
        "texture": 3
    },
    {
        "x": 26,
        "y": 0,
        "z": 0,
        "texture": 3
    },
    {
        "x": 26,
        "y": 1,
        "z": 0,
        "texture": 3
    },
    {
        "x": 26,
        "y": 2,
        "z": 0,
        "texture": 3
    },
    {
        "x": 26,
        "y": 3,
        "z": 0,
        "texture": 3
    },
    {
        "x": 26,
        "y": 4,
        "z": 0,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 3,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 2,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 1,
        "texture": 3
    },
    {
        "x": 24,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 25,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 23,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 22,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 21,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 20,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 19,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 18,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 17,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 15,
        "y": 0,
        "z": 0,
        "texture": 3
    },
    {
        "x": 15,
        "y": 1,
        "z": 0,
        "texture": 3
    },
    {
        "x": 15,
        "y": 2,
        "z": 0,
        "texture": 3
    },
    {
        "x": 15,
        "y": 3,
        "z": 0,
        "texture": 3
    },
    {
        "x": 15,
        "y": 4,
        "z": 0,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 16,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 1,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 2,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 3,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 4,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 5,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 6,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 7,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 8,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 9,
        "texture": 3
    },
    {
        "x": 16,
        "y": 1,
        "z": 9,
        "texture": 2
    },
    {
        "x": 16,
        "y": 1,
        "z": 8,
        "texture": 2
    },
    {
        "x": 16,
        "y": 1,
        "z": 1,
        "texture": 2
    },
    {
        "x": 16,
        "y": 1,
        "z": 2,
        "texture": 2
    },
    {
        "x": 17,
        "y": 1,
        "z": 9,
        "texture": 2
    },
    {
        "x": 19,
        "y": 1,
        "z": 9,
        "texture": 2
    },
    {
        "x": 22,
        "y": 1,
        "z": 9,
        "texture": 2
    },
    {
        "x": 24,
        "y": 1,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 1,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 1,
        "z": 1,
        "texture": 2
    },
    {
        "x": 25,
        "y": 1,
        "z": 2,
        "texture": 2
    },
    {
        "x": 25,
        "y": 1,
        "z": 8,
        "texture": 2
    },
    {
        "x": 17,
        "y": 1,
        "z": 1,
        "texture": 2
    },
    {
        "x": 18,
        "y": 1,
        "z": 1,
        "texture": 2
    },
    {
        "x": 19,
        "y": 1,
        "z": 1,
        "texture": 2
    },
    {
        "x": 20,
        "y": 1,
        "z": 1,
        "texture": 2
    },
    {
        "x": 22,
        "y": 1,
        "z": 1,
        "texture": 2
    },
    {
        "x": 23,
        "y": 1,
        "z": 1,
        "texture": 2
    },
    {
        "x": 24,
        "y": 1,
        "z": 1,
        "texture": 2
    },
    {
        "x": 21,
        "y": 1,
        "z": 1,
        "texture": 2
    },
    {
        "x": 17,
        "y": 2,
        "z": 1,
        "texture": 2
    },
    {
        "x": 16,
        "y": 2,
        "z": 1,
        "texture": 2
    },
    {
        "x": 16,
        "y": 2,
        "z": 2,
        "texture": 2
    },
    {
        "x": 16,
        "y": 2,
        "z": 3,
        "texture": 2
    },
    {
        "x": 16,
        "y": 2,
        "z": 4,
        "texture": 2
    },
    {
        "x": 16,
        "y": 2,
        "z": 5,
        "texture": 2
    },
    {
        "x": 16,
        "y": 2,
        "z": 6,
        "texture": 2
    },
    {
        "x": 16,
        "y": 2,
        "z": 7,
        "texture": 2
    },
    {
        "x": 16,
        "y": 2,
        "z": 8,
        "texture": 2
    },
    {
        "x": 16,
        "y": 2,
        "z": 9,
        "texture": 2
    },
    {
        "x": 17,
        "y": 2,
        "z": 9,
        "texture": 2
    },
    {
        "x": 18,
        "y": 2,
        "z": 9,
        "texture": 2
    },
    {
        "x": 19,
        "y": 2,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 2,
        "z": 9,
        "texture": 2
    },
    {
        "x": 24,
        "y": 2,
        "z": 9,
        "texture": 2
    },
    {
        "x": 23,
        "y": 2,
        "z": 9,
        "texture": 2
    },
    {
        "x": 22,
        "y": 2,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 2,
        "z": 8,
        "texture": 2
    },
    {
        "x": 25,
        "y": 2,
        "z": 7,
        "texture": 2
    },
    {
        "x": 25,
        "y": 2,
        "z": 6,
        "texture": 2
    },
    {
        "x": 25,
        "y": 2,
        "z": 5,
        "texture": 2
    },
    {
        "x": 25,
        "y": 2,
        "z": 4,
        "texture": 2
    },
    {
        "x": 25,
        "y": 2,
        "z": 3,
        "texture": 2
    },
    {
        "x": 25,
        "y": 2,
        "z": 2,
        "texture": 2
    },
    {
        "x": 25,
        "y": 2,
        "z": 1,
        "texture": 2
    },
    {
        "x": 24,
        "y": 2,
        "z": 1,
        "texture": 2
    },
    {
        "x": 23,
        "y": 2,
        "z": 1,
        "texture": 2
    },
    {
        "x": 22,
        "y": 2,
        "z": 1,
        "texture": 2
    },
    {
        "x": 21,
        "y": 2,
        "z": 1,
        "texture": 2
    },
    {
        "x": 20,
        "y": 2,
        "z": 1,
        "texture": 2
    },
    {
        "x": 19,
        "y": 2,
        "z": 1,
        "texture": 2
    },
    {
        "x": 18,
        "y": 2,
        "z": 1,
        "texture": 2
    },
    {
        "x": 16,
        "y": 3,
        "z": 9,
        "texture": 2
    },
    {
        "x": 16,
        "y": 3,
        "z": 8,
        "texture": 2
    },
    {
        "x": 16,
        "y": 3,
        "z": 7,
        "texture": 2
    },
    {
        "x": 16,
        "y": 3,
        "z": 5,
        "texture": 2
    },
    {
        "x": 16,
        "y": 3,
        "z": 4,
        "texture": 2
    },
    {
        "x": 16,
        "y": 3,
        "z": 6,
        "texture": 2
    },
    {
        "x": 16,
        "y": 3,
        "z": 1,
        "texture": 2
    },
    {
        "x": 16,
        "y": 3,
        "z": 3,
        "texture": 2
    },
    {
        "x": 16,
        "y": 3,
        "z": 2,
        "texture": 2
    },
    {
        "x": 17,
        "y": 3,
        "z": 1,
        "texture": 2
    },
    {
        "x": 18,
        "y": 3,
        "z": 1,
        "texture": 2
    },
    {
        "x": 20,
        "y": 3,
        "z": 1,
        "texture": 2
    },
    {
        "x": 19,
        "y": 3,
        "z": 1,
        "texture": 2
    },
    {
        "x": 21,
        "y": 3,
        "z": 1,
        "texture": 2
    },
    {
        "x": 22,
        "y": 3,
        "z": 1,
        "texture": 2
    },
    {
        "x": 23,
        "y": 3,
        "z": 1,
        "texture": 2
    },
    {
        "x": 24,
        "y": 3,
        "z": 1,
        "texture": 2
    },
    {
        "x": 25,
        "y": 3,
        "z": 1,
        "texture": 2
    },
    {
        "x": 25,
        "y": 3,
        "z": 2,
        "texture": 2
    },
    {
        "x": 25,
        "y": 3,
        "z": 3,
        "texture": 2
    },
    {
        "x": 25,
        "y": 3,
        "z": 4,
        "texture": 2
    },
    {
        "x": 25,
        "y": 3,
        "z": 5,
        "texture": 2
    },
    {
        "x": 25,
        "y": 3,
        "z": 6,
        "texture": 2
    },
    {
        "x": 25,
        "y": 3,
        "z": 7,
        "texture": 2
    },
    {
        "x": 25,
        "y": 3,
        "z": 8,
        "texture": 2
    },
    {
        "x": 24,
        "y": 3,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 3,
        "z": 9,
        "texture": 2
    },
    {
        "x": 18,
        "y": 3,
        "z": 9,
        "texture": 2
    },
    {
        "x": 17,
        "y": 3,
        "z": 9,
        "texture": 2
    },
    {
        "x": 19,
        "y": 3,
        "z": 9,
        "texture": 2
    },
    {
        "x": 20,
        "y": 2,
        "z": 9,
        "texture": 2
    },
    {
        "x": 21,
        "y": 2,
        "z": 9,
        "texture": 2
    },
    {
        "x": 20,
        "y": 3,
        "z": 9,
        "texture": 2
    },
    {
        "x": 21,
        "y": 3,
        "z": 9,
        "texture": 2
    },
    {
        "x": 22,
        "y": 3,
        "z": 9,
        "texture": 2
    },
    {
        "x": 23,
        "y": 3,
        "z": 9,
        "texture": 2
    },
    {
        "x": 16,
        "y": 4,
        "z": 9,
        "texture": 2
    },
    {
        "x": 17,
        "y": 4,
        "z": 9,
        "texture": 2
    },
    {
        "x": 18,
        "y": 4,
        "z": 9,
        "texture": 2
    },
    {
        "x": 19,
        "y": 4,
        "z": 9,
        "texture": 2
    },
    {
        "x": 20,
        "y": 4,
        "z": 9,
        "texture": 2
    },
    {
        "x": 21,
        "y": 4,
        "z": 9,
        "texture": 2
    },
    {
        "x": 22,
        "y": 4,
        "z": 9,
        "texture": 2
    },
    {
        "x": 23,
        "y": 4,
        "z": 9,
        "texture": 2
    },
    {
        "x": 24,
        "y": 4,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 4,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 4,
        "z": 1,
        "texture": 2
    },
    {
        "x": 25,
        "y": 4,
        "z": 2,
        "texture": 2
    },
    {
        "x": 25,
        "y": 4,
        "z": 3,
        "texture": 2
    },
    {
        "x": 25,
        "y": 4,
        "z": 5,
        "texture": 2
    },
    {
        "x": 25,
        "y": 4,
        "z": 4,
        "texture": 2
    },
    {
        "x": 25,
        "y": 4,
        "z": 6,
        "texture": 2
    },
    {
        "x": 25,
        "y": 4,
        "z": 7,
        "texture": 2
    },
    {
        "x": 25,
        "y": 4,
        "z": 8,
        "texture": 2
    },
    {
        "x": 24,
        "y": 4,
        "z": 1,
        "texture": 2
    },
    {
        "x": 23,
        "y": 4,
        "z": 1,
        "texture": 2
    },
    {
        "x": 22,
        "y": 4,
        "z": 1,
        "texture": 2
    },
    {
        "x": 21,
        "y": 4,
        "z": 1,
        "texture": 2
    },
    {
        "x": 20,
        "y": 4,
        "z": 1,
        "texture": 2
    },
    {
        "x": 18,
        "y": 4,
        "z": 1,
        "texture": 2
    },
    {
        "x": 17,
        "y": 4,
        "z": 1,
        "texture": 2
    },
    {
        "x": 19,
        "y": 4,
        "z": 1,
        "texture": 2
    },
    {
        "x": 16,
        "y": 4,
        "z": 1,
        "texture": 2
    },
    {
        "x": 16,
        "y": 4,
        "z": 2,
        "texture": 2
    },
    {
        "x": 16,
        "y": 4,
        "z": 3,
        "texture": 2
    },
    {
        "x": 16,
        "y": 4,
        "z": 5,
        "texture": 2
    },
    {
        "x": 16,
        "y": 4,
        "z": 6,
        "texture": 2
    },
    {
        "x": 16,
        "y": 4,
        "z": 7,
        "texture": 2
    },
    {
        "x": 16,
        "y": 4,
        "z": 4,
        "texture": 2
    },
    {
        "x": 16,
        "y": 4,
        "z": 8,
        "texture": 2
    },
    {
        "x": 16,
        "y": 5,
        "z": 1,
        "texture": 2
    },
    {
        "x": 16,
        "y": 5,
        "z": 2,
        "texture": 2
    },
    {
        "x": 16,
        "y": 5,
        "z": 3,
        "texture": 2
    },
    {
        "x": 16,
        "y": 5,
        "z": 4,
        "texture": 2
    },
    {
        "x": 16,
        "y": 5,
        "z": 5,
        "texture": 2
    },
    {
        "x": 16,
        "y": 5,
        "z": 6,
        "texture": 2
    },
    {
        "x": 16,
        "y": 5,
        "z": 7,
        "texture": 2
    },
    {
        "x": 16,
        "y": 5,
        "z": 8,
        "texture": 2
    },
    {
        "x": 17,
        "y": 5,
        "z": 9,
        "texture": 2
    },
    {
        "x": 18,
        "y": 5,
        "z": 9,
        "texture": 2
    },
    {
        "x": 19,
        "y": 5,
        "z": 9,
        "texture": 2
    },
    {
        "x": 21,
        "y": 5,
        "z": 9,
        "texture": 2
    },
    {
        "x": 20,
        "y": 5,
        "z": 9,
        "texture": 2
    },
    {
        "x": 16,
        "y": 5,
        "z": 9,
        "texture": 2
    },
    {
        "x": 23,
        "y": 5,
        "z": 9,
        "texture": 2
    },
    {
        "x": 22,
        "y": 5,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 5,
        "z": 9,
        "texture": 2
    },
    {
        "x": 24,
        "y": 5,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 5,
        "z": 8,
        "texture": 2
    },
    {
        "x": 25,
        "y": 5,
        "z": 6,
        "texture": 2
    },
    {
        "x": 25,
        "y": 5,
        "z": 7,
        "texture": 2
    },
    {
        "x": 25,
        "y": 5,
        "z": 5,
        "texture": 2
    },
    {
        "x": 25,
        "y": 5,
        "z": 4,
        "texture": 2
    },
    {
        "x": 25,
        "y": 5,
        "z": 2,
        "texture": 2
    },
    {
        "x": 25,
        "y": 5,
        "z": 3,
        "texture": 2
    },
    {
        "x": 25,
        "y": 5,
        "z": 1,
        "texture": 2
    },
    {
        "x": 24,
        "y": 5,
        "z": 1,
        "texture": 2
    },
    {
        "x": 23,
        "y": 5,
        "z": 1,
        "texture": 2
    },
    {
        "x": 21,
        "y": 5,
        "z": 1,
        "texture": 2
    },
    {
        "x": 22,
        "y": 5,
        "z": 1,
        "texture": 2
    },
    {
        "x": 20,
        "y": 5,
        "z": 1,
        "texture": 2
    },
    {
        "x": 17,
        "y": 5,
        "z": 1,
        "texture": 2
    },
    {
        "x": 18,
        "y": 5,
        "z": 1,
        "texture": 2
    },
    {
        "x": 19,
        "y": 5,
        "z": 1,
        "texture": 2
    },
    {
        "x": 24,
        "y": 5,
        "z": 8,
        "texture": 2
    },
    {
        "x": 24,
        "y": 5,
        "z": 7,
        "texture": 2
    },
    {
        "x": 24,
        "y": 5,
        "z": 6,
        "texture": 2
    },
    {
        "x": 24,
        "y": 5,
        "z": 4,
        "texture": 2
    },
    {
        "x": 24,
        "y": 5,
        "z": 5,
        "texture": 2
    },
    {
        "x": 24,
        "y": 5,
        "z": 3,
        "texture": 2
    },
    {
        "x": 24,
        "y": 5,
        "z": 2,
        "texture": 2
    },
    {
        "x": 23,
        "y": 5,
        "z": 2,
        "texture": 2
    },
    {
        "x": 22,
        "y": 5,
        "z": 2,
        "texture": 2
    },
    {
        "x": 21,
        "y": 5,
        "z": 2,
        "texture": 2
    },
    {
        "x": 20,
        "y": 5,
        "z": 2,
        "texture": 2
    },
    {
        "x": 19,
        "y": 5,
        "z": 2,
        "texture": 2
    },
    {
        "x": 18,
        "y": 5,
        "z": 2,
        "texture": 2
    },
    {
        "x": 17,
        "y": 5,
        "z": 2,
        "texture": 2
    },
    {
        "x": 17,
        "y": 5,
        "z": 3,
        "texture": 2
    },
    {
        "x": 17,
        "y": 5,
        "z": 4,
        "texture": 2
    },
    {
        "x": 17,
        "y": 5,
        "z": 5,
        "texture": 2
    },
    {
        "x": 17,
        "y": 5,
        "z": 6,
        "texture": 2
    },
    {
        "x": 17,
        "y": 5,
        "z": 7,
        "texture": 2
    },
    {
        "x": 17,
        "y": 5,
        "z": 8,
        "texture": 2
    },
    {
        "x": 18,
        "y": 5,
        "z": 3,
        "texture": 2
    },
    {
        "x": 18,
        "y": 5,
        "z": 4,
        "texture": 2
    },
    {
        "x": 18,
        "y": 5,
        "z": 5,
        "texture": 2
    },
    {
        "x": 18,
        "y": 5,
        "z": 6,
        "texture": 2
    },
    {
        "x": 18,
        "y": 5,
        "z": 7,
        "texture": 2
    },
    {
        "x": 18,
        "y": 5,
        "z": 8,
        "texture": 2
    },
    {
        "x": 19,
        "y": 5,
        "z": 3,
        "texture": 2
    },
    {
        "x": 19,
        "y": 5,
        "z": 4,
        "texture": 2
    },
    {
        "x": 19,
        "y": 5,
        "z": 5,
        "texture": 2
    },
    {
        "x": 19,
        "y": 5,
        "z": 6,
        "texture": 2
    },
    {
        "x": 19,
        "y": 5,
        "z": 7,
        "texture": 2
    },
    {
        "x": 19,
        "y": 5,
        "z": 8,
        "texture": 2
    },
    {
        "x": 20,
        "y": 5,
        "z": 3,
        "texture": 2
    },
    {
        "x": 20,
        "y": 5,
        "z": 4,
        "texture": 2
    },
    {
        "x": 20,
        "y": 5,
        "z": 5,
        "texture": 2
    },
    {
        "x": 20,
        "y": 5,
        "z": 7,
        "texture": 2
    },
    {
        "x": 21,
        "y": 5,
        "z": 8,
        "texture": 2
    },
    {
        "x": 20,
        "y": 5,
        "z": 8,
        "texture": 2
    },
    {
        "x": 20,
        "y": 5,
        "z": 6,
        "texture": 2
    },
    {
        "x": 21,
        "y": 5,
        "z": 3,
        "texture": 2
    },
    {
        "x": 21,
        "y": 5,
        "z": 4,
        "texture": 2
    },
    {
        "x": 21,
        "y": 5,
        "z": 5,
        "texture": 2
    },
    {
        "x": 21,
        "y": 5,
        "z": 6,
        "texture": 2
    },
    {
        "x": 21,
        "y": 5,
        "z": 7,
        "texture": 2
    },
    {
        "x": 23,
        "y": 5,
        "z": 3,
        "texture": 2
    },
    {
        "x": 22,
        "y": 5,
        "z": 3,
        "texture": 2
    },
    {
        "x": 23,
        "y": 5,
        "z": 4,
        "texture": 2
    },
    {
        "x": 22,
        "y": 5,
        "z": 4,
        "texture": 2
    },
    {
        "x": 23,
        "y": 5,
        "z": 5,
        "texture": 2
    },
    {
        "x": 22,
        "y": 5,
        "z": 5,
        "texture": 2
    },
    {
        "x": 23,
        "y": 5,
        "z": 6,
        "texture": 2
    },
    {
        "x": 22,
        "y": 5,
        "z": 6,
        "texture": 2
    },
    {
        "x": 23,
        "y": 5,
        "z": 7,
        "texture": 2
    },
    {
        "x": 22,
        "y": 5,
        "z": 7,
        "texture": 2
    },
    {
        "x": 23,
        "y": 5,
        "z": 8,
        "texture": 2
    },
    {
        "x": 22,
        "y": 5,
        "z": 8,
        "texture": 2
    },
    {
        "x": 15,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 16,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 17,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 18,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 19,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 21,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 20,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 22,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 23,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 24,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 25,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 11,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 10,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 9,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 8,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 6,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 5,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 7,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 4,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 3,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 2,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 1,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 27,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 26,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 25,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 24,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 23,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 22,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 21,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 20,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 19,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 18,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 17,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 16,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": -1,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 0,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 1,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 2,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 4,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 5,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 6,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 3,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 7,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 8,
        "texture": 3
    },
    {
        "x": 14,
        "y": 5,
        "z": 9,
        "texture": 3
    },
    {
        "x": 15,
        "y": 6,
        "z": 9,
        "texture": 2
    },
    {
        "x": 15,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 16,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 17,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 18,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 19,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 20,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 21,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 22,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 23,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 24,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 25,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 26,
        "y": 6,
        "z": 10,
        "texture": 2
    },
    {
        "x": 26,
        "y": 6,
        "z": 9,
        "texture": 2
    },
    {
        "x": 26,
        "y": 6,
        "z": 8,
        "texture": 2
    },
    {
        "x": 26,
        "y": 6,
        "z": 7,
        "texture": 2
    },
    {
        "x": 26,
        "y": 6,
        "z": 6,
        "texture": 2
    },
    {
        "x": 26,
        "y": 6,
        "z": 5,
        "texture": 2
    },
    {
        "x": 26,
        "y": 6,
        "z": 4,
        "texture": 2
    },
    {
        "x": 26,
        "y": 6,
        "z": 3,
        "texture": 2
    },
    {
        "x": 26,
        "y": 6,
        "z": 2,
        "texture": 2
    },
    {
        "x": 26,
        "y": 6,
        "z": 1,
        "texture": 2
    },
    {
        "x": 26,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 25,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 24,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 23,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 22,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 21,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 20,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 19,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 17,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 16,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 18,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 15,
        "y": 6,
        "z": 0,
        "texture": 2
    },
    {
        "x": 15,
        "y": 6,
        "z": 1,
        "texture": 2
    },
    {
        "x": 15,
        "y": 6,
        "z": 2,
        "texture": 2
    },
    {
        "x": 15,
        "y": 6,
        "z": 3,
        "texture": 2
    },
    {
        "x": 15,
        "y": 6,
        "z": 4,
        "texture": 2
    },
    {
        "x": 15,
        "y": 6,
        "z": 5,
        "texture": 2
    },
    {
        "x": 15,
        "y": 6,
        "z": 7,
        "texture": 2
    },
    {
        "x": 15,
        "y": 6,
        "z": 8,
        "texture": 2
    },
    {
        "x": 15,
        "y": 6,
        "z": 6,
        "texture": 2
    },
    {
        "x": 16,
        "y": 7,
        "z": 6,
        "texture": 2
    },
    {
        "x": 16,
        "y": 7,
        "z": 7,
        "texture": 2
    },
    {
        "x": 16,
        "y": 7,
        "z": 8,
        "texture": 2
    },
    {
        "x": 16,
        "y": 7,
        "z": 9,
        "texture": 2
    },
    {
        "x": 17,
        "y": 7,
        "z": 9,
        "texture": 2
    },
    {
        "x": 18,
        "y": 7,
        "z": 9,
        "texture": 2
    },
    {
        "x": 19,
        "y": 7,
        "z": 9,
        "texture": 2
    },
    {
        "x": 20,
        "y": 7,
        "z": 9,
        "texture": 2
    },
    {
        "x": 21,
        "y": 7,
        "z": 9,
        "texture": 2
    },
    {
        "x": 22,
        "y": 7,
        "z": 9,
        "texture": 2
    },
    {
        "x": 23,
        "y": 7,
        "z": 9,
        "texture": 2
    },
    {
        "x": 24,
        "y": 7,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 7,
        "z": 9,
        "texture": 2
    },
    {
        "x": 25,
        "y": 7,
        "z": 8,
        "texture": 2
    },
    {
        "x": 25,
        "y": 7,
        "z": 7,
        "texture": 2
    },
    {
        "x": 25,
        "y": 7,
        "z": 6,
        "texture": 2
    },
    {
        "x": 25,
        "y": 7,
        "z": 5,
        "texture": 2
    },
    {
        "x": 25,
        "y": 7,
        "z": 4,
        "texture": 2
    },
    {
        "x": 25,
        "y": 7,
        "z": 3,
        "texture": 2
    },
    {
        "x": 25,
        "y": 7,
        "z": 2,
        "texture": 2
    },
    {
        "x": 25,
        "y": 7,
        "z": 1,
        "texture": 2
    },
    {
        "x": 24,
        "y": 7,
        "z": 1,
        "texture": 2
    },
    {
        "x": 23,
        "y": 7,
        "z": 1,
        "texture": 2
    },
    {
        "x": 22,
        "y": 7,
        "z": 1,
        "texture": 2
    },
    {
        "x": 21,
        "y": 7,
        "z": 1,
        "texture": 2
    },
    {
        "x": 20,
        "y": 7,
        "z": 1,
        "texture": 2
    },
    {
        "x": 19,
        "y": 7,
        "z": 1,
        "texture": 2
    },
    {
        "x": 18,
        "y": 7,
        "z": 1,
        "texture": 2
    },
    {
        "x": 16,
        "y": 7,
        "z": 1,
        "texture": 2
    },
    {
        "x": 17,
        "y": 7,
        "z": 1,
        "texture": 2
    },
    {
        "x": 16,
        "y": 7,
        "z": 4,
        "texture": 2
    },
    {
        "x": 16,
        "y": 7,
        "z": 5,
        "texture": 2
    },
    {
        "x": 16,
        "y": 7,
        "z": 3,
        "texture": 2
    },
    {
        "x": 16,
        "y": 7,
        "z": 2,
        "texture": 2
    },
    {
        "x": 17,
        "y": 8,
        "z": 2,
        "texture": 2
    },
    {
        "x": 17,
        "y": 8,
        "z": 3,
        "texture": 2
    },
    {
        "x": 17,
        "y": 8,
        "z": 4,
        "texture": 2
    },
    {
        "x": 17,
        "y": 8,
        "z": 5,
        "texture": 2
    },
    {
        "x": 17,
        "y": 8,
        "z": 6,
        "texture": 2
    },
    {
        "x": 17,
        "y": 8,
        "z": 7,
        "texture": 2
    },
    {
        "x": 17,
        "y": 8,
        "z": 8,
        "texture": 2
    },
    {
        "x": 18,
        "y": 8,
        "z": 8,
        "texture": 2
    },
    {
        "x": 19,
        "y": 8,
        "z": 8,
        "texture": 2
    },
    {
        "x": 20,
        "y": 8,
        "z": 8,
        "texture": 2
    },
    {
        "x": 21,
        "y": 8,
        "z": 8,
        "texture": 2
    },
    {
        "x": 22,
        "y": 8,
        "z": 8,
        "texture": 2
    },
    {
        "x": 23,
        "y": 8,
        "z": 8,
        "texture": 2
    },
    {
        "x": 24,
        "y": 8,
        "z": 8,
        "texture": 2
    },
    {
        "x": 24,
        "y": 8,
        "z": 7,
        "texture": 2
    },
    {
        "x": 24,
        "y": 8,
        "z": 6,
        "texture": 2
    },
    {
        "x": 24,
        "y": 8,
        "z": 5,
        "texture": 2
    },
    {
        "x": 24,
        "y": 8,
        "z": 4,
        "texture": 2
    },
    {
        "x": 24,
        "y": 8,
        "z": 3,
        "texture": 2
    },
    {
        "x": 24,
        "y": 8,
        "z": 2,
        "texture": 2
    },
    {
        "x": 23,
        "y": 8,
        "z": 2,
        "texture": 2
    },
    {
        "x": 22,
        "y": 8,
        "z": 2,
        "texture": 2
    },
    {
        "x": 21,
        "y": 8,
        "z": 2,
        "texture": 2
    },
    {
        "x": 20,
        "y": 8,
        "z": 2,
        "texture": 2
    },
    {
        "x": 19,
        "y": 8,
        "z": 2,
        "texture": 2
    },
    {
        "x": 18,
        "y": 8,
        "z": 2,
        "texture": 2
    },
    {
        "x": 23,
        "y": 9,
        "z": 3,
        "texture": 2
    },
    {
        "x": 22,
        "y": 9,
        "z": 3,
        "texture": 2
    },
    {
        "x": 21,
        "y": 9,
        "z": 3,
        "texture": 2
    },
    {
        "x": 20,
        "y": 9,
        "z": 3,
        "texture": 2
    },
    {
        "x": 19,
        "y": 9,
        "z": 3,
        "texture": 2
    },
    {
        "x": 18,
        "y": 9,
        "z": 3,
        "texture": 2
    },
    {
        "x": 18,
        "y": 9,
        "z": 4,
        "texture": 2
    },
    {
        "x": 18,
        "y": 9,
        "z": 5,
        "texture": 2
    },
    {
        "x": 18,
        "y": 9,
        "z": 6,
        "texture": 2
    },
    {
        "x": 18,
        "y": 9,
        "z": 7,
        "texture": 2
    },
    {
        "x": 19,
        "y": 9,
        "z": 7,
        "texture": 2
    },
    {
        "x": 20,
        "y": 9,
        "z": 7,
        "texture": 2
    },
    {
        "x": 21,
        "y": 9,
        "z": 7,
        "texture": 2
    },
    {
        "x": 22,
        "y": 9,
        "z": 7,
        "texture": 2
    },
    {
        "x": 23,
        "y": 9,
        "z": 7,
        "texture": 2
    },
    {
        "x": 23,
        "y": 9,
        "z": 6,
        "texture": 2
    },
    {
        "x": 23,
        "y": 9,
        "z": 5,
        "texture": 2
    },
    {
        "x": 23,
        "y": 9,
        "z": 4,
        "texture": 2
    },
    {
        "x": 19,
        "y": 10,
        "z": 4,
        "texture": 2
    },
    {
        "x": 19,
        "y": 10,
        "z": 5,
        "texture": 2
    },
    {
        "x": 19,
        "y": 10,
        "z": 6,
        "texture": 2
    },
    {
        "x": 20,
        "y": 10,
        "z": 6,
        "texture": 2
    },
    {
        "x": 20,
        "y": 10,
        "z": 4,
        "texture": 2
    },
    {
        "x": 21,
        "y": 10,
        "z": 4,
        "texture": 2
    },
    {
        "x": 21,
        "y": 10,
        "z": 6,
        "texture": 2
    },
    {
        "x": 22,
        "y": 10,
        "z": 6,
        "texture": 2
    },
    {
        "x": 22,
        "y": 10,
        "z": 5,
        "texture": 2
    },
    {
        "x": 22,
        "y": 10,
        "z": 4,
        "texture": 2
    },
    {
        "x": 20,
        "y": 10,
        "z": 5,
        "texture": 2
    },
    {
        "x": 21,
        "y": 10,
        "z": 5,
        "texture": 2
    },
    {
        "x": 8,
        "y": -1,
        "z": 21,
        "texture": 0
    },
    {
        "x": 4,
        "y": 0,
        "z": 27,
        "texture": 3
    },
    {
        "x": 4,
        "y": 1,
        "z": 27,
        "texture": 3
    },
    {
        "x": 4,
        "y": 2,
        "z": 27,
        "texture": 3
    },
    {
        "x": 4,
        "y": 3,
        "z": 27,
        "texture": 3
    },
    {
        "x": 4,
        "y": 4,
        "z": 27,
        "texture": 3
    },
    {
        "x": 5,
        "y": 4,
        "z": 27,
        "texture": 4
    },
    {
        "x": 5,
        "y": 3,
        "z": 27,
        "texture": 4
    },
    {
        "x": 5,
        "y": 4,
        "z": 26,
        "texture": 4
    },
    {
        "x": 5,
        "y": 3,
        "z": 26,
        "texture": 4
    },
    {
        "x": 4,
        "y": 3,
        "z": 26,
        "texture": 4
    },
    {
        "x": 4,
        "y": 4,
        "z": 26,
        "texture": 4
    },
    {
        "x": 3,
        "y": 3,
        "z": 26,
        "texture": 4
    },
    {
        "x": 3,
        "y": 4,
        "z": 26,
        "texture": 4
    },
    {
        "x": 3,
        "y": 4,
        "z": 27,
        "texture": 4
    },
    {
        "x": 3,
        "y": 3,
        "z": 27,
        "texture": 4
    },
    {
        "x": 3,
        "y": 3,
        "z": 28,
        "texture": 4
    },
    {
        "x": 3,
        "y": 4,
        "z": 28,
        "texture": 4
    },
    {
        "x": 4,
        "y": 4,
        "z": 28,
        "texture": 4
    },
    {
        "x": 4,
        "y": 3,
        "z": 28,
        "texture": 4
    },
    {
        "x": 5,
        "y": 3,
        "z": 28,
        "texture": 4
    },
    {
        "x": 5,
        "y": 4,
        "z": 28,
        "texture": 4
    },
    {
        "x": 6,
        "y": 4,
        "z": 28,
        "texture": 4
    },
    {
        "x": 6,
        "y": 3,
        "z": 28,
        "texture": 4
    },
    {
        "x": 6,
        "y": 3,
        "z": 27,
        "texture": 4
    },
    {
        "x": 6,
        "y": 4,
        "z": 27,
        "texture": 4
    },
    {
        "x": 6,
        "y": 4,
        "z": 26,
        "texture": 4
    },
    {
        "x": 6,
        "y": 3,
        "z": 26,
        "texture": 4
    },
    {
        "x": 6,
        "y": 3,
        "z": 25,
        "texture": 4
    },
    {
        "x": 6,
        "y": 4,
        "z": 25,
        "texture": 4
    },
    {
        "x": 5,
        "y": 3,
        "z": 25,
        "texture": 4
    },
    {
        "x": 5,
        "y": 4,
        "z": 25,
        "texture": 4
    },
    {
        "x": 4,
        "y": 3,
        "z": 25,
        "texture": 4
    },
    {
        "x": 4,
        "y": 4,
        "z": 25,
        "texture": 4
    },
    {
        "x": 3,
        "y": 3,
        "z": 25,
        "texture": 4
    },
    {
        "x": 3,
        "y": 4,
        "z": 25,
        "texture": 4
    },
    {
        "x": 2,
        "y": 3,
        "z": 25,
        "texture": 4
    },
    {
        "x": 2,
        "y": 4,
        "z": 25,
        "texture": 4
    },
    {
        "x": 2,
        "y": 3,
        "z": 26,
        "texture": 4
    },
    {
        "x": 2,
        "y": 4,
        "z": 26,
        "texture": 4
    },
    {
        "x": 2,
        "y": 3,
        "z": 27,
        "texture": 4
    },
    {
        "x": 2,
        "y": 4,
        "z": 28,
        "texture": 4
    },
    {
        "x": 2,
        "y": 4,
        "z": 27,
        "texture": 4
    },
    {
        "x": 2,
        "y": 3,
        "z": 28,
        "texture": 4
    },
    {
        "x": 2,
        "y": 3,
        "z": 29,
        "texture": 4
    },
    {
        "x": 3,
        "y": 4,
        "z": 29,
        "texture": 4
    },
    {
        "x": 2,
        "y": 4,
        "z": 29,
        "texture": 4
    },
    {
        "x": 3,
        "y": 3,
        "z": 29,
        "texture": 4
    },
    {
        "x": 4,
        "y": 3,
        "z": 29,
        "texture": 4
    },
    {
        "x": 5,
        "y": 3,
        "z": 29,
        "texture": 4
    },
    {
        "x": 6,
        "y": 3,
        "z": 29,
        "texture": 4
    },
    {
        "x": 6,
        "y": 4,
        "z": 29,
        "texture": 4
    },
    {
        "x": 5,
        "y": 4,
        "z": 29,
        "texture": 4
    },
    {
        "x": 4,
        "y": 4,
        "z": 29,
        "texture": 4
    },
    {
        "x": 5,
        "y": 5,
        "z": 27,
        "texture": 4
    },
    {
        "x": 5,
        "y": 6,
        "z": 27,
        "texture": 4
    },
    {
        "x": 4,
        "y": 6,
        "z": 27,
        "texture": 4
    },
    {
        "x": 4,
        "y": 7,
        "z": 27,
        "texture": 4
    },
    {
        "x": 4,
        "y": 6,
        "z": 28,
        "texture": 4
    },
    {
        "x": 4,
        "y": 5,
        "z": 28,
        "texture": 4
    },
    {
        "x": 3,
        "y": 5,
        "z": 28,
        "texture": 4
    },
    {
        "x": 3,
        "y": 6,
        "z": 28,
        "texture": 4
    },
    {
        "x": 3,
        "y": 6,
        "z": 27,
        "texture": 4
    },
    {
        "x": 3,
        "y": 5,
        "z": 27,
        "texture": 4
    },
    {
        "x": 4,
        "y": 5,
        "z": 27,
        "texture": 4
    },
    {
        "x": 4,
        "y": 5,
        "z": 26,
        "texture": 4
    },
    {
        "x": 12,
        "y": 0,
        "z": 18,
        "texture": 3
    },
    {
        "x": 12,
        "y": 1,
        "z": 18,
        "texture": 3
    },
    {
        "x": 12,
        "y": 2,
        "z": 18,
        "texture": 3
    },
    {
        "x": 12,
        "y": 3,
        "z": 18,
        "texture": 3
    },
    {
        "x": 13,
        "y": 2,
        "z": 18,
        "texture": 4
    },
    {
        "x": 13,
        "y": 3,
        "z": 18,
        "texture": 4
    },
    {
        "x": 14,
        "y": 3,
        "z": 18,
        "texture": 4
    },
    {
        "x": 14,
        "y": 2,
        "z": 18,
        "texture": 4
    },
    {
        "x": 13,
        "y": 2,
        "z": 17,
        "texture": 4
    },
    {
        "x": 12,
        "y": 4,
        "z": 18,
        "texture": 4
    },
    {
        "x": 12,
        "y": 5,
        "z": 18,
        "texture": 4
    },
    {
        "x": 13,
        "y": 4,
        "z": 18,
        "texture": 4
    },
    {
        "x": 13,
        "y": 5,
        "z": 18,
        "texture": 4
    },
    {
        "x": 12,
        "y": 4,
        "z": 17,
        "texture": 4
    },
    {
        "x": 12,
        "y": 5,
        "z": 17,
        "texture": 4
    },
    {
        "x": 11,
        "y": 4,
        "z": 18,
        "texture": 4
    },
    {
        "x": 11,
        "y": 5,
        "z": 18,
        "texture": 4
    },
    {
        "x": 12,
        "y": 4,
        "z": 19,
        "texture": 4
    },
    {
        "x": 12,
        "y": 5,
        "z": 19,
        "texture": 4
    },
    {
        "x": 12,
        "y": 3,
        "z": 19,
        "texture": 4
    },
    {
        "x": 12,
        "y": 2,
        "z": 19,
        "texture": 4
    },
    {
        "x": 12,
        "y": 3,
        "z": 20,
        "texture": 4
    },
    {
        "x": 12,
        "y": 2,
        "z": 20,
        "texture": 4
    },
    {
        "x": 11,
        "y": 2,
        "z": 19,
        "texture": 4
    },
    {
        "x": 11,
        "y": 2,
        "z": 18,
        "texture": 4
    },
    {
        "x": 11,
        "y": 3,
        "z": 18,
        "texture": 4
    },
    {
        "x": 12,
        "y": 2,
        "z": 17,
        "texture": 4
    },
    {
        "x": 11,
        "y": 2,
        "z": 17,
        "texture": 4
    },
    {
        "x": 12,
        "y": 3,
        "z": 17,
        "texture": 4
    },
    {
        "x": 11,
        "y": 3,
        "z": 17,
        "texture": 4
    },
    {
        "x": 13,
        "y": 3,
        "z": 16,
        "texture": 4
    },
    {
        "x": 14,
        "y": 2,
        "z": 17,
        "texture": 4
    },
    {
        "x": 13,
        "y": 2,
        "z": 16,
        "texture": 4
    },
    {
        "x": 12,
        "y": 2,
        "z": 16,
        "texture": 4
    },
    {
        "x": 11,
        "y": 2,
        "z": 16,
        "texture": 4
    },
    {
        "x": 12,
        "y": 3,
        "z": 16,
        "texture": 4
    },
    {
        "x": 10,
        "y": 2,
        "z": 17,
        "texture": 4
    },
    {
        "x": 10,
        "y": 3,
        "z": 18,
        "texture": 4
    },
    {
        "x": 10,
        "y": 3,
        "z": 17,
        "texture": 4
    },
    {
        "x": 10,
        "y": 2,
        "z": 18,
        "texture": 4
    },
    {
        "x": 10,
        "y": 3,
        "z": 19,
        "texture": 4
    },
    {
        "x": 11,
        "y": 3,
        "z": 19,
        "texture": 4
    },
    {
        "x": 10,
        "y": 2,
        "z": 19,
        "texture": 4
    },
    {
        "x": 11,
        "y": 2,
        "z": 20,
        "texture": 4
    },
    {
        "x": 8,
        "y": 0,
        "z": 11,
        "texture": 3
    },
    {
        "x": 8,
        "y": 1,
        "z": 11,
        "texture": 3
    },
    {
        "x": 8,
        "y": 2,
        "z": 11,
        "texture": 3
    },
    {
        "x": 8,
        "y": 3,
        "z": 11,
        "texture": 3
    },
    {
        "x": 8,
        "y": 4,
        "z": 11,
        "texture": 3
    },
    {
        "x": 5,
        "y": 0,
        "z": 16,
        "texture": 3
    },
    {
        "x": 5,
        "y": 1,
        "z": 16,
        "texture": 3
    },
    {
        "x": 5,
        "y": 2,
        "z": 16,
        "texture": 3
    },
    {
        "x": 5,
        "y": 3,
        "z": 16,
        "texture": 3
    },
    {
        "x": 4,
        "y": 0,
        "z": 11,
        "texture": 3
    },
    {
        "x": 4,
        "y": 1,
        "z": 11,
        "texture": 3
    },
    {
        "x": 4,
        "y": 2,
        "z": 11,
        "texture": 3
    },
    {
        "x": 4,
        "y": 3,
        "z": 11,
        "texture": 3
    },
    {
        "x": 8,
        "y": 0,
        "z": 15,
        "texture": 3
    },
    {
        "x": 8,
        "y": 1,
        "z": 15,
        "texture": 3
    },
    {
        "x": 8,
        "y": 3,
        "z": 15,
        "texture": 3
    },
    {
        "x": 8,
        "y": 2,
        "z": 15,
        "texture": 3
    },
    {
        "x": 8,
        "y": 4,
        "z": 15,
        "texture": 3
    },
    {
        "x": 9,
        "y": 0,
        "z": 21,
        "texture": 3
    },
    {
        "x": 9,
        "y": 1,
        "z": 21,
        "texture": 3
    },
    {
        "x": 9,
        "y": 2,
        "z": 21,
        "texture": 3
    },
    {
        "x": 9,
        "y": 3,
        "z": 21,
        "texture": 3
    },
    {
        "x": 9,
        "y": 4,
        "z": 21,
        "texture": 3
    },
    {
        "x": 15,
        "y": 0,
        "z": 22,
        "texture": 3
    },
    {
        "x": 15,
        "y": 1,
        "z": 22,
        "texture": 3
    },
    {
        "x": 15,
        "y": 2,
        "z": 22,
        "texture": 3
    },
    {
        "x": 15,
        "y": 3,
        "z": 22,
        "texture": 3
    },
    {
        "x": 15,
        "y": 4,
        "z": 22,
        "texture": 3
    },
    {
        "x": 11,
        "y": 0,
        "z": 25,
        "texture": 3
    },
    {
        "x": 11,
        "y": 1,
        "z": 25,
        "texture": 3
    },
    {
        "x": 11,
        "y": 2,
        "z": 25,
        "texture": 3
    },
    {
        "x": 11,
        "y": 3,
        "z": 25,
        "texture": 3
    },
    {
        "x": 11,
        "y": 4,
        "z": 25,
        "texture": 3
    },
    {
        "x": 11,
        "y": 5,
        "z": 25,
        "texture": 3
    },
    {
        "x": 15,
        "y": 0,
        "z": 25,
        "texture": 3
    },
    {
        "x": 15,
        "y": 1,
        "z": 25,
        "texture": 3
    },
    {
        "x": 15,
        "y": 2,
        "z": 25,
        "texture": 3
    },
    {
        "x": 15,
        "y": 3,
        "z": 25,
        "texture": 3
    },
    {
        "x": 15,
        "y": 4,
        "z": 25,
        "texture": 3
    },
    {
        "x": 15,
        "y": 5,
        "z": 25,
        "texture": 3
    },
    {
        "x": 22,
        "y": 0,
        "z": 22,
        "texture": 3
    },
    {
        "x": 22,
        "y": 1,
        "z": 22,
        "texture": 3
    },
    {
        "x": 22,
        "y": 2,
        "z": 22,
        "texture": 3
    },
    {
        "x": 22,
        "y": 3,
        "z": 22,
        "texture": 3
    },
    {
        "x": 19,
        "y": 0,
        "z": 20,
        "texture": 3
    },
    {
        "x": 19,
        "y": 1,
        "z": 20,
        "texture": 3
    },
    {
        "x": 19,
        "y": 2,
        "z": 20,
        "texture": 3
    },
    {
        "x": 19,
        "y": 3,
        "z": 20,
        "texture": 3
    },
    {
        "x": 20,
        "y": 0,
        "z": 24,
        "texture": 3
    },
    {
        "x": 20,
        "y": 1,
        "z": 24,
        "texture": 3
    },
    {
        "x": 20,
        "y": 2,
        "z": 24,
        "texture": 3
    }
]