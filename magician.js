
var magicians=[];
function show_magicians(...args)
{

for (i=0;i<args.length;i++)
{
    magicians[i]=args[i];
    document.write(magicians[i]);
    

}

}
show_magicians("ALI","ASAD");