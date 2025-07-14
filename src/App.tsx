import { useState } from "react";
import { SpellCheckerWrapper } from "react-word-spell-checker";

function App() {
  const [textareaText, setTextareaText] = useState("");
  const [inputText, setInputText] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              React Word Spell Checker
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Features */}
        

        {/* Demo Examples */}
        <div className="space-y-8">
          {/* Textarea Example */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Textarea Example</h2>
              <p className="text-gray-600">Perfect for longer content like articles, comments, or messages</p>
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Write your content here:
              </label>
              <SpellCheckerWrapper value={textareaText} onChange={setTextareaText}>
                <textarea 
                  className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200 hover:border-gray-400"
                  placeholder="Start typing your content here..."
                />
              </SpellCheckerWrapper>
            
            </div>
          </div>

          {/* Input Example */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Input Field Example</h2>
              <p className="text-gray-600">Great for titles, subject lines, or short text inputs</p>
            </div>
            
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700">
                Subject Line:
              </label>
              <SpellCheckerWrapper value={inputText} onChange={setInputText}>
                <input 
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-gray-400"
                  placeholder="Enter your subject line..."
                />
              </SpellCheckerWrapper>
            </div>
          </div>

          {/* Long Text Example */}
        
        </div>

        {/* Installation & Usage */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Installation</h3>
              <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                <code className="text-green-400">npm install react-word-spell-checker</code>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-200">Basic Usage</h3>
              <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`import { SpellCheckerWrapper } from "react-word-spell-checker";

function MyComponent() {
  const [text, setText] = useState("");
  
  return (
    <SpellCheckerWrapper value={text} onChange={setText}>
      <textarea placeholder="Type here..." />
    </SpellCheckerWrapper>
  );
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
       <div className="mt-12 text-center">
 
  <p className="text-gray-600 mt-2">
    Developed by <span className="font-semibold">Muzammil Shah</span> —{" "}
    <a
      href="https://github.com/Muzammil803/react-auto-word-spell-checker"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      View on GitHub
    </a>
  </p>
</div>

      </div>
    </div>
  );
}

export default App;