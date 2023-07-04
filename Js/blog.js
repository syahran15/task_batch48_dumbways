let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let projectName = document.getElementById("input-project").value;
  let startDate = new Date(document.getElementById("input-start").value);
  let endDate = new Date(document.getElementById("input-end").value);
  let description = document.getElementById("input-description").value;
  let javascript = document.getElementById("input-javascript").checked;
  let react = document.getElementById("input-reactJS").checked;
  let php = document.getElementById("input-php").checked;
  let java = document.getElementById("input-java").checked;
  let file = document.getElementById("input-file").files;

  // DURATION FEATURE

  let distance = endDate - startDate ; // by default the value is second

  let miliSecond = 1000;
  let secondInHour = 3600; // convert to second
  let hourInDay = 24;
  let dayInMonth = 30;
  let monthInYear = 12;

  let distanceDay = Math.floor (distance / (miliSecond * secondInHour * hourInDay)); // fungsi floor() untuk membulatkan hasil bilangan
  let distanceMonth = Math.floor (distance / (miliSecond * secondInHour * hourInDay * dayInMonth)); 
  let distanceYear = Math.floor (distance / (miliSecond * secondInHour * hourInDay * dayInMonth *monthInYear)); 

  duration = "";

  if (distanceDay <= 30 && distanceDay > 1) {
    duration = `${distanceDay} Days`;
  } else if (distanceDay === 1) {
    duration = `${distanceDay} Day`;
  } else if (distanceMonth === 1) {
    duration = `${distanceMonth} Month`;
  } else if (distanceDay > 30 && distanceMonth > 1) {
    duration = `${distanceMonth} Months ${distanceDay % 30} Days`;
  } else if (distanceYear === 1) {
    duration = `${distanceYear} Year`;
  } else if (distanceMonth > 12 && distanceYear > 1) {
    duration = `${distanceYear} Years ${distanceMonth % 12} Months ${distanceDay % 30} Days`;
  }

  console.log(duration);


  // CHECKBOX FEATURE

  let technologies = [];

  if (javascript) {
    technologies.push('<i class="fa-brands fa-js" id="javascript"></i>');
  }
  if (react) {
    technologies.push('<i class="fa-brands fa-react" id="reactsJS"></i>');
  }
  if (php) {
    technologies.push('<i class="fa-brands fa-php" id="php"></i>');
  }
  if (java) {
    technologies.push('<i class="fa-brands fa-java" id="java"></i>');
  }

  let technologiesHTML = technologies.join();

  console.log(technologiesHTML);

  // INFORMATION IF THE VALUE IS EMPTY

  if (projectName == "") {
    return alert("Input the value first");
  } else if (startDate == "") {
    return alert("Input the value first");
  } else if (endDate == "") {
    return alert("Input the value first");
  } else if (description == "") {
    return alert("Input the value first");
  } else if (file == "") {
    return alert("Input the value first");
  }

  // TAKE THE VALUE OF IMAGES
  let image = URL.createObjectURL(file[0]);

  // PUSH dataBlog to vlog

  let blog = {
    image,
    projectName,
    duration,
    description,
    technologiesHTML,
    author: "Syahran Zidane",
  };

  dataBlog.push(blog);

  renderBlog();

  console.log(dataBlog);
}

//SHOW THE RESULT OF THE FORM BLOG

function renderBlog() {
  document.getElementById("content").innerHTML = "";

  for (let i = 0; i < dataBlog.length; i++) {
    document.getElementById(
      "content"
    ).innerHTML += ` <div class="container-card">
    <a href="detail-blog.html"
      ><img src= ${dataBlog[i].image} alt=""
    /></a>
    <h3>Dumbways Mobile App - 2023</h3>
    <span>Duration : ${dataBlog[i].duration} | ${dataBlog[i].author}</span>
    <p>
      ${dataBlog[i].description}
    </p>
    <div class="programming-language">
      ${dataBlog[i].technologiesHTML}
    </div>
    <div class="btn-group">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>`;
  }
}
