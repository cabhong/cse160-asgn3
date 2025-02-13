class Camera {
    constructor() {
        this.fov = 71;
        this.eye = new Vector3([0,1,1]);
        this.at = new Vector3([0,1, -100]);
        this.sens = 0.6;
        this.sensMultiplier = 0.001;
        this.speed = 0.02;
        this.up = new Vector3([0,1,0]);
        this.projectionMatrix = new Matrix4();
        this.viewMatrix = new Matrix4();

        this.updateMatrices();
    }

    getYaw() {
        let dx = this.at.elements[0] - this.eye.elements[0];
        let dz = this.at.elements[2] - this.eye.elements[2];
        return Math.atan2(dx, -dz);
    }
    
    getPitch() {
        let dx = this.at.elements[0] - this.eye.elements[0];
        let dy = this.at.elements[1] - this.eye.elements[1];
        let dz = this.at.elements[2] - this.eye.elements[2];
        return Math.asin(dy / Math.sqrt(dx * dx + dy * dy + dz * dz));
    }

    rotateCamera(movementX, movementY) {
        let yaw = this.getYaw() + movementX * this.sens * this.sensMultiplier;
        let pitch = this.getPitch() - movementY * this.sens * this.sensMultiplier;

        // Clamp pitch
        const maxPitch = Math.PI / 2 - 0.1;
        pitch = Math.max(-maxPitch, Math.min(maxPitch, pitch));

        // Compute new look-at direction
        let forwardVec = [
            Math.sin(yaw) * Math.cos(pitch),
            Math.sin(pitch),
            -Math.cos(yaw) * Math.cos(pitch)
        ];

        // Update look-at position relative to eye
        this.at.elements[0] = this.eye.elements[0] + forwardVec[0];
        this.at.elements[1] = this.eye.elements[1] + forwardVec[1];
        this.at.elements[2] = this.eye.elements[2] + forwardVec[2];

        this.updateMatrices();
    }

    moveCamera() {
        let yaw = this.getYaw();
        let pitch = this.getPitch();
    
        // Calculate movement vectors
        let forwardMovement = new Vector3([
            Math.sin(yaw) * this.speed * this.normalizeSpeed(),
            0, // No change to Y for horizontal movement
            -Math.cos(yaw) * this.speed * this.normalizeSpeed()
        ]);
    
        let horizontalMovement = new Vector3([
            Math.sin(yaw + Math.PI / 2) * this.speed * this.normalizeSpeed(),
            0, // No change to Y for horizontal movement
            -Math.cos(yaw + Math.PI / 2) * this.speed * this.normalizeSpeed()
        ]);

        
    
        // Move camera based on input
        if (forward) {
            this.eye.add(forwardMovement);
        }
        if (back) {
            this.eye.sub(forwardMovement);
        }
        if (right) {
            this.eye.add(horizontalMovement);
        }
        if (left) {
            this.eye.sub(horizontalMovement);
        }
    
        // Recalculate the look-at position based on eye position and pitch/yaw
        let forwardVec = new Vector3([
            Math.sin(yaw) * Math.cos(pitch),
            Math.sin(pitch),
            -Math.cos(yaw) * Math.cos(pitch)
        ]);
    
        this.at.set(this.eye).add(forwardVec);
    
        this.updateMatrices();
    }

    normalizeSpeed() {
        let magnitude = 1
        if((forward || back) && (right || left)) {
            magnitude = 1/(Math.sqrt(2));
        }
        return magnitude
    }

    updateMatrices() {
        this.projectionMatrix.setPerspective(this.fov, canvas.width/canvas.height, 0.1, 1000);
        this.viewMatrix.setLookAt(
            this.eye.elements[0], this.eye.elements[1], this.eye.elements[2],  
            this.at.elements[0], this.at.elements[1], this.at.elements[2], 
            this.up.elements[0], this.up.elements[1], this.up.elements[2]
        );
        // console.log(this.at.elements)
    }
}