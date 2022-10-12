var a;
function error()
{
    z=8;
    a=z;//copies the value of z
}
//console.log(z); intentional error because the scope of z is local

//solved below
error();
console.log(a);