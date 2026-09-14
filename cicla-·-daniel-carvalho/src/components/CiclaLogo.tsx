import React from 'react';
import { CICLA_LOGO_PATHS } from './ciclaLogoPaths';

export interface CiclaLogoProps {
  /**
   * on-dark: símbolo colorido + tipografia 'cicla' branca (para fundos escuros/navy)
   * on-light: símbolo colorido + tipografia 'cicla' cinza #575756 (para fundos claros/brancos)
   * white: monocromático 100% branco (símbolo + texto)
   * dark: monocromático cinza escuro #575756 (símbolo + texto)
   * symbol-only: apenas o símbolo oficial (3 Cs / infinito)
   */
  variant?: 'on-dark' | 'on-light' | 'white' | 'dark' | 'symbol-only';
  className?: string;
  /** Altura base do logo em pixels (a proporção é mantida automaticamente) */
  height?: number;
  /** Compatibilidade com código anterior */
  symbolSize?: number;
  showText?: boolean;
}

/**
 * Logotipo oficial da Cicla desenhado estritamente com os vetores originais
 * do Manual de Identidade Visual e arquivos master Adobe Illustrator (LogoCicla.pdf / LogoCicla.eps).
 *
 * Características oficiais:
 * - Símbolo: Junção de 3 Cs estilizados formando nó orgânico e infinito.
 * - Tipografia oficial: Família Mosk em caixa baixa ("cicla"), desenhada em curvas vetoriais.
 * - Cores da Paleta Principal:
 *   - Rosa: #E5006B (Dignidade - Arco superior)
 *   - Verde: #9AC31C (Equilíbrio - Arco lateral)
 *   - Laranja: #F39200 (Criatividade - Dobra de conexão)
 *   - Amarelo: #FFE000 (Esperança - Arco inferior)
 *   - Cinza: #575756 (Compromisso - Texto em fundo claro)
 *   - Branco: #FFFFFF (Calma - Texto em fundo escuro)
 */
export const CiclaLogo: React.FC<CiclaLogoProps> = ({
  variant = 'on-dark',
  className = '',
  height,
  symbolSize = 38,
  showText = true,
}) => {
  const actualHeight = height || symbolSize;
  const isSymbolOnly = variant === 'symbol-only' || !showText;
  const isMonochromeWhite = variant === 'white';
  const isMonochromeDark = variant === 'dark';
  const isDarkBg = variant === 'on-dark' || variant === 'white';

  // Cores dos vetores do símbolo
  const pinkFill = isMonochromeWhite ? '#FFFFFF' : isMonochromeDark ? '#575756' : CICLA_LOGO_PATHS.symbol.pink.color;
  const greenFill = isMonochromeWhite ? '#FFFFFF' : isMonochromeDark ? '#575756' : CICLA_LOGO_PATHS.symbol.green.color;
  const orangeFill = isMonochromeWhite ? '#FFFFFF' : isMonochromeDark ? '#575756' : CICLA_LOGO_PATHS.symbol.orange.color;
  const yellowFill = isMonochromeWhite ? '#FFFFFF' : isMonochromeDark ? '#575756' : CICLA_LOGO_PATHS.symbol.yellow.color;

  // Cor dos vetores da tipografia
  const textFill = isMonochromeWhite ? '#FFFFFF' : isDarkBg ? '#FFFFFF' : '#575756';

  if (isSymbolOnly) {
    // Proporção do símbolo oficial: ~145x250 (aspect ratio 0.58)
    const symbolWidth = Math.round(actualHeight * 0.58);

    return (
      <svg
        width={symbolWidth}
        height={actualHeight}
        viewBox="0 0 145 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block shrink-0 ${className}`}
        aria-label="Símbolo Cicla"
      >
        <g transform="translate(-200, -170)">
          <path fill={pinkFill} d={CICLA_LOGO_PATHS.symbol.pink.d} />
          <path fill={greenFill} d={CICLA_LOGO_PATHS.symbol.green.d} />
          <path fill={orangeFill} d={CICLA_LOGO_PATHS.symbol.orange.d} />
          <path fill={yellowFill} d={CICLA_LOGO_PATHS.symbol.yellow.d} />
        </g>
      </svg>
    );
  }

  // Proporção do logotipo completo oficial: 440x250 (aspect ratio 1.76)
  const fullWidth = Math.round(actualHeight * 1.76);

  return (
    <svg
      width={fullWidth}
      height={actualHeight}
      viewBox="0 0 440 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      aria-label="Cicla"
    >
      <g transform="translate(-200, -170)">
        {/* Símbolo Oficial */}
        <path fill={pinkFill} d={CICLA_LOGO_PATHS.symbol.pink.d} />
        <path fill={greenFill} d={CICLA_LOGO_PATHS.symbol.green.d} />
        <path fill={orangeFill} d={CICLA_LOGO_PATHS.symbol.orange.d} />
        <path fill={yellowFill} d={CICLA_LOGO_PATHS.symbol.yellow.d} />

        {/* Tipografia Oficial 'cicla' em curvas vetorizadas */}
        {CICLA_LOGO_PATHS.wordmark.map((letter) => (
          <path key={letter.letter + letter.d.substring(0, 10)} fill={textFill} d={letter.d} />
        ))}
      </g>
    </svg>
  );
};
