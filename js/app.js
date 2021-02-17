'use stricket';
let mainEl = document.getElementById('the main')
let tableEl = document.createElement('table')
let countRaw=1;
mainEl.appendChild(tableEl)
let tableH = function(){
    let tr = document.createElement('tr')
    tableEl.appendChild(tr)
    let th1 = document.createElement('th')
    tr.appendChild(th1)
    th1.textContent = ' '
    for(let i=0 ; i < hourArr.length; i++){
    let th2 = document.createElement('th')
    tr.appendChild(th2)
    th2.textContent = hourArr[i]
    
} }
// 'seattle', 'tokyo', 'dubai', 'paris', 'lima'
// let allStores = ['seattle', 'tokyo', 'dubai', 'paris', 'lima']
let totArr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let hourArr = ['6:00am:','7:00am:','8:00am:','9:00am:','10:00am:','11:00am:','12:00pm:','1:00pm:','2:00pm:','3:00pm:','4:00pm:','5:00pm:','6:00pm:','7:00pm:','Daily Total:'];
function Stores(location,maximum,minimum,avg){
    this.locFac = location;
    this.maxHoCu = maximum;
    this.minHoCu = minimum;
    this.avgCookieCu = avg;
    this.cookiePerHo = [];
    this.total = 0;
 
}
let nt1=0 , nt2=0;
Stores.prototype.pushing = function(){
    let a = 0 , b = 0;
    for( let i = 0 ; i < hourArr.length ; i++){
        
       b = b + a;
       a = Math.floor(getRandomInt(this.minHoCu, this.maxHoCu + 1) * this.avgCookieCu);
       
       if (i < hourArr.length - 1 ){ 
           this.cookiePerHo.push(a);
           totArr[i]+=this.cookiePerHo[i]
           
     
   }else if (i === hourArr.length - 1){ 
      
       this.cookiePerHo.push(b);
       totArr[i]+=this.cookiePerHo[i]
 }
}}
Stores.prototype.render = function(){
    countRaw++;
 let trEl = document.createElement('tr')
 tableEl.appendChild(trEl)
 let td1 = document.createElement('td')
 trEl.appendChild(td1)
 td1.textContent = this.locFac
 for (let i = 0 ; i < seattle.cookiePerHo.length ; i++){
 let td2 = document.createElement('td')
 trEl.appendChild(td2)
 td2.textContent = this.cookiePerHo[i]
}}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  tableH();
  let seattle = new Stores ('seattle',65,23,6.3)
  seattle.pushing();
  seattle.render();
  let tokyo = new Stores ('tokyo',24,3,1.2)
  tokyo.pushing();
  tokyo.render();
  let dubai = new Stores ('dubai',38,11,3.7)
  dubai.pushing();
  dubai.render();
  let paris = new Stores ('paris',38,20,2.3)
  paris.pushing();
  paris.render();
  let lima = new Stores ('lima',16,2,4.6)
  lima.pushing();
  lima.render();
  
  function tableF(){
    let a=0;
    let tr = document.createElement('tr')
    tableEl.appendChild(tr)
    let th1 = document.createElement('th')
    tr.appendChild(th1)
    th1.textContent = 'Totals'
    for ( let i = 0; i <totArr.length ; i++){
        
        let th2 = document.createElement('th')
        tr.appendChild(th2)
        th2.textContent = totArr[i];
    }
} 
tableF()
 
  let stores = document.getElementById('my stores')
  stores.addEventListener('submit',storesCreator)
  function storesCreator(event){
  event.preventDefault()
  let storeLocation = event.target.locfac.value;
//   console.log(event.target.locfac.value)
  let maxCH = event.target.maxCH.value;
  parseInt(maxCH)
  let minCH = event.target.minCH.value;
  parseInt(minCH)
  let avgCC = event.target.avgCC.value;
  parseFloat(avgCC)
  
  let newStore = new Stores(storeLocation, maxCH, minCH,avgCC);
  tableEl.deleteRow(countRaw);
  newStore.pushing()
  newStore.render()
  tableF()
} 