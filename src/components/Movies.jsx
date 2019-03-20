import React from 'react';

export default (props) => {
    return (
        <div>
            <ul>
            {
                props.movies.map((movie) => {
                    return (
                        <li key={movie.id}>{movie.title}</li>
                    )
                })
            }
            </ul>
        </div>
    );
}