

const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');

var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// ------------------ sidebar ------------------
// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.toggle('active');
        // manage the appearance of notifications
        if(item.id !== 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        }else{
            document.querySelector('.notification-popup').style.display = 'block';
            // remove number of messages badge
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


// ------------------ messages ------------------
// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000)
})


// searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) !== -1){
            chat.style.display = "flex";
        }else{
            chat.style.display = 'none';
        }
    })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage);


// ------------------ theme customization ------------------
// opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// closes modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

// close modal
themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);


// ------------------ font sizes ------------------
// remove active class from span or font size selectors
const removeSizeSelectorActiveClass = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    });
}


fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        let fontSize;
        removeSizeSelectorActiveClass();
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');
    } else if (size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
    } else if (size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    } else if (size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
    } else if (size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('----sticky-top-left', '-12rem');
        root.style.setProperty('----sticky-top-right', '-35rem');
    }
    
    // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize;
    })
})


// ------------------ primary colors ------------------
// remove active class from colors
const removeColorPaletteActiveClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        removeColorPaletteActiveClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--color-primary-hue', primaryHue);
    })
})


// ------------------ background colors ------------------
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

// changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}

Bg1.addEventListener('click', () => {
    // add active class
    Bg1.classList.add('active');
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // remove customized changes from local storage
    window.location.reload();
    });

Bg2.addEventListener('click', () => {
lightColorLightness = '15%';
darkColorLightness = '95%';
whiteColorLightness = '20%';

// add active class
Bg2.classList.add('active');
// remove active class from the others
Bg1.classList.remove('active');
Bg3.classList.remove('active');
changeBG();
});

Bg3.addEventListener('click', () => {
    lightColorLightness = '0%';
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    
    // add active class
    Bg3.classList.add('active');
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
    });