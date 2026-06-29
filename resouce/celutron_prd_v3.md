# CELUTRON INNOVATIONS — MASTER EXECUTABLE PRD
**Version:** 3.0  
**Authority:** Celutron Innovations Private Limited  
**Industry:** Deep-Tech Biotechnology / Regenerative Medicine / Tissue Engineering  
**HQ:** Chennai, Tamil Nadu, India  
**Document Purpose:** Complete AI-executable frontend build specification for the Celutron corporate web platform.

---

# PART 1 — BRAND & POSITIONING

## 1.1 Company Identity

Celutron Innovations is a clinical-stage deep-tech biotech startup pioneering:
- 3D bioprinting systems
- Patient-specific tissue engineering
- Implantable bioresorbable devices
- Macro-porous scaffold matrices
- Stem-cell based biofabrication
- Regenerative medical technologies

Incubated at CIIC, Chennai, Tamil Nadu, India.

## 1.2 Positioning Statement

> "Engineering the Future of Human Tissue Regeneration."

The website must position Celutron as:
- A deep-tech biomedical engineering company
- A clinically aligned research organization
- An investor-grade scientific platform
- A future-focused regenerative medicine startup

## 1.3 Emotional Communication Goal

> "Future human tissue manufacturing."

User emotions on leaving the site: trust, scientific confidence, curiosity, technological sophistication.

## 1.4 What This Site Must NOT Feel Like

- Generic startup
- SaaS dashboard
- Crypto product
- Agency website
- Ecommerce platform
- Trendy gradient-heavy website
- Neon cyberpunk
- Glassmorphism overload

## 1.5 What This Site MUST Feel Like

- Sterile laboratory environment
- Scientific publication aesthetics
- Institutional medical platform
- Apple-level polish and precision
- Advanced biomedical visualization system

---

# PART 2 — DESIGN SYSTEM

## 2.1 Design Philosophy

The UI is a continuation of a sterile clinical environment. Every element must feel like an extension of lab equipment. Mathematical accuracy. Clean layouts. High whitespace. Fine borders.

## 2.2 Color Tokens

```
clinical-bg:       #FFFFFF   → Pure white diagnostic background
clinical-surface:  #FAFAFA   → Clean laboratory off-white
clinical-text:     #0F172A   → Deep near-black slate
clinical-border:   #E2E8F0   → Ultra-thin structural separator
clinical-accent:   #1E40AF   → Deep scientific blue
clinical-success:  #16A34A   → Soft medical validation green
clinical-warning:  #D97706   → Soft amber
clinical-danger:   #DC2626   → Sterile alert red
```

## 2.3 Typography

```
Primary font:    Inter (all body, UI, labels)
Technical font:  JetBrains Mono (specs, metrics, data, measurements)
```

Typography rules:
- Strong hierarchy — large hero headlines, compact scientific data
- JetBrains Mono for ALL numerical metrics and spec values
- Sentence case for headlines (not ALL CAPS)
- Readable line spacing, technical precision

## 2.4 Spacing & Layout

- High whitespace ratios between sections
- Clean borders only — no heavy shadows, no blurs
- Thin 1px separators between content blocks
- Grid-based section layouts
- No clutter, no decoration

## 2.5 Motion System

Motion must feel: scientific, smooth, intentional, calm, precise.

**Allowed:**
- Scroll-triggered stagger reveals
- Count-up metric animations on entry
- Animated SVG line connectors
- Subtle hover micro-interactions (border color shift, slight translate)
- Framer Motion page transitions

**Forbidden:**
- Bouncing animations
- Elastic effects
- Flashy transitions
- Gaming-style animations
- Excessive particle effects

---

# PART 3 — TECH STACK

```
Framework:       Next.js 15 (App Router)
Language:        TypeScript
Styling:         TailwindCSS
Components:      shadcn/ui
Animation:       Framer Motion
3D:              React Three Fiber + Drei
Fonts:           next/font (Inter + JetBrains Mono)
Deployment:      Vercel
```

