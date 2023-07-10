function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    // console.log(right)
    while (left < right) {
        if (numbers[left] + numbers[right] === target) {
            return [left, right];
        }
        else if (numbers[left] + numbers[right] < target) {
            left++;
        }
        else {
            right--;
        }
    } return [];
};
module.exports = twoSum;