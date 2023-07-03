function GetPassword() {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&*()_+?><:{}[]'";

  let passwordlength = 9;
  let password = "";

  for (let i = 0; i < passwordlength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}