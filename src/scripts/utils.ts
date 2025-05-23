const dateConversion = (dateTime: string) => {
	if (dateTime) {
		const newDate = new Date(dateTime);
		const options: Intl.DateTimeFormatOptions = {
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		const formattedDate: string = newDate.toLocaleDateString("en-GB", options);
		return formattedDate;
	}
};

export { dateConversion };
