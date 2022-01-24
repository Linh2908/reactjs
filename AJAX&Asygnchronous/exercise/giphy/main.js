const search = document.querySelector(".search");
const btnDisplay = document.querySelector(".btnSearch");
const remove = document.querySelector(".removeAll");
const display = document.querySelector(".display");
const myArr = [];

async function add(gip) {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${gip}&api_key=5AMPF5X7o1le07f1aHKBa4s09K2qnVmE`)
    .then((resolve) =>{
        console.log(resolve);
        let ramdom = Math.floor(Math.random()*resolve.data.data.length);
        console.log(resolve.data.data[ramdom].images.original_mp4.mp4);
        myArr.push(resolve.data.data[ramdom].images.original_mp4.mp4);
        let result = '';
        for (let i = 0; i < myArr.length; i++) {
            result +=`<div class="item" ><video src="${myArr[i]}" autoplay loop></video> </div>`;
        }
        display.innerHTML = result;
    })
    .catch(()=>{
        console.log("loading");
    })
}

add("happy");

btnDisplay.addEventListener("click", () =>{
    add("happy");
    
})
