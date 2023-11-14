import React from 'react'

function DefaultLayout(props) {
    return(
        <div>
           <div className='header bs1'>
                <div className='d-flex justify-content-between'>
                      <h1>Jysan-Wheels</h1>
                      <button>User</button>

                </div>
           </div>

           <div className='content'>
                {props.children}
           </div>
        </div>
    )
}

export default DefaultLayout