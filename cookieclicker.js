let cursors = 0;
let cookies = 0;



function numberUpdater()
{

    const button = document.querySelector('.bigcookie');
    const cookieNumberElement = document.querySelector('.cookienumber');
    const button1 = document.querySelector('.buycursor');
    const cursorsNumberElement = document.querySelector('.cursornumber');

        cookieNumberElement.textContent = cookies;
        cursorsNumberElement.textContent = cursors;

        if (cursors >= 1)
            {
                setInterval(() => {
                    cookies += 1;
                    cookieNumberElement.textContent = cookies; 
                }, 10000);
            
            }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.bigcookie');
    const cookieNumberElement = document.querySelector('.cookienumber');

    button.addEventListener('click', () => {
        cookies++;
        cookieNumberElement.textContent = cookies;
    });
});

document.addEventListener('DOMContentLoaded', () => {


    const button1 = document.querySelector('.buycursor');
    const cursorsNumberElement = document.querySelector('.cursornumber');


    button1.addEventListener('click', () => {
        if (cookies <= 9)
        {}
        else
        {
            cursors++;
            cookies -= 10
            numberUpdater()
        }
      
    });
});