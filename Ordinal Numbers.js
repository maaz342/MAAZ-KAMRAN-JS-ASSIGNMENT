for(i=0;i<10;i++)
{
    if(i==1)
    {
        document.write(i+"st<br>");
    }
    else if(i==2)
    {
        document.write(i+"nd<br>");
    }
    else if(i==3)
    {
        document.write(i+"rd<br>");
    }
    else if(i<10 && i>3)
    {
        document.write(i+"th<br>");
    }
}