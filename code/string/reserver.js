var reverseWords = function (s) {
    return s.split(' ').map(item => {
        return item.split('').reverse().join('')
    }).join(' ') 
}
// export default reverseWords;

var reverseWords2 = function (s) {
    return s.split(/\s/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ') 
}
// export default reverseWords;

//match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。
// 匹配一个单字字符（字母、数字或者下划线）。等价于 [A-Za-z0-9_]。
// 例如, /\w/ 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。
// ' 代表有可能单词中有', +匹配前面一个表达式 1 次或者多次。等价于 {1,}。
var reverseWords3 = function (s) {
    return s.match(/[\w']+/g).map(item => {
        return item.split('').reverse().join('')
    }).join(' ') 
}
export default reverseWords3;