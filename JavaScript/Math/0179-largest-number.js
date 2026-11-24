let largestNumber = (nums) => {
  nums.sort((a, b) => {
    let sa = a.toString();
    let sb = b.toString();
    return parseInt(sa + sb) > parseInt(sb + sa) ? -1 : 1;
  });
  if (nums[0] === 0) return "0";

  return nums.join("");
};

let nums = [10,2]
console.log(largestNumber(nums))