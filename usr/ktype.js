document.addEventListener('DOMContentLoaded',()=>{
/*开始计时*/console.time('ＪＳ处理耗时');console.time('文件加载耗时');
/*頁始付字*/beforeDoc.innerHTML='<div id=loadinger>少女祈祷中</div><details><summary id=foo></summary></details><div id=foom><p><div>在処 <small class=td-s1>〜'+location.pathname+'</small></div><hr><div class=flex-row style=justify-content:flex-start><div id=lbar style="border-left:.2em solid var(--c3);padding-left:.5em"></div><div style="margin:.5em 1em"><div td=db>表現の程度<input id=fS type=range min=50 max=200 value=100 onchange=fS(this.value)><span id=fSV>100</span></div><br><button id=unAsider onclick=unAside()>unAside</button></div></div><hr><nav class=tw-r><i class=ic-home></i>&nbsp;<a href=../main/map class=td-btn>Home</a>&nbsp;|&nbsp;<i class=ic-merge></i>&nbsp;<a href=https://github.com/kanmurimori/kanmurimori.github.io class=td-btn>Edit</a>&nbsp;|&nbsp;<a id=knighter onclick=knight()><i class=ic-theme></i>&nbsp;Theme</a>&nbsp;|&nbsp;<i class=ic-detour></i>&nbsp;<a href=#>Top</a></nav></p></div><header><i class=hring onclick=javascript:history.go(-1)><i class=ic-back></i></i> '+document.getElementsByTagName('title')[0].textContent+afterHt.innerHTML+'</header>';
/*頁末付字*/afterDoc.innerHTML='<div style="text-align:right;font-size:70%;padding:0 .5em 1em 0">全部原作知識内容皆CC BY-NC 4.0</div><div style=padding-bottom:1.5em><i class=ic-cc></i> 2020 <a href=https://t.me/ky4kayezu>ky</a> & Hosted on <a href=https://github.com><i class=ic-github></i><b class="tf-sm"><small>GitHubPage</small></b></a></div>';
try{document.getElementsByClassName('tagMes')[0].innerHTML='<div style=padding-left:5em><fieldset class=b-td><legend class=td-b1><big>見符「ゆっくりしていってね！」</big></legend></fieldset><div style=padding-left:.1em>①[注意]錯誤主観缺省等諸問題存在。<br>②[免責]内容造成後果不負責。<br>③[支持]排版異常縮字横屏Chrome更新下。<br>④[版権]CC(此作已共享)BY(借物請列表)NC(請勿於商用)。<br><em>○以上事(↑)＆編者(ky)認同不能者請快関閉這個頁面！<em></div></div>'}catch{};
try{document.getElementsByClassName('tagLod')[0].innerHTML='<div style=padding-left:5em><fieldset class=b-td style=border-color:#f9a825><legend class=td-b1 style=color:#f57f17>坑符「少女折寿中」</legend></fieldset>需長時間編集或一時編集終止中、或許有一天会填完。</div>'}catch{};
try{document.getElementsByClassName('tagUni')[0].innerHTML='<div style=padding-left:5em><fieldset class=b-td style=border-color:#0091ea><legend class=td-b1 style=color:#0091ea>火星「届不到的絵恋」</legend></fieldset>本頁含有專門的字符不会被日常区塊範囲的字体映照、出現的「⺚」皆為汝設備無対応絵制方法的替代絵制方法。</div>'}catch{};
/*図象処理*/try{Array.prototype.slice.call(document.images).forEach(e=>{e.setAttribute('loading','lazy')})}catch{};
/*多開回避*/Array.prototype.slice.call(document.links).forEach(e=>{e.target=e.getAttribute('href')});
/*標記章節*/try{for(i=document.getElementsByTagName('section').length;i>0;i--){document.getElementsByTagName('section')[i-1].id='s'+i}}catch{};
/*標記ｈ１*/try{for(i=document.getElementsByTagName('h1').length;i>0;i--){document.getElementsByTagName('h1')[i-1].id='h1'+i}}catch{};
/*標記ｈ２*/try{for(i=document.getElementsByTagName('h2').length;i>0;i--){document.getElementsByTagName('h2')[i-1].id='h2'+i}}catch{};
/*標記ｈ３*/try{for(i=document.getElementsByTagName('h3').length;i>0;i--){document.getElementsByTagName('h3')[i-1].id='h3'+i}}catch{};
/*目次生成*/try{g=document.getElementsByTagName('section').length+1;for(i=1;i<g;i++){e=document.createElement('div');e.id='l'+i;lbar.appendChild(e);
	document.querySelectorAll('#s'+i+' h1').forEach(h1=>{e1=document.createElement('a');e1.href='#'+h1.getAttribute('id');e1.classList.add('h1');e1.innerHTML=h1.innerHTML;document.getElementById('l'+i).appendChild(e1)});
	document.querySelectorAll('#s'+i+' h2').forEach(h2=>{e2=document.createElement('a');e2.href='#'+h2.getAttribute('id');e2.classList.add('h2');e2.innerHTML=h2.innerHTML;document.getElementById('l'+i).appendChild(e2)});
	}}catch{};
/*副栏付字*/abar.innerHTML='<nav class=td-s1><u>★<u id=starC>-</u>　<time id=lastT>-</time></u></nav><div style="border-left:.2em solid var(--c3);padding-left:.6em;margin-left:.2em">'+lbar.innerHTML+'</div>';
/*标題鏈接*/document.querySelectorAll('h1,h2,h3').forEach(e=>{a=document.createElement('a');a.href='#'+e.getAttribute('id');a.classList.add('td-btn');e.appendChild(a)});
/*創建引用*/try{for(i=qlis.children.length;i>0;i--){de=document.createElement('dialog');qlis.appendChild(de);de.id='diaq'+i;de.innerHTML=document.getElementById('q'+i).innerHTML}}catch{};
/*創建注释*/try{for(i=plis.children.length;i>0;i--){de=document.createElement('dialog');plis.appendChild(de);de.id='diap'+i;de.innerHTML=document.getElementById('p'+i).innerHTML}}catch{};
/*打開引用*/try{document.querySelectorAll('[q]').forEach(e=>{e.textContent=e.getAttribute('q');e.setAttribute('onclick','diaq'+e.getAttribute('q')+'.showModal()')})}catch{};
/*打開注释*/try{document.querySelectorAll('[p]').forEach(e=>{e.textContent=e.getAttribute('p');e.setAttribute('onclick','diap'+e.getAttribute('p')+'.showModal()')})}catch{};
/*浮窗関閉*/try{Array.prototype.slice.call(document.getElementsByTagName('dialog')).forEach(e=>{e.onclick=(f)=>{if(f.target===e){e.close()}}})}catch{};
/*載錯処理*///try{[].forEach.call(document.images,function(ie){ie.onerror=function(){ie.src='../usr/ie.svg';ie.classList.add('ie');iet=document.createElement('em');iet.innerText=' 〜届かないもの[LOAD ERROR]';ie.parentNode.insertBefore(iet,ie.nextSibling)}})}catch{};	
/*創建関閉*///try{for(i=1;i<20;i++){[].forEach.call(document.querySelectorAll('#q'+i),function(qd){let qe=document.createElement('a');qe.innerText='Ｘ';qe.setAttribute('onclick','q'+i+'.close()')})}}catch{};	
/*載前计时*/console.timeEnd('ＪＳ处理耗时')})




