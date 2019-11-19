import React from "react";
import noAvatar from '../data/no-avatar.png';

export default function Avatar(props) {
    const { user: { avatar }, onChangeInput, errors } = props;
    const source = avatar ? avatar : noAvatar;

    return (
        <>
            <img src={source} alt="user avatar" className="avatar mb-3"/>
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="avatar" name="avatar" onChange={onChangeInput} />
                <label className="custom-file-label" htmlFor="customFile">Choose avatar</label>
                {errors.avatar ? <div className="invalid-feedback">{errors.avatar}</div> : null}
            </div>
        </>
    );
        
}