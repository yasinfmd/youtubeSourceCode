interface MyProps{
    ad?:string
    soyad?:string
}

const data1:MyProps={}
const data2:MyProps={ad:'qweqwe'}
const data3:MyProps={soyad:'qwewqewqsdff'}
const data4:Required<MyProps>={ad:'qweqwe',soyad:'^refdgfd'}