let imageData = [
  {img:'MoonDesert.jpg',
    title:'Moonlight Over the Desert',
    medium:'Markers on Bristol Board'
  },
  {img:'BroomBoarding.png',
    title:'Broom Boarding',
    medium:'Photoshop'
  },
  {img:'Dancer.jpg',
    title:'Dancer',
    medium:'Photoshop'
  },
  {img:'LeatherArmchair.jpg',
    title:'Armchair',
    medium:'Pencils'
  },
  {img:'Octopus.jpg',
    title:'Octopus Destroying a City',
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
  //let nextButton = document.getElementById('next')
  //let prevButton = document.getElementById('prev')
})

function updateSlides(n){
  index += n;
  if (index < 0){
    index = imageData.length-1
  }
  if(index >= imageData.length){
    index = 0
  }

  imageContainer.src = `images/${imageData[index].img}`
  title.innerText = imageData[index].title
  medium.innerText = imageData[index].medium
}

