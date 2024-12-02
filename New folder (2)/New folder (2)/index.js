const items = document.querySelectorAll('.item');
const subscreen = document.getElementById('subscreen');
const subscreenTitle = document.getElementById('subscreen-title');
const subscreenContent = document.getElementById('subscreen-content');

let currentVisibleItem = null; 


items.forEach(item => {
    item.addEventListener('click', () => {

        const itemName = item.textContent;


        if (currentVisibleItem === itemName && subscreen.style.display === 'block') {

            subscreen.style.display = 'none';
            currentVisibleItem = null;
        } else {
         


            subscreen.style.display = 'block';
            currentVisibleItem = itemName; 
        }
    });
});






const navItems = document.querySelectorAll('.items');
const section1= document.querySelector('.addSection')
const section2= document.querySelector('.deleteSection')
const section3= document.querySelector('.editSection')
const section4= document.querySelector('.newSection')
const section5= document.querySelector('.cancelSection')

navItems[0].addEventListener("click",()=>{
    section1.style.display="block"
    section2.style.display="none"
    section3.style.display="none"
        section4.style.display="none"
     section5.style.display="none"
    
})

navItems[1].addEventListener("click",()=>{
    section1.style.display="none"
    section2.style.display="block"
    section3.style.display="none"
        section4.style.display="none"
     section5.style.display="none"
})

navItems[2].addEventListener("click",()=>{
    section1.style.display="none"
    section2.style.display="none"
    section3.style.display="block"
     section5.style.display="none"
         section4.style.display="none"
})



navItems[3].addEventListener("click",()=>{
    section1.style.display="none"
    section2.style.display="none"
    section3.style.display="none"
    section4.style.display="block"
    section5.style.display="none"

})

navItems[4].addEventListener("click",()=>{
    section1.style.display="none"
    section2.style.display="none"
    section3.style.display="none"
    section4.style.display="none"
    section5.style.display="block"

})




