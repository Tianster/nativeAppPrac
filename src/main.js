var navStandAlone = function standalone () {
  if (window.navigator.standalone === true) {
    // return 'NAVIGATOR IS WORKING!!!'
    document.querySelector('body').textContent = 'WORKING!!'
  } else {
    document.querySelector('body').textContent = 'NOT WORKING!!'
  }
}
navStandAlone()
