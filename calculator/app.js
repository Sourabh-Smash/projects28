(function(){


let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let equal = document.querySelector('.btn-equal');
let clear = document.querySelector('.btn-clear');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    let val = e.target.dataset.num;
    screen.value += val;
    console.log(screen.value);
    
  });
});

equal.addEventListener('click', e => {
  if (screen.value === '') {
    screen.value = '';
  } else {
      console.log(screen.value);
     let answer=eval(screen.value);
     console.log(answer);
    screen.value = answer;
  }
});
})();
