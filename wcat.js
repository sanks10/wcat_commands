let inp=process.argv.slice(2);
let fs=require("fs");
console.log('input', inp);
let options=[],filesystem=[];
for(let i=0; i<inp.length;i++){
    if(inp[i]=='-b'||inp[i]=="-s"||inp[i]=='-n'){

        options.push(inp[i]);
    }
    else{
        filesystem.push(inp[i]);
    }
}
console.log(options," ",filesystem);
for(let i=0;i<filesystem.length;i++){
    let c=fs.existsSync(filesystem[i]);
    if(c==false){
        console.log("filesystem", filesystem[i]," does not exist");

    }
    else{
        let d=fs.readFileSync(filesystem[i]);
        console.log(d.toString());
    }
}