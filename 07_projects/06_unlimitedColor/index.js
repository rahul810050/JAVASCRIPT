function getRandomColor(){
  const letter = '0123456789ABCDEF'
  let color = '#'
  
  for(let i = 0; i < 6; i++){
    const randomColor = letter[Math.floor(Math.random() * 16)]
    color += randomColor
  }
  return color
}

// console.log(getRandomColor);

let interval;

document.querySelector('#start').addEventListener('click',function(e){
  interval = setInterval(function(){
    const ranndom = getRandomColor()
    document.querySelector('body').style.backgroundColor = ranndom
  }, 2000)
})


document.querySelector('#stop').addEventListener('click',function(e){
  clearInterval(interval)
})