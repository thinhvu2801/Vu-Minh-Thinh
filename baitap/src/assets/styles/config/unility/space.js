let max = 101
let p = 0
let Space = {
  '0p5': '1px',
  '1p5': '3px',
  '2p5': '5px',
  '3p5': '7px',
  '4p5': '9px',
  '8p5': '17px',
  '50vw': '50vw',
  '100vw': '100vw',
  '50vh': '50vh',
  '100vh': '100vh',
  '20':'20px',  
  '15.5':'31px',
  '27.5':'55px',
  '11.5':'23px',
  '17.5':'35px',
  '135':'270px',
  '137':'274px',
  '110':'220px',
  '175':'350px',
  '181':'362px',
  '160':'160px',
  '190':'190px',
  '-200':'-200px',
  '-250':'-250px',
  '-300':'-300px',
  '245':'245px',
  '105p':'105%',
  '115p':'115%',
  '600':'600px',
  '270':'270px',
  '400':'400px',
  '183':'366px'
}

for (let i = 0; i < max; i++) {
  Space[i] = i * 2 + 'px'
  p = i + 'p'
  Space[p] = i + '%'
}
// console.log(Space)

module.exports = {
  Space
}
