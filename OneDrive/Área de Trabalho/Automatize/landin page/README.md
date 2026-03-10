# Automatize - Landing Page com Formulário Integrado

Landing page profissional da Automatize com formulário de diagnóstico integrado em modal.

## 🎨 Características

- **Landing Page Premium**: Design sofisticado com animações suaves
- **Formulário Modal**: Diagnóstico gratuito em 8 passos
- **Design System**: Cores, tipografia e componentes consistentes
- **Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Performance**: Otimizado com Vite

## 🚀 Como Iniciar

### Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm preview
```

## 📁 Estrutura do Projeto

```
├── index.html                           # Arquivo HTML principal
├── main.jsx                             # Entry point do React
├── index.jsx                            # Componente integrado (landing + form)
├── automatize-landing-page.jsx          # Landing page original
├── automatize-design-system.jsx         # Guia de design
├── Formulário/
│   └── automatize-formulario-diagnostico.jsx  # Formulário em 8 steps
├── package.json                         # Dependências
├── vite.config.js                       # Configuração do Vite
└── README.md                            # Este arquivo
```

## 🎯 Como Funciona

### Landing Page
A landing page tem 6 seções principais:
1. **Hero** - Headline com CTAs
2. **O Problema** - Dores do cliente
3. **Como Funciona** - 3 passos
4. **Resultados** - Cases reais
5. **Por Que Nós** - Diferenciais
6. **CTA Final** - Último chamado para ação

### Formulário Modal
Quando o usuário clica em qualquer CTA ("Quero lotar minha agenda" ou "Quero meu diagnóstico gratuito"), um modal aparece com o formulário em 8 passos:

1. **Nome** - Nome completo
2. **Telefone** - WhatsApp para contato
3. **Faturamento** - Faixa de faturamento mensal
4. **Empresa** - Descrição do negócio
5. **Instagram** - @ da empresa
6. **Verba** - Confirmação de verba mínima (R$900/mês)
7. **Investimento** - Confirmação de investimento total (R$2.100/mês)
8. **Email** - Email para contato

### Design System
O projeto segue o design system definido em `automatize-design-system.jsx`:

**Cores:**
- Primary: `#2B2B2B` (Carbon Black)
- Accent: `#F0EEEB` (Off-White)
- Success: `#4ADE80` (Neon Green)
- Error: `#F87171` (Coral Red)

**Tipografia:**
- Headlines: `Outfit` (800px weight)
- Body: `DM Sans` (400-600px weight)
- Dados/Métricas: `JetBrains Mono`

**Espaçamento:**
- Escala: 4, 8, 12, 16, 24, 32, 48, 64, 96px

## 🔄 Fluxo de Usuário

```
Landing Page
    ↓
[Clica em CTA]
    ↓
Modal abre com Formulário
    ↓
Preenche 8 steps
    ↓
[Sim para verba e investimento]
    ↓
Tela de sucesso com resumo
```

## 💻 Tecnologias

- **React 18.3** - Framework UI
- **Vite 5.0** - Build tool
- **Inline CSS** - Estilos inline para simplicidade

## 📝 Notas de Desenvolvimento

### Adicionar Integração com Backend
Para integrar com um backend, modifique a tela de sucesso no componente `AutomatizeLeadForm`:

```javascript
// Em automatize-formulario-diagnostico.jsx, dentro do if(submitted):
// Adicione uma chamada API antes de mostrar a tela de sucesso
```

### Customização de Cores
Para alterar cores, edite o objeto `colors` em:
- `index.jsx` - Para landing + modal
- `automatize-landing-page.jsx` - Para landing isolada
- `Formulário/automatize-formulario-diagnostico.jsx` - Para formulário isolado

### Adicionar Analytics
Integre Google Analytics, Facebook Pixel ou Hotjar alterando o `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🌐 Deploy

### Netlify
```bash
npm run build
# Fazer upload da pasta 'dist' para Netlify
```

### Vercel
```bash
vercel
```

## 📞 Suporte

Para dúvidas sobre o design system, consulte `automatize-design-system.jsx`.

---

**Desenvolvido com ❤️ para Automatize**
