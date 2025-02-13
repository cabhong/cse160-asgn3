class Cube {
    constructor(matrix, color, texIndex) {
    //   this.pos = pos
        this.color = color;
    //   this.size = size;
    //   this.segments = segments;
        this.matrix = matrix;
        this.buffer = null;
        this.uvBuffer = null
        this.textureNum = texIndex;
    }

    render(){
        var pos = this.pos
        var color = this.color
        var currSize = this.size

        gl.uniform1i(u_whichTexture, this.textureNum);

        gl.uniform4f(u_FragColor, color[0], color[1], color[2], color[3])

        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements)
        
        // Create a buffer object
        if(this.buffer === null) {
            this.buffer = gl.createBuffer();
            if (!this.buffer) {
            console.log('Failed to create the buffer object');
            return -1;
            }
        }
        
        
        // var d = this.size/200.0

        // let angleStep=360/this.segments;
        // for(var angle = 0; angle < 360; angle = angle+angleStep) {
        //     let centerPt = [pos[0], pos[1]];
        //     let angle1 = angle;
        //     let angle2 = angle + angleStep;
        //     let vec1 = [ Math.cos(angle1*Math.PI/180)*d, Math.sin(angle1*Math.PI/180)*d]
        //     let vec2 = [ Math.cos(angle2*Math.PI/180)*d, Math.sin(angle2*Math.PI/180)*d]
        //     let pt1 = [ centerPt[0] + vec1[0], centerPt[1] + vec1[1] ]
        //     let pt2 = [ centerPt[0] + vec2[0], centerPt[1] + vec2[1] ]

        //     drawTriangle([pos[0],pos[1],pt1[0],pt1[1],pt2[0],pt2[1]]);
        // }

        //Front of Cube
        drawTriangle3DUV([0,0,0, 1,1,0, 1,0,0], [0,0, 1,1, 1,0], this.buffer)
        drawTriangle3DUV([0,0,0, 0,1,0, 1,1,0], [0,0, 0,1, 1,1],this.buffer)


        //Top
        drawTriangle3DUV([0,1,0, 0,1,1, 1,1,1], [0,0, 0,1, 1,1], this.buffer)
        drawTriangle3DUV([0,1,0, 1,1,1, 1,1,0], [0,0, 1,1, 1,0], this.buffer)

        //Left Side
        drawTriangle3DUV([0,0,0, 0,1,1, 0,0,1], [1,0, 0,1, 0,0], this.buffer)
        drawTriangle3DUV([0,0,0, 0,1,0, 0,1,1], [1,0, 1,1, 0,1],this.buffer)


        //Back
        drawTriangle3DUV([0,0,1, 1,1,1, 1,0,1], [1,0, 0,1, 0,0], this.buffer)
        drawTriangle3DUV([0,0,1, 0,1,1, 1,1,1], [1,0, 1,1, 0,1], this.buffer)
    
        //Bottom
        drawTriangle3DUV([0,0,0, 0,0,1, 1,0,1], [0,1, 0,0, 1,0], this.buffer)
        drawTriangle3DUV([0,0,0, 1,0,1, 1,0,0], [0,1, 1,0, 1,1], this.buffer)

        //RightSide
        drawTriangle3DUV([1,0,0, 1,1,1, 1,0,1], [0,0, 1,1, 1,0],this.buffer)
        drawTriangle3DUV([1,0,0, 1,1,0, 1,1,1], [0,0, 0,1, 1,1],this.buffer)

    }

    renderfast(){
        var color = this.color
        gl.uniform1i(u_whichTexture, this.textureNum);

        gl.uniform4f(u_FragColor, color[0], color[1], color[2], color[3])

        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements)
        


        // Create a buffer object
        if(this.buffer === null) {
            this.buffer = gl.createBuffer();
            if (!this.buffer) {
            console.log('Failed to create the buffer object');
            return -1;
            }
        }

        if(this.uvBuffer === null) {
            this.uvBuffer = gl.createBuffer();
            if (!this.uvBuffer) {
                console.log('Failed to create the buffer object');
            return -1;
            }
        }
        

        var allverts = [];
        var alluvs = []



        // //Front of Cube
        allverts = allverts.concat([0,0,0, 1,1,0, 1,0,0])
        allverts = allverts.concat([0,0,0, 0,1,0, 1,1,0])
        alluvs = alluvs.concat([0,0, 1,1, 1,0]);
        alluvs = alluvs.concat([0,0, 0,1, 1,1]);
        // drawTriangle3DUV([0,0,0, 1,1,0, 1,0,0], [0,0, 1,1, 1,0], this.buffer)
        // drawTriangle3DUV([0,0,0, 0,1,0, 1,1,0], [0,0, 0,1, 1,1],this.buffer)


        // //Top
        allverts = allverts.concat([0,1,0, 0,1,1, 1,1,1])
        allverts = allverts.concat([0,1,0, 1,1,1, 1,1,0])
        alluvs = alluvs.concat([0,0, 0,1, 1,1]);
        alluvs = alluvs.concat([0,0, 1,1, 1,0]);
        // drawTriangle3DUV([0,1,0, 0,1,1, 1,1,1], [0,0, 0,1, 1,1], this.buffer)
        // drawTriangle3DUV([0,1,0, 1,1,1, 1,1,0], [0,0, 1,1, 1,0], this.buffer)

        // //Left Side
        allverts = allverts.concat([0,0,0, 0,1,1, 0,0,1])
        allverts = allverts.concat([0,0,0, 0,1,0, 0,1,1])
        alluvs = alluvs.concat([1,0, 0,1, 0,0]);
        alluvs = alluvs.concat([1,0, 1,1, 0,1]);
        // drawTriangle3DUV([0,0,0, 0,1,1, 0,0,1], [1,0, 0,1, 0,0], this.buffer)
        // drawTriangle3DUV([0,0,0, 0,1,0, 0,1,1], [1,0, 1,1, 0,1],this.buffer)


        // //Back
        allverts = allverts.concat([0,0,1, 1,1,1, 1,0,1])
        allverts = allverts.concat([0,0,1, 0,1,1, 1,1,1])
        alluvs = alluvs.concat([1,0, 0,1, 0,0]);
        alluvs = alluvs.concat([1,0, 1,1, 0,1]);
        // drawTriangle3DUV([0,0,1, 1,1,1, 1,0,1], [1,0, 0,1, 0,0], this.buffer)
        // drawTriangle3DUV([0,0,1, 0,1,1, 1,1,1], [1,0, 1,1, 0,1], this.buffer)
    
        // //Bottom
        allverts = allverts.concat([0,0,0, 0,0,1, 1,0,1])
        allverts = allverts.concat([0,0,0, 1,0,1, 1,0,0])
        alluvs = alluvs.concat([0,1, 0,0, 1,0]);
        alluvs = alluvs.concat([0,1, 1,0, 1,1]);
        // drawTriangle3DUV([0,0,0, 0,0,1, 1,0,1], [0,1, 0,0, 1,0], this.buffer)
        // drawTriangle3DUV([0,0,0, 1,0,1, 1,0,0], [0,1, 1,0, 1,1], this.buffer)

        // //RightSide
        allverts = allverts.concat([1,0,0, 1,1,1, 1,0,1])
        allverts = allverts.concat([1,0,0, 1,1,0, 1,1,1])
        alluvs = alluvs.concat([0,0, 1,1, 1,0]);
        alluvs = alluvs.concat([0,0, 0,1, 1,1]);
        // drawTriangle3DUV([1,0,0, 1,1,1, 1,0,1], [0,0, 1,1, 1,0],this.buffer)
        // drawTriangle3DUV([1,0,0, 1,1,0, 1,1,1], [0,0, 0,1, 1,1],this.buffer)

        drawTriangle3DUV(allverts, alluvs,this.buffer, this.uvBuffer)

        
    }
}