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

  let distance = endDate - startDate; // by default the value is second

  let miliSecond = 1000;
  let secondInHour = 3600; // convert to second
  let hourInDay = 24;
  let dayInWeek = 7;
  let dayInMonth = 30;
  let monthInYear = 12;

  let distanceDay = Math.floor(
    distance / (miliSecond * secondInHour * hourInDay)
  ); // fungsi floor() untuk membulatkan hasil bilangan
  // let distanceWeek = Math.floor(
  //   distance / (miliSecond * secondInHour * hourInDay * dayInWeek)
  // );
  let distanceMonth = Math.floor(
    distance / (miliSecond * secondInHour * hourInDay * dayInMonth)
  );
  let distanceYear = Math.floor(
    distance /
      (miliSecond * secondInHour * hourInDay * dayInMonth * monthInYear)
  );

  duration = "";

  if (distanceDay <= 30 && distanceDay > 1) {
    duration = `${distanceDay} Days`;
  } else if (distanceDay == 1) {
    duration = `${distanceDay} Day`;
  // } else if (distanceMonth % 7) {
  //   duration = `${distanceWeek} Week`;
  } else if (distanceDay > 30 && distanceMonth >= 1) {
    duration = `${distanceMonth} Month ${distanceDay % 30} Days`;
  } else if (distanceDay > 30 && distanceMonth > 1) {
    duration = `${distanceMonth} Months ${distanceDay % 30} Days`;
  } else if (distanceYear == 1) {
    duration = `${distanceYear} Year`;
  } else if (distanceMonth > 12 && distanceYear > 1) {
    duration = `${distanceYear} Years ${distanceMonth % 12} Months ${
      distanceDay % 30
    } Days`;
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

  let technologiesHTML = technologies.join("");

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
    durationPost : new Date(),
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
    <div>
      <span style="color: #888; text-align: end;">${getDurationPost(dataBlog[i].durationPost)}</span>
    </div>
    <div class="btn-group">
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>`;
  }
}

// DURATION POST FEATURE

function getDurationPost(time) {
  let timeNow = new Date();
  let timePost = time;

  let durationPost = timeNow - timePost;
  console.log(durationPost);

  //declaration

  let miliSecond = 1000;
  let secondInHour = 3600; // converted to second
  let minutesInHour = 60;
  let hourInDay = 24;

  let durationPostDay = Math.floor(
    durationPost / (miliSecond * secondInHour * hourInDay)
  );
  let durationPostHour = Math.floor(durationPost / (miliSecond * secondInHour));
  let durationPostMinute = Math.floor(
    durationPost / (miliSecond * minutesInHour)
  );
  let durationPostSecond = Math.floor(durationPost / miliSecond);

  if (durationPostSecond == 1) {
    return `${durationPostSecond} second ago`;
  } else if (durationPostSecond <= 60) {
    return `${durationPostSecond} seconds ago`;
  } else if (durationPostMinute == 1) {
    return `${durationPostMinute} minute ago`;
  } else if (durationPostMinute <= 60) {
    return `${durationPostMinute} minutes ago`;
  } else if (durationPostHour == 1) {
    return `${durationPostHour} hour Ago`;
  } else if (durationPostHour <= 24) {
    return `${durationPostHour} hours ago`;
  } else if (durationPostDay == 1) {
    return `${durationPostDay} day ago`;
  } else if (durationPostDay <= 30) {
    return `${durationPostDay} days ago`;
  } 
}

setInterval(function () {
  renderBlog();
}, 1000);

