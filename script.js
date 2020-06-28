const selectionButtons = document.querySelectorAll('[data-selection]')
//give the referance of computer grid
const finalColoumn = document.querySelector('[data-coloumn]')

const computerScore = document.querySelector('[data-computer-score]')
const userScore = document.querySelector('[data-your-score]')
const  possibleSelection = [
    {
        name:'Rock',
        emoji:'✊',
        beates:'Scissors'
    },
    {
        name:'Paper',
        emoji:'🖐️',
        beates:'Rock'
    },
    {
        name:'Scissors',
        emoji:'✌️',
        beates:'Paper'
    }
]
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e =>{
        const selectionName = selectionButton.dataset.selection
        const selection = possibleSelection.find(selection => selection.name === selectionName)
        
        //makeSelection(selectionName)
        makeSelection(selection)
    })
})
function makeSelection(selection)
{
   // console.log(computersSelection())
   const computer = computersSelection()
   const userWinner = isWinner(selection,computer);
   const computerWinner = isWinner(computer,selection);

   //adding computer selection first so that we can see computer result first 
   // the latest selection will be shown at the top which will be done by data-coloumn
   addSelectionResult(computer,computerWinner)
    addSelectionResult(selection,userWinner)
    
    if(userWinner) incrementScore(userScore)
    if(computerWinner) incrementScore(computerScore)
    //console.log(selection)
}


//incrimenting scores
function incrementScore(score)
{
    score.innerText = parseInt(score.innerText)+1
}
function addSelectionResult(selection,winner)
{
    //creating dom
    const div =document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('selection')
    if(winner) div.classList.add('winner')

    finalColoumn.after(div)
}

function isWinner(selection , opponent){
    return selection.beates === opponent.name;
}

function computersSelection()
{
    const randomIndex = Math.floor(Math.random()*possibleSelection.length)
    return possibleSelection[randomIndex]
}

