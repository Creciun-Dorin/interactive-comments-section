function getStorage() {
	const local = localStorage.getItem('comentarii');
	const localJson = JSON.parse(local);
	return localJson;
}

export { getStorage }