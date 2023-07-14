class Testimonials {
  #image = "";
  #quote = "";

  constructor(image, quote) {
    this.#image = image;
    this.#quote = quote;
  }

  get image() {
    return this.#image;
  }

  get quote() {
    return this.#quote;
  }

  get user() {
    throw new Error("There is must be user to add the testimonials");
  }

  get testimonialsHTML() {
    return `<div class="testimonial">
        <img
          src= ${this.image}
          alt=""
          class="profile-testimonial"
        />
        <p class="quote">
          ${this.quote}
        </p>
        <p class="author">- ${this.user}</p>
      </div>`;
  }
}

class UserTestimonials extends Testimonials {
  #user = "";

  constructor(image, quote, user) {
    super(image, quote);
    this.#user = user;
  }

  get user() {
    return `User : ${this.#user}`;
  }
}

class CompanyTestimonials extends Testimonials {
  #company = "";

  constructor(image, quote, company) {
    super(image, quote);
    this.#company = company;
  }

  get user() {
    return `Company : ${this.#company}`;
  }
}


const testimonials1 = new UserTestimonials(
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  "GG parah seehh",
  "Sofyan Novianto"
);
const testimonials2 = new UserTestimonials(
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
  "I can't say anything , it's so fantastic",
  "Alberto Da Monasa"
);
const testimonials3 = new CompanyTestimonials(
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  "Setiap proses akan ada hasilnya",
  "Ardi Haryanto"
);

let testimonialsData = [testimonials1, testimonials2, testimonials3]

let testimonialsHTML = ""

for (let i = 0; i < testimonialsData.length; i++) {
    testimonialsHTML += testimonialsData[i].testimonialsHTML
}

document.getElementById("testimonials").innerHTML = testimonialsHTML
