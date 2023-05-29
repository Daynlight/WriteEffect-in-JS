var Freq = 3;
var loadState = 1;
var CountText = 0;

function loop()
{
    switch(loadState)
    {
    case 1:
        Write("Write","Hello<br> World");
        break;
    case 2:
        Write("Write1","Second Text")
        break;
    }
}

function Write(Div,Text)
{
    var TextLength = Text.length;
    document.getElementById(Div).innerHTML=Text.substring(0,CountText);

    if(Text.substring(CountText,CountText+4)=="<br>") CountText +=4;
    CountText++;
    if(CountText>TextLength)
    {
        loadState++;
        CountText=0;
        TextLength=0;
    }
}

setInterval(loop,(1000/Freq));
