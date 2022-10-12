var current_users=["ASAD","ALI","AHMED","SAAD","KHIZER"];
var new_user=["asad","ali","maaz","areeb","hasnain"];
for(i=0;i<current_users.length;i++)
{
    if(current_users[i]==new_user[i]||current_users[i].toLowerCase()==new_user[i]||new_user[i].toUpperCase()==current_users)
    {
        document.write("the person will need to enter a new username.<br>");

    }
    else
    {
        document.write("username available <br>")
    }
}