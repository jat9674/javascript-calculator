<!doctype html>
<html lang="eng">
	<head>
		<title>CACLULATOR</title>
		<meta charset="utf-8"/>
		<style type="text/css">
		body {background:Cyan;}
		 #div{text-align:center;}
		 #tr{width:500px;height:450px;}
		 #int {text-align:left;width:100%;height:100%;font-size:20px;color:blue;}
		
		
		
		</style>


	</head>
<body>
<div id="div">
	<h1>CALCULATOR</h1>
<form Name="free" id="fe">
	<table id="tr" border=2>
		<tr>
			<td colspan=5><input id="int"onkeypress="return event.charCode > 49 && event.charCode <58" name="display"  type="text"></td>
			<td style="display:none"><input name="nint" type="number"></td>
		</tr>
		<tr>
			<td><input id="int" type="button" value="1" onclick="free.display.value+='1'">
			<td><input id="int" type="button" value="2" onclick="free.display.value+='2'">	
			<td><input id="int" type="button" value="3" onclick="free.display.value+='3'">
			<td><input id="int" type="button" value="+" onclick="free.display.value+='+'">
		</tr>
		<tr>
			<td><input id="int" type="button" value="4" onclick="free.display.value+='4'"</td>
		    <td><input id="int" type="button" value="5" onclick="free.display.value+='5'"</td>
		    <td><input id="int" type="button" value="6" onclick="free.display.value+='6'"</td>
			<td><input id="int" type="button" value="-" onclick="free.display.value+='-'"</td>
		</tr>
		<tr>
			<td><input id="int" type="button" value="7" onclick="free.display.value+='7'"</td>
			<td><input id="int" type="button" value="8" onclick="free.display.value+='8'"</td>
			<td><input id="int" type="button" value="9" onclick="free.display.value+='9'"</td>
			<td><input id="int" type="button" value="*" onclick="free.display.value+='*'"</td>
		</tr>
		<tr>
		    <td><input id="int" type="button" value="0" onclick="free.display.value+='0'"</td>
			<td><input id="int" type="button" value="=" onclick="free.display.value=eval(free.display.value)"</td>
			<td><input id="int" type="button" value="C" onclick="free.display.value=''"</td>
			<td><input id="int" type="button" value="/" onclick="free.display.value+='/'"</td>
		</tr>
		<tr>
			<td><input id="int" type="button" value="sqrt." onclick="free.display.value=Math.sqrt(free.display.value)"</td>
			<td><input id="int" type="button" value="ln" onclick="free.display.value=Math.log(free.display.value)"</td>
			<td><input id="int" type="button" value="x2" onclick="free.display.value=Math.pow(free.display.value,2)"</td>
			<td><input id="int" type="button" value="1/x" onclick="free.display.value=1/eval(free.display.value)"</td>
		
		
		</tr>
		<tr>
			<td><input id="int" type=button value="MC" OnClick="free.nint.value=''"></td>
			<td><input id="int" type=button value="MS" OnClick="free.nint.value=free.display.value"></td>
			<td><input id="int" type=button value="MR" OnClick="free.display.value=free.nint.value"></td>
			<td><input id="int" type=button value="M+" OnClick= "free.nint.value=(Number(free.nint.value))+(Number(free.display.value))"></td>
		</tr>
</div>
		
	



</body>
</html>
