// DESCRIPTION:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// SOLUTION:
function duplicateCount(text){
    let obj = {};
    const lowerCase = text.toLowerCase()
    for(let i = 0; i <text.length; i++) {
        const current = lowerCase[i]
        if(obj[current] === undefined) {
            obj[current] = 1
        } else {
            obj[current]++
        }
    }
    let res = 0
    Object.values(obj).forEach(val => val > 1 ? res++ : true)

    return res
  }


  console.log(duplicateCount("aabbcde"))