class Cylinder {
    constructor(matrix, color, size, depth) {
        this.type = "circle";
        this.color = color;
        this.size = size;
        this.depth = depth;
        this.segments = 10;
        this.matrix = matrix
        this.buffer = null;
        this.vertices = null;
    }

    generateVertices() {
        var d = this.size / 20.0;
        let v = [];
        let angleStep = 360 / this.segments;
        
        let topVertices = [];
        let bottomVertices = [];
    
        for (var angle = 0; angle < 360; angle += angleStep) {
            let centerPt = [0, 0];
            let angle1 = angle;
            let angle2 = angle + angleStep;
    
            let vec1 = [
                Math.cos((angle1 * Math.PI) / 180) * d,
                Math.sin((angle1 * Math.PI) / 180) * d,
            ];
            let vec2 = [
                Math.cos((angle2 * Math.PI) / 180) * d,
                Math.sin((angle2 * Math.PI) / 180) * d,
            ];
    
            let pt1_top = [centerPt[0] + vec1[0], 0, centerPt[1] + vec1[1]];
            let pt2_top = [centerPt[0] + vec2[0], 0, centerPt[1] + vec2[1]];
            
            let pt1_bottom = [pt1_top[0], this.depth, pt1_top[2]];
            let pt2_bottom = [pt2_top[0], this.depth, pt2_top[2]];
    
            topVertices.push(0, 0, 0, pt1_top[0], pt1_top[1], pt1_top[2], pt2_top[0], pt2_top[1], pt2_top[2]);
            bottomVertices.push(0, this.depth, 0, pt1_bottom[0], pt1_bottom[1], pt1_bottom[2], pt2_bottom[0], pt2_bottom[1], pt2_bottom[2]);
    
            v.push(
                pt1_top[0], pt1_top[1], pt1_top[2],   // Top 1
                pt1_bottom[0], pt1_bottom[1], pt1_bottom[2],   // Bottom 1
                pt2_top[0], pt2_top[1], pt2_top[2],   // Top 2
    
                pt2_top[0], pt2_top[1], pt2_top[2],   // Top 2
                pt1_bottom[0], pt1_bottom[1], pt1_bottom[2],   // Bottom 1
                pt2_bottom[0], pt2_bottom[1], pt2_bottom[2]    // Bottom 2
            );
        }
    
        this.vertices = new Float32Array([...topVertices, ...bottomVertices, ...v]);
    }

    render() {
        let [r, g, b, a] = this.color;


        
        // Pass the color of a point to uFragColor variable
        gl.uniform4f(u_FragColor, r, g, b, a);

        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements)

        if (this.vertices === null) {
            this.generateVertices();
        }

        // Create a buffer object
        if (this.buffer === null) {
            this.buffer = gl.createBuffer();
            if (!this.buffer) {
            console.log("Failed to create the buffer object");
            return -1;
            }
        }

        // Bind the buffer object to target
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);

        // Write date into the buffer object
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(this.vertices),
            gl.DYNAMIC_DRAW
        );


        // Assign the buffer object to a_Position variable
    gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
  
    // Enable the assignment to a_Position variable
    gl.enableVertexAttribArray(a_Position);
        gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length / 3);
    }
}
