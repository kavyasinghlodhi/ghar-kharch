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
        let total_exp = 0
        let date_ = new Date
        document.querySelector('.table').innerHTML = ``
        while ( i-- ) {
            let values = JSON.parse(localStorage.getItem(keys[i]))
            document.querySelector('.table').innerHTML += `
                <div class="exp">
                    <div class="exp-name">${keys[i]}</div>
                    <div class="exp-price">₹${values[0]}</div>
                </div>
            `
            total_exp += parseInt(values[0])
            j+=1
            if (i == 0) {
                document.querySelector('.box').getElementsByClassName('heading')[0].innerHTML = `<p class="small">₹</p>${total_exp}`
                document.querySelectorAll('.box')[1].getElementsByClassName('heading')[0].innerHTML = `${date_.getDate()}<p class="small">/12/22</p>`
    }
        }
    }else{
        date_ = new Date
        document.querySelector('.table').innerHTML = '<br><br><center>Hooray! No expenses till now.</center>'
        document.querySelectorAll('.box')[1].getElementsByClassName('heading')[0].innerHTML = `${date_.getDate()}<p class="small">/12/22</p>`
                document.querySelector('.box').getElementsByClassName('heading')[0].innerHTML = `<p class="small">₹</p>0`
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