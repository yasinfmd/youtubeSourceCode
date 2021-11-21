import React from "react";

import PropTypes from "prop-types"
import './CustomText.css'
const CustomText = ({ title, text, color, isShowTitle, onClick, titleSize, boldTitle }) => {
    return (
        <div className="custom-text" onClick={onClick}>
            {isShowTitle && <div className={`custom-text-title ${boldTitle ? "bold" : ""}`} style={{ color: color, fontSize: `${titleSize}px` }}>{title}</div>}

            <div className="custom-text-content">
                {text}
            </div>
        </div>
    )
}
CustomText.propTypes = {
    titleSize: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    color: PropTypes.string,
    isShowTitle: PropTypes.bool,
    onClick: PropTypes.func,
    boldTitle: PropTypes.bool
}
CustomText.defaultProps = {
    titleSize: "20",
    title: "Yasin",
    text: "Merhaba Dünya",
    onClick: () => null,
    isShowTitle: true,
    color: "red",
    boldTitle: false
}
export default CustomText