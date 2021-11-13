let fs=require("fs");
let extensionsMapping=require("./util.js");
//console.log(extensionsMapping);

let testFolderPath="./downloads";
let allFiles=fs.readdirSync(testFolderPath);
//console.log(allFiles);

for(let i=0;i<allFiles.length;i++){
    sortFile(allFiles[i]);
}

function getExtensions(file){
    file=file.split(".");
    return file[1];
}
function checkExtensionFolder(extension){

}
function createExtensionFolder(extension){

}
function moveFile(file,extension){

}

function sortFile(file){
    //console.log(file);
    let extension=getExtensions(file);
    //console.log(extension);

    let isFolder=checkExtensionFolder(extension);
    if(isFolder){
        //extensions folder exists
        moveFile(file,extension);
    }else{
        //extensions folder not exist
        createExtensionFolder(extension);
        moveFile(file,extension);
    }
}