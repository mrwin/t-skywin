<?php

if ($_POST['id']) {
    $id = $_POST['id'];
    $page = file_get_contents('http://brandshopp.com/ajax.php?id='.$id);
    echo $page;
}
else
    exit;
?>
