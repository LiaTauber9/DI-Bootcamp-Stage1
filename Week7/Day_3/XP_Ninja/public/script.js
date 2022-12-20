let val;

function onInput(event){
    console.log('onInput');
    val =  event.target.value
    console.log('val=>',val);
}

const getRobots = async(val)=>{
   
    const response = await fetch(`http://localhost:3001/${val}`);
    const data = await response.json();
    return data
}

const displayRobots = (list) =>{
    for(item of list){
        // document.write(item.name)
        const card = document.createElement('div');
        card.textContent=item.name;
        card.classList.add('card');
        document.getElementById('box').appendChild(card);
    }
}

function onSubmit(event){
    event.preventDefault();
    console.log('onSubmit');
    try{
        getRobots(val)
        .then(data=>{
            console.log(data);
            displayRobots(data);
        });
    }catch(e){console.log('error')}
      
}