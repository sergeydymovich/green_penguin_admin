export const validateNumber = (string) => {
	return string.replace(/[^\d]/g, '').substr(0,9);
}

export const validatePrice = (string) => {
	return string.replace(/[^.\d]+/g,"").replace( /^([^\.]*\.)|\./g, '$1');
}

export const validateSpaces = (string) => {
	return string.replace(/ +/g, ' ').trim();
}


