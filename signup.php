<?
 
    include_once('./header.php');

    
    // ajax 또는 axios 로 전송시에는 전송이름을 지정해서 보낸다.아래와 같이 $_POST['id'];
    // api를 사용하지 않고 전송시에는 폼요소의 name이 전송된다.
    $id = $_POST['id'];
    $pw  = $_POST['pw'];
    $name  = $_POST['name'];
    $email  = $_POST['email'];
    $hp  = $_POST['hp'];
    $addr  = $_POST['addr'];
    $gender  = $_POST['gender'];
    $birth  = $_POST['birth'];
    $chooga  = $_POST['chooga'];
    $service  = $_POST['service'];

    $sql = "insert into week8_kurly_table(id, pw, name, email, hp, addr, gender, birth, chooga, service) 
            values('$id', '$pw', '$name', '$email', '$hp', '$addr', '$gender', '$birth', '$chooga', '$service')";
    $result = mysqli_query($conn, $sql);

    if(!$result){
        echo "데이터 저장 실패";
    }
    else{
        echo "데이터 저장 성공";
    }


?>
