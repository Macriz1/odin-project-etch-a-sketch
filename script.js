let parentDiv = document.querySelector('.container');
let button = document.querySelector('.button')
let setRandColor = document.querySelector('.randColor');


// function to create random colors for grid
    function randColor(){
        const colors = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

        return colors;
    }





// function too create a 16 x 16 grid

function createDiv(gridSize){

    // divide total gridSize by 500 too give proper alignment

    let test = 500/gridSize + 'px';


    for(i = 0; i < gridSize; i++){
        let columns = document.createElement('div');
        columns.classList.add('column');
        for(let j = 1; j <= gridSize; j++){
            let rows = document.createElement('div');
            rows.classList.add('row')
            rows.style.border = '1px solid black';
            rows.style.width = test;
            rows.style.height = test;
            columns.appendChild(rows);

            const hoverDivs = [...document.querySelectorAll('.row')];

            // default background-color state
            
            let colorChange = false;
    
            hoverDivs.forEach(hoverDiv =>{
                hoverDiv.addEventListener('mousedown', ()=>{
                    
                    hoverDiv.style.backgroundColor = 'black';
                    colorChange = true;
                }) 

                hoverDiv.addEventListener('mouseup', ()=>{
                    colorChange = false;
                })

                hoverDiv.addEventListener('mouseover', ()=>{
                    if(colorChange){
                        hoverDiv.style.backgroundColor = 'black';
                    }
                })
            })
            
            // random color state

            setRandColor.addEventListener('click', ()=>{

                colorChange = false;
    
                hoverDivs.forEach(hoverDiv =>{
                    hoverDiv.addEventListener('mousedown', ()=>{
                        hoverDiv.style.backgroundColor = randColor();
                        colorChange = true;
                    }) 
    
                    hoverDiv.addEventListener('mouseup', ()=>{
                        colorChange = false;
                    })
    
                    hoverDiv.addEventListener('mouseover', ()=>{
                        if(colorChange){
                        hoverDiv.style.backgroundColor = randColor();
                        }
                    })
                })
            })

         

        parentDiv.appendChild(columns);
        
    
    }

   


    }

}


// generate gridSize according to users input

let gridSize = 16;
createDiv(gridSize);


button.addEventListener('click', () =>{
    gridSize = prompt('input grid size', '1-100');
    if(gridSize > 0 && gridSize <= 100){
        parentDiv.textContent = '';
        createDiv(gridSize);
    }else if(gridSize > 100){
        alert('grid size is greater than 100');
    }else if (gridSize < 1){
        alert('grid size is lower than 1');
    }else{
        alert('this is not a number');
    }

})      











