let inp=process.argv.slice(2);
console.log('input', inp);
let options=[],filesystem=[];
for(let i=0; i<inp.length;i++){
    if(inp[i].charAt(0)=='-'){
        options.push(inp[i]);
    }
    else{
        filesystem.push(inp[i]);
    }
}
console.log(options," ",filesystem);