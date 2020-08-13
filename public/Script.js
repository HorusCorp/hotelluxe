    const menuTrigger = document.getElementById("menuTrigger");
    const menuItems = document.getElementById("menuItems");

    menuTrigger.addEventListener('click', () => {
    menuTrigger.classList.toggle('active');
    menuItems.classList.toggle('active');
    })