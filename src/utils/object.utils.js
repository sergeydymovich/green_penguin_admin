export const isExist = (value, arr) => {
	return arr.find(el => el.name.toLowerCase() === value.toLowerCase());
}

export const isExistValue = (value, category,  arr) => {
	let obj = arr.find(el => el.name.toLowerCase() === category.toLowerCase());
	if (obj) {
		return obj.subcategories.find(el => el.toLowerCase() === value.toLowerCase());
	}
	return false;

}


