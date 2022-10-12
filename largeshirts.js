function make_shirt(size=l,message="i love javascript")
{
    if(size=='l'||size=='L')
    {
        document.write("SIZE OF SHIRT IS"+size+" TO BE PRINTED IS "+message+"<br>");


    }
    else
    {
    document.write("SIZE OF SHIRT IS "+size+" MESSAGE TO BE PRINTED IS "+message+"<br>");
    }
}
make_shirt();
make_shirt("M");
make_shirt("S","PAPA KI PARI");