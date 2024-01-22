
        document.getElementById('appointmentForm').addEventListener('submit', function (event) {
            event.preventDefault();

            // Récupérer les valeurs du formulaire
            var fullName = document.getElementById('fullName').value;
            var email = document.getElementById('email').value;
            var date = document.getElementById('date').value;
            var time = document.getElementById('time').value;

            // Vous pouvez maintenant utiliser ces valeurs comme vous le souhaitez
            console.log('Nom complet:', fullName);
            console.log('Email:', email);
            console.log('Date du rendez-vous:', date);
            console.log('Heure du rendez-vous:', time);

            // Vous pouvez également envoyer ces données à un serveur pour un traitement ultérieur
            // Par exemple, en utilisant AJAX pour envoyer les données à un backend
        });
    

