import { useDropzone } from 'react-dropzone';
import { useCallback } from 'react';

export default function FileUploader({ onFileSelect, selectedFile }) {
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles?.length > 0) {
            onFileSelect(acceptedFiles[0]);
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

    return (
        <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
                }`}
        >
            <input {...getInputProps()} />
            {selectedFile ? (
                <div className="text-green-600 font-medium">
                    <p>✅ Fichier sélectionné : {selectedFile.name}</p>
                    <p className="text-sm text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
            ) : (
                <div className="text-gray-600">
                    {isDragActive ? (
                        <p>Déposez le fichier ici...</p>
                    ) : (
                        <>
                            <p className="font-medium">Glissez-déposez un fichier ici, ou cliquez pour sélectionner</p>
                            <p className="text-sm mt-2 text-gray-400">PDF, Vidéo, Audio acceptés</p>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
