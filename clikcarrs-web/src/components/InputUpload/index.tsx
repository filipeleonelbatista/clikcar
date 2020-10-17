import React, { InputHTMLAttributes, useState } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    setFileData: (filelist: FileList | null) => void;
};

const InputUpload: React.FC<InputProps> = ({ label, name, setFileData, ...rest }) => {    
    const [filename, setFilename] = useState("")

    return (
        <div className="input-group-upload">
            <p>{label}{rest.required && <strong>*</strong> }</p>
            <div className='input-wrapper'>
                <label htmlFor={name}>Selecionar</label>
                <input onChange={
                    (e) => { setFilename(e.target.value);
                             setFileData(e.target.files);
                            }
                        }
                       type="file" 
                       id={name} 
                       {...rest} />
                <span id='file-name'>{filename}</span>
            </div>
        </div>

    );
}

export default InputUpload;