

const getList = async()=>{
    return await (await fetch('/items', {
        method: 'GET'})).json()
}

const addList = (list)=>{
    const box = document.getElementById('list');
    const ul = document.createElement('ul');
    box.appendChild(ul);
    if(list.length>0){
        for(item of list){
            const li = document.createElement('li');
            li.textContent = JSON.stringify(item);
            ul.appendChild(li)
        }
    }else{
        const li = document.createElement('li');
        li.textContent = 'your shoping list is empty, please add items';
        ul.appendChild(li)
    }
   
}

window.onload=()=>{
    getList()
    .then(res=>addList(res))
    .catch(err=>addList([{msg:'list not found'}]))
}

