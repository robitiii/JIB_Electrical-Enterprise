JIB Electrical Enterprises — Website Developer Code Skeleton
This document contains the complete, responsive, self-contained HTML and Tailwind CSS prototype for the JIB Electrical Enterprises homepage built from scratch following the ORYZO AI Darkroom layout design principles.

Technical Specifications
Palette:
Canvas background: #100904 (Walnut Shadow)
Foreground text and borders: #ffedd7 (Warm Cream)
Solid surfaces & CTA: #382416 (Bark Brown)
Hairline dashed lines & gridlines: #40372e (Cork Border)
Muted labels & borders: #6c5f51 (Driftwood)
Accents (credits/tag indicators only): #dc5000 (Ember Accent)
Typography: Set in bold, uppercase Grotesque style font sizes (Inter/Söhne) using tight display line-heights of 0.9 for display headlines. Standard mixed-case is strictly limited to the 29px editorial body description block.
Grid layout: Horizontal hairline dashed dividers separate full viewport 100vh sections with active current indicators and vertical rotated status bars.
HTML & Tailwind Code Block
Save this block as index.html and double-click to view the fully responsive layout in any browser:

<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JIB Electrical Enterprises — Master Design Prototype</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'walnut-shadow': '#100904', // Deepest background canvas
                        'warm-cream': '#ffedd7',   // Main typography and active borders
                        'bark-brown': '#382416',   // Solid card / elevated background
                        'cork-border': '#40372e',  // Hairline dashed lines / gridlines
                        'driftwood': '#6c5f51',    // Secondary text / inactive borders
                        'ember-accent': '#dc5000', // Restricted credit/tag accent
                        'pure-black': '#000000'
                    },
                    fontFamily: {
                        'halyard': ['Inter', 'Söhne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                    },
                    lineHeight: {
                        'display': '0.9',
                        'heading': '0.9',
                        'body': '1.26'
                    }
                }
            }
        }
    </script>
    <style>
        /* ORYZO style scrollbar override */
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-track {
            background: #100904;
        }
        ::-webkit-scrollbar-thumb {
            background: #382416;
            border-radius: 2px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #6c5f51;
        }
    </style>
