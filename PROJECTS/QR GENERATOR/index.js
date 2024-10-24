const image = document.querySelector('#img'); // Select the image element by ID
const content = document.querySelector('.content'); // Select the input field by class

function generateQR() {
    // Check if the input is empty or contains only spaces
    if (content.value.trim() === '') {
        console.log('Input field is empty!'); // Log when the input is empty
        return;
    }
    
    // QR Code API endpoint
    let linkQR = 'https://api.qrserver.com/v1/create-qr-code/';
    
    // Generate the full URL with encoded input data
    let qrCodeURL = `${linkQR}?size=150x150&data=${(content.value)}`;
    
    // Set the image source to the generated URL
    image.src = qrCodeURL;

    // Log the generated URL for debugging
    console.log('Generated QR Code URL:', qrCodeURL);
}
