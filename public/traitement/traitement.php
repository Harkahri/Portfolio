<?php
header("Access-Control-Allow-Origin: https://portfolio.bestplacestudio.fr");
header("Content-Type: application/json"); // Définir le type de contenu JSON

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $response = array(); // Tableau pour stocker la réponse

    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $telephone = $_POST['telephone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Inclure le fichier de configuration avec les variables d'environnement
    include('config.php');

    // Établir la connexion à la base de données
    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        $response['error'] = "La connexion à la base de données a échoué : " . $conn->connect_error;
    } else {
        // Utilisation d'une requête préparée
        $sql = "INSERT INTO formportfolio (nom, prenom, telephone, email, message) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);

        if (!$stmt) {
            $response['error'] = "Erreur de préparation de la requête : " . $conn->error;
        } else {
            // Liaison des paramètres
            $stmt->bind_param("sssss", $nom, $prenom, $telephone, $email, $message);

            if ($stmt->execute()) {
                $response['success'] = "Je vous contacte au plus vite !";
            } else {
                $response['error'] = "Erreur lors de l'enregistrement des données : " . $stmt->error;
            }

            $stmt->close();
        }

        $conn->close();
    }

    // Renvoyer la réponse JSON
    echo json_encode($response);
}
?>
