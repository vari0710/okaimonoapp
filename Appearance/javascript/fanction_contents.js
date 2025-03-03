// function createButton{

// }

export function deleteAction(){
    document.querySelector('button[name="Details"]').style.visibility = 'hidden';
    let option = 'width = 300, height = 300, left = 200, top = 200';
    let newWin = open('../ deleateButton/html/deleteIndex.html','mywindow', option);
}