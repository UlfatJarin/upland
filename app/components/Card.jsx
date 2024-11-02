import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;


const Antcard = ({src,title,description}) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={src} />}
  >
    <Meta title={title} description={description} />
  </Card>
);
export default Antcard;