function sym(...args) {
let result = []
for (let i=0; i < args.length ; i++) {
    //create copy of args 
    let otherArrays = [...args]
    //delete the current array from the copy
    otherArrays.splice(i, 1) 
    for (let j=0; j < args[i].length ; j++) {
        let currentNum = args[i][j]
        let isSimmetricDifferent = true
        for (let k = 0; k < otherArrays.length ; k++){
            if (otherArrays[k].indexOf(currentNum) != -1) {
                isSimmetricDifferent = false
            }
            }
        if (isSimmetricDifferent) {
            result.push(currentNum)
        }
        }
         
    }
    //sort the array and remove duplicates
    result.sort()
    result = result.filter((x, index)=>{
        return result.indexOf(x) >= index
    })
    return result
}

//1 convert args into a real array
//2 for each array in the args
//3 for each number in the array 
//4 check in the others array if the number is present (indexOf)
//5 if it is, go back to loop in step 3 
//6 if it's not, push it to the results array
//Once loops end, clean the duplicates 




 
sym([1, 2, 3, 3], [5, 2, 1, 4])