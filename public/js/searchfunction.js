function searchFunc() {
    const $entrySearch = document.getElementById('search').value.toLowerCase();

    for (const category in labelFamily) {
        for (const subcat in labelFamily[category] ) {
            for (let i = 0; i < labelFamily[category][subcat].length; i++) {
                if (labelFamily[category][subcat][i].toLowerCase().search($entrySearch) >= 0 ) {
                    if (confirm(`category: ${category}  -  subcategory ${subcat}`) == true) {
                        break;
                    } else {
                        document.getElementById('search').value = ''
                        return;
                    }
                }
            }
        }
    }
    document.getElementById('search').value = ''
}