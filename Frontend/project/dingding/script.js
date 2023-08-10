const items = document.querySelectorAll('.list-item')
const playGround = document.querySelector('.playground')
const list = document.querySelector('.list')


function createAnimation(xStart,xEnd,yStart,yEnd){
    return function(x){
        if(x < xStart){
            return yStart
        }
        if(x > xEnd){
            return yEnd
        }

        return yStart + ((x-xStart)/(xEnd-xStart))*(yEnd-yStart)  
    }
}

const animationsMap = new Map()

function updateAnimationMap(){
    animationsMap.clear()
    if(items.length === 0){
        return
    }
    const playGroundRect = playGround.getBoundingClientRect()
    const scrollY = window.scrollY

    const playGroundTop = playGroundRect.top + scrollY
    const playGroundBottom = playGroundRect.bottom + scrollY - window.innerHeight
    
    const listRect = list.getBoundingClientRect()

    for (let i = 0; i< items.length; i++){
        const item = items[i]

        const scrollStart = playGroundTop + item.dataset.order * 600
        const scrollEnd = playGroundBottom;

        const itemWidth = item.clientWidth
        const itemHeight = item.clientHeight
        const itemLeft = item.offsetLeft
        const itemTop = item.offsetTop

        const opacityAnimation = createAnimation(scrollStart,scrollEnd,0,1)

        const scaleAnimation = createAnimation(scrollStart,scrollEnd,0.5,1)

        const translateXAnimation = createAnimation(
            scrollStart,
            scrollEnd,
            listRect.width/2 - itemLeft - itemWidth/2,
            0
        )

        const translateYAnimation = createAnimation(
            scrollStart,
            scrollEnd,
            listRect.height/2 - itemTop - itemHeight/2,
            0
        )
        const animations = {
            opacity: function(scroollY){
                return opacityAnimation(scroollY)
            },
            transform: function(scrollY){
                const scaled = scaleAnimation(scrollY)
                const x = translateXAnimation(scrollY)
                const y = translateYAnimation(scrollY)
                return `translate(${x}px,${y}px) scale(${scaled})`
            }
        }
        animationsMap.set(item,animations)
    }
   
}

updateAnimationMap()

function updateStyles(){
    const scrollY = window.scrollY

    for ( const [item,animations] of animationsMap){
        for (const prop in animations){
            item.style[prop] = animations[prop](scrollY)
        }
    }
}

updateStyles()

window.addEventListener('scroll',updateStyles)

window.addEventListener('resize',()=>{
    updateAnimationMap()
    updateStyles()
}
)