let h_calcs = document.querySelectorAll('.h-calc');

h_calcs.forEach(e => {
    if (e.clientWidth > 768) {
        let tall = e.offsetHeight
        e.style.height = tall + 'px' 
    }
})

