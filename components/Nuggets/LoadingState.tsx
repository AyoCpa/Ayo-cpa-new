import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React from 'react'

const LoadingState = () => {
  return (
    <div className="flex justify-center h-[500px] w-full items-center">
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 24, textAlign: "center" }} spin />
        }
      />
    </div>
  );
}

export default LoadingState