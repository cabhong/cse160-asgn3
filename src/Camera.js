class Camera {
    constructor() {
        this.fov = 71;
        this.eye = new Vector3([16,1,16]);
        this.at = new Vector3([0,1, -100]);
        this.sens = 0.6;
        this.sensMultiplier = 0.001;
        this.speed = 5;
        this.up = new Vector3([0,1,0]);
        this.projectionMatrix = new Matrix4();
        this.viewMatrix = new Matrix4();
        this.deltaTime = 0;
        this.lastTime = performance.now();

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

        const maxPitch = Math.PI / 2 - 0.1;
        pitch = Math.max(-maxPitch, Math.min(maxPitch, pitch));

        let forwardVec = [
            Math.sin(yaw) * Math.cos(pitch),
            Math.sin(pitch),
            -Math.cos(yaw) * Math.cos(pitch)
        ];
        this.at.elements[0] = this.eye.elements[0] + forwardVec[0];
        this.at.elements[1] = this.eye.elements[1] + forwardVec[1];
        this.at.elements[2] = this.eye.elements[2] + forwardVec[2];

        this.updateMatrices();
    }

    moveCamera() {
        let yaw = this.getYaw();
        let pitch = this.getPitch();
    
        let forwardMovement = new Vector3([
            Math.sin(yaw) * this.speed * this.normalizeSpeed() * this.deltaTime,
            0,
            -Math.cos(yaw) * this.speed * this.normalizeSpeed() * this.deltaTime
        ]);
    
        let horizontalMovement = new Vector3([
            Math.sin(yaw + Math.PI / 2) * this.speed * this.normalizeSpeed() * this.deltaTime,
            0, 
            -Math.cos(yaw + Math.PI / 2) * this.speed * this.normalizeSpeed() * this.deltaTime
        ]);

        let upMovement = new Vector3([0, 1, 0]).mul(this.speed * this.deltaTime);
        let downMovement = new Vector3([0, -1, 0]).mul(this.speed * this.deltaTime);
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
        if(up) {
            this.eye.add(upMovement);
        }
        if(down) {
            this.eye.add(downMovement)
        }
    
        let forwardVec = new Vector3([
            Math.sin(yaw) * Math.cos(pitch),
            Math.sin(pitch),
            -Math.cos(yaw) * Math.cos(pitch)
        ]);
    
        this.at.set(this.eye).add(forwardVec);
    
        this.updateMatrices();
    }
    panLeft() {
        if(panL){
            let f = new Vector3().set(this.at);
            f.sub(this.eye);
            let rotationMatrix = new Matrix4();
            rotationMatrix.setRotate(1, this.up.elements[0], this.up.elements[1], this.up.elements[2]);
            let f_prime = rotationMatrix.multiplyVector3(f);
            this.at.set(this.eye).add(f_prime)
        }
        
    }

    panRight() {
        if(panR){
            let f = new Vector3().set(this.at);
            f.sub(this.eye);
            let rotationMatrix = new Matrix4();
            rotationMatrix.setRotate(-1, this.up.elements[0], this.up.elements[1], this.up.elements[2]);
            let f_prime = rotationMatrix.multiplyVector3(f);
            this.at.set(this.eye).add(f_prime)
        }
        
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

    updateDeltaTime() {
        const currentTime = performance.now();
        this.deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
    }
}