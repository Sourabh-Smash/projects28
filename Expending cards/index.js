console.log('1st project');
const tran=document.querySelectorAll('.panel');
tran.forEach((temp)=>{
    temp.addEventListener('click',()=>{
        removeActiveClasses()
      temp.classList.add('active');
    });
});
function removeActiveClasses(){
    tran.forEach(temp=>{
        temp.classList.remove('active');
    });
};