
function download(url){
    return new Promise((resolve, reject) => {
        console.log('Started to dowload the file!!');
        setTimeout(()=>{
            let file = url.split('/').pop();
            if(file){
                resolve(file);
            }
            reject('File not found!!')

        }, 4000)
    })
}

function compress(downloadedFile){
    return new Promise((resolve, reject) => {
        console.log('file started to compress');
        setTimeout(() => {
            let file = downloadedFile.split('.').shift() + '.zip';
            resolve(file);
        }, 2000);
    })
}

function upload(compressedFile){
    return new Promise((resolve, reject) => {
        console.log('file started to upload on https://www.facebook.server.com')
        setTimeout(()=>{
            resolve(compressedFile)
        }, 3000)
    })
}

// download('https://www.facebook.com/profile.jpg')
//     .then(compress)
//     .then(upload)
//     .then(function(){
//         console.log('All Done!!')
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

async function solve(){
    const downloadedFile = await download('https://www.facebook.com/profile.jpg')
    const compressedFile = await compress(downloadedFile);
    await upload(compressedFile);
    console.log('All Done!!')
}

solve();