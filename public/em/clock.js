document.addEventListener('DOMContentLoaded', ( event ) => {
  var butts = window.setInterval(updateClock, 500)
})



const updateClock = () => {
  let clockTag = document.getElementById('clock')
  clockTag.innerText = moment.tz( "UTC").format("YYYY, dddd, MMMM Do hh:mm:ss A")
}

const whatFunc = () => {
  let startDate = "2018-02-01T00:00:00"
  console.log(moment.tz(startDate, "UTC").format());
}

whatFunc()