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

getData('input1.txt')
    .then((data)=>{
        // console.log(data);
        const data1 = data.split('\r\n');
        console.log(data1);

        getData('input2.txt')
            .then(data => {
                const data2 = data.split('\r\n');
                console.log(data2);

                const finalData = [...data1, ...data2];
                finalData.sort((a,b)=> a-b);
                console.log(finalData);

                const finalOutput = finalData.join('\r\n');
                console.log(finalOutput);

                const finalPath = path.join(__dirname, 'data', 'output.txt');
                fs.writeFile(finalPath, finalOutput, (err)=>{
                    if(err){
                        throw new err;
                    }
                    console.log('Data written successfully!')
                })
            })
    })