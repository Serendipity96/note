let add = document.getElementById('addTag')
let input = document.getElementById('input')
let btnContainer = document.getElementById('btnContainer');
function addTag() {
    add.style.display = 'none'
    input.style.display = 'inline'
}

input.addEventListener('blur',function (e) {
    if(input.value === ''){
        e.target.style.display = 'none'
        add.style.display = 'inline'
    }
    else{
        let s =document.createElement('span')
        s.textContent = input.value;
        btnContainer.appendChild(s)
        input.value = ''
        e.target.style.display = 'none'
        add.style.display = 'inline'
    }
})
