'use stricket';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
//   function hourly(min , max , avg, loc){
//     let a = 0 , b = 0;
//     let mainEl = document.getElementById('the main')
//     let header2 = document.createElement('h2')
//     mainEl.appendChild(header2)
//     header2.textContent = loc
//     let ulEl = document.createElement('ul')
//     mainEl.appendChild(ulEl)
//     let liEl;

//     for( let i = 0 ; i < hourArr.length ; i++){
//          liEl = document.createElement('li')
//          ulEl.appendChild(liEl)

//         b = b + a;
//         a = Math.floor(getRandomInt(min, max) * avg);
        
//         if (i < hourArr.length - 1 ){  
//        liEl.textContent = `${hourArr[i]} ${a} cookies` 
//     } else if (i === hourArr.length - 1){
//         liEl.textContent = `${hourArr[i]} ${b} cookies.`}
//   }}

        let mainEl = document.getElementById('the main')
        
let hourArr = ['At 6am:','At 7am:','At 8am:','At 9am:','At 10am:','At 11am:','At 12pm:','At 1pm:','At 2pm:','At 3pm:','At 4pm:','At 5pm:','At 6pm:','At 7pm:','Total:'];
let seattle = {
    locFac: 'Seattle',
    maxHoCu: 65,
    minHoCu: 23,
    avgCookieCu: 6.3,
    cookiePerHo: [], 
    hourly: function(){
        let a = 0 , b = 0;
        let header2 = document.createElement('h2')
        mainEl.appendChild(header2)
        header2.textContent = this.locFac
        let ulEl = document.createElement('ul')
        mainEl.appendChild(ulEl)
        let liEl;
        for( let i = 0 ; i < hourArr.length ; i++){
             liEl = document.createElement('li')
             ulEl.appendChild(liEl)
            b = b + a;
            a = Math.floor(getRandomInt(this.minHoCu, this.maxHoCu + 1) * this.avgCookieCu);
            
            if (i < hourArr.length - 1 ){ this.cookiePerHo.push(a);
           liEl.textContent = `${hourArr[i]} ${this.cookiePerHo[i]} cookies.` 
        } else if (i === hourArr.length - 1){
            liEl.textContent = `${hourArr[i]} ${b} cookies.`}
      }
      
    }
}
seattle.hourly()
console.log(seattle.cookiePerHo)
let tokyo = {
    locFac: 'Tokyo',
    maxHoCu: 24,
    minHoCu: 3,
    avgCookieCu: 1.2,
    cookiePerHo:[],
    hourly: function(){
        let a = 0 , b = 0;
        let header2 = document.createElement('h2')
        mainEl.appendChild(header2)
        header2.textContent = this.locFac
        let ulEl = document.createElement('ul')
        mainEl.appendChild(ulEl)
        let liEl;
        for( let i = 0 ; i < hourArr.length ; i++){
             liEl = document.createElement('li')
             ulEl.appendChild(liEl)
            b = b + a;
            a = Math.floor(getRandomInt(this.minHoCu, this.maxHoCu + 1) * this.avgCookieCu);
            this.cookiePerHo.push(a);
            if (i < hourArr.length - 1 ){ 
           liEl.textContent = `${hourArr[i]} ${this.cookiePerHo[i]} cookies.` 
        } else if (i === hourArr.length - 1){
            liEl.textContent = `${hourArr[i]} ${b} cookies.`}
      }
      
    } 

};
tokyo.hourly()

let dubai = {
    locFac: 'Dubai',
    maxHoCu: 38,
    minHoCu: 11,
    avgCookieCu: 3.7,
    cookiePerHo:[],
    hourly: function(){
        let a = 0 , b = 0;
        let header2 = document.createElement('h2')
        mainEl.appendChild(header2)
        header2.textContent = this.locFac
        let ulEl = document.createElement('ul')
        mainEl.appendChild(ulEl)
        let liEl;
        for( let i = 0 ; i < hourArr.length ; i++){
             liEl = document.createElement('li')
             ulEl.appendChild(liEl)
            b = b + a;
            a = Math.floor(getRandomInt(this.minHoCu, this.maxHoCu + 1) * this.avgCookieCu);
            this.cookiePerHo.push(a);
            if (i < hourArr.length - 1 ){ 
           liEl.textContent = `${hourArr[i]} ${this.cookiePerHo[i]} cookies.` 
        } else if (i === hourArr.length - 1){
            liEl.textContent = `${hourArr[i]} ${b} cookies.`}
      }
      
    } 

};
dubai.hourly()
let paris = {
    locFac: 'Paris',
    maxHoCu: 38,
    minHoCu: 20,
    avgCookieCu: 2.3,
    cookiePerHo:[],
    hourly: function(){
        let a = 0 , b = 0;
        let header2 = document.createElement('h2')
        mainEl.appendChild(header2)
        header2.textContent = this.locFac
        let ulEl = document.createElement('ul')
        mainEl.appendChild(ulEl)
        let liEl;
        for( let i = 0 ; i < hourArr.length ; i++){
             liEl = document.createElement('li')
             ulEl.appendChild(liEl)
            b = b + a;
            a = Math.floor(getRandomInt(this.minHoCu, this.maxHoCu + 1) * this.avgCookieCu);
            this.cookiePerHo.push(a);
            if (i < hourArr.length - 1 ){ 
           liEl.textContent = `${hourArr[i]} ${this.cookiePerHo[i]} cookies.` 
        } else if (i === hourArr.length - 1){
            liEl.textContent = `${hourArr[i]} ${b} cookies.`}
      }
      
    }

};
paris.hourly()
let lima = {
    locFac: 'Lima',
    maxHoCu: 16,
    minHoCu: 2,
    avgCookieCu: 4.6,
    cookiePerHo:[],
    hourly: function(){
        let a = 0 , b = 0;
        let header2 = document.createElement('h2')
        mainEl.appendChild(header2)
        header2.textContent = this.locFac
        let ulEl = document.createElement('ul')
        mainEl.appendChild(ulEl)
        let liEl;
        for( let i = 0 ; i < hourArr.length ; i++){
             liEl = document.createElement('li')
             ulEl.appendChild(liEl)
            b = b + a;
            a = Math.floor(getRandomInt(this.minHoCu, this.maxHoCu + 1) * this.avgCookieCu);
            this.cookiePerHo.push(a);
            if (i < hourArr.length - 1 ){ 
           liEl.textContent = `${hourArr[i]} ${this.cookiePerHo[i]} cookies.` 
        } else if (i === hourArr.length - 1){
            liEl.textContent = `${hourArr[i]} ${b} cookies.`}
      }
      
    }

};
lima.hourly()




