var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();

var xhr1 = new XMLHttpRequest();
xhr1.onreadystatechange= function()
{
 if(xhr1.readyState===4 && xhr1.status===200)
 {
   var rooms = JSON.parse(xhr1.responseText);
   var statusHTML='<ul class= "rooms">'
   for(var i=0;i<rooms.length;i++)
   {
     if(rooms[i].available===true)
     {
       statusHTML+= '<li class ="empty">';
     }
     else
     {
       statusHTML+='<li class ="full">';
     }
     statusHTML+= rooms[i].room;
     statusHTML+='</li>';
   }
   statusHTML+='</ul>';
   document.getElementById('roomList').innerHTML= statusHTML;
 }
};
xhr1.open('GET','data/rooms.json');
xhr1.send();