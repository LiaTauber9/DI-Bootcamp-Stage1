const acc = document.getElementById("accordion");
const details = document.getElementById("cont_det");


  acc.addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    // acc.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
      details.style.transform = 'none'
    }
  });

//   <div class="cont_det_box">
//   <a id="accordion">Contact </a>
//   <div id="cont_det" class="cont_det_box">
//       <p>Liah Tauber</p>
//       <p>+972-52-4324451</p>
//       <p>t.lia.31211@gmail.com</p>                 
//   </div>
// </div>
