function renderData() {
    document.querySelector(".bigacrd").innerHTML = ''
    json.map(item => {
        document.querySelector(".bigacrd").innerHTML += `
        <div class="min_card">
        <center><img src="${item.img}" alt=""></center>
        <p class="card_name">${item.brand}</p>
        <h4 class="card_text">${item.name}</h4>
        <div class="icons"></div>
        <h4 class="card_price">${item.price}</h4>
        <button onclick="BuyCard('${item.brand}','${item.name}','${item.price}','${item.img}')" class="card_button">Add +</button>
        </div>
    </div>
        `
    })
    var a = JSON.parse(localStorage.getItem('testObject'))
    console.log(a);
    a.map((item ,key)=>{    
    document.querySelector(".card_body").innerHTML += `
    <div class="min_card2">
          <img src="${item.img}" alt="">
          <p class="card_name2">${item.name}</p>
          <h4 class="card_text2">${item.brand}</h4>
          <h4 class="card_price2">${item.price}</h4>
          <button onclick="otme('${key}')" >delete</button>
    </div>
    `
   })
}
function searchData() {
    var inputValue = document.querySelector('#valueSearch').value
    document.querySelector(".bigacrd").innerHTML = ''
    json.map(item => {
        if (item.name.includes(inputValue)) {
            document.querySelector(".bigacrd").innerHTML += `
    <div class="min_card">
    <center><img src="${item.img}" alt=""></center>
    <p class="card_name">${item.brand}</p>
    <h4 class="card_text">${item.name}</h4>
    <div class="icons"></div>
    <h4 class="card_price">${item.price}</h4>
    <button onclick="BuyCard('${item.brand}','${item.name}','${item.price}','${item.img}')" class="card_button">Add +</button>
    </div>
</div>
    `
        }
    })
}



var buy = []

function BuyCard(brand, name, price ,img) {
    var json4 = {
        "brand": brand,
        "name": name,
        "price": price,
         "img":img,
    }
    buy.push(json4) 
    karzina()
   
    localStorage.setItem('testObject', JSON.stringify(buy))
    
    // document.querySelector(".karzina").innerHTML += 
}

function karzina() {
    console.log(buy);
    document.querySelector(".card_body").innerHTML = ''
    buy.map((item, key) => {
        document.querySelector(".card_body").innerHTML += `
        <div class="min_card2">
              <img src="${item.img}" alt="">
              <p class="card_name2">${item.name}</p>
              <h4 class="card_text2">${item.brand}</h4>
              <h4 class="card_price2">${item.price}</h4>
              <button onclick="otme('${key}')" >delete</button>
        </div>
        `
    })
}

function ohiri() {
    document.querySelector('.modal4').style = `display:flex;`
} function ohiri1() {
    document.querySelector('.modal4').style = `display:none;`
}
function otme(key){
    document.querySelector(".card_body").innerHTML = ' '
    buy.splice(key, 1)
    buy.map((item, key) => {
        document.querySelector(".card_body").innerHTML += `
        <div class="min_card2">
              <img src="${item.img}" alt="">
              <p class="card_name2">${item.name}</p>
              <h4 class="card_text2">${item.brand}</h4>
              <h4 class="card_price2">${item.price}</h4>
              <button onclick="otme('${key}')" >delete</button>
        </div>
        `
    })    
}