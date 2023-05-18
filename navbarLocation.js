const navbarLocation = document.querySelector("#navbarLocation");
const footer = document.querySelector("#footer");
navbarLocation.innerHTML = `
    <!--Barra de navegacion -->
    <nav class="navbar navbar-expand-lg  container-nav">
        <div class="container ">
            <a class="navbar-brand" href="#"><img src="./Assets/Images/Logo.png" alt="Logo" class="img-fluid" width="90px" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item item">
                        <a class="nav-link active " href="#">Inicio</a>
                    </li>
                    <li class="nav-item item">
                        <a class="nav-link " href="#">Meditación</a>
                    </li>                  
                    <li class="nav-item dropdown item">
                        <a class="nav-link  dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Rutinas
                        </a>
                        <ul class="dropdown-menu item-drop" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Pierna</a></li>
                            <li><a class="dropdown-item" href="#">Abdomen</a></li>
                            <li><a class="dropdown-item" href="#">Espalda</a></li>
                            <li><a class="dropdown-item" href="#">Glúteo</a></li>
                            <li><a class="dropdown-item" href="#">Pecho</a></li>
                        </ul>
                    </li>
                    <li class="nav-item item">
                        <a class="nav-link " href="#">Recetas</a>
                    </li>
                </ul>
                <div class="d-flex">                    
                    <button class="btn-light ms-3 btn-login">Login</button>
                </div>
            </div>
        </div>
    </nav>`;

footer.innerHTML = `
    <div class="container-fluid footer">
          <div class="row noScroll">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3" id="logoLocation">
              <a href="#" style="width: 200px;" >
                <img class="mx-auto" src="./Assets/Images/Logo.png" alt="Logo Muevete en casa" width="150px">
              </a>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3">
              <h5>MueveteEnCasa.com</h5>
              <ul class="footerList">
                <li><a href="../acercaDeNosotros/aboutUs.html">Meditación</a></li>
                <li><a href="../Contactanos/contactenos.html">Rutinas</a></li>
                <li><a href="../ListaProductos/ListaProductos.html">Recetas</a></li>
              </ul>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3">
              <h5>Redes Sociales</h5>
              <ul class="footerList">
                <li><a href="https://www.facebook.com/">Facebook</a></li>
                <li><a href="https://twitter.com/home">Twitter</a></li>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
              </ul>
            </div>
            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3">
              <h5>Mi Cuenta</h5>
              <ul class="footerList">
                <li><a href="../Perfil/perfil.html">Mi perfil</a></li>
                <li><a href="../pedidos/pedidos.html">Mis pedidos</a></li>
                <li><a href="../AgregarProducto/agregarProducto.html">Agregar un producto</a></li>
              </ul>
            </div>
          </div>
          <div class="row noScroll">
            <div class="col-12"><h6>Copyright © 2023, Lisset Reyes </h6></div>
          </div>
        </div>
    `;