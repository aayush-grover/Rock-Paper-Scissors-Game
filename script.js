const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColoumn = document.querySelectorAll('[]')
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
   // the latest selection will be shown at the top
   addSelectionResult(computer,computerWinner)
    addSelectionResult(selection,userWinner)
    
    //console.log(selection)
}

function addSelectionResult(selection,winner)
{
    
}

function isWinner(selection , opponent){
    return selection.beates === opponent.name;
}

function computersSelection()
{
    const randomIndex = Math.floor(Math.random()*possibleSelection.length)
    return possibleSelection[randomIndex]
}