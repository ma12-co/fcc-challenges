function add(x) {
    // Add your code below this line
    return function add1(y) {
      return function add2(z) {
        return x + y + z
      }
    }
    
    // Add your code above this line
  }
  add(10)(20)(30);