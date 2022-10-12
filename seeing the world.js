var arr=["DUBAI","IRAN","PAKISTAN","INDIA","OMAN"];
var alparr=[];
var revarr=[];
document.write("ARRAY IN ORIGNAL ORDER<br>");
for(i=0;i<arr.length;i++)
{
    document.write(arr[i]+"<br>");
}
alparr=arr.sort();
document.write("ARRAY IN ALPHABETIC ORDER<br>");
for(i=0;i<alparr.length;i++)
{
    document.write(alparr[i]+"<br>");
    
}
document.write("NO CHANGE IN ORIGNAL ARRAY<br>");
for(i=0;i<arr.length;i++)
{
    document.write(arr[i]+"<br>");
}

document.write("REVERSE THE  ORIGNAL ARRAY<br>");
revarr=arr.reverse();
for(i=0;i<arr.length;i++)
{
    document.write(revarr[i]+"<br>");
}
document.write("AGAIN REVERSE TO SHOW THE  ORIGNAL ARRAY<br>");
revarr=revarr.reverse();for(i=0;i<alparr.length;i++)
{
    document.write(alparr[i]+"<br>");
    
}
document.write("ARRAY IN REVERSE ALPHABETIC ORDER<br>");
for(i=0;i<alparr.length;i++)
{
    document.write(alparr[i]+"<br>");
    
}

