const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(/* arr */) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}
}
console.log(arr)
let count = 1
let res = arr.reduce((acc, el) => {
	if (Array.isArray(el)) {
		console.log('el = ' + el)
		el.forEach(e => {
			console.log('e = ' + e)
			acc.push(e)
		})

	}
	console.log('acc = ' + acc)
	return acc
}, [])
console.log(res)
console.log(Boolean(...res))
	(Boolean(...res)) ? count + calculateDepth(res) : count
module.exports = {
	DepthCalculator
};


