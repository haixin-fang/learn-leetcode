// export default (arr) => {
//     for(var i=0,min,len=arr.length;i<len;i++){
//         min = arr[i]
//         for(var j = i+1;j<len;j++){
//             if(arr[j] < min){
//                 let c = min
//                 min = arr[j]
//                 arr[j] = c
//             }
//         }
//         arr[i] = min
//     }
//     return arr
// }
export default (arr) => {
    for(var i = 0,min,len = arr.length;i<len;i++){
        min =arr[i]
        for(var j = i+1;j<len;j++){
            if(arr[j] < min){
                var c = min
                min = arr[j]
                arr[j]= c
            }
        }
        arr[i] = min
    }
    return arr
}