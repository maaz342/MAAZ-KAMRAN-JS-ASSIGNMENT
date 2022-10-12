var animals=["CHEETAH","TIGER","ELEPHANT"]

    for(i=0;i<animals.length;i++)
    {
        if(animals[i]=="cheetah"||animals[i]=="CHEETAH")
        {
    
        document.write(animals[i]+" CAN RUN VERY FAST<br>");
        }
        if(animals[i]=="tiger"||animals[i]=="TIGER")
        document.write(animals[i]+"  IS VERY DANGEROUS<br>");
        if(animals[i]=="elephant"||animals[i]=="ELEPHANT")
        document.write(animals[i]+"IS VERY TALL<br>");
    }
    document.write("ALL THESE ANIMALS ARE WILD ANIMALS")