var guest=["ALI","AHMED","ASAD"];
document.write("I FOUND BIGGER TABLE SO EXTENDING MY LIST");
guest.splice(1,0,"MAAZ");//for adding in between
guest.splice(0,0,"KHIZER");//for adding in start
for(i=0;i<guest.length;i++)
{
    document.write("YOU ARE INVITED FOR DINNER TONIGHT "+guest[i]+"<br>");
}
