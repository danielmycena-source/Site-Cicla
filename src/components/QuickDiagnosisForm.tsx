import React, { useState } from 'react';
import { brandPalette, contactData } from '../data/ciclaReformedData';
import { DiagnosisFormData } from '../types/cicla';
import { 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Building2,
  Factory,
  Users,
  HelpCircle
} from 'lucide-react';

interface QuickDiagnosisFormProps {
  initialPublico?: 'prefeitura' | 'empresa' | 'cooperativa' | 'outro';
  className?: string;
  sourceContext?: string;
}

export const QuickDiagnosisForm: React.FC<QuickDiagnosisFormProps> = ({
  initialPublico = 'prefeitura',
  className = '',
  sourceContext = 'geral'
}) => {
  const [formData, setFormData] = useState<DiagnosisFormData>({
    nome: '',
    email: '',
    telefone: '',
    organizacao: '',
    tipoPublico: initialPublico,
    municipioEstado: '',
    principalDesafio: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Preparar mensagem estruturada para envio com WhatsApp de fallback imediato
    const mensagemWhatsApp = encodeURIComponent(
      `*Solicitação de Diagnóstico Gratuito - Cicla*\n\n` +
      `*Nome:* ${formData.nome}\n` +
      `*Organização/Prefeitura:* ${formData.organizacao}\n` +
      `*Perfil:* ${formData.tipoPublico.toUpperCase()}\n` +
      `*Município/UF:* ${formData.municipioEstado}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone:* ${formData.telefone}\n` +
      `*Desafio principal:* ${formData.principalDesafio}\n` +
      `*Origem:* ${sourceContext}`
    );

    const directWhatsAppUrl = `https://wa.me/5511970340808?text=${mensagemWhatsApp}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Opcional: abre o WhatsApp com a mensagem formatada para envio imediato se o usuário desejar
      window.open(directWhatsAppUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-3xl p-8 sm:p-10 border border-[#9AC31C]/40 shadow-xl text-center ${className}`}>
        <div className="w-16 h-16 rounded-full bg-[#9AC31C]/15 text-[#311853] flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-9 h-9 text-[#9AC31C]" />
        </div>
        <h3 className="text-2xl font-extrabold text-[#311853] mb-3">
          Solicitação recebida com sucesso!
        </h3>
        <p className="text-slate-600 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
          Obrigado, <strong className="text-[#311853]">{formData.nome}</strong>. O Daniel Carvalho analisará o contexto de <strong className="text-[#311853]">{formData.organizacao || 'sua instituição'}</strong> e responderá em até 24 horas úteis.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9AC31C] hover:bg-[#86aa18] text-[#311853] font-bold text-sm px-6 py-3.5 rounded-xl shadow transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar agora no WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="w-full sm:w-auto text-xs font-semibold text-slate-500 hover:text-[#311853] py-2 px-4"
          >
            Enviar outra solicitação
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-2xl relative overflow-hidden ${className}`}>
      {/* Luz sutil de destaque no topo */}
      <div 
        className="absolute top-0 left-0 right-0 h-2"
        style={{ backgroundColor: brandPalette.green }}
      />

      <div className="mb-6">
        <div className="inline-flex items-center gap-2 bg-[#9AC31C]/15 text-[#311853] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#9AC31C]" />
          <span>Sem Custo · Análise Especializada</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#311853] tracking-tight">
          Solicite um diagnóstico gratuito
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
          Preencha os dados abaixo para receber uma primeira leitura técnica sobre os gargalos e oportunidades da sua operação.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Seletor de Perfil / Segmentação */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#311853] mb-2">
            Qual é o seu perfil de atuação? *
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setFormData(p => ({ ...p, tipoPublico: 'prefeitura' }))}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                formData.tipoPublico === 'prefeitura'
                  ? 'border-[#41B6C0] bg-[#41B6C0]/10 text-[#0B2E4D] font-bold shadow-sm'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <Building2 className="w-4 h-4 mb-1 text-[#41B6C0]" />
              <span>Prefeitura</span>
            </button>

            <button
              type="button"
              onClick={() => setFormData(p => ({ ...p, tipoPublico: 'empresa' }))}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                formData.tipoPublico === 'empresa'
                  ? 'border-[#E5006B] bg-[#E5006B]/10 text-[#311853] font-bold shadow-sm'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <Factory className="w-4 h-4 mb-1 text-[#E5006B]" />
              <span>Empresa</span>
            </button>

            <button
              type="button"
              onClick={() => setFormData(p => ({ ...p, tipoPublico: 'cooperativa' }))}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl border text-xs font-semibold transition-all ${
                formData.tipoPublico === 'cooperativa'
                  ? 'border-[#9AC31C] bg-[#9AC31C]/15 text-[#311853] font-bold shadow-sm'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <Users className="w-4 h-4 mb-1 text-[#9AC31C]" />
              <span>Cooperativa</span>
            </button>
          </div>
        </div>

        {/* Linha: Nome e Organização */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-[#575756] mb-1">
              Seu Nome Completo *
            </label>
            <input
              type="text"
              name="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              placeholder="Ex: Maria Santos"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#9AC31C] text-slate-800"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#575756] mb-1">
              Prefeitura, Empresa ou Cooperativa *
            </label>
            <input
              type="text"
              name="organizacao"
              required
              value={formData.organizacao}
              onChange={handleChange}
              placeholder="Ex: Prefeitura de... / Indústria..."
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#9AC31C] text-slate-800"
            />
          </div>
        </div>

        {/* Linha: E-mail e Telefone/WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-[#575756] mb-1">
              E-mail Institucional *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="seuemail@organizacao.com.br"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#9AC31C] text-slate-800"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-[#575756] mb-1">
              Telefone / WhatsApp com DDD *
            </label>
            <input
              type="tel"
              name="telefone"
              required
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(11) 99999-9999"
              className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#9AC31C] text-slate-800"
            />
          </div>
        </div>

        {/* Município / UF */}
        <div>
          <label className="block text-xs font-bold text-[#575756] mb-1">
            Município e Estado (UF)
          </label>
          <input
            type="text"
            name="municipioEstado"
            value={formData.municipioEstado}
            onChange={handleChange}
            placeholder="Ex: Campinas / SP"
            className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#9AC31C] text-slate-800"
          />
        </div>

        {/* Principal Desafio */}
        <div>
          <label className="block text-xs font-bold text-[#575756] mb-1">
            Qual é o principal desafio atual da sua operação?
          </label>
          <textarea
            name="principalDesafio"
            rows={2}
            value={formData.principalDesafio}
            onChange={handleChange}
            placeholder="Ex: Custo alto com aterro, cumprimento de metas da PNRS, formalização de cooperativa, rastreabilidade de notas..."
            className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#9AC31C] text-slate-800 resize-none"
          />
        </div>

        {/* Botão de Envio de Alta Conversão */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2.5 bg-[#311853] hover:bg-[#23103c] text-white font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-xl shadow-lg transition-all transform active:scale-[0.99] disabled:opacity-75"
        >
          {isSubmitting ? (
            <span>Processando solicitação...</span>
          ) : (
            <>
              <Send className="w-4 h-4 text-[#9AC31C]" />
              <span>Solicitar Diagnóstico Gratuito</span>
            </>
          )}
        </button>

        {/* Garantias de UX e Privacidade */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 pt-1 border-t border-slate-100">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#9AC31C]" />
            Retorno em até 24h úteis
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#41B6C0]" />
            Dados protegidos e confidenciais
          </span>
        </div>
      </form>
    </div>
  );
};
