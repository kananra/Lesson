//#region forEach
// let arr = [45, 4, 9, 17, 25];

// function myFunction(item) {
//     return item * 2;
// }


// function myForEach(array,callback) {

//     for (let index = 0; index < array.length; index++) {
//          array[index]=callback(array[index]);
//     }
// }

// myForEach(arr,myFunction);
// console.log(arr);
//#endregion
//#region  map

// let arr = [45, 4, 9, 17, 25];
// console.log(arr);

// function myFunction(item) {
//     return item * 2;
// }

// function myMap(array,callback) {
//     let newArr=[];
//     for (let index = 0; index < array.length; index++) {
//          array[index]=callback(array[index]);
//          newArr.push(array[index]);
//     }
//     return newArr
// }
// const newArr = myMap(arr,myFunction);
// console.log(newArr);

//#endregion

//#region  Filter
// let arr = [45, 4, 9, 17, 25];
// function myFunction(item) {
//     return item > 18;
// }


// function myFilter(array,callback) {
//     let newArr=[];
//     for (let index = 0; index < array.length; index++) {
//          if (callback(array[index],index,array)) {
//             newArr.push(array[index]);
//          }
//     }
//     return newArr
// }

// const newArr = myFilter(arr,myFunction);
// console.log(newArr);
//#endregion


//#region  Some

// let arr = [44, 24, 55, 16, 85];

// function myFunction(item) {
//     return item > 18;
// }


// function mySome(array,callback) {

//     let check=true;
//     for (let index = 0; index < array.length; index++) {
//          if (check===callback(array[index],index,array)) {
//             return true;
//          }
//     }
//       return false;
// }

// console.log("Some over 18 is" + " "+ mySome(arr,myFunction));
//#endregion


//#region Every

// let arr = [44, 24, 55, 19, 85];

// function myFunction(item) {
//     return item > 18;
// }

// function myEvery(array, callback) {

//     let check = false;
//     for (let index = 0; index < array.length; index++) {
//         if (check === callback(array[index], index, array)) {
//             return false;
//         }

//     }

//     return true;
// }

// console.log("All over 18 is" + " " + myEvery(arr, myFunction));
//#endregion

//#region Reduce
// let arr = [44, 24, 55, 19, 85];

// function myReduce(array, value) {
//     let total = array[0];
//     if (typeof value !== "number") {
//         for (let index = 1; index < array.length; index++) {
//             total += array[index];

//         }
//     }
//     else {
//     for (let index = 1; index < array.length; index++) {
//         total += value
        
//     }
//     }
//     return total;

// }

// console.log("The sum is" + " " + myReduce(arr,10));
//#endregion

//#region Slice

// let arr = [45, 4, 9, 17, 25];



// function mySlice(array,value,value2) {
//     let newArr = [];

//     if (typeof value2 !== "number") {
//         for (let index = value; index < array.length; index++) {
//             newArr.push(array[index]);

//         }
//     }
//     else {
//         for (let index = value; index < value2; index++) {
//             newArr.push(array[index]);
//         }

//     }
//     return newArr;
// }

// const newArr = mySlice(arr,1,3);
// console.log(newArr);
//#endregion

