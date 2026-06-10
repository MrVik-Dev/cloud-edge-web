"use client"
import React, { useImperativeHandle, useState, forwardRef, useEffect } from 'react'
import { Editor } from "@hugerte/hugerte-react"

interface ITextEditorProps {
    data: string;
}

const TextEditor = forwardRef<Editor | null, ITextEditorProps>(({ data }, ref) => {
    const [editorValue, setEditorValue] = useState("");
    const localRef = React.useRef<Editor | null>(null);

    useEffect(() => {
        setEditorValue(data)
    },[data])


    // Forward the internal ref to the parent
    //@ts-ignore
    useImperativeHandle(ref, () => localRef.current);

    return (
        <div>
            <Editor
                ref={localRef}
                value={editorValue}
                init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                onEditorChange={(value: string) => {
                    setEditorValue(value);
                    // onChange(value); // call parent's onChange
                }}
            />
        </div>
    )
});

TextEditor.displayName = 'TextEditor'; // Required for forwardRef in React DevTools

export default TextEditor;
