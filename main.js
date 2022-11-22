function sConsole(event) {
    event.preventDefault();
    var name = document.getElementById("data").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    console.log(name);
    console.log(phone);
    console.log(date);
    
    const myData ={
        Full_name : name,
        phone_no : phone,
        current_Data : date
    }

    window.localStorage.setItem('myObject',JSON.stringify(myData));
  }