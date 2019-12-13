setInterval(() => {

    // Function to animate Events section
    let testDiv1 = document.getElementById("eventDiv1");
    let testDiv2 = document.getElementById("eventDiv2");
    let testDiv3 = document.getElementById("eventDiv3");
    let testDiv4 = document.getElementById("eventDiv4");
    let testDiv5 = document.getElementById("eventDiv5");


    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0); //view height

    if (document.body.scrollTop > testDiv1.offsetTop - h || document.documentElement.scrollTop > testDiv1.offsetTop - h) {
        document.getElementById("eventDiv1").className = "blind-content in origin-top";
        document.getElementById("eventDiv2").className = "delay1 blind-content in origin-top";
        document.getElementById("eventDiv3").className = "delay1 blind-content in origin-top";
        document.getElementById("eventDiv4").className = "delay2 blind-content in origin-top";
        document.getElementById("eventDiv5").className = "delay2 blind-content in origin-top";
    } else {
        document.getElementById("eventDiv1").className = "";
        document.getElementById("eventDiv2").className = "";
        document.getElementById("eventDiv3").className = "";
        document.getElementById("eventDiv4").className = "";
        document.getElementById("eventDiv5").className = "";
    }

    
}, 10);


