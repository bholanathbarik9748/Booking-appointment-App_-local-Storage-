function sConsole(event) {
    event.preventDefault();
    var name = document.getElementById("data").value;
    var phone = document.getElementById("phone").value;
    var date = document.getElementById("date").value;
    console.log(name);
    console.log(phone);
    console.log(date);
    
    console.log(name + phone + date);

    localStorage.setItem('Name',name);
    localStorage.setItem('Phone no',phone);
    localStorage.setItem('Date',date);
  }