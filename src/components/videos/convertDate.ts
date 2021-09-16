export const convertDate = (publishedAt: string): Date => {
    const time = publishedAt.split(/-|T|:/).map((date) => Number(date));
    const date = new Date(
        time[0], //西暦
        time[1] - 1, //月
        time[2], //日
        time[3], //時
        time[4] //分
    );
    return date;
};
