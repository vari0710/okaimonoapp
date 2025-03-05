export function detailsAction(){
    const width = 300;
    const height = 300;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    const option = `width=${width}, height=${height}, left=${left}, top=${top}`;
    let newWin = open('../../../HamburgerMenu/menu/html/menu.html','mywindow',option)
}

export function deleteAction(){
    document.querySelector('button[name="Details"]').style.visibility = 'hidden';
    const width = 300;
    const height = 300;
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    const option = `width=${width}, height=${height}, left=${left}, top=${top}`;
    let newWin = open('../../../delete_Button/html/deleteIndex.html','mywindow', option);
}