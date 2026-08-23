const menu=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

function sendInquiry(e){
  e.preventDefault();
  const f=new FormData(e.target);
  const subject=encodeURIComponent("IndeWork inquiry — " + f.get("firstName")+" "+f.get("lastName"));
  const body=encodeURIComponent(
    "Name: "+f.get("firstName")+" "+f.get("lastName")+"\n"+
    "Business Email: "+f.get("email")+"\n"+
    "Phone: "+f.get("phone")+"\n\n"+
    "Message:\n"+(f.get("message")||"")
  );
  window.location.href=`mailto:pankajverma9625@gmail.com?subject=${subject}&body=${body}`;
  return false;
}
