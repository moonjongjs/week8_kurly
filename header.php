<?
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');

    $db_server = 'localhost';
    $db_user_name = 'moonjong2';
    $db_user_pw = 'anstjswhd0105#';
    $db_name = 'moonjong2';

    $conn = mysqli_connect($db_server,$db_user_name,$db_user_pw,$db_name);
    mysqli_set_charset($conn, 'utf8');
?>