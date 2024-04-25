const dot = document.querySelector('.scrollerDot');

const currentSection1 = document.getElementById("nav1")
const currentSection2 = document.getElementById("nav2")
const currentSection3 = document.getElementById("nav3")
const currentSection4 = document.getElementById("nav4")
const currentSection5 = document.getElementById("nav5")
const currentSection6 = document.getElementById("nav6")

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const section = document.body.scrollHeight / 6;
    const sectionOffset = document.body.scrollHeight / 18;
    const val = scrolled * 0.5;
    dot.style.transform = `translateY(${0.73 * val}%)`

    console.log(scrolled, section);

    if (scrolled >= 0 && scrolled < section - sectionOffset*2) {
        currentSection1.style.color = 'white';
    } else {
        currentSection1.style.color = 'gray';
    }

    if (scrolled >= section - sectionOffset && scrolled < section*2 - sectionOffset*2) {
        currentSection2.style.color = 'white';
    } else {
        currentSection2.style.color = 'gray';
    }

    if (scrolled >= section*2 - sectionOffset && scrolled < section*3 - sectionOffset*2) {
        currentSection3.style.color = 'white';
    } else {
        currentSection3.style.color = 'gray';
    }

    if (scrolled >= section*3 - sectionOffset && scrolled < section*4 - sectionOffset*2) {
        currentSection4.style.color = 'white';
    } else {
        currentSection4.style.color = 'gray';
    }

    if (scrolled >= section*4 - sectionOffset && scrolled < section*5 - sectionOffset*2) {
        currentSection5.style.color = 'white';
    } else {
        currentSection5.style.color = 'gray';
    }

    if (scrolled >= section*5 - sectionOffset && scrolled < section*6 - sectionOffset*2) {
        currentSection6.style.color = 'white';
    } else {
        currentSection6.style.color = 'gray';
    }
})



