/*
function pullDown(){


const Button = document.getElementById('list')

window.addEventListener('click',function(){
    const Button = document.getElementById('pull-down')
})

const pullDownButton = document.getElementById('list')
const pullDownParents = document.getElementById('pull-down')
const pullDownChild = document.querySelectorAll('.pull-down-list')
const currentlist = document.getElementById('current-list')

Button.addEventListener('click',function(){
    if(pullDownParents.getAttribute('style') == 'display:block;'){
        pullDownParents.removeAttribute('style','display:bock;')
        console.log('表示されました')
    }else{
        pullDownParents.setAttribute('style','display:block;')
        console.log('表示されませんでした')
    }
})

pullDownButton.addEventListener('click',function(){
    this.setAttribute('style','display:block;')
})


pullDownChild.forEach(function(list){
    list.addEventListener('click',function(){
        const value = list.innerHTML
        console.log(value)
        currentlist.innerHTML = value
    })
})


}

window.addEventListener('load',pullDown)
*/

(function () {
    document.addEventListener('DOMContentLoaded', function() {
      const btn = document.getElementById('dropdown__btn');
      if(btn) {
        btn.addEventListener('click', function(){
          this.classList.toggle('is-open');
        });
      }
    });
  }());