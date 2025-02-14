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

        this.allverts = new Float32Array([
            0,0,0, 1,1,0, 1,0,0,
            0,0,0, 0,1,0, 1,1,0,

            0,1,0, 0,1,1, 1,1,1,
            0,1,0, 1,1,1, 1,1,0,

            0,0,0, 0,1,1, 0,0,1,
            0,0,0, 0,1,0, 0,1,1,

            0,0,1, 1,1,1, 1,0,1,
            0,0,1, 0,1,1, 1,1,1,

            0,0,0, 0,0,1, 1,0,1,
            0,0,0, 1,0,1, 1,0,0,

            1,0,0, 1,1,1, 1,0,1,
            1,0,0, 1,1,0, 1,1,1

        ])

        this.alluvs = new Float32Array([
            0,0, 1,1, 1,0,
            0,0, 0,1, 1,1,

            0,0, 0,1, 1,1,
            0,0, 1,1, 1,0,

            1,0, 0,1, 0,0,
            1,0, 1,1, 0,1,

            1,0, 0,1, 0,0,
            1,0, 1,1, 0,1,

            0,1, 0,0, 1,0,
            0,1, 1,0, 1,1,

            0,0, 1,1, 1,0,
            0,0, 0,1, 1,1
        ])

        if([0,1].includes(texIndex)) {
            this.alluvs = new Float32Array([
                0,0.5, 0.25,0.75, 0.25,0.5,     //Front
                0,0.5, 0,0.75, 0.25,0.75,

                0.5,0.25, 0.5,0.5, 0.75,0.5,
                0.5,0.25, 0.75,0.5, 0.75,0.25,  //Top

                0.25,0.5, 0,0.75, 0,0.5,        //Left
                0.25,0.5, 0.25,0.75, 0,0.75,

                0.25,0.5, 0,0.75, 0,0.5,         //Back
                0.25,0.5, 0.25,0.75, 0,0.75,

                0,0.5, 0,0.25, 0.25,0.25,       //Bottom
                0,0.5, 0.25,0.25, 0.25,0.5,

                0.25,0.5, 0,0.75, 0,0.5,        //Right 
                0.25,0.5, 0.25,0.75, 0,0.75
            ])
        }
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

    }
    renderfast(){
        var color = this.color
        gl.uniform1i(u_whichTexture, this.textureNum);

        gl.uniform4f(u_FragColor, color[0], color[1], color[2], color[3])

        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements)
        drawTriangle3DUV(this.allverts, this.alluvs,this.buffer, this.uvBuffer)
        // if (g_vertexBuffer==null) {
        //     initTriangle3D();
        // }

        // gl.bufferData(gl.ARRAY_BUFFER, this.allverts, gl.DYNAMIC_DRAW);

        // gl.drawArrays(gl.TRIANGLES, 0, 36)



        
    }
}