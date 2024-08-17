const apikey="2737501e6c7288b84948fd1c24d69369";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search_input=document.querySelector("input");
const search_btn=document.querySelector("button");

async function call(city) {
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    const data=await response.json();
    console.log(data);
    if(response.status==404){
        document.querySelector(".weather").style.display="none";
        document.querySelector(".error").style.display="block";
    }
    else{
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"  km/h";
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
        const icon=document.querySelector(".weather-icon");
        let type=data.weather[0].main;
        icon.src="images/"+type+".png"
    }  
}
search_btn.addEventListener("click",()=>{
    if(search_input.value==""){
        document.querySelector(".weather").style.display="none";
        document.querySelector(".error").style.display="block";
    }
    call(search_input.value);
})
