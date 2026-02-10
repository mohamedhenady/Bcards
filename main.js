document.addEventListener('DOMContentLoaded', () => {
    // Inputs
    const inputs = {
        width: document.getElementById('input-width'),
        height: document.getElementById('input-height'),
        nameAr: document.getElementById('input-name-ar'),
        nameEn: document.getElementById('input-name-en'),
        slogan: document.getElementById('input-slogan'),
        address: document.getElementById('input-address'),
        phone: document.getElementById('input-phone'),
        mobile: document.getElementById('input-mobile'),
        whatsapp: document.getElementById('input-whatsapp')
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
        whatsapp: document.getElementById('display-whatsapp'),
        qr: document.getElementById('display-qr')
    };

    function update() {
        // Update Dimensions
        document.documentElement.style.setProperty('--card-width', `${inputs.width.value}cm`);
        document.documentElement.style.setProperty('--card-height', `${inputs.height.value}cm`);

        // Update Text
        displays.nameAr.textContent = inputs.nameAr.value;
        displays.nameArSmall.textContent = inputs.nameAr.value;

        displays.nameEn.textContent = inputs.nameEn.value;
        displays.nameEnSmall.textContent = inputs.nameEn.value;

        displays.slogan.textContent = inputs.slogan.value;
        displays.address.textContent = inputs.address.value;
        displays.phone.textContent = inputs.phone.value;
        displays.mobile.textContent = inputs.mobile.value;
        displays.whatsapp.textContent = inputs.whatsapp.value;

        // Update QR Code (Linking to WhatsApp by default now since web link is removed)
        const waUrl = `https://wa.me/${inputs.whatsapp.value.replace(/[^0-9]/g, '')}`;
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(waUrl)}`;
        displays.qr.src = qrUrl;

        // Save to LocalStorage
        const data = {};
        Object.keys(inputs).forEach(key => data[key] = inputs[key].value);
        localStorage.setItem('cardGeneratorData', JSON.stringify(data));
    }

    // Load from LocalStorage
    const savedData = localStorage.getItem('cardGeneratorData');
    if (savedData) {
        const data = JSON.parse(savedData);
        Object.keys(data).forEach(key => {
            if (inputs[key]) inputs[key].value = data[key];
        });
    }

    // Add event listeners
    Object.values(inputs).forEach(input => {
        input.addEventListener('input', update);
    });

    // Initial run
    update();
});
