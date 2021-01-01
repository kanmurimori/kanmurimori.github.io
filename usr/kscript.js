function getEC(e){return document.getElementsByClassName(e)}
function getET(e){return document.getElementsByTagName(e)}
function getEI(e){return document.getElementById(e)}
function getE(e){return document.querySelectorAll(e)}

document.addEventListener('DOMContentLoaded',()=>{console.time('js');
s=location.pathname,l=s.length,l>17?uB.textContent='…'+s.substring(l-17):uB.textContent=s;
t=getET('title')[0];hdr.innerHTML=t.textContent+t.getAttribute('ps');
tM.textContent=container.textContent.replace(/(\s|[\r\n])/g,'').length;
sync.textContent=t.getAttribute('time');
dc.textContent=getET('dfn').length+'+'+getEC('dfn').length;
screen.width<1e3||(lBbar.style='display:none',lba.style='display:none');
setTimeout("for(i=100;tw0.clientHeight!=tw1.clientHeight;document.body.style='zoom:'+(i--)+'%'){fSV.textContent=i}",1e3);
screen.width<1e3&&eS.append('abbr:hover:before{top:1.5em;opacity:1;box-shadow:0 0 5px var(--sc)}');
tN.textContent=new Date().getFullYear();

try{getEC('tagMes')[0].innerHTML='<div style=padding-left:5em><div class=hrda><big style=background:var(--c1)>見符 ｢ゆっくりしていってね!｣</big></div><div style="padding:.3em 0 0 .1em;line-height:1em">①[注意]錯誤主観缺省等諸問題存在。<br>②[免責]内容造成後果不負責。<br>③[支持]排版異常縮字横屏Chrome更新下。<br>④[版権]CC<small>(此作已共享)</small>BY<small>(借物請列表)</small>NC<small>(請勿於商用)</small>。<br><em>㊟以上事(￪)＆編者(Ky)認同不能者請快関閉此頁面!</em></div></div>'}catch{};
//try{getEC('tagLod')[0].innerHTML=`<div style=padding-left:5em><fieldset class=b-td style=border-color:#f9a825><legend class=td-b1 style=color:#f57f17>坑符「少女折寿中」</legend></fieldset>需長時間編集或一時編集終止中、或許有一天会填完。</div>`}catch{};
//try{getEC('tagUni')[0].innerHTML=`<div style=padding-left:5em><fieldset class=b-td style=border-color:#0091ea><legend class=td-b1 style=color:#0091ea>火星「届不到的絵恋」</legend></fieldset>本頁含有專門的字符不会被日常区塊範囲的字体映照、出現的「⺚」皆為汝設備無対応絵制方法的替代絵制方法。</div>`}catch{};

try{[] .slice.call(document.images).forEach(e=>{e.setAttribute('loading','lazy')})}catch{};
[].slice.call(document.links).forEach(e=>{e.target=e.getAttribute('href')});
try{for(e=getET('section'),i=e.length;i>0;i--){e[i-1].id='s'+i}}catch{};
try{for(e=getET('h1'),i=e.length;i>0;i--){e[i-1].id='h1'+i}}catch{};
try{for(e=getEC('t2'),i=e.length;i>0;i--){e[i-1].id='h2'+i}}catch{};

try{qB.innerHTML=qB.innerHTML.replace(/\n/g,'');
for(i=qB.children.length;i>0;i--){e=document.createElement('dialog'),e.id='qD'+i,qB.appendChild(e),e.innerHTML=qB.childNodes[i-1].innerHTML}
getE('[q]').forEach(e=>{e.onclick=()=>{f=getEI('qD'+e.getAttribute('q')),f.showModal(),f.onclick=()=>f.close()}})}catch{}

/*載錯処理*///try{[].forEach.call(document.images,function(ie){ie.onerror=function(){ie.src='../usr/ie.svg';ie.classList.add('ie');iet=document.createElement('em');iet.innerText=' 〜届かないもの[LOAD ERROR]';ie.parentNode.insertBefore(iet,ie.nextSibling)}})}catch{};	
/*創建関閉*///try{for(i=1;i<20;i++){[].forEach.call(document.querySelectorAll('#q'+i),function(qd){let qe=document.createElement('a');qe.innerText='Ｘ';qe.setAttribute('onclick','q'+i+'.close()')})}}catch{};	
docl=setInterval(()=>{document.readyState=='complete'&&(clearInterval(docl),setTimeout("loadinger.style.opacity='0',loadinger.textContent='少女祈祷済',ldt.style.display='none'",500),setTimeout("loadinger.style.display='none'",2000))},500);
console.timeEnd('js');
});

onload=()=>{
	try{iB=document.createElement('div'),
		screen.width<1e3?(lba.appendChild(iB)):abar.appendChild(iB),
		g=getET('section').length+1;for(i=1;i<g;i++){
		e=document.createElement('div');e.id='l'+i;iB.appendChild(e),
		getE('#s'+i+' h1').forEach(H1=>{e1=document.createElement('div');e1.setAttribute('i4',H1.id);e1.id='i'+H1.id;e1.textContent=H1.textContent;getEI('l'+i).appendChild(e1)});
		getE('#s'+i+' .t2').forEach(h2=>{e2=document.createElement('div');e2.setAttribute('i4',h2.id);e2.id='i'+h2.id;e2.textContent=h2.textContent;getEI('l'+i).appendChild(e2)})}
		iB.addEventListener('click',e=>{
		h=getEI(e.target.getAttribute('i4')),
		h.scrollIntoView({behavior:'smooth'}),
		h.classList.add('target'),
		t=setTimeout("h.classList.remove('target'),clearTimeout(t)",2e3)})
		}catch{}
	iO=new IntersectionObserver(f=>{f.forEach(e=>{e.isIntersecting?getEI('i'+e.target.previousSibling.id).classList.add('iOing'):getEI('i'+e.target.previousSibling.id).classList.remove('iOing')})});
		getE('h1+p,.t2+article').forEach(h=>{iO.observe(h)});
}

function kN(){document.body.classList.contains('kN')?(document.body.classList.remove('kN'),kNi.className='ic-suns'):(document.body.classList.add('kN'),kNi.className='ic-moon')}
function lB(){lba.hasAttribute('style')?(lba.removeAttribute('style'),lBi.className='ic-lis1'):(lba.style='display:none',lBi.className='ic-lis0')}
function fB(){document.body.classList.contains('tf-mt')?(document.body.classList.remove('tf-mt'),fb.innerHTML='<i class=ic-font></i> MTLmr3m'):(document.body.classList.add('tf-mt'),fb.innerHTML='<i class=ic-font></i> Initial')}
function lBas(){s=new Date().getTime(),t=setTimeout("new Date().getTime()-s>100&&clearTimeout(t),lba.hasAttribute('style')?lba.removeAttribute('style'):lba.style='opacity:.8;right:calc('+(-lba.clientWidth)+'px + .45em)'",400)}
function lBae(){clearTimeout(t),setTimeout("getEC('lba')[0].style='opacity:.2'",6e4)}
function fS(value){document.body.style.zoom=value+'%',fSV.textContent=value}