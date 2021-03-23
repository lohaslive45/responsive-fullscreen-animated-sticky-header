//!---下滑滾軸產生新標籤"sticky"---
window.addEventListener("scroll",function(){
    const header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

//!---偵測 菜單按鈕 是否被按下產生"active"---
const navigation = document.querySelector('nav')
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active')
    navigation.classList.toggle('active')
}