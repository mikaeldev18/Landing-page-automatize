import { useState, useRef } from "react";
import LandingPage from "./automatize-landing-page.jsx";
import AutomatizeLeadForm from "./Formulário/automatize-formulario-diagnostico.jsx";

const colors = {
  primary: "#2B2B2B",
  secondary: "#3C3C3C",
  accent: "#F0EEEB",
  surface: "#1A1A1A",
  muted: "#6B6B6B",
  highlight: "#E8E4DF",
  success: "#4ADE80",
  warning: "#FBBF24",
  error: "#F87171",
};

export default function AutomatizeComplete() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const handleOpenForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      {/* Landing Page com modificações para abrir formulário */}
      <LandingPageWithForm onOpenForm={handleOpenForm} />

      {/* Modal/Seção do Formulário */}
      {showForm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
            animation: "fadeIn 0.3s ease",
          }}
          onClick={handleCloseForm}
        >
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(32px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .form-container { animation: slideUp 0.4s ease; }
          `}</style>
          <div
            className="form-container"
            style={{
              background: "#0F0F0F",
              borderRadius: "20px",
              maxHeight: "90vh",
              overflow: "auto",
              maxWidth: "600px",
              width: "100%",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseForm}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "40px",
                height: "40px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "10px",
                color: colors.accent,
                fontSize: "24px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
                zIndex: 10000,
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255,255,255,0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255,255,255,0.1)";
              }}
            >
              ✕
            </button>
            <AutomatizeLeadForm />
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── LANDING PAGE COM HOOKS PARA ABRIR FORMULÁRIO ─── */
function LandingPageWithForm({ onOpenForm }) {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [ctaHover, setCtaHover] = useState(false);
  const [ctaHover2, setCtaHover2] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Diagnóstico Gratuito",
      desc: "Analisamos seu negócio, seu público e onde está o dinheiro que você está deixando na mesa.",
    },
    {
      number: "02",
      title: "Estratégia Sob Medida",
      desc: "Criamos campanhas focadas em atrair exatamente quem compra de você — sem desperdiçar centavos.",
    },
    {
      number: "03",
      title: "Resultado no Caixa",
      desc: "Você acompanha tudo em tempo real. Agenda cheia, faturamento subindo, mês após mês.",
    },
  ];

  const cases = [
    {
      segment: "E-commerce de Moda",
      platform: "META ADS",
      metric: "8.4x",
      metricLabel: "de ROAS em 30 dias",
      detail: "De R$3k investidos para R$25k em vendas no primeiro mês.",
    },
    {
      segment: "Clínica Odontológica",
      platform: "GOOGLE ADS",
      metric: "47",
      metricLabel: "agendamentos/mês",
      detail: "Saiu de 12 para 47 pacientes novos por mês com CPA de R$18.",
    },
    {
      segment: "Restaurante Local",
      platform: "META ADS",
      metric: "-62%",
      metricLabel: "no custo por cliente",
      detail: "Lotou o salão de quinta a domingo em apenas 3 semanas.",
    },
  ];

  const FadeIn = ({ children, delay = 0, style = {} }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    React.useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.15 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
          ...style,
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F0F0F",
        color: colors.accent,
        fontFamily: "'DM Sans', sans-serif",
        overflowX: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          padding: "80px 32px 64px",
        }}
      >
        {/* Background circle decoration */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            border: "1px solid rgba(240,238,235,0.04)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "-5%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "1px solid rgba(240,238,235,0.03)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Nav */}
          <FadeIn style={{ marginBottom: "80px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "46px",
                    background: colors.accent,
                    borderRadius: "8px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "26px",
                      background: "#0F0F0F",
                      borderRadius: "50%",
                      position: "absolute",
                      top: "6px",
                      left: "8px",
                      transform: "rotate(-30deg)",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "20px",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                  }}
                >
                  AUTOMATIZE
                </span>
              </div>
              <button
                onMouseEnter={() => setCtaHover2(true)}
                onMouseLeave={() => setCtaHover2(false)}
                onClick={onOpenForm}
                style={{
                  padding: "10px 24px",
                  background: ctaHover2 ? colors.accent : "transparent",
                  color: ctaHover2 ? "#0F0F0F" : colors.accent,
                  border: `1.5px solid ${colors.accent}`,
                  borderRadius: "999px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                }}
              >
                Fale Conosco
              </button>
            </div>
          </FadeIn>

          {/* Tag */}
          <FadeIn delay={0.1}>
            <span
              style={{
                display: "inline-block",
                padding: "6px 16px",
                background: "rgba(74,222,128,0.1)",
                border: "1px solid rgba(74,222,128,0.2)",
                borderRadius: "999px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: colors.success,
                marginBottom: "28px",
                textTransform: "uppercase",
              }}
            >
              +200 negócios atendidos
            </span>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.2}>
            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                margin: "0 0 24px",
                maxWidth: "750px",
              }}
            >
              Sua agenda cheia de clientes
              <span style={{ color: colors.success }}> todos os meses.</span>
            </h1>
          </FadeIn>

          {/* Sub-headline */}
          <FadeIn delay={0.35}>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.7,
                color: colors.highlight,
                maxWidth: "560px",
                margin: "0 0 48px",
              }}
            >
              Criamos campanhas de tráfego pago que trazem clientes de verdade para o seu negócio — com estratégia, dados e resultado que aparece no caixa, não só nas métricas.
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.5}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
              <button
                onMouseEnter={() => setCtaHover(true)}
                onMouseLeave={() => setCtaHover(false)}
                onClick={onOpenForm}
                style={{
                  padding: "18px 40px",
                  background: ctaHover ? "#fff" : colors.accent,
                  color: "#0F0F0F",
                  border: "none",
                  borderRadius: "999px",
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  cursor: "pointer",
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  transform: ctaHover ? "scale(1.03)" : "scale(1)",
                  boxShadow: ctaHover ? "0 8px 32px rgba(240,238,235,0.15)" : "none",
                }}
              >
                Quero lotar minha agenda
              </button>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: colors.muted,
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                }}
                onClick={onOpenForm}
                onMouseEnter={(e) => (e.target.style.color = colors.success)}
                onMouseLeave={(e) => (e.target.style.color = colors.muted)}
              >
                Diagnóstico gratuito →
              </span>
            </div>
          </FadeIn>

          {/* Social proof strip */}
          <FadeIn delay={0.65}>
            <div
              style={{
                marginTop: "72px",
                display: "flex",
                gap: "40px",
                flexWrap: "wrap",
              }}
            >
              {[
                { value: "R$2M+", label: "gerenciados em ads" },
                { value: "200+", label: "negócios atendidos" },
                { value: "8.4x", label: "ROAS médio" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "28px",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      color: colors.accent,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      color: colors.muted,
                      letterSpacing: "0.05em",
                      marginTop: "4px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ PROBLEMA / DOR ═══════════════ */}
      <section
        style={{
          padding: "96px 32px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "linear-gradient(180deg, #0F0F0F 0%, #141414 100%)",
        }}
      >
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <FadeIn>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                fontWeight: 600,
                color: colors.muted,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              O PROBLEMA
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                margin: "20px 0 32px",
                maxWidth: "650px",
              }}
            >
              Você investe em anúncio, mas não sabe de onde vem o retorno?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                "Gasta com impulsionamento e não vê resultado",
                "Depende de indicação e boca a boca para vender",
                "Já contratou agência e se sentiu enganado",
                "Não tem tempo para aprender tráfego sozinho",
              ].map((pain, i) => (
                <div
                  key={i}
                  style={{
                    padding: "20px 24px",
                    background: "rgba(248,113,113,0.04)",
                    border: "1px solid rgba(248,113,113,0.1)",
                    borderRadius: "14px",
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: colors.highlight,
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                  }}
                >
                  <span style={{ color: colors.error, fontSize: "14px", marginTop: "2px", flexShrink: 0 }}>✗</span>
                  {pain}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: colors.muted,
                marginTop: "32px",
                maxWidth: "560px",
              }}
            >
              Se você se identificou com pelo menos um desses, é sinal de que precisa de uma estratégia profissional. E é exatamente nisso que a Automatize é especialista.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ COMO FUNCIONA ═══════════════ */}
      <section style={{ padding: "96px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <FadeIn>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                fontWeight: 600,
                color: colors.muted,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              COMO FUNCIONA
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                margin: "20px 0 48px",
                maxWidth: "550px",
              }}
            >
              Três passos para sair do zero e lotar sua agenda.
            </h2>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "20px",
            }}
          >
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={0.15 + i * 0.12}>
                <div
                  onMouseEnter={() => setHoveredStep(i)}
                  onMouseLeave={() => setHoveredStep(null)}
                  style={{
                    padding: "32px 28px",
                    background: hoveredStep === i ? "rgba(240,238,235,0.06)" : "rgba(255,255,255,0.03)",
                    border: hoveredStep === i ? "1px solid rgba(240,238,235,0.15)" : "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    transition: "all 0.3s ease",
                    cursor: "default",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "48px",
                      fontWeight: 800,
                      color: hoveredStep === i ? colors.success : "rgba(240,238,235,0.1)",
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      transition: "color 0.3s ease",
                      marginBottom: "20px",
                    }}
                  >
                    {step.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "20px",
                      fontWeight: 700,
                      margin: "0 0 12px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: colors.highlight,
                      margin: 0,
                      flex: 1,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ RESULTADOS / CASES ═══════════════ */}
      <section
        style={{
          padding: "96px 32px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "linear-gradient(180deg, #0F0F0F 0%, #141414 100%)",
        }}
      >
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <FadeIn>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                fontWeight: 600,
                color: colors.muted,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              RESULTADOS REAIS
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                margin: "20px 0 16px",
                maxWidth: "600px",
              }}
            >
              Números que falam mais alto que promessa.
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: colors.muted,
                marginBottom: "48px",
                maxWidth: "480px",
              }}
            >
              Cada centavo investido é rastreado. Esses são resultados de clientes reais, com negócios reais.
            </p>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {cases.map((c, i) => (
              <FadeIn key={c.segment} delay={0.15 + i * 0.1}>
                <div
                  style={{
                    padding: "32px 28px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: colors.highlight,
                      }}
                    >
                      {c.segment}
                    </span>
                    <span
                      style={{
                        padding: "4px 10px",
                        background: "rgba(240,238,235,0.08)",
                        border: "1px solid rgba(240,238,235,0.12)",
                        borderRadius: "4px",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        color: colors.accent,
                      }}
                    >
                      {c.platform}
                    </span>
                  </div>

                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "52px",
                      fontWeight: 800,
                      color: colors.success,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                    }}
                  >
                    {c.metric}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: colors.accent,
                      marginTop: "6px",
                      marginBottom: "16px",
                    }}
                  >
                    {c.metricLabel}
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "16px",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      fontSize: "13px",
                      lineHeight: 1.6,
                      color: colors.muted,
                    }}
                  >
                    {c.detail}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ POR QUE A AUTOMATIZE ═══════════════ */}
      <section style={{ padding: "96px 32px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <FadeIn>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                fontWeight: 600,
                color: colors.muted,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              POR QUE NÓS
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                margin: "20px 0 48px",
                maxWidth: "550px",
              }}
            >
              Não somos mais uma agência genérica.
            </h2>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                icon: "◎",
                title: "Foco em resultado, não em vaidade",
                desc: "Não vendemos curtida. Vendemos cliente no seu negócio.",
              },
              {
                icon: "⟐",
                title: "Transparência total",
                desc: "Acesso ao painel em tempo real. Você vê cada real investido e cada resultado gerado.",
              },
              {
                icon: "△",
                title: "Estratégia personalizada",
                desc: "Nada de pacote genérico. Cada campanha é feita sob medida para o seu mercado.",
              },
              {
                icon: "◆",
                title: "Especialistas em tráfego",
                desc: "Equipe certificada Meta e Google com mais de R$2M gerenciados em anúncios.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={0.1 + i * 0.08}>
                <div
                  style={{
                    padding: "28px 24px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "14px",
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "16px", color: colors.accent, opacity: 0.4 }}>
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "17px",
                      fontWeight: 700,
                      margin: "0 0 10px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: colors.muted,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA FINAL ═══════════════ */}
      <section
        style={{
          padding: "96px 32px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: colors.primary,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            border: "1px solid rgba(240,238,235,0.04)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <FadeIn>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                fontWeight: 600,
                color: colors.success,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              VAMOS COMEÇAR?
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(28px, 5vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.035em",
                margin: "20px 0 20px",
              }}
            >
              Seu concorrente já está anunciando.
              <br />
              <span style={{ color: colors.success }}>E você?</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: colors.highlight,
                margin: "0 0 40px",
                maxWidth: "440px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Solicite seu diagnóstico gratuito agora e descubra quanto dinheiro você está deixando na mesa todo mês.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <button
              onClick={onOpenForm}
              style={{
                padding: "20px 48px",
                background: colors.success,
                color: "#0F0F0F",
                border: "none",
                borderRadius: "999px",
                fontFamily: "'Outfit', sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 24px rgba(74,222,128,0.2)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0 8px 32px rgba(74,222,128,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0 4px 24px rgba(74,222,128,0.2)";
              }}
            >
              Quero meu diagnóstico gratuito
            </button>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                color: colors.muted,
                marginTop: "16px",
              }}
            >
              Sem compromisso. Sem cartão. Resposta em até 24h.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer
        style={{
          padding: "40px 32px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "#0F0F0F",
        }}
      >
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "28px",
                height: "36px",
                background: colors.accent,
                borderRadius: "6px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "20px",
                  background: "#0F0F0F",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "5px",
                  left: "6px",
                  transform: "rotate(-30deg)",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "15px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              AUTOMATIZE
            </span>
          </div>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: colors.muted,
            }}
          >
            © 2025 Automatize — Todos os direitos reservados
          </span>
        </div>
      </footer>
    </div>
  );
}
