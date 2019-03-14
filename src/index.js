/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let b = 0;
  preferences.unshift(0);
  let a = preferences.length;
   
  for (let m = 1; m < a; m++){
    let k = preferences[m];
    let l = preferences[k];

    if (m == preferences[l]) {
      b++;
    }     
       
  }
   return Math.floor( b / 3 );
};
