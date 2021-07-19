

var a = prompt('Enter the first variable: ');
var b = prompt('enter the second variable');

function setup(){
  var b2 = createButton("click here to Swap");
b2.mousePressed(Swap)
  }


function draw()
{
}
function Swap(){
  [a,b]=[b,a];
  console.log("the value of a afther swapping:",+a);
  console.log("the value of b afther swapping:",+b);
}
