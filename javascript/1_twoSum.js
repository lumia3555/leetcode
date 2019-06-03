var twoSum = function (nums, target) {
  if (nums.length < 2) return [];
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const tmpTarget = target - nums[i];
    if (map.has(tmpTarget)) {
      return [map.get(tmpTarget), i];
    } else {
      map.set(nums[i], i)
    }
  }
};