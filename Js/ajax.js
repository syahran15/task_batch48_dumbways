const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()


    xhr.open("GET", "https://api.npoint.io/26ad528e4a011910cac2", true)
    xhr.onload = function () {
        // http code : 200 -> OK
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText))
            // http code : >= 400 -> Error
        } else if (xhr.status >= 400) {
            reject("Error loading data")
        }
    }
    xhr.onerror = function () {
        reject("Network error")
    }
    xhr.send()
})

let testimonialsData = [];

async function getData(rating) {
    try {
        const response = await promise
        console.log(response)
        testimonialsData = response
        allTestimonials()
    } catch (err) {
        console.log(er)
    }
}

getData()


function allTestimonials() {
    let testimonialHTML = ""

    testimonialsData.forEach((card) => {
        testimonialHTML += `<div class="testimonial">
                              <img
                                src= ${card.image}
                                alt=""
                                class="profile-testimonial"
                              />
                              <p class="quote">
                                ${card.quote}
                              </p>
                              <p class="author">- ${card.user}</p>
                              <p class="author">${card.rating}  <i class="fa-solid fa-star"></i></p>
                            </div>`;
      })
    
      document.getElementById("testimonials").innerHTML = testimonialHTML
}

function filterTestimonial(rating) {
    let filteredTestimonialHTML = ""

    const filteredData = testimonialsData.filter((card) => {
        return card.rating === rating
    }) 

    filteredData.forEach((card) => {
        filteredTestimonialHTML += `<div class="testimonial">
        <img src="${card.image}" class="profile-testimonial" />
        <p class="quote">"${card.quote}"</p>
        <p class="author">- ${card.user}</p>
        <p class="author">${card.rating} <i class="fa-solid fa-star"></i></p>
    </div>
    `
    })

    document.getElementById("testimonials").innerHTML = filteredTestimonialHTML
}