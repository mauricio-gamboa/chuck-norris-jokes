import React from 'react';

function ChuckBanner() {
    return (
        <div style={{
            width: '100%',
            height: 0,
            paddingBottom: '75%',
            position: 'relative'
        }}>
            <iframe
                title='Chuck Norris Banner'
                src='https://giphy.com/embed/w7tU2rQXgRzVK'
                width='100%' height='100%'
                style={{ position: 'absolute' }}
                frameBorder='0'
                className='giphy-embed'
                allowFullScreen></iframe>
        </div>
    );
}

export default ChuckBanner;