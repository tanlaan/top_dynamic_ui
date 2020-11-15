let table = document.getElementsByTagName('TABLE')[0]
table.addEventListener('mouseover', () => {
  let tableData = document.getElementsByTagName('TBODY')
  for (let data of tableData) {
    data.style.visibility = 'visible'
    //data.style.display = 'block'
    data.style.opacity = '1'
  }
})
table.addEventListener('mouseleave', () => {
  let tableData = document.getElementsByTagName('TBODY')
  for (let data of tableData) {
    data.style.visibility = 'collapse'
    //data.style.display = 'none'
    data.style.opacity = '0'
  }
})
