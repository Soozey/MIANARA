import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';

const MenuBar = ({ editor }) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="border-b border-gray-200 p-2 flex flex-wrap gap-2">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={`px-2 py-1 rounded ${editor.isActive('bold') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            >
                Bold
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={`px-2 py-1 rounded ${editor.isActive('italic') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            >
                Italic
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`px-2 py-1 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            >
                H2
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`px-2 py-1 rounded ${editor.isActive('bulletList') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            >
                List
            </button>
        </div>
    );
};

export default function RichTextEditor({ content, onChange }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({ openOnClick: false }),
            Image,
        ],
        content: content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl m-5 focus:outline-none min-h-[200px]',
            },
        },
    });

    return (
        <div className="border border-gray-300 rounded-xl overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
            <div className="sticky top-0 z-10 bg-gray-50 border-b border-gray-200">
                <MenuBar editor={editor} />
            </div>
            <div className="min-h-[300px] cursor-text">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}
