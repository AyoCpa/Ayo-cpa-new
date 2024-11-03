import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export const ActionLoader = ({ loadingState }: { loadingState: boolean }) => {
  return (
    <>
      <Spin
        spinning={loadingState}
        fullscreen
        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
      />
    </>
  );
};
