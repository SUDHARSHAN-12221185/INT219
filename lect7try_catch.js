let a = document.getElementById("p1");
a.innerHTML = "";


function demo() {
    let b = document.getElementById("text").value;
  try {
    if (b == "") throw "errorr";
    else if (b < 7) throw "number is smaller";
    else if (b > 30) throw "number is greater";
    else if (isNaN(b)) throw "not a number";
    else {
      alert("correct");
    }
  } catch (e) {
    a.innerHTML = "the output is " + e;
  }
}
//create two variables first value first is 100 second is 0 you have to throw ann expensition which throws number cant bre divide by 0
//create a function inside script initialize variable a and b with some value and use exception handling metyhod in whoich you are trying to display the value of c variable  while is neither declared nor defined

