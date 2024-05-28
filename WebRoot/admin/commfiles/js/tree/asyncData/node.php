<?php ?>
[<?
$pId = "0";
$pName = "";
if(array_key_exists( 'id',$_REQUEST)) {
	$pId=$_REQUEST['id'];
}
if(array_key_exists('name',$_REQUEST)) {
	$pName=$_REQUEST['name'];
}
if ($pId==null || $pId=="") $pId = "0";
if ($pName==null) $pName = "";

for ($i=1; $i<5; $i++) {
	$nId = $pId.$i;
	$nName = "tree".$nId;
	echo "{ id:'".$nId."',	name:'".$nName."',	isParent:".(($i%2)!=0?"true":"false")."}";
	if ($i<4) {
		echo ",";
	}
	
}
?>]
