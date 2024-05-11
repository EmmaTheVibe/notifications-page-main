const toggle = document.querySelector('.toggle')
const dot = document.querySelectorAll('.dot')
const active = document.querySelectorAll('.active')
const digit = document.querySelector('.digit')

toggle.addEventListener('click', function() {
    active.forEach(active => {
        // active.classList.remove('active')
        active.style.backgroundColor = '#ffffff'
    })
    dot.forEach(dot => {
        dot.style.backgroundColor = '#ffffff'
    })
    digit.innerText = '0'
})
