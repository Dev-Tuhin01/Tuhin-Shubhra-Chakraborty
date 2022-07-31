const date = new Date();

const today = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

//console.log(today);



function sendemail() {
  Email.send({
    SecureToken : "06ce02fa-a69b-40c8-b9cc-30f7269a4131",
    To : "tuhin.s.chakraborty.official.22@gmail.com",
    From : "tuhin.s.chakraborty.official.22@gmail.com",
    Subject: document.getElementById("client-name").value +" "+ document.getElementById("company-name").value + " website quary ",
    Body : "email: " + document.getElementById("email").value + "content: " + document.getElementById("content").value
}).then(
  message => alert(message)
)
//alert(send.Subject + "\n"+send.Body)
;
}