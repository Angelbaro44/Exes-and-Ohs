//Exes and Ohs

function XO(input) {
  input = input.toLowerCase()
var xnum = 0;
var onum = 0;
for (let i = 0; i < input.length; i++){
     var inputcount = input[i]
    if (inputcount.match('x')){
      xnum++;}

      else if (inputcount.match('o')){
      onum++;}

}
return xnum == onum
}
const result = XO ("xXxoOo")
console.log(result)
