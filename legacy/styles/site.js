(function(){
const $=s=>document.querySelector(s),body=document.body;
const b=$('#burger');
if(b){b.onclick=()=>body.classList.toggle('open');
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>body.classList.remove('open')));
addEventListener('keydown',e=>e.key==='Escape'&&body.classList.remove('open'));}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)});
const cur=$('#cur');
if(cur){addEventListener('mousemove',e=>{cur.style.left=e.clientX+'px';cur.style.top=e.clientY+'px'});
document.querySelectorAll('a,button,.chip').forEach(el=>{el.addEventListener('mouseenter',()=>cur.classList.add('big'));el.addEventListener('mouseleave',()=>cur.classList.remove('big'))});}
})();
