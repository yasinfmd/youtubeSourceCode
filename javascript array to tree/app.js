
const data = [
    {
        id: 2,
        parent: 1,
        ad: 'Sözcükte Anlam' //konular
    },
    {
        id: 3,
        parent: 1,
        ad: 'Dil Bilgisi' //konular 
    },

    {
        id: 4,
        parent: 2,
        ad: 'GERÇEK ANLAM'
    },
    {
        id: 5,
        parent: 2,
        ad: 'YAN ANLAM'
    },
    {
        id: 6,
        parent: 2,
        ad: 'SOMUTLAŞTIRMA'
    },
    {
        id: 7,
        parent: 3,
        ad: 'İsim' //konular
    },
    {
        id: 8,
        parent: 3,
        ad: 'Fiil ' //konular
    },
    {
        id: 9,
        parent: 3,
        ad: 'Edat' //konular
    },
    {
        id: 10,
        parent: 9,
        ad: 'Gibi'
    },
    {
        id: 1,
        parent: null,
        ad: 'Türkçe Eğitimi'
    },
    {
        id: 11,
        parent: 9,
        ad: 'İle '
    }, {
        id: 12,
        parent: 11,
        ad: 'ile altında bir eleman'
    }
]

const idArray = data.reduce((pv, cv, i) => {
    pv[cv.id] = i
    return pv
}, {})

//console.log('idArray', idArray)
let rooElement;
data.forEach((item) => {
    if (item.parent === null) {
        rooElement = item;
        return
    }
    // id si bir üst eleman olan 
    const parentElement = data[idArray[item.parent]];
    if (!parentElement.child) {
        parentElement.child = []
    }
    parentElement.child = [...parentElement.child || [], item]


    /*
    
      {
        id: 2,
        parent: 1,
        ad: 'Sözcükte Anlam' //konular
    },
    */
    // console.log('parentElement', parentElement)

})
console.log('rootElement', rooElement)