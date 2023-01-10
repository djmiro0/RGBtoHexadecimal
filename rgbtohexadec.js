//* RGB TO HEXADECIMAL
function rgb(r, g, b) {
  // Ensure that the RGB values are within the range of 0-255
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  // Convert each RGB value to a hexadecimal string
  let hexR = r.toString(16);
  let hexG = g.toString(16);
  let hexB = b.toString(16);
  // Add leading zeroes if necessary
  if (hexR.length === 1) {
    hexR = "0" + hexR;
  }
  if (hexG.length === 1) {
    hexG = "0" + hexG;
  }
  if (hexB.length === 1) {
    hexB = "0" + hexB;
  }
  // Concatenate the strings and return the hex color code
  return "#" + hexR + hexG + hexB;
}

console.log(rgb(255, 255, 255)); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0, 0, 0); // returns 000000
console.log(rgb(148, 0, 211)); // returns 9400D3
