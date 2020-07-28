function generateStars() {
    let count = 1000;
    let container = document.querySelector('.container');
    let current = 0

    while (current < count) {
        let star = document.createElement('i');
        let x = Math.trunc(Math.random() * window.innerWidth);
        let y = Math.trunc(Math.random() * window.innerHeight);

        let size = Math.random() * 2;

        star.classList.add('star')

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        container.appendChild(star);

        current++;

    }
    
}

function moveElements(e){
    const stars = document.querySelectorAll('.star');
    const moon = document.querySelector('.moon');
    const h1 = document.querySelector('h1');

    const speed = 2.5
   

    stars.forEach(star => {
       const x = (window.innerWidth - e.pageX*speed)/200;
       const y = (window.innerHeight - e.pageY*speed)/200;

        star.style.transform = `translateX(${x}px) translateY(${y}px)`
        moon.style.transform = `translateX(${-x}px) translateY(${-y}px)`
        h1.style.transform = `translateX(${-x}px) translateY(${-y}px)`
    })


}
document.addEventListener('mousemove',moveElements)


generateStars()