
window.onload = function() {
    var form = document.getElementById('form');

    form.addEventListener('submit', function (e) 
    {
        e.preventDefault();
        var nom = document.getElementById('votre_nom').value.trim();
        var prenom = document.getElementById('prenom').value.trim();
        var address = document.getElementById('address').value.trim();
        var email = document.getElementById('votre_mail').value.trim();
        var password = document.getElementById('password').value.trim();
        var commentaires = document.getElementById('commentaires').value.trim();

        if (nom.length === 0) 
        {
            alert('Le nom est invalide');
            return;
        }
        if (prenom.length === 0) 
        {
            alert('Le prenom est invalide');
            return;
        }
        if (address.length === 0) 
        {
            alert("L'address est invalide");
            return;
        }
        
        if (email.length === 0) 
        {
            alert("l'email est invalide");
            return;
        } else 
           {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(email)) {
                alert("Le format de l'email n'est pas bon");
                return;
            }
        }
        
        if (password.length === 0) 
        {
            alert('Le mot de passe est invalide');
            return;
        }
        
        if (password.length < 8) 
        {
            alert("Le mot de passe doit avoir au moins 8 caractères");
            return;
        } else {
            var re = /^\w*(?=\w*\d)(?=\w*[a-z])(?=\w*[A-Z])\w*$/g;
            if (!re.test(password)) {
                alert("Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre");
                return;
            }
        }
        
        if (commentaires.length === 0) 
        {
            alert('Le commentaire est invalide');
            return;
        }

        alert('Tout est bon');

    });  
}
