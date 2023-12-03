const ages = ["3", "10", "18", "20"];

function checkAge(age) {
  return age > 18;
}
const result = ages.findIndex(checkAge);
console.log(result);
