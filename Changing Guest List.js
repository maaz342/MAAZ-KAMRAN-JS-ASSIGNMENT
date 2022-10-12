var guest=["ALI","AHMED","ASAD"];
for(i=0;i<guest.length;i++)
{
    document.write("YOU ARE INVITED FOR DINNER TONIGHT "+guest[i]+"<br>")
}
document.write("ALI CANT MAKE IT TO DINNER<br>");
guest[0]="KHIZER";
document.write("NEW INVITATION LIST !!!<br>")
for(i=0;i<guest.length;i++)
{
    document.write("YOU ARE INVITED FOR DINNER TONIGHT "+guest[i]+"<br>")
}