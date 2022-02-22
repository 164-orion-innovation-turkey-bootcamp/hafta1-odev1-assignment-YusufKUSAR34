var start = performance.now();//measuring code execution speed

let array = new Array(2,7,11,15,1,8); 
let target = 9; 

//Function that returns indexes of pairs whose sum is equal to the target
function findIndexPairs(array, target) {
	let numIndexs = []; // hold the index pairs
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === target) {
				// Adds index numbers of pairs whose sum is equal to the target.
				numIndexs.push([i, j]);
			}
		}
	}
	return numIndexs; // returns indexes 
};

console.log(findIndexPairs(array, target));

var finish = performance.now();//measuring code execution speed
console.log(`Code performance testing: ${start - finish} millisecond`);

//BigO Notation: Time = O(n^2)
