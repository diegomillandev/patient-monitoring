export const formatDate = (_date: string): string => {
    const date = new Date(_date);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
};
