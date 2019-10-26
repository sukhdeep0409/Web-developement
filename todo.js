/**
var h = document.createElement('h1');
var myValue = document.createTextNode('Hello World !')
h.appendChild(myValue)

// to show it on web page
document.querySelector('h1').appendChild(h);         */


var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);


function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if(item === ''){
        alert('Enter your todo task');
        return false;
    }
    else{
        li = document.createElement('li');          
         //li created
        var checkBox = document.createElement('input');             
        checkBox.type = 'checkbox';
        checkBox.setAttribute('id', 'check');
        //checkbox created
        var label = document.createElement('label');
        label.setAttribute('for', 'item');        //optional

        //adding elements in web page

        ul.appendChild(label);
        li.appendChild(checkBox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual';
        }, 2);
        
        input.value = '';
    }
}

function removeItem(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}
