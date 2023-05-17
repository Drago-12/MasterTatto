
const burger = document.getElementById('burger');
const list = document.getElementById('navigation');

const toggle = () => {
    list.classList.toggle('navigation-display');
}

burger.addEventListener('click', toggle);







// tab js

const boxShow = document.querySelectorAll('.course-detail');
const showItems = (index) => {
    for (i = 0; i < boxShow.length; i++) {
        boxShow[i].style.display = 'none';
    }
    const show = document.getElementById(index);
    show.style.display = 'flex'
}



// const Hide = () =>{
//     for(let  i = 1 ; i < boxShow.length ; i++ ){
//         boxShow[i].style.display = 'none';
//     }
// }

// Hide()



// for(i = 0 ; i < boxShow ; i++){
    //     const tabIndex  = tab1[i];
    //     const boxIndex  = boxShow[i];
    //     if(tab1[i] === boxShow[i]){
    //         event.style.display ='block'
    //     }else{
    //         event.style.display ='none'
    //     }
    // }







// const show = () =>{
// const boxShow = document.querySelectorAll('.course-detail');
//     const filterItems  = boxShow.filter(() =>{
//         return
//     })
// }


















// const tab1 = document.getElementById('tab1');
// const tab2 = document.getElementById('tab2')
// const tab3 = document.getElementById('tab3')
// const tab4 = document.getElementById('tab4')
// const tab5 = document.getElementById('tab5')
// const boxShow1 = document.querySelector('.course-box-show1')
// const boxShow2 = document.querySelector('.course-box-show2')
// const boxShow3 = document.querySelector('.course-box-show3')
// const boxShow4 = document.querySelector('.course-box-show4')
// const show = () =>{
//     boxShow4.style.display = 'block';
//     boxShow3.style.display = 'block';
//     boxShow2.style.display = 'block';
//     boxShow2.style.display = 'block';
// }
// tab1.addEventListener('click' ,show )
// tab5.addEventListener('click' ,show )
// const show1 = () =>{
//     boxShow4.style.display = 'none';
//     boxShow3.style.display = 'block';
//     boxShow2.style.display = 'block';
// }
// tab2.addEventListener('click' ,show1 )
// const show2 = () =>{
//     boxShow4.style.display = 'none';
//     boxShow3.style.display = 'none';
//     boxShow2.style.display = 'block';
// }
// tab3.addEventListener('click' ,show2 )
// const show3 = () =>{
//     boxShow4.style.display = 'none';
//     boxShow3.style.display = 'none';
//     boxShow2.style.display = 'none';
// }

// tab4.addEventListener('click' ,show3 )

