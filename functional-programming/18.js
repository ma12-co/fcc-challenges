function sentensify(str) {
  // Add your code below this line
  const arrayedString = str.split(/\W/);
  return arrayedString.join(" ");
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
