let cursors = 0;
let grandmas = 0;
let farms = 0;
let cookies = 0;
let cps = 0;
let multiplier = 1;

document.getElementById('R').addEventListener('input', bgColour);
document.getElementById('G').addEventListener('input', bgColour);
document.getElementById('B').addEventListener('input', bgColour);

function numberUpdater(multiplier)
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
                cookies += (1*multiplier);
                cookieNumberElement.textContent = cookies + " Cookies"; 
            }, 10000);
        
        }
    if (grandmas >=1)
        {
            setInterval(() => {
                cookies += (1*multiplier);
                cookieNumberElement.textContent = cookies + " Cookies"; 
            }, 1000);
        
        }
    if (farms >= 1)
        setInterval(() => {
            cookies += (1*multiplier);
            cookieNumberElement.textContent = cookies + " Cookies"; 
        }, 100);

}

function textUpdater()
{

    const onexElement = document.querySelector('.onex');
    const tenxElement = document.querySelector('.tenx');
    const hundrexElement = document.querySelector('.hundredx');
    const cursorTextElement = document.querySelector('.buyCursor');
    const grandmaTextElement = document.querySelector('.buyGrandma');
    const farmTextElement = document.querySelector('.buyFarm');
    
    cursorTextElement.textContent = "Buy " + (multiplier) + " Cursors for " + (10 * multiplier) + " cookies"
    grandmaTextElement.textContent = "Buy " + (multiplier) + " Grandmas for " + (100 * multiplier) + " cookies"
    farmTextElement.textContent = "Buy " + (multiplier) + " Farms for " + (1000 * multiplier) + " cookies"


}

document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('.bigCookie');
    const cookieNumberElement = document.querySelector('.cookieNumber');

    const button1 = document.querySelector('.buyCursor');
    const cursorsNumberElement = document.querySelector('.cursorNumber');

    const button2 = document.querySelector('.buyGrandma');
    const grandmaNumberElement = document.querySelector('.grandmaNumber');

    const button3 = document.querySelector('.buyFarm');
    const farmNumberElement = document.querySelector('.farmNumber');

    const button4 = document.querySelector('.onex');
    const button5 = document.querySelector('.tenx');
    const button6 = document.querySelector('.hundredx');



    button.addEventListener('click', () => {
        cookies++;
        cookieNumberElement.textContent = cookies + " Cookies";
    });

    button1.addEventListener('click', () => {

        if (cookies <= ((10*multiplier)- 1))
        {}
        else
        {
            cps +=  + (0.1*multiplier);
            cursors= cursors + (1*multiplier);
            cookies -= (10*multiplier);
            numberUpdater(multiplier);
        }
    });

    button2.addEventListener('click', () => {
        if (cookies <= ((100*multiplier) - 1))
        {}
        else
        {
            cps += (1*multiplier);
            grandmas += (1*multiplier);
            cookies -= (100*multiplier);
            numberUpdater(multiplier);
        }
    });

    button3.addEventListener('click', () => {
        if (cookies <= ((1000*multiplier) - 1))
        {}
        else
        {
            cps +=  + (10*multiplier);
            farms += (1*multiplier);
            cookies -= (1000*multiplier);
            numberUpdater(multiplier);
        }
    });

    button4.addEventListener('click', () => {
        multiplier = 1;
        textUpdater();
        cookieNumberElement.textContent = cookies + " Cookies";
    });

    button5.addEventListener('click', () => {
        multiplier = 10;
        textUpdater();
        cookieNumberElement.textContent = cookies + " Cookies";
    });

    button6.addEventListener('click', () => {
        multiplier = 100;
        textUpdater();
        cookieNumberElement.textContent = cookies + " Cookies";
    });
    
});

function bgColour() {

    const r = parseInt(document.getElementById('R').value) || 0;
    const g = parseInt(document.getElementById('G').value) || 0;
    const b = parseInt(document.getElementById('B').value) || 0;

    const red = Math.min(255, Math.max(0, r));
    const green = Math.min(255, Math.max(0, g));
    const blue = Math.min(255, Math.max(0, b));

    const body = document.body;
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

}


