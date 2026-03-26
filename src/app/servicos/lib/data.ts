/** Retratos do CDN Pexels (gratuitos para uso conforme https://www.pexels.com/license/). */
function pexelsPortrait(photoId: number) {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=480&h=480&fit=crop`;
}

export const clientServices = [
  {
    id: 1,
    title: "Automatização de portão deslizante",
    description:
      "Nosso cliente tinha problemas em entrar em sua residência em horários de pico por conta da necessidade de sair de seu veículo para poder abrir o portão e estacionar seu carro, realizamos a automatização de seu portão para um portão deslizante solucionando o seu problema.",
    serviceImage: "/images/service-1.webp",
    clientName: "João da Silva",
    clientImage: pexelsPortrait(2379004),
    href: "/servicos/automatizacao-de-portao-deslizante-joao-da-silva",
    videoUrl: "/videos/servico-1.mp4",
    videoThumbnail: "/images/service-1.webp",
    useCase: {
      title: "Automatização de portão pivotante - caso João da Silva",
      contact: {
        paragraphs: [
          "Recebemos o contato do João por meio do formulário do site, onde ele relatou a necessidade de substituir o sistema de abertura manual do portão da residência por uma solução mais prática e segura. Como o acesso principal era utilizado diversas vezes ao dia, principalmente por veículos da família, a falta de automatização estava gerando desconforto na rotina e diminuindo a sensação de segurança no acesso ao imóvel. Agendamos uma visita técnica para avaliar o local, entender a estrutura existente e indicar a melhor solução para o tipo de portão.",
        ],
      },
      problem: {
        paragraphs: [
          "Na vistoria inicial, nossa equipe analisou a estrutura do portão pivotante, verificando peso, medidas das folhas, estado das dobradiças, alinhamento dos pilares, espaço de abertura e condições da instalação elétrica disponível. Identificamos que o portão tinha boa estrutura, mas exigia um automatizador compatível com abertura pivotante de duas folhas, além de um sistema de controle que garantisse funcionamento suave, sem esforço excessivo nos braços do motor. Também observamos a ausência de itens de segurança, como fotocélulas e sistema de parada automática, o que poderia representar risco durante o uso diário.",
        ],
      },
      service: {
        paragraphs: [
          "Com base no diagnóstico, apresentamos ao João uma proposta completa de automatização para portão pivotante, com motores adequados ao peso e ao ângulo de abertura das folhas, central de comando, suportes de fixação reforçados, sensores de segurança e controles remotos. Após a aprovação, iniciamos a instalação com o posicionamento preciso dos braços automatizadores, ajuste dos pontos de fixação e regularização do curso de abertura e fechamento para evitar trancos ou desalinhamentos. Em seguida, realizamos toda a parte elétrica, com proteção da fiação, configuração da central e programação dos comandos de acionamento.",
          "Durante a execução, também ajustamos a força de abertura, o tempo de resposta e a desaceleração final das folhas, para garantir um movimento estável, silencioso e seguro. Por fim, instalamos e testamos os dispositivos de segurança, simulando situações de uso real para confirmar o correto funcionamento do sistema em diferentes cenários.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Ao final do serviço, fizemos a entrega técnica ao João com todas as orientações de uso, cuidados básicos de manutenção e recomendações para preservar a vida útil do automatizador. Explicamos como operar os controles, como utilizar o sistema manual em caso de falta de energia e quais sinais observar para solicitar uma revisão preventiva. O resultado foi um acesso mais prático, moderno e seguro, trazendo mais conforto para a rotina da família. Para a equipe, foi mais um projeto concluído com sucesso, unindo precisão técnica, segurança e uma experiência muito mais conveniente para o cliente.",
        ],
      },
    },
  },
  {
    id: 2,
    title: "Automatização e reparo de portão pivotante",
    description:
      "A Mariana nos procurou pelo WhatsApp: o portão pivotante de uma folha falhava com frequência — às vezes demorava a responder, outras parava no meio do curso — e à noite isso gerava insegurança. Na vistoria encontramos desgaste no automatizador, braço articulador desalinhado e falta de lubrificação. Fizemos revisão, troca do que estava comprometido, realinhamento, recalibração da central e testes até o movimento ficar contínuo e silencioso.",
    serviceImage: "/images/service-2.webp",
    clientName: "Mariana Costa",
    clientImage: pexelsPortrait(774909),
    href: "/servicos/reparo-portao-pivotante-uma-folha-mariana-costa",
    videoUrl: "/videos/servico-2.mp4",
    videoThumbnail: "/images/service-2.webp",
    useCase: {
      title:
        "Automatização e reparo de portão pivotante de uma folha — caso Mariana",
      contact: {
        paragraphs: [
          "Recebemos o contato da Mariana via WhatsApp, onde ela relatou que o portão pivotante de uma folha da residência vinha apresentando falhas frequentes no funcionamento. Em alguns momentos, o portão demorava para responder ao comando e, em outros, parava no meio do percurso, exigindo acionamento manual. Como ela utilizava o acesso principalmente à noite, a situação gerava insegurança e desconforto no dia a dia. Diante disso, organizamos uma visita técnica já para o dia seguinte, buscando agilizar a identificação do problema e propor uma solução eficaz.",
        ],
      },
      problem: {
        paragraphs: [
          "Durante a vistoria, nossa equipe realizou uma análise completa do sistema de automatização e da estrutura do portão. Identificamos que o automatizador apresentava desgaste interno, com perda de eficiência no conjunto mecânico responsável pela movimentação da folha. Também observamos desalinhamento no ponto de fixação do braço articulador, o que gerava esforço irregular durante a abertura e fechamento. Além disso, havia sinais de falta de lubrificação adequada nas articulações e pequenos pontos de oxidação, fatores que contribuíam para o funcionamento irregular e ruídos excessivos ao longo do uso.",
        ],
      },
      service: {
        paragraphs: [
          "Com base no diagnóstico, apresentamos à Mariana um plano de intervenção focado na recuperação completa do sistema. Propusemos a revisão do automatizador, substituição dos componentes desgastados, realinhamento do braço mecânico e reforço nos pontos de fixação. Após a aprovação, iniciamos o serviço com a desmontagem parcial do conjunto automatizador e a limpeza dos componentes internos e externos.",
          "Na sequência, realizamos a troca das peças comprometidas, ajustamos o posicionamento do braço articulado para garantir um curso mais uniforme e aplicamos lubrificação adequada em todos os pontos de movimento. Também revisamos a central de comando, recalibramos os parâmetros de abertura e fechamento e ajustamos a força do motor para um desempenho mais equilibrado. Finalizamos com testes completos de funcionamento, simulando diferentes condições de uso para garantir estabilidade, segurança e fluidez no movimento do portão.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Após a conclusão do serviço, o portão voltou a operar de forma contínua, silenciosa e sem interrupções, atendendo plenamente às necessidades da cliente. Orientamos a Mariana sobre os cuidados básicos de manutenção, periodicidade de revisões e uso correto do sistema em situações do dia a dia. Também fornecemos garantia sobre as peças substituídas e o serviço realizado. A cliente destacou a melhora imediata no funcionamento e a tranquilidade de voltar a utilizar o portão com segurança, especialmente no período noturno. Para nossa equipe, foi mais um atendimento concluído com eficiência, reforçando a importância de ajustes precisos em sistemas pivotantes de uma folha.",
        ],
      },
    },
  },
  {
    id: 3,
    title: "Automatização de portão basculante",
    description:
      "O Carlos ligou porque o portão basculante da garagem ainda era manual: abrir e fechar na correria, à noite e na chuva, tinha virado um incômodo. A estrutura estava sólida, mas faltava automatização, elétrica preparada e segurança. Instalamos motor, central, acionamento, fiação protegida, sensores e controles remotos; ajustamos força, limites e velocidade até a garagem passar a abrir e fechar sozinha, com uso confortável direto do carro.",
    serviceImage: "/images/service-3.webp",
    clientName: "Carlos Ferreira",
    clientImage: pexelsPortrait(3785079),
    href: "/servicos/automatizacao-basculante-carlos-ferreira",
    videoUrl: "/videos/servico-3.mp4",
    videoThumbnail: "/images/service-3.webp",
    useCase: {
      title: "Automatização de portão basculante - caso Carlos Ferreira",
      contact: {
        paragraphs: [
          "O Carlos entrou em contato conosco por telefone após perceber que o portão basculante de sua garagem já não oferecia a praticidade necessária no dia a dia. Ele comentou que o sistema ainda era manual e que, com a rotina corrida da família, abrir e fechar o portão constantemente se tornava incômodo, especialmente em horários noturnos e em dias de chuva. Buscando mais conforto e segurança, solicitou uma avaliação para automatização completa. Agendamos uma visita técnica para entender as condições do portão e indicar a melhor solução.",
        ],
      },
      problem: {
        paragraphs: [
          "Durante a vistoria, identificamos que o portão basculante estava estruturalmente em bom estado, com ferragens firmes e boa estabilidade. No entanto, não havia nenhum sistema de automatização instalado, e o peso do portão exigia esforço considerável para abertura manual. Também observamos ausência de dispositivos de segurança, como travas automáticas e sensores, além de não haver infraestrutura elétrica preparada para receber um automatizador. O desafio era implementar um sistema completo que fosse seguro, eficiente e compatível com o uso frequente.",
        ],
      },
      service: {
        paragraphs: [
          "Apresentamos ao Carlos uma proposta de automatização completa para portão basculante, incluindo motor adequado ao peso e dimensões da estrutura, central de comando, trilho de acionamento, braço mecânico, controles remotos e itens de segurança. Após aprovação, iniciamos o processo com a preparação da estrutura para receber o automatizador, incluindo reforços nos pontos de fixação e instalação da base do motor.",
          "Na sequência, realizamos a instalação do conjunto de acionamento, alinhamento do sistema de elevação e passagem de toda a fiação elétrica com proteção adequada. Instalamos a central de comando em caixa protegida, configuramos os limites de abertura e fechamento e ajustamos a força e velocidade do motor para garantir um movimento equilibrado e silencioso. Também incluímos sensores de segurança e realizamos testes completos de funcionamento, simulando diferentes cenários de uso para validar a confiabilidade do sistema.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Ao final da instalação, o portão passou a operar de forma totalmente automatizada, com abertura suave e segura, eliminando o esforço manual e trazendo mais praticidade para o dia a dia do cliente. Orientamos o Carlos sobre o uso correto dos controles, procedimentos em caso de falta de energia e cuidados básicos de manutenção preventiva. Também entregamos garantia do equipamento e do serviço realizado. O cliente destacou a melhoria imediata na rotina e a comodidade de acessar a garagem sem sair do carro. Para nossa equipe, foi mais um projeto concluído com eficiência, unindo conforto, segurança e tecnologia.",
        ],
      },
    },
  },
  {
    id: 4,
    title: "Automatização de portão deslizante empresarial",
    description:
      "A Aline, responsável pela empresa, ligou: o portão deslizante do estacionamento falhava com frequência e atrasava carros, funcionários e visitantes em horário comercial. Fizemos visita rápida, limpamos e realinhamos trilhos, trocamos rolamentos e revisamos motor, central e sensores, com lubrificação para uso intenso. Entregamos laudo e orientações; o acesso voltou a fluir com estabilidade para o dia a dia corporativo.",
    serviceImage: "/images/service-4.webp",
    clientName: "Aline Ribeiro",
    clientImage: pexelsPortrait(415829),
    href: "/servicos/portao-deslizante-empresarial-aline-ribeiro",
    videoUrl: "/videos/servico-4.mp4",
    videoThumbnail: "/images/service-4.webp",
    useCase: {
      title: "Automatização de portão deslizante empresarial — caso Aline Ribeiro",
      contact: {
        paragraphs: [
          "A responsável pela empresa, Aline, entrou em contato conosco por telefone relatando que o portão deslizante de acesso ao estacionamento vinha apresentando falhas recorrentes ao longo da rotina de trabalho. Como o local possui circulação intensa de funcionários, fornecedores e visitantes, qualquer travamento no portão causava atrasos na entrada de veículos e impactava diretamente a operação da empresa. Além disso, por se tratar de um acesso utilizado diariamente em horário comercial, a segurança e a agilidade eram prioridades. Agendamos uma visita técnica com rapidez, buscando avaliar a estrutura e apresentar uma solução adequada à demanda do ambiente corporativo.",
        ],
      },
      problem: {
        paragraphs: [
          "Na inspeção inicial, identificamos que o portão deslizante sofria com desgaste acentuado nos trilhos, acúmulo de sujeira e pequenos desalinhamentos no percurso, o que explicava as vibrações e os travamentos intermitentes relatados pela cliente. Também observamos folga em componentes de apoio, rolamentos comprometidos e sinais de lubrificação inadequada, já bastante antiga. Como o portão era utilizado com frequência elevada, esses fatores estavam acelerando o desgaste do conjunto e comprometendo a fluidez da abertura e do fechamento. Além disso, o sistema de automatização existente exigia revisão para suportar melhor a rotina intensa da empresa e reduzir riscos de falha operacional.",
        ],
      },
      service: {
        paragraphs: [
          "Com o diagnóstico em mãos, apresentamos à Aline um plano de intervenção voltado tanto para a correção dos defeitos quanto para a melhora do desempenho geral do portão. O serviço incluiu limpeza completa dos trilhos, substituição dos rolamentos danificados, reaperto das fixações, realinhamento do conjunto e aplicação de lubrificantes específicos para uso contínuo. Também realizamos a revisão do automatizador, verificando o motor, a central de comando e os sensores de segurança, além da calibração dos ajustes de curso para garantir abertura e fechamento precisos.",
          "Na execução, nossa equipe fez a desobstrução total da área de deslocamento do portão, retirando resíduos e pontos de corrosão que prejudicavam o movimento. Em seguida, substituímos os componentes com desgaste, ajustamos o sistema de guia e testamos o funcionamento do motor em diferentes ciclos de uso. Como o portão atende a uma empresa, reforçamos ainda a importância de manter o conjunto preparado para alto volume de acionamentos, priorizando durabilidade, segurança e redução de paradas inesperadas. Ao final, deixamos um laudo técnico com os pontos verificados, as intervenções realizadas e orientações de manutenção preventiva.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Com o serviço concluído, o portão passou a operar de forma mais estável, silenciosa e sem interrupções no percurso. A empresa recuperou a agilidade no acesso de veículos, evitando atrasos na rotina e reduzindo o risco de travamentos durante o expediente. Orientamos a Aline sobre os cuidados básicos de manutenção e sugerimos um cronograma de revisões periódicas, considerando o alto fluxo de uso do local. A cliente destacou a melhora imediata no funcionamento e a praticidade de contar com uma solução confiável para o dia a dia da empresa. Para nossa equipe, foi mais um trabalho executado com foco em desempenho, segurança e continuidade operacional.",
        ],
      },
    },
  },
  {
    id: 5,
    title: "Automatização de portão basculante",
    description:
      "O cliente precisava abrir manualmente um portão pesado toda vez que chegava com compras ou crianças no carro. Fizemos a conversão para automatização, instalamos motor adequado e sensores de segurança para evitar fechamento sobre obstáculos. Treinamos o cliente no uso e deixamos o sistema com ajuste fino — agora ele entra e sai com praticidade e tranquilidade, especialmente nos dias corridos.",
    serviceImage: "/images/service-5.webp",
    clientName: "Rafael Gomes",
    clientImage: pexelsPortrait(1222271),
    href: "/servicos/automatizacao-basculante-rafael-gomes",
    videoUrl: "/videos/servico-5.mp4",
    videoThumbnail: "/images/service-5.webp",
    useCase: {
      title: "Automatização de portão basculante - caso Rafael Gomes",
      contact: {
        paragraphs: [
          "O Rafael nos procurou após uma série de tentativas cansativas de abrir manualmente o portão basculante sempre que chegava com compras ou com as crianças no carro. Ele descreveu episódios em que o portão prendia no batente e em dias de vento ficava doloroso de manusear. Marcamos uma visita técnica para avaliar viabilidade e medir a estrutura do portão e do batente.",
        ],
      },
      problem: {
        paragraphs: [
          "Durante a vistoria constatamos que o portão era pesado e o braço central apresentava desgaste nas dobradiças, além de folgas no travamento que dificultavam a vedação. A estrutura da moldura não possuía pontos de fixação adequados para um motor convencional, e não havia sensores de segurança—o que tornaria perigosa uma automação sem reforço e ajustes. Também medimos o espaço útil para batentes e verificamos que seria necessário um motor com torque elevado e sistema de desaceleração para evitar impactos.",
        ],
      },
      service: {
        paragraphs: [
          "Apresentamos ao Rafael um plano detalhado: reforço dos pontos de fixação na estrutura, substituição das dobradiças desgastadas, instalação de um motor específico para basculantes com torque adequado, painel de comando com ajuste de força e desaceleração, além de fotocélulas e sensores de fim de curso. Enviamos orçamento com etapas claras (reforço estrutural + montagem do motor + testes) e prazos, e o cliente aprovou a proposta.",
          "No dia da execução reforçamos a moldura com chapas e buchas de ancoragem apropriadas, trocamos as dobradiças e alinhamos o batente. Instalamos o motor com suporte projetado, fixamos o painel em caixa protegida e realizamos toda a passagem elétrica com aterramento. Programamos limites de curso, desaceleração nas fases finais de abertura/fechamento e integramos fotocélulas e botoeiras de emergência. Testamos o sistema em múltiplos ciclos, com cargas simuladas (sacos de compras, veículo parado) e verificamos redundância de segurança para evitar fechamento sobre obstáculos.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Ao finalizar, entregamos ao Rafael um portão automatizado que se moveu de forma suave e segura desde o primeiro acionamento. Ele passou a entrar com muito mais facilidade — especialmente quando vinha com crianças e compras — e ficou satisfeito com o reforço estrutural que eliminou rangidos e folgas. Fornecemos orientação prática sobre uso, manutenção preventiva e comportamento em caso de emergência (liberação manual). Registramos o serviço com nota técnica e garantia, e o Rafael comentou que ganhou tempo, conforto e mais segurança no dia a dia.",
        ],
      },
    },
  },
  {
    id: 6,
    title: "Automatização de portão basculante",
    description:
      "A Patrícia enviou o formulário do site: o portão basculante falhava de forma intermitente, pior após quedas de energia, e a família dependia dele todos os dias. Na visita vimos painel e parte elétrica comprometidos e o acionamento mecânico fora de alinhamento. Substituímos o painel por um modelo com proteção contra surtos, refizemos fiação e aterramento, alinhamos trilho e calibramos o motor; testamos ciclos e variações de rede até o sistema ficar estável.",
    serviceImage: "/images/service-6.webp",
    clientName: "Patrícia Lima",
    clientImage: pexelsPortrait(1130626),
    href: "/servicos/basculante-painel-comando-patricia-lima",
    videoUrl: "/videos/servico-6.mp4",
    videoThumbnail: "/images/service-6.webp",
    useCase: {
      title: "Automatização de portão basculante — caso Patrícia",
      contact: {
        paragraphs: [
          "A Patrícia entrou em contato conosco pelo formulário do site após notar falhas recorrentes no funcionamento do portão basculante da sua residência. Ela relatou que o sistema respondia de forma inconsistente: em alguns momentos funcionava normalmente, mas em outros simplesmente não acionava, principalmente após quedas de energia recentes na região. Como dependia do portão para a entrada e saída diária da família, solicitou uma avaliação rápida para evitar maiores transtornos. Organizamos uma visita técnica em curto prazo para analisar a situação.",
        ],
      },
      problem: {
        paragraphs: [
          "Durante a vistoria, identificamos que o sistema de automatização apresentava falhas relacionadas à parte elétrica e ao painel de comando. Havia sinais de desgaste em componentes internos, conexões comprometidas e ausência de proteção adequada contra oscilações de energia. Também observamos que o conjunto do motor e trilho de acionamento não estava devidamente ajustado, o que poderia agravar o problema ao longo do tempo. Essa combinação de fatores tornava o funcionamento instável e aumentava o risco de falhas completas no sistema.",
        ],
      },
      service: {
        paragraphs: [
          "Com base no diagnóstico, propusemos à Patrícia a substituição do painel de comando por um modelo mais moderno, com proteção contra surtos elétricos, além da revisão completa da fiação e ajustes no conjunto mecânico do portão basculante. Após aprovação, iniciamos o serviço com a remoção dos componentes danificados e a organização da instalação elétrica.",
          "Na sequência, instalamos o novo painel em caixa protegida, substituímos conectores comprometidos, reforçamos o aterramento e reorganizamos toda a fiação para maior segurança e durabilidade. Também realizamos ajustes no sistema de acionamento, alinhando o trilho e calibrando o motor para um funcionamento mais estável. Finalizamos com a programação da central, configuração dos parâmetros de segurança e testes completos, incluindo simulações de variações de energia e ciclos repetidos de abertura e fechamento.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Após a intervenção, o portão passou a operar de forma estável e confiável, mesmo diante de pequenas oscilações na rede elétrica. Explicamos à Patrícia todas as melhorias implementadas, orientamos sobre o uso correto do sistema e fornecemos recomendações para manutenção preventiva. Também entregamos a documentação técnica do novo painel instalado e garantia do serviço. A cliente destacou a tranquilidade de contar com um sistema mais seguro e resistente a falhas elétricas, principalmente após os problemas enfrentados anteriormente. Para nossa equipe, foi mais um projeto concluído com foco em segurança, confiabilidade e durabilidade do sistema.",
        ],
      },
    },
  },
  {
    id: 7,
    title: "Automatização de portão basculante alto",
    description:
      "O Bruno, responsável pelo galpão, ligou preocupado com o acesso principal: portão basculante alto, veículos grandes e pouca segurança na automatização. Na visita vimos cobertura insuficiente de sensores e pontos cegos para o fluxo de caminhões, empilhadeiras e pessoas. Instalamos fotocélulas em várias alturas, sensores laterais e integração reforçada à central; cabeamento protegido, calibração e testes reais até o portão parar com confiabilidade em toda a área de risco.",
    serviceImage: "/images/service-7.webp",
    clientName: "Bruno Alves",
    clientImage: pexelsPortrait(1043471),
    href: "/servicos/basculante-alto-seguranca-bruno-alves",
    videoUrl: "/videos/servico-7.mp4",
    videoThumbnail: "/images/service-7.webp",
    useCase: {
      title: "Automatização de portão basculante alto — caso Bruno Alves",
      contact: {
        paragraphs: [
          "O responsável pela empresa, Bruno, entrou em contato conosco por telefone demonstrando preocupação com a segurança no acesso principal do galpão. Ele relatou que o portão basculante, além de ser alto e utilizado por veículos de grande porte, não contava com um sistema de segurança eficiente, o que gerava receio de acidentes durante a operação — principalmente em horários de maior movimentação. Como o fluxo incluía funcionários, empilhadeiras e entregas frequentes, ele buscava uma solução que aumentasse a segurança sem comprometer a agilidade da operação. Organizamos uma visita técnica para avaliação detalhada do cenário.",
        ],
      },
      problem: {
        paragraphs: [
          "Na vistoria, identificamos que o portão basculante possuía grande altura e amplitude de abertura, mas o sistema de automatização existente era limitado em termos de segurança. Havia poucos sensores instalados, com cobertura insuficiente para toda a área de passagem, além de pontos cegos causados pela estrutura lateral e pelo próprio tamanho do portão. Também observamos que a configuração atual não estava adequada para o fluxo intenso de veículos e equipamentos, o que aumentava o risco de colisões ou fechamento indevido durante a operação. A ausência de redundância nos sensores era um fator crítico para o ambiente empresarial.",
        ],
      },
      service: {
        paragraphs: [
          "Com base na análise, apresentamos ao Bruno um plano completo de modernização do sistema de segurança do portão basculante. Propusemos a instalação de múltiplos pontos de detecção, incluindo fotocélulas em diferentes alturas, sensores laterais e reforço na integração com a central de comando, garantindo cobertura total da área de risco — especialmente considerando a altura elevada do portão.",
          "Após a aprovação, iniciamos a execução com o posicionamento estratégico dos sensores, levando em conta o fluxo de veículos e possíveis obstáculos. Realizamos a passagem de cabeamento protegido, instalação em estruturas reforçadas e integração com o sistema de automatização existente. Em seguida, configuramos os parâmetros de sensibilidade, tempo de resposta e redundância, assegurando que o portão interrompesse imediatamente qualquer movimento ao detectar presença na área de operação.",
          "Finalizamos com uma bateria completa de testes práticos, simulando situações reais do dia a dia da empresa: passagem de veículos altos, circulação de pedestres, movimentação de equipamentos e diferentes condições de iluminação. Ajustamos o sistema para evitar falhas de detecção e minimizar interrupções desnecessárias, mantendo o equilíbrio entre segurança e eficiência operacional.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Após a conclusão do serviço, o portão passou a operar com um nível de segurança muito mais elevado, oferecendo detecção confiável em toda a sua área de atuação, mesmo sendo um portão de grande porte. A equipe da empresa ganhou mais confiança no uso diário, reduzindo riscos de acidentes e melhorando o fluxo de entrada e saída. Orientamos o Bruno sobre os cuidados básicos, como limpeza periódica dos sensores e revisões preventivas, além de entregar um relatório técnico com todas as melhorias implementadas. O cliente destacou a tranquilidade de operar o portão com segurança mesmo em horários de alta movimentação. Para nossa equipe, foi mais um projeto concluído com foco em proteção, eficiência e adaptação ao ambiente corporativo.",
        ],
      },
    },
  },
  {
    id: 8,
    title: "Automatização integrada de portões deslizante e basculante",
    description:
      "A Clara, do armazém, nos procurou por indicação após uma queda de energia: o portão deslizante principal e o basculante alto da carga pararam e a logística travou. Avaliamos os dois acessos, instalamos liberação manual acessível em cada um — chave e destravamento no deslizante, desengate reforçado no basculante —, revisamos motores e centrais, padronizamos a operação e colocamos sinalização de emergência. Testamos com simulação de falta de energia e treinamos a equipe para manter o fluxo mesmo em crise.",
    serviceImage: "/images/service-8.webp",
    clientName: "Clara Sousa",
    clientImage: pexelsPortrait(733872),
    href: "/servicos/portoes-deslizante-basculante-emergencia-clara-sousa",
    videoUrl: "/videos/servico-8.mp4",
    videoThumbnail: "/images/service-8.webp",
    useCase: {
      title:
        "Automatização integrada de portões deslizante e basculante — caso Clara Sousa",
      contact: {
        paragraphs: [
          "A responsável pelo armazém, Clara, entrou em contato conosco por indicação após enfrentar dificuldades operacionais durante uma queda de energia. Ela relatou que tanto o portão deslizante de acesso principal quanto o portão basculante alto da área de carga ficaram inoperantes, impedindo a entrada e saída de veículos e afetando diretamente a logística do local. Diante da situação, buscava uma solução que garantisse funcionamento confiável no dia a dia e alternativas seguras para situações emergenciais. Agendamos uma visita técnica para avaliar ambos os sistemas e propor uma solução integrada.",
        ],
      },
      problem: {
        paragraphs: [
          "Na vistoria, identificamos que os dois portões — ambos de grande porte — apresentavam limitações importantes. O portão deslizante possuía automatização funcional, porém sem um sistema eficiente de liberação manual em caso de falha elétrica. Já o portão basculante, além de ser bastante alto e utilizado para cargas maiores, tinha um mecanismo de acionamento com difícil acesso e sem qualquer padronização para uso emergencial. Em ambos os casos, não havia instruções visíveis nem treinamento da equipe para operação manual, o que aumentava o risco de paralisação total em situações críticas.",
        ],
      },
      service: {
        paragraphs: [
          "Com base nesse cenário, apresentamos à Clara uma proposta de modernização focada em autonomia operacional e segurança. O plano incluiu a instalação de sistemas de liberação manual acessível para ambos os portões, com mecanismos adaptados ao porte e à estrutura de cada um, além da revisão completa dos automatizadores existentes para garantir funcionamento estável.",
          "Após aprovação, iniciamos a execução com a adequação do portão deslizante, instalando um sistema de destravamento externo com chave e fácil acionamento, permitindo liberação rápida em casos de emergência. Em seguida, trabalhamos no portão basculante alto, onde implementamos um mecanismo de desengate reforçado e acessível, considerando sua altura e uso frequente em operações logísticas.",
          "Também realizamos ajustes nos automatizadores, revisando motores, centrais de comando e pontos de fixação, além de padronizar os dois sistemas para operação mais intuitiva. Instalamos sinalizações visuais com instruções claras de uso emergencial e realizamos testes simulando quedas de energia, garantindo que ambos os portões pudessem ser operados manualmente com segurança e sem esforço excessivo.",
        ],
      },
      conclusion: {
        paragraphs: [
          "Com a intervenção concluída, a empresa passou a contar com um sistema muito mais confiável e preparado para situações críticas. Tanto o portão deslizante quanto o basculante alto agora possuem mecanismos de liberação prática, permitindo continuidade das operações mesmo em casos de falta de energia. Além disso, realizamos um treinamento com a equipe do armazém, garantindo que todos soubessem como agir corretamente em emergências. A Clara destacou a importância da solução para evitar prejuízos operacionais e melhorar a segurança do local. Para nossa equipe, foi um projeto estratégico, focado em garantir funcionamento contínuo e autonomia para ambientes de alta demanda.",
        ],
      },
    },
  },
];
