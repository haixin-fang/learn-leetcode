var telComb = (str) => {
    let tel = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let nums = str.split('')
    let code = nums.map(num => {
        return tel[num]
    })
    
    let combCode = (arr) => {
        let temp = []
        for(let i = 0; i < arr[0].length; i++){
            for(let j = 0; j < arr[1].length; j++){
                temp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }
        arr.splice(0, 2, temp)
        if(arr.length > 1){
            combCode(arr)
        }else {
            return temp
        }
        return arr[0]
    }
    return combCode(code)
}

export default telComb