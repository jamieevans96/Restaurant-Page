function contactTab() {
    var temp = document.getElementById("content");
    while (temp.hasChildNodes()) {
        temp.removeChild(temp.firstChild);
    }

    let labelArr = ['Name', 'Email', 'Subject', 'Message'];

    var contactContent = document.createElement('div');
    var title = document.createElement('h2');
    var formContainer = document.createElement('div');

    title.innerHTML = 'Contact';

    var content = document.querySelector("#content");

    content.appendChild(contactContent);
    contactContent.append(title, formContainer);

    for (var i = 0; i < 4; i++) {
        var inp = document.createElement('div');
        var label = document.createElement('label');
        var input = document.createElement('input');
        var textarea = document.createElement('textarea');

        inp.classList.add('inp');
        label.innerHTML = labelArr[i] + ':';

        formContainer.appendChild(inp);
        inp.appendChild(label);

        if (i == 3) {
            textarea.setAttribute('placeholder', labelArr[i] + '...')
            textarea.classList.add('message');
            inp.appendChild(textarea);
        }
        else {
            input.setAttribute('placeholder', labelArr[i] + '...')
            inp.appendChild(input);
        }
       
    }

    contactContent.classList.add('contactContent');
}

export default contactTab