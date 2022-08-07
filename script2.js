function nav() {
    if (document.querySelector('.links').style.display == "flex") {
        document.querySelector('.links').style.display = "none"
    }
    else{
        document.querySelector('.links').style.display = "flex"
    }
}

function modal(numb) {
    if (document.querySelectorAll('.modal')[numb].style.transform == 'translateY(0px)') {
        document.querySelectorAll('.modal')[numb].style.transform = 'translateY(500px)'
    }else{
        document.querySelectorAll('.modal')[numb].style.transform = 'translateY(0px)'
    }
}

function allStorage() {

    var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;
    j = 1
    if (i>0) {
        document.querySelector('.table').innerHTML = `
                <table>
                    <tr>
                        <td><b>#</b></td>
                        <td><b>Expense Name</b></td>
                        <td><b>Expense Value</b></td>
                        <td><b>Date</b></th>
                    </tr>
                </table>
            `
        let total_exp = 0
        let date_ = new Date
        
        while ( i-- ) {
            let values = JSON.parse(localStorage.getItem(keys[i]))
            document.querySelector('table').innerHTML += `
                <tr>
                    <td>${j}</td>
                    <td>${keys[i]}</td>
                    <td>${values[0]}</td>
                    <td>${values[1]} &ThickSpace;&ThickSpace; <img src='img/edit.png' onclick='edit("${keys[i]}")' height='16'>&ThickSpace; <img src='img/delete.png' height='16' onclick='localStorage.removeItem("${keys[i]}"); allStorage()'></td>
                </tr>
            `
            total_exp += parseInt(values[0])
            j+=1
            if (i == 0) {
                document.querySelector('.box').getElementsByClassName('heading')[0].innerText = total_exp
                document.querySelectorAll('.box')[1].getElementsByClassName('heading')[0].innerText = date_.getDate()
            }
        }
    }else{
        date_ = new Date
        document.querySelector('.table').innerHTML = '<br><br><center>Hooray! No expenses till now.</center>'
        document.querySelectorAll('.box')[1].getElementsByClassName('heading')[0].innerHTML = `${date_.getDate()}<p class="small">/12/22</p>`
        document.querySelector('.box').getElementsByClassName('heading')[0].innerText = '00'
    }
}

allStorage()


function adda() {
    let val_a = document.querySelectorAll('input')[0].value
    let val_b = document.querySelectorAll('input')[1].value
    let val_c = new Date
    let val_d = `${val_c.getDate()}-${val_c.getMonth()}-${val_c.getFullYear()}`
    let val_e = [val_b, val_d]
    localStorage.setItem(val_a,JSON.stringify(val_e))
    allStorage()
}

function edit(nom) {
    document.querySelector('input').value = nom
    modal(0)
}