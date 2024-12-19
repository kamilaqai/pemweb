const name = document.getElementById('name')
const email = document.getElementById('email')
const jam = document.getElementById('jam')
const tujuan = document.getElementById('tujuan')
const tiket = document.getElementById('tiket')

const submit = document.getElementById('submit')
const form = document.querySelector('form')
const table = document.querySelector('table')

const nameError = document.getElementById('name-error')
const emailError = document.getElementById('email-error')
const jamError = document.getElementById('jam-error')
const tujuanError = document.getElementById('tujuan-error')
const tiketError = document.getElementById('tiket-error')

const nameData = document.getElementById('name-data')
const emailData = document.getElementById('email-data')
const jamData = document.getElementById('jam-data')
const tujuanData = document.getElementById('tujuan-data')
const tiketData = document.getElementById('tiket-data')

const format = /[!@#$%^&*()_+-=\[\]{};':"\\|,.<>\/?]+/

form.addEventListener('submit', (e) => {
    //jika error
    
    if (name.value === '') {
        nameError.innerHTML = 'Nama tidak boleh kosong'
        nameError.style.color = 'red';
        e.preventDefault()
    }
    if (name.value.legth > 30) {
        nameError.innerHTML = 'Maksimal nama 30 karakter'
        nameError.style.color = 'red';
        e.preventDefault()
    }
    if (email.value === '') {
        emailError.innerHTML = 'Email tidak boleh kosong'
        emailError.style.color = 'red';
        e.preventDefault()
    }
    if (!email.value.match(format)) {
        emailError.innerHTML = 'Email tidak valid'
        emailError.style.color = 'red';
        e.preventDefault()
    }
    if (jam.value === '') {
        jamError.innerHTML = 'Jam tidak boleh kosong'
        jamError.style.color = 'red';
        e.preventDefault()
    }
    if (tujuan.value === '') {
        tujuanError.innerHTML = 'Tujuan tidak boleh kosong'
        tujuanError.style.color = 'red';
        e.preventDefault()
    }
    if (tiket.value === '' || tiket.value <=0) {
        tiketError.innerHTML = 'Tiket tidak boleh kosong'
        tiketError.style.color = 'red';
        e.preventDefault()
    }
    if (tiket.value > 10){
        tiketError.innerHTML = 'Tiket tidak boleh lebih dari 10'
        tiketError.style.color = 'red';
        e.preventDefault()
    }

    // perbaiki jika tidak ada error
    if (name.value.length <= 30 && name.value !== '') {
        nameError.innerHTML = ''
        e.preventDefault()
    }
    if (email.value.match(format) && email.value !== '') {
        emailError.innerHTML = ''
        e.preventDefault()
    }
    if (jam.value !== '') {
        jamError.innerHTML = ''
        e.preventDefault()
    }
    if (tujuan.value !== '') {
        tujuanError.innerHTML = ''
        e.preventDefault()
    }
    if (tiket.value > 0 && tiket.value <= 10 && tiket.value !== '') {
        tiketError.innerHTML = ''
        e.preventDefault()
    }

    // hasil
        
    if (
        !name.value == '' && name.value.length <= 30 &&
        !email.value == '' && email.value.match(format) &&
        !jam.value == '' && !tujuan.value == '' &&
        tiket.value > 0 && tiket.value <= 10 && !tiket.value == ''
        ) {
        nameData.innerHTML = name.value
        emailData.innerHTML = email.value
        jamData.innerHTML = jam.value
        tujuanData.innerHTML = tujuan.value
        tiketData.innerHTML = tiket.value
        table.style.visibility = 'visible'
        e.preventDefault()
        }
})




