import React, { useState, useRef } from 'react';
import { X, Upload, Clipboard, Code2, AlertCircle } from 'lucide-react';

interface PasteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyHtml: (newHtml: string) => void;
}

export const PasteModal: React.FC<PasteModalProps> = ({ isOpen, onClose, onApplyHtml }) => {
  const [pastedCode, setPastedCode] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleApply = () => {
    if (!pastedCode.trim()) {
      setError('Please paste HTML content or upload a file first.');
      return;
    }
    onApplyHtml(pastedCode);
    setPastedCode('');
    setError(null);
    onClose();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      readFile(file);
    }
  };

  const readFile = (file: File) => {
    if (!file.name.endsWith('.html') && !file.name.endsWith('.htm') && !file.type.includes('html') && !file.type.includes('text')) {
      setError('Please choose a valid .html or text file.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        setPastedCode(content);
        setError(null);
      }
    };
    reader.onerror = () => {
      setError('Failed to read file. Please try again or paste directly.');
    };
    reader.readAsText(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      readFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div 
        id="paste-html-modal"
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full flex flex-col border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Open or Paste HTML Website</h2>
              <p className="text-xs text-slate-500">Paste your raw HTML markup or upload an existing .html file</p>
            </div>
          </div>
          <button
            id="close-paste-modal-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Drag & Drop zone */}
          <div
            id="file-drop-zone"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
              dragActive 
                ? 'border-blue-500 bg-blue-50/50' 
                : 'border-slate-300 hover:border-slate-400 bg-slate-50/50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".html,.htm,text/html,text/plain"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <Upload className="w-5 h-5" />
              </div>
              <p className="text-sm font-medium text-slate-800">
                Click to browse or drag & drop your <span className="text-blue-600">.html file</span> here
              </p>
              <p className="text-xs text-slate-500">Supports HTML5 documents, landing pages, and web snippets</p>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-slate-200 w-full"></div>
            <span className="bg-white px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">or paste HTML directly</span>
          </div>

          {/* Text Area */}
          <div>
            <textarea
              id="raw-html-textarea"
              value={pastedCode}
              onChange={(e) => {
                setPastedCode(e.target.value);
                if (error) setError(null);
              }}
              placeholder="<!DOCTYPE html>&#10;<html>&#10;<head><title>My Website</title></head>&#10;<body>&#10;  <h1>Hello World</h1>&#10;</body>&#10;</html>"
              rows={8}
              className="w-full p-3.5 font-mono text-xs text-slate-800 bg-slate-900/5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 bg-slate-50/70">
          <button
            id="paste-from-clipboard-btn"
            type="button"
            onClick={async () => {
              try {
                const text = await navigator.clipboard.readText();
                if (text) {
                  setPastedCode(text);
                  setError(null);
                }
              } catch {
                setError('Clipboard permission required. Please press Ctrl+V or Cmd+V directly in the box.');
              }
            }}
            className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Clipboard className="w-3.5 h-3.5" />
            Paste from Clipboard
          </button>

          <div className="flex items-center gap-2">
            <button
              id="cancel-paste-btn"
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 rounded-lg hover:bg-slate-200/50 transition-colors"
            >
              Cancel
            </button>
            <button
              id="load-html-btn"
              type="button"
              onClick={handleApply}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
            >
              Open Website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
