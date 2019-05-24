// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title.toLowerCase().split(/\W/).filter((x)=>x!="").join("-");
  
}
// Add your code above this line

urlSlug(" Winter Is  Coming");

