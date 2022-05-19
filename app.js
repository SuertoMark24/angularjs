var student = {
  name:"",
  type:"student"
};

document.addEventListener('DOMContentLoad', contentload);

function contentload(event){
  document.getElementById('name').addEventListener("keyup", keyUp);
}
function keyUp(event){
  calculateNumericOutput();
}
function calculateNumericOutput(){
  student.name = document.getElementById('name').value;
  alert(student.name)
  var totalNameValue = 0;
  for(var i=0;i < student.name.length; i++){
    totalNameValue += student.name.charCodeAt(i);
  }

  var output = " Total Numeric value is" + totalNameValue;
  document.getElementById('output').innerText = output;
  alert(output)
}
