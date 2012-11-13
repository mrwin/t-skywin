<?php

if ($_POST['id']) {
    $id = $_POST['id'];
    require_once dirname(__FILE__) . '/db.php';
    echo $page;
}
else
    die("Error!");
?>
