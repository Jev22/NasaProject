// api key: 
// https://api.nasa.gov/planetary/apod?api_key=XYcWcCCkJvV6AsUd16Amck6BVCQtA7BtlkAaXQ9r

document.addEventListener("DOMContentLoaded", init());
let nasaDataList = [];
function init(){
    initNasaData();
}



function initNasaData(){
//Data for fetch
let apiKey = "XYcWcCCkJvV6AsUd16Amck6BVCQtA7BtlkAaXQ9r";
let counts = "5";
let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${counts}`;


//Fetch
fetch (url)
    .then(response => response.json())
    .then(data => renderNasaTable(data));

    
}

function renderNasaTable(data){
    console.log(data)
    //nasaDataList = data
    let nasaDataContainer = document.querySelector(".nasadata_container");
    data.forEach(object => {
        let nasaObject = `<div class='d-flex mb-2 candidate-item'>
            <div class='col-sm-2'>${object.date}</div>
            <div class='col-sm-2'><img src='${object.hdurl}' alt='nasa image'></div>
            <div class='col-sm-2'>${object.explanation}</div>
        </div>`;
    nasaDataContainer.insertAdjacentHTML("afterend", nasaObject);
        
    });

}

