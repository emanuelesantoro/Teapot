const teapotVS = [1.4, 0.0, 2.4, 1.4, -0.784, 2.4, 0.784, -1.4, 2.4, 0.0, -1.4, 2.4, 1.3375, 0.0, 2.53125, 1.3375, -0.749, 2.53125, 0.749, -1.3375, 2.53125, 0.0, -1.3375, 2.53125, 1.4375, 0.0, 2.53125, 1.4375, -0.805, 2.53125, 0.805, -1.4375, 2.53125, 0.0, -1.4375, 2.53125, 1.5, 0.0, 2.4, 1.5, -0.84, 2.4, 0.84, -1.5, 2.4, 0.0, -1.5, 2.4, -0.784, -1.4, 2.4, -1.4, -0.784, 2.4, -1.4, 0.0, 2.4, -0.749, -1.3375, 2.53125, -1.3375, -0.749, 2.53125, -1.3375, 0.0, 2.53125, -0.805, -1.4375, 2.53125, -1.4375, -0.805, 2.53125, -1.4375, 0.0, 2.53125, -0.84, -1.5, 2.4, -1.5, -0.84, 2.4, -1.5, 0.0, 2.4, -1.4, 0.784, 2.4, -0.784, 1.4, 2.4, 0.0, 1.4, 2.4, -1.3375, 0.749, 2.53125, -0.749, 1.3375, 2.53125, 0.0, 1.3375, 2.53125, -1.4375, 0.805, 2.53125, -0.805, 1.4375, 2.53125, 0.0, 1.4375, 2.53125, -1.5, 0.84, 2.4, -0.84, 1.5, 2.4, 0.0, 1.5, 2.4, 0.784, 1.4, 2.4, 1.4, 0.784, 2.4, 0.749, 1.3375, 2.53125, 1.3375, 0.749, 2.53125, 0.805, 1.4375, 2.53125, 1.4375, 0.805, 2.53125, 0.84, 1.5, 2.4, 1.5, 0.84, 2.4, 1.75, 0.0, 1.875, 1.75, -0.98, 1.875, 0.98, -1.75, 1.875, 0.0, -1.75, 1.875, 2.0, 0.0, 1.35, 2.0, -1.12, 1.35, 1.12, -2.0, 1.35, 0.0, -2.0, 1.35, 2.0, 0.0, 0.9, 2.0, -1.12, 0.9, 1.12, -2.0, 0.9, 0.0, -2.0, 0.9, -0.98, -1.75, 1.875, -1.75, -0.98, 1.875, -1.75, 0.0, 1.875, -1.12, -2.0, 1.35, -2.0, -1.12, 1.35, -2.0, 0.0, 1.35, -1.12, -2.0, 0.9, -2.0, -1.12, 0.9, -2.0, 0.0, 0.9, -1.75, 0.98, 1.875, -0.98, 1.75, 1.875, 0.0, 1.75, 1.875, -2.0, 1.12, 1.35, -1.12, 2.0, 1.35, 0.0, 2.0, 1.35, -2.0, 1.12, 0.9, -1.12, 2.0, 0.9, 0.0, 2.0, 0.9, 0.98, 1.75, 1.875, 1.75, 0.98, 1.875, 1.12, 2.0, 1.35, 2.0, 1.12, 1.35, 1.12, 2.0, 0.9, 2.0, 1.12, 0.9, 2.0, 0.0, 0.45, 2.0, -1.12, 0.45, 1.12, -2.0, 0.45, 0.0, -2.0, 0.45, 1.5, 0.0, 0.225, 1.5, -0.84, 0.225, 0.84, -1.5, 0.225, 0.0, -1.5, 0.225, 1.5, 0.0, 0.15, 1.5, -0.84, 0.15, 0.84, -1.5, 0.15, 0.0, -1.5, 0.15, -1.12, -2.0, 0.45, -2.0, -1.12, 0.45, -2.0, 0.0, 0.45, -0.84, -1.5, 0.225, -1.5, -0.84, 0.225, -1.5, 0.0, 0.225, -0.84, -1.5, 0.15, -1.5, -0.84, 0.15, -1.5, 0.0, 0.15, -2.0, 1.12, 0.45, -1.12, 2.0, 0.45, 0.0, 2.0, 0.45, -1.5, 0.84, 0.225, -0.84, 1.5, 0.225, 0.0, 1.5, 0.225, -1.5, 0.84, 0.15, -0.84, 1.5, 0.15, 0.0, 1.5, 0.15, 1.12, 2.0, 0.45, 2.0, 1.12, 0.45, 0.84, 1.5, 0.225, 1.5, 0.84, 0.225, 0.84, 1.5, 0.15, 1.5, 0.84, 0.15, -1.6, 0.0, 2.025, -1.6, -0.3, 2.025, -1.5, -0.3, 2.25, -1.5, 0.0, 2.25, -2.3, 0.0, 2.025, -2.3, -0.3, 2.025, -2.5, -0.3, 2.25, -2.5, 0.0, 2.25, -2.7, 0.0, 2.025, -2.7, -0.3, 2.025, -3.0, -0.3, 2.25, -3.0, 0.0, 2.25, -2.7, 0.0, 1.8, -2.7, -0.3, 1.8, -3.0, -0.3, 1.8, -3.0, 0.0, 1.8, -1.5, 0.3, 2.25, -1.6, 0.3, 2.025, -2.5, 0.3, 2.25, -2.3, 0.3, 2.025, -3.0, 0.3, 2.25, -2.7, 0.3, 2.025, -3.0, 0.3, 1.8, -2.7, 0.3, 1.8, -2.7, 0.0, 1.575, -2.7, -0.3, 1.575, -3.0, -0.3, 1.35, -3.0, 0.0, 1.35, -2.5, 0.0, 1.125, -2.5, -0.3, 1.125, -2.65, -0.3, 0.9375, -2.65, 0.0, 0.9375, -2.0, -0.3, 0.9, -1.9, -0.3, 0.6, -1.9, 0.0, 0.6, -3.0, 0.3, 1.35, -2.7, 0.3, 1.575, -2.65, 0.3, 0.9375, -2.5, 0.3, 1.125, -1.9, 0.3, 0.6, -2.0, 0.3, 0.9, 1.7, 0.0, 1.425, 1.7, -0.66, 1.425, 1.7, -0.66, 0.6, 1.7, 0.0, 0.6, 2.6, 0.0, 1.425, 2.6, -0.66, 1.425, 3.1, -0.66, 0.825, 3.1, 0.0, 0.825, 2.3, 0.0, 2.1, 2.3, -0.25, 2.1, 2.4, -0.25, 2.025, 2.4, 0.0, 2.025, 2.7, 0.0, 2.4, 2.7, -0.25, 2.4, 3.3, -0.25, 2.4, 3.3, 0.0, 2.4, 1.7, 0.66, 0.6, 1.7, 0.66, 1.425, 3.1, 0.66, 0.825, 2.6, 0.66, 1.425, 2.4, 0.25, 2.025, 2.3, 0.25, 2.1, 3.3, 0.25, 2.4, 2.7, 0.25, 2.4, 2.8, 0.0, 2.475, 2.8, -0.25, 2.475, 3.525, -0.25, 2.49375, 3.525, 0.0, 2.49375, 2.9, 0.0, 2.475, 2.9, -0.15, 2.475, 3.45, -0.15, 2.5125, 3.45, 0.0, 2.5125, 2.8, 0.0, 2.4, 2.8, -0.15, 2.4, 3.2, -0.15, 2.4, 3.2, 0.0, 2.4, 3.525, 0.25, 2.49375, 2.8, 0.25, 2.475, 3.45, 0.15, 2.5125, 2.9, 0.15, 2.475, 3.2, 0.15, 2.4, 2.8, 0.15, 2.4, 0.0, 0.0, 3.15, 0.0, -0.002, 3.15, 0.002, 0.0, 3.15, 0.8, 0.0, 3.15, 0.8, -0.45, 3.15, 0.45, -0.8, 3.15, 0.0, -0.8, 3.15, 0.0, 0.0, 2.85, 0.2, 0.0, 2.7, 0.2, -0.112, 2.7, 0.112, -0.2, 2.7, 0.0, -0.2, 2.7, -0.002, 0.0, 3.15, -0.45, -0.8, 3.15, -0.8, -0.45, 3.15, -0.8, 0.0, 3.15, -0.112, -0.2, 2.7, -0.2, -0.112, 2.7, -0.2, 0.0, 2.7, 0.0, 0.002, 3.15, -0.8, 0.45, 3.15, -0.45, 0.8, 3.15, 0.0, 0.8, 3.15, -0.2, 0.112, 2.7, -0.112, 0.2, 2.7, 0.0, 0.2, 2.7, 0.45, 0.8, 3.15, 0.8, 0.45, 3.15, 0.112, 0.2, 2.7, 0.2, 0.112, 2.7, 0.4, 0.0, 2.55, 0.4, -0.224, 2.55, 0.224, -0.4, 2.55, 0.0, -0.4, 2.55, 1.3, 0.0, 2.55, 1.3, -0.728, 2.55, 0.728, -1.3, 2.55, 0.0, -1.3, 2.55, 1.3, 0.0, 2.4, 1.3, -0.728, 2.4, 0.728, -1.3, 2.4, 0.0, -1.3, 2.4, -0.224, -0.4, 2.55, -0.4, -0.224, 2.55, -0.4, 0.0, 2.55, -0.728, -1.3, 2.55, -1.3, -0.728, 2.55, -1.3, 0.0, 2.55, -0.728, -1.3, 2.4, -1.3, -0.728, 2.4, -1.3, 0.0, 2.4, -0.4, 0.224, 2.55, -0.224, 0.4, 2.55, 0.0, 0.4, 2.55, -1.3, 0.728, 2.55, -0.728, 1.3, 2.55, 0.0, 1.3, 2.55, -1.3, 0.728, 2.4, -0.728, 1.3, 2.4, 0.0, 1.3, 2.4, 0.224, 0.4, 2.55, 0.4, 0.224, 2.55, 0.728, 1.3, 2.55, 1.3, 0.728, 2.55, 0.728, 1.3, 2.4, 1.3, 0.728, 2.4, 0.0, 0.0, 0.0, 1.5, 0.0, 0.15, 1.5, 0.84, 0.15, 0.84, 1.5, 0.15, 0.0, 1.5, 0.15, 1.5, 0.0, 0.075, 1.5, 0.84, 0.075, 0.84, 1.5, 0.075, 0.0, 1.5, 0.075, 1.425, 0.0, 0.0, 1.425, 0.798, 0.0, 0.798, 1.425, 0.0, 0.0, 1.425, 0.0, -0.84, 1.5, 0.15, -1.5, 0.84, 0.15, -1.5, 0.0, 0.15, -0.84, 1.5, 0.075, -1.5, 0.84, 0.075, -1.5, 0.0, 0.075, -0.798, 1.425, 0.0, -1.425, 0.798, 0.0, -1.425, 0.0, 0.0, -1.5, -0.84, 0.15, -0.84, -1.5, 0.15, 0.0, -1.5, 0.15, -1.5, -0.84, 0.075, -0.84, -1.5, 0.075, 0.0, -1.5, 0.075, -1.425, -0.798, 0.0, -0.798, -1.425, 0.0, 0.0, -1.425, 0.0, 0.84, -1.5, 0.15, 1.5, -0.84, 0.15, 0.84, -1.5, 0.075, 1.5, -0.84, 0.075, 0.798, -1.425, 0.0, 1.425, -0.798, 0.0];
// The teapot patches; each patch consists of 4x4 Bezier points.
// 
const teapotBP = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [4, 17, 18, 19, 8, 20, 21, 22, 12, 23, 24, 25, 16, 26, 27, 28], [19, 29, 30, 31, 22, 32, 33, 34, 25, 35, 36, 37, 28, 38, 39, 40], [31, 41, 42, 1, 34, 43, 44, 5, 37, 45, 46, 9, 40, 47, 48, 13], [13, 14, 15, 16, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60], [16, 26, 27, 28, 52, 61, 62, 63, 56, 64, 65, 66, 60, 67, 68, 69], [28, 38, 39, 40, 63, 70, 71, 72, 66, 73, 74, 75, 69, 76, 77, 78], [40, 47, 48, 13, 72, 79, 80, 49, 75, 81, 82, 53, 78, 83, 84, 57], [57, 58, 59, 60, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96], [60, 67, 68, 69, 88, 97, 98, 99, 92, 100, 101, 102, 96, 103, 104, 105], [69, 76, 77, 78, 99, 106, 107, 108, 102, 109, 110, 111, 105, 112, 113, 114], [78, 83, 84, 57, 108, 115, 116, 85, 111, 117, 118, 89, 114, 119, 120, 93], [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136], [124, 137, 138, 121, 128, 139, 140, 125, 132, 141, 142, 129, 136, 143, 144, 133], [133, 134, 135, 136, 145, 146, 147, 148, 149, 150, 151, 152, 69, 153, 154, 155], [136, 143, 144, 133, 148, 156, 157, 145, 152, 158, 159, 149, 155, 160, 161, 69], [162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177], [165, 178, 179, 162, 169, 180, 181, 166, 173, 182, 183, 170, 177, 184, 185, 174], [174, 175, 176, 177, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197], [177, 184, 185, 174, 189, 198, 199, 186, 193, 200, 201, 190, 197, 202, 203, 194], [204, 204, 204, 204, 207, 208, 209, 210, 211, 211, 211, 211, 212, 213, 214, 215], [204, 204, 204, 204, 210, 217, 218, 219, 211, 211, 211, 211, 215, 220, 221, 222], [204, 204, 204, 204, 219, 224, 225, 226, 211, 211, 211, 211, 222, 227, 228, 229], [204, 204, 204, 204, 226, 230, 231, 207, 211, 211, 211, 211, 229, 232, 233, 212], [212, 213, 214, 215, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245], [215, 220, 221, 222, 237, 246, 247, 248, 241, 249, 250, 251, 245, 252, 253, 254], [222, 227, 228, 229, 248, 255, 256, 257, 251, 258, 259, 260, 254, 261, 262, 263], [229, 232, 233, 212, 257, 264, 265, 234, 260, 266, 267, 238, 263, 268, 269, 242], [270, 270, 270, 270, 279, 280, 281, 282, 275, 276, 277, 278, 271, 272, 273, 274], [270, 270, 270, 270, 282, 289, 290, 291, 278, 286, 287, 288, 274, 283, 284, 285], [270, 270, 270, 270, 291, 298, 299, 300, 288, 295, 296, 297, 285, 292, 293, 294], [270, 270, 270, 270, 300, 305, 306, 279, 297, 303, 304, 275, 294, 301, 302, 271]];

