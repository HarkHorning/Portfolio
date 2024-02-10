import { Mass } from "./backgroundObjects.js";

window.addEventListener('load', () => {
    const climber = document.getElementById('do-not-fall');
    const myName = document.getElementById('name');
    const myVocation = document.getElementById('vocation-box');
    const myVocationTwo = document.getElementById('vocation-box2');
    const screenWidth = window.innerWidth;
    const vocationWidth = screenWidth * 1.95;
    const speed = 1.6;
    const canvas = document.getElementById('canvasOne');
    const context = canvas.getContext('2d');
    const glassOne = document.getElementById('page-color-block-one');
    const glassTwo = document.getElementById('page-color-block-two');
    const sectionTwo = document.getElementById('section-two');
    const myWork = document.getElementById('my-work');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    let textLocation = 0;
    let textLocationTwo = vocationWidth;
    let backgroundObjects = [];
    // let glassWidth = '41%';

    window.addEventListener('scroll', () => {
        //parallax
        let scrollAmount = window.scrollY / 1.5;
        climber.style.transform = `translateY(${scrollAmount}px)`;
        myName.style.transform = `translateX(${scrollAmount}px)`;
        sectionTwo.style.transform = `translateY(${-0.8 * scrollAmount}px)`;
        myWork.style.transform = `translateY(${-0.25 * scrollAmount}px)`;

        let topDistance = 60 - (scrollAmount / 15);
        myVocation.style.top = `${topDistance}%`;
        myVocationTwo.style.top = `${topDistance}%`;
        //x
        let shrinkWidth = 49.15 - (scrollAmount / 15);
        glassOne.style.width = `${shrinkWidth}%`;
        //y
        let shrinkHeight = 98 - (scrollAmount / 5)
        glassTwo.style.height = `${shrinkHeight}%`;
    })

    const cursorLocation = ({ x, y }) => {
        document.documentElement.style.setProperty('--x', Math.round(x));
        document.documentElement.style.setProperty('--y', Math.round(y));
    }

    document.body.addEventListener('pointermove', cursorLocation);

    function updateLocation(){
        textLocation -= speed;
        textLocationTwo -= speed;
        if (textLocation + vocationWidth <= 0) textLocation = vocationWidth;
        if (textLocationTwo + vocationWidth <= 0) textLocationTwo = vocationWidth;
        myVocation.style.transform = `translateX(${textLocation}px)`;
        myVocationTwo.style.transform = `translateX(${textLocationTwo}px)`;
    }

    function backgroundManager(){
        backgroundObjects.forEach(mass  => {
            mass.update();
            mass.draw(context);
        })
    }

    backgroundObjects.push(new Mass(canvas.width, canvas.height));
    backgroundObjects.push(new Mass(canvas.width, canvas.height));
    backgroundObjects.push(new Mass(canvas.width, canvas.height));
    backgroundObjects.push(new Mass(canvas.width, canvas.height));
    backgroundObjects.push(new Mass(canvas.width, canvas.height));
    backgroundObjects.push(new Mass(canvas.width, canvas.height));
    backgroundObjects.push(new Mass(canvas.width, canvas.height));
    backgroundObjects.push(new Mass(canvas.width, canvas.height));

    function refreshLoop(){
        context.clearRect(0, 0, canvas.width, canvas.height)
        backgroundManager();
        updateLocation();
        requestAnimationFrame(refreshLoop);
    }
    refreshLoop(0);
})