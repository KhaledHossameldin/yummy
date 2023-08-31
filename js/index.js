

$('i#open-colse-navbar').click(function () {
    if (this.classList.contains('fa-close')) {
        closeSideNavbar();
        return;
    }
    openSideNavbar();
});

function closeSideNavbar() {
    $('i#open-colse-navbar').removeClass('fa-close').addClass('fa-align-justify');
    $('aside').animate({ left: '-17.25rem' }, 500);
    $('aside li').animate({top: 300}, 500);
}

function openSideNavbar() {
    $('i#open-colse-navbar').removeClass('fa-align-justify').addClass('fa-close');
    $('aside').animate({ left: '0' }, 500);
    for (let i = 0; i < 5; i++) {
        $('aside li').eq(i).animate({
            top: 0
        }, (i + 5) * 100)
    }
}

$(document).ready(function () {
    closeSideNavbar();
});