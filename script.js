const codeBlock = document.querySelectorAll(".codeblock");

codeBlock.forEach((elem, index) => {

    VanillaTilt.init(elem, {
        glare: true,
        reverse: true,
        perspective: 2000,
        "max-glare": 0.1, 
        startX : index % 2 ? -12 : 12,
        max: 13,
        speed: 1000
    })
})