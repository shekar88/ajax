// console.log('ajax');

//Text file data
let textButton = document.querySelector('#txtBtn');
textButton.addEventListener('click', function() {
    // Create an AJAX Request
    let xhr = new XMLHttpRequest();             //xml html request

    // Prepare the Request
    xhr.open('GET','./data/message.txt', true);          
    //having two paramenters, 1. request, 2. file name 3. Asyncroness always true and 4. username and 5. Password

    //Send the Request
    xhr.send();

    //Process the Request
    //ajax.onReadyStateChange() //old function
    xhr.onload = () => {
        if(xhr.status === 200 ) { //200->success 300->redirect 404->error at server side
            let data = xhr.responseText;
            console.log(data);
            displayTextData(data);
        }
    };

});

//Display Text Data
let displayTextData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#txt-card').innerHTML = htmlTemplate;
};

//JSON Button
let jsonButton = document.querySelector('#jsonBtn');
jsonButton.addEventListener('click', function() {
    // alert('test');
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./data/users.json',true);
    xhr.send();
    xhr.onload = () => {
        if(xhr.status === 200) {
            let data = xhr.responseText;
            // console.log(typeof(data));
            let mobile = JSON.parse(data);
            // console.log(mobile);
            displayJSONData(mobile);
        }
    };
});

//Display JSON Data
let displayJSONData = (mobile) => {
    let htmlTemplate = '';
    htmlTemplate = `<ul class="list-group">
                        <li class="list-group-item">Id : ${mobile.id}</li>
                        <li class="list-group-item">brand : ${mobile.brand}</li>
                        <li class="list-group-item">color : ${mobile.color}</li>
                        <li class="list-group-item">Price : ${mobile.price}</li>
                    </ul>`;
    document.querySelector('#json-card').innerHTML = htmlTemplate;
}

// API Button
let apiButto = document.querySelector('#apiBtn');
apiButto.addEventListener('click', function() {
    // alert('test');
    let xhr = new XMLHttpRequest();
    xhr.open('GET','http://jsonplaceholder.typicode.com/users', true );
    xhr.send();
    xhr.onload = () => {
        if(xhr.status === 200) {
            let data = xhr.responseText;
            // console.log(data);
            let users = JSON.parse(data);
            //console.log(users);
            displayUsers(users);
        }
    };
});

//Display users
let displayUsers = (users) => {
    let htmlTemplate = '';
    for( let user of users) {
        htmlTemplate += `<ul class="">
                            <li class="list-group-item">ID : ${user.id}</li>
                            <li class="list-group-item">Name : ${user.name}</li>
                            <li class="list-group-item">Email : ${user.email}</li>
                            <li class="list-group-item">Street : ${user.address.street}</li>
                            <li class="list-group-item">City : ${user.address.city}</li>
                        </ul>`
    }
    document.querySelector('#api-card').innerHTML = htmlTemplate;
};