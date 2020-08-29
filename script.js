const table = document.createElement('h1');
const mainHeader = document.getElementsByTagName('h1');

const headerText = 'Table of Contents';
table.innerHTML = headerText;

document.getElementById('table-of-contents').appendChild(table);

const ul = document.createElement('ul');
document.getElementById('table-of-contents').appendChild(ul);

const headings = document.getElementsByClassName('heading');

for (var i = 0; i < headings.length; i++) {
    const li = document.createElement('li');
    li.innerText = headings[i].innerText;
    ul.appendChild(li);
}
