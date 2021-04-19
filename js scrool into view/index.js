const kutu3 = document.getElementById('kutu3')


const goBoxThree = () => {
    //top içeriğinden başlar
    //kutu3.scrollIntoView(true)
    //bottom içeriğine kadar 
    //kutu3.scrollIntoView(false)
    //kutu3.scrollIntoView()
    //smoot animasyon
    kutu3.scrollIntoView({ behavior: 'smooth', block: 'nearest' })

}