
function download(url, cb){
    console.log('Started to dowload the file!!');
    setTimeout(()=>{
        let file = url.split('/').pop();
        cb(file, upload);
    }, 4000)
}

function compress(downloadedFile, cb){
    console.log('File downloaded successfully as', downloadedFile);
    console.log('file started to compress');
    setTimeout(() => {
        let file = downloadedFile.split('.').shift() + '.zip';
        cb(file);
    }, 2000);
}

function upload(compressedFile){
    console.log('file compressed successfully!');
    console.log('file started to upload on https://www.facebook.server.com')
    setTimeout(()=>{
        console.log('successfully uploaded', compressedFile)
    }, 3000)
}


download('https://www.facebook.com/profile.jpg', compress)

