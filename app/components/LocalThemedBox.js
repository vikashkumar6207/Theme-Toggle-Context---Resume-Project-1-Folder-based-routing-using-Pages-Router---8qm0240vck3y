'use client'
import React from 'react';


const LocalThemedBox = () => {
    const {theme} = React.useContext(ThemeContext)
    const [localTheme,setLocalTheme] = React.useState(theme)
    React.useEffect(()=>{
        setLocalTheme(theme)
    },[theme])

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
         <p className={`txt-${localTheme}`} id="local-themed-text-container">
            Hiiii
        </p>
        <button id="local-theme-toggler" className={`btn btn-${localTheme}`}onClick={()=>{setLocalTheme(localTheme === 'light' ? 'dark' : 'light')}}>
            Toggle local theme to {localTheme === 'light' ? 'dark' : 'light'}
        </button>
    </div>
)
}

export { LocalThemedBox }