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

    axios.post("https://crudcrud.com/api/2a149edabefb48f080721bab4bfa73c7/appdata", myData)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    // window.localStorage.setItem(myData.phone_no, JSON.stringify(myData));
    show_User(myData);
}

function show_User(user) {
    if (localStorage.getItem(user.Full_name)) {
        removeUserFromScreen(user.Full_name);
    }
    var ele = document.getElementById('List_of_user');
    var childHtml = `<li>${user.Full_name} -- ${user.phone_no} -- ${user.current_Data} 
    <button onclick= delete_list('${user.phone_no}')>Delete User</button>
    <button onclick= edit_list('${user.phone_no}')>Edit User</button> </li>`;
    ele.innerHTML = ele.innerHTML + childHtml;
}

function delete_list(phone) {
    localStorage.removeItem(phone);
    removeUserFromScreen(phone);
}


function removeUserFromScreen(phone) {
    const parentNode = document.getElementById('List_of_user');
    const childNodeToBeDeleted = document.getElementById(phone);
    parentNode.removeChild(childNodeToBeDeleted)
}