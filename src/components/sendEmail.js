import Modal from "./Modal";

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "lawdians@lawdians.com",
    Password: "fheldjswm1004!",
    From: "lawdians@lawdians.com",
    To: "kid@lawdians.com",
    Subject: "제목",
    Body: "title",
    Number: "123",
  })
    .then((message) => {
      console.log(message);
      alert("mail sent successfully");
    })
    .catch((error) => console.error(error));
}

export default sendEmail;