Optional:
- GSAP (for advanced scroll sequences)
- Lenis (smooth scroll)

---

# PART 4 — SITE ARCHITECTURE

## 4.1 Pages

```
1. Home
2. Products
   ├── Bioprinters
   │   ├── BioTron V1 (detail page)
   │   └── BioTron V2 (detail page)
   └── Bioinks
       ├── Ready to Use
       ├── Training Bioinks
       ├── BioTron Inks
       ├── Base Materials
       └── Custom / Enquiry
3. Research
4. About
   ├── Our Story
   ├── Technology
   └── Founders
5. Contact
```

## 4.2 Global Header

**Layout:** Logo left — Nav center/right — CTA button far right

**Logo:** celutron-logo.jpeg

**Navigation with dropdowns:**

```
Products ▾
  ├── Bioprinters
  │   ├── BioTron V1
  │   └── BioTron V2
  └── Bioinks
      ├── Ready to Use
      ├── Training Bioinks
      ├── BioTron Inks
      ├── Base Materials
      └── Custom / Enquiry

Research

About ▾
  ├── Our Story
  ├── Technology
  └── Founders

Contact
```

**CTA Button:** `Partner With Us` → links to Contact page

**Dropdown style:**
- Products: Mega menu (two columns — Bioprinters left, Bioinks right)
- About: Simple dropdown
- White background, thin bottom border, no heavy box shadows
- Smooth fade-in on hover

## 4.3 Global Footer

- Logo + one-line tagline
- Nav links (Products / Research / About / Contact)
- Contact details (email + phone + location)
- Copyright line: © 2025 Celutron Innovations Private Limited

---

# PART 5 — HOME PAGE

## Section 1: Hero

**Asset:** `hero_loop.mp4` (full-screen background video, autoplay, muted, loop)

**Overlay:** dark semi-transparent overlay for text readability

**Content:**
```
Headline:    Engineering the Future of Human Tissue Regeneration
Subheadline: Advanced bioprinting systems for personalized regenerative 
             medicine and tissue engineering research.
```

**CTA Buttons:**
- Primary: `Explore Technology` → /about#technology
- Secondary: `Partner With Us` → /contact

**Rules:**
- Full viewport height
- Video must autoplay, muted, loop, cover full screen (object-fit: cover)
- Subtle vignette overlay
- Headline in Inter, large display size
- Buttons bottom-left or center-bottom

---

## Section 2: Our Purpose

**Label:** `OUR PURPOSE`

**Title:**
```
Rebuilding Human Tissue.
Eliminating the Wait List.
```

**Subtitle:**
```
Every year, thousands die waiting for organs that never arrive.
Celutron exists to end that wait — by growing tissue from your own cells.
```

**3 Cards:**

| Card | Icon | Label | Body |
|------|------|-------|------|
| 1 | 🖨️ | PRINT | We bioprint living tissue structures layer by layer — with the same precision a surgeon needs, and the speed a patient can't afford to lose. |
| 2 | 🧬 | PERSONALISE | Every scaffold, every bioink, every membrane is built from the patient's own stem cells. No donors. No waiting. No rejection. |
| 3 | 🏥 | RESTORE | From bone reconstruction to organ repair — our tissue systems are designed to dissolve as the body heals, leaving nothing artificial behind. |

**Layout:** 3-column card grid on desktop, stacked on mobile  
**Card style:** white background, thin clinical-border, no rounded excess, label in JetBrains Mono

---

## Section 3: Three Fundamentals

**Label:** `SCIENCE`

**Title:** Every construct begins with three fundamentals.

**Animation:** Option 4 + Option 1 combined:
- Animated SVG line draws left → right connecting all 3 cards as you scroll
- Cards stagger-reveal from bottom (delay: 0ms → 150ms → 300ms)
- Metric values count up on entry using Framer Motion

**3 Cards:**

