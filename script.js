let features = document.getElementById('features');
let featuresContainer = document.querySelector('.features') 
let company =  document.getElementById('company');
let companyContainer = document.querySelector('.company') 

features.addEventListener('click',()=>{
    featuresContainer.classList.toggle('menuActive')
    features.firstElementChild.classList.toggle('downActive');
    features.lastElementChild.classList.toggle('upActive')
})

company.addEventListener('click',()=>{
    companyContainer.classList.toggle('menuActive')
    company.firstElementChild.classList.toggle('downActive');
    company.lastElementChild.classList.toggle('upActive')
})