function homeTab() {
    var temp = document.getElementById("content");
    while (temp.hasChildNodes()) {
        temp.removeChild(temp.firstChild);
    }
    
    var homeContent = document.createElement('div');
    var title = document.createElement('h2');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');

    title.innerHTML = 'Home';
    p1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    p2.innerHTML = '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."'
    p3.innerHTML = '"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'

    var content = document.querySelector("#content");

    content.appendChild(homeContent);
    homeContent.append(title, p1, p2, p3);

    homeContent.classList.add('homeContent');
    p2.style.fontStyle = 'italic';
    p3.style.fontStyle = 'italic';
}

export default homeTab