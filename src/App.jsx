import { useCallback, useState ,useEffect, useRef} from 'react'

function App() {

  // Use states for the elements
    const [length , setLength] = useState(8);
    const [charallow , SetCharAllow] = useState(false);
    const [numberallow , SetNumberAllow] = useState(false);
    const [password , setPassword] = useState("")
    const [btntext , setbtntxt] =useState("copy");



// Password Generator Function
    const PasswordGenerator =  useCallback(() => {
      
      let pass = "";
      let textsource = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const numbersource = "0123456789";
      const specialcharsource = "!@#$%^&*()_+{}?></';[]-=`~,.";
      
      if(charallow) textsource += specialcharsource;
      
      if(numberallow) textsource += numbersource ;

      for(let i = 0 ; i < length ; i++){
        let charIndex = Math.floor(Math.random()*textsource.length);
        pass += textsource.charAt(charIndex) ;
      }

       setPassword(pass)
    } , [charallow , numberallow , length , setPassword])  
    
    

// UseRef to copy password
    let passwordRef = useRef(null);

   const copyTOClipBoard = useCallback(() => {
    if(btntext === "copy"){
      setbtntxt("copied");
    }
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
   } , [password])




   {/* useEffect for PasswordGenerator function call*/}

   useEffect(() => {
    PasswordGenerator();
    setbtntxt("copy") // This changes the button text to the "copy" when any changes are made in password
   } , [length , charallow , numberallow ,PasswordGenerator])



  return (

// Main container
       <div className='outline-none relative duration-200 w-full sm:max-w-md mx-auto bg-[#16181c] h-100 sm:h-80 text-white rounded-2xl flex flex-col justify-start p-6 gap-2 border border-white shadow-[0_0_6px_white]'  >



{/* Title */}
        <div className='position-fixed  mx-auto top-2 font-bold text-2xl text-purple-600 ' style={{textShadow:"0 0 3px black"}} >PASSWORD GENERATOR</div>



{/* Password + copy button */}
         <div className='flex flex-col sm:flex-row gap-1 mt-3 sm:mt-0'>



{/* Password Input Box */}
         <div>
          <input type="text" 
           className='bg-white w-full sm:w-80 text-black p-1.5 mt-4 border-2 border-black shadow-[0_0_4px_orange] rounded-md'
           placeholder='password'
            value={password}
            ref={passwordRef}
            readOnly
          />
         </div>
         <div>




{/* copy Button */}
          <button 
          onClick={copyTOClipBoard}
          className='bg-black sm:mt-4
           border-white border
            shadow-white
             text-white w-full
              sm:w-20 rounded-s
              font-bold
               p-1.5 '
               >
                {btntext}
           </button>
         </div>
         </div>




{/* sidebar */}
          <div className='flex flex-col justify-center items-start gap-1 mt-8 '>
            <div className='flex gap-2 '>
            <div  className='flex sm:flex-row flex-col justify-center items-center gap-0.5 text-[16px] md:text-lg'>
              <input className='cursor-pointer mr-2 ' id='range' type="range" min={8} max={50}  value={length} onChange={(e) => {setLength(e.target.value)}} />
            <label className='text-2xl sm:text-lg text-orange-500' htmlFor="range">Length-{length}</label>
            </div>
            </div>




{/* Character Allow */}
            <div className='text-[16px] md:text-lg mt-2 gap-1' >
              <input className='cursor-pointer mr-2 size-4' type="checkbox" defaultChecked={charallow} onChange={() => {SetCharAllow((prev) => !prev)}}/>
              <label className='size-4 text-xl text-orange-500' >Characters</label>
            </div>





{/* Number Allow */}
            <div className='text-[16px] md:text-lg mt-2 gap-1'>
              <input className='cursor-pointer mr-2 size-4' type="checkbox" defaultChecked={numberallow} onChange = {() => {SetNumberAllow((prev) => !prev)}} />
              <label className='size-4  text-xl text-orange-500' >Numbers</label>
            </div>
            </div>
          </div>

  )
}

export default App
