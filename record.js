let array = JSON.parse(localStorage.getItem('data')) || [];

let value = array;

function showData(value) {
    let t = document.querySelector("#table");
    t.innerHTML = ''; // Clear existing table content before populating with new data

    value.forEach((element, i) => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerText = element.name;
        let td2 = document.createElement('td');
        td2.innerText = element.employeeID;
        let td3 = document.createElement('td');
        td3.innerText = element.department;
        let td4 = document.createElement('td');
        td4.innerText = element.exp;
        let td5 = document.createElement('td');
        td5.innerText = element.email;
        let td6 = document.createElement('td');
        td6.innerText = element.number;
        let td7 = document.createElement('td');
        td7.innerText = 'Active';
        let btn = document.createElement('button');
        btn.innerText = 'Delete';
        btn.addEventListener('click', function() {
            del(i); // Pass the index i to the del function
        });

        tr.append(td1, td2, td3, td4, td5, td6, td7, btn);

        t.append(tr);
    });
}

function del(index) {
    array.splice(index, 1); // Remove the element at index from the array
    localStorage.setItem('data', JSON.stringify(array)); // Update localStorage
    value = array; // Update value to reflect changes
    showData(value); // Update the table
}

function setData() {
    localStorage.setItem('data', JSON.stringify(array));
    showData(value);
}

function ac() {
    let name = document.querySelector("#name").value;
    let employeeID = document.querySelector("#employeeID").value;
    let department = document.querySelector("#department").value;
    let exp = document.querySelector("#exp").value;
    let email = document.querySelector("#email").value;
    let number = document.querySelector("#number").value;
    let object = {
        name: name,
        employeeID: employeeID,
        department: department,
        exp: exp,
        email: email,
        number: number
    };
    array.push(object);
    setData();
}

showData(value);
