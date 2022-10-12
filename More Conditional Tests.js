var string="flash";
var string1="flash";
var string2="FLASSH";
var string3="FLASH";
var d=8;
var c=7;
var e=8;
var f=[7,5,6,4,3];
if(string==string1)
{
    document.write("EQUALITY STRING CHECK<br>")
}
if(string!=string2)
{
    document.write("INEQUALITY STRING CHECK<br>")
}
if(string3.toLowerCase()==string)
{
    document.write("LOWER CASE FUNCTION<br>")
}
if(d==e)
{
    document.write("NUMERICAL EQUALITY CHECK<br>")
}
if(d==e)
{
    document.write("NUMERICAL EQUALITY CHECK<br>")
}

if(d!=c)
{
    document.write("NUMERICAL INEQUALITY CHECK<br>")
}
if(d>c)
{
    document.write("GREATER THAN CHECK<br>")
}
if(c<d)
{
    document.write("LESS THAN CHECK<br>")
}
if(c<=d)
{
    document.write("LESS THAN EQUAL TO CHECK<br>")
}
if(d>=c)
{
    document.write("GREATER THAN EQUAL TO CHECK<br>")
}
if(string==string1 && string==string3.toLowerCase())
{
    document.write("AND OPERATOR CHECK<br>")
}
if(string==string1 || string==string3.toLowerCase()||string3.toLowerCase()==string1)
{
    document.write("OR OPERATOR CHECK<br>")
}
for(i=0;i<f.length;i++)
{
    if(f[i]==c)
    {
        document.write("ELEMENT PRESENT IN ARRAY<br>");
       
    }
    if(f[i]!=d)
    {
        document.write("ELEMENT NOT PRESENT IN ARRAYY");
        break;
    }
}






