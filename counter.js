const val= document.querySelector('#counter');
const increment = () => {
    let value= parseInt(val.innerText);
    value+=1;
    val.innerText = value;
};
const decrement = () => {
    let value= parseInt(val.innerText);
    value-=1;
    val.innerText = value;
};
const ctr = () => {
    const counter = ()=>{
        let value= parseInt(val.innerText);
        if(value==0){
            clearInterval(id);
            console.log("clearinterval");
            return;
        }
        value-=1;
        val.innerText = value;
    }
    const id = setInterval(counter,1000);
};