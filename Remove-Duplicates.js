var removeDuplicates = function(nums) {
   let i=0;let j=1;
   while(j<nums.length)
     {
       if(nums[i]==nums[j])
       {
         j++
       }
       else{
         i++;
         nums[i]=nums[j];
       }
        
     }
    i++;
    nums.length=i;
    return nums;
};
module.exports=removeDuplicates; 
