new fullpage('#fullpage',{
    autoScrolling: true,
    navigation: true,
    navigationTooltips: ['Home', 'About me', 'Skills', 'Experience', 'Contact me'],
    onLeave: (origin, destination, direction) =>{
        const section = destination.item;
        const title = section.querySelector('h1');
        console.log(title)
        const tl = new TimelineMax({delay: 0.5});
        tl.fromTo(title, 0.5, {y: 20, opacity: 0}, {y: 0, opacity: 1});
    }
    
})
function chgalpha(){
    document.getElementById("front-column").style.backgroundColor = "rgba(0, 0, 0, 0.6)"
}
function incAlpha(){
    document.getElementById("front-column").style.backgroundColor = "rgba(52, 58, 64, 0.6)"
}