### Card 1 — CELLS (The Biological Engine)
```
Metric:   >85% Post-Print Viability
Points:
- Input: Patient biopsies, iPSCs, allogeneic stem cell lines
- Validated types: Chondrocytes, Osteoblasts, Fibroblasts, Endothelial cells
- Density: 10⁶ – 10⁸ cells/mL in active hydrogel carrier
- Viability verified via SEM validation loops
```

### Card 2 — BIOINK (The Living Material)
```
Metric:   dECM Gold Standard
Points:
- Gold standard: Organ-specific Decellularized Extracellular Matrix (dECM)
- Carriers: Sodium Alginate, Gelatin, Fibrin, Hyaluronic Acid
- Regulatory: GMP-grade clinical bioinks, sterile manufacture
```

### Card 3 — SCAFFOLD (The Structural Blueprint)
```
Metric:   100–500µm Hard Tissue / 20–100µm Soft Tissue
Points:
- Hard tissue macropores: 100–500µm interconnecting channels
- Soft tissue microporosity: 20–100µm precision channels
- Materials: PCL, PLGA, Type-I Collagen, Nano-Hydroxyapatite (HAp)
```

**Connector line:** thin teal/accent animated SVG line between cards  
**Metric values:** JetBrains Mono, large, counts up on scroll entry

---

## Section 4: BioTron — Plain English Explainer

**Label:** `OUR PLATFORM`

**Title:** A bioprinter built for the lab bench.

**Body:**
```
Load your bioink. Set your structure. Press print.

BioTron builds living tissue layer by layer at 10µm precision — 
inside a sealed sterile chamber, automatically. 
No special training. No cleanroom required.
```

**Visual:** Product image (BioTron V2) — image to be provided  
**CTA:** `See BioTron Specs →` → /products/bioprinters/biotron-v2

---

## Section 5: Our Focus Areas

**Label:** `APPLICATIONS`

**Title:** What we're building towards.

**Cards (application domains):**

| # | Area | Description |
|---|------|-------------|
| 1 | Bone Reconstruction | Patient-specific implants and bone scaffold systems |
| 2 | Wound Healing | Exosome-loaded membranes for chronic diabetic wounds |
| 3 | Organ Repair | Kidney tissue biofabrication and organ construct research |
| 4 | Drug Delivery | Nanoconjugate systems for controlled therapeutic release |
| 5 | Maxillofacial | Bioresorbable fixation implants from DICOM CT imaging |
| 6 | Cancer Diagnostics | Non-invasive patch sensors and cytogenetic mapping |

**Layout:** 3×2 grid, clinical card style, icon or number prefix

---

## Section 6: Our Services

**Label:** `WHAT WE PROVIDE`

**Title:** End-to-end tissue engineering capability.

**Services:**

| # | Service | Description |
|---|---------|-------------|
| 1 | Bioprinting Systems | BioTron V1 and V2 hardware — research and clinical grade |
| 2 | Bioink Supply | Ready-to-use, custom, and training bioinks — GMP grade |
| 3 | Scaffold Fabrication | Custom hard and soft tissue scaffolds per patient spec |
| 4 | Research Collaboration | Joint research programs with universities and hospitals |
| 5 | Clinical Translation | Support for regulatory pathways: CDSCO, ISO 13485, GMP |
| 6 | Custom Formulation | Patient-specific bioink development from own cell lines |

**Layout:** 3×2 or 2×3 grid, numbered, clean divider lines

---

## Section 7: Research Highlights

**Label:** `RESEARCH`

**Title:** Validated. Peer-reviewed. Clinically directed.

**Show 3 featured study cards:**
1. SCB-Nanocellulose Bioprinting Matrix
2. Bone Scaffold — 28× compressive strength improvement
3. Exosome Wound Healing Membrane

**Each card:**
- Study name
- One-line problem statement
- Key metric (e.g. 28× improvement, 72.3% porosity)
- `Read More →` link → /research

---

## Section 8: Contact CTA Strip

