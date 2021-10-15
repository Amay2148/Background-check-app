import React from 'react'





 const Child = React.forwardRef((prop,ref) => {

    
    return (
        <div>
            
            <input ref = {ref} type = "text" />

        </div>
    )


}

)
  

export default Child;









