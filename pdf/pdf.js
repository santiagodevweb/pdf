function genPDF(){
    var doc= new jsPDF();
    doc.text(20,20,'msn of prueba');
    doc.addPage();
    doc.text(20,20,'msn prueba 2');
    doc.save('test.pdf');
}