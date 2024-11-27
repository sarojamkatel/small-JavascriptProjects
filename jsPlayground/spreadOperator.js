// the spread object spreads elements of iterable objects( like array)

const q1= ['jan','feb','mar'];
const q2=["apr",'may','jun'];
const q3=['july','aug','sept'];

const year=[...q1,...q2,...q3];
console.log(year);