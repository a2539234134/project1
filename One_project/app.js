const scrolltp = document.querySelector('#scrolltp');
scrolltp.addEventListener('click',function(){
  // window.scrollTo(0,0) 瞬间滚动至页面
  window.scrollTo({
    top:0,
    left:0,
    // behavior 行为 smooth 平滑
    behavior: "smooth"
  })
});

window.addEventListener('scroll',function(){
  if(window.scrollY >= 700){
    // 设置透明度
    scrolltp.style.opacity = 1;
  }else{
    scrolltp.style.opacity = 0;
  }
});

//更换主题
const themeToggle = document.querySelector('.checkbox');
const body = document.querySelector('body');
const darkmode = localStorage.getItem('dark')

if(darkmode){
  body.classList.add('dark');
  // 确保第二个主题显示的时候，这个选项被选中
  themeToggle.checked = true;
}

themeToggle.addEventListener("change",function(){
  // body本身存在classList属性，该属性下有一个方法toggle，用来添加class属性
  // 可以在控制台 console.log(body.classList) toggle方法在 原型prototype中
  body.classList.toggle("dark");

  // 刷新或该关闭再次打开浏览器时，显示上次的主题,需要本地储存
  if(body.classList.contains('dark')){
    localStorage.setItem('dark','active');
  }else{
    localStorage.removeItem('dark');
  }
});