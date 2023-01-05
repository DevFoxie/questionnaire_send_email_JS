function handleFormSubmit() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let formateur = document.getElementById("formateur").value;
    let langage = document.getElementById("langage").value;
    let projet = document.getElementById("projet").value;
    let surnom = document.getElementById("surnom").value;
    let comment = document.getElementById("comment").value;
    
  
// envoyer l'email avec la librairie SMTPJS 
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "hmerniz.dev@proton.me",
      Password: "08840675C440E3C32B0DDC5174DBAB17214A",
      To: 'hmerniz.dev@proton.me',
      From: "hmerniz.dev@gmail.com",
      Subject: "Résultats du questionnaire",
      Body: "Prénom: " + name + "<br>Email: " + email + "<br>Age: " + age + "<br>Formateur favori: " + formateur + "<br>langage favori: " + langage + "<br>projet: " + projet + "<br>surnom: " + surnom + "<br>prochain projet : " + comment
    }).then(
      message => alert(message)
    );
  }
  