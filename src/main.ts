const appElem = document.querySelector('#app');

const showInfo = () => {
	return "info from JavaScript";
}

if (appElem) {
	appElem.innerHTML = `<p>${showInfo()}</p>`;
}