/*
Warmup-1 -- nearHundred
Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

Examples

nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false
*/

function nearHundred(num: number): boolean {
	return Math.abs(num - 100) <= 10 || Math.abs(num - 200) <= 10;
}
