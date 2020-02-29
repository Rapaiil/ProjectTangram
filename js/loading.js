function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 8000);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('header', true);
    show('content', true);
    show('footer', true);
    show('loading', false);
});