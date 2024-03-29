import React from 'react'
import '../assets/css/errors.css'
import NotFoundImg from '../assets/img/404.png'

const NotFound = () => (
    <div className="text-center">
        <h1 className="Error_Text">Error: 404 Page Not Found</h1>    
        <img src={NotFoundImg} alt="404 NotFound" className="Error_Image" />
    </div>
)

export default NotFound