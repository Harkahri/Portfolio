<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $telephone = $_POST['telephone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $conn = new mysqli("bestplxharkahri.mysql.db", "bestplxharkahri", "Test1234", "bestplxharkahri");

    if ($conn->connect_error) {
        die("La connexion à la base de données a échoué : " . $conn->connect_error);
    }

    $sql = "INSERT INTO formportfolio (nom, prenom, telephone, email, message) VALUES ('$nom', '$prenom', '$telephone', '$email', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Les données ont été enregistrées avec succès.";
    } else {
        echo "Erreur lors de l'enregistrement des données : " . $conn->error;
    }

    $conn->close();
}
?>