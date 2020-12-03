debug_mode = true;

// receive poem input
document.getElementById("poem-text").addEventListener("input", function (event) {
    poemText = document.getElementById('poem-text').value;
    if (poemText.slice(-1) == '\n'){
        generatePoemImage(poemText);
        document.getElementById("poem-text").value ='';
    }
})

// find image block on page
const poemImgBlock = document.getElementById('poem-images');

// status of style transfer
const statusMsg = document.getElementById('statusMsg');

// whether to apply style to all or individually
let selection = document.getElementById('selection-type');

let styleSelection;
let modelSelection;
let differentStyleSelection;

let note = document.getElementById("note")

let id = 1;

// visual modifications
document.getElementById("selection-type").addEventListener("input", function (event) {

    styleSelection = document.getElementById('selection-type').value.slice(0,4);

    if (styleSelection == "same"){
        note.style.visibility = "hidden";
        for (let i=1; i<id; i++) {
            let styleSelector = document.getElementById('differentStyleSelector'+i.toString());
            styleSelector.style.visibility = "hidden";
        }

    } else{
        note.style.visibility = "visible";
        for (let i=1; i<id; i++) {
            let styleSelector = document.getElementById('differentStyleSelector'+i.toString());
            styleSelector.style.visibility = "visible";
        }
    }

});

// start style transfer
document.getElementById("button").addEventListener("click", function (event) {
    styleSelection = document.getElementById('selection-type').value.slice(0,4);

    //statusMsg.innerHTML = 'Loading Models...';

    if (styleSelection == 'same'){
        modelSelection = document.getElementById('selection-type').value.slice(5);

        //statusMsg.innerHTML = 'Loading Models...';

        sameStyle();

        }
    else if (styleSelection == 'different'){

        //statusMsg.innerHTML = 'Loading Models...';

        differentStyle();

    }


});

function generatePoemImage(poemText){
    if (debug_mode) {
        
        let formHTML = '<form class="form-inline" id="differentStyleSelector'+id+'" style="visibility: hidden;"><div class="form-group"><select class="form-control" id="model-type'+id+'"><option value="udnie">Udnie</option><option value="wave">Wave</option><option value="fuchun">Fuchun</option><option value="la_muse">La Muse</option><option value="rain_princess">Rain Princess</option><option value="mathura">Mathura</option><option value="scream">Scream</option><option value="wreck">Wreck</option></select></div></form>'
        poemImgBlock.innerHTML+="<div class='polaroid' polaroid-caption='"+poemText+"'><img src='data:image/jpeg;base64,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' id='inputImg"+id+"'></div>";
        poemImgBlock.innerHTML+= formHTML;
        id ++;
    }
    else {
        const inputs = {
            "caption": poemText
        };
        
        fetch('http://localhost:8000/query', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs)
        })
            .then(response => response.json())
            .then(outputs => {
            const { result } = outputs;
            console.log(outputs.result);
            newImage(outputs, poemText)
            })
    }
}

function newImage(outputs, poemText) {
    if (outputs && outputs.result) {
        let formHTML = '<form class="form-inline" id="differentStyleSelector'+id+'" style="visibility: hidden;"><div class="form-group"><select class="form-control" id="model-type'+id+'"><option value="udnie">Udnie</option><option value="wave">Wave</option><option value="fuchun">Fuchun</option><option value="la_muse">La Muse</option><option value="rain_princess">Rain Princess</option><option value="mathura">Mathura</option><option value="scream">Scream</option><option value="wreck">Wreck</option></select></div></form>'
        poemImgBlock.innerHTML+="<div class='polaroid' polaroid-caption='"+poemText+"'><img src='"+outputs.result+"' id='inputImg"+id+"'></div>";
        poemImgBlock.innerHTML+= formHTML;
        id ++;
    }
}

function differentStyle(){

    for (let i=1; i<id; i++){
        let inputImg = document.getElementById('inputImg'+i.toString());
        differentStyleSelection = document.getElementById('model-type'+i.toString()).value;

        ml5.styleTransfer('models/'+ differentStyleSelection)
        .then(style1 => style1.transfer(inputImg))
        .then(result => {
            let newImage = new Image;
            newImage.src = result.src;
            inputImg.src = newImage.src;
        });
    }
    
    //statusMsg.innerHTML = 'Done!';
}

function sameStyle(){

    for (let i=1; i<id; i++){
        let inputImg = document.getElementById('inputImg'+i.toString());
        ml5.styleTransfer('models/'+ modelSelection)
        .then(style => style.transfer(inputImg))
        .then(result => {
            let newImage = new Image;
            newImage.src = result.src;
            inputImg.src = newImage.src;
        });
    }
    //statusMsg.innerHTML = 'Images stylized!'
}

