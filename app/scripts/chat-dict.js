/* jshint ignore:start */

const languageOptions = [
  { value: 'en', name: 'English' },
  { value: 'es', name: 'Español' },
  { value: 'fr', name: 'Français' },
  { value: 'de', name: 'Deutsch' },
  { value: 'ja', name: '日本語' },
  { value: 'ko', name: '한국어' },
  { value: 'pt', name: 'Português' },
  { value: 'it', name: 'Italiano' },        
  { value: 'ru', name: 'Русский' },
  { value: 'zh-CN', name: '简体中文' },
  { value: 'zh-TW', name: '台灣正體' },
  { value: 'zh-HK', name: '香港繁體' }
];

const randomPromptDict = {
    greeting: {
      'en': [
        'Hello, how can I help you?',
        'Hi, how may I help you?',
        'Hello, how may I assist you?',
        'Greetings, how can I be of service?',
        'Hey there, how can I help you today?'
      ],
      'es': [
        'Hola, ¿en qué puedo ayudarte?',
        '¡Hola! ¿Cómo puedo ayudarte?',
        'Bienvenido, ¿en qué puedo ayudarte hoy?',
        '¿En qué puedo asistirte?',
        'Buenos días, ¿cómo puedo ayudarte?'
      ],
      'fr': [
        'Bonjour, comment puis-je vous aider ?',
        'Salut, comment puis-je vous aider ?',
        'Bonjour, en quoi puis-je vous aider ?',
        'Bonjour, que puis-je faire pour vous ?',
        'Bonjour, comment je peux vous aider aujourd\'hui ?'
      ],
      'de': [
        'Hallo, wie kann ich Ihnen helfen?',
        'Guten Tag, wie kann ich Ihnen helfen?',
        'Hallo, wie kann ich Ihnen behilflich sein?',
        'Guten Morgen, wie kann ich Ihnen helfen?',
        'Hi, was kann ich für Sie tun?'
      ],
      'ja': [
        'こんにちは、何かお手伝いできますか？',
        'はじめまして、何かご質問はありますか？',
        'お問い合わせありがとうございます。どういったことでお困りですか？',
        'こんにちは。何かお探しですか？',
        'こんにちは。ご相談はありますか？'
      ],
      'ko': [
        '안녕하세요, 무엇을 도와드릴까요?',
        '안녕하세요, 무엇이 문제인가요?',
        '안녕하세요, 무엇을 도와드릴까요?',
        '안녕하세요, 어떤 문제가 있으신가요?',
        '안녕하세요, 도움이 필요하시면 언제든지 말씀해주세요.'
      ],
      'pt': [
        'Olá, em que posso ajudar?',
        'Oi, como posso ajudar?',
        'Boa tarde, como posso ajudá-lo?',
        'Posso ajudar em alguma coisa?',
        'Olá, posso ajudar em algo?'
      ],
      'it': [
        'Ciao, come posso aiutarti?',
        'Salve, di cosa hai bisogno?',
        'Buongiorno, in che modo posso aiutarti?',
        'Ciao, posso aiutarti in qualche modo?',
        'Salve, di che hai bisogno?'
      ],
      'zh-TW': ['你好，有什麼可以幫助你的嗎？', '您好，需要我幫忙嗎？', '哈囉，有什麼我可以幫忙的嗎？', '您好，我能為您做些什麼？', '歡迎詢問，我有什麼可以幫忙的嗎？'],
      'zh-HK': ['你好，有什麼可以幫助你的嗎？', '您好，需要我幫忙嗎？', '哈囉，有什麼我可以幫忙的嗎？', '您好，我能為您做些什麼？', '歡迎詢問，我有什麼可以幫忙的嗎？'],
      'zh': [
        '你好，有什么需要帮助的吗？',
        '您好，需要我帮忙吗？',
        '你好，请问有什么可以帮您的？',
        '您好，我能为您提供什么服务？',
        '嗨，有什么我可以帮您的吗？'
      ],
      'ru': [
        'Здравствуйте, чем я могу вам помочь?',
        'Привет, чем я могу вам помочь?',
        'Здравствуйте, как я могу вам помочь?',
        'Приветствую, чем я могу быть полезен?',
        'Здравствуйте, чем я могу вам помочь сегодня?'
      ]
    },
    ending: {
      'en': [
      'What else can I do for you?',
      'Is there anything else I can assist you with?',
      'Do you require any further assistance from me?',
      'Are there any other ways I can be of service to you?',
      'Would you like me to do anything else for you?'
      ],
      'es': [
      '¿Qué más puedo hacer por ti?',
      '¿Hay algo más en lo que pueda ayudarte?',
      '¿Necesitas alguna otra asistencia de mi parte?',
      '¿Hay alguna otra manera en la que pueda ser de servicio para ti?',
      '¿Te gustaría que hiciera algo más por ti?'
      ],
      'fr': [
      `Que puis-je faire d'autre pour vous ?`,
      'Est-ce que je peux vous aider avec autre chose ?',
      `Avez-vous besoin d'une assistance supplémentaire de ma part ?`,
      `Y a-t-il d'autres moyens par lesquels je peux être utile pour vous ?`,
      'Voulez-vous que je fasse autre chose pour vous ?'
      ],
      'de': [
      'Was kann ich noch für Sie tun?',
      'Kann ich Ihnen noch in anderer Weise behilflich sein?',
      'Benötigen Sie weitere Unterstützung von mir?',
      'Gibt es noch andere Möglichkeiten, wie ich Ihnen dienen kann?',
      'Möchten Sie, dass ich noch etwas anderes für Sie tue?'
      ],
      'ja': [
      '他に何かご用件はありますか？',
      '他に何かお手伝いできることはありますか？',
      '私に他に何かお力になることはありますか？',
      '他にも何かお役に立てる方法はありますか？',
      '他に何かしてほしいことはありますか？'
      ],
      'ko': [
      '더 도와 드릴 게 있나요?',
      '다른 무언가 도와 드릴 수 있나요?',
      '제가 더 도움을 드릴 수 있는 것이 있나요?',
      '다른 방법으로도 봉사할 수 있는 게 있나요?',
      '제가 더 해 줄 일이 있나요?'
      ],
      'pt': [
      'O que mais posso fazer por você?',
      'Existe algo mais em que posso ajudá-lo?',
      'Você precisa de mais alguma assistência minha?',
      'Existem outras maneiras pelas quais posso ser útil para você?',
      'Você gostaria que eu fizesse algo mais por você?'
      ],
      'it': [
      'Cosa altro posso fare per te?',
      `C'è qualcos'altro in cui posso aiutarti?`,
      'Hai bisogno di ulteriore assistenza da parte mia?',
      'Ci sono altri modi in cui posso esserti utile?',
      'Desideri che io faccia altro per te?'
      ],
      'zh-TW': [
      '還有什麼我可以為您做的嗎？',
      '還有什麼我可以幫您的嗎？',
      '您需要我提供什麼其他的協助嗎？',
      '還有其他什麼方式我可以為您服務嗎？',
      '您還需要我為您做些什麼嗎？'
      ],
      'zh-HK': [
      '我還可以為您做些什麼嗎？',
      '還有什麼我可以協助您的嗎？',
      '您需要我提供其他的幫助嗎？',
      '還有其他方法可以令我為您服務嗎？',
      '您還需要我為您做其他事嗎？'
      ],
      'zh': [
      '还有什么我可以为您做的吗？',
      '还有什么我可以帮您的吗？',
      '您需要我提供什么其他的协助吗？',
      '还有其他什么方式我可以为您服务吗？',
      '您还需要我为您做些什么吗？'
      ],
      'ru': [
      'Чем еще я могу Вам помочь?',
      'Нужна ли Вам еще какая-либо помощь с моей стороны?',
      'Требуется ли Вам дополнительная помощь от меня?',
      'Есть ли другие способы, которыми я могу быть Вам полезен?',
      'Хотели бы Вы, чтобы я что-то еще сделал для Вас?'
      ]
    }
  };
  
  const statusDict = {
    'Introduction': {
      en: 'Welcome to your personal finance and business news assistant! My goal is to help you get the most value out of your subscription by providing customized recommendations and insights. ',
      es: '¡Bienvenido a tu asistente personal de finanzas y noticias empresariales! Mi objetivo es ayudarte a obtener el mayor valor de tu suscripción mediante recomendaciones e ideas personalizadas.',
      fr: 'Bienvenue à votre assistant personnel pour les actualités financières et commerciales ! Mon objectif est de vous aider à tirer le meilleur parti de votre abonnement en vous fournissant des recommandations et des informations personnalisées.',
      de: 'Willkommen bei Ihrem persönlichen Finanz- und Wirtschaftsnachrichtenassistenten! Mein Ziel ist es, Ihnen durch maßgeschneiderte Empfehlungen und Einblicke den größten Nutzen aus Ihrem Abonnement zu verschaffen.',
      ja: 'ファイナンシャル・タイムズのパーソナル・ファイナンス＆ビジネスニュース・アシスタントへようこそ！私の目標は、カスタマイズされた推奨事項と洞察力を提供することで、あなたのサブスクリプションから最大の価値を得ることをお手伝いすることです。',
      ko: '개인 맞춤형 금융 및 비즈니스 뉴스 어시스턴트에 오신 것을 환영합니다! 나의 목표는 맞춤형 추천 및 인사이트를 제공하여 구독에서 최대 가치를 끌어내는 것입니다.',
      pt: 'Bem-vindo ao seu assistente pessoal de finanças e notícias empresariais! Meu objetivo é ajudá-lo a obter o máximo valor da sua assinatura, fornecendo recomendações e insights personalizados.',
      it: 'Benvenuto nel tuo assistente personale per le notizie finanziarie e commerciali! Il mio obiettivo è aiutarti a ottenere il massimo valore dalla tua sottoscrizione fornendo raccomandazioni e informazioni personalizzate.',
      'zh-TW': '歡迎使用專屬於您的財經新聞助理！我的目標是透過提供量身定制的建議和深度分析，協助您充分利用您的訂閱。',
      'zh-HK': '歡迎使用專屬於您的財經新聞助理！我的目標是透過提供量身定制的建議和深度分析，協助您充分利用您的訂閱。',
      zh: '欢迎使用专属于您的财经新闻助理！我的目标是通过提供量身定制的推荐和深度分析，协助您充分利用您的订阅。',
      ru: 'Добро пожаловать в вашего персонального помощника по финансовым и бизнес-новостям! Моя цель - помочь вам получить максимальную пользу от вашей подписки, предоставляя настраиваемые рекомендации и аналитику.'
    },
    'OtherReason': {
      en: 'Other reason',
      es: 'Otra razón',
      fr: 'Autre raison',
      de: 'Andere Gründe',
      ja: 'その他の理由',
      ko: '기타 이유',
      pt: 'Outro motivo',
      it: 'Altro motivo',
      'zh-TW': '其他原因',
      'zh-HK': '其他原因',
      zh: '其他原因',
      ru: 'Другая причина'
    },
    'Error': {
      en: 'Error',
      es: 'Error',
      fr: 'Erreur',
      de: 'Fehler',
      ja: 'エラー',
      ko: '오류',
      pt: 'Erro',
      it: 'Errore',
      'zh-TW': '錯誤',
      'zh-HK': '錯誤',
      zh: '错误',
      ru: 'Ошибка'
    },
    'CustomerService': {
      en: 'Customer Service',
      es: 'Servicio al Cliente',
      fr: 'Service Client',
      de: 'Kundenservice',
      ja: 'カスタマーサービス',
      ko: '고객 서비스',
      pt: 'Atendimento ao Cliente',
      it: 'Assistenza Clienti',
      'zh-TW': '客戶服務',
      'zh-HK': '客戶服務',
      zh: '客户服务',
      ru: 'Обслуживание клиентов'
    },
    'BackToTop': {
      zh: '从头开始',
      en: 'Start Over',
      es: 'Empezar de nuevo',
      fr: 'Recommencer',
      de: 'Von vorn beginnen',
      ja: '最初からやり直す',
      ko: '처음부터 다시 시작',
      pt: 'Começar de novo',
      it: 'Ricominciare',
      'zh-TW': '',
      'zh-HK': '',
      ru: 'Начать заново'
    },
    'DiscussArticle': {
      zh: '讨论文章',
      en: 'Discuss Article',
      es: 'Discutir Artículo',
      fr: `Discuter de l'article`,
      de: 'Artikel diskutieren',
      ja: '記事を議論する',
      ko: '글 논의',
      pt: 'Discutir Artigo',
      it: 'Discutere Articolo',
      'zh-TW': '討論文章',
      'zh-HK': '討論文章',
      ru: 'Обсудить статью'
    },
    'ChangeSubject': {
      en: 'Change Subject',
      zh:'改变话题',
      es: 'Cambiar Tema',
      fr: 'Changer de sujet',
      de: 'Thema ändern',
      ja: '話題を変える',
      ko: '주제 변경',
      pt: 'Mudar de assunto',
      it: 'Cambiare argomento',
      'zh-TW': '改變話題',
      'zh-HK': '改變話題',
      ru: 'Изменить тему'
    },
    'socratic': {
      zh: '苏格拉底诘问',
      en: 'Socratic Method',
      es: 'Método socrático',
      fr: 'Méthode socratique',
      de: 'Sokratische Methode',
      ja: 'ソクラテス式問い掛け法',
      ko: '소크라테스적 방법',
      pt: 'Método socrático',
      it: 'Metodo socratico',
      'zh-TW': '蘇格拉底質問',
      'zh-HK': '蘇格拉底式質問',
      ru: 'Сократический метод'
    },
    'SearchFTAPI': {
      en: 'Search FT',
      es: 'Buscar FT',
      fr: 'Rechercher FT',
      de: 'FT suchen',
      ja: 'FT検索',
      ko: 'FT 검색',
      pt: 'Pesquisar FT',
      it: 'Cerca FT',
      'zh-TW': '搜尋FT',
      'zh-HK': '搜尋FT',
      zh: '搜索FT',
      ru: 'Поиск FT'
    },
    'DiscussContent': {
      en: 'Talk about FT Content',
      zh: '讨论FT内容',
      es: 'Hablar sobre el contenido de FT',
      fr: 'Parler du contenu de FT',
      de: 'Über FT-Inhalte sprechen',
      ja: 'FTコンテンツについて話す',
      ko: 'FT 콘텐츠에 대해 이야기하다',
      pt: 'Falar sobre o conteúdo do FT',
      it: 'Parlare del contenuto di FT',
      'zh-TW': '討論FT內容',
      'zh-HK': '討論FT內容',
      ru: 'Обсуждение контента FT'
    },
    'Other': {
      en: 'Just Chat',
      es: 'Solo Chat',
      fr: 'Discussion',
      de: 'Nur Chatten',
      ja: 'チャットのみ',
      ko: '채팅만',
      pt: 'Apenas Bate-papo',
      it: 'Solo Chat',
      'zh-TW': '隨便聊聊',
      'zh-HK': '隨便聊聊',
      zh: '随便聊聊',
      ru: 'Просто чат'
    },
    'Final Score': {
      en: 'Final Score',
      es: 'Puntuación Final',
      fr: 'Score Final',
      de: 'Endstand',
      ja: '最終スコア',
      ko: '최종 점수',
      pt: 'Pontuação Final',
      it: 'Punteggio Finale',
      'zh-TW': '最終得分',
      'zh-HK': '最終得分',
      zh: '最终得分',
      ru: 'Итоговый счет'
    },
    'Quiz Me': {
      en: 'Test my understanding',
      es: 'Prueba mi comprensión',
      fr: 'Testez ma compréhension',
      de: 'Teste mein Verständnis',
      ja: '私の理解をテストしてください',
      ko: '내 이해를 테스트하세요',
      pt: 'Teste a minha compreensão',
      it: 'Testa la mia comprensione',
      'zh-TW': '測試我的理解',
      'zh-HK': '測試我的理解',
      zh: '测试我的理解',
      ru: 'Проверьте мое понимание'
    },
    'Socratic Method': {
      zh: '苏格拉底诘问',
      en: 'Socratic method',
      es: 'Método socrático',
      fr: 'Méthode socratique',
      de: 'Sokratische Methode',
      ja: 'ソクラテス式問い掛け法',
      ko: '소크라테스적 방법',
      pt: 'Método socrático',
      it: 'Metodo socratico',
      'zh-TW': '蘇格拉底質問',
      'zh-HK': '蘇格拉底式質問',
      ru: 'Сократический метод'
    },
    'Socratic Method Explained': {
      en: 'The Socratic Method is a way of questioning and discussing ideas to challenge assumptions and arrive at a better understanding. It involves asking questions to uncover underlying beliefs and test the logic of responses given. It is used to promote critical thinking, problem-solving, and creativity in various fields.',
      zh: '苏格拉底诘问方法是一种质疑和讨论观念的方式，旨在挑战假设并达到更好的理解。它涉及提出问题以揭示潜在信念并测试所给出的响应的逻辑。它用于在各个领域中促进批判性思维、问题解决和创造力。',
      es: 'El Método Socrático es una forma de cuestionar y discutir ideas para desafiar suposiciones y llegar a una mejor comprensión. Implica hacer preguntas para descubrir creencias subyacentes y poner a prueba la lógica de las respuestas dadas. Se utiliza para promover el pensamiento crítico, la resolución de problemas y la creatividad en varios campos.',
      fr: 'La méthode socratique est une façon de questionner et de discuter des idées afin de remettre en question les hypothèses et parvenir à une meilleure compréhension. Elle consiste à poser des questions pour découvrir les croyances sous-jacentes et tester la logique des réponses données. Elle est utilisée pour promouvoir la pensée critique, la résolution de problèmes et la créativité dans différents domaines.',
      de: 'Die sokratische Methode ist eine Art des Fragens und Diskutierens von Ideen, um Annahmen herauszufordern und zu einem besseren Verständnis zu gelangen. Es beinhaltet Fragen, um zugrunde liegende Überzeugungen aufzudecken und die Logik der gegebenen Antworten zu prüfen. Es wird verwendet, um kritisches Denken, Problemlösung und Kreativität in verschiedenen Bereichen zu fördern.',
      ja: 'ソクラテスの方法は、仮定に挑戦し、より良い理解に到達するための問いかけと議論の方法です。潜在的な信念を明らかにするために質問し、回答の論理をテストすることが含まれます。さまざまな分野で批判的思考、問題解決、創造性を促進するために使用されています。',
      ko: '소크라테스 방법은 가정을 도전하고 더 나은 이해를 도출하기 위해 아이디어에 대한 질문과 토론하는 방법입니다. 대답의 논리를 검증하고, 깔끔하지 않은 논리를 깨우쳐 신념을 드러냅니다. 다양한 분야에서 비판적 사고, 문제 해결 및 창의성을 촉진하는 데 사용됩니다.',
      pt: 'O Método Socrático é uma maneira de questionar e discutir ideias para desafiar pressupostos e chegar a uma melhor compreensão. Envolve fazer perguntas para descobrir crenças subjacentes e testar a lógica das respostas dadas. É usado para promover o pensamento crítico, a resolução de problemas e a criatividade em várias áreas.',
      it: `Il Metodo Socratico è un modo di interrogare e discutere le idee per mettere in discussione le assunzioni e arrivare ad una migliore comprensione. Comprende l'arte di porre domande per scoprire le credenze sottostanti e testare la logica delle risposte date. È utilizzato per promuovere il pensiero critico, la risoluzione dei problemi e la creatività in vari campi.`,
      'zh-TW': '蘇格拉底詰問方法是一種質疑和討論觀念的方式，旨在挑戰假設並達到更好的理解。它涉及提出問題以揭示潛在信念並測試所給出的回應的邏輯。它用於在各個領域中促進批判性思維、問題解決和創造力。',
      'zh-HK': '蘇格拉底詰問方法是一種質疑和討論觀念的方式，旨在挑戰假設並達到更好的理解。它涉及提出問題以揭示潛在信念並測試所給出的回應的邏輯。它用於在各個領域中促進批判性思維、問題解決和創造力。',
      ru: 'Метод Сократа - это способ вопросительного и обсуждающего подхода к идеям, направленный на оспаривание предположений и достижение лучшего понимания. Он включает в себя задавание вопросов, чтобы раскрыть скрытые убеждения и проверить логику полученных ответов. Используется для развития критического мышления, решения проблем и креативности в различных областях.'
    },
    'China News': {
      en: 'China',
      es: 'China',
      fr: 'Chine',
      de: 'China',
      ja: '中国',
      ko: '중국',
      pt: 'China',
      it: 'Cina',
      ru: 'Китай',
      'zh-TW': '中國',
      'zh-HK': '中國',
      zh: '中国'
    },
    'Companies': {
      en: 'Companies',
      es: 'Empresas',
      fr: 'Entreprises',
      de: 'Unternehmen',
      ja: '企業',
      ko: '회사',
      pt: 'Empresas',
      it: 'Aziende',
      ru: 'Компании',
      'zh-TW': '公司',
      'zh-HK': '公司',
      zh: '公司'
    },
    'Markets': {
      en: 'Markets',
      es: 'Mercados',
      fr: 'Marchés',
      de: 'Märkte',
      ja: '市場',
      ko: '시장',
      pt: 'Mercados',
      it: 'Mercati',
      ru: 'Рынки',
      'zh-TW': '市場',
      'zh-HK': '市場',
      zh: '市场'
    },
    'Opinion': {
      en: 'Opinion',
      es: 'Opinión',
      fr: 'Opinion',
      de: 'Meinung',
      ja: '意見',
      ko: '의견',
      pt: 'Opinião',
      it: 'Opinione',
      ru: 'Мнение',
      'zh-TW': '觀點',
      'zh-HK': '觀點',
      zh: '观点'
    },
    'Podcasts': {
      en: 'Podcasts',
      es: 'Podcasts',
      fr: 'Podcasts',
      de: 'Podcasts',
      ja: 'ポッドキャスト',
      ko: '팟캐스트',
      pt: 'Podcasts',
      it: 'Podcast',
      ru: 'Подкасты',
      'zh-TW': '播客',
      'zh-HK': '播客',
      zh: '播客'
    },
    'Videos': {
      en: 'Videos',
      es: 'Videos',
      fr: 'Vidéos',
      de: 'Videos',
      ja: 'ビデオ',
      ko: '동영상',
      pt: 'Vídeos',
      it: 'Video',
      ru: 'Видео',
      'zh-TW': '視頻',
      'zh-HK': '視頻',
      zh: '视频'
    },
    'Life & Arts': {
      en: 'Life & Arts',
      es: 'Estilo de vida y arte',
      fr: 'Art de vivre',
      de: 'Leben & Kunst',
      ja: 'ライフ＆アート',
      ko: '라이프 & 아트',
      pt: 'Estilo de vida e arte',
      it: 'Vita e arte',
      ru: 'Жизнь и искусство',
      'zh-TW': '生活與藝術',
      'zh-HK': '生活與藝術',
      zh: '生活与艺术'
    },
    'Work & Careers': {
      en: 'Work & Careers',
      es: 'Trabajo y carreras',
      fr: 'Travail et carrières',
      de: 'Arbeit & Karriere',
      ja: '仕事とキャリア',
      ko: '직업 및 경력',
      pt: 'Trabalho e carreiras',
      it: 'Lavoro e carriere',
      ru: 'Работа и карьера',
      'zh-TW': '工作與職涯',
      'zh-HK': '工作與職涯',
      zh: '工作与职业'
    },
    'AI News': {
      en: 'AI',
      es: 'IA',
      fr: 'IA',
      de: 'AI',
      ja: 'AI',
      ko: 'AI',
      pt: 'IA',
      it: 'IA',
      'zh-TW': '人工智慧',
      'zh-HK': 'AI',
      zh: '人工智能',
      ru: 'ИИ'
    },
    'Need Customer Service': {
      en: 'Customer Service',
      es: 'Servicio al Cliente',
      fr: 'Service Client',
      de: 'Kundenservice',
      ja: 'カスタマーサービス',
      ko: '고객 서비스',
      pt: 'Atendimento ao Cliente',
      it: 'Servizio Clienti',
      'zh-TW': '客服',
      'zh-HK': '客戶服務',
      zh: '客户服务',
      ru: 'Служба поддержки'
    },
    'Discover and Explore': {
      en: 'Discover and Explore',
      es: 'Descubrir y explorar',
      fr: 'Découvrir et explorer',
      de: 'Entdecken und erkunden',
      ja: '発見と探索',
      ko: '발견과 탐험',
      pt: 'Descobrir e explorar',
      it: 'Scoprire ed esplorare',
      'zh-TW': '發現與探索',
      'zh-HK': '發現與探索',
      zh: '发现与探索',
      ru: 'Откройте для себя и исследуйте'
    },
    'Looking For News': {
      en: `What's news?`,
      es: `¿Qué hay de nuevo?`,
      fr: `Quoi de neuf?`,
      de: `Was gibt's Neues?`,
      ja: `何か新しいことはある？`,
      ko: `뭐가 새로운 소식이야?`,
      pt: `Quais são as novidades?`,
      it: `Quali sono le novità?`,
      'zh-TW': `今日要聞`,
      'zh-HK': `今日要聞`,
      zh: `今日要闻`,
      ru: `Что нового?`
    },
    'Deep Dive': {
      zh: '深度报道',
      en: 'In-depth reports',
      es: 'Reportajes en profundidad',
      fr: 'Reportages approfondis',
      de: 'Vertiefende Berichte',
      ja: '綿密な報道',
      ko: '심층 보도',
      pt: 'Reportagens em profundidade',
      it: 'Approfondimenti',
      'zh-TW': '深度報導',
      'zh-HK': '深度報導',
      ru: 'Глубокие репортажи'
    },
    'Tech News': {
      zh: '科技',
      en: 'Technology',
      es: 'Tecnología',
      fr: 'Technologie',
      de: 'Technologie',
      ja: 'テクノロジー',
      ko: '기술',
      pt: 'Tecnologia',
      it: 'Tecnologia',
      'zh-TW': '科技',
      'zh-HK': '科技',
      ru: 'Технологии'
    },
    'Offer Help': {
      zh: '好的，需要我怎么帮助您？',
      en: 'Sure, how can I help you?',
      es: 'Claro, ¿en qué puedo ayudarle?',
      fr: 'Bien sûr, comment puis-je vous aider?',
      de: 'Ja, wie kann ich Ihnen helfen?',
      ja: '承知しました。何かお力になれることはありますか？',
      ko: '네, 무엇을 도와드릴까요?',
      pt: 'Claro, como posso ajudá-lo?',
      it: 'Certamente, in che modo posso aiutarti?',
      'zh-TW': '好的，有什麼我能幫到您的嗎？',
      'zh-HK': '好的，有什麼我能幫到您的嗎？',
      ru: 'Конечно, в чем я могу вам помочь?'
    },
    'Discuss Article': {
      zh: '关于这篇文章，如果您有任何问题，可以现在问我。',
      en: "If you have any questions about this article, feel free to ask me now.",
      es: "Si tienes alguna pregunta sobre este artículo, no dudes en preguntarme ahora.",
      fr: "Si vous avez des questions sur cet article, n'hésitez pas à me demander maintenant.",
      de: "Wenn Sie Fragen zu diesem Artikel haben, fragen Sie mich gerne jetzt.",
      ja: "この記事についての質問があれば、遠慮なくお聞きください。",
      ko: "이 기사에 대해 궁금한 점이 있으면 지금 저에게 물어보세요.",
      pt: "Se você tiver alguma dúvida sobre este artigo, sinta-se à vontade para me perguntar agora.",
      it: "Se hai domande su questo articolo, sentiti libero di chiedermi ora.",
      'zh-TW': "關於這篇文章，如果您有任何問題，可以現在問我。",
      'zh-HK': "關於呢篇文章，如果你有咩問題，可以即刻問我。",
      ru: "Если у вас есть вопросы по этой статье, не стесняйтесь спрашивать меня сейчас."
    },
    Finding: {
      zh: '好的，我来帮您查询...',
      en: 'Okay, let me help you search...',
      es: 'De acuerdo, déjame ayudarte a buscar...',
      fr: `D'accord, laissez-moi vous aider à chercher...`,
      de: 'Okay, ich helfe Ihnen gerne bei der Suche...',
      ja: '了解しました、検索をお手伝いします...',
      ko: '알겠습니다. 검색을 도와드리겠습니다...',
      pt: 'Certo, deixe-me ajudá-lo a pesquisar...',
      it: 'Va bene, lascia che ti aiuti a cercare...',
      'zh-TW': '好的，我來幫您查詢...',
      'zh-HK': '好的，我來幫您查詢...',
      ru: 'Хорошо, я помогу вам найти...'
    },
    'What do you want to find?': {
      zh: '好的，您可以点击下面这些最为常见的查询，也可以告诉我您想找什么内容。',
      en: 'Okay, you can click on the most common queries below, or tell me what content you are looking for.',
      es: 'De acuerdo, puedes hacer clic en las consultas más comunes a continuación, o decirme qué contenido estás buscando.',
      fr: `D'accord, vous pouvez cliquer sur les requêtes les plus courantes ci-dessous, ou me dire quel contenu vous recherchez.`,
      de: 'Okay, Sie können auf die häufigsten Abfragen unten klicken oder mir sagen, wonach Sie suchen.',
      ja: 'わかりました。以下の最も一般的なクエリをクリックするか、お探しのコンテンツを教えてください。',
      ko: '알겠습니다. 가장 일반적인 쿼리를 아래에서 클릭하거나 찾으시는 콘텐츠를 말씀해주세요.',
      pt: 'Ok, você pode clicar nas consultas mais comuns abaixo ou me dizer que conteúdo está procurando.',
      it: 'Va bene, puoi cliccare sulle query più comuni qui sotto o dirmi quale contenuto stai cercando.',
      'zh-TW': '好的，您可以點擊下面這些最常見的查詢，或告訴我您要找什麼內容。',
      'zh-HK': '好嘢，您可以喺下面啲最常見嘅查詢入面揀一個，或者講俾我知您要搵咩嘢。',
      ru: 'Хорошо, вы можете нажать на наиболее распространенные запросы ниже или сообщить мне, какой контент вы ищете.'
    },
    'Find More': {
      zh: '您可以点击下面这些最为常见的查询，或者告诉我您想找什么内容。',
      en: 'You can click on these most common queries below, or tell me what content you are looking for.',
      es: 'Puede hacer clic en estas consultas más comunes a continuación, o decirme qué contenido está buscando.',
      fr: 'Vous pouvez cliquer sur ces requêtes les plus courantes ci-dessous, ou me dire quel contenu vous recherchez.',
      de: 'Sie können auf diese am häufigsten gestellten Abfragen unten klicken oder mir sagen, wonach Sie suchen.',
      ja: '以下の最も一般的なクエリをクリックするか、探しているコンテンツを教えてください。',
      ko: '가장 일반적인 쿼리 중 하나를 클릭하거나 찾으려는 콘텐츠를 알려주세요.',
      pt: 'Você pode clicar nas consultas mais comuns abaixo ou me dizer que conteúdo está procurando.',
      it: 'Puoi cliccare su queste query più comuni qui sotto, o dirmi quale contenuto stai cercando.',
      'zh-TW': '您可以點擊下面這些最常見的查詢，或告訴我您想要尋找什麼內容。',
      'zh-HK': '你可以按下面最常見的查詢，或者告訴我你想搵咩內容。',
      ru: 'Вы можете щелкнуть на эти самые распространенные запросы ниже или сообщить мне, какой контент вы ищете.'
    },
    'Discuss More': {
      zh: '如果有任何关于FT最新内容的问题，请立即问我。',
      en: 'If you have any questions about the latest FT content, please ask me immediately.',
      es: 'Si tiene alguna pregunta sobre el contenido más reciente de FT, pregúnteme de inmediato.',
      fr: 'Si vous avez des questions sur le contenu le plus récent de FT, demandez-moi immédiatement.',
      de: 'Wenn Sie Fragen zum neuesten FT-Inhalt haben, fragen Sie mich bitte sofort.',
      ja: '最新のFTコンテンツに関する質問がある場合は、すぐに私に尋ねてください。',
      ko: '최신 FT 콘텐츠에 대한 질문이 있으면 즉시 저에게 물어보세요.',
      pt: 'Se você tiver alguma dúvida sobre o conteúdo mais recente do FT, pergunte-me imediatamente.',
      it: 'Se hai domande sul contenuto più recente di FT, chiedimi immediatamente.',
      'zh-TW': '如果有關於FT最新內容的問題，請立即問我。',
      'zh-HK': '如果有關FT最新內容的問題，請立即問我。',
      ru: 'Если у вас есть вопросы о последних материалах FT, пожалуйста, спросите меня немедленно.'
    },
    'DoSomethingElse': {
      zh: '聊点别的',
      en: `Talk about something else`,
      es: 'Hablemos de algo más',
      fr: `Parlons d'autre chose`,
      de: 'Lass uns über etwas anderes sprechen',
      ja: '他の話題にしましょう',
      ko: '다른 얘기 좀 하자',
      pt: 'Vamos falar sobre outra coisa',
      it: `Parliamo d'altro`,
      'zh-TW': '聊點別的',
      'zh-HK': '傾下計啦',
      ru: 'Давайте поговорим о чем-то другом'
    },
    'Set Your Preferences': {
      zh: '您可以在这里修改您的偏好及设置',
      en: 'You can modify your preferences and settings here.',
      es: 'Puede modificar sus preferencias y configuraciones aquí.',
      fr: 'Vous pouvez modifier vos préférences et paramètres ici.',
      de: 'Sie können hier Ihre Einstellungen und Vorlieben ändern.',
      ja: 'ここで好みや設定を変更できます。',
      ko: '여기에서 선호도와 설정을 수정할 수 있습니다.',
      pt: 'Você pode modificar suas preferências e configurações aqui.',
      it: 'Puoi modificare le tue preferenze e impostazioni qui.',
      'zh-TW': '您可以在這裡修改您的偏好和設置。',
      'zh-HK': '您可以在這裡修改您的偏好和設置。',
      ru: 'Вы можете изменить свои предпочтения и настройки здесь.'
    },
    'Setting': {
      zh: '设置',
      en: 'Settings',
      es: 'Ajustes',
      fr: 'Paramètres',
      de: 'Einstellungen',
      ja: '設定',
      ko: '설정',
      pt: 'Configurações',
      it: 'Impostazioni',
      'zh-TW': '設定',
      'zh-HK': '設定',
      ru: 'Настройки'
    },
    'Language': {
      zh: '语言',
      en: 'Language',
      es: 'Idioma',
      fr: 'Langue',
      de: 'Sprache',
      ja: '言語',
      ko: '언어',
      pt: 'Língua',
      it: 'Lingua',
      'zh-TW': '語言',
      'zh-HK': '語言',
      ru: 'Язык'
    },
    'Font Size': {
      zh: '字体大小',
      en: 'Font Size',
      es: 'Tamaño de Fuente',
      fr: 'Taille de Police',
      de: 'Schriftgröße',
      ja: 'フォントサイズ',
      ko: '글꼴 크기',
      pt: 'Tamanho da Fonte',
      it: 'Dimensioni del Carattere',
      'zh-TW': '字型大小',
      'zh-HK': '字型大小',
      ru: 'Размер шрифта'
    },
    'Read Article': {
      zh: '阅读文章',
      en: 'Read Article',
      es: 'Leer artículo',
      fr: `Lire l'article`,
      de: 'Artikel lesen',
      ja: '記事を読む',
      ko: '기사 읽기',
      pt: 'Ler artigo',
      it: 'Leggi articolo',
      'zh-TW': '閱讀文章',
      'zh-HK': '閱讀文章',
      ru: 'Прочитать статью'
    },
    'Pop Out': {
      zh: '打开新页面',
      en: 'Pop Out',
      es: 'Abrir en nueva pestaña',
      fr: 'Ouvrir dans un nouvel onglet',
      de: 'In neuem Fenster öffnen',
      ja: '新しいウィンドウで開く',
      ko: '새 창에서 열기',
      pt: 'Abrir em nova janela',
      it: 'Apri in una nuova finestra',
      'zh-TW': '開新分頁',
      'zh-HK': '開新分頁',
      ru: 'Открыть в новом окне'
    },
    'In Chat': {
      zh: '在对话中',
      en: 'In Chat',
      es: 'En el chat',
      fr: 'Dans le chat',
      de: 'Im Chat',
      ja: 'チャット内',
      ko: '채팅에서',
      pt: 'No chat',
      it: 'In chat',
      'zh-TW': '在聊天中',
      'zh-HK': '在聊天中',
      ru: 'В чате'
    },
    'Please Select': {
      zh: '请选择',
      en: 'Please Select',
      es: 'Por favor, seleccione',
      fr: 'Veuillez sélectionner',
      de: 'Bitte auswählen',
      ja: '選択してください',
      ko: '선택하세요',
      pt: 'Por favor Selecione',
      it: 'Seleziona per favore',
      'zh-TW': '請選擇',
      'zh-HK': '請選擇',
      ru: 'Пожалуйста, выберите'
    },
    'Smallest': {
      zh: '最小',
      en: 'Smallest',
      es: 'Más Pequeño',
      fr: 'Le plus petit',
      de: 'Kleinsten',
      ja: '最小',
      ko: '가장 작은',
      pt: 'O menor',
      it: 'Il più piccolo',
      'zh-TW': '最小',
      'zh-HK': '最小',
      ru: 'Самый маленький'
    },
    'Smaller': {
      zh: '较小',
      en: 'Smaller',
      es: 'Menor',
      fr: 'Plus petit',
      de: 'Kleiner',
      ja: '小さい',
      ko: '작은',
      pt: 'Menor',
      it: 'Meno',
      'zh-TW': '較小',
      'zh-HK': '較小',
      ru: 'Меньше'
    },
    'Default': {
      zh: '默认',
      en: 'Default',
      es: 'Predeterminado',
      fr: 'Défaut',
      de: 'Standard',
      ja: 'デフォルト',
      ko: '기본값',
      pt: 'Padrão',
      it: 'Predefinito',
      'zh-TW': '預設',
      'zh-HK': '預設',
      ru: 'По умолчанию'
    },
    'Larger': {
      zh: '较大',
      en: 'Larger',
      es: 'Mayor',
      fr: 'Plus grand',
      de: 'Größer',
      ja: '大きい',
      ko: '더 큰',
      pt: 'Maior',
      it: 'Più grande',
      'zh-TW': '較大',
      'zh-HK': '較大',
      ru: 'Больше'
    },
    'Largest': {
      zh: '最大',
      en: 'Largest',
      es: 'Más Grande',
      fr: 'Le plus grand',
      de: 'Größten',
      ja: '最大',
      ko: '가장 큰',
      pt: 'O maior',
      it: 'Il più grande',
      'zh-TW': '最大',
      'zh-HK': '最大',
      ru: 'Самый большой'
    },
    'Sign In': {
      zh: '登录',
      en: 'Sign In',
      es: 'Iniciar sesión',
      fr: 'Se connecter',
      de: 'Anmelden',
      ja: 'ログイン',
      ko: '로그인',
      pt: 'Entrar',
      it: 'Accedi',
      'zh-TW': '登入',
      'zh-HK': '登入',
      ru: 'Вход'
    },
    'Sign Up': {
      zh: '注册',
      en: 'Sign Up',
      es: 'Registrarse',
      fr: 'S\'inscrire',
      de: 'Registrieren',
      ja: '新規登録',
      ko: '회원가입',
      pt: 'Registar-se',
      it: 'Registrati',
      'zh-TW': '註冊',
      'zh-HK': '註冊',
      ru: 'Регистрация'
    },
    'Sign Out': {
      zh: '退出',
      en: 'Sign Out',
      es: 'Cerrar sesión',
      fr: 'Se déconnecter',
      de: 'Abmelden',
      ja: 'ログアウト',
      ko: '로그아웃',
      pt: 'Sair',
      it: 'Esci',
      'zh-TW': '登出',
      'zh-HK': '登出',
      ru: 'Выход'
    },
    'Article Translation Preference': {
      zh: '文章翻译偏好',
      en: 'Article Translation Preference',
      es: 'Preferencia de Traducción de Artículo',
      fr: 'Préférence de Traduction d\'Article',
      de: 'Artikel Übersetzungsvorlieben',
      ja: '記事の翻訳の好み',
      ko: '기사 번역 선호',
      pt: 'Preferência de Tradução de Artigo',
      it: 'Preferenza di Traduzione dell\'Articolo',
      'zh-TW': '文章翻譯偏好',
      'zh-HK': '文章翻譯偏好',
      ru: 'Предпочтения Перевода Статьи'
    },
    'Both Human and Machine Translation': {
      zh: '机器翻译及人工翻译',
      en: 'Machine and Human Translation',
      es: 'Traducción Automática y Humana',
      fr: 'Traduction Automatique et Humaine',
      de: 'Maschinen- und Menschliche Übersetzung',
      ja: '機械翻訳および人間の翻訳',
      ko: '기계 번역 및 인간 번역',
      pt: 'Tradução por Máquina e Humana',
      it: 'Traduzione Automatica e Umana',
      'zh-TW': '機器翻譯及人工翻譯',
      'zh-HK': '機器翻譯及人工翻譯',
      ru: 'Машинный и Человеческий Перевод'
    },
    'Only Use Human Translation': {
      zh: '仅人工翻译',
      en: 'Only Use Human Translation',
      es: 'Usar Solo Traducción Humana',
      fr: 'Utiliser Uniquement la Traduction Humaine',
      de: 'Nur Menschliche Übersetzung Verwenden',
      ja: '人間の翻訳のみを使用',
      ko: '인간 번역만 사용',
      pt: 'Usar Apenas Tradução Humana',
      it: 'Usa Solo la Traduzione Umana',
      'zh-TW': '僅人工翻譯',
      'zh-HK': '僅人工翻譯',
      ru: 'Использовать Только Человеческий Перевод'
    },
    'Prompt Set Intention': {
      zh: '请先点击上面的按钮，选择您需要的服务',
      en: 'Please click the button above and select the service you need.',
      es: 'Por favor, haga clic en el botón de arriba y seleccione el servicio que necesita.',
      fr: 'Veuillez cliquer sur le bouton ci-dessus et sélectionner le service dont vous avez besoin.',
      de: 'Bitte klicken Sie auf die Schaltfläche oben und wählen Sie den gewünschten Service aus.',
      ja: '上のボタンをクリックして、必要なサービスを選択してください。',
      ko: '위의 버튼을 클릭하여 필요한 서비스를 선택하십시오.',
      pt: 'Por favor, clique no botão acima e selecione o serviço que você precisa.',
      it: 'Fare clic sul pulsante sopra e selezionare il servizio di cui avete bisogno.',
      'zh-TW': '請先點擊上面的按鈕，選擇您需要的服務',
      'zh-HK': '請先按上面的按鈕，選擇您需要的服務',
      ru: 'Пожалуйста, нажмите на кнопку выше и выберите нужный сервис.'
    },
    'Read_It_Later':{
      zh: '稍后再看',
      en: 'Read Later',
      es: 'Leer más tarde',
      fr: 'Lire plus tard',
      de: 'Für später merken',
      ja: '後で読む',
      ko: '나중에 읽기',
      pt: 'Ler depois',
      it: 'Leggi dopo',
      'zh-TW': '稍後再看',
      'zh-HK': '稍後再看',
      ru: 'Прочитать позже'
    },
    'Read_It_Later_Flag':{
      zh: '文章已在下方加载完毕。',
      en: 'Content has been loaded below.',
      es: 'El contenido se ha cargado a continuación.',
      fr: 'Le contenu a été chargé ci-dessous.',
      de: 'Der Inhalt wurde unten geladen.',
      ja: 'コンテンツは下に読み込まれました。',
      ko: '콘텐츠가 아래에로드되었습니다.',
      pt: 'O conteúdo foi carregado abaixo.',
      it: 'Il contenuto è stato caricato sotto.',
      'zh-TW': '內容已在下方加載。',
      'zh-HK': '內容已在下方加載。',
      ru: 'Контент загружен ниже.'
      },
      'jump-to-article':{
        zh: '跳转到文章',
        en: 'Jump to Article',
        es: 'Ir al Artículo',
        fr: 'Aller à l\'article',
        de: 'Zum Artikel springen',
        ja: '記事へ移動',
        ko: '기사로 이동',
        pt: 'Ir para o Artigo',
        it: 'Vai all\'Articolo',
        'zh-TW': '跳轉到文章',
        'zh-HK': '跳轉到文章',
        ru: 'Перейти к статье'
      },
      'Bilingual': {
        zh: '对照',
        en: 'Bilingual',
        es: 'Bilingüe',
        fr: 'Bilingue',
        
        de: 'Zweisprachig',
        ja: 'バイリンガル',
        ko: '이중 언어',
        pt: 'Bilíngue',
        it: 'Bilingue',
        'zh-TW': '雙語',
        'zh-HK': '雙語',
        ru: 'Двуязычный'
      }
  };


  /* jshint ignore:end */