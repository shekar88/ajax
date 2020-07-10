import { AjaxHttp } from './api/AjaxHttp';

const serverURL = 'http://127.0.0.1:3000/api';

//GET Button
let getButton = document.querySelector('getBtn');
getButton.addEventListener('click', function() {
    fetchEmployees();
});

let fetchEmployees = () => {
    //AJAX Request here
    let http = new AjaxHttp();
    let url = `${serverURL}/employees`;
    // let url = `http://127.0.0.1:3000/api/employees`;
    http.get(url, (err, employees)=>{
        if(err) throw err;
        // console.log(employees);
        let tableRows = '';
        for(let empl of employees) {
            tableRows += `<tr>
                            <td>${empl.id}</td>
                            <td>${empl.first_name}</td>
                            <td>${empl.last_name}</td>
                            <td>${empl.email}</td>
                            <td>${empl.gender}</td>
                            <td>${empl.ip_address}</td>
                        </tr>`;
        }
        document.querySelector('#table-body').innerHTML = tableRows;
    });
};

// POST Button
let postButton = document.querySelector('#postBtn');
postButton.addEventListener('click', function() {
    let url = `${serverURL}/employees`;
    let employee = {
        first_name: 'Malli',
        last_name: 'Eswar',
        email: 'eswar@gmail.com',
        gender: 'male',
        ip: '127.0.0.3'
    };

    let http = new AjaxHttp();
    http.post(url, employee, (data)=>{
        alert(JSON.stringify(data));
        fetchEmployees();
    });
});

