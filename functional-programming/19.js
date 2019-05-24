// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  let newString = title.toLowerCase();
  let newArray = newString.split(/\W+/);
  console.log(typeof newArray);
  let outputString = newArray.join("-");
  console.log(outputString);
  return outputString;
}
// Add your code above this line

urlSlug(" Winter Is  Coming");
