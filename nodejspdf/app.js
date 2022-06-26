const PDFDOCUMENT = require('pdfkit')
const fs = require('fs');
const { doesNotMatch } = require('assert');
const doc = new PDFDOCUMENT({ compress: true, autoFirstPage: true, size: 'A4', lang: 'tr-TR' })
const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beeorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
doc.font('Times-Roman');
doc.pipe(fs.createWriteStream('mypdf.pdf'))
doc.text('Merhaba Dünya')
doc.fontSize(20)
doc.moveDown()

doc.text('Merhaba Dünya 2')
doc.moveDown()
    // doc.text(text, {
    //     width: 500,
    //     align: "center",
    //     lineGap: 10,
    //     underline: true
    // })

doc.moveDown()
doc.text('Selam', 100, 100)


doc.moveDown()

// doc.text(text, {
//     columns: 4,
//     columnGap: 10,
//     height: 100,
//     width: 500,
//     align: 'center'
// })


doc.fillColor('red').text('Merhaba Dünya 2', { continued: true }).fillColor('blue').text('Selam Dünya')
doc.addPage()
doc.text('Selam')

doc.addPage()
doc.text('Merhaba')
doc.addPage()
doc.image('./node.png', 300, 150, { width: 250, link: 'https://www.google.com.tr', align: 'center', valign: 'center' })
doc.addPage()
doc.polygon([100, 0], [50, 100], [150, 200])
doc.stroke()
doc.addPage()
doc.moveTo(0, 50).lineTo(100, 200).bezierCurveTo(120, -50, 25, 60, 50, 50).lineTo(400, 80).stroke()

doc.addPage()

doc.circle(100, 100, 50).lineWidth(5).fillAndStroke('red', 'blue')

doc.addPage()

doc.initForm()
doc.formText('mytext', 10, 10, 200, 40)
doc.formCombo('mycombo', 10, 100, 100, 40, {
    select: ['', 'a', 'b', 'c'],
    value: 'a',
    align: 'center'
})
doc.formPushButton('mybtn', 10, 200, 100, 80, { backgroundColor: 'red', label: 'Tıkla' })
doc.end()