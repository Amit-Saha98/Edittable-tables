let tableData = [];

 function addRowButton() {
  const table = document.getElementById("myTable");
  const newRow = table.insertRow(-1);

  const idCell = newRow.insertCell(0);
  const nameCell = newRow.insertCell(1);
  const rollCell = newRow.insertCell(2);
  const subjectCell = newRow.insertCell(3);
  const marksCell = newRow.insertCell(4);
  const markedByCell = newRow.insertCell(5);
  const saveCell = newRow.insertCell(6);

  const id = tableData.length + 1;
  const name = document.createElement("input");
  name.type = "text";
  nameCell.appendChild(name);
  const roll = document.createElement("input");
  roll.type = "text";
  rollCell.appendChild(roll);
  const subject = document.createElement("input");
  subject.type = "text";
  subjectCell.appendChild(subject);
  const marks = document.createElement("input");
  marks.type = "number";
  marksCell.appendChild(marks);
  const markedBy = document.createElement("input");
  markedBy.type = "email";
  markedByCell.appendChild(markedBy);

  idCell.innerHTML = id;
  idCell.setAttribute("data-id", id);


  const rowData = {
    id: id,
    student_name: name.value,
    student_roll: roll.value,
    subject: subject.value,
    marks: marks.value,
    markedBy: markedBy.value
  };

  tableData.push(rowData);

  const saveButton = document.createElement("button");
  saveButton.innerHTML = "Save";
  saveButton.addEventListener("click", function() {
    const rowId = idCell.getAttribute("data-id");
    const rowIndex = tableData.findIndex(row => row.id === Number(rowId));//for loop to iterate over row

    if (name.value!=="") {
      tableData[rowIndex].student_name = name.value;
    } 
    else {
      alert("Please enter a valid inputs");
      return;
    }
    
    if (roll.value!=="") {
      tableData[rowIndex].student_roll = roll.value;
    } 
    else {
      alert("Please enter a valid inputs");
      return;
    }
    
    if (subject.value!=="") {
      tableData[rowIndex].subject = subject.value;
    } 
    else {
      alert("Please enter a valid inputs");
      return;
    }
  
    if (marks.value!=="") {
      tableData[rowIndex].marks = marks.value;
    } 
    else {
      alert("Please enter a valid inputs");
      return;
    }
   
     if (markedBy.value.includes("@")) {
      tableData[rowIndex].markedBy = markedBy.value;
    } else {
      alert("Please enter a valid email address");
    }
  });

  saveCell.appendChild(saveButton);
};


