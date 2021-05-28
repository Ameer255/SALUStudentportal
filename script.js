let opened = false;

function navOpenClose(){
    let nav = document.getElementById("nav-sm");
    let hamberger = document.getElementById("hamberger");

    if(opened){
        
        nav.style.left = "-100%";
        hamberger.classList.remove("toggle");
        opened = false;
    }
  else{
        nav.style.left = "0%";
        hamberger.classList.add("toggle");
       opened = true;
   }
}

let count = 0;
let url1 = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80";
let url2 = "https://promotionaldrives.com/blog/wp-content/uploads/2019/01/cheerful-university-students-walking-on-campus-college-fair-ss-feature.jpg";
let url3 = "https://www.qs.com/wp-content/uploads/2015/05/students-or-teenagers-with-laptop-and-tablet-computers.jpg";

function slider(){
    let imgDiv = document.getElementById("img-div");

    if(count == 0){
        imgDiv.style.background = `url(${url2}) center`;
        imgDiv.style.backgroundSize = "100% 100%";
        count+=1;
    }
    else if(count == 1){
        imgDiv.style.background = `url(${url3}) center`; 
        imgDiv.style.backgroundSize = "100% 100%";
        count+=1;

    }
    else{
        
        imgDiv.style.background = `url(${url1}) center`;
        imgDiv.style.backgroundSize = "100% 100%";
        count=0;

    }

}




setInterval(slider, 3000);




