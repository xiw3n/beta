    var fixedNavbar = document.getElementById('fixed')
    var staticNavbar = document.getElementById('static')
    var y = staticNavbar.offsetHeight+staticNavbar.offsetTop

    var show = function () {
        fixedNavbar.classList.add('active')

    }

    var hide = function () {
        fixedNavbar.classList.remove('active')
    }


    window.addEventListener('scroll',function () {
        if(window.scrollY>y) {
            show()
        }else{
            hide()
        }
    })