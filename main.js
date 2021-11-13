function touchNumbers(touch) {
    switch(touch){
        case 1:
            let text = '1';
            let kq = text.link('https://www.youtube.com/');
            document.getElementById("one").innerHTML = kq;
            break;
        case 2:
            alert('chuc nang 2!');
            break;
        case 3:
            alert('chuc nang 3!');
            break;
        case 4:
            alert('chuc nang 4!');
            break;
        case 5:
            alert('chuc nang 5!');
            break;
        case 6:
            alert('chuc nang 6!');
            break;
        case 7:
            alert('chuc nang 7!');
            break;
        case 8:
            alert('chuc nang 8!');
            break;
        default:
            alert('Khong xac dinh!');
            break;
    }  
}