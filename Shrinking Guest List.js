var guest=["ALI","AHMED","ASAD","KHIZER","SAMI"];
document.write("NEW DINNER TABLE HAS BEEN CANCELLED SO INVITING 2 PEOPLE ONLY<br>")
for(i=0;i<guest.length;i++)
{
    if(guest[i]=="KHIZER"||guest[i]=="khizer"||guest[i]=="SAMI"||guest[i]=="sami")
    {

    document.write("YOU ARE INVITED FOR DINNER TONIGHT "+guest[i]+"<br>")
    }
    else
    {
        document.write("YOU ARE NOT INVITED FOR DINNER TONIGHT "+guest[i]+"<br>")
    }
}