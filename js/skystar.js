// poem
var words=[
    '伤心桥下春波绿',
    '曾是惊鸿照影来',
    '当年明月在',
    '曾照彩云归',
    '归去来兮',
    '真堪偕隐',
    '画船听雨眠',
    '愿为江水',
    '与君重逢',
    '一日不见兮',
    '思之若狂',
    '柳絮空缱绻',
    '南风知不知',
    '我见青山多妩媚',
    '料青山见我也应如是',
    '取次花丛懒回顾',
    '半缘修道半缘君',
    '三笑徒然当一痴',
    '人生若只如初见',
    '我余光中都是你',
    '人生自是有情痴',
    '此恨不关风与月',
    '春蚕到死丝方尽',
    '蜡炬成灰泪始干',
    '今夜何夕',
    '见此良人',
    '愿我如星君如月',
    '夜夜流光相皎洁',
    '情不所起',
    '一往而深',
    '玲珑骰子安红豆',
    '入骨相思知不知',
    '多情只有春庭月',
    '尤为离人照落花',
    '若有知音见采',
    '不辞唱遍阳春',
    '休言半纸无多重',
    '万斛离愁尽耐担',
    '夜月一帘幽梦',
    '和光同尘',
    '杳霭流玉',
    '月落星沉',
    '霞姿月韵',
    '喜上眉梢',
    '醉后不知天在水',
    '满船星梦压星河',
    '落花人独立',
    '微雨燕双飞',
    '掬水月在手',
    '弄花香满衣',
    '夜深忽梦少年事',
    '唯梦闲人不梦君',
    '垆边人似月',
    '皓腕凝霜雪',
    '众里嫣然通一顾',
    '人间颜色如尘土',
    '若非群玉山头见',
    '会向瑶台月下逢',
    '沉鱼落雁鸟惊喧',
    '羞花闭月花愁颤',
    '解释春风无限恨',
    '沉香亭北倚阑干'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(8,20)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
window.onload = function() {
    setInterval("toggleSound()", 100);
}
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '永远感动，永远热泪盈眶';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体';
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体';
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体';
          texttwo.innerHTML = '永远都是最好的扬';
          textthree.innerHTML = '💗';
      },28000)
      setTimeout(function(){
        textone.innerHTML = 'TESTING-STEP3-TEXT1';
        texttwo.innerHTML = 'TESTING-STEP3-TEXT2';
        textthree.innerHTML = 'TESTING-STEP3-TEXT3';
      },112500)

// function toggleSound() {
//     // var music = document.getElementById("vd");
//     // if (music.paused) {
//     //     music.paused=false;
//     //     music.play();
//     // }
// }
 
// <script type="text/javascript">
// window.onload = function(){
//     setInterval("toggleSound()",100);
// }

// function toggleSound() {
//        var music = document.getElementById("vd");//获取ID  
           
//        if (music.paused) { //判读是否播放  
//            music.paused=false;
//            music.play(); //没有就播放 
//        }    
// }
// </script>
