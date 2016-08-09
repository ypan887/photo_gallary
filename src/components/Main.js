require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//get images information
var imageDatas = require('../data/imageDatas.json');

//自执行函数，图片信息转化成URL添加进数组
imageDatas = ( function genImageURL(imageDatasArr) {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    var singleImageData = imageDatasArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imageDatasArr[i] = singleImageData;
  }

  return imageDatasArr;
} )(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="index stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
      );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
