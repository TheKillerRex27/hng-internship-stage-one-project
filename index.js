const date = new Date()

const day = date.getDay()
const time = Math.floor(date / 1000)

let weekday= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

document.getElementById('currentDayOfTheWeek').innerText = weekday[day]
document.getElementById('currentUTCTime').innerText = time