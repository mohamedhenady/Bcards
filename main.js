document.addEventListener('DOMContentLoaded', () => {
    // Inputs
    const inputs = {
        nameAr: document.getElementById('input-name-ar'),
        nameEn: document.getElementById('input-name-en'),
        slogan: document.getElementById('input-slogan'),
        address: document.getElementById('input-address'),
        phone: document.getElementById('input-phone'),
        mobile: document.getElementById('input-mobile'),
        url: document.getElementById('input-url')
    };

    // Displays
    const displays = {
        nameAr: document.getElementById('display-name-ar'),
        nameArSmall: document.getElementById('display-name-ar-small'),
        nameEn: document.getElementById('display-name-en'),
        nameEnSmall: document.getElementById('display-name-en-small'),
        slogan: document.getElementById('display-slogan'),
        address: document.getElementById('display-address'),
        phone: document.getElementById('display-phone'),
        mobile: document.getElementById('display-mobile'),
        url: document.getElementById('display-url'),
        qr: document.getElementById('display-qr')
    };

    function update() {
        displays.nameAr.textContent = inputs.nameAr.value;
        displays.nameArSmall.textContent = inputs.nameAr.value;
        
        displays.nameEn.textContent = inputs.nameEn.value;
        displays.nameEnSmall.textContent = inputs.nameEn.value;
        
        displays.slogan.textContent = inputs.slogan.value;
        displays.address.textContent = inputs.address.value;
        displays.phone.textContent = inputs.phone.value;
        displays.mobile.textContent = inputs.mobile.value + " (واتساب)";
        
        // Clean URL for display vs actual link
        let cleanUrl = inputs.url.value.replace(/https?:\/\//, '').replace(/\/$/, '');
        displays.url.textContent = cleanUrl;
        
        // Update QR Code
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputs.url.value)}`;
        displays.qr.src = qrUrl;
    }

    // Add event listeners to all inputs
    Object.values(inputs).forEach(input => {
        input.addEventListener('input', update);
    });

    // Initial run
    update();
});
