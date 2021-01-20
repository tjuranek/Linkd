export const getPreviousWeekDates = () => {
	var today = new Date();
	var dates = [];

	for (let i = 0; i <= 6; i++) {
		var last = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
		dates.push(last);
	}

	return dates.reverse();
};
