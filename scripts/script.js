function openup(inside)
{
    var i, contents;
    contents = document.getElementsByClassName("contents")
    for(i=0;i<contents.length;i++)
    {
        contents[i].style.display = "none";
    }
    document.getElementById(inside).style.display = "block";
}