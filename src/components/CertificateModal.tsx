import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Award, 
  X, 
  Printer, 
  CheckCircle2, 
  Ship, 
  Sparkles, 
  Copy, 
  Check, 
  Calendar, 
  ShieldCheck,
  FileText,
  UserCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  completionPercent: number;
  stats?: {
    daysCompleted: number;
    totalDays: number;
    questionsAnswered: number;
    correctRate: number;
  };
}

export function CertificateModal({
  isOpen,
  onClose,
  completionPercent,
  stats
}: CertificateModalProps) {
  const { isClean } = useTheme();
  const [studentName, setStudentName] = useState(() => {
    try {
      return localStorage.getItem('dataconcurso_student_name') || 'Candidato(a) Transpetro';
    } catch {
      return 'Candidato(a) Transpetro';
    }
  });

  const [isEditingName, setIsEditingName] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const validationCode = 'TP-CESG-CD8-' + Math.abs(
    studentName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 1000) * 73
  ).toString(16).toUpperCase().slice(0, 8);

  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const handleSaveName = (newName: string) => {
    setStudentName(newName);
    try {
      localStorage.setItem('dataconcurso_student_name', newName);
    } catch (e) {
      console.error(e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(validationCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className={`relative w-full max-w-4xl rounded-3xl border shadow-2xl overflow-hidden my-auto transition ${
          isClean ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-900 border-slate-800 text-slate-100'
        }`}
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className={`p-4 border-b flex items-center justify-between print:hidden ${
          isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-sm">Certificado Oficial de Conclusão & Prontidão</h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Aproveitamento atingido: <strong className="text-emerald-500 font-bold">{completionPercent}%</strong> (Meta: 80%+)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition shadow"
              title="Imprimir ou Salvar como PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Imprimir / Salvar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Certificate Canvas */}
        <div className="p-4 sm:p-8 bg-white text-slate-900">
          <div className="border-8 border-double border-emerald-900/30 p-6 sm:p-10 rounded-2xl relative bg-radial from-amber-50/40 via-white to-emerald-50/20">
            {/* Watermark Logo Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <Ship className="w-96 h-96 text-emerald-950" />
            </div>

            {/* Header: Logos & Authority */}
            <div className="relative text-center pb-6 border-b border-emerald-900/20">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-700 to-teal-800 flex items-center justify-center text-white shadow">
                  <Ship className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-emerald-950 uppercase font-serif">
                    Transpetro
                  </h1>
                  <span className="text-[11px] font-bold tracking-widest text-emerald-800 uppercase block">
                    Petrobras Transporte S.A. • Fundação Cesgranrio
                  </span>
                </div>
              </div>
              <div className="inline-block px-3 py-1 bg-emerald-100/80 border border-emerald-300 rounded-full text-[11px] font-bold text-emerald-900 uppercase tracking-wider mt-2">
                Ênfase 8: Ciência de Dados • Nível Superior
              </div>
            </div>

            {/* Certificate Title */}
            <div className="text-center my-6 sm:my-8 relative">
              <h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-700 font-serif">
                Certificado de Capacitação e Prontidão Competitiva
              </h2>
              <p className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-serif mt-2">
                CERTIFICADO DE CONCLUSÃO
              </p>
            </div>

            {/* Student Name */}
            <div className="text-center my-4 relative">
              <p className="text-xs text-slate-600 uppercase tracking-wider mb-2">
                Certificamos para os devidos fins de avaliação e preparação para o concurso que
              </p>
              
              {isEditingName ? (
                <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => handleSaveName(e.target.value)}
                    className="border-b-2 border-emerald-600 px-3 py-1 text-xl font-bold text-center text-slate-900 focus:outline-none w-full font-serif"
                    placeholder="Digite seu nome completo"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsEditingName(false)}
                    className="px-3 py-1 bg-emerald-600 text-white rounded text-xs font-bold"
                  >
                    Salvar
                  </button>
                </div>
              ) : (
                <div 
                  onClick={() => setIsEditingName(true)}
                  className="group inline-flex items-center justify-center gap-2 cursor-pointer hover:opacity-80 transition py-1 px-4 border-b-2 border-emerald-800/40"
                  title="Clique para editar seu nome"
                >
                  <span className="text-xl sm:text-3xl font-extrabold text-emerald-950 font-serif underline decoration-emerald-500/50">
                    {studentName}
                  </span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 opacity-0 group-hover:opacity-100 transition print:hidden">
                    Editar Nome ✍️
                  </span>
                </div>
              )}
            </div>

            {/* Declaration Text */}
            <div className="max-w-2xl mx-auto text-center my-6 text-xs sm:text-sm leading-relaxed text-slate-700 relative font-serif">
              concluiu com êxito o programa preparatório intensivo para o concurso da <strong>Transpetro</strong>, 
              organizado pela <strong>Fundação Cesgranrio</strong>, atingindo aproveitamento consolidado de <strong>{completionPercent}%</strong> (acima do limiar de 80% exigido para prontidão competitiva).
              O candidato demonstrou domínio teórico e prático nos eixos de <strong>Ciência de Dados (Machine Learning, Visão Computacional, PLN, Estatística e Fiscalização de Contratos Lei 13.303/2016)</strong>, 
              <strong>Língua Portuguesa Cesgranrio</strong> e <strong>Língua Inglesa Instrumental</strong>.
            </div>

            {/* Badges / Discipline Seals */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 my-6 text-center max-w-lg mx-auto relative">
              <div className="p-2 sm:p-3 rounded-xl border border-emerald-200 bg-emerald-50/50">
                <ShieldCheck className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
                <span className="block text-[11px] font-bold text-emerald-950">Ciência de Dados</span>
                <span className="text-[10px] text-emerald-700 font-semibold">Apto (Ênfase 8)</span>
              </div>
              <div className="p-2 sm:p-3 rounded-xl border border-teal-200 bg-teal-50/50">
                <UserCheck className="w-5 h-5 text-teal-600 mx-auto mb-1" />
                <span className="block text-[11px] font-bold text-teal-950">Português</span>
                <span className="text-[10px] text-teal-700 font-semibold">Padrão Cesgranrio</span>
              </div>
              <div className="p-2 sm:p-3 rounded-xl border border-indigo-200 bg-indigo-50/50">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 mx-auto mb-1" />
                <span className="block text-[11px] font-bold text-indigo-950">Inglês</span>
                <span className="text-[10px] text-indigo-700 font-semibold">Decifrador Técnico</span>
              </div>
            </div>

            {/* Footer Signatures, Seal & Date */}
            <div className="pt-6 border-t border-emerald-900/20 mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative">
              {/* Seal of Achievement */}
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full border-4 border-amber-500 bg-radial from-amber-200 via-amber-400 to-amber-600 flex flex-col items-center justify-center text-slate-950 font-black shadow-md">
                  <Award className="w-6 h-6 text-emerald-950" />
                  <span className="text-[8px] uppercase tracking-widest font-bold">80%+</span>
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold text-emerald-900 uppercase tracking-widest block">
                    SELO DE PRONTIDÃO
                  </span>
                  <span className="text-xs text-slate-600">
                    Aprovado nos Simulados
                  </span>
                </div>
              </div>

              {/* Date & Signature */}
              <div className="text-center sm:text-right">
                <p className="text-xs text-slate-600 font-serif">
                  Emitido digitalmente em {currentDate}
                </p>
                <div className="mt-2 border-t border-slate-400 pt-1">
                  <span className="text-xs font-serif italic font-bold text-slate-800 block">
                    Coordenação Pedagógica de Ciência de Dados
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    Preparatório Especializado Cesgranrio / Transpetro
                  </span>
                </div>
              </div>
            </div>

            {/* Hash Code */}
            <div className="mt-6 pt-3 border-t border-dashed border-slate-200 text-center text-[10px] font-mono text-slate-500 flex items-center justify-center gap-2">
              <span>Código de Autenticidade: <strong>{validationCode}</strong></span>
              <button
                onClick={handleCopyCode}
                className="hover:text-emerald-600 transition print:hidden"
                title="Copiar código de validação"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Actions for Display Screen */}
        <div className={`p-4 border-t flex flex-wrap items-center justify-between gap-3 print:hidden ${
          isClean ? 'bg-slate-50 border-slate-200' : 'bg-slate-950 border-slate-800'
        }`}>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Dica: No menu de impressão do navegador, selecione <strong>"Salvar como PDF"</strong> para guardar em seu computador ou celular.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow"
            >
              <Printer className="w-4 h-4" /> Imprimir / PDF
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
