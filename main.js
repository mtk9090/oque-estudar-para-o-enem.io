let date_1 = new Date('2022,11,13')
let date_2 = new Date()

const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime()

    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24))

    return TotalDays;
}


let dias = document.querySelector("#days")
dias.innerHTML=`Faltam <i class="#e040fb purple accent-2">${days(date_1, date_2)}</i> Dias Para o Enem.`;


//console.log(days(date_1, date_2) +" days to Enem");
