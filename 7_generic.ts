const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 4, 6, 9]
const arrayOfString: Array<string> = ['Hello', 'Taras']

function reverse<T>(array: T[] ):T[] {
    return array.reverse()
}

console.log(reverse(arrayOfNumbers))
console.log(reverse(arrayOfString))