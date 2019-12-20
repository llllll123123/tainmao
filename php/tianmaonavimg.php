<?php
require('conn.php');
$sql="select * from tianmaonavimg";
$result=$conn->query($sql);
$arrdata=array();
for($i=0;$i<$result->num_rows;$i++){//遍历记录集
    $arrdata[$i]=$result->fetch_assoc();//将取出的数组赋值新数组，形成二维数组
}

echo json_encode($arrdata);