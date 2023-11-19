const fs = require('fs');
const path = require('path');

function getData(fileName){
    let filePath = path.join(__dirname, 'data', fileName)
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(data);
        })
    })
}

function saveData(fileName, data){
    let filePath = path.join(__dirname, 'data', fileName);

    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err)=>{
            if(err) reject(err);
            resolve('Data saved successfully!');
        })
    })
}

async function main(){
    try {
        const input1 = await getData('input1.txt');
        const input2 = await getData('input2.txt');

        const data1 = input1.split('\r\n');
        const data2 = input2.split('\r\n');

        const finalData = data1.concat(data2);
        finalData.sort((a,b)=> a-b);

        const finalOutput = finalData.join('\r\n');
        
        const msg = await saveData('output.txt', finalOutput);
        console.log(msg);
    } 
    catch (err) {
        console.log(err);
    }
}

main();