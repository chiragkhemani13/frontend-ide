import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import './Editor.css';

export default function Editor({ language, title, value, onChange }) {

    const [expanded, setExpanded] = useState(true);

    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className={`editor-container ${expanded ? '' : 'collapsed'}`}>
            <div className="editor-header">
                {title}
                <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => setExpanded(prevOpen => !prevOpen)}
                >
                    <FontAwesomeIcon icon={expanded ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    );
}
