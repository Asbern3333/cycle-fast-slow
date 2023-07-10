function findDuplicate(nums) {

    let duplicate = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                duplicate.add(nums[i]);
            }
        }

    }
    let arr = Array.from(duplicate);
    return arr;
}
module.exports = findDuplicate;