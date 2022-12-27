import fs from 'fs';
console.log('notes.js');

let notesArr= [];
 try{
    notesArr = JSON.parse(fs.readFileSync('./notes.json','utf-8'))
}catch{};

export const addNote = (newItem)=>{
    if(notesArr.some(item=>item.title==newItem.title)){
        return 'This title is already exist'
    }else{
        notesArr.push(newItem);
        fs.writeFileSync('./notes.json', JSON.stringify(notesArr))
    }     
    return 'Note added successfully' 
}

export const readNote = (newItem)=>{
    const note = notesArr.filter(item=>item.title==newItem.title);
    if(note.length>0){
     return `Title: ${note[0].title} Note: ${note[0].body} `
    }else{
     return 'Title not found'
    }
 }

export const notesList = ()=>{
    return notesArr
}

export const deleteNote = (newItem)=>{
    if(notesArr.some(item=>item.title==newItem.title)){
        const notes = notesArr.filter(item=>item.title != newItem.title);
        fs.writeFileSync('./notes.json', JSON.stringify(notes));
        return 'Note deleted'
    }else{
        return 'Title not exist'
    }
    
}









// //async
// fs.readFile('./name', 'utf-8', (err, data) =>{
//     if(err){
//         console.log('error - ', err);
//     }else{
//         console.log(data)
//     }
// })
// //synce
// fs.readFileSync('./name', 'utf-8', (err, data) =>{
//     if(err){
//         console.log('error - ', err);
//     }else{
//         console.log(data)
//     }
// })

// fs.appendFile('./myfile', '12345', (err) => {
//     if(err){
//         console.log(err);
//     }
// })

// fs.writeFile('./name1', '1234', (err) => {
//     if(err){
//         console.log(err);
//     }
// })