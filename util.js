class Point {
    // Constructor that can take either a number or three numbers as arguments.
    //If it's two numbers and args 3 is undefined, args2 will be the patch of the teapot and args1 will be the index of the point in the patch.
    //otherwise they are used as coordinates.
    constructor(arg1, arg2, arg3) {
        if (typeof arg1 === 'number' && typeof arg2 === 'number' && arg3 === undefined) {
            const patch = teapotBP[arg2];
            const index = (patch[arg1] - 1) * 3;
            this.x = teapotVS[index];
            this.y = teapotVS[index + 1];
            this.z = teapotVS[index + 2];
        } else {
            this.x = arg1 || 0;
            this.y = arg2 || 0;
            this.z = arg3 || 0;
        }

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

    pow(i) {
        this.x = Math.pow(this.x, i);
        this.y = Math.pow(this.y, i);
        this.z = Math.pow(this.z, i);
    }

    pointPerBern(i, n, t) {
        let bern = bernstein(i, n, t);
        this.x = this.x * bern;
        this.y = this.y * bern;
        this.z = this.z * bern;
    }

    addPoint(point) {
        this.x = this.x + point.getX();
        this.y = this.y + point.getY();
        this.z = this.z + point.getZ();
    }

    toString() {
        return `${this.x} ${this.y} ${this.z}`;
    }
}

//Return the binomial coefficient of n and k
function binomialCoefficient(n, k) {
    if (k === 0 || k === n) {
        return 1;
    } else {
        return factorial(n) / (factorial(k) * factorial(n - k));
    }
}

//Return the factorial of n
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

//Return the bernstein polynomial of i, n and t
function bernstein(i, n, t) {
    return binomialCoefficient(n, i) * Math.pow(t, i) * Math.pow(1 - t, n - i);
}