window.onload=()=>{

/*
fetch('https://api.github.com/repos/kanmurimori/kanmurimori.github.io')
.then(response=>response.json())
.then(e=>{starC.textContent=e["stargazers_count"];lastT.textContent=e["updated_at"].replace(/T(.+?)Z/,'')})
.catch((error)=>console.log(error));
/*
fetch('https://api.github.com/repos/kanmurimori/test/issues/1/comments')
.then(response=>response.json())
.then(e=>{com.textContent=e[0]["body"]})
.catch((error)=>console.log(error));
*/
/*Markdown*///container.innerHTML=container.innerHTML.replace(/\[R:(.+?)\|(.+?)]/g,'<ruby>$2<rt>$1</rt></ruby>');
/*祈祷完了*/setTimeout("loadinger.style.opacity='0';loadinger.textContent='少女祈祷済'",500);setTimeout("loadinger.style.display='none'",2000);
/*載后计时*/console.timeEnd('文件加载耗时')}

function fS(value){document.body.style.zoom=value+'%';fSV.textContent=value}

function knight(){
	if(document.body.classList.contains('knight')){document.body.classList.remove('knight');knighter.innerHTML='<i sun></i> Light'}
	else{document.body.classList.add('knight');knighter.innerHTML='<i moon></i> Night'}
}

function unAside(){
	if(document.body.classList.contains('unas')){document.body.classList.remove('unas');unAsider.textContent='unAside'}
	else{document.body.classList.add('unas');unAsider.textContent='Aside'}
}
