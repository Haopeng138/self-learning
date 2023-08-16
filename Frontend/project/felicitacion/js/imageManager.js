const slideContainer = document.querySelector('.slide');
const images = []

fetch('https://hb-yuyi.vercel.app/getStaticImages')
    .then(response => response.json())
    .then(data =>{
        //console.log(data);
        for (const img of data) {
            // check if the image is jpg
            if (img.includes('.jpg')) images.push(img);
        }
    });

for (const img of images) {
    const imgElement = document.createElement('div');
    imgElement.classList.add('item');
    imgElement.style.backgroundImage = `url(${img})`;
    slideContainer.appendChild(imgElement);
}