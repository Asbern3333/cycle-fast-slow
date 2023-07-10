const findDisappearedNumbers =require('./finddisappernumber');

describe('',()=>{
   it('[1,2,3,5,3]=>[4]',()=>{
    expect(findDisappearedNumbers([1,2,3,5,3])).toEqual([4]);
   }) 
   it('[1,2,3,5,3,2]=>[4,6]',()=>{
    expect(findDisappearedNumbers([1,2,3,5,3,2])).toEqual([4,6]);
   }) 
})
