// @ts-nocheck
const audioEle = document.querySelector('audio')
audioEle.crossOrigin = 'anonymous';
const cvs = document.querySelector('canvas')

const ctx = cvs?.getContext('2d')

function initCvs(){
    // @ts-ignore
    cvs.width = window.innerWidth * devicePixelRatio;
    // @ts-ignore
    cvs.height = (window.innerHeight/2)*devicePixelRatio;

}

initCvs()

let isInit = false;
let dataArray, analyser;
// @ts-ignore
audioEle.onplay = function(){
    // Inicializar
    if (isInit) return;
    
    console.log('inicializando');
    // Obtener nodos
    const audCtx = new AudioContext();

    // @ts-ignore
    analyser = audCtx.createAnalyser();
    const source = audCtx.createMediaElementSource(audioEle); 
    analyser.fftSize = 512;

    dataArray = new Uint8Array(analyser.frequencyBinCount);

    source.connect(analyser);
    analyser.connect(audCtx.destination);

    
    isInit = true;

}

// dibujar el canvaas con los datos del audio   
function draw(){
    // @ts-ignore
    requestAnimationFrame(draw);

    // limpiar el canvas        
    const {width, height} = cvs;
    ctx.clearRect(0,0,width, height);

    if(!isInit) return; // si no se ha inicializado, no hacer nada

    analyser.getByteFrequencyData(dataArray);

    const len = dataArray.length/2.5;
    ctx.fillStyle = '#78C5F7'

    const barWidth = width / len / 2;
    for (let i = 0; i < len; i++){
        const data = dataArray[i];
        const barHeight = data/255 * height;
        const x1 = i * barWidth + width/2;
        const x2 = width/2 - (i+1) * barWidth;
        const y = height+100 - barHeight;
        ctx.fillRect(x1,y, barWidth-2, barHeight);
        ctx.fillRect(x2,y, barWidth-2, barHeight);
    }
}

draw()