</head>
<body class="bg-walnut-shadow text-warm-cream font-halyard antialiased select-none overflow-x-hidden">

    <!-- 1. PERSISTENT TOP NAVIGATION -->
    <nav class="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-walnut-shadow/80 backdrop-blur-md border-b border-dashed border-cork-border">
        <!-- Logo Wordmark -->
        <a href="#" class="text-xs tracking-widest font-medium uppercase text-warm-cream">
            JIB ELECTRICAL
        </a>

        <!-- Center Nav Links -->
        <div class="hidden md:flex space-x-8 items-center">
            <a href="#hero" class="text-xs uppercase tracking-wider text-warm-cream border-b border-dashed border-warm-cream pb-1">
                INTRO
            </a>
            <a href="#services" class="text-xs uppercase tracking-wider text-driftwood hover:text-warm-cream transition-colors duration-200">
                SERVICES
            </a>
            <a href="#compliance" class="text-xs uppercase tracking-wider text-driftwood hover:text-warm-cream transition-colors duration-200">
                COMPLIANCE
            </a>
            <a href="#contact" class="text-xs uppercase tracking-wider text-driftwood hover:text-warm-cream transition-colors duration-200">
                CONTACT
            </a>
        </div>

        <!-- Active Current Indicator -->
        <div class="flex items-center space-x-2">
            <span class="w-1.5 h-1.5 rounded-full bg-ember-accent animate-pulse"></span>
            <span class="text-[9px] uppercase tracking-widest text-ember-accent">LIVE CURRENT</span>
        </div>
    </nav>

    <!-- SECTION DIVIDER GRID LINES -->
    <div class="fixed inset-0 pointer-events-none grid grid-cols-4 h-full w-full z-10 px-6 md:px-12">
        <div class="border-l border-dashed border-cork-border/20 h-full"></div>
        <div class="border-l border-dashed border-cork-border/20 h-full"></div>
        <div class="border-l border-dashed border-cork-border/20 h-full"></div>
        <div class="border-l border-r border-dashed border-cork-border/20 h-full"></div>
    </div>

    <!-- MAIN WRAPPER FOR FULL VIEWPORT SECTIONS -->
    <main class="relative z-20">

        <!-- 2. SECTION 1: HERO VIEWPORT -->
        <section id="hero" class="min-h-screen w-full flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 relative">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">

                <!-- Left-aligned Title Block -->
                <div class="lg:col-span-5 flex flex-col space-y-4">
                    <span class="text-[10px] tracking-widest text-ember-accent uppercase font-medium">
                        ● CAPE TOWN CENTRAL ELECTRICAL DIRECTIVE
                    </span>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-medium uppercase text-warm-cream leading-none">
                        POWER ARCHITECTURE FOR CAPE TOWN.
                    </h1>
                    <p class="text-sm md:text-md text-driftwood max-w-sm uppercase tracking-wide">
                        Engineered by John Ibala. High-end electrical systems, heavy industrial perimeters, and regulatory safety compliance.
                    </p>
                </div>

                <!-- Centered Concept Art Wireframe (Interactive Mockup Graphic) -->
                <div class="lg:col-span-5 flex justify-center items-center relative py-12">
                    <div class="relative w-72 h-72 rounded-full border border-dashed border-cork-border flex items-center justify-center bg-gradient-to-br from-bark-brown/20 to-transparent">
                        <!-- Orbiting particles to mimic current -->
                        <div class="absolute inset-4 rounded-full border border-dashed border-cork-border/40 animate-[spin_20s_linear_infinite]"></div>
                        <!-- Inner Brand Symbol Mockup -->
                        <div class="text-center z-10">
                            <span class="text-6xl font-extrabold select-none pointer-events-none drop-shadow-[0_0_15px_rgba(220,80,0,0.4)]">⚡</span>
                            <p class="text-[10px] uppercase tracking-widest text-warm-cream font-bold mt-2">JIB LOGO V2</p>
                            <p class="text-[8px] uppercase tracking-wider text-ember-accent mt-0.5 font-semibold">TYPO CORRECTED</p>
                        </div>
                    </div>
                </div>

                <!-- Right-aligned Actions & Stats -->
                <div class="lg:col-span-2 flex flex-col justify-end space-y-12 lg:h-72">
                    <!-- Outlined Ghost Button -->
                    <a href="#contact" class="inline-flex items-center justify-center px-6 py-3 border border-warm-cream rounded-[22.5px] text-xs font-medium uppercase tracking-wider text-warm-cream hover:bg-warm-cream hover:text-walnut-shadow transition-all duration-300 w-full text-center">
                        SECURE SYSTEM
                    </a>
                </div>
            </div>

            <!-- Bottom Metadata -->
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-dashed border-cork-border">
                <span class="text-[9px] text-driftwood tracking-widest uppercase">
                    ESTABLISHED 2019 / GOODWOOD, CAPE TOWN
                </span>
                <span class="text-[9px] text-warm-cream font-medium tracking-widest uppercase mt-2 md:mt-0">
                    REG CK NO. 2019 / 348029 / 07
                </span>
            </div>
        </section>

        <!-- SECTION BREAK: Dashed Hairline Divider -->
        <div class="w-full border-t border-dashed border-cork-border"></div>

        <!-- 3. SECTION 2: SERVICES (100vh) -->
        <section id="services" class="min-h-screen w-full flex flex-col justify-between py-24 px-6 md:px-12 relative bg-walnut-shadow">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start my-auto">

                <!-- Headline Column -->
                <div class="lg:col-span-5 space-y-4">
                    <span class="text-[10px] tracking-widest text-ember-accent uppercase">● CORE CAPABILITIES</span>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium uppercase leading-none">
                        FOUR DOMAINS OF MASTER INFRASTRUCTURE.
                    </h2>
                </div>

                <!-- Spacing Column -->
                <div class="lg:col-span-2"></div>

                <!-- Body Text Column -->
                <div class="lg:col-span-5 space-y-6">
                    <p class="text-lg md:text-xl text-warm-cream leading-relaxed font-normal">
                        We wire, automate, and fortify. JIB Electrical builds heavy-duty residential systems, automated gate controls, and SABS-approved electrified perimeters that never falter.
                    </p>
                </div>
            </div>

            <!-- Sub-Category Grid (4 columns, border-radius 12px) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <!-- Card 1 -->
                <div class="bg-bark-brown/30 border border-cork-border rounded-xl p-6 flex flex-col justify-between h-48 hover:border-warm-cream transition-colors duration-300">
                    <span class="text-xs text-ember-accent font-semibold tracking-wider">01 // DOMESTIC</span>
                    <h3 class="text-lg font-medium uppercase text-warm-cream">HOUSE WIRING</h3>
                    <p class="text-[11px] text-driftwood uppercase tracking-wide leading-normal">
                        Complete distribution board installs, circuit mapping, and systemic load routing.
                    </p>
                </div>
                <!-- Card 2 -->
                <div class="bg-bark-brown/30 border border-cork-border rounded-xl p-6 flex flex-col justify-between h-48 hover:border-warm-cream transition-colors duration-300">
                    <span class="text-xs text-ember-accent font-semibold tracking-wider">02 // PROTECTION</span>
                    <h3 class="text-lg font-medium uppercase text-warm-cream">ELECTRIC FENCING</h3>
                    <p class="text-[11px] text-driftwood uppercase tracking-wide leading-normal">
                        Perimeter security utilizing SABS-approved energizers, tension brackets, and earthing.
                    </p>
                </div>
                <!-- Card 3 -->
                <div class="bg-bark-brown/30 border border-cork-border rounded-xl p-6 flex flex-col justify-between h-48 hover:border-warm-cream transition-colors duration-300">
                    <span class="text-xs text-ember-accent font-semibold tracking-wider">03 // AUTOMATION</span>
                    <h3 class="text-lg font-medium uppercase text-warm-cream">GATE MOTOR REPAIRS</h3>
                    <p class="text-[11px] text-driftwood uppercase tracking-wide leading-normal">
                        Heavy gear mechanical maintenance, receiver synchronizations, and access logic systems.
                    </p>
                </div>
                <!-- Card 4 -->
                <div class="bg-bark-brown/30 border border-cork-border rounded-xl p-6 flex flex-col justify-between h-48 hover:border-warm-cream transition-colors duration-300">
                    <span class="text-xs text-ember-accent font-semibold tracking-wider">04 // SYSTEMS</span>
                    <h3 class="text-lg font-medium uppercase text-warm-cream">INSTALLATIONS</h3>
                    <p class="text-[11px] text-driftwood uppercase tracking-wide leading-normal">
                        Comprehensive fault-finding diagnostics, municipal upgrades, and compliance-ready installs.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECTION BREAK -->
        <div class="w-full border-t border-dashed border-cork-border"></div>

        <!-- 4. SECTION 3: COMPLIANCE & SAFETY (100vh) -->
        <section id="compliance" class="min-h-screen w-full flex flex-col justify-between py-24 px-6 md:px-12 relative bg-walnut-shadow">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">

                <!-- Left Block -->
                <div class="lg:col-span-5 space-y-4">
                    <span class="text-[10px] tracking-widest text-ember-accent uppercase">● REGULATORY VERIFICATION</span>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium uppercase leading-none">
                        LEGAL SYSTEM COMPLIANCE.
                    </h2>
                    <p class="text-xs text-driftwood uppercase tracking-widest">
                        * COMPLIANCE VERIFIED UNDER OCCUPATIONAL HEALTH AND SAFETY ACT NO. 85 OF 1993.
                    </p>
                </div>

                <!-- Center Spacing -->
                <div class="lg:col-span-2"></div>

                <!-- Right Block -->
                <div class="lg:col-span-5 space-y-6">
                    <p class="text-lg md:text-xl text-warm-cream leading-relaxed font-normal">
                        Your electrical systems must protect both property and lives. JIB Electrical conducts thorough structural testing from the primary point of supply to individual terminal nodes, providing immediate, legally recognized Electrical and Electric Fence Certificates of Compliance (COC) for property transfers and safety checks.
                    </p>
                    <div class="border-t border-dashed border-cork-border pt-4">
                        <span class="text-[10px] text-ember-accent tracking-widest uppercase block mb-1">CAPETOWN MUNICIPAL REQUIREMENT</span>
                        <p class="text-xs text-driftwood uppercase tracking-wider">
                            We execute diagnostic assessments, compile comprehensive fault reports, and perform precise corrective repairs on-site.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION BREAK -->
        <div class="w-full border-t border-dashed border-cork-border"></div>

        <!-- 5. SECTION 4: DIRECT CONNECTION (100vh) -->
        <section id="contact" class="min-h-screen w-full flex flex-col justify-between py-24 px-6 md:px-12 relative bg-walnut-shadow">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start my-auto">

                <!-- Left Column (Direct Connection Info) -->
                <div class="lg:col-span-4 space-y-8">
                    <div class="space-y-4">
                        <span class="text-[10px] tracking-widest text-ember-accent uppercase">● INITIATE INQUIRY</span>
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium uppercase leading-none">
                            ESTABLISH DIRECT LINK.
                        </h2>
                    </div>

                    <div class="space-y-6 text-xs uppercase tracking-widest text-warm-cream">
                        <div>
                            <span class="text-driftwood block text-[10px]">DIRECTOR HEAD OFFICE</span>
                            <span class="block mt-1 font-semibold">20 HAMILTON STREET</span>
                            <span>GOODWOOD, CAPE TOWN, 7463</span>
                        </div>
                        <div>
                            <span class="text-driftwood block text-[10px]">COMMUNICATION LINES</span>
                            <a href="tel:+27679323052" class="block mt-1 hover:text-ember-accent transition-colors duration-200">+27 67 932 3052</a>
                            <a href="tel:+27678186280" class="block hover:text-ember-accent transition-colors duration-200">+27 67 818 6280</a>
                        </div>
                        <div>
                            <span class="text-driftwood block text-[10px]">DIGITAL SYSTEM ROUTE</span>
                            <a href="mailto:jibelectrical2@gmail.com" class="block mt-1 hover:text-ember-accent transition-colors duration-200">JIBELECTRICAL2@GMAIL.COM</a>
                        </div>
                    </div>
                </div>

                <!-- Center Column (Form Inputs - ORYZO Underline Only style) -->
                <div class="lg:col-span-5 py-6 lg:py-0">
                    <form class="space-y-8">
                        <div class="relative border-b border-dashed border-cork-border pb-2 focus-within:border-warm-cream transition-colors duration-300">
                            <label class="text-[9px] uppercase tracking-widest text-driftwood block">IDENTIFIER (NAME / BUSINESS)</label>
                            <input type="text" class="w-full bg-transparent border-none text-warm-cream focus:outline-none focus:ring-0 uppercase tracking-widest text-xs pt-2" placeholder="ENTER NAME">
                        </div>
                        <div class="relative border-b border-dashed border-cork-border pb-2 focus-within:border-warm-cream transition-colors duration-300">
                            <label class="text-[9px] uppercase tracking-widest text-driftwood block">GEOGRAPHIC SECTOR (CAPETOWN / REGION)</label>
                            <input type="text" class="w-full bg-transparent border-none text-warm-cream focus:outline-none focus:ring-0 uppercase tracking-widest text-xs pt-2" placeholder="ENTER SUBURB">
                        </div>
                        <div class="relative border-b border-dashed border-cork-border pb-2 focus-within:border-warm-cream transition-colors duration-300">
                            <label class="text-[9px] uppercase tracking-widest text-driftwood block">INFRASTRUCTURE REQUIREMENTS (SERVICE TYPE)</label>
                            <input type="text" class="w-full bg-transparent border-none text-warm-cream focus:outline-none focus:ring-0 uppercase tracking-widest text-xs pt-2" placeholder="HOUSE WIRING / FENCING / AUTOMATION / COMPLIANCE">
                        </div>
                    </form>
                </div>

                <!-- Right Column (Filled CTA button / Transmit) -->
                <div class="lg:col-span-3 flex flex-col justify-between items-end lg:h-72">
                    <button class="w-full py-4 bg-bark-brown text-warm-cream hover:bg-warm-cream hover:text-walnut-shadow uppercase tracking-widest text-xs font-semibold rounded-[36px] transition-all duration-300 border border-cork-border shadow-inner">
                        TRANSMIT DIRECTIVE
                    </button>

                    <div class="text-right mt-12 lg:mt-0">
                        <span class="text-[9px] text-ember-accent uppercase tracking-widest block">BUILT WITH ANTIGRAVITY ENGINE</span>
                        <span class="text-[8px] text-driftwood uppercase tracking-widest block">© 2026 JIB ELECTRICAL. ALL RIGHTS RESERVED.</span>
                    </div>
                </div>
            </div>
        </section>

    </main>

</body>
</html>
