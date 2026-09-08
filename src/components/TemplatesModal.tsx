import React from 'react';
import { X, LayoutTemplate, Check } from 'lucide-react';
import { TEMPLATES } from '../defaultWebsite';
import { WebsiteTemplate } from '../types';

interface TemplatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (template: WebsiteTemplate) => void;
  currentTemplateId?: string;
}

export const TemplatesModal: React.FC<TemplatesModalProps> = ({
  isOpen,
  onClose,
  onSelectTemplate,
  currentTemplateId,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div 
        id="templates-modal"
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full flex flex-col border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
              <LayoutTemplate className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Website Starter Templates</h2>
              <p className="text-xs text-slate-500">Pick an HTML website layout to start customizing</p>
            </div>
          </div>
          <button
            id="close-templates-modal-btn"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-h-[70vh] overflow-y-auto">
          {TEMPLATES.map((tmpl) => {
            const isSelected = currentTemplateId === tmpl.id;
            return (
              <div
                key={tmpl.id}
                id={`template-card-${tmpl.id}`}
                onClick={() => {
                  onSelectTemplate(tmpl);
                  onClose();
                }}
                className={`relative flex flex-col justify-between p-4 rounded-xl border cursor-pointer transition-all duration-150 text-left ${
                  isSelected
                    ? 'border-blue-600 ring-2 ring-blue-500/20 bg-blue-50/30'
                    : 'border-slate-200 hover:border-slate-300 hover:shadow-md bg-white'
                }`}
              >
                <div>
                  <span className="inline-block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    {tmpl.category}
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 mb-1 flex items-center justify-between">
                    {tmpl.name}
                    {isSelected && <Check className="w-4 h-4 text-blue-600" />}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {tmpl.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono text-[11px]">HTML5 + CSS</span>
                  <span className="font-semibold text-blue-600 group-hover:underline">
                    {isSelected ? 'Currently Active' : 'Load Template →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-end px-6 py-3 border-t border-slate-200 bg-slate-50/70">
          <button
            id="cancel-template-selection-btn"
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 rounded-lg hover:bg-slate-200/50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
