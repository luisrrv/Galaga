var now = +new Date,
    deltaT = now - lastFrame;
// Create plane and bullet imgs
var planeImg = document.createElement('img'),
    lastFrame = +new Date,
    timer;

planeImg.src = "/assets/plane.png";

var bulletImg = document.createElement('img'),
    lastFrame = +new Date,
    timer;
bulletImg.src = "/assets/bullet.png";

// Dragonflies crop
cropImage("/assets/dragonflies.png", 150, 0, 300, 300);

//crop the image and draw it to the canvas
function cropImage(imagePath, newX, newY, newWidth, newHeight) {
    const dragonflyImage = new Image();
    dragonflyImage.src = imagePath

    const dragonflyImgs = [];

    //draw the image
    function allLoaded() {
        //draw dragonfly imgs
        ctx.drawImage(dragonflyImgs[0], newX, newY, newWidth, newHeight, 60, 20, newWidth, newHeight); 
        ctx.drawImage(dragonflyImgs[1], newX, newY, newWidth, newHeight, 80, 20, newWidth, newHeight); 
        ctx.drawImage(dragonflyImgs[2], newX, newY, newWidth, newHeight, 100, 20, newWidth, newHeight); 
        ctx.drawImage(dragonflyImgs[3], newX, newY, newWidth, newHeight, 120, 20, newWidth, newHeight); 
        ctx.drawImage(dragonflyImgs[4], newX, newY, newWidth, newHeight, 140, 20, newWidth, newHeight); 
        ctx.drawImage(dragonflyImgs[5], newX, newY, newWidth, newHeight, 160, 20, newWidth, newHeight); 
        ctx.drawImage(dragonflyImgs[6], newX, newY, newWidth, newHeight, 180, 20, newWidth, newHeight); 
        ctx.drawImage(dragonflyImgs[7], newX, newY, newWidth, newHeight, 200, 20, newWidth, newHeight); 
        ctx.drawImage(dragonflyImgs[8], newX, newY, newWidth, newHeight, 220, 20, newWidth, newHeight);  
        
        //draw plane img
        let xval = 140
        ctx.drawImage(planeImg, 140, 240);

        //draw bullet img
        let bulletX = xval
        let bulletY = 220
        // ctx.drawImage(bulletImg, 140, 200);

        document.onkeydown = function (e) {
            e = e || window.event;
            // const left = 
            console.log(e);
            if (e.keyCode === 37) {
                ctx.clearRect(xval, 240, canvas.width, canvas.height);
                xval -= 20;
                bulletX = xval;
                ctx.drawImage(planeImg, xval, 240);
            } else if ( e.keyCode === 39) {
                ctx.clearRect(xval, 240, canvas.width, canvas.height);
                xval += 20;
                bulletX = xval;
                ctx.drawImage(planeImg, xval, 240);
            } else if ( e.code === "Space") {
                // ctx.clearRect(xval, 240, canvas.width, canvas.height);
                xval += 20;
                var interval = setInterval(() => {
                    setTimeout(() => {
                        ctx.drawImage(bulletImg, bulletX, bulletY);
                    }, 100);
                    ctx.clearRect(bulletX, bulletY, 25, 25);
                    bulletY -= 20;
                    if (bulletY === 20) {
                        bulletY = 220;
                        ctx.clearRect(bulletX, bulletY, 25, 25);
                        ctx.clearRect(bulletX, 20, 25, 25);
                        clearInterval(interval);
                    }
                }, 100);
            }
        };
    }
    const canvas = document.querySelector('#canvas'); 
    const ctx = canvas.getContext('2d');

    for (let i = 0; i < 10; i++) {
        dragonflyImage.addEventListener('load', function() {
            dragonflyImgs.push(dragonflyImage);
            
            //set the canvas size to the new width and height
            canvas.width = newWidth;
            canvas.height = newHeight;

            allLoaded();
        });   
    }
};


