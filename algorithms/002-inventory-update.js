"use strict"

function updateInventory(arr1, arr2) {
    let inventory = [...arr1]
    //gets 2 arrays, inventory is an array of arrays, item is a simple array
    //returns -1 if the item is not present in the inventory
    const indexOfItem = (inventory, item) => {
        let index = -1
        inventory.forEach((x, i) =>{
            if(x[1] === item[1]){
            index = i
            }
        })
        return index
    }

    const createNewItem = (inventory, Item) => {
        let updatedArr = [...inventory, Item]
        return updatedArr 
    }
 
    const updateItem = (inventory, item, index) => {
        let updatedArr = [...inventory]
        updatedArr[index][0] += item[0]
        return updatedArr
    }


    const sortInventory = (inventory) => {
        const sortedItems = inventory.map(x => x[1]).sort()
        const sortedInventory = sortedItems.map(x => {
            let matching = inventory.filter(y => y[1] === x)
            return [matching[0][0], x]
        })
        return sortedInventory

    }

    arr2.forEach((item) => {
        let index = indexOfItem(inventory, item)
        if (index === -1) {
            inventory = createNewItem(inventory, item)
        } else {
            inventory = updateItem(inventory, item, index)
        }
    })
    inventory = sortInventory(inventory)
    console.log(inventory)
    return inventory
}


// Example inventory lists
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])