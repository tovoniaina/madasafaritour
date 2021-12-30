import React from 'react'
import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 2
}



function Flickly() {
    return (
        <div className='container'>
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >
                <img src="https://via.placeholder.com/1800x800" alt='img1' />
                <img src="https://via.placeholder.com/1800x800" alt='img2' />
                <img src="https://via.placeholder.com/1800x800" alt='img3' />
            </Flickity>
        </div>
    )
}

export default Flickly
