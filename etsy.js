var si=document.getElementsByClassName('wt-list-unstyled');
for(var x=0;x<si.length;x++)
 if(si[x].innerText.match("\n\n(Ad by )"))
  si[x].style.display='none';
