<script>
function reverseString(str)
{
return str.split(' ').reverse( ).join(' ');
}
function findSub(mainString,subString)
{
return mainString.indexOf(subString);
}
function perform()
{
const inputStr=document.getEementById('inputString').value;
const subStr=document.getElementById('subString').value;
const reversed=reverseString(inputStr);
const position=findSub(inputStr,subStr);
document.getElementById('reversedOutput').textContent=reversed;
document.getElementById('positionOutput').textContent=position ==-1?position:"Notfound";
}
</script>



