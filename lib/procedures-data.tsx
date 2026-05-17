import { type ReactNode } from "react";

export interface SubProcedure {
  name: string;
  body: string;
}

export interface Procedure {
  slug: string;
  num: string;
  title: string;
  image: string;
  shortDesc: string;
  intro: string;
  items: SubProcedure[];
  icon: ReactNode;
}

const iconClass = "w-16 h-16 opacity-80";

export const procedures: Procedure[] = [
  {
    slug: "adult-cardiac-surgery",
    num: "01",
    title: "Adult Cardiac Surgery",
    image: "/proc-adult-cardiac.jpg",
    shortDesc:
      "Comprehensive cardiac surgical care including bypass surgery, valve repair and replacement, and complex reoperations.",
    intro:
      "Dr. Loumiotis performs all aspects of Adult Cardiac Surgery. Treatments are always tailored to the patient's individual pathology following the most current guidelines.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
        <path d="M32 54C32 54 8 40 8 24a12 12 0 0 1 24 0 12 12 0 0 1 24 0c0 16-24 30-24 30z" stroke="#D4AF78" strokeWidth="1.5" fill="none" />
        <path d="M20 32h6l3-6 6 12 3-8h6" stroke="#B8965A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      {
        name: "Coronary Artery Bypass Surgery (CABG)",
        body: "Coronary Artery Disease is a leading cause of morbidity and mortality in the USA. Revascularization can improve the quality of life and the patient prognosis. Dr. Loumiotis performs On-Pump or Off-Pump CABG based on patient's anatomy and underlying pathology.",
      },
      {
        name: "Aortic Valve Surgery",
        body: 'An Aortic Valve can be stenotic (not opening well) or incompetent (leaky). Dr. Loumiotis is an expert in Aortic Valve Surgery and he is one of the few surgeons in the whole country who can repair a \u201cleaky\u201d aortic valve.',
      },
      {
        name: "Mitral Valve Surgery",
        body: "This procedure is usually performed to treat mitral valve regurgitation or mitral valve stenosis, which are both caused by a malfunctioning of the valve. The surgery is very complex but it can be a lifesaving one for those suffering from severe valve malfunction.",
      },
      {
        name: "Tricuspid or Pulmonary Valve Disease",
        body: "Although not as common, these valves might be diseased and need to be repaired as well. Dr. Loumiotis can perform this procedure along with other procedures.",
      },
      {
        name: "Infective Endocarditis",
        body: "Infection in the heart usually affecting one or more valves is a lethal condition that needs prompt surgical treatment. Dr. Loumiotis performs these complicated cases and has extensive experience.",
      },
      {
        name: "Complex Re-operative Cardiac Surgery",
        body: "It is not uncommon for a patient to have multiple previous operations for a heart problem. If another risky operation is needed, Dr. Loumiotis is an expert and can help you.",
      },
    ],
  },
  {
    slug: "complex-aortic-surgery",
    num: "02",
    title: "Complex Aortic Surgery",
    image: "/proc-complex-aortic.jpg",
    shortDesc:
      "Full-spectrum aortic care from root to bifurcation — aneurysms, dissections, valve-sparing procedures, and emergency interventions.",
    intro:
      "Dr. Loumiotis is an expert in thoracic aortic surgery, offering extensive experience in treating complex aortic pathologies along its entire length — from the aortic root at the heart to its bifurcation. He is highly proficient in performing a wide range of technically demanding procedures, addressing conditions that are often life-threatening and require precise, timely intervention.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
        <path d="M32 8 C32 8 20 14 20 28 C20 36 24 40 32 44 C40 40 44 36 44 28 C44 14 32 8 32 8Z" stroke="#D4AF78" strokeWidth="1.5" fill="none" />
        <path d="M32 8 C32 24 32 44 32 58" stroke="#B8965A" strokeWidth="1" />
        <path d="M20 28 C12 26 6 28 2 26" stroke="#D4AF78" strokeWidth="1" strokeLinecap="round" />
        <path d="M44 28 C52 26 58 28 62 26" stroke="#D4AF78" strokeWidth="1" strokeLinecap="round" />
        <circle cx="32" cy="28" r="4" stroke="#B8965A" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    items: [
      {
        name: "Valve Sparing Aortic Root Replacement",
        body: "Large aortic root aneurysms with a normal aortic valve can be fixed by keeping the patient's native valve. Dr. Loumiotis is an expert in Valve Sparing Root Replacement. The patient keeps his own valve with lower risk of infection, reoperation, or need for anticoagulation.",
      },
      {
        name: "Complex Aortic Valve Repair",
        body: "Dr. Loumiotis is one of the few surgeons who can repair your leaky aortic valve.",
      },
      {
        name: "Aortic Root Replacement",
        body: "When the valve is not repairable, the aneurysm and valve can be replaced with either a tissue valve or a mechanical valve conduit.",
      },
      {
        name: "Aortic Arch, Descending Thoracic & Thoraco-abdominal Aneurysms",
        body: "Dr. Loumiotis and his team have unique training and expertise in treating these complex aortic pathologies.",
      },
      {
        name: "Endovascular Aortic Surgery",
        body: "Following the most up-to-date guidelines, Dr. Loumiotis performs endovascular Aortic Surgery when appropriate.",
      },
      {
        name: "Minimally Invasive Aortic Surgery",
        body: "Specific aortic pathologies can be surgically treated with minimally invasive incisions.",
      },
      {
        name: "Aortic Dissections & Emergencies",
        body: "These are lethal diseases with a dismal outcome unless treated promptly. Dr. Loumiotis has vast experience treating aortic emergencies.",
      },
      {
        name: "Ross Procedure",
        body: "Young patients with a diseased aortic valve may be candidates for a valve replacement with their own pulmonary valve. Dr. Loumiotis performs this unique procedure.",
      },
    ],
  },
  {
    slug: "minimally-invasive-cardiac-surgery",
    num: "03",
    title: "Minimally Invasive Cardiac Surgery",
    image: "/proc-minimally-invasive.jpg",
    shortDesc:
      "Less than 8 cm incision for aortic valve and proximal aortic aneurysm repair — world-class outcomes with faster recovery.",
    intro:
      "Dr. Loumiotis offers a less invasive option for treatments of aortic aneurysms and aortic valve disease. With an incision of less than 8 cm, he can repair or replace the diseased aortic valve and the proximal aortic aneurysm. Dr. Loumiotis, as a patient advocate, always discusses the surgical options with the patients and chooses the most appropriate surgical approach that never compromises safety or outcome of the operation.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
        <path d="M16 48 L32 16 L48 48" stroke="#D4AF78" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 36 h20" stroke="#B8965A" strokeWidth="1" strokeLinecap="round" />
        <circle cx="32" cy="16" r="3" stroke="#B8965A" strokeWidth="1.2" fill="none" />
        <path d="M28 52 Q32 56 36 52" stroke="#D4AF78" strokeWidth="1" strokeLinecap="round" fill="none" />
      </svg>
    ),
    items: [],
  },
  {
    slug: "tavr",
    num: "04",
    title: "Transcatheter Aortic Valve Replacement (TAVR)",
    image: "/proc-tavr.jpg",
    shortDesc:
      "A catheter-based, less invasive alternative for aortic stenosis patients — evaluated and performed as part of a multidisciplinary heart team.",
    intro:
      "Dr. Loumiotis, as part of the heart team, evaluates and treats patients with aortic stenosis with a less invasive option — transcatheter aortic valve replacement (TAVR). Discuss with Dr. Loumiotis if you are a candidate for TAVR.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
        <circle cx="32" cy="32" r="18" stroke="#D4AF78" strokeWidth="1.5" fill="none" />
        <path d="M32 14 L32 50" stroke="#B8965A" strokeWidth="1" strokeLinecap="round" />
        <path d="M24 22 Q32 32 40 22" stroke="#D4AF78" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M24 42 Q32 32 40 42" stroke="#D4AF78" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <circle cx="32" cy="32" r="4" stroke="#B8965A" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    items: [],
  },
  {
    slug: "aortic-valve-repair",
    num: "05",
    title: "Aortic Valve Repair & Replacement",
    image: "/proc-valve.jpg",
    shortDesc:
      "Valve-sparing root surgery, bicuspid valve repair, and tailored replacements — Dr. Loumiotis is one of few surgeons nationwide who can repair a leaky aortic valve.",
    intro:
      "An Aortic Valve can be stenotic (not opening well) or incompetent (leaky). Dr. Loumiotis is an expert in Aortic Valve Surgery and he is one of the few surgeons in the whole country who can repair a leaky aortic valve. He performs valve-sparing root surgery, bicuspid valve repair, and tailored replacements to restore optimal hemodynamic function.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
        <path d="M32 54C32 54 8 40 8 24a12 12 0 0 1 24 0 12 12 0 0 1 24 0c0 16-24 30-24 30z" stroke="#D4AF78" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="24" r="6" stroke="#B8965A" strokeWidth="1.2" fill="none" />
        <path d="M29 24 L32 21 L35 24 L32 27Z" stroke="#B8965A" strokeWidth="1" fill="none" />
      </svg>
    ),
    items: [
      {
        name: "Aortic Valve Repair",
        body: "Dr. Loumiotis is one of the few surgeons in the country who can repair a leaky (incompetent) aortic valve, preserving the patient's native valve and avoiding the need for lifelong anticoagulation.",
      },
      {
        name: "Aortic Valve Replacement",
        body: "When the valve is not repairable, Dr. Loumiotis performs replacement using either a tissue valve or mechanical valve conduit, tailored to the patient's age and lifestyle.",
      },
      {
        name: "Valve-Sparing Aortic Root Surgery",
        body: "For patients with large root aneurysms but a normal aortic valve, Dr. Loumiotis can fix the aneurysm while preserving the native valve — lowering risk of infection, reoperation, and anticoagulation need.",
      },
      {
        name: "Bicuspid Aortic Valve Repair",
        body: "Bicuspid aortic valves are the most common congenital heart defect. Dr. Loumiotis has specialized expertise in repairing these complex valves for durable, long-term outcomes.",
      },
    ],
  },
  {
    slug: "ross-procedure",
    num: "06",
    title: "The Ross Procedure",
    image: "/proc-ross.jpg",
    shortDesc:
      "A specialized valve replacement using the patient's own pulmonary valve — offering exceptional durability and quality of life, especially for younger patients.",
    intro:
      "Young patients with a diseased aortic valve may be candidates for a valve replacement with their own pulmonary valve — known as the Ross Procedure. Dr. Loumiotis performs this unique and technically demanding procedure, which offers a living replacement valve that grows with the patient, requires no lifelong blood thinners, and provides outstanding long-term durability.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={iconClass}>
        <circle cx="32" cy="32" r="20" stroke="#D4AF78" strokeWidth="1.5" fill="none" />
        <path d="M22 32 C22 26 28 22 32 22 C36 22 42 26 42 32 C42 38 36 42 32 42 C28 42 22 38 22 32Z" stroke="#B8965A" strokeWidth="1" fill="none" />
        <path d="M32 22 L32 42" stroke="#D4AF78" strokeWidth="0.8" />
        <path d="M22 32 L42 32" stroke="#D4AF78" strokeWidth="0.8" />
        <circle cx="32" cy="32" r="4" stroke="#B8965A" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    items: [
      {
        name: "What is the Ross Procedure?",
        body: "The Ross Procedure involves moving the patient's own pulmonary valve to the aortic position and replacing the pulmonary valve with a donor (homograft) valve. The result is a living, native valve in the aortic position.",
      },
      {
        name: "Who is a Candidate?",
        body: "The Ross Procedure is ideal for younger patients (typically under 60) with aortic valve disease who want to avoid lifelong anticoagulation and benefit from a living, durable replacement.",
      },
      {
        name: "Advantages",
        body: "Unlike mechanical valves, the Ross Procedure requires no blood thinners. Unlike tissue valves, it offers far greater durability in young patients. The pulmonary autograft can even grow with pediatric patients.",
      },
      {
        name: "Dr. Loumiotis's Expertise",
        body: "The Ross Procedure is one of the most technically demanding operations in cardiac surgery. Dr. Loumiotis has specialized training in this procedure and performs it as part of his complex aortic and valve practice.",
      },
    ],
  },
];

export function getProcedure(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}
