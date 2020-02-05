//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
document.querySelector('#dropdown-btn1').onclick = function(event){
  event.preventDefault();
  if(document.querySelector('#dropdown-container1').style.display == 'none'){
    document.querySelector('#dropdown-container1').style.display = 'block';
    document.querySelector('#arrow1').classList.remove('fa-caret-left');
    document.querySelector('#arrow1').classList.add('fa-caret-down');
  }else{
    document.querySelector('#dropdown-container1').style.display = 'none';
    document.querySelector('#arrow1').classList.remove('fa-caret-down');
    document.querySelector('#arrow1').classList.add('fa-caret-left');
    console.log(document.querySelector('#arrow1').classList);
  }
}
document.querySelector('#dropdown-btn2').onclick = function(event){
  event.preventDefault();
  if(document.querySelector('#dropdown-container2').style.display == 'none'){
    document.querySelector('#dropdown-container2').style.display = 'block';
    document.querySelector('#arrow2').classList.remove('fa-caret-left');
    document.querySelector('#arrow2').classList.add('fa-caret-down');
  }else{
    document.querySelector('#dropdown-container2').style.display = 'none';
    document.querySelector('#arrow2').classList.remove('fa-caret-down');
    document.querySelector('#arrow2').classList.add('fa-caret-left');
    console.log(document.querySelector('#arrow2').classList);
  }
}

document.querySelector('#dropdown-btn3').onclick = function(event){
  event.preventDefault();
  if(document.querySelector('#dropdown-container3').style.display == 'none'){
    document.querySelector('#dropdown-container3').style.display = 'block';
    document.querySelector('#arrow3').classList.remove('fa-caret-left');
    document.querySelector('#arrow3').classList.add('fa-caret-down');
  }else{
    document.querySelector('#dropdown-container3').style.display = 'none';
    document.querySelector('#arrow3').classList.remove('fa-caret-down');
    document.querySelector('#arrow3').classList.add('fa-caret-left');
    console.log(document.querySelector('#arrow3').classList);
  }
}


