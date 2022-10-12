var user=["ADMIN","ALI","ASAD","AHMED","ARISH"];
for(i=0;i<user.length;i++)
{
    if(user[i]=='ADMIN'||user[i]=='admin')
    {
        document.write("Hello admin, would you like to see a status report?<br>")
    }
    else
    {
        document.write("Hello"+user[i]+" thank you for logging in again.<br>")
    }
}

