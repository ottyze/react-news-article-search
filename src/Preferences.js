import React, { useContext, useState } from "react";
import {
    MdOutlineClose,
    MdOutlineScience,
    MdOutlineComputer,
    MdOutlineSportsFootball,
    MdOutlineBusinessCenter,
} from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { BiWorld, BiCameraMovie } from "react-icons/bi";
import { FaRegFlag } from "react-icons/fa6";
import { UserContext } from "./components/User";

function PreferenceContainer({ onClose, onSelectCategories }) {
    const { preferences, setPreferences } = useContext(UserContext);

    /**
     *
     * @param {string} state
     */
    function toggleState(state) {
        setPreferences({
            ...preferences,
            [state]: !preferences[state],
        });
    }

    return (
        <div className="pref-container">
            <div className="top-perf">
                <h3>Select news categories to fine-tune your feed</h3>
                <button className="close-btn" onClick={onClose}>
                    <MdOutlineClose size={20} color="#ffffff" />
                </button>
            </div>
            <div className="pref-options">
                <button
                    className={preferences.science ? "on" : ""}
                    onClick={() => toggleState("science")}
                >
                    <MdOutlineScience size={20} />
                    <b className="pref-text">SCIENCE</b>
                </button>
                <button
                    className={preferences.technology ? "on" : ""}
                    onClick={() => toggleState("technology")}
                >
                    <MdOutlineComputer size={20} />
                    <b className="pref-text">TECHNOLOGY</b>
                </button>
                <button
                    className={preferences.health ? "on" : ""}
                    onClick={() => toggleState("health")}
                >
                    <GiHealthNormal size={20} />
                    <b className="pref-text">HEALTH</b>
                </button>
                <button
                    className={preferences.world ? "on" : ""}
                    onClick={() => toggleState("world")}
                >
                    <BiWorld size={20} />
                    <b className="pref-text">WORLD</b>
                </button>
                <button
                    className={preferences.entertainment ? "on" : ""}
                    onClick={() => toggleState("entertainment")}
                >
                    <BiCameraMovie size={20} />
                    <b className="pref-text">ENTERTAINMENT</b>
                </button>
                <button
                    className={preferences.sports ? "on" : ""}
                    onClick={() => toggleState("sports")}
                >
                    <MdOutlineSportsFootball size={20} />
                    <b className="pref-text">SPORTS</b>
                </button>
                <button
                    className={preferences.business ? "on" : ""}
                    onClick={() => toggleState("business")}
                >
                    <MdOutlineBusinessCenter size={20} />
                    <b className="pref-text">BUSINESS</b>
                </button>
                <button
                    className={preferences.nation ? "on" : ""}
                    onClick={() => toggleState("nation")}
                >
                    <FaRegFlag size={20} />
                    <b className="pref-text">NATION</b>
                </button>
            </div>
        </div>
    );
}

/**
 *
 * @param {{showPreferences: boolean, onClick: ()=>void, onClose: ()=>void}} props
 * @returns {React.JSX.Element}
 */
function Preferences({ showPreferences, onClick, onClose }) {
    return (
        <div>
            <button className="preferences" onClick={onClick}>
                Preferences
            </button>
            {showPreferences && <PreferenceContainer onClose={onClose} />}
        </div>
    );
}

export default Preferences;
