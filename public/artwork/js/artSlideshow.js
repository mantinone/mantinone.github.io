let imageData = [
  {img:'Octopus.jpg',
    title:'Octopus Destroying a City',
    medium:'Photoshop'
  },
  {img:'BroomBoarding.png',
    title:'Broom Boarding',
    medium:'Photoshop'
  },
  {img:'Dancer.jpg',
    title:'Dancer',
    medium:'Photoshop'
  },
  {img:'ProfessorHess.jpg',
    title:'Professor Hess',
    medium:'Pencils'
  },
  {img:'Seraphim.png',
    title:'Seraphim',
    medium:'Photoshop'
  },
  {img:'SunsetMoon.jpg',
    title:'Sunset on Morris',
    medium:'Photoshop'
  },
  {img:'MoonDesert.jpg',
    title:'Moonlight Over the Desert',
    medium:'Markers on Bristol Board'
  },
  {img:'LeatherArmchair.jpg',
    title:'Armchair',
    medium:'Pencils'
  }
]

let index = 0
let imageContainer
let title
let medium

document.addEventListener( "DOMContentLoaded", function(event) {
  imageContainer = document.getElementById('image')
  title = document.getElementById('title')
  medium = document.getElementById('medium')
  showSlide(0)
  //let nextButton = document.getElementById('next')
  //let prevButton = document.getElementById('prev')
})

function updateSlides(n){
  showSlide(index += n)
}

function setSlide(n){
  showSlide(index = n)
}

function showSlide(n){
  if (index < 0){
    index = imageData.length-1
  }
  if(index >= imageData.length){
    index = 0
  }

  imageContainer.src = `images/${imageData[index].img}`
  title.innerText = imageData[index].title
  medium.innerText = imageData[index].medium

  let thumbs = document.getElementsByClassName('thumbImage')
  for (const i of thumbs){
    i.className = i.className.replace('active', '')
  }

  thumbs[index].className += " active"
}

