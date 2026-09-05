import { ServiceItem, NavigationItem, GalleryProject } from "@/types";

export const COMPANY_INFO = {
  name: "JIB ELECTRICAL",
  fullName: "JIB Electrical Enterprises",
  registration: "REG CK NO. 2019/348029/07",
  established: "ESTABLISHED 2019 / GOODWOOD, CAPE TOWN",
  director: "DIRECTOR JOHN IBALA",
  directiveTagline: "● DIRECT POWERED BY DIRECTOR JOHN IBALA",
  displayHeadline: "POWER ARCHITECTURE FOR CAPE TOWN.",
  heroDescription:
    "Engineered by John Ibala. High-end electrical systems, heavy industrial perimeters, and regulatory safety compliance.",
  address: {
    line1: "20 HAMILTON STREET",
    line2: "GOODWOOD, CAPE TOWN, 7463",
  },
  phones: ["+27 67 932 3052", "+27 67 818 6280"],
  email: "jibelectrical2@gmail.com",
  complianceStandard:
    "* COMPLIANCE VERIFIED UNDER OCCUPATIONAL HEALTH AND SAFETY ACT NO. 85 OF 1993.",
  studioCredit: "BUILT WITH ANTIGRAVITY ENGINE",
  copyright: `© ${new Date().getFullYear()} JIB ELECTRICAL. ALL RIGHTS RESERVED.`,
};

export const NAV_LINKS: NavigationItem[] = [
  { label: "INTRO", href: "#hero", isActive: true },
  { label: "SERVICES", href: "#services" },
  { label: "OPERATIONS", href: "#operations" },
  { label: "COMPLIANCE", href: "#compliance" },
  { label: "CONTACT", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "domestic",
    code: "01",
    category: "DOMESTIC",
    title: "HOUSE WIRING",
    description:
      "Complete distribution board installations, circuit mapping, and systemic load routing.",
    image: "/images/conduit-slab-wiring.png",
    specs: ["Sub-floor Conduits", "Load Balancing", "Single & 3-Phase"],
  },
  {
    id: "protection",
    code: "02",
    category: "PROTECTION",
    title: "ELECTRIC FENCING",
    description:
      "Perimeter fortification using high-tensile brackets, bobbin insulators, and SABS-approved energizers.",
    image: "/images/fencing-2.png",
    specs: ["SABS Energizers", "Multi-Zone Warning", "Earth Spike Array"],
  },
  {
    id: "automation",
    code: "03",
    category: "AUTOMATION",
    title: "GATE MOTOR REPAIRS",
    description:
      "Heavy gear mechanical maintenance, receiver synchronizations, and access logic systems.",
    image: "/images/tools-breaker-kit.png",
    specs: ["Centurion & Nemtek", "Backup Battery Arrays", "Remote Sync"],
  },
  {
    id: "systems",
    code: "04",
    category: "SYSTEMS",
    title: "SYSTEM DIAGNOSTICS",
    description:
      "Rapid electrical fault finding, insulation tests, and municipal compliance-ready upgrades.",
    image: "/images/diagnostics-testing.png",
    specs: ["Multimeter Testing", "Thermal Inspection", "COC Preparation"],
  },
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: "proj-1",
    title: "RESIDENTIAL PERIMETER DEFENSE",
    location: "NORTHERN SUBURBS, CAPE TOWN",
    category: "ELECTRIC FENCING",
    image: "/images/fencing-1.png",
    description:
      "Multi-strand stainless steel bracket perimeter system with weather-sealed bobbin insulators along extended boundary walls.",
    tag: "LIVE FORTIFICATION",
  },
  {
    id: "proj-2",
    title: "MUNICIPAL BOUNDARY SHOCK SYSTEM",
    location: "GOODWOOD SECTOR",
    category: "PERIMETER FORTIFICATION",
    image: "/images/fencing-2.png",
    description:
      "High-voltage compliance-certified electric fence with dual-sided high-visibility hazard warning indicators.",
    tag: "SABS COMPLIANT",
  },
  {
    id: "proj-3",
    title: "MAIN DISTRIBUTION BOARD DIAGNOSTICS",
    location: "CAPE TOWN CENTRAL",
    category: "COMPLIANCE & TESTING",
    image: "/images/diagnostics-testing.png",
    description:
      "Precision probe testing across terminal circuits for resistance, grounding safety, and Certificate of Compliance issuance.",
    tag: "OHS ACT 85 VERIFIED",
  },
  {
    id: "proj-4",
    title: "STRUCTURAL SLAB REINFORCEMENT & CONDUIT",
    location: "WESTERN CAPE COMMERCIAL SITE",
    category: "NEW INFRASTRUCTURE",
    image: "/images/conduit-slab-wiring.png",
    description:
      "Pre-pour conduit laying, structural electrical channeling, and subterranean feed lines for multi-level buildings.",
    tag: "STRUCTURAL ELECTRICAL",
  },
];

export const WORKFLOW_STEPS = [
  {
    id: "step-1",
    stepNumber: "01",
    title: "DIRECTIVE SUBMISSION",
    description: "Transmit your project requirements, location, and critical infrastructure needs via our secure operational channel.",
    details: ["Requirements Gathering", "Site Location Analysis", "Initial Assessment"]
  },
  {
    id: "step-2",
    stepNumber: "02",
    title: "SITE RECONNAISSANCE",
    description: "Our technical team deploys to your coordinates to analyze the electrical grid, structural constraints, and safety compliance requirements.",
    details: ["Grid Diagnostics", "Structural Evaluation", "Load Profiling"]
  },
  {
    id: "step-3",
    stepNumber: "03",
    title: "ARCHITECTURE & PROPOSAL",
    description: "A comprehensive power architecture plan is drafted, outlining the required materials, execution timeline, and firm project quotation.",
    details: ["Material Specification", "Timeline Projection", "Firm Quotation"]
  },
  {
    id: "step-4",
    stepNumber: "04",
    title: "ON-SITE EXECUTION",
    description: "System installation and integration commence under strict safety protocols, ensuring robust, high-end electrical functionality.",
    details: ["Protocol Adherence", "System Integration", "Rigorous Testing"]
  },
  {
    id: "step-5",
    stepNumber: "05",
    title: "VERIFICATION & COMPLIANCE",
    description: "Final multimeter testing, load balancing verification, and issuance of the official Certificate of Compliance (COC).",
    details: ["Final Diagnostics", "Load Balancing", "COC Issuance"]
  }
];
