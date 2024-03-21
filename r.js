const container = document.querySelector('.container')
const page_01 = document.querySelector('.page01')
const page_02 = document.querySelector('.page02')
const page_03 = document.querySelector('.page03')

const next01btn = document.getElementById('next01')
const prev01btn = document.getElementById('prev01')
const next02btn = document.getElementById('next02')
const prev02btn = document.getElementById('prev02')

next01btn.onclick = () => {
  container.classList.add('active')
  page_01.classList.add('active')
  page_02.classList.add('active')
}

prev01btn.onclick = () => {
  container.classList.remove('active')
  page_01.classList.remove('active')
  page_02.classList.remove('active')
}

next02btn.onclick = () => {
  container.classList.add('a')
  page_02.classList.add('a')
  page_03.classList.add('active')
}

prev02btn.onclick = () => {
  container.classList.remove('a')
  page_02.classList.remove('a')
  page_03.classList.remove('active')
}