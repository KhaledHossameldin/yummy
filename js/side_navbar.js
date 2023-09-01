function toggleSideNavbar(button) {
    if (button.classList.contains('fa-close')) {
        closeSideNavbar();
        return;
    }
    openSideNavbar();
}

function closeSideNavbar() {
    $('i#open-colse-navbar').removeClass('fa-close').addClass('fa-align-justify');
    $('aside').animate({ left: '-17.25rem' }, 500);
    $('aside li').animate({ top: 300 }, 500);
}

function openSideNavbar() {
    $('i#open-colse-navbar').removeClass('fa-align-justify').addClass('fa-close');
    $('aside').animate({ left: '0' }, 500);
    for (let i = 0; i < 5; i++) {
        $('aside li').eq(i).animate({ top: 0 }, (i + 5) * 100);
    }
}

function goToTab(tab) {
    let path = '';
    if (location.pathname.endsWith('/')) {
        path = `./html/${tab}.html`;
    } else {
        path = `./${tab}.html`;
    }
    location.replace(path);
}

$(document).ready(function () {
    $(document.body).append(`
        <aside class="position-fixed top-0 bottom-0 d-flex z-${location.pathname.endsWith('/') ? 2 : 3}">
            <div id="side-navbar"
                class="bg-black p-4 d-flex flex-column justify-content-between text-white overflow-hidden">
                <ul class="list-unstyled d-flex flex-column gap-3 overflow-hidden">
                    <li class="position-relative">
                        <p onClick="goToTab('search')" class="mb-0 cursor-pointer">Search</p>
                        </li>
                        <li class="position-relative">
                        <p onClick="goToTab('categories')" class="mb-0 cursor-pointer">Categories</p>
                        </li>
                        <li class="position-relative">
                        <p onClick="goToTab('areas')" class="mb-0 cursor-pointer">Area</p>
                        </li>
                        <li class="position-relative">
                        <p onClick="goToTab('ingredients')" class="mb-0 cursor-pointer">Ingredients</p>
                        </li>
                        <li class="position-relative">
                        <p onClick="goToTab('contact_us')" class="mb-0 cursor-pointer">Contacts Us</p>
                    </li>
                </ul>
                <div>
                    <div>
                        <i class="fa-brands fa-facebook cursor-pointer"></i>
                        <i class="fa-brands fa-twitter cursor-pointer"></i>
                        <i class="fa-solid fa-globe cursor-pointer"></i>
                    </div>
                    <p>
                        Copyright Â© 2019 All Rights
                        <br />
                        Reserved.
                    </p>
                </div>
            </div>
            <div class="d-flex flex-column justify-content-between align-items-center h-100 bg-white px-2 py-4">
                <img src="${!location.pathname.endsWith('/') ? '.' : ''}./logo.png" alt="yummy logo" />
                <i onClick="toggleSideNavbar(this)" id="open-colse-navbar" class="fa-solid fa-align-justify fa-2x cursor-pointer"></i>
                <div class="d-flex flex-column gap-2">
                    <i class="fa-solid fa-globe cursor-pointer"></i>
                    <i class="fa-solid fa-share-nodes cursor-pointer"></i>
                </div>
            </div>
        </aside>
    `);
    closeSideNavbar();
});