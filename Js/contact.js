// Get Element

function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  // read the data
//   console.log(name);
//   console.log(email);
//   console.log(phone);
//   console.log(select);
//   console.log(message);

  // a condition if the value is null
  if (name == "") {
    return alert("Masukkan value terlebih dahulu");
  } else if (email == "") {
    return alert("Masukkan value terlebih dahulu");
  } else if (phone == "") {
    return alert("Masukkan value terlebih dahulu");
  } else if (subject == "") {
    return alert("Masukkan value terlebih dahulu");
  } else if (message == "") {
    return alert("Masukkan value terlebih dahulu");
  }

    //mailto
    let a = document.createElement("a");
    a.href = `mailto:${email}?subject=${subject}&body=Hello, my name is ${name} | ${message}`;
    a.click()
}
