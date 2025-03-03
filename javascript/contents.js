function deleteAction(){
    console.log('a');
}

const deleteButton = document.querySelector('button[name="delete"]');
deleteButton.addEventListener('click',deleteAction);


document.querySelector('button[name="cancel"]').addEventListener('click',
    () => {
        //deleteActionの処理を解除する
        deleteButton.removeEventListener('click',deleteAction);
    }
);



