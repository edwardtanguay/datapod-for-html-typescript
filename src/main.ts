import * as qstr from './qtools/qstr.js';

const appElem = document.querySelector('#app');

if (appElem) {
	appElem.innerHTML = `
	<h1>The Info Site</h1>	
	<p>${qstr.sentencize("welcome to this site")}</p>`;
}