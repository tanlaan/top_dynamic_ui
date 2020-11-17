const buttons = document.getElementsByClassName('hamburger')

for (let i = 0; i < buttons.length; i += 1) {
    console.log('i got here')
    buttons[i].addEventListener('click', function hamburgerListener(e) {
        const hiding = e.currentTarget.parentNode.getElementsByTagName('ul');
        for (let item of hiding) {
            let isHidden = item.classList.toggle('hidden');
            if (!isHidden) {
                item.style.opacity = '1';
            } else {
                item.style.opacity = '0';
            }
        }
        

    })
}