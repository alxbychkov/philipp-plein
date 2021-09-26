const close = document.querySelector('[data-type="close"]')

if (close) {
    close.addEventListener('click', e => {
        const banner = e.target.closest('.top-banner')
        const header = document.querySelector('#header')

        if (banner) {
            banner.style.display = 'none';

            if (header) 
                header.classList.contains('with__banner') && header.classList.remove('with__banner')
        }
    })
}