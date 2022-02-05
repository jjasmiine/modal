/*  ()  */

/*HIDE MENU - LINK CLICK*/
const sections = document.querySelectorAll('section[id]')

function linkActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }

        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', linkActive)

/*SHOW MODAL*/
const showModal = (openButton, modalContent) => {
    const openBtn = document.getElementById(openButton),
        modalContainer = document.getElementById(modalContent)

    if (openBtn && modalContainer) {
        openBtn.addEventListener('click', () => {
            modalContainer.classList.add('show-modal')
        })
    }
}

showModal('open-modal', 'modal-container')

/*CLOSE MODAL*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal() {
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal')
}

closeBtn.forEach(c => c.addEventListener('click', closeModal))