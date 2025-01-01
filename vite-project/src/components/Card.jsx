import React from 'react';

const Card = ({header, footer, data=[]}) => {
    return (
        <div className='Card'>
            <header>
                {header}
            </header>
            <main>
                {data.map(({term, description}) => (
                    <dl key={term}>
                        <dt>{term}</dt>
                        <dd>{description}</dd>
                    </dl>
                ))}
            </main>
            <footer>
                {footer}
            </footer>
        </div>
    );
};
export default Card;