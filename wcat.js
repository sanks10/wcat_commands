// let inp=process.argv.slice(2);
// let fs=require("fs");
// console.log('input', inp);
// let options=[],filesystem=[];
// for(let i=0; i<inp.length;i++){
//     if(inp[i]=='-b'||inp[i]=="-s"||inp[i]=='-n'){

//         options.push(inp[i]);
//     }
//     else{
//         filesystem.push(inp[i]);
//     }
// }
// console.log(options," ",filesystem);
// for(let i=0;i<filesystem.length;i++){
//     let c=fs.existsSync(filesystem[i]);
//     if(c==false){
//         console.log("filesystem", filesystem[i]," does not exist");

//     }
// }
// let tc="";
// let tArr=[];
// for(let i=0;i<filesystem.length;i++){
//     let content=fs.readFileSync(filesystem[i]);
//     tc+=content;
// }
// console.log(tc);

// let isSOption = options.includes("-s");
// if(isSOption==true){
//     let op=tc.split("\n");
//     console.log(op);
//     for(let i=0;i<op.length;i++){
//         if(op[i]!=""){
//             tArr.push(op[i]);
//         }
//     }
//     op=tArr;
//     tc=op.join("\n");
//     console.log(tc);
// }

// let isNOption=options.includes("-n");

// if(isNOption){
//     console.log(tc);
//     let arr=tc.split("\n");
//     console.log(arr);
//     let count=1;
//     for(let i=0;i<arr.length;i++){
//         arr[i]=count+". "+arr[i];
//         count++;


//     }
//     let tc=arr.join("\n");
//     console.log(tc);

// }

let fs=require('fs');

let input=process.argv.slice(2);

console.log(input);

let options=[],filepaths=[];

for(let i=0;i<input.length;i++){

    //let firstchar=input[i].charAt(0);

    if(input[i]=="-b" ||input[i]=="-n" || input[i]=="-s"){

        options.push(input[i]);

    }

    else{

        filepaths.push(input[i]);

    }

}

//console.log(options);

//console.log(filepaths);

 

for(let i=0; i<filepaths.length; i++){

    let filepresent=fs.existsSync(filepaths[i]);

    //console.log(filepresent);

    if(filepresent==false){

        console.log("Filepath",filepaths[i],"is not present");

        return;

    }

}

let totalcontent="";

for(let i=0; i<filepaths.length; i++){

    let content=fs.readFileSync(filepaths[i]);

    totalcontent=totalcontent+content+"\r\n";

}

console.log(totalcontent);

let tempArr=[]

let isSOption=options.includes("-s");

if(isSOption==true){

    let outputArr=totalcontent.split("\n");

    //console.log(outputArr);

    for(let i=0;i<outputArr.length;i++){

        if(outputArr[i]!=""){

            tempArr.push(outputArr[i]);

        }

    }

    outputArr=tempArr

    totalcontent=outputArr.join("\n");

 

    console.log(totalcontent);

}

 

let isNOption=options.includes('-n');

if(isNOption==true){

    let arr=totalcontent.split('\n');

    console.log(arr);

    let count=1;

    for(let i=0;i<arr.length;i++){

        arr[i]=count+". "+arr[i];

        count++;

    }

    totalcontent=arr.join('\n');

    console.log(totalcontent);

}
let isBOption=options.includes("-b");
if(isBOption){
    let arr=totalcontent.split('\n');
    let count=1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=""){
            arr[i]=count+". "+arr[i];
            count++;
        }
    }
    totalcontent=arr.join('\n');
    console.log(totalcontent);
}