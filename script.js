setInterval(setClock , 1000 )

const hourC = document.querySelector('[hour]')
const minC = document.querySelector('[min]')
const secC = document.querySelector('[sec]')



function setClock () {
    const currentDate = new Date()
    const secRatio = currentDate.getSeconds() / 60 ;
    const minRation =  (secRatio + currentDate.getMinutes() )/ 60

    const hourRatio = (minRation + currentDate.getHours()) / 12 ;

    setRotation(secC , secRatio)
    setRotation(minC , minRation)
    setRotation(hourC , hourRatio)


}


function setRotation (element , rotationRatio) {
    element.style.setProperty('--rotation' , rotationRatio * 360)
}

setClock();