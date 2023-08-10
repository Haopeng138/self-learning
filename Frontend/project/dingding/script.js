const items = document.querySelectorAll('.list-item')
const playGround = document.querySelector('.playground')
const list = document.querySelector('.list')

function createAnimation(scrollStart,scrollEnd,valueStart,valueEnd){
    return function(scroll){
        if (scroll <= scrollStart){
            return valueStart
        }

        if (scroll >= scrollEnd){
            return valueEnd
        }

        return valueStart + (valueEnd - valueStart) * (scroll - scrollStart) / (scrollEnd - scrollStart)
    }
}

const animationsMap = new Map()

function getDomAnimation(scrollStart,scrollEnd,dom){
    scrollStart = scrollStart + dom.dataset.order *300
    const opacityAnimation = createAnimation(scrollStart,scrollStart,1,0)
    const opacity = function(scroll){
        return opacityAnimation(scroll)
    }
    const scaleAnimation = createAnimation(scrollStart,scrollStart,.3,1)

    const xAnimation = createAnimation(scrollStart,scrollStart,list.clientWidth / 2 - dom.offsetLeft - dom.clientWidth / 2,0)
    const yAnimation = createAnimation(scrollStart,scrollStart,list.clientHeight / 2 - dom.offsetTop - dom.clientHeight / 2,0)
    const transform = function(scroll){
        return `translate(${xAnimation(scroll)}px,${yAnimation(scroll)}px) scale(${scaleAnimation(scroll)})`
    }

    return {
        opacity,
        transform
    }
}

function updateMap(){
    animationsMap.clear()
    const playGroundRect = playGround.getBoundingClientRect()
    const scrollStart = playGroundRect.top + window.scrollY
    const scrollEnd = playGroundRect.bottom + window.scrollY - window.innerHeight
    for(const item of items){
        animationsMap.set(item,getDomAnimation(scrollStart,scrollEnd,item))
    }
}

updateMap()

function updateStyle(){
    const scroll = window.scrollY
    for(const [dom,value] of animationsMap){
        for (const cssPro in value){
            dom.style[cssPro] = value[cssPro](scroll)
        }
    }
    console.log(scroll)
}

updateStyle()

window.addEventListener('scroll',updateStyle)