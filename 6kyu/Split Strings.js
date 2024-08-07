// DESCRIPTION:
// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// SOLUTION:

function solution(str){
    let res = [];
    if (str.length % 2 !== 0) {
     str += '_'
    }
    for(let i = 0; i < str.length; i += 2) {
     res.push(str[i] + str[i+1])
    }
    return res
 }
 
 console.log(solution("abcdefg"))
 