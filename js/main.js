var appElem = document.querySelector('#app');
var showMessage = function () {
    return "info from JavaScript";
};
if (appElem) {
    appElem.innerHTML = "\n\t<h1>Info Site</h1>\t\n\t<p>".concat(showMessage(), "</p>");
}
