function getEC(e){return document.getElementsByClassName(e)}
function getET(e){return document.getElementsByTagName(e)}
function getEI(e){return document.getElementById(e)}
function getE(e){return document.querySelectorAll(e)}

console.time('js');
try{localStorage.t==1&&(document.body.classList.add('night-nt'),getET('meta')[1].content='#fff')}catch{};
document.body.style.fontFamily=localStorage.ff;

[].slice.call(getE('[getHtml]')).map(e=>{
    fetch('../../usr/'+e.getAttribute('getHtml')).then(t=>t.text()).then(c=>
    e.after(document.createRange().createContextualFragment(c))
)});



try{[].slice.call(getEC('half')).map(e=>e.style.margin=-e.clientWidth/4+'px')}catch{}


console.timeEnd('js');

/*目录模块*/
try{for(e=getET('section'),i=e.length-1;i>-1;i--){e[i].id='s'+i}}catch{};
try{for(e=getET('h1'),i=e.length-1;i>-1;i--){e[i].id='H'+i}}catch{};
try{for(e=getET('h2'),i=e.length-1;i>-1;i--){e[i].id='h'+i}}catch{};
try{getET('main')[0].insertAdjacentHTML('beforebegin','<div id=lba><div class=lba ontouchstart=lBas() onmousedown=lBas() ontouchend=lBae() onmouseout=lBae()></div></div>');
 d=document.createElement('div'),lba.appendChild(d);
for(i=0,j=getET('section').length;i<j;i++){e=document.createElement('div'),e.id='l'+i,d.appendChild(e);
 [].slice.call(getE('#s'+i+' h1')).map(m=>{n=document.createElement('div'),n.o=m.id,n.id='i'+m.id,n.textContent=m.textContent,getEI('l'+i).appendChild(n)});
 [].slice.call(getE('#s'+i+' h2')).map(m=>{n=document.createElement('div'),n.o=m.id,n.id='i'+m.id,n.textContent=m.textContent,getEI('l'+i).appendChild(n)})}
lba.insertAdjacentHTML('beforeend',`<hr style='margin:5px -5px 1px -5px'><div><svg onclick=history.go(-1) viewBox="0 0 24 24" width=1em><path d="M0 0h24v24H0z" fill='none'/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg> <a href=# style=all:revert;text-decoration:none;font-weight:bold;color:#000><svg viewBox="0 0 24 24" width=1em><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg></a></div>`);
 d.addEventListener('click',m=>{n=getEI(m.target.o),n.scrollIntoView({behavior:'smooth'}),n.classList.add('target'),
 p=setTimeout("n.classList.remove('target'),clearTimeout(p)",2e3)})
}catch{}e=new IntersectionObserver(m=>m.map(n=>n.isIntersecting?getEI('i'+n.target.previousSibling.id).classList.add('iOing'):getEI('i'+n.target.previousSibling.id).classList.remove('iOing'))),
 [].slice.call(getE('h1+article,h2+article')).map(m=>e.observe(m));
function lBas(){s=new Date().getTime(),t=setTimeout("new Date().getTime()-s>100&&clearTimeout(t),lba.hasAttribute('style')?lba.removeAttribute('style'):lba.style='opacity:.8;right:calc('+(-lba.clientWidth)+'px + .45em)'",400)}
function lBae(){clearTimeout(t),setTimeout("getEC('lba')[0].style='opacity:.2'",6e4)}

//<hr><b onclick=history.go(-1)>←</b><a href=# style=all:revert;text-decoration:none;font-weight:bold;color:#000>↑</a>

//addEventListener('DOMContentLoaded',x=>{
//    setTimeout(onLoadFun,2000);
//   function onLoadFun(){

/*
m=setInterval(()=>title.textContent='',2e3),
m=setInterval(()=>title.textContent='',4e3);
*/

function tT(){document.body.classList.contains('night')|document.body.classList.contains('night-nt')?
    (localStorage.t=0,getET('meta')[1].content='#fff',document.body.classList.remove('night'),document.body.classList.remove('night-nt'),ttb.innerHTML="<path d='M3.55 18.54l1.41 1.41 1.8-1.79-1.42-1.42M11 22.45h2V19.5h-2m1-14a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.66l1.8 1.79 1.41-1.41-1.79-1.8m1.79-12.28l-1.41-1.41-1.8 1.79 1.42 1.42M13 .55h-2V3.5h2m-9 7H1v2h3m2.76-7.66l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42z'>"):
    (localStorage.t=1,getET('meta')[1].content='#000',document.body.classList.add('night'),ttb.innerHTML="<path d='M17.75 4.09l-2.53 1.94.91 3.06-2.63-1.81-2.63 1.81.91-3.06-2.53-1.94L12.44 4l1.06-3 1.06 3 3.19.09m3.5 6.91l-1.64 1.25.59 1.98-1.7-1.17-1.7 1.17.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95 2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14.4-.4.82-.76 1.27-1.08.75-.53 1.93.36 1.85 1.19-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82-2.81 3.14-2.7 7.96.31 10.98 3.02 3.01 7.84 3.12 10.98.31z'>")}
