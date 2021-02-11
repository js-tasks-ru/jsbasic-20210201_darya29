/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
let shedule={}
let sheduleSize = Object.keys(shedule).length;

function isEmpty (obj) {
	if (sheduleSize === 0) {
		return true
	} else {
		return false
	}
}
