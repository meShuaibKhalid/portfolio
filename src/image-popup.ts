import "../src/style.css"; 

const images: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName('img');
for (let image of Array.from(images)) {
    image.addEventListener('click', () => {
        showCompleteImage(image?.src);
    })
}

function showCompleteImage(src: string) {
    const link = document.createElement('a');
    link.href = src;
    link.target = "_blank"
    link.click();
}

