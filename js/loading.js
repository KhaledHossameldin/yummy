$(document).ready(() => $('body').prepend(`
        <div id="loading-overlay"
            class="bg-black position-absolute top-0 start-0 bottom-0 end-0 z-${location.pathname.endsWith('index.html') ? 3 : 2} justify-content-center align-items-center text-white" style="display: flex;">
            <i class="fa-solid fa-spinner fa-spin fa-5x"></i>
        </div>
    `));

function hideLoading() {
    $('div#loading-overlay').fadeOut(500, _ => $(this).remove());
}