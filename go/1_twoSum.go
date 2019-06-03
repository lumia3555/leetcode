func twoSum(nums []int, target int) []int {
    m := make(map[int]int)
    for k,v := range nums {
        index, ok := m[target - v]
        if ok {
            return []int{index, k}
        } else {
            m[v] = k
        }
    }
    return []int{}
}