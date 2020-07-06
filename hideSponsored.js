var si=document.getElementsByClassName('s-item');
for(var x=0;x<si.length;x++)
 if(si[x].innerText.match("^(PATROCINADO|SPONSORISÉ|ANZEIGE|SPONSORED)\n"))
  si[x].style.display='none';
