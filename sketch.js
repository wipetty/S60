// Copyright (c) 2019 ml5
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


const inputImg1 = document.getElementById('inputImg1');
const inputImg2 = document.getElementById('inputImg2');
const inputImg3 = document.getElementById('inputImg3');
const inputImg4 = document.getElementById('inputImg4');
const inputImg5 = document.getElementById('inputImg5');
const inputImg6 = document.getElementById('inputImg6');
const inputImg7 = document.getElementById('inputImg7');
const inputImg8 = document.getElementById('inputImg8');


const Style1 = document.getElementById('Style1');
const Style2 = document.getElementById('Style2');

const statusMsg = document.getElementById('statusMsg');


let selection = document.getElementById('selection-type');
let styleSelection = selection.value;


let modelSelection, differentStyleSelection1, differentStyleSelection2, differentStyleSelection3,
differentStyleSelection4, differentStyleSelection5, differentStyleSelection6, differentStyleSelection7, differentStyleSelection8;

document.getElementById("selection-type").addEventListener("input", function (event) {
    styleSelection = document.getElementById('selection-type').value;

    if (styleSelection =="same"){
        let x = document.getElementById("sameStyleSelector")
        x.style.visibility = "visible";
        let y = document.getElementById("note")
        y.style.visibility = "hidden";

        let styleSelector1 = document.getElementById('differentStyleSelector1')
        styleSelector1.style.visibility = "hidden";

        let styleSelector2 = document.getElementById('differentStyleSelector2')
        styleSelector2.style.visibility = "hidden";

        let styleSelector3 = document.getElementById('differentStyleSelector3')
        styleSelector3.style.visibility = "hidden";

        let styleSelector4 = document.getElementById('differentStyleSelector4')
        styleSelector4.style.visibility = "hidden";

        let styleSelector5 = document.getElementById('differentStyleSelector5')
        styleSelector5.style.visibility = "hidden";

        let styleSelector6 = document.getElementById('differentStyleSelector6')
        styleSelector6.style.visibility = "hidden";

        let styleSelector7 = document.getElementById('differentStyleSelector7')
        styleSelector7.style.visibility = "hidden";

        let styleSelector8 = document.getElementById('differentStyleSelector8')
        styleSelector8.style.visibility = "hidden";



    }else{
        let x = document.getElementById("sameStyleSelector")
        x.style.visibility = "hidden";
        let y = document.getElementById("note")
        y.style.visibility = "visible";

        let styleSelector1 = document.getElementById('differentStyleSelector1')
        styleSelector1.style.visibility = "visible";

        let styleSelector2 = document.getElementById('differentStyleSelector2')
        styleSelector2.style.visibility = "visible";

        let styleSelector3 = document.getElementById('differentStyleSelector3')
        styleSelector3.style.visibility = "visible";

        let styleSelector4 = document.getElementById('differentStyleSelector4')
        styleSelector4.style.visibility = "visible";

        let styleSelector5 = document.getElementById('differentStyleSelector5')
        styleSelector5.style.visibility = "visible";

        let styleSelector6 = document.getElementById('differentStyleSelector6')
        styleSelector6.style.visibility = "visible";

        let styleSelector7 = document.getElementById('differentStyleSelector7')
        styleSelector7.style.visibility = "visible";

        let styleSelector8 = document.getElementById('differentStyleSelector8')
        styleSelector8.style.visibility = "visible";

    }

});


document.getElementById("button").addEventListener("click", function (event) {
    styleSelection = document.getElementById('selection-type').value;

    statusMsg.innerHTML = 'Status: Loading Models...';

    if (styleSelection == 'same'){
        modelSelection = document.getElementById('model-type').value;

            statusMsg.innerHTML = 'Status: Loading Models...';

            if( $('#Style1').is(':empty') ) {

                sameStyle();
            }
            else{
                let list1 = document.getElementById("Style1");
                list1.removeChild(list1.lastChild);
                let list2 = document.getElementById("Style2");
                list2.removeChild(list2.lastChild);
                let list3 = document.getElementById("Style3");
                list3.removeChild(list3.lastChild);
                let list4 = document.getElementById("Style4");
                list4.removeChild(list4.lastChild);
                let list5 = document.getElementById("Style5");
                list5.removeChild(list5.lastChild);
                let list6 = document.getElementById("Style6");
                list6.removeChild(list6.lastChild);
                let list7 = document.getElementById("Style7");
                list7.removeChild(list7.lastChild);
                let list8 = document.getElementById("Style8");
                list8.removeChild(list8.lastChild);
                sameStyle();
            }

        }
    else if (styleSelection == 'different'){
        differentStyleSelection1 = document.getElementById('model-type1').value;
        differentStyleSelection2 = document.getElementById('model-type2').value;
        differentStyleSelection3 = document.getElementById('model-type3').value;
        differentStyleSelection4 = document.getElementById('model-type4').value;
        differentStyleSelection5 = document.getElementById('model-type5').value;
        differentStyleSelection6 = document.getElementById('model-type6').value;
        differentStyleSelection7 = document.getElementById('model-type7').value;
        differentStyleSelection8 = document.getElementById('model-type8').value;
        console.log(differentStyleSelection1)

        statusMsg.innerHTML = 'Status: Loading Models...';

        if( $('#Style1').is(':empty') ) {
            differentStyle();
        }
        else{
            let list1 = document.getElementById("Style1");
            list1.removeChild(list1.lastChild);
            let list2 = document.getElementById("Style2");
            list2.removeChild(list2.lastChild);
            let list3 = document.getElementById("Style3");
            list3.removeChild(list3.lastChild);
            let list4 = document.getElementById("Style4");
            list4.removeChild(list4.lastChild);
            let list5 = document.getElementById("Style5");
            list5.removeChild(list5.lastChild);
            let list6 = document.getElementById("Style6");
            list6.removeChild(list6.lastChild);
            let list7 = document.getElementById("Style7");
            list7.removeChild(list7.lastChild);
            let list8 = document.getElementById("Style8");
            list8.removeChild(list8.lastChild);
            differentStyle();
        }

    }


});



