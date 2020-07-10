export class AjaxHttp {
    constructor() {
        this.http = new XMLHttpRequest();
    }

    //GET Request
    get = (url, callback) => {
        this.http.open('GET',url,true);
        this.http.send();
        this.http.onload = () => {
            if(this.http.status === 200) {
                let data = this.http.responseText;
                // console.log(data);
                let employees = JSON.parse(data);
                // return users;
                callback(null,employees);
            }
            else {
                callback(`Error: ${this.http.status}`);
            }
        };
    };

    //POST Request
    post = (url, employee) => {
        this.http.open('POST',url,true);
        this.http.setRequestHeader('Content-type','application/json');
        this.http.send(JSON.stringify(employee));
        this.http.onload = () => {
            let data = this.http.responseText;
            let employees = JSON.parse(data);
            callback(employees);
        };
    };

   
}