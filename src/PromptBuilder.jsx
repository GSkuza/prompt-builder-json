import React, { useState } from 'react';
import { Copy, Download, RefreshCw, Save, FileJson, Plus, Trash2 } from 'lucide-react';

const PromptBuilder = () => {
  const [prompt, setPrompt] = useState({
    id: "prompt_001",
    role: "user",
    instruction: "",
    context: "",
    expected_output: {
      format: "paragraph",
      style: "prostym językiem",
      length: "średnio (1 akapit)",
      include_sources: false
    },
    constraints: {
      avoid: [],
      must_include: []
    },
    metadata: {
      language: "pl",
      domain: "",
      version: "1.0",
      epistemic: {
        reasoning_mode: "deterministic"
      }
    },
    audit: {
      fact_check_required: true,
      hallucination_guard: true,
      compliance_check: ""
    }
  });

  const [newAvoid, setNewAvoid] = useState("");
  const [newMustInclude, setNewMustInclude] = useState("");
  const [copiedMessage, setCopiedMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(prompt, null, 2));
    setCopiedMessage("Skopiowano do schowka!");
    setTimeout(() => setCopiedMessage(""), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(prompt, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${prompt.id}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    if (window.confirm("Czy na pewno chcesz zresetować wszystkie pola?")) {
      setPrompt({
        id: "prompt_001",
        role: "user",
        instruction: "",
        context: "",
        expected_output: {
          format: "paragraph",
          style: "prostym językiem",
          length: "średnio (1 akapit)",
          include_sources: false
        },
        constraints: {
          avoid: [],
          must_include: []
        },
        metadata: {
          language: "pl",
          domain: "",
          version: "1.0",
          epistemic: {
            reasoning_mode: "deterministic"
          }
        },
        audit: {
          fact_check_required: true,
          hallucination_guard: true,
          compliance_check: ""
        }
      });
    }
  };

  const addToArray = (field, value, setValue) => {
    if (value.trim()) {
      if (field === 'avoid') {
        setPrompt(prev => ({
          ...prev,
          constraints: {
            ...prev.constraints,
            avoid: [...prev.constraints.avoid, value.trim()]
          }
        }));
      } else if (field === 'must_include') {
        setPrompt(prev => ({
          ...prev,
          constraints: {
            ...prev.constraints,
            must_include: [...prev.constraints.must_include, value.trim()]
          }
        }));
      }
      setValue("");
    }
  };

  const removeFromArray = (field, index) => {
    if (field === 'avoid') {
      setPrompt(prev => ({
        ...prev,
        constraints: {
          ...prev.constraints,
          avoid: prev.constraints.avoid.filter((_, i) => i !== index)
        }
      }));
    } else if (field === 'must_include') {
      setPrompt(prev => ({
        ...prev,
        constraints: {
          ...prev.constraints,
          must_include: prev.constraints.must_include.filter((_, i) => i !== index)
        }
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="bg-blue-600 text-white p-6 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileJson size={32} />
                <h1 className="text-2xl font-bold">Kreator Promptów JSON</h1>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={handleCopy}
                  className="bg-blue-500 hover:bg-blue-400 px-4 py-2 rounded flex items-center space-x-2 transition"
                >
                  <Copy size={18} />
                  <span>Kopiuj JSON</span>
                </button>
                <button 
                  onClick={handleDownload}
                  className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded flex items-center space-x-2 transition"
                >
                  <Download size={18} />
                  <span>Pobierz</span>
                </button>
                <button 
                  onClick={handleReset}
                  className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded flex items-center space-x-2 transition"
                >
                  <RefreshCw size={18} />
                  <span>Reset</span>
                </button>
              </div>
            </div>
            {copiedMessage && (
              <div className="mt-2 bg-green-500 text-white px-3 py-1 rounded inline-block">
                {copiedMessage}
              </div>
            )}
          </div>

          <div className="flex">
            {/* Form Section */}
            <div className="flex-1 p-6 space-y-6 max-h-screen overflow-y-auto">
              {/* Basic Info */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Podstawowe informacje</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID Promptu</label>
                    <input
                      type="text"
                      value={prompt.id}
                      onChange={(e) => setPrompt({...prompt, id: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="prompt_001"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rola</label>
                    <select
                      value={prompt.role}
                      onChange={(e) => setPrompt({...prompt, role: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="user">user</option>
                      <option value="system">system</option>
                      <option value="assistant">assistant</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Główna instrukcja</label>
                  <textarea
                    value={prompt.instruction}
                    onChange={(e) => setPrompt({...prompt, instruction: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                    placeholder="Wpisz główną instrukcję promptu..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Kontekst</label>
                  <textarea
                    value={prompt.context}
                    onChange={(e) => setPrompt({...prompt, context: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={2}
                    placeholder="Doprecyzuj kontekst, np. długość, odbiorca, ograniczenia..."
                  />
                </div>
              </div>

              {/* Expected Output */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Oczekiwany wynik</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
                    <select
                      value={prompt.expected_output.format}
                      onChange={(e) => setPrompt({
                        ...prompt,
                        expected_output: {...prompt.expected_output, format: e.target.value}
                      })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="paragraph">Akapit</option>
                      <option value="list">Lista</option>
                      <option value="table">Tabela</option>
                      <option value="json">JSON</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Styl</label>
                    <select
                      value={prompt.expected_output.style}
                      onChange={(e) => setPrompt({
                        ...prompt,
                        expected_output: {...prompt.expected_output, style: e.target.value}
                      })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="prostym językiem">Prostym językiem</option>
                      <option value="specjalistycznie">Specjalistycznie</option>
                      <option value="akademicko">Akademicko</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Długość</label>
                    <select
                      value={prompt.expected_output.length}
                      onChange={(e) => setPrompt({
                        ...prompt,
                        expected_output: {...prompt.expected_output, length: e.target.value}
                      })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="krótko (3 zdania)">Krótko (3 zdania)</option>
                      <option value="średnio (1 akapit)">Średnio (1 akapit)</option>
                      <option value="obszernie (raport)">Obszernie (raport)</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="include_sources"
                      checked={prompt.expected_output.include_sources}
                      onChange={(e) => setPrompt({
                        ...prompt,
                        expected_output: {...prompt.expected_output, include_sources: e.target.checked}
                      })}
                      className="mr-2 h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="include_sources" className="text-sm font-medium text-gray-700">
                      Dołącz źródła
                    </label>
                  </div>
                </div>
              </div>

              {/* Constraints */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Ograniczenia</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Unikaj</label>
                  <div className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      value={newAvoid}
                      onChange={(e) => setNewAvoid(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addToArray('avoid', newAvoid, setNewAvoid)}
                      className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Dodaj element do unikania..."
                    />
                    <button
                      onClick={() => addToArray('avoid', newAvoid, setNewAvoid)}
                      className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="space-y-1">
                    {prompt.constraints.avoid.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                        <span className="flex-1 text-sm">{item}</span>
                        <button
                          onClick={() => removeFromArray('avoid', index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Musi zawierać</label>
                  <div className="flex space-x-2 mb-2">
                    <input
                      type="text"
                      value={newMustInclude}
                      onChange={(e) => setNewMustInclude(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addToArray('must_include', newMustInclude, setNewMustInclude)}
                      className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Dodaj wymagany element..."
                    />
                    <button
                      onClick={() => addToArray('must_include', newMustInclude, setNewMustInclude)}
                      className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                  <div className="space-y-1">
                    {prompt.constraints.must_include.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                        <span className="flex-1 text-sm">{item}</span>
                        <button
                          onClick={() => removeFromArray('must_include', index)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Metadane</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Język</label>
                    <select
                      value={prompt.metadata.language}
                      onChange={(e) => setPrompt({
                        ...prompt,
                        metadata: {...prompt.metadata, language: e.target.value}
                      })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="pl">Polski</option>
                      <option value="en">English</option>
                      <option value="de">Deutsch</option>
                      <option value="es">Español</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Domena</label>
                    <input
                      type="text"
                      value={prompt.metadata.domain}
                      onChange={(e) => setPrompt({
                        ...prompt,
                        metadata: {...prompt.metadata, domain: e.target.value}
                      })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="np. tax law, civil law, GTMØ"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Wersja</label>
                    <input
                      type="text"
                      value={prompt.metadata.version}
                      onChange={(e) => setPrompt({
                        ...prompt,
                        metadata: {...prompt.metadata, version: e.target.value}
                      })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="1.0"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tryb rozumowania</label>
                    <select
                      value={prompt.metadata.epistemic.reasoning_mode}
                      onChange={(e) => setPrompt({
                        ...prompt,
                        metadata: {
                          ...prompt.metadata,
                          epistemic: {
                            ...prompt.metadata.epistemic,
                            reasoning_mode: e.target.value
                          }
                        }
                      })}
                      className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="deterministic">Deterministyczny</option>
                      <option value="probabilistic">Probabilistyczny</option>
                      <option value="GTMØ">GTMØ</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Audit */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Audyt</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="fact_check"
                      checked={prompt.audit.fact_check_required}
                      onChange={(e) => setPrompt({
                        ...prompt,
                        audit: {...prompt.audit, fact_check_required: e.target.checked}
                      })}
                      className="mr-2 h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="fact_check" className="text-sm font-medium text-gray-700">
                      Wymagana weryfikacja faktów
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="hallucination"
                      checked={prompt.audit.hallucination_guard}
                      onChange={(e) => setPrompt({
                        ...prompt,
                        audit: {...prompt.audit, hallucination_guard: e.target.checked}
                      })}
                      className="mr-2 h-4 w-4 text-blue-600"
                    />
                    <label htmlFor="hallucination" className="text-sm font-medium text-gray-700">
                      Ochrona przed halucynacjami
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sprawdzenie zgodności</label>
                  <input
                    type="text"
                    value={prompt.audit.compliance_check}
                    onChange={(e) => setPrompt({
                      ...prompt,
                      audit: {...prompt.audit, compliance_check: e.target.value}
                    })}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="np. zgodność z Kodeksem cywilnym / AX5"
                  />
                </div>
              </div>
            </div>

            {/* JSON Preview */}
            <div className="w-1/3 bg-gray-900 p-6 rounded-br-lg">
              <h2 className="text-lg font-semibold text-white mb-4">Podgląd JSON</h2>
              <pre className="text-green-400 text-xs overflow-x-auto">
                {JSON.stringify(prompt, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptBuilder;