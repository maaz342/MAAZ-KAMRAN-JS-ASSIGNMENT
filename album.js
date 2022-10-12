var j=0;
let albuminfo=
{
    artist:"",
    title:"",
}

function make_album(artit,tile,tracks=0)
{
  albuminfo. artist=artit;
   albuminfo.title=tile;
   if(tracks!=0)
   {
      j=tracks;
      
   }
    return albuminfo;
}
const g=make_album("MAAZ","KAMRAN");
console.log(g);
const b=make_album("ROAL","DAL");
console.log(b);
const r=make_album("CHARLES","DICKENNS",'8');
albuminfo.track=j;
console.log(r);

