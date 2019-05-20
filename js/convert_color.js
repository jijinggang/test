function gamma(linear){
  linear = linear / 256;
var s;
if (linear <= 0.0031308) {
  s = linear * 12.92;
} else {
  s = 1.055 * Math.pow(linear, 1.0/2.4) - 0.055;
}
 return Math.round(s*256);
}

function linear(srgb){
  srgb = srgb/256;
var linear;
if (srgb <= 0.04045) {
  linear = srgb / 12.92;
} else {
  linear = Math.pow((srgb + 0.055) / 1.055, 2.4);
}
return Math.round(linear*256);
}

console.log("gamma(10)=", gamma(10));
console.log("linear(57)=", linear(56));