**Background:** clinical-accent (#1E40AF) or deep near-black

**Title:** Ready to collaborate?

**Subtitle:** Whether you're a researcher, hospital, or investor — let's build something that matters.

**CTA:** `Get In Touch →` → /contact

---

# PART 6 — PRODUCTS PAGE

## 6.1 Page Hero

```
Headline:    Precision instruments for tissue engineering research.
Subheadline: Bioprinters and bioinks engineered for reproducible, 
             clinical-grade biofabrication.
```

---

## 6.2 Bioprinters Section

**Label:** `BIOPRINTERS`

**Layout:** Two category cards side by side (like Cellink reference image)

### BioTron V1 Card
```
Image:       [to be provided — biotron-v1.jpg]
Name:        BioTron V1
Type:        Multi-Cartridge Industrial Assembly
Description: Multi-syringe head with distinct bioink formulations. 
             Automated spatial and temporal pressure extrusion.
CTA:         See All →  → /products/bioprinters/biotron-v1
```

### BioTron V2 Card
```
Image:       [to be provided — biotron-v2.jpg]
Name:        BioTron V2
Type:        Intelligent Portable Chamber
Description: Compact electropneumatic extrusion with ISO Class 5 
             sterile chamber. 10µm resolution. Cloud-connected.
CTA:         See All →  → /products/bioprinters/biotron-v2
```

---

## 6.3 BioTron V2 — Detail Page

**Full spec table (authoritative — use these exact values):**

| Specification | Value |
|---------------|-------|
| System | Electropneumatic extrusion |
| Print Resolution | 10 µm |
| Print Head | 1 (Movable) |
| Nozzle Size | 20G – 28G |
| Build Volume | 15 × 15 × 10 cm |
| Outer Dimensions | 300 × 240 × 345 mm |
| Operating Temperature | Ambient |
| Pressure | 0 – 100 kPa |
| Max Speed | 80 mm/s |
| Max Acceleration | 3000 mm/s² |
| Infill | Up to 100% |
| Build Surface | Petri dishes — 75 mm, 100 mm |
| Features | Crosslinking module + adjustable nozzles |
| Enclosure | ISO Class 5 sterile chamber with UV + HEPA H14 filter |
| Software | Cloud-based G-code visualization + print library |
| Calibration | Automatic + Manual |
| User Interface | Integrated touchscreen + Online Web Interface |
| Connectivity | Touchscreen + Wi-Fi |
| Weight | 4 kg |

**All metric values must render in JetBrains Mono.**

---

## 6.4 Bioinks Section

**Label:** `BIOINKS`

**Subtitle:** From standard bioinks to patient-specific formulas — shipped in sterile cartridges ready for research.

**Category Cards (same layout as Cellink reference image — image + name + description + "See All" button):**

### Category 1: Ready to Use
```
Products:    CeluLife Bioink, CeluMatrix-LV, CeluMatrix-HV (Alginate Bioink)
Description: Get printing immediately with standard bioinks in ready-to-use cartridges.
CTA:         See All →
```

### Category 2: Training Bioinks
```
Products:    CeluLife Trial
Description: Optimized for learning and protocol development without using live cell material.
CTA:         See All →
```

### Category 3: BioTron Inks
```
Products:    CeluLife-Alg, CeluLife-Gel
Description: Formulated and validated specifically for BioTron hardware systems.
CTA:         See All →
```

### Category 4: Custom / Enquiry
```
Description: Patient-specific formulations built from your own cell lines. 
             Contact us to begin formulation.
CTA:         Enquire →  → /contact
```

---

## 6.5 Base Materials Section

**Label:** `BASE MATERIALS`

**Subtitle:** A wide array of stock solutions and lyophilized biomaterials to develop your own bioinks from high-quality, consistent building blocks.

**Items (Browse card layout):**

| Material | Notes |
|----------|-------|
| Alginate | Standard hydrogel carrier |
| Gelatin | Thermoreversible scaffold base |
| Pluronic Acid | Rheology modifier and sacrificial pore former |
| Methyl Cellulose | Viscosity modifier |
| Microcrystalline Cellulose | Structural reinforcement |
| Nanocellulose | CNF from sugarcane bagasse (proprietary isolation) |
| Pectin | Natural polysaccharide carrier |
| Polyethylene Glycol (PEG) | Crosslinkable hydrogel spacer |

**CTA per item:** `Browse →`

---

## 6.6 Compliance Strip

**Badges displayed (clean, minimal):**
- CDSCO Compliant
- ISO 13485
- IEC 60601
- GLP Standards
- GMP Grade

---

# PART 7 — RESEARCH PAGE

## 7.1 Page Hero

```
Headline:    Science that moves medicine forward.
Subheadline: Six active research programs. Three clinical translation 
             case studies. All grounded in validated data.
```

---

## 7.2 Research Overview

2–3 sentence paragraph on Celutron's research direction:
> Celutron conducts interdisciplinary research spanning biomaterials, additive biofabrication, drug delivery nanoconjugates, and clinical implant translation. Every project targets a real unmet clinical need, with metrics validated through SEM imaging, MTT assays, molecular characterization, and mechanical testing.

---

## 7.3 Active Studies Grid

**Label:** `ACTIVE RESEARCH`

**6 Study Cards:**

### Study 1 — SCB-Nanocellulose Bioprinting Matrix
```
Full name:   Rapid Isolation of Cellulose Nanofibrils (CNF) from Sugarcane 
             Bagasse for 3D Bioprinting and Tissue Engineering Applications
Problem:     Existing CNF isolation models use harsh chemicals and fail 
             to utilize India's 100M+ tonnes of annual sugarcane bagasse.
Approach:    AHP and DES chemical isolation, characterized via FTIR, SEM, NTA.
Key Metrics:
  DES:  155.8 nm peak (31.8%) | Zeta: -20.6 mV (77.7%)
  AHP:  168.3 nm peak (28.6%) | Zeta: -10.8 mV (66.6%)
```

### Study 2 — Exosome Wound Healing Membrane
```
Full name:   Development of Exosome-Loaded Bio-Printed PRF Membrane 
             for Wound Healing Matrix
Problem:     Chronic diabetic wounds show delayed healing due to damaged 
             angiogenesis and sustained inflammation.
Approach:    NTA-confirmed exosomes + i-PRF in Sodium Alginate + Gelatin 
             carrier. 5-layer crosslinked scaffold. Verified via MTT assay.
```

### Study 3 — Bone Scaffold (Tri-Component)
```
Full name:   Pluronic-Assisted Alginate-Hydroxyapatite Bioink for 3D 
             Bioprinting of Bone Tissue Scaffolds
Problem:     Mono-component alginate shows poor extrusion stability and 
             insufficient mechanical load profile for orthopedic defects.
Approach:    Alginate + nano-HAp + Pluronic F-127. 22G nozzle. 65–90 kPa.
Key Metrics:
  Formulation F6: Printability 5/5
  Filament width: 398 ± 18 µm
  Macropores: 340 ± 65 µm | Micropores: 10–80 µm
  Total porosity: 72.3% | Interconnectivity: >95%
  Compressive strength: 28× improvement (0.64 MPa vs 0.15 MPa)
  Young's Modulus: 6.8 ± 0.9 MPa
  Cell viability: >85% at Day 7 (MG-63 osteosarcoma)
```

### Study 4 — CQD-Chrysin Drug Delivery
```
Full name:   Loading Efficiency and Sustained Release of 
             CQD-Chrysin Nanoconjugates
Approach:    In-vitro mapping at pH 5, 37°C (simulated tumor environment).
Key Metrics:
  Loading efficiency: 46.1% (1:2 ratio) → 64.3% (1:8 ratio)
  Sustained release: 49% over 36 hours
```

### Study 5 — GO-Chrysin Drug Delivery
```
Full name:   Loading Efficiency and Sustained Release of 
             Graphene Oxide-Chrysin Nanoconjugates
Approach:    Structural hybrid verified via XRD crystal lattice shifts 
             and FTIR surface conjugation spectra. High colloidal stability.
```

### Study 6 — Advanced Organ Printing
```
Systems:     Synovial Lifting Scaffold Delivery System
             Kidney Tissue Biofabrication Project
Approach:    Comparative electrolyte and protein diffusion validation assays.
```

---

## 7.4 Clinical Translation Section

**Label:** `CLINICAL TRANSLATION`

**3 Case Study Cards:**

### Case Alpha — Bioresorbable Maxillofacial Implants
```
Indication:  LeFort II Fracture Reconstruction (nasal, orbital, maxillary)
Approach:    Patient-specific PLA-HAp resorbable fixation screws printed 
             direct from DICOM CT imaging.
Resorption:  HAp bone ingrowth: Months 3–6
             PLA complete resorption: 12–34 months
             No second surgery required.
Timeline:
  Day 1: Custom implant insertion
  Months 3–6: HAp bone ingrowth
  Months 12–34: Complete PLA resorption
```

### Case Beta — Non-Invasive Breast Cancer Screening
```
Indication:  Early-stage breast cancer and permittivity abnormality mapping
Approach:    Lightweight patch sensor powered by thermoelectric generators 
             harvesting body heat. Real-time wireless data stream.
Cost:        <₹500 per session vs ₹5,000–₹25,000 legacy imaging
```

### Case Gamma — Oncology Cytogenetic Mapping
```
Indication:  Paclitaxel and radiation therapy tumor tracking
Breakthrough: Shared cytogenetic locus at Chromosome 6q23
              MYB (Breast ACC driver) + BCLAF1 (CMF fusion partner)
              GRM1 (CMF driver) adjacent at 6q24
```

---

## 7.5 Validation Dashboard

**Label:** `VALIDATION`

**Display key validated metrics as a data grid:**

| Metric | Value | Method |
|--------|-------|--------|
| Post-print cell viability | >85% | SEM + MTT assay |
| Bone scaffold porosity | 72.3% | Mechanical characterization |
| Scaffold interconnectivity | >95% | Micro-CT |
| Compressive strength improvement | 28× | Mechanical testing |
| Drug loading efficiency (max) | 64.3% | NTA characterization |
| Sustained release window | 36 hours | In-vitro assay |
| CNF particle size (DES) | 155.8 nm | NTA |

**All values in JetBrains Mono.**

---

## 7.6 Collaborate CTA

```
Title:    Working on something similar?
Subtitle: We're open to joint research, university partnerships, 
          and clinical collaborations.
CTA:      Let's Research Together → /contact
```

---

# PART 8 — ABOUT PAGE

## 8.1 Page Hero

```
Headline:    Built in a lab. Driven by a mission.
Subheadline: Celutron was founded to solve the organ shortage — 
             one bioprinted tissue construct at a time.
```

---

## 8.2 Company Story

Narrative section — 3–4 short paragraphs covering:
- Why Celutron was founded (organ shortage, tissue loss, regenerative medicine accessibility)
- What the company combines (biomedical science, mechanical engineering, additive manufacturing, clinical validation)
- Where it operates (Chennai, CIIC incubation)
- Where it's going (clinical translation, global impact)

---

## 8.3 Mission & Vision

**Mission:**
> To make patient-specific tissue engineering accessible, reproducible, and clinically deployable.

**Vision:**
> A future where no patient dies waiting for a transplant.

---

## 8.4 Timeline

**Horizontal minimal timeline — key milestones:**
- Founding of Celutron Innovations
- Incubation at CIIC, Chennai
- BioTron V1 development
- BioTron V2 development and validation
- First research publications
- Clinical translation programs initiated

*(Actual dates to be confirmed and filled in by Muaz.)*

---

## 8.5 Technology Section

**Label:** `TECHNOLOGY`

**Title:** How Celutron builds tissue.

### Subsection 1 — Bioprinting Modalities

**Tab switcher:**

| Tab | Description |
|-----|-------------|
| Extrusion | Pressure-controlled layer-by-layer deposition (BioTron platform) |
| Inkjet | High-resolution droplet-based cell patterning |
| DMD Digital | Digital micromirror device — photopolymerization-based printing |

### Subsection 2 — Bioink Systems
- dECM gold standard formulation
- GMP-grade sterile manufacture
- Patient-specific hydrogel tuning
- Carriers: Alginate, Gelatin, Fibrin, Hyaluronic Acid

### Subsection 3 — Scaffold Engineering
- Hard tissue: 100–500µm interconnected macropores
- Soft tissue: 20–100µm microporosity channels
- Materials: PCL, PLGA, Type-I Collagen, Nano-HAp (bioresorbable)

### Subsection 4 — FRESH Bioprinting
- Support bath printing
- Hydrogel stabilization for complex structures
- Cell viability optimization under support conditions

---

## 8.6 Founders Section

**Label:** `OUR TEAM`

**Title:** The people behind the platform.

**4 Founder Cards:**

| Name | Role | Focus |
|------|------|-------|
| Dr. Gowthami Jawahar | Founder & CEO | Regenerative medicine, tissue engineering, patient-focused innovation |
| Dr. Shashank Chetty | Co-Founder | Biomedical research, biofabrication systems |
| Dr. Pradeepkumar Sundarraj, PhD | Scientific & Engineering Advisor | Mechanical engineering, thermodynamics, additive manufacturing, precision systems |
| Dr. Prashanth K.K. | Clinical & Medical Advisor | Clinical validation, medical research, regulatory alignment |

**Each card:**
- Founder photo (to be provided)
- Name in Inter, role in JetBrains Mono label style
- 2–3 line focus description
- Clean white card, thin border, no decoration

---

## 8.7 Incubation

**Label:** `ECOSYSTEM`

Mention: CIIC incubation, Chennai base, institutional backing.

---

# PART 9 — CONTACT PAGE

## 9.1 Page Hero

```
Headline:    Let's build something that matters.
Subheadline: Whether you're a researcher, hospital, investor, or 
             institution — we want to hear from you.
```

## 9.2 Contact Form

**Input fields:**
- Full Name
- Organization / Institution
- Email Address
- Inquiry Type (dropdown): Research Collaboration / Investor Inquiry / Product Inquiry / Academic Partnership / Other
- Message

**Submit CTA:** `Send Message`

## 9.3 Contact Details

```
Email:    gowthamijawahar@celutron.in
Phone:    +91 91763 48990
Location: Chennai, Tamil Nadu, India
```

---

# PART 10 — PERFORMANCE & SEO TARGETS

## 10.1 Lighthouse Targets

```
Performance:    90+
Accessibility:  95+
SEO:            95+
Best Practices: 95+
```

## 10.2 Technical Rules

- Next.js 15 Server Components preferred
- next/image for all images
- next/font for Inter + JetBrains Mono
- Lazy loading for all heavy sections
- Draco compression for any 3D assets
- Code splitting per route
- Optimized hydration

## 10.3 SEO Keywords

Primary: bioprinting, tissue engineering, regenerative medicine, biofabrication, biomembranes, stem cell engineering, scaffold engineering, bioink, bioprinter India

## 10.4 Technical SEO

- Semantic HTML5 throughout
- Proper metadata per page (title, description, OG tags)
- Structured data (JSON-LD for Organization)
- sitemap.xml
- robots.txt

---

# PART 11 — ACCESSIBILITY

- Keyboard navigation throughout
- Proper color contrast (WCAG AA minimum)
- Screen reader semantic structure
- `prefers-reduced-motion` respected — all Framer Motion animations disabled if user has reduced motion preference
- Alt text on all images

---

# PART 12 — ASSETS REGISTRY

| Asset | Filename | Status |
|-------|----------|--------|
| Hero background video | hero_loop.mp4 | ✅ Confirmed |
| Company logo | celutron-logo.jpeg | ✅ Confirmed |
| BioTron V1 product image | biotron-v1.jpg | ⏳ Pending |
| BioTron V2 product image | biotron-v2.jpg | ⏳ Pending |
| CeluLife Bioink image | celulife-bioink.jpg | ⏳ Pending |
| CeluMatrix-LV image | celumatrix-lv.jpg | ⏳ Pending |
| CeluMatrix-HV image | celumatrix-hv.jpg | ⏳ Pending |
| CeluLife Trial image | celulife-trial.jpg | ⏳ Pending |
| CeluLife-Alg image | celulife-alg.jpg | ⏳ Pending |
| CeluLife-Gel image | celulife-gel.jpg | ⏳ Pending |
| Base materials image | base-materials.jpg | ⏳ Pending |
| Dr. Gowthami photo | founder-gowthami.jpg | ⏳ Pending |
| Dr. Shashank photo | founder-shashank.jpg | ⏳ Pending |
| Dr. Pradeep photo | advisor-pradeep.jpg | ⏳ Pending |
| Dr. Prashanth photo | advisor-prashanth.jpg | ⏳ Pending |

---

# PART 13 — COMPONENT LIBRARY

All components must be:
- Reusable, modular, strongly typed (TypeScript)
- Accessible and responsive
- Driven from props — no hardcoded content inside components

**Core components to build:**

| Component | Purpose |
|-----------|---------|
| `<NavBar />` | Global header with mega menu dropdown |
| `<Footer />` | Global footer |
| `<HeroVideo />` | Full-screen video hero with overlay + headline + CTA |
| `<PurposeCard />` | Print / Personalise / Restore cards |
| `<FundamentalsTriad />` | Three pillars with animated connector + stagger reveal |
| `<MetricCounter />` | Count-up number animation on scroll entry |
| `<ProductCategoryCard />` | Bioprinter/Bioink category card with image + CTA |
| `<SpecTable />` | Technical specification table (JetBrains Mono values) |
| `<StudyCard />` | Research study card with metric highlight |
| `<CaseStudyCard />` | Clinical translation case card |
| `<FounderCard />` | Team member card with photo + role + focus |
| `<ComplianceBadge />` | Regulatory framework badge |
| `<ValidationGrid />` | Metric data grid for research page |
| `<ContactForm />` | Institutional contact form |
| `<CTAStrip />` | Full-width call-to-action banner section |
| `<TimelineHorizontal />` | Minimal horizontal milestone timeline |
| `<TechTabSwitcher />` | Modality tab switcher for technology section |

---

# PART 14 — TYPESCRIPT INTERFACES

```typescript
// types/scientific.ts

export interface ResearchStudy {
  studyId: string;
  nomenclatureTitle: string;
  shortTitle: string;
  clinicalProblemStatement: string;
  technicalApproach: string;
  keyMetrics: Record<string, string>;
  biologicalMatrix: string[];
}

export interface HardwareProduct {
  modelId: 'biotron-v1' | 'biotron-v2';
  name: string;
  tagline: string;
  description: string;
  specs: Record<string, string>;
  imageFile: string;
}

export interface BioinkProduct {
  productId: string;
  name: string;
  category: 'ready-to-use' | 'training' | 'biotron-inks' | 'base-materials' | 'custom';
  description: string;
  imageFile?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  title: 'founder' | 'co-founder' | 'advisor';
  focus: string[];
  photoFile: string;
}

export interface CaseStudy {
  caseId: 'alpha' | 'beta' | 'gamma';
  indication: string;
  technicalSummary: string;
  keyOutcome: string;
}
```

---

*END OF CELUTRON PRD V3.0*  
*Prepared for AI-executable frontend build.*  
*All scientific metrics, product specs, and leadership data are authoritative and must not be modified.*
