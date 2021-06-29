let degree = 180

//#region Listas do conteúdo


//#endregion

function loadSection(imagem,section){
    // Limpar div .content
    clearContent()
    // Girar registros onclick
    imagem.style.transform = `rotate(${degree}deg)`
    if (degree === 180){
        degree += 180
    } else{
        degree -= 180
    }
    // Carregar elementos das seções
    switch (section){
        case 'home':
            loadHome()
            break
        case 'doenças':
            loadDiseases()
            break
        case 'curiosidades':
            loadCuriosities()
            break
        case 'sobre':
            loadAbout()
            break
        default:
            break
    }
}


function clearContent(){
    let children = document.getElementById('content').childNodes
    children.forEach(child => {
        child.remove()
    });
}

function loadHome(){
    clearContent()
    let homeElement = document.createElement('img')
    let homeMobile = document.createElement('img')
    let content = document.getElementById("content")

    homeElement.setAttribute("src","./images/home_picture.png")
    homeElement.setAttribute("alt","Home")
    homeMobile.setAttribute("src","./images/home_mobile.png")
    homeMobile.setAttribute("alt","HomeMobile")
    content.appendChild(homeElement)
    content.appendChild(homeMobile)
}


function loadDiseases(){
    clearContent()
    let content = document.getElementById("content")
    let slideshow_container = document.createElement('div')
    slideshow_container.setAttribute("class", "slideshow-container")
    content.appendChild(slideshow_container)
    let a_left = document.createElement("a")
    let a_right = document.createElement("a")
    a_left.setAttribute("class", "prev")
    a_right.setAttribute("class", "next")
    a_left.setAttribute("onclick", "plusSlides(-1)")
    a_right.setAttribute("onclick", "plusSlides(1)")
    a_left.innerHTML = "&#10094;"
    a_right.innerHTML = "&#10095;"

    slideshow_container.appendChild(a_left)
    slideshow_container.appendChild(a_right)

    for (let index = 1; index < 6; index++) {
        let slide = document.createElement('div')
        slide.setAttribute("class", "mySlides fade")
        let div_numbertext = document.createElement('div')
        div_numbertext.setAttribute("class", "numbertext")
        let img = document.createElement('img')
        let imgMobile = document.createElement('img')
        switch (index) {
            case 1:
                slideshow_container.appendChild(slide)
                slide.style.display = "block"
                slide.appendChild(div_numbertext)
                slide.appendChild(img)
                slide.appendChild(imgMobile)
                div_numbertext.innerHTML = `${index} / 5`
                img.setAttribute("id", "colera")
                img.setAttribute("src", "./images/Cólera.png")
                imgMobile.setAttribute("id", "coleraMobile")
                imgMobile.setAttribute("src", "./images/CóleraMobile.png")
                break;

            case 2:
                slideshow_container.appendChild(slide)
                slide.appendChild(div_numbertext)
                slide.appendChild(img)
                slide.appendChild(imgMobile)
                div_numbertext.innerHTML = `${index} / 5`
                img.setAttribute("id", "leptospirose")
                img.setAttribute("src", "./images/Leptospirose.png")
                imgMobile.setAttribute("id", "leptospiroseMobile")
                imgMobile.setAttribute("src", "./images/LeptospiroseMobile.png")
                break;
        
            case 3:
                slideshow_container.appendChild(slide)
                slide.appendChild(div_numbertext)
                slide.appendChild(img)
                slide.appendChild(imgMobile)
                div_numbertext.innerHTML = `${index} / 5`
                img.setAttribute("id", "hepatitea")
                img.setAttribute("src", "./images/Hepatite A.png")
                imgMobile.setAttribute("id", "hepatiteaMobile")
                imgMobile.setAttribute("src", "./images/Hepatite AMobile.png")
                break;
        
            case 4:
                slideshow_container.appendChild(slide)
                slide.appendChild(div_numbertext)
                slide.appendChild(img)
                slide.appendChild(imgMobile)
                div_numbertext.innerHTML = `${index} / 5`
                img.setAttribute("id", "febretifoide")
                img.setAttribute("src", "./images/Febre tifoide.png")
                imgMobile.setAttribute("id", "febretifoideMobile")
                imgMobile.setAttribute("src", "./images/Febre tifoideMobile.png")
                break;
        
            case 5:
                slideshow_container.appendChild(slide)
                slide.appendChild(div_numbertext)
                slide.appendChild(img)
                slide.appendChild(imgMobile)
                div_numbertext.innerHTML = `${index} / 5`
                img.setAttribute("id", "dengue")
                img.setAttribute("src", "./images/Dengue.png")
                imgMobile.setAttribute("id", "dengueMobile")
                imgMobile.setAttribute("src", "./images/DengueMobile.png")
                break;
        
            default:
                break;
        }
    }


}


function loadCuriosities(){
    clearContent()
}


function loadAbout(){
    clearContent()
    let aboutElement = document.createElement('img')
    let aboutMobile = document.createElement('img')
    let content = document.getElementById("content")

    aboutElement.setAttribute("src","./images/About.png")
    aboutMobile.setAttribute("src","./images/AboutMobile.png")
    aboutElement.setAttribute("alt","About")
    aboutMobile.setAttribute("alt","AboutMobile")
    content.appendChild(aboutElement)
    content.appendChild(aboutMobile)
}

//#region Slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//#endregion

//#region Curiosidades

const fatos= [
    "",
    "",
    "",
]


//#endregion