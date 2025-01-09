const btnShowShortener = document.getElementById("show-content-shortener");
const btnShowGetInfo = document.getElementById("show-content-get-info-link");
const btnToQRCode = document.getElementById("show-content-qr-code");
const contentShortener = document.getElementById("content-shortener");
const contentGetInfo = document.getElementById("content-get-info-link");
const contentQRCode = document.getElementById("content-qr-code");

function updateContentAndButtons(activeContent, activeButton, allContents, allButtons) {
    allContents.forEach(content => {
        if (content === activeContent) {
            content.classList.add("flex");
            content.classList.remove("hidden");
        } else {
            content.classList.add("hidden");
            content.classList.remove("flex");
        }
    });

    allButtons.forEach(button => {
        if (button === activeButton) {
            button.classList.add("bg-primary", "text-white");
            button.classList.remove("bg-white", "text-black");
        } else {
            button.classList.add("bg-white", "text-black");
            button.classList.remove("bg-primary", "text-white");
        }
    });
}

function showShortener() {
    updateContentAndButtons(
        contentShortener, 
        btnShowShortener, 
        [contentShortener, contentGetInfo, contentQRCode], 
        [btnShowShortener, btnShowGetInfo, btnToQRCode]
    );
}

function showGetInfo() {
    updateContentAndButtons(
        contentGetInfo, 
        btnShowGetInfo, 
        [contentShortener, contentGetInfo, contentQRCode], 
        [btnShowShortener, btnShowGetInfo, btnToQRCode]
    );
}

function showToQRCode() {
    updateContentAndButtons(
        contentQRCode, 
        btnToQRCode, 
        [contentShortener, contentGetInfo, contentQRCode], 
        [btnShowShortener, btnShowGetInfo, btnToQRCode]
    );
}

function copyHasilShortener() {
    const hasil = document.getElementById("hasil-shortener");
    navigator.clipboard.writeText(hasil.value)
    .then(() => {
        Swal.fire({
            title: "Berhasil!",
            text: "Link berhasil disalin: " + hasil.value,
            icon: "success"
        });
    })
    .catch((err) => {
        Swal.fire({
            title: "Terjadi Kesalahan!",
            text: "Gagal menyalin link",
            icon: "error"
        });
    });
}

var qrcode = new QRCode("qrcode");

const containerHasilQRCode = document.getElementById("hasil-qr-code-container");
const inputLinkQRCode = document.getElementById("id-link-to-qr");
function makeCode () {    
    if (!inputLinkQRCode.value) {
        Swal.fire({
            title: "Terjadi Kesalahan!",
            text: "Link kosong!",
            icon: "error"
        });
        inputLinkQRCode.focus();
        return;
    }
    containerHasilQRCode.classList.remove("hidden");
    qrcode.makeCode(inputLinkQRCode.value);
}

const containerQRCode = document.getElementById('qr-code-container');
function downloadQRCode() {
    html2canvas(containerQRCode).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');

      const link = document.createElement('a');
      link.href = imgData;
      link.download = `qr-code.jpg`;
      link.click();
    });
};