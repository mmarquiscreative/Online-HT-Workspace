function supportsImports() {
  return 'import' in document.createElement('link');
}

if (supportsImports()) {
  // Good to go!
} else {
  // Use other libraries/require systems to load files.
}

var content = document.querySelector('link[rel="import"]').import;
console.log(content);
console.log(content.querySelector("#prog__bubble").outerHTML);

var progBubble = content.querySelector('#prog__bubble').outerHTML;

var prog = function(num){
    var tempString = progBubble;
    for(i =0; i <= (num - 2); i++){
        tempString = tempString + progBubble;}
    return tempString;
}

document.querySelector('#prog-bar').innerHTML = prog(4);

var stageController = (function(){
    
    
    
})();


var UIController = (function(){
    
    var DOMstrings = {
        stageContainer: '#stage__container'
    }
    
    /* Stage Object Contructor */
    function ImportObj(importString, importNum){
        this.importString = importString,
        this.importHTML = content.querySelector(importString).outerHTML,
        this.stageNext = importNum;
        
    }
    
    /* Button Object Constructor */
    function ButtonObj(name, btnString){
        this.name = name;
        this.btnString = btnString;
    }
    
    /* all html objects from imported html sheet */
    var importObjects = {
        stageObjects: {
            stage1: new ImportObj('#stage1', '2__1', 'start'),
            stage2__1: new ImportObj('#stage2__1', '2__2', 'stage2__1__Yes'),
            stage2__2: new ImportObj('#stage2__2', '2__3'),
            stage2__3: new ImportObj('#stage2__3', '2__4'),
            stage2__4: new ImportObj('#stage2__4', '2__5'),
            stage2__5: new ImportObj('#stage2__5', '3__1'), 
            stage3__1: new ImportObj('#stage3__1', '3__2'),
            stage3__2: new ImportObj('#stage3__2', undefined)
        },
        crossStageObjects: {
            progBar: new ImportObj('#prog__bubble', undefined)
        },
        buttonObj: {
            start: new ButtonObj('Start', '.startBtn'),
            yes: new ButtonObj('Yes', '.yesBtn'),
            no: new ButtonObj('No', '.noBtn'),
            play: new ButtonObj('Play', '.playBtn')
            
        }
        
    }

    
    return {
        importObjects: importObjects,
        DOMstrings: DOMstrings
    }
})();


var appController = (function(stageCtrl, UICtrl){
   var curObj = UICtrl.importObjects.stageObjects.stage2__2;
    function buttonListeners(target, whatFunction){
        document.querySelector(target).addEventListener(onclick, whatFunction);
    };
    
    function addEventListenersBtns(){
        document.querySelector(UICtrl.importObjects.buttonObj.no.btnString).addEventListener(onclick, nextStage)
        
        console.log('addEventListenersBtns run:')
        
        };
 
    
    function nextStage(){
 document.querySelector(UICtrl.DOMstrings.stageContainer).innerHTML = curObj.importHTML;
                   curObj = UICtrl.importObjects.stageObjects['stage' + curObj.stageNext];
       
        console.log('next stage run');
        
        addEventListenersBtns();
   } 
    nextStage();
    addEventListenersBtns();

    
})(stageController, UIController);

