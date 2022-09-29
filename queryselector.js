document.querySelector('#qu1').addEventListener('input',(e)=>{
    console.log(e.target.value)
    if(e.target.value =='45442'){
        console.log('recapture is true')
        document.querySelector('#qu2').style.backgroundColor= 'green'
    }
    else{
        console.log('recapture is false')
        document.querySelector('#qu2').style.backgroundColor='red'
    }
})