class OBJ {
    constructor(path, matrix) {
        this.path = path
        this.vertices = [];
        this.uvs = [];
        this.buffer = null;
        this.uvBuffer = null;
        this.matrix = matrix;
        this.textureNum = 10;
        loadOBJ(this)
    }
    renderfast() {
        var n = this.vertices.length/3
        gl.uniform1i(u_whichTexture, this.textureNum);
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements)
        gl.uniform4f(u_FragColor, 1, 1, 1, 1);
        if(this.buffer === null) {
            this.buffer = gl.createBuffer()
            if (!this.buffer) {
                console.log('Failed to create the buffer object');
                return -1;
            }
        }

        if(this.uvBuffer === null) {
            this.uvBuffer = gl.createBuffer()
            if (!this.uvBuffer) {
                console.log('Failed to create the buffer object');
                return -1;
            }
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        // Write date into the buffer object
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);
            // Assign the buffer object to a_Position variable
        gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
            // Enable the assignment to a_Position variable
        gl.enableVertexAttribArray(a_Position);
        // Bind the buffer object to target
        
        gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.uvs, gl.DYNAMIC_DRAW);
        gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(a_UV);
        
        
        gl.drawArrays(gl.TRIANGLES, 0 , n)
    }
}

function loadOBJ(obj) {
    
    fetch(obj.path).then(res=>res.text())
    .then(text => readOBJ(text.split("\n"),obj))
}

function readOBJ(lines, obj) {
    let verts = [];
    let uvs = [];
    let faces = [];
    console.log(lines);
    for(let line of lines) {
        line = line.trim();
        let parts = line.split(' ');
        if(parts.length > 0) {
            switch(parts[0]) {
                case "v":
                    verts.push([parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3])]);
                    break;
                case "f":
                    faces.push([])
                    for(let i = 1; i < parts.length; ++i) {
                        let faceParts = parts[i].split("/")
                        faces[faces.length-1].push([parseFloat(faceParts[0]), parseFloat(faceParts[1])]);
                    } 
                    break;
                case "vt": // Texture coordinate (UV)
                    uvs.push([
                        parseFloat(parts[1]),
                        parseFloat(parts[2]),
                    ]);
                    break;
            }
        }
    }
    

    //Triangulate Faces
    faces.forEach(face => {
        if(face.length < 3) return;
        
        for(let i = 1; i < face.length-1; ++i) {
            obj.vertices.push(...verts[face[0][0]-1])
            obj.vertices.push(...verts[face[i][0]-1])
            obj.vertices.push(...verts[face[i+1][0]-1])

            obj.uvs.push(...uvs[face[0][1]-1])
            obj.uvs.push(...uvs[face[i][1]-1])
            obj.uvs.push(...uvs[face[i+1][1]-1])


        }
    }) 
    
    obj.vertices = new Float32Array(obj.vertices);
    obj.uvs = new Float32Array(obj.uvs);
    console.log(obj.vertices)
}