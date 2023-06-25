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
    //Return the multiplication of the point with the bernstein polynomial of i, n and t
    pointPerBern(i, n, t) {
        let bern = bernstein(i, n, t);
        return new Point(this.x * bern, this.y * bern, this.z * bern);
    }
    //Return the addition of the point with another point
    addPoint(point) {
        return new Point(this.x + point.getX(), this.y + point.getY(), this.z + point.getZ());
    }
    //Return the subtraction of the point with another point
    subtractPoint(point) {
        return new Point(this.x - point.getX(), this.y - point.getY(), this.z - point.getZ());
    }
    //Return the multiplication of the point with a scalar
    divideScalar(scalar) {
        return new Point(this.x / scalar, this.y / scalar, this.z / scalar);
    }
    //Return the multiplication of the point with a scalar
    multiplyScalar(scalar) {
        return new Point(this.x * scalar, this.y * scalar, this.z * scalar);
    }
    //Return the cross product of the point with another point
    cross(point) {
        const x = this.y * point.getZ() - this.z * point.getY();
        const y = this.z * point.getX() - this.x * point.getZ();
        const z = this.x * point.getY() - this.y * point.getX();
        return new Point(x, y, z);
    }
    //Return the dot product of the point with another point
    dot(point) {
        return this.x * point.getX() + this.y * point.getY() + this.z * point.getZ();
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
//the Map is needed to cache the results
const bernsteinMap = {};

function bernstein(i, n, t) {
    const key = `${i}_${n}_${t}`;
    //check if the result is already cached
    if (bernsteinMap.hasOwnProperty(key)) {
        return bernsteinMap[key];
    }
    //calculate the result
    const result =
        binomialCoefficient(n, i) * Math.pow(t, i) * Math.pow(1 - t, n - i);

    bernsteinMap[key] = result;
    return result;
}


