var appElem = document.querySelector('#app');
var showInfo = function () {
    return "info from JavaScript";
};
if (appElem) {
    appElem.innerHTML = "<p>".concat(showInfo(), "</p>");
}
