let cursors = 0;
let grandmas = 0;
let farms = 0;
let cookies = 0;
let cps = 0;



function numberUpdater()
{


    const button = document.querySelector('.bigCookie');
    const button1 = document.querySelector('.buyCursor');
    const button2 = document.querySelector('.buyGrandma');
    const button3 = document.querySelector('.buyFarm');
    const cookieNumberElement = document.querySelector('.cookieNumber');
    const cursorsNumberElement = document.querySelector('.cursorNumber');
    const grandmaNumberElement = document.querySelector('.grandmaNumber');
    const farmNumberElement = document.querySelector('.farmNumber');
    const cpsNumberElement = document.querySelector('.cps');

    
    cookieNumberElement.textContent = cookies + " Cookies";
    cursorsNumberElement.textContent = cursors + " Cursors";  
    grandmaNumberElement.textContent = grandmas + " Grandmas";  
    farmNumberElement.textContent = farms + " Farms";  

    cpsNumberElement.textContent = cps.toFixed(1) + " Cookies Per Second"
    
    if (cursors >= 1)
        {
            setInterval(() => {
                cookies += 1;
                cookieNumberElement.textContent = cookies + " Cookies"; 
            }, 10000);
        
        }
    if (grandmas >=1)
        {
            setInterval(() => {
                cookies += 1;
                cookieNumberElement.textContent = cookies + " Cookies"; 
            }, 1000);
        
        }
    if (farms >= 1)
        setInterval(() => {
            cookies += 1;
            cookieNumberElement.textContent = cookies + " Cookies"; 
        }, 100);

}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.bigCookie');
    const cookieNumberElement = document.querySelector('.cookieNumber');

    button.addEventListener('click', () => {
        cookies++;
        cookieNumberElement.textContent = cookies + " Cookies";
    });
});

document.addEventListener('DOMContentLoaded', () => {

    const button1 = document.querySelector('.buyCursor');
    const grandmaNumberElement = document.querySelector('.cursorNumber');


    button1.addEventListener('click', () => {
        if (cookies <= 9)
        {}
        else
        {
            cps += 0.1;
            cursors++;
            cookies -= 10;
            numberUpdater();
        }
      
    });
});

document.addEventListener('DOMContentLoaded', () => {


    const button2 = document.querySelector('.buyGrandma');
    const grandmaNumberElement = document.querySelector('.grandmaNumber');


    button2.addEventListener('click', () => {
        if (cookies <= 99)
        {}
        else
        {
            cps += 1;
            grandmas++;
            cookies -= 100;
            numberUpdater();
        }
      
    });
});

document.addEventListener('DOMContentLoaded', () => {


    const button3 = document.querySelector('.buyFarm');
    const farmNumberElement = document.querySelector('.farmNumber');


    button3.addEventListener('click', () => {
        if (cookies <= 999)
        {}
        else
        {
            cps += 10;
            farms++;
            cookies -= 1000;
            numberUpdater();
        }
      
    });
});

