document.addEventListener('DOMContentLoaded', function() {
    const elTab = document.querySelectorAll('.tab > a');
    const elCon = document.querySelectorAll('.contents div');
    let num = 0;

    for (let i = 0; i < elTab.length; i++) {
        elTab[i].addEventListener('click', function() {
            elTab[num].classList.remove('active');
            elCon[num].classList.remove('active');
            elTab[i].classList.add('active');
            elCon[i].classList.add('active');
            num = i;
        });
    }
});