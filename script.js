const toggleSwitch = document.getElementById('modo-noche-toggle');

toggleSwitch.addEventListener('change', function () {
    document.body.classList.toggle('modo-noche');
});