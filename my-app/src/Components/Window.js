import React,{ useState }  from 'react'

export default function Window() {

const [counter, setCounter] = useState(0)
    
    function qoshuv(){
        setCounter(counter +1);
    }

    function ayiruv(){
       setCounter(counter -1);
        console.log(qoshuv)
    }

    return (

        <div>
            <h1  >{counter}</h1>
            <button style={{color:'red'}} onClick={ayiruv}>Ayiruv</button>
            <button style={{color:'green'}} onClick={qoshuv}>Qo'shuv</button>
        </div>

    )
}
