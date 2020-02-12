let guzik = document.querySelector('button');



guzik.onclick = function validateform () {
    let x1 = document.forms['form1']['phone'].value;
    if (x1 == '') {
        alert('Podaj numer telefonu');
        return false;
        }  
        else if (x1.length < 9) {
            alert ('Błędny numer telefonu');
            return false;
        }
} 
        
       