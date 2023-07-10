function findDisappearedNumbers (nums) {
  let i = 0;
  // while loop : cyclic sort
  while (i < nums.length) {
    let index = nums[i]-1;
    if(nums[index]!=nums[i]){
       let swap=nums[i];
       nums[i]=nums[index];
       nums[index]=swap;}
       else
       i++;
   }
  
  let arr = [];
  // iterate nums array to check numbers that are out of position and push those numbers (index+1) to result array
  for (let j = 0; j < nums.length; j++) {
    if(nums[j]!=j+1)
      arr.push(j+1);
    }
  
  return arr;
}
module.exports = findDisappearedNumbers;