const search = document.getElementById('search');
const books = document.getElementsByClassName('text');
const divBooks = document.getElementsByClassName('books');



const formAddBook = document.getElementsByClassName('add-books');



Array.from(formAddBook).forEach(function(add){
    add.addEventListener('submit', function(e){
        e.preventDefault();
        const inputs = add.getElementsByClassName('for-add');
        const errors = add.getElementsByClassName('error');
        Array.from(inputs).forEach(function(input){
        Array.from(errors).forEach(function(error){
            const value = input.value;
            if(value == ''){
                error.textContent = 'Input the field please';
            }/* end of if statement*/ else{
                error.textContent = '';
                const parent = input.parentElement.parentElement.getElementsByTagName('div')[0];
                const li = document.createElement('li');
                li.className = 'list';
                
                const p = document.createElement('p');
                p.textContent = input.value;
                p.classList.add('text');

                const delButton = document.createElement('button');
                delButton.appendChild(document.createTextNode('Delete'));
                delButton.type = 'button';
                console.log(delButton);
                delButton.className = 'delete';


                li.appendChild(p);
                li.appendChild(delButton);
                parent.appendChild(li);


                input.value = '';
                
            }
        })// end of errors array
        }) //end of array from Inputs
    }); //end of submit event listener
}); //end of formAddBook




search.addEventListener('keyup',function(e){
    const text = e.target.value.toLowerCase();
    Array.from(books).forEach(function(book){
        const bookName = book.textContent;
        if(bookName.toLowerCase().indexOf(text) == -1){
            book.style.display = 'none';
        }else{
            book.style.display = '';
        };
    })
    Array.from(delBtn).forEach(function(btn){
        const previous = btn.previousElementSibling;
        if(previous.style.display == 'none'){
            btn.style.display = 'none';
        }else{
            btn.style.display = '';
        }
    })
});



const delBtn = document.getElementsByClassName('delete');
const booksDel = document.getElementsByClassName('list');



Array.from(divBooks).forEach(function(book){
    book.addEventListener('click', function(e){
        if(e.target.className == 'delete'){
            if(confirm('Are you sure?')){
                e.target.parentElement.style.display = 'none';
            }else{
                e.target.parentElement.style.display = 'block';
            }
        }
    });// end of click event
}); // end of for each array