//Function that will evaluate the surface given the u and v parameters
function evaluateBezierSurface(u, v, patch) {
    //Define a new point accumulator for the sum
    let accumu = new Point(0, 0, 0);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            //find the control point needed : the constructor of point will find the coordinates of the control point in the patch based on the index
            let point = new Point((i * 4) + j, patch)
            //multiply the previous point by the bernstein polynomials calculated in u and v
            point = point.pointPerBern(i, 3, u).pointPerBern(j, 3, v)
            //add the point to the accumulator
            accumu = accumu.addPoint(point)
        }
    }
    return accumu
}

//Function that will compute the mean curvature of the surface given the u and v parameters
function computeMeanCurvature(u, v, patch) {
    // Small value for approximating partial derivatives
    const h = 0.001;
    if (u - h < 0 || u + h > 1 || v - h < 0 || v + h > 1) return NaN;
    // Evaluate the surface at (u, v)
    const p0 = evaluateBezierSurface(u, v, patch);
    // Calculate partial derivatives using finite differences
    // df(u)/du = [f(u + h, v) - f(u, v)] / h
    // df(v)/dv = [f(u, v + h) - f(u, v)] / h
    const UPlusHV = evaluateBezierSurface(u + h, v, patch);
    const UVPlusH = evaluateBezierSurface(u, v + h, patch);
    const dU = UPlusHV.subtractPoint(p0).divideScalar(h);
    const dV = UVPlusH.subtractPoint(p0).divideScalar(h);
    //Compute the first fundamental form and the three parameters E,F,G that
    //represent the inner product on the tangent plane of the surface
    const E = dU.dot(dU);
    const F = dU.dot(dV);
    const G = dV.dot(dV);

    // Calculate the second derivative using finite differences
    // d^2f(u,v)/du^2 = [f(u + h, v) - 2f(u,v) + f(u -h, v)] / h^2
    const UMinusHV = evaluateBezierSurface(u - h, v, patch)
    const d2U = UPlusHV.subtractPoint(p0.multiplyScalar(2)).addPoint(UMinusHV).divideScalar(Math.pow(h, 2))
    // d^2f(u,v)/dv^2 = [f(u, v + h) - 2f(u,v) + f(u, v-h)] / h^2
    const UVMinusH = evaluateBezierSurface(u, v - h, patch)
    const d2V = UVPlusH.subtractPoint(p0.multiplyScalar(2)).addPoint(UVMinusH).divideScalar(Math.pow(h, 2))
    //d^2f(u,v)/dudv = [f(u + h, v + h) - f(u + h, v) - f(u, v + h) + f(u, v)] / h^2
    const UPlusHVPlusH = evaluateBezierSurface(u + h, v + h, patch)
    const d2UV = UPlusHVPlusH.subtractPoint(UPlusHV).subtractPoint(UVPlusH).addPoint(p0).divideScalar(Math.pow(h, 2))

    const normalVector = dU.cross(dV);
    // Compute the second fundamental form
    const L = d2U.dot(normalVector);
    const M = d2UV.dot(normalVector);
    const N = d2V.dot(normalVector);


    // Compute the mean curvature using the formula
    // H = (LG - 2MF + NE) / (2(EG - F^2))
    return (L * G - 2 * M * F + N * E) / (2 * (E * G - F * F));
}

