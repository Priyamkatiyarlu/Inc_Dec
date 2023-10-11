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