

//改变图片大小
function resizepic(thispic)
{
if(thispic.width>627) thispic.width=627;
}

function bbimg(o)
{
var zoom=parseInt(o.style.zoom, 10)||100;
zoom+=event.wheelDelta/12;
if (zoom>0) o.style.zoom=zoom+'%';
return false;
}
