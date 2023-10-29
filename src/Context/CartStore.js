import { createContext} from 'react';

export let CartContext = createContext("")


export default function CartProvider (props){

    // const [counter, setcounter] = useState(0)
    // const [Name , setName] = useState()
    let arr = []
    

    

    function increase (){
        localStorage.setItem('counter' , 1)
        // setcounter(localStorage.getItem('counter'))
    }


    function cardone (divone , price){
        arr.push (divone)
        console.log(arr);
        localStorage.setItem('backName' , divone ) 
        localStorage.setItem('backPrice' , price ) 
        return divone;
    }

    function delet(){
        localStorage.removeItem('backName' )
        localStorage.removeItem('backPrice' )
        localStorage.removeItem('counter' )
    }


        return <>
    <CartContext.Provider value={{ increase , cardone ,arr , delet}}>
        {props.children}
    </CartContext.Provider>
    
    </>
    


}