let scale = 5  // Adjust this variable to control the color map scale

let colorMap = [
    [-0.2 * scale, [0, 0, 1]],                            // Blue (Negative Curvature)
    [-0.1 * scale, [173 / 255, 216 / 255, 230 / 255]],    // Light blue
    [0, [1, 1, 1]],                                        // White (Zero Curvature)
    [0.1 * scale, [173 / 255, 216 / 255, 230 / 255]],     // Light blue
    [0.2 * scale, [0, 1, 0]]                              // Green (Positive Curvature)
];

function printColorMap() {
    const canvas = document.getElementById('colorMapCanvas');
    const context = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    const segmentWidth = width / (colorMap.length - 1);

// Add a small portion of black on the left side
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, segmentWidth, height);

    for (let i = 1; i < colorMap.length + 1 - 1; i++) {
        const [value1, color1] = colorMap[i];
        const [value2, color2] = colorMap[i + 1];

        const x1 = (i -1) * segmentWidth;
        const x2 = (i ) * segmentWidth;

        context.fillStyle = `rgb(${color1.map(c => Math.round(c * 255)).join(', ')})`;
        context.fillRect(x1, 0, x2 - x1, height);

        // Linearly interpolate between the two colors
        for (let j = x1; j < x2; j++) {
            const t = (j - x1) / (x2 - x1);
            const color = color1.map((c, index) => c + t * (color2[index] - c));
            context.fillStyle = `rgb(${color.map(c => Math.round(c * 255)).join(', ')})`;
            context.fillRect(j, 0, 1, height);
        }
    }
}

