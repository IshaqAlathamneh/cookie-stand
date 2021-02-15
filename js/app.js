'use stricket';
let mainEl = document.getElementById('the main')
let tableEl = document.createElement('table')
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

let hourArr = ['6:00am:','7:00am:','8:00am:','9:00am:','10:00am:','11:00am:','12:00pm:','1:00pm:','2:00pm:','3:00pm:','4:00pm:','5:00pm:','6:00pm:','7:00pm:','Daily Total:'];
function Stores(location,maximum,minimum,avg){
    this.locFac = location;
    this.maxHoCu = maximum;
    this.minHoCu = minimum;
    this.avgCookieCu = avg;
    this.cookiePerHo = [];

}
Stores.prototype.pushing = function(){
    let a = 0 , b = 0;
    for( let i = 0 ; i < hourArr.length ; i++){
        
       b = b + a;
       a = Math.floor(getRandomInt(this.minHoCu, this.maxHoCu + 1) * this.avgCookieCu);
       
       if (i < hourArr.length - 1 ){ 
           this.cookiePerHo.push(a);
     
   }else if (i === hourArr.length - 1){ 
       this.cookiePerHo.push(b);
       
 }
}}
Stores.prototype.render = function(){
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
  
  let tableF = function(){
    let tr = document.createElement('tr')
    tableEl.appendChild(tr)
    let th1 = document.createElement('th')
    tr.appendChild(th1)
    th1.textContent = 'Totals'
    for ( let i = 0; i <seattle.cookiePerHo.length ; i++){
    let th2 = document.createElement('th')
    tr.appendChild(th2)
    th2.textContent = seattle.cookiePerHo[i]+tokyo.cookiePerHo[i]+dubai.cookiePerHo[i]+paris.cookiePerHo[i]+lima.cookiePerHo[i]
   
  }} 
  tableF()