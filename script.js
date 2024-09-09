
    let login = document.getElementById('login');
    let login_from_form = document.getElementById('login_from_form');

    let register = document.getElementById('register');
    let register_from_form = document.getElementById('register_from_form');
    let main = document.getElementsByClassName('main')[0];

    let classrm_login = () => {
        main.classList.remove('active_login')
    }

    let classrm_register = () => {
        classrm_register();
        main.classList.remove('active_register')
    }

    let addclass_loginform = () => {
        main.classList.toggle('active_login')
    }

    let addclass_registrationform = () => {
        classrm_login();
        main.classList.toggle('active_register')
    }

    login.addEventListener("click", addclass_loginform)
    login_from_form.addEventListener("click", addclass_loginform)


    register.addEventListener("click", addclass_registrationform);
    register_from_form.addEventListener("click", addclass_registrationform);

