const elasticSearch = require('elasticsearch')

const client = new elasticSearch.Client({
    host: 'localhost:9200',
    pingTimeout: 3000,

})

client.ping({}, async function (error) {
    if (error) {
        console.log('hatasız kul olmaz ' + ' ' + error)
    } else {
        console.log('connected')
        //index olusturma
        //const index = await onCreateIndex('searchs')

        //mapping olusturma
        /*  const mapping = await client.indices.putMapping({
              index: 'searchs',
              body: {
                  properties: {
                      stext: {
                          type: 'text'
                      },
                      sage: {
                          type: 'integer'
                      }
                  }
              },
              includeTypeName: true,
              type: 'search'
          })*/

        const DATA = [
            {
                stext: 'Lorem ipsum text yer alıyor',
                sage: 20
            },
            {
                stext: 'burada text var',
                sage: 22
            },
            {
                stext: 'text aranıyor ama hnagi metin içersinde',
                sage: 23
            },
            {
                stext: 'Lorem ipsum text2 yer alıyor',
                sage: 12
            },
            {
                stext: 'Lorem ipsum text3 yer alıyor',
                sage: 11
            },
            {
                stext: 'text var ama metin yok',
                sage: 20
            },
            {
                stext: 'metin var text içerisinde',
                sage: 20
            },
            {
                stext: 'yaşlar text için şuanda gereksiz',
                sage: 34
            },
            {
                stext: 'Lorem ipsum text yer alıyor',
                sage: 12
            },
            {
                stext: 'merhaba dünya',
                sage: 55
            },
            {
                stext: 'selamlar elasticsearch text',
                sage: 50
            },
            {
                stext: 'text',
                sage: 50
            },
            {
                stext: 'abc',
                sage: 50
            }
        ]
        //döküman olusturma
        /*DATA.forEach(async (item, index) => {
            const createdResult = await client.index({
                index: 'searchs',
                type: 'search',
                id: index + 100,
                body: item
            })
            console.log(`createdResult`, createdResult)
        });*/

        //console.log(`mapping`, mapping)
        //console.log(`index`, index)


        //query search get read
        const { hits } = await client.search({
            index: 'searchs',
            type: 'search',
            body: {
                query: {
                    match: {
                        stext: 'deneme'
                    }
                }
            }
        })
        console.log(`object`, hits.hits)

        //silme
        /* const deletedRecord = await client.delete({ index: 'searchs', id: 112 })
         console.log(`deletedRecord`, deletedRecord)*/

        /*  const updatedRecord = await client.update({
              index: 'searchs', id: 109, body: {
                  doc: {
                      stext: 'deneme'
                  }
              }
          })
          console.log(`updatedRecord`, updatedRecord)*/
    }
})

const onCreateIndex = async (index) => {
    try {
        return await client.indices.get({ index: index })
    } catch (error) {
        return await client.indices.create({
            index: index
        })
    }
}