function differentStyle(){
    ml5.styleTransfer('models/'+ differentStyleSelection1)
        .then(style1 => style1.transfer(inputImg1))
        .then(result => {
            const newImage1 = new Image;
            newImage1.src = result.src;
            Style1.appendChild(newImage1);
        });

    ml5.styleTransfer('models/'+ differentStyleSelection2)
        .then(style2 => style2.transfer(inputImg2))
        .then(result => {
            const newImage2 = new Image;
            newImage2.src = result.src;
            Style2.appendChild(newImage2);
        });

    ml5.styleTransfer('models/'+ differentStyleSelection3)
        .then(style3 => style3.transfer(inputImg3))
        .then(result => {
            const newImage3 = new Image;
            newImage3.src = result.src;
            Style3.appendChild(newImage3);
        });

    ml5.styleTransfer('models/'+ differentStyleSelection4)
        .then(style4 => style4.transfer(inputImg4))
        .then(result => {
            const newImage4 = new Image;
            newImage4.src = result.src;
            Style4.appendChild(newImage4);
        });

    ml5.styleTransfer('models/'+ differentStyleSelection5)
        .then(style5 => style5.transfer(inputImg5))
        .then(result => {
            const newImage5 = new Image;
            newImage5.src = result.src;
            Style5.appendChild(newImage5);
        });

    ml5.styleTransfer('models/'+ differentStyleSelection6)
        .then(style6 => style6.transfer(inputImg6))
        .then(result => {
            const newImage6 = new Image;
            newImage6.src = result.src;
            Style6.appendChild(newImage6);
        });

    ml5.styleTransfer('models/'+ differentStyleSelection7)
        .then(style7 => style7.transfer(inputImg7))
        .then(result => {
            const newImage7 = new Image;
            newImage7.src = result.src;
            Style7.appendChild(newImage7);
        });

    ml5.styleTransfer('models/'+ differentStyleSelection8)
        .then(style8 => style8.transfer(inputImg8))
        .then(result => {
            const newImage8 = new Image;
            newImage8.src = result.src;
            Style8.appendChild(newImage8);
            statusMsg.innerHTML = 'Status: Done!';
        });

}

function sameStyle(){

    ml5.styleTransfer('models/'+ modelSelection)
        .then(style1 => style1.transfer(inputImg1))
        .then(result => {
            const newImage1 = new Image;
            newImage1.src = result.src;
            Style1.appendChild(newImage1);
        });

    ml5.styleTransfer('models/'+ modelSelection)
        .then(style2 => style2.transfer(inputImg2))
        .then(result => {
            const newImage2 = new Image;
            newImage2.src = result.src;
            Style2.appendChild(newImage2);
        });

    ml5.styleTransfer('models/'+ modelSelection)
        .then(style3 => style3.transfer(inputImg3))
        .then(result => {
            const newImage3 = new Image;
            newImage3.src = result.src;
            Style3.appendChild(newImage3);
        });

    ml5.styleTransfer('models/'+ modelSelection)
        .then(style4 => style4.transfer(inputImg4))
        .then(result => {
            const newImage4 = new Image;
            newImage4.src = result.src;
            Style4.appendChild(newImage4);
        });

    ml5.styleTransfer('models/'+ modelSelection)
        .then(style5 => style5.transfer(inputImg5))
        .then(result => {
            const newImage5 = new Image;
            newImage5.src = result.src;
            Style5.appendChild(newImage5);
        });

    ml5.styleTransfer('models/'+ modelSelection)
        .then(style6 => style6.transfer(inputImg6))
        .then(result => {
            const newImage6 = new Image;
            newImage6.src = result.src;
            Style6.appendChild(newImage6);
        });

    ml5.styleTransfer('models/'+ modelSelection)
        .then(style7 => style7.transfer(inputImg7))
        .then(result => {
            const newImage7 = new Image;
            newImage7.src = result.src;
            Style7.appendChild(newImage7);
        });

    ml5.styleTransfer('models/'+ modelSelection)
        .then(style8 => style8.transfer(inputImg8))
        .then(result => {
            const newImage8 = new Image;
            newImage8.src = result.src;
            Style8.appendChild(newImage8);
            statusMsg.innerHTML = 'Status: Done!';
        });
}

