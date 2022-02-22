var start = performance.now();//measuring code execution speed

let nums = new Array(2,7,11,15,1,8); 
let target = 9; 

//Function that returns indexes of pairs whose sum is equal to the target
function getIndexPairs(nums, target) {
	let numIndexs = []; // hold the index pairs
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				// Adds index numbers of pairs whose sum is equal to the target.
				numIndexs.push([i, j]);
			}
		}
	}
	return numIndexs; // returns indexes 
};

console.log(getIndexPairs(nums, target));

var finish = performance.now();//measuring code execution speed
console.log(`Code performance testing: ${start - finish} millisecond`);

//BigO Notation: Time = O(n^2)
