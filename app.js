
   function useState(initialVal) {
        let state = initialVal ; 
    
        function returnState(){
            return state
        }
        function setState(newVal){
            if (newVal !== state){
                state = newVal
                render(state)
            }
        }
        return [returnState, setState]
    }



    function Component(newState){
 
        const defaultState = 0;
        const [state, setState] = useState(newState || defaultState)
    
        const button = document.querySelector('button')
        const p = document.querySelector('p')
    
       
        function handleClick(e){ 
            setState(state() + 1)
            button.removeEventListener('click', handleClick)
        }
     
    button.addEventListener('click', handleClick)
 
        return(
            {JSXelement: {
                reference: p,
                content: state
            }}
        )

    }    


    function render(newState){
        const DOMTree = Component(newState)
        DOMTree.JSXelement.reference.innerHTML = DOMTree.JSXelement.content()
    }

   render()





