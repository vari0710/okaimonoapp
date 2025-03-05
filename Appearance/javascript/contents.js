import{ deleteAction }from './fanction/fanction_contents.js'


const deleteButton = document.querySelector('button[name="delete"]');
deleteButton.addEventListener('click',deleteAction);


document.querySelector('button[name="cancel"]').addEventListener('click',
    () => {
        //deleteActionの処理を解除する
        deleteButton.removeEventListener('click',deleteAction);
        document.querySelector('button[name="Details"]').style.visibility = "visible";

    }
);



