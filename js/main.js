tabs_container = document.querySelector('#welcomewelcome-container-tabs')
tab_items = document.querySelectorAll(".welcome-container-tabs-item");
welcome_contents = document.querySelectorAll('.welcome-container-content')
welcome_bgs = document.querySelectorAll('.welcome-background');


tab_items.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
        tabs_container.querySelector('.active').classList.remove('active');
        tab.classList.add('active');
        console.log(idx);

        welcome_contents.forEach((content, c_idx) => {
            if (c_idx === idx) {
                content.classList.remove('inactive');
            } else if (content.classList.contains('inactive') === false) {
                content.classList.add('inactive');
            }
        });

        welcome_bgs.forEach((bg, c_idx) => {
            if (c_idx === idx) {
                bg.classList.remove('inactive');
            } else if (bg.classList.contains('inactive') === false) {
                bg.classList.add('inactive');
            }
        });

    })
})

