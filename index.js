function toggleServiceType() {
    const serviceSelect = document.getElementById('services');
    const serviceTypeSelect = document.getElementById('service-type');
    if (serviceSelect.value === 'home') {
        serviceTypeSelect.disabled = true;
    } else {
        serviceTypeSelect.disabled = false;
    }
}