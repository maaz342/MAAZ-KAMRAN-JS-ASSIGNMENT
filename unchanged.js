var magicians=["AHMED","ALI"];
var unchangemagicians=[];
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
    unchangemagicians[i]="GREAT "+magicians[i];

}
}


make_great();
show_magicians(magicians);
show_magicians(unchangemagicians);
