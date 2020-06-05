function menuTab() {
    var temp = document.getElementById("content");
    while (temp.hasChildNodes()) {
        temp.removeChild(temp.firstChild);
    }

    let foodArr = ['Burger', 'Pizza', 'Pie', 'Fish', 'Noodles', 'Rice'];

    var menuContent = document.createElement('div');
    var title = document.createElement('h2');
    var menuContainer = document.createElement('div');

    title.innerHTML = 'Menu';

    var content = document.querySelector("#content");

    content.appendChild(menuContent);
    menuContent.append(title, menuContainer);

    for (var i = 0; i < 6; i++) {
        var menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');
        menuItem.innerHTML = foodArr[i];
        menuContainer.appendChild(menuItem);
    }

    menuContainer.classList.add('menuContainer');
    menuContent.classList.add('menuContent');
}

export default menuTab