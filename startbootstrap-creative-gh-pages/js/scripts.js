/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }
    ;

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

        // Información de las computadoras
        const computers = {
        'Razer Blade 14': {
        image: 'assets/img/portfolio/thumbnails/1.jpg',
        description: 'Ideal para Gaming con alta potencia y rendimiento.',
        price: '$2,500'
    },
        'Laptop 2': {
        image: 'assets/img/portfolio/thumbnails/macbook.jpg',
        description: 'Perfecta para gaming y diseño gráfico.',
        price: '$1,800'
    },
        'Laptop 3': {
        image: 'assets/img/portfolio/thumbnails/3.jpg',
        description: 'Excelente rendimiento para negocios.',
        price: '$1,200'
    }
    };

        // Función para abrir el modal con los detalles de la computadora
        function openComputerModal(computerName) {
        const computer = computers[computerName];
        document.getElementById('modalTitle').innerText = computerName;
        document.getElementById('modalDescription').innerText = computer.description;
        document.getElementById('modalImage').src = computer.image;
        document.getElementById('modalPrice').innerText = computer.price;
        var modal = new bootstrap.Modal(document.getElementById('computerModal'));
        modal.show();
    }

        // Event listeners para los botones de comprar
        document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', function () {
            const computerName = this.getAttribute('data-computer');
            openComputerModal(computerName);
        });
    });

});
