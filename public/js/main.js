const menuBtn = document.querySelector(".menu-icon");
const menuOpen = document.querySelector(".menu-open-icon");
const menuClose = document.querySelector(".menu-close-icon");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click" , () => {
    navbar.classList.toggle("opened");
    // menuOpen.classList.toggle("close");
    // menuClose.classList.toggle("close");
})

const searchScreen = document.querySelector(".search-screen");
const searchOpen = document.querySelector(".search-icon");
const searchClose = document.querySelector(".search-close-icon");

searchOpen.addEventListener("click", () => {
    navbar.classList.add("opened-search");
});

searchClose.addEventListener("click", () => {
    navbar.classList.remove("opened-search");
});


const dataArea = document.querySelector(".data-area-scroll");
const areaForData = document.querySelector(".data-area");
let coins = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=tr';

function coinsData() {
    fetch(coins, {mode:'no-cors'})
    .then(resp => {
        return resp.json();
    })
    .then(data => {
    dataArea.innerHTML="";
    
    //  console.log(data);

      for (let i = 0; i < 10; i++) {
        const e = data[i];
        
        var contact = `<div class="coin">
                          <img src="` + e.image + `" class="coin-image">
                          <span class="coin-name">` + e.symbol + `</span>
                          <span class="coin-fiyat">` + e.current_price + ` USDT</span>
                          <span class="coin-artis"><span class="ok"> ^ </span>% ` + e.market_cap_change_percentage_24h + `</span>
                      </div>`;

        dataArea.innerHTML += contact;
        areaForData.innerHTML="";
      }

    }).catch(err => console.log(err));
}



var load = document.querySelectorAll(".load");
var l = ".";
setInterval(() => {
    if(l == "....")l="";
    load.forEach(lo => lo.innerHTML =l);
    l+=".";
}, 1000);

var t = 1000 * 10
coinsData()
// setInterval(coinsData, t);

/* 

HTML - CSS - JAVASCRİPT => FRONTEND +

NODEJS - PYTHON - PHP => BACKEND _|

MONGODB - MYSQL - FİREBASE => DATABASE _|

*/