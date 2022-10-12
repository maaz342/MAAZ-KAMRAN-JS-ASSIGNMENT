
var magicians=["ALI","ASAD"];
function show_magicians(...args)
{

for (i=0;i<args.length;i++)
{
   document.write(args[i]);

}
}
function make_great()
{
    for(i=0;i<magicians.length;i++)
    {
    magicians[i]="GREAT"+magicians[i];
    document.write(magicians[i]);

}
}



show_magicians(magicians);
make_great();