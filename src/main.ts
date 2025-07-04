const appElem = document.querySelector('#app');

const showMessage = () => {
	return "info from JavaScript";
}

if (appElem) {
	appElem.innerHTML = `
	<h1>Info Site</h1>	
	<p>${showMessage()}</p>`;
}