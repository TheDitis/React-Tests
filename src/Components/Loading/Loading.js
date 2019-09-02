import React from "react";
import "./Loading.css";

export function Loading() {
    return (
        <div id="loading">
            <div id={"loadbox"}>
                <img id={"loadwheel"} src={require("../../Images/Loading2.png")} alt="LOADING" height={"100px"} width={"100px"}/>
                <h2 id={"loadtext"}>Loading...</h2>
            </div>
            <svg id={"loadgradient"}>

            </svg>
        </div>
    )
}