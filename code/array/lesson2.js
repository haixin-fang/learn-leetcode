export default cardGroup = (arr) => {
    let min = Number.MAX_SAFE_INTEGER
    arr.sort((a, b) => a - b)
    let dist = []
    let result = true
    for(let i = 0, len = arr.length, temp = []; i < len; i ++){
        temp.push(arr[i])
        for(let j = i + 1; j < len; j++){
            if(arr[i] === arr[j]){
                temp.push(arr[j])
            }else{
                // 存储最小的数组长度
                if(min > temp.length){
                    min = temp.length
                }
                // temp 是引用类型，以后遍历也需要用，所以不能单独就赋值了，不然
                // 以后会改变
                
                dist.push([].concat(temp))
                // 对数组进行清空
                temp.length = 0
                // 跳过已经比较完的索引
                i = j
                break
            }
        }
    }
    dist.every(item => {
        if(item.length%min !== 0){
            result = false
            return false
        }
    })
    if(arr.length === 1){
        result = false
    }
    return result
}