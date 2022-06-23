import React from "react";
import { useSelector } from "react-redux";

export default function Loading() {
  const { loadingStatus } = useSelector((state) => state.LoadingReducer);

  if (loadingStatus) {
    return (
      <div className="loading">
        <img src={require("../../assets/img/loading.gif")} alt="..." />
      </div>
    );
  }
}
