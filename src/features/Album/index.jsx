import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFuture.propTypes = {};

function AlbumFuture(props) {
    const albumList = [
        {
            id: 1,
            name: 'Giai Điệu Chữa Lành',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/0/6/1/1061db36adbc2ce56d0a62fa215301bd.jpg'
        },
        {
            id: 2,
            name: 'Playlist Này Chill Phết',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/e/a/3/8ea332ffd37fac937d81ea72eb24ee69.jpg'
        },
        {
            id: 3,
            name: 'Bên Nhau Bình Yên Thôi',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/c/d/c/b/cdcba8f6026e4e90e33f2d4d4604d515.jpg'
        },
    ];

    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFuture;