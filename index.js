const button = document.querySelector('.button');

const input = document.querySelector('#inputOne');
let multiplay = -1

function createElement() {

  const newDivAdd = document.querySelector('.conteiner-list')

  if (newDivAdd.lastElementChild && newDivAdd.lastElementChild.firstElementChild.value === '') {
    return
  }

  const newLabelAdd = document.createElement('label')
  newLabelAdd.classList.add('label-box')

  const newInputAdd = document.createElement('input')
  newInputAdd.classList.add('input-wrapper')

  const newImgAdd = document.createElement('img')
  newImgAdd.classList.add('img-input-img')
  newImgAdd.src = "img/GroupCerkleCross.svg"

  newDivAdd.append(newLabelAdd)
  newLabelAdd.append(newInputAdd)
  newInputAdd.focus()
  newLabelAdd.append(newImgAdd)

  newImgAdd.addEventListener('mouseover', (event) => {
    event.target.src = "img/GroupBlue.svg";
  });

  newImgAdd.addEventListener('mouseout', (event) => {
    event.target.src = 'img/GroupCerkleCross.svg';
  });

  newImgAdd.addEventListener('click', (event) => {
    event.target.parentElement.remove()
  })
}

const imgSort = document.querySelector('#img-arrou')

imgSort.addEventListener('mouseover', (event) => {
  if (multiplay === -1) {
    event.target.src = "img/Group1Active.svg"
  } else if (multiplay === 1) {
    event.target.src = "img/Group2Active.svg"
  }
})

imgSort.addEventListener('mouseout', (event) => {
  if (multiplay === -1) {
    event.target.src = "img/Group1.svg"
  } else if (multiplay === 1) {
    event.target.src = "img/Group2.svg"
  }
})

function render(arr, needNewLine) {
  const divClear = document.querySelector('.conteiner-list');
  divClear.innerHTML = '';
  arr.forEach((element) => {
    divClear.append(element);
  });
  if (needNewLine) {
    createElement()
  }
}

imgSort.addEventListener('click', (event) => {
  if (multiplay === -1) {
    event.target.src = "img/Group2Active.svg"
  } else if (multiplay === 1) {
    event.target.src = "img/Group1Active.svg"
  }

  let needEmptyLine = false
  const arraySortElement = [];
  const getInputAll = document.querySelectorAll('.label-box')
  getInputAll.forEach((element) => {
    arraySortElement.push(element)
  })

  if (arraySortElement[arraySortElement.length - 1].firstElementChild.value === '') {
    arraySortElement.pop()
    needEmptyLine = true
  }

  arraySortElement.sort((lb1, lb2) => {
    const nameFromLb1 = lb1.firstElementChild.value
    const nameFromLb2 = lb2.firstElementChild.value
    const localCompareResult = nameFromLb1.localeCompare(nameFromLb2) * multiplay * -1;
    return localCompareResult;
  })

  render(arraySortElement, needEmptyLine)
  multiplay *= -1
})

button.addEventListener('click', () => {
  createElement()
})

createElement()

