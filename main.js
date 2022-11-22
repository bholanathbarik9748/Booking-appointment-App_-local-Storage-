function sConsole(event) {
    event.preventDefault();
    var name = document.getElementById("data").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    console.log(name);
    console.log(phone);
    console.log(date);

    const myData = {
        Full_name: name,
        phone_no: phone,
        current_Data: date
    }

    window.localStorage.setItem(myData.phone_no, JSON.stringify(myData));
    show_User(myData);
    for(let i=0; i< localStorage.length; i++) {
        let key = localStorage.key(i);
        alert(`${key}: ${localStorage.getItem(key)}`);
    }
}

function show_User(user){
    var ele = document.getElementById('List_of_user');
    var childHtml = `<li>${user.Full_name} -- ${user.phone_no} -- ${user.current_Data}</li>`;
    ele.innerHTML = ele.innerHTML + childHtml;
}