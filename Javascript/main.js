//Current page location hover

document.querySelectorAll('.nav-link').forEach(link => {
    if(link.href === window.location.href) {
        link.setAttribute('aria-current', 'page')
    }
})

//Change logo image by click

let logoImage = document.querySelector('img');

logoImage.onclick = function() {
    let mySrc = logoImage.getAttribute('src');
    if( mySrc === "Images/JP-Logo.png")
    {
        logoImage.setAttribute('src', "Images/DentonLUL.png");
    } else {
        logoImage.setAttribute('src', "Images/JP-Logo.png");
    }
}