// const process = require('process');
  
// // Printing process.argv property value
// console.log(process.argv);

// let args = process.argv;
// console.log('args.length=>',args.length);
// console.log('args.slice(2)=>',args.slice(2));

// const fs = require('fs');
import {addNote, readNote, notesList, deleteNote} from "./notes.js"
import {start} from './start.js'
import fs from 'fs';
import _yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
const argv = _yargs(hideBin(process.argv))
  .command('action <add> <read> <list> <remove> ', 'the action command')
  .help()
  .argv

const newItem = {title:argv.title, body:argv.body};
const action = argv._[0];




// switch(action){
//     case 'add': console.log(addNote(newItem)); break;
//     case 'read': console.log(readNote(newItem)); break;
//     case 'list': {
//         const list = notesList();
//         if(list.length>0){
//             for(const item of list){console.log( `Title: ${item.title} Note: ${item.body} `)}
//         }else{console.log('List is empty')}       
//     } break;
//     case 'remove': console.log(deleteNote(newItem)); break;
//     default: console.log('action not found');
// }










