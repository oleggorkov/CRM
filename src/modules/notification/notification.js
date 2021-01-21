window.onload = () => {
    let notification = document.querySelector('.notification');
    let closeBtn = document.querySelector('.notification button');
    closeBtn.addEventListener('click', () => {
        notification.classList.add('notification__close');
    })
}