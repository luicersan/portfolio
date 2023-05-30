const toggleSwitch = document.getElementById('modo-noche-toggle');

toggleSwitch.addEventListener('change', function () {
    document.body.classList.toggle('modo-noche');
});

const switchToggle = document.getElementById('modo-noche-toggle');
const switchIcon = document.getElementById('modo-noche-icon');

switchToggle.addEventListener('change', function () {
    if (this.checked) {
        switchIcon.classList.add('modo-noche');
    } else {
        switchIcon.classList.remove('modo-noche');
    }
});