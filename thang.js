// Selector
const InputStudentCode = document.querySelector('.input_student_code');
const InputStudentName = document.querySelector('.input_student_name');
const InputStudentAddress = document.querySelector('.input_student_address');
const InputStudentPhone = document.querySelector('.input_student_phone');
const Submit = document.getElementById('SubmitButton');
// Addvenlistener
Submit.addEventListener('click', AddStudent);
let StudentList = [];
if (StudentList.length === 0) {
  const Nostudent = document.getElementById('No_student');
  const h3 = document.createElement('h3');
  h3.innerHTML = 'No student';
  Nostudent.appendChild(h3);
}

function Validationform() {
  // Validate
  let Error_Code = document.getElementById('Error_Code');
  let Error_Name = document.getElementById('Error_Name');
  let Error_Address = document.getElementById('Error_Address');
  let Error_Phone = document.getElementById('Error_Phone');
  let Code;
  let Name;
  let Address;
  let Phone;
  var rgx = /^(?:20IT)\d{3}$/;

  if (InputStudentCode.value === '') {
    Error_Code.innerHTML = 'Required enter code student';
  } else if (!InputStudentCode.value.match(rgx)) {
    Error_Code.innerHTML = 'Student ID: 20ITx (where x is a 3-digit number)';
  } else {
    Error_Code.innerHTML = '';
    Code = InputStudentCode.value;
  }
  if (InputStudentName.value === '') {
    Error_Name.innerHTML = 'Required enter name student';
  } else {
    Error_Name.innerHTML = '';
    Name = InputStudentName.value;
  }
  if (InputStudentAddress.value === '') {
    Error_Address.innerHTML = 'Required enter address student';
  } else {
    Error_Address.innerHTML = '';
    Address = InputStudentAddress.value;
  }
  if (InputStudentPhone.value === '') {
    Error_Phone.innerHTML = 'Required enter phone student';
  } else if (
    InputStudentPhone.value.length < 6 ||
    InputStudentPhone.value.length > 10
  ) {
    Error_Phone.innerHTML = 'Must be a 6-10 digit number.';
  } else {
    Error_Phone.innerHTML = '';
    Phone = InputStudentPhone.value;
  }

  if (
    Code !== undefined &&
    Name !== undefined &&
    Address !== undefined &&
    Phone !== undefined
  ) {
    return {
      Code,
      Name,
      Address,
      Phone
    };
  }
}

function Table() {
  const Table = document.getElementById('table');

  let TableHead = `<thead>
  <tr>
    <th>Id</th>
    <th>Student_code</th>
    <th>Name Student</th>
    <th>Address</th>
    <th>Phone</th>
    <th colspan="2">Action</th>
  </tr>
</thead>`;
  StudentList.forEach((item, index) => {
    TableHead += `
    <tbody id="tbody">
    <tr>
      <td key=${index} class="id" >${index}</td>
      <td class="Code">${item.Code}</td>
      <td class="Name">${item.Name}</td>
      <td class="Address">${item.Address}</td>
      <td class="Phone">${item.Phone}</td>
      <td><button onClick={EditUser()}>Edit</button></td>
      <td><button onClick={DeleteUser()}>Delete</button></td>
    </tr>
  </tbody>
    `;
  });
  Table.innerHTML = TableHead;
}

function AddStudent(event) {
  event.preventDefault();

  if (Validationform()) {
    const ExistedStudent = StudentList.find(
      item => item.Code === Validationform().Code
    );

    if (ExistedStudent) {
      alert('Code student already existed');
    } else {
      let id = 0;

      StudentList.push({
        // id: 1++,
        Code: Validationform().Code,
        Name: Validationform().Name,
        Address: Validationform().Address,
        Phone: Validationform().Phone
      });
      Table();
      alert('Add student successful');
      InputStudentCode.value = '';
      InputStudentName.value = '';
      InputStudentAddress.value = '';
      InputStudentPhone.value = '';
    }

    let Nostudent = document.getElementById('No_student');
    if (Nostudent !== null) {
      let h3 = document.getElementsByTagName('h3');
      Nostudent.remove();
    }
  }
  console.log(StudentList);
}

function EditUser() {
  const tr = event.target.parentElement.parentElement;
  const Id = tr.getElementsByClassName('id')[0].innerText;
  const CodeEdit = tr.getElementsByClassName('Code')[0].innerText;
  const NameEdit = tr.getElementsByClassName('Name')[0].innerText;
  const AddressEdit = tr.getElementsByClassName('Address')[0].innerText;
  const PhoneEdit = tr.getElementsByClassName('Phone')[0].innerText;
  InputStudentCode.value = CodeEdit;
  InputStudentName.value = NameEdit;
  InputStudentAddress.value = AddressEdit;
  InputStudentPhone.value = PhoneEdit;
}
const Editbutton = document.getElementById('Editbutton');
Editbutton.addEventListener('click', UpdateStudent);
function UpdateStudent(event) {
  event.preventDefault();
  if (Validationform()) {
    const Existed = StudentList.findIndex(
      item => item.Code === Validationform().Code
    );
    StudentList[Existed].Name = Validationform().Name;
    StudentList[Existed].Address = Validationform().Address;
    StudentList[Existed].Phone = Validationform().Phone;
    alert('Edit Successful');
    Table();
  } else {
    alert('Edit failed');
  }
}

function DeleteUser() {
  const tr = event.target.parentElement.parentElement;
  alert('ban co muon xoa ');
  tr.remove();
}
let myArray = [
    { id: 0, name: 'Jhon' },
    { id: 1, name: 'Sara' },
    { id: 2, name: 'Domnic' },
    { id: 3, name: 'Bravo' }
  ],
  //Find index of specific object using findIndex method.
  objIndex = myArray.findIndex(obj => obj.id == 2);
console.log(objIndex);
console.log(myArray[objIndex]);
console.log(myArray[0]);

HELLLO;
