const toggleBtn = document.querySelector("#btnsearch");
const valueOf = document.querySelector("#btnsearch");
const divSHowHide = document.querySelector(".show-hide");

const ButtonClick = document.querySelector("#ButtonClick");
const ClickShow = document.querySelector("#ClickShow");
ClickShow.style.display = 'none'
ButtonClick.addEventListener("click", ()=>{
  if(ClickShow.style.display === 'none'){
    ClickShow.style.display = 'block'
  }
  else{
    ClickShow.style.display = 'none'

  }
})
divSHowHide.style.display = 'none';
toggleBtn.addEventListener("click", (e)=>{
  let element = document.querySelector("#search");
// let firstElement = element.value;
// console.log(firstElement);

// if(firstElement === "see all"){
//   divSHowHide.style.display = 'block';
// }
  let lengthSearch = element.value.length;
  // console.log(lengthSearch.value);
const body = document.getElementsByTagName("body");
const clear = document.querySelector("#btnClear");
clear.addEventListener("click",()=>{
  if(divSHowHide.style.display === 'block'){
    divSHowHide.style.display = 'none';
  }
  else{
    alert("Please clear when you need");
  }
})
  if(lengthSearch > 0){

    if(divSHowHide.style.display === 'none'){
      divSHowHide.style.display = 'block';
   }
  }
  else{
    alert(" Please take input correctly");
    divSHowHide.style.display = 'none';
  }
})


fetch("https://api.covid19api.com/summary")

  .then((response) => response.json())
  .then((json) => {
    

    var li = `<tr>
                <th>Country</th>
                <th>Country Code</th>
                 <th>New Confirmed</th>
                 <th>New Deaths</th>
                 <th>Total Confirmed</th>
                 <th>Total Deaths</th>
              </tr>`;
             console.log(json['Countries']);
              
      //  json.forEach((Countries) => {
        json['Countries'].forEach((Countries)=> {
        li += `<tr>
        <td>${Countries.Country}</td>
        <td>${Countries.CountryCode} </td>
        
        <td>${Countries.NewConfirmed}</td>
        <td>${Countries.NewDeaths}</td>
        <td>${Countries.TotalConfirmed}</td>
        <td>${Countries.TotalDeaths}</td>
      </tr>`;
    });

    document.getElementById("users").innerHTML = li;
  });


function searchData() {


  var  filter, table, tr, td, i, txtValue;
  filter =  document.getElementById("search").value.toUpperCase();

  
  table = document.getElementById("users");
  var LstTR = table.getElementsByTagName("tr");

  for (i = 0; i < LstTR.length; i++) {
    td = LstTR[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().includes(filter)) {
        LstTR[i].style.display = "";
      } else {
        LstTR[i].style.display = "none";
      }
    }       
  }
}


function clearFilter() {
  document.getElementById("search").value="";
  var  table, i;
  table = document.getElementById("users");
  var LstTR = table.getElementsByTagName("tr");

  for (i = 0; i < LstTR.length; i++) {
        LstTR[i].style.display = "";
    }       
  }

  `use strict`
  var datetime = new Date();
  console.log(datetime);
  document.getElementById("time").textContent = datetime; //it will print on html page