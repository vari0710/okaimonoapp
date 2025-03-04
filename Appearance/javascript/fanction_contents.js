export function detailsAction(){
    const width = 300;
    const height = 300;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    const option = `width=${width}, height=${height}, left=${left}, top=${top}`;
    let newWin = open('../HamburgerMenu.js/html/menu.html','mywindow',option)
}

export function deleteAction(){
    document.querySelector('button[name="Details"]').style.visibility = 'hidden';
    let option = 'width = 300, height = 300, left = 200, top = 200';
    let newWin = open('../ deleateButton/html/deleteIndex.html','mywindow', option);
}