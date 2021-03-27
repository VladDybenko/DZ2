click = function() {
    stroka = document.querySelector('#F').value
    localStorage.setItem('comment',stroka)
    let comment = localStorage.getItem('comment')
    document.querySelector(".allComments").innerText=(comment)
    }