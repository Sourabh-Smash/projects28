const search = () => {
  const searchBox = document.getElementById('search-bar').value.toUpperCase();
  const storedItem = document.getElementById('product-list');
  const product = document.querySelectorAll('.product');
  const pname = storedItem.getElementsByTagName('h2');
  // console.log(pname)

  for (i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName('h2')[0];
    // console.log(match);
    if (match) {
      let textVal = match.textContent || match.innerHTML;
      // console.log(textVal)
      if (textVal.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = '';
      } else {
        product[i].style.display = 'none';
        // const item= document.createElement('div');
        // item.innerHTML=`<h2> Search Item not found</h2>`;
        // storedItem.appendChild(item);
        // break
      }
    }
  }
};
