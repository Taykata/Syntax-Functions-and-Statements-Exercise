function previousDay(givenYear, givenMonth, givenDay) {

    let date = new Date(givenYear, givenMonth - 1, givenDay);
    date.setDate(date.getDate() - 1);

    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

}

previousDay(2015, 5, 10);