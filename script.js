function countWord() {
    let text=document.getElementById('te').value
    let s=text.split(' ')
    let words=0
    for(let i=0;i<s.length;i++){
        if(s[i]!=""){
            words++
        }
    }
    document.getElementById('w').innerHTML=words
}

const c=()=>{
    let text=document.getElementById('te').value
    
    document.getElementById('c').innerHTML=text.length
}


let x=function(e){
    let text=document.getElementById('te').value.toUpperCase()
    document.getElementById('te').value=text
}

let y=function(e){
    let text=document.getElementById('te').value.toLowerCase()
    document.getElementById('te').value=text
}

let a=document.getElementsByTagName('button')[0]
a.addEventListener('click',x)

let b=document.getElementsByTagName('button')[1]
b.addEventListener('click',y)