//Function that will compute the color based on the mean curvature
function computeColor(u, v, patch) {
    let value = computeMeanCurvature(u, v, patch)
    if (isNaN(value)) return [0, 0, 0];
    // Check if value is larger than the last entry in the color map
    // Check if the value is smaller than the first entry
    if (value < colorMap[0][0]) {
        return colorMap[0][1]; // Return the color of the first entry
    }

    // Check if the value is larger than the last entry
    if (value > colorMap[colorMap.length - 1][0]) {
        return colorMap[colorMap.length - 1][1]; // Return the color of the last entry
    }

    // Iterate over the color map to find the appropriate color
    for (let i = 1; i < colorMap.length; i++) {
        const [threshold, color] = colorMap[i];

        // Check if the value falls within the threshold range
        if (value <= threshold) {
            return color;
        }
    }
}

//define how many times we should campionate the surface
let divs;
let teapotPoints = [];
let teapotFaces = [];
let colorIndex = [];
let transparent;

//Function that will generate the faces and the points of the teapot
function generatePolyTeapot() {
    let numPatches = teapotBP.length;
    teapotPoints = [];
    teapotFaces = [];
    colorIndex = [];
    //Generate teapotPoints and vertices
    for (let np = 0; np < numPatches; ++np) {
        // Generate grid and assign values to teapotPoints
        let points = [];
        let faces = [];
        let colors = [];
        let shiftPatch = np * (divs + 1) * (divs + 1);
        for (let i = 0, k = 0; i <= divs; ++i) {
            for (let j = 0; j <= divs; ++j, ++k) {
                //calculate the point and put it in the points array
                points.push(evaluateBezierSurface(j / divs, i / divs, np));
                //calculate the color for the vertex and put it in the colorIndex array
                colors.push(computeColor(j / divs, i / divs, np));
                //we know that the faces respect this topology
                // all patches have the same topology
                //     faces = [ [ 0,  1,  5,  4], [ 1,  2,  6,  5], [ 2,  3,  7,  6],
                //               [ 4,  5,  9,  8], [ 5,  6, 10,  9], [ 6,  7, 11, 10],
                //               [ 8,  9, 13, 12], [ 9, 10, 14, 13], [10, 11, 15, 14]];
                //therefore if we think in a grid 4*4 we can see that the following respects the topology but in a clockwise instead of anticlockwise to render the external surfaces.
                if (i !== divs && j !== divs) {
                    //put the index of the point in the faces array
                    faces[k * 4] = (divs + 1) * i + j + shiftPatch;
                    faces[k * 4 + (transparent ? 1 : 3)] = (divs + 1) * (i) + j + 1 + shiftPatch; //change this to k*4+1 to render the internal surfaces in anticlockwise
                    faces[k * 4 + 2] = (divs + 1) * (i + 1) + j + 1 + shiftPatch;
                    faces[k * 4 + (transparent ? 3 : 1)] = (divs + 1) * (i + 1) + j + shiftPatch; //change this to k*4+3 to render the internal surfaces in anticlockwise

                }
            }
        }
        teapotPoints.push(points)
        colorIndex.push(colors)
        teapotFaces.push(faces)
    }
}

