
const ModeToggler = () => {
    let darkModeOn= false;
    const darkMode= <h1>Dark Mode is On</h1>
    const lightMode= <h1>light Mode is On</h1>

    function handlerClick(){
        darkModeOn = !darkModeOn;
        if (darkModeOn == true){
            console.log('Dark mode is on')
        }else{
            console.log('Light mode is off')
        }
    }
    return ( 
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handlerClick}>Click me</button>
        </div> 
     );
}
 
export default ModeToggler;