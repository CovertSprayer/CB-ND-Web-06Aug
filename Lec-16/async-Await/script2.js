

function step1(){
    return new Promise((resolve, reject) => {
        console.log('Selecting a file!');
        setTimeout(() => {
            let image = 'profile.jpg'
            // return image;
            resolve(image)
        }, 3000);
    })
}

function step2(image){
    return new Promise((resolve, reject) => {
        console.log('Applying filter on', image);
        setTimeout(() => {
            let filteredImg = 'filtered Photo'
            // return filteredImg;
            resolve(filteredImg);
        }, 2000);
    })
}

function step3(filteredImg){
    return new Promise((resolve, reject) => {
        console.log('Finding a caption for', filteredImg);
        setTimeout(()=>{
            let finalPhoto = 'filtered + caption photo';
            // return finalPhoto;
            resolve(finalPhoto);
        },3000)
    })
}

function step4(finalPhoto){
    return new Promise((resolve, reject) => {
        console.log('Uploading this', finalPhoto)
        setTimeout(() => {
            console.log('Uploading Done!!');
        }, 2000);
    })
}

// const img = step1();
// const filteredImg = step2(img);
// const filterWithCaption = step3(filteredImg);
// step4(filterWithCaption);

step1()
    .then(step2)
    .then(step3)
    .then(step4)

// async function task(){
//     const img = await step1();
//     const filteredImg = await step2(img);
//     const filterWithCaption = await step3(filteredImg);
//     await step4(filterWithCaption);
// }

// task();
