<?
    include_once('./header.php');


    $id = $_POST['id'];

    // 아이디 중복 조회 select
    $sql = "select * from week8_kurly_table where id='$id'";
    $result = mysqli_query($conn,  $sql);

    if( mysqli_num_rows($result) >=1 ){
        echo  1;  // 아이디 존재한다
    } 
    else{
        echo  -1;
    }

?>