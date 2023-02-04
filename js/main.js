function coordinata(e) {

    let s = "";
    let x = e.pageX;
    let y = e.pageY;

    
    
    
    if (x >= 899 && y >= 171 && x <= 989 && y <= 191) {
        
        s = `Координаты Лондона: ${x} x ${y}`;
        alert(s);
        window.open("london.html", null, "width=700, height=650");
        
    } else if (x >= 1690 && y >= 268 && x <= 1757 && y <= 284) {
        
        s = `Координаты Токио: ${x} x ${y}`;
        alert(s);
        window.open("Tokio.html", null, "width=700, height=650");
        
    } else if (x >= 604 && y >= 234 && x <= 707 && y <= 252) {
        
        s = `Координаты Нью-Йорка: ${x} x ${y}`;
        alert(s);
        window.open("New-York.html", null, "width=700, height=650");
        
    } else {
        
        s = `Координаты: ${x} x ${y}`;
        alert(s);
        
    }
}
