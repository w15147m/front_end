const form = document.querySelector('.form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const studentClass = document.querySelector('#class');
const rollNumber = document.querySelector('#rollNumber');
const marks = document.querySelector('#marks');
const studentTableBody = document.querySelector('#student-table-body');

window.onload = displayStudentInfo;

function saveStudentInfo(name, email, studentClass, rollNumber, marks) {
  let students = JSON.parse(localStorage.getItem('students')) || [];
  students.push({ name, email, studentClass, rollNumber, marks });
  localStorage.setItem('students', JSON.stringify(students));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = userName.value;
  const emailValue = email.value;
  const classValue = studentClass.value;
  const rollNum = rollNumber.value;
  const marksValue = marks.value;
  saveStudentInfo(name, emailValue, classValue, rollNum, marksValue);
  form.reset();
  displayStudentInfo();
});

function displayStudentInfo() {
    studentTableBody.innerHTML = '';
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.forEach((student, index) => {
      let row = `
        <tr>
          <td>${student.name}</td>
          <td>${student.email}</td>
          <td>${student.studentClass}</td>
          <td>${student.rollNumber}</td>
          <td>${student.marks}</td>
        </tr>
      `;
      studentTableBody.innerHTML += row;
    });
  }
  