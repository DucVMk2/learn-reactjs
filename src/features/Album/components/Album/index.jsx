import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
    album: PropTypes.object.isRequired,
};

function Album({ album }) {
    return (
        <div className="album">
            <dir className="album__thumbnail">
                <img src={album.thumbnailUrl} alt={album.name} />

                {/* Other Control */}
            </dir>

            <p className="album__name">{album.name}</p>
        </div>
    );
}

export default Album;