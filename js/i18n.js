/*
 * Translations. English lives in index.html; each entry maps a CSS selector
 * to an array of values in DOM order (null = keep English).
 * ponytail: order-based mapping — if you add/reorder elements in index.html,
 * update the matching array here too.
 */
window.I18N = {

  /* ───────────────────────── DEUTSCH ───────────────────────── */
  de: {
    title: 'Anwar Ul Haq — Dynamics 365 CRM & Power Platform Solution Architect',
    '.nav-links a': ['Über mich', 'Erfahrung', 'Projekte', 'Zertifizierungen', 'Skills', 'Empfehlungen'],
    '.nav-cta': ['Kontakt'],
    '#h-mcid': ['MICROSOFT ID: 991520706 // DOHA, KATAR'],
    '#h-avail': ['<span class="avail-dot"></span> Offen für neue Positionen'],
    '#h-role': ['Senior <span>Dynamics 365 CRM</span> &amp; <span>Power Platform</span> Consultant'],
    '.hero-pill': ['Doha, Katar', null, null],
    '#h-badge': ['16× Microsoft-zertifiziert — PL-600 & AB-100 Architect'],
    '.hero-scroll': ['<div class="hero-scroll-bar"></div> SCROLLEN'],
    '.stat-label': ['Jahre Erfahrung', 'Microsoft-Zertifizierungen', 'Geführtes Team', 'CRM-Implementierungen'],
    '.section-eyebrow': ['Wer ich bin', 'Karriere', 'Umgesetzte Lösungen', 'Microsoft-Nachweise', 'Technische Expertise', 'Was andere sagen', 'Lassen Sie uns etwas bauen'],
    '.section-title': ['Profil', 'Berufserfahrung', 'Ausgewählte Projekte', '16 Microsoft-Zertifizierungen', 'Skills &amp; Technologien', 'Empfehlungen'],
    '.about-summary p': ['Dynamics 365 CE &amp; Power Platform <strong>Solution Architect</strong> mit <strong>über 6 Jahren</strong> Erfahrung in der Umsetzung von CRM-Plattformen für Behörden und Unternehmen in Katar und Pakistan. <strong>Über 20 Implementierungen</strong>, Leitung eines <strong>14-köpfigen Teams</strong> und <strong>16 Microsoft-Zertifizierungen</strong>, darunter PL-600 und AB-100.'],
    '.exp-role': ['Senior Dynamics CRM &amp; Power Platform Consultant', 'Team Lead → Head of Business Applications', 'Dynamics 365 CE / CRM Consultant'],
    '.exp-period': ['Okt. 2025 — heute', 'Juni 2023 — Sep. 2025', 'Feb. 2020 — Apr. 2023'],
    '.exp-company': ['Hassad Food — Katars nationales Unternehmen für Ernährungssicherheit · Doha, Katar', 'Applab · Doha, Katar', 'Skysoft Connections · Islamabad, Pakistan'],
    '.exp-bullets li': [
      'Weiterentwicklung von <strong>Raqmana</strong>, Katars nationaler Agrarplattform auf Basis von Dynamics 365 &amp; Power Platform.',
      'Umsetzung eines <strong>Trader Support Portals</strong> für Subventionsanträge während einer regionalen Versorgungskrise.',
      'Entwicklung der Module <strong>Gerätebuchung</strong>, <strong>Aquakultur</strong>, <strong>Fallmanagement</strong> und <strong>Feedback</strong>.',
      'Integration einer <strong>KI-gestützten Erkennung von Pflanzenkrankheiten</strong> (DeepLeaf) in das Landwirtsportal.',
      'Neuarchitektur der <strong>Import-Auktion</strong> als eigenständige APIs + Frontend mit CRM-basierter Anmeldung.',
      'Leitung eines <strong>14-köpfigen Teams</strong> aus Entwicklern und Beratern für Dynamics 365- und Power Platform-Lösungen katarischer Behörden.',
      '<strong>Qatar Collaboration Hub (QCH) – MCIT:</strong> Architektur einer Serviceanfrage-Plattform für den öffentlichen Sektor auf Dynamics CRM, Power Pages, Azure App Service und Azure AI Services mit mehrstufigen Genehmigungsworkflows und einem Rundschreiben-Modul.',
      '<strong>Watad E-Consultation – MSDF:</strong> Aufbau einer Multikanal-Beratungsplattform (persönlich, Microsoft Teams, Telefon) mit Angular-Frontend und Dynamics CRM-Backend, inklusive Koordination von Sozialarbeitern und Terminplanung.',
      '<strong>IPA Qatar:</strong> Entwicklung der Module Incentives und Investment Relations mit automatisierten Workflows, Power Pages-Anpassungen, Web-APIs und Datenaustausch mit Regierungsstellen.',
      'Termine durchgehend eingehalten oder unterschritten; Sicherheits- und Datenschutzvorgaben in allen behördlichen Power Pages-Portalen durchgesetzt.',
      'Über <strong>10 CRM-Implementierungen</strong> für Kunden aus Banken, Gesundheitswesen, Automobil und Handel in Pakistan und im Nahen Osten.',
      'Integration von Dynamics CRM mit <strong>WhatsApp Cloud API</strong>, <strong>DocuSign</strong>, <strong>OneSignal</strong>, <strong>MS Bookings</strong> und <strong>7Pace Time Tracker</strong> über eigene Power Automate-Connectors und Webhooks.',
      'Erweiterung des <strong>Auto Mercado CRM</strong> über mehrere Geschäftsbereiche mit Plugins, Webressourcen, SSRS-Berichten sowie SMS-/Push-Benachrichtigungen.',
      'Aufbau von <strong>SSIS-Datenmigrationspipelines</strong> und <strong>SSRS-Berichtssammlungen</strong>; Canvas Apps als Ersatz manueller Geschäftsprozesse.'
    ],
    '.proj-filter-btn': ['Alle', null, null, null],
    '.proj-title': [
      'Trader Support Portal — MOCI Katar', 'Invest Qatar (IPAQ)', 'MCIT Katar – Collaboration Hub', 'The Flow – Finanzen &amp; Zeiterfassung',
      'Watad – Elektronisches Beratungssystem', 'Auto Mercado CRM', 'Ciclic – WhatsApp-CRM-Integration', 'BS-Migration – On-Premises in die Cloud',
      'Instant Products Group – Syrinx', 'Tech Fabric – CRM &amp; Zeiterfassung'
    ],
    '.proj-period': ['März 2026 – heute', 'Juli 2023 – Sep. 2025'],
    '.proj-body': [
      'Aufbau eines Trader Support Portals von Grund auf für das Ministerium für Handel und Industrie (MOCI) in Katar, das Händler während einer regionalen Versorgungskrise mit Transportkostenzuschüssen unterstützt. Anpassung von Dynamics 365 CRM an die Subventionsprozesse, CRM-Automatisierungen und Geschäftslogik, Entwicklung von Backend-APIs zur Anbindung des Händlerportals sowie enge Zusammenarbeit mit dem Frontend-Entwickler bis zur Auslieferung.',
      'Mitarbeit an den Modulen Incentives und Investment Relations (IR) eines umfassenden CRM-Projekts. Automatisierte Workflows und Business Process Flows, angepasste Power Pages, individuelle Dashboards und Web-APIs zur Dynamics CRM-Integration sowie Datenaustausch mit Regierungsstellen. Optimierung der CRM-Funktionen und reibungslose Interoperabilität mit externen Systemen.',
      'Mitentwicklung einer zentralen digitalen Plattform für das Ministerium für Kommunikation und Informationstechnologie (MCIT) zur Abwicklung von Rundschreiben, Cloud-Serviceanfragen und dem Onboarding von Stakeholdern über Behörden hinweg. Umgesetzt mit Dynamics 365 CRM, Power Pages und Power Automate, inklusive rollenbasiertem Zugriff, sicheren externen Portalen und automatisierten Workflows anstelle manueller Prozesse. Ergebnis: mehr Effizienz, Transparenz und sichere Kommunikation zwischen MCIT und externen Stellen.',
      'Leitung von Design und Entwicklung von The Flow, einer CRM- und Power Platform-Lösung für Applabs interne Abläufe. Finanzmodul: Dynamics 365 Model-Driven Apps für den gesamten Lebenszyklus von Lead und Opportunity bis zur Projektumwandlung und Finanzverfolgung. Zeiterfassungsmodul: vollständig individuelle Power Pages-Seite für tägliche Aufgaben- und Stundenbuchung, Kosten- und Liefercontrolling, Ressourcenplanung und KPI-Abgleich.',
      'Mitentwicklung von Watad, einer digitalen Plattform des katarischen Ministeriums für soziale Entwicklung und Familie, die Einzelpersonen und Familien mit Beratern verbindet (Video, Telefon oder persönlich). Anpassung von Dynamics CRM für Terminplanung, Feedback und Fortschrittsverfolgung; Integration mit einem Angular-Frontend und Microsoft Teams für Audio-/Videotermine; APIs für den behördlichen Datenaustausch und Reporting-Tools zur Leistungsüberwachung.',
      'Anpassung und Erweiterung von Dynamics CRM über mehrere Geschäftsbereiche mit Workflows, Plugins, Webressourcen, Custom Actions und Web-APIs. Erstellung von SSRS-Berichten und Integration von Drittanbieterdiensten für SMS-Versand und In-App-Push-Benachrichtigungen über OneSignal.',
      'Integration von Dynamics CRM mit WhatsApp, sodass Nutzer Nachrichten direkt im CRM senden und empfangen können. Webhooks erfassen Antworten, ein eigener Power Automate-Connector bindet die WhatsApp Cloud APIs wiederverwendbar an.',
      'Migration von FBS, einem Unternehmen aus dem Bankensektor, von On-Premises in die Cloud: sämtliche Daten, Anpassungen und Geschäftsprozesse in die Online-Version des CRM überführt. Erweiterte Berichte mit Power BI und Umstellung bestehender SSRS-Abfragen von SQL auf FetchXML.',
      'Lösung für die Instant Products Group zum Versand von Auftragsbenachrichtigungen über ein On-Premises-Datengateway, Azure Logic Apps und Power Automate. Die Lösung verbindet lokale und Cloud-Infrastruktur für Benachrichtigungen in Echtzeit.',
      'Anpassungen am Modul Project Operations (Field Service) mit Workflows, Plugins und Azure Functions sowie SSRS-Berichten. Zeiterfassung über Power Automate mit 7Pace Time Tracker integriert, was Projektverantwortung und Zeitmanagement deutlich verbessert hat.'
    ],
    '.cert-extra-label': ['Fundamentals', 'Applied Skills', 'Früher gehalten'],
    '.rec-linkedin-badge': ['über LinkedIn'],
    '.contact-title': ['Verfügbar für neue Aufgaben'],
    '.contact-subtitle': ['Offen für Senior-Consulting-Rollen, Solution-Architecture-Mandate<br>und Dynamics 365 / Power Platform-Projekte — umzugsbereit nach Großbritannien, Deutschland, Neuseeland &amp; Australien.'],
    '.contact-item': [null, null, 'Doha, Katar']
  },

  /* ───────────────────────── FRANÇAIS ───────────────────────── */
  fr: {
    title: 'Anwar Ul Haq — Architecte de solutions Dynamics 365 CRM & Power Platform',
    '.nav-links a': ['À propos', 'Expérience', 'Projets', 'Certifications', 'Compétences', 'Recommandations'],
    '.nav-cta': ['Me contacter'],
    '#h-mcid': ['MICROSOFT ID : 991520706 // DOHA, QATAR'],
    '#h-avail': ['<span class="avail-dot"></span> Ouvert aux opportunités'],
    '#h-role': ['Consultant senior <span>Dynamics 365 CRM</span> &amp; <span>Power Platform</span>'],
    '.hero-pill': ['Doha, Qatar', null, null],
    '#h-badge': ['16 certifications Microsoft — Architecte PL-600 & AB-100'],
    '.hero-scroll': ['<div class="hero-scroll-bar"></div> DÉFILER'],
    '.stat-label': ["Années d'expérience", 'Certifications Microsoft', 'Taille d’équipe dirigée', 'Implémentations CRM'],
    '.section-eyebrow': ['Qui suis-je', 'Parcours', 'Solutions livrées', 'Certifications Microsoft', 'Expertise technique', 'Ce qu’ils en disent', 'Construisons ensemble'],
    '.section-title': ['Profil professionnel', 'Expérience professionnelle', 'Projets phares', '16 certifications Microsoft', 'Compétences &amp; technologies', 'Recommandations'],
    '.about-summary p': ['<strong>Architecte de solutions</strong> Dynamics 365 CE &amp; Power Platform avec <strong>plus de 6 ans</strong> d’expérience dans la livraison de plateformes CRM pour le secteur public et les entreprises au Qatar et au Pakistan. <strong>Plus de 20 implémentations</strong>, une <strong>équipe de 14 personnes</strong> dirigée et <strong>16 certifications Microsoft</strong>, dont PL-600 et AB-100.'],
    '.exp-role': ['Consultant senior Dynamics CRM &amp; Power Platform', 'Team Lead → Head of Business Applications', 'Consultant Dynamics 365 CE / CRM'],
    '.exp-period': ['oct. 2025 — aujourd’hui', 'juin 2023 — sept. 2025', 'févr. 2020 — avr. 2023'],
    '.exp-company': ['Hassad Food — Société nationale de sécurité alimentaire du Qatar · Doha, Qatar', 'Applab · Doha, Qatar', 'Skysoft Connections · Islamabad, Pakistan'],
    '.exp-bullets li': [
      'Évolution de <strong>Raqmana</strong>, la plateforme agricole nationale du Qatar basée sur Dynamics 365 &amp; Power Platform.',
      'Livraison d’un <strong>portail d’aide aux commerçants</strong> pour les demandes de subventions lors d’une perturbation régionale de l’approvisionnement.',
      'Développement des modules <strong>réservation d’équipements</strong>, <strong>aquaculture</strong>, <strong>gestion des dossiers</strong> et <strong>feedback</strong>.',
      'Intégration de la <strong>détection des maladies des cultures par IA</strong> (DeepLeaf) dans le portail agriculteurs.',
      'Refonte de l’<strong>enchère à l’importation</strong> en API autonomes + frontend avec authentification via le CRM.',
      'Direction d’une <strong>équipe de 14</strong> développeurs et consultants livrant des solutions Dynamics 365 et Power Platform pour des organismes publics qatariens.',
      '<strong>Qatar Collaboration Hub (QCH) – MCIT :</strong> architecture d’une plateforme de demandes de services publics sur Dynamics CRM, Power Pages, Azure App Service et Azure AI Services, avec circuits d’approbation multi-étapes et module de gestion des circulaires.',
      '<strong>Watad E-Consultation – MSDF :</strong> plateforme de consultation multicanal (présentiel, Microsoft Teams, téléphone) avec frontend Angular et backend Dynamics CRM, incluant la coordination des travailleurs sociaux et la planification des consultants.',
      '<strong>IPA Qatar :</strong> modules Incentives et Investment Relations avec workflows automatisés, personnalisations Power Pages, Web API sur mesure et échanges de données avec des entités gouvernementales.',
      'Délais respectés ou devancés de façon constante ; conformité sécurité et protection des données appliquée sur tous les portails Power Pages gouvernementaux.',
      'Plus de <strong>10 implémentations CRM</strong> pour des clients de la banque, de la santé, de l’automobile et du commerce au Pakistan et au Moyen-Orient.',
      'Intégration de Dynamics CRM avec <strong>WhatsApp Cloud API</strong>, <strong>DocuSign</strong>, <strong>OneSignal</strong>, <strong>MS Bookings</strong> et <strong>7Pace Time Tracker</strong> via des connecteurs Power Automate et des webhooks sur mesure.',
      'Extension du <strong>CRM Auto Mercado</strong> à plusieurs unités métier avec plugins, ressources web, rapports SSRS et notifications SMS/push.',
      'Mise en place de <strong>pipelines de migration SSIS</strong> et de <strong>suites de rapports SSRS</strong> ; Canvas Apps remplaçant des processus manuels.'
    ],
    '.proj-filter-btn': ['Tous', null, null, null],
    '.proj-title': [
      'Portail d’aide aux commerçants — MOCI Qatar', 'Invest Qatar (IPAQ)', 'MCIT Qatar – Collaboration Hub', 'The Flow – Finance &amp; suivi du temps',
      'Watad – Système de consultation électronique', 'Auto Mercado CRM', 'Ciclic – Intégration WhatsApp CRM', 'Migration BS – du on-premise vers le cloud',
      'Instant Products Group – Syrinx', 'Tech Fabric – CRM &amp; suivi du temps'
    ],
    '.proj-period': ['mars 2026 – aujourd’hui', 'juil. 2023 – sept. 2025'],
    '.proj-body': [
      'Conception de A à Z d’un portail d’aide aux commerçants pour le ministère du Commerce et de l’Industrie (MOCI) du Qatar, accordant des subventions sur les coûts de transport lors d’une perturbation régionale de l’approvisionnement. Personnalisation de Dynamics 365 CRM pour les processus de subvention, automatisations et logique métier, développement des API backend reliant Dynamics 365 au portail, et collaboration avec le développeur frontend jusqu’à la livraison.',
      'Travail sur les modules Incentives et Investment Relations (IR) d’un projet CRM complet : workflows automatisés et business process flows, Power Pages personnalisées, tableaux de bord et Web API sur mesure pour l’intégration Dynamics CRM, et échanges de données avec des entités gouvernementales. Optimisation des fonctionnalités CRM et interopérabilité fluide avec les systèmes externes.',
      'Contribution à une plateforme numérique centralisée pour le ministère des Communications et des Technologies de l’information (MCIT) afin de gérer les circulaires, les demandes de services cloud et l’intégration des parties prenantes entre entités publiques. Réalisée avec Dynamics 365 CRM, Power Pages et Power Automate : accès basé sur les rôles, portails externes sécurisés et workflows automatisés remplaçant les processus manuels. Résultat : plus d’efficacité, de transparence et une communication sécurisée entre le MCIT et ses partenaires.',
      'Direction de la conception et du développement de The Flow, une solution CRM + Power Platform pour les opérations internes d’Applab. Module Finance : applications model-driven Dynamics 365 couvrant tout le cycle, des leads et opportunités jusqu’à la conversion en projet et au suivi financier. Module Temps : site Power Pages entièrement sur mesure pour la saisie quotidienne des tâches et heures, le suivi des coûts et livrables, la planification des ressources et l’alignement des KPI.',
      'Contribution à Watad, plateforme numérique du ministère qatarien du Développement social et de la Famille, qui met en relation particuliers et familles avec des consultants (vidéo, téléphone ou présentiel). Personnalisation de Dynamics CRM pour la planification, le feedback et le suivi ; intégration avec un frontend Angular et Microsoft Teams pour les rendez-vous audio/vidéo ; API d’échange de données gouvernementales et outils de reporting.',
      'Personnalisation et extension de Dynamics CRM sur plusieurs unités métier avec workflows, plugins, ressources web, actions personnalisées et Web API. Création de rapports SSRS et intégration de services tiers pour l’envoi de SMS et les notifications push in-app via OneSignal.',
      'Intégration de Dynamics CRM avec WhatsApp pour envoyer et recevoir des messages directement dans le CRM. Webhooks pour capter les réponses et connecteur Power Automate sur mesure pour les API WhatsApp Cloud, rendant l’intégration simple et réutilisable.',
      'Migration de FBS, un acteur du secteur bancaire, du on-premise vers le cloud : données, personnalisations et processus métier transférés vers la version en ligne du CRM. Reporting enrichi avec Power BI et conversion des requêtes SSRS de SQL vers FetchXML.',
      'Solution pour Instant Products Group permettant l’envoi de notifications de tâches via une passerelle de données on-premise, Azure Logic Apps et Power Automate, reliant l’infrastructure locale et le cloud en temps réel.',
      'Personnalisations du module Project Operations (Field Service) avec workflows, plugins et Azure Functions, ainsi que des rapports SSRS. Saisie des temps intégrée à 7Pace Time Tracker via Power Automate, améliorant nettement le suivi et la responsabilisation des projets.'
    ],
    '.cert-extra-label': ['Fondamentaux', 'Applied Skills', 'Précédemment détenues'],
    '.rec-linkedin-badge': ['via LinkedIn'],
    '.contact-title': ['Disponible pour de nouvelles opportunités'],
    '.contact-subtitle': ['Ouvert aux postes de consultant senior, aux missions d’architecture de solutions<br>et aux projets Dynamics 365 / Power Platform — prêt à m’installer au Royaume-Uni, en Allemagne, en Nouvelle-Zélande ou en Australie.'],
    '.contact-item': [null, null, 'Doha, Qatar']
  },

  /* ───────────────────────── العربية ───────────────────────── */
  ar: {
    title: 'أنوار الحق — مهندس حلول Dynamics 365 CRM و Power Platform',
    '.nav-links a': ['نبذة', 'الخبرات', 'المشاريع', 'الشهادات', 'المهارات', 'التوصيات'],
    '.nav-cta': ['تواصل معي'],
    '#h-mcid': ['MICROSOFT ID: 991520706 // الدوحة، قطر'],
    '#h-avail': ['<span class="avail-dot"></span> متاح لفرص جديدة'],
    '#h-role': ['استشاري أول <span>Dynamics 365 CRM</span> و <span>Power Platform</span>'],
    '.hero-pill': ['الدوحة، قطر', null, null],
    '#h-badge': ['16 شهادة من Microsoft — مهندس حلول PL-600 و AB-100'],
    '.hero-scroll': ['<div class="hero-scroll-bar"></div> مرّر'],
    '.stat-label': ['سنوات الخبرة', 'شهادات Microsoft', 'حجم الفريق الذي قدته', 'تطبيقات CRM'],
    '.section-eyebrow': ['من أنا', 'المسيرة المهنية', 'حلول منجزة', 'اعتمادات Microsoft', 'الخبرة التقنية', 'ماذا يقولون', 'لنبنِ شيئاً معاً'],
    '.section-title': ['الملخص المهني', 'الخبرة المهنية', 'مشاريع مختارة', '16 شهادة من Microsoft', 'المهارات والتقنيات', 'التوصيات'],
    '.about-summary p': ['<strong>مهندس حلول</strong> Dynamics 365 CE و Power Platform بخبرة <strong>تزيد على 6 سنوات</strong> في تنفيذ منصات CRM للجهات الحكومية والمؤسسات في قطر وباكستان. <strong>أكثر من 20 مشروع تنفيذ</strong>، وقيادة <strong>فريق من 14 شخصاً</strong>، و<strong>16 شهادة من Microsoft</strong> منها PL-600 و AB-100.'],
    '.exp-role': ['استشاري أول Dynamics CRM و Power Platform', 'قائد فريق ← رئيس تطبيقات الأعمال', 'استشاري Dynamics 365 CE / CRM'],
    '.exp-period': ['أكتوبر 2025 — حتى الآن', 'يونيو 2023 — سبتمبر 2025', 'فبراير 2020 — أبريل 2023'],
    '.exp-company': ['حصاد الغذائية — الشركة الوطنية للأمن الغذائي في قطر · الدوحة، قطر', 'Applab · الدوحة، قطر', 'Skysoft Connections · إسلام آباد، باكستان'],
    '.exp-bullets li': [
      'تطوير منصة <strong>رقمنة</strong>، المنصة الزراعية الوطنية في قطر المبنية على Dynamics 365 و Power Platform.',
      'تنفيذ <strong>بوابة دعم التجار</strong> لطلبات الدعم خلال اضطراب إقليمي في سلاسل الإمداد.',
      'بناء وحدات <strong>حجز المعدات</strong> و<strong>الاستزراع المائي</strong> و<strong>إدارة الحالات</strong> و<strong>الملاحظات</strong>.',
      'دمج <strong>الكشف عن أمراض المحاصيل بالذكاء الاصطناعي</strong> (DeepLeaf) في بوابة المزارعين.',
      'إعادة هندسة <strong>مزاد الاستيراد</strong> إلى واجهات API مستقلة وواجهة أمامية مع تسجيل دخول عبر CRM.',
      'قيادة <strong>فريق من 14</strong> مطوراً واستشارياً لتنفيذ حلول Dynamics 365 و Power Platform لجهات حكومية قطرية.',
      '<strong>منصة قطر للتعاون (QCH) – وزارة الاتصالات:</strong> تصميم منصة طلبات خدمات حكومية على Dynamics CRM و Power Pages و Azure App Service و Azure AI Services مع مسارات موافقة متعددة المراحل ووحدة لإدارة التعاميم.',
      '<strong>وتد للاستشارات الإلكترونية – وزارة التنمية الاجتماعية والأسرة:</strong> منصة استشارات متعددة القنوات (حضورياً، Microsoft Teams، هاتفياً) بواجهة Angular وخلفية Dynamics CRM، تشمل تنسيق الأخصائيين الاجتماعيين وجدولة الاستشاريين.',
      '<strong>وكالة ترويج الاستثمار (IPA Qatar):</strong> تطوير وحدتي الحوافز وعلاقات المستثمرين مع سير عمل مؤتمت وتخصيصات Power Pages وواجهات Web API وتكامل لتبادل البيانات مع الجهات الحكومية.',
      'الالتزام الدائم بمواعيد التسليم أو التقدم عليها، وتطبيق معايير الأمن وحماية البيانات في جميع بوابات Power Pages الحكومية.',
      'تنفيذ <strong>أكثر من 10 مشاريع CRM</strong> لعملاء في البنوك والرعاية الصحية والسيارات والتجزئة في باكستان والشرق الأوسط.',
      'دمج Dynamics CRM مع <strong>WhatsApp Cloud API</strong> و<strong>DocuSign</strong> و<strong>OneSignal</strong> و<strong>MS Bookings</strong> و<strong>7Pace Time Tracker</strong> عبر موصلات Power Automate مخصصة و Webhooks.',
      'توسيع <strong>نظام Auto Mercado CRM</strong> عبر عدة وحدات أعمال باستخدام Plugins وموارد ويب وتقارير SSRS وإشعارات SMS والإشعارات الفورية.',
      'بناء <strong>مسارات ترحيل بيانات SSIS</strong> و<strong>حزم تقارير SSRS</strong>، وتطوير Canvas Apps لاستبدال العمليات اليدوية.'
    ],
    '.proj-filter-btn': ['الكل', null, null, null],
    '.proj-title': [
      'بوابة دعم التجار — وزارة التجارة والصناعة', 'Invest Qatar (IPAQ)', 'وزارة الاتصالات – منصة قطر للتعاون', 'The Flow – المالية وتتبع الوقت',
      'وتد – نظام الاستشارات الإلكترونية', 'Auto Mercado CRM', 'Ciclic – تكامل WhatsApp مع CRM', 'ترحيل BS – من الخوادم المحلية إلى السحابة',
      'Instant Products Group – Syrinx', 'Tech Fabric – CRM وتتبع الوقت'
    ],
    '.proj-period': ['مارس 2026 – حتى الآن', 'يوليو 2023 – سبتمبر 2025'],
    '.proj-body': [
      'بناء بوابة دعم التجار من الصفر لوزارة التجارة والصناعة في قطر، لدعم التجار بإعانات تكاليف النقل خلال اضطراب إقليمي في سلاسل الإمداد. تخصيص Dynamics 365 CRM لعمليات الدعم، وتطوير الأتمتة ومنطق الأعمال، وتصميم واجهات API خلفية تربط Dynamics 365 ببوابة التجار، والتعاون مع مطور الواجهة الأمامية حتى التسليم الكامل.',
      'العمل على وحدتي الحوافز وعلاقات المستثمرين ضمن مشروع CRM شامل: سير عمل مؤتمت و Business Process Flows، وتخصيص Power Pages، ولوحات معلومات وواجهات Web API مخصصة للتكامل مع Dynamics CRM، وتبادل البيانات مع الجهات الحكومية، مع تحسين وظائف CRM وضمان التوافق مع الأنظمة الخارجية.',
      'المساهمة في بناء منصة رقمية مركزية لوزارة الاتصالات وتكنولوجيا المعلومات لإدارة التعاميم وطلبات الخدمات السحابية وتسجيل الجهات المعنية. نُفذت باستخدام Dynamics 365 CRM و Power Pages و Power Automate مع صلاحيات قائمة على الأدوار وبوابات خارجية آمنة وسير عمل مؤتمت بدلاً من العمليات اليدوية. النتيجة: كفاءة وشفافية أعلى وتواصل آمن بين الوزارة والجهات الخارجية.',
      'قيادة تصميم وتطوير The Flow، حل CRM و Power Platform لتنظيم العمليات الداخلية في Applab. وحدة المالية: تطبيقات Model-Driven على Dynamics 365 تغطي الدورة الكاملة من العملاء المحتملين والفرص إلى تحويل المشاريع والمتابعة المالية. وحدة الوقت: موقع Power Pages مخصص بالكامل لتسجيل المهام وساعات العمل اليومية ومتابعة التكاليف والتسليم وتخطيط الموارد ومؤشرات الأداء.',
      'المساهمة في تطوير منصة وتد التابعة لوزارة التنمية الاجتماعية والأسرة في قطر، والتي تربط الأفراد والأسر بالاستشاريين (فيديو، هاتف، أو حضورياً). تخصيص Dynamics CRM للجدولة والملاحظات ومتابعة التقدم، ودمجه مع واجهة Angular و Microsoft Teams للمواعيد الصوتية والمرئية، وبناء واجهات API لتبادل البيانات الحكومية وأدوات تقارير لمتابعة الأداء.',
      'تخصيص Dynamics CRM وتوسيع وظائفه عبر عدة وحدات أعمال باستخدام سير العمل و Plugins وموارد الويب و Custom Actions و Web API. إنشاء تقارير SSRS ودمج خدمات خارجية لإرسال الرسائل النصية والإشعارات الفورية عبر OneSignal.',
      'دمج Dynamics CRM مع WhatsApp لتمكين المستخدمين من إرسال الرسائل واستقبالها داخل CRM. إنشاء Webhooks لالتقاط الردود وتطوير موصل Power Automate مخصص لواجهات WhatsApp Cloud API بشكل قابل لإعادة الاستخدام.',
      'ترحيل FBS، وهي مؤسسة في القطاع المصرفي، من الخوادم المحلية إلى السحابة: نقل جميع البيانات والتخصيصات والعمليات إلى النسخة السحابية من CRM، وتحسين التقارير عبر Power BI وتحويل استعلامات SSRS من SQL إلى FetchXML.',
      'تطوير حل لمجموعة Instant Products لإرسال إشعارات المهام عبر بوابة بيانات محلية و Azure Logic Apps و Power Automate، يربط البنية المحلية بالسحابة لإشعارات فورية.',
      'تخصيص وحدة Project Operations (Field Service) باستخدام سير العمل و Plugins و Azure Functions مع تقارير SSRS، ودمج تسجيل الوقت مع 7Pace Time Tracker عبر Power Automate مما حسّن متابعة المشاريع وإدارة الوقت بشكل ملحوظ.'
    ],
    '.cert-extra-label': ['الأساسيات', 'المهارات التطبيقية', 'شهادات سابقة'],
    '.rec-linkedin-badge': ['عبر LinkedIn'],
    '.contact-title': ['متاح لفرص جديدة'],
    '.contact-subtitle': ['منفتح على أدوار الاستشارات العليا ومهام هندسة الحلول<br>ومشاريع Dynamics 365 / Power Platform — ومستعد للانتقال إلى المملكة المتحدة أو ألمانيا أو نيوزيلندا أو أستراليا.'],
    '.contact-item': [null, null, 'الدوحة، قطر']
  }
};
