const findDuplicates = require('./Find-Duplicate'); 

describe('Find All Duplicates in an Array: ', () => {
  it('should return an array of duplicates in the given array', () => {
    const nums =  [1, 3, 4, 2, 2];
    
  
    expect(findDuplicates(nums)).toEqual([2]);
    
  });

  it('should return an empty array if no duplicates are found', () => {
    const nums = [1, 2, 3, 4, 5];
    const nums1 = [100, 200, 300];
  
    expect(findDuplicates(nums)).toEqual([]);
    expect(findDuplicates(nums1)).toEqual([]);
  });
});