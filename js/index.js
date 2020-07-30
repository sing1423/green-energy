
// Load your images on page-load
    
    function preloader() {
       const imagesPaths = [
          "./img/img-1.jpg",
           "./img/img-2.jpg",
           "./img/img-3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }


 // Images ready to be used:
       
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    
    };    
   
    window.addEventListener("load", preloader);
    
    
/* Get all buttons in a NODE LIST of buttons (array like structure) */
    
    const nodes = document.querySelectorAll('button');
    
/* 
 Complete your resource-object that will store the dynamic content.
 Resource object should 3 sub-objects. Give your sub-objects
 meaningful names. Every sub-object should have the following
 properties headingContent, bodyText, imgUrl and imgAlt. */
    const object = [
        {
            headingContent: "Hybrid cars",
            imgUrl: "./img/img-1.jpg",
            imgAlt: 'Hybrid car image',
            bodyText: "hybrid electric vehicles are controlled by an inner ignition motor and an electric engine, which utilizes vitality put away in batteries. A cross breed electric vehicle can't be connected to charge the battery. Rather, the battery is charged through regenerative slowing down and by the inward ignition motor."
        },
        {
            headingContent: "Soler panels",
            imgUrl: "./img/img-2.jpg",
            imgAlt: 'soler panel',
            bodyText: "A PV module is a get together of photograph voltaic cells mounted in a system for establishment. Photograph voltaic cells use daylight as a wellspring of vitality and create direct flow power. An assortment of PV modules is known as a PV Panel, and an arrangement of Panels is an Array. Varieties of a photovoltaic framework flexibly sun based power to electrical gear. "
        },
        {
            headingContent: "Wind power",
            imgUrl: "./img/img-3.jpg",
            imgAlt: 'wind power',
            bodyText: "Wind Power portrays the procedure by which wind is utilized to produce power. Wind turbines convert the dynamic vitality in the breeze into mechanical force. A generator can change over mechanical force into power. Mechanical force can likewise be used legitimately for explicit assignments, for example, siphoning water."
        }
    ];

/*  Get the reference to your HTML-container that will be dynamically loaded from the resource-object. */
    const container = document.querySelector('.container');
    
/* 
The first button in a NODE LIST of buttons will initially 
have the id: active-button - this will uniquely style 
 the active button (CSS rule). 
    
 The first content from the
resource-object will be loaded on the page load:
<h1>${headingContent}</h1>
<img src="${imgUrl}" alt="${imgAlt}"> <p>${bodyText}</p>` */
    
/* Start your handleSelection function here. */ 

 function handleSelection(e){
        
 
 /* 
Remove the id active-button from the element that
contains it prior to the click-event. 

 This will require the loop throught the NODE LIST of buttons. 
 Inside the loop, use conditional and the element object method
hasAttribute() to check if the current button in the loop containes the id.
If it does, use element-object property removeAttribute()
 to remove the id. */

        for (let button of nodes){
            if(button.hasAttribute('id')){
                button.removeAttribute('id');
            }
        }

 
 /* Use the element-object method setAttribute() to set the id active-button to the currently clicked button. */
       
     
        e.target.setAttribute('id', 'active-button');

 
 /*  Use conditional and event-object to check which button is clicked
and based on that, create HTML with the data inside the backticks:<h1>${headingContent}</h1>
<img src="${imgUrl}" alt="${imgAlt}">
<p>${bodyText}</p>
 Assign this content to to your HTML-container that will 
be dynamically loaded (you already got the reference to 
this container before you started the function handleSelection) */ 

     
        if (e.target.innerText == "Hybrid cars") {
                container.innerHTML = `<h1>${object[0].headingContent}</h1>
                <img src="${object[0].imgUrl}" alt="${object[0].imgAlt}">
                <p>${object[0].bodyText}</p>`;
        }else if(e.target.innerText == "Soler panels"){
                container.innerHTML = `<h1>${object[1].headingContent}</h1>
                <img src="${object[1].imgUrl}" alt="${object[1].imgAlt}">
                <p>${object[1].bodyText}</p>`;
            }else if(e.target.innerText == "Wind power"){
                container.innerHTML = `<h1>${object[2].headingContent}</h1>
                <img src="${object[2].imgUrl}" alt="${object[2].imgAlt}">
                <p>${object[2].bodyText}</p>`;
        }
    
 
 /* Close your handleSelection function here. */  
     }

 
 /*  Register all buttons to click event. The event-handler handleSelection will listen for this event to happen. */  

    for (let button of nodes){
        button.addEventListener('click', handleSelection);
    }