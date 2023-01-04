let rates;
let names;

// const rateUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json';
async function getRates(id){
    const rateCall = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json');
    if (rateCall.ok){
        const rateData = await rateCall.json();
        return parseId(rateData, id);
    }

}

function parseId(array, id){
    return array.id;
}
const nameURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';
async function getNames(Url){
    const nameCall = await fetch(Url);
    if (nameCall.ok){
        const nameData = await nameCall.json();
        createDropdown(nameData);
    }
}

function createDropdown(data){
    var select = document.getElementById('select1');
    for(const key in data){
        let option = document.createElement('option');
        option.value = key;
        option.innerHTML = data[key];
        select.appendChild(option);
    };
    
    var select2 = document.getElementById('select2');
    for(const key in data){
        let option = document.createElement('option');
        option.value = key;
        option.innerHTML = data[key];
        select2.appendChild(option);
    };

    

};

function convert(){
    const select1 = document.getElementById("select1").value;
    const select2 = document.getElementById("select2").value;
    console.log(select1);
    console.log(select2);
   
    console.log(getRates(select1));
    
    
}

getNames(nameURL);
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', convert);