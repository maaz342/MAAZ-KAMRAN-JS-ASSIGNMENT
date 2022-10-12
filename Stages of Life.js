var age=1;
if(age<2)
{
    document.write("the person is a baby.<br>");
}
else if(age<4 && age>=2)
{
    document.write("the person is a toddler.<br>")
}
else if(age<13 && age>=4)
{
    document.write("the person is a kid.<br>");
}
else if(age<20 && age>=13)
{
    document.write("the person is a tennager.<br>");
}
else if(age<65 && age>=20)
{
    document.write("the person is a adult.<br>");
}
else if(age>=65)
{
    document.write("the person is a elder.<br>");
}