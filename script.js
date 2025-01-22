document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quoteForm")
  
    form.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const quoteNumber = document.getElementById("quoteNumber").value
      const date = document.getElementById("date").value
      const clientName = document.getElementById("clientName").value
      const clientAddress = document.getElementById("clientAddress").value
      const services = document.getElementById("services").value
      const price = document.getElementById("price").value
  
      generatePDF(quoteNumber, date, clientName, clientAddress, services, price)
    })
  })
  
  function generatePDF(quoteNumber, date, clientName, clientAddress, services, price) {
    const { jsPDF } = window.jspdf
    const doc = new jsPDF()
  
    doc.setFontSize(18)
    doc.text(`PRESUPUESTO ${quoteNumber}`, 105, 20, null, null, "center")
  
    doc.setFontSize(12)
    doc.text(`FECHA: ${date}`, 20, 30)
  
    doc.text("LA CARIPERA S.L", 20, 40)
    doc.text("B16766016", 20, 45)
    doc.text("C/PARIS 211 5ªB", 20, 50)
    doc.text("08008- BARCELONA", 20, 55)
    doc.text("TEL.632369385", 20, 60)
    doc.text("lacaripera2021@gmail.com", 20, 65)
  
    doc.text("COMUNIDAD DE PROPIETARIOS", 20, 80)
    doc.text(clientName, 20, 85)
    doc.text(clientAddress, 20, 90)
  
    doc.setFontSize(14)
    doc.text("LIMPIEZA DE ARRIBA ABAJO 1 VEZ A LA SEMANA", 20, 105)
  
    doc.setFontSize(12)
    const servicesLines = doc.splitTextToSize(services, 170)
    doc.text(servicesLines, 20, 115)
  
    const priceWithVAT = Number.parseFloat(price) * 1.21
    doc.text(`PRECIO DE LOS SERVICIOS MENSUALES ${price}€ + 21% DE IVA = ${priceWithVAT.toFixed(2)}€`, 20, 200)
  
    doc.text("EL ADMINISTRADOR", 20, 220)
    doc.text("DE LA COMUNIDAD", 20, 225)
  
    doc.text("GERENTE", 150, 220)
    doc.text("ISABEL CRISTINA DIAZ", 150, 225)
  
    doc.save(`presupuesto_${quoteNumber}.pdf`)
  }
  
  