//Function to transform the teapotPoints to a string: it is used for the indexed faceset
function pointsToString() {
    // Convert teapotPoints to a plain string array separated by spaces
    return teapotPoints.map(patch => patch.map(point => point.toString()).join(" ")).join(" ");

}

//Function to transform the colorIndex to a string: it is used for the indexed faceset
function colorsToString() {
    return colorIndex.map(patch => patch.map(color => {
        return color.join(" ");
    }).join(" ")).join(" ");
}

//Function to transform the teapotFaces to a string: it is used for the indexed faceset
function facesToString() {
    const modifiedArray = [];

    for (let patch = 0; patch < teapotFaces.length; patch++) {
        let counter = 0;

        teapotFaces[patch].map(elem => {
            modifiedArray.push(elem);
            counter++;
            if (counter % 4 === 0) {
                modifiedArray.push(-1);
                counter = 0;
            }
        });
    }
    return modifiedArray.join(' ')

}

function updateParameters() {
    divs = parseInt(document.getElementById("divs").value);
    transparent = document.getElementById("transparent").checked;
    generatePolyTeapot()
    update();
    printColorMap()
}


// Function to update the teapot point cloud
function update() {
    // Get the pointSet element
    let pointSets = document.querySelectorAll(".points");
    let faceSets = document.querySelectorAll(".faces");
    let colorSet = document.getElementById("colors");
    colorSet.setAttribute("color", colorsToString());
    pointSets.forEach((pointSet) => pointSet.setAttribute("point", pointsToString()));
    faceSets.forEach((faceSet) => faceSet.setAttribute("coordIndex", facesToString()));
}


document.addEventListener("load", updateParameters);
document.getElementById("btn").addEventListener("click", updateParameters);