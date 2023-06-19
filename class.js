class Point {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    getX() {
      return this.x;
    }
  
    getY() {
      return this.y;
    }
  
    getZ() {
      return this.z;
    }
    constructor(arrayOfFloat, index) {
        index = index * 3;
        this.x = arrayOfFloat[index];
        this.y = arrayOfFloat[index + 1];
        this.z = arrayOfFloat[index + 2];
    }
  }