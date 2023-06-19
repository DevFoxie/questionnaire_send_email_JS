function handleFormSubmit() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;
  let langage = document.getElementById("langage").value;
  let comment = document.getElementById("comment").value;
  let comment2 = document.getElementById("comment2").value;

  // Envoyer l'email avec la librairie SMTPJS 
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "hmerniz.dev@proton.me",
    Password: "09EC4CB1765D8AC3663F786778437530EC44",
    To: 'hmerniz.dev@proton.me',
    From: "hmerniz.dev@gmail.com",
    Subject: "Résultats du questionnaire",
    Body:
      "Prénom: " + name +
      "<br>Email: " + email +
      "<br>Age: " + age +
      "<br>Orientation web: " + langage +
      "<br>Points d'améliorations : " + comment +
      "<br>Points négatifs : " + comment2
  }).then(message => {
    Swal.fire({
      title: 'Succès',
      icon: 'success',
      html: message,
      confirmButtonText: 'Email envoyé avec succès !'
    });
  }).catch(error => {
    Swal.fire({
      title: 'Erreur',
      icon: 'error',
      text: error,
      confirmButtonText: 'Il y a eu une erreur lors de l\'envoi de l\'email !'
    });
  });
}
