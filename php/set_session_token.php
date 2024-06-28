<?php
session_start();
header('Content-Type: application/json');

// Get the JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Check if the token is set in the input
if (isset($input['token']) && isset($input['role'])) {
    // Set the token in the session
    $_SESSION['token'] = $input['token'];
    $_SESSION['role'] = $input['role'];

    // Return a success response
    echo json_encode(array('status' => 'session_set'));
} else {
    // Return an error response
    echo json_encode(array('status' => 'error', 'message' => 'Token not provided'));
}
?>
