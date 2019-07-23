const decodeQRcodes = function()
{
    let images = document.getElementsByTagName("img");
    for (var i=0; i<images.length; i++)
    {
        let img = images[i];
        let qrCanvas = document.createElement("canvas");
        let qrCtx = qrCanvas.getContext("2d");
        qrCtx.drawImage(img, 0, 0, qrCanvas.width, qrCanvas.height);
        let buff = qrCtx.getImageData(0, 0, qrCanvas.width, qrCanvas.height);
        let detected = jsQR(buff.data, qrCanvas.width, qrCanvas.height);
        if (detected) {
            img.title = detected.data;
        }
    }

}

document.addEventListener("DOMContentLoaded", decodeQRcodes(), false)