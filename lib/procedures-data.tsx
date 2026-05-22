import { type ReactNode } from "react";

export interface SubProcedure {
  name: string;
  body: string;
  fullWidth?: boolean;
}

export interface Procedure {
  slug: string;
  num: string;
  title: string;
  image: string;
  shortDesc: string;
  intro: string;
  items: SubProcedure[];
  contentLayout?: "grid" | "article";
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
      "Dr. Loumiotis is an expert in thoracic aortic surgery, offering extensive experience in treating complex aortic pathologies along its entire length—from the aortic root at the heart to its bifurcation. He is highly proficient in performing a wide range of technically demanding procedures, addressing conditions that are often life-threatening and require precise, timely intervention.",
    contentLayout: "article",
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
        name: "Complex Aortic Surgery",
        body: `Dr. Loumiotis is an expert in thoracic aortic surgery, offering extensive experience in treating complex aortic pathologies along its entire length—from the aortic root at the heart to its bifurcation. He is highly proficient in performing a wide range of technically demanding procedures, addressing conditions that are often life-threatening and require precise, timely intervention.

Valve Sparing Aortic Root Replacement: Large aortic root aneurysms with a normal aortic valve can be fixed by keeping the patient's native valve. Dr. Loumiotis is an expert in Valve Sparing Root Replacement. The benefits are a lot. The patient keeps his own valve with lower risk of infection, reoperation, or need for anticoagulation.

Complex Aortic Valve Repair: Dr. Loumiotis is one of the few surgeons who can repair your leaky aortic valve.

Aortic Root Replacement: When the valve is not repairable, aneurysm and valve can be replaced with either a tissue valve or a mechanical valve conduit.

Aortic Arch Aneurysms/Descending Thoracic and Thoraco-abdominal Aneurysms: Dr. Loumiotis and his team have unique training and expertise in treating these complex aortic pathologies.

Endovascular Aortic Surgery: Following the most up-to-date guidelines, Dr. Loumiotis performs endovascular Aortic Surgery when appropriate.

Minimally Invasive Aortic Surgery: Specific Aortic pathologies can be surgically treated with minimally invasive incisions.

Aortic Dissections/Emergencies: These are lethal diseases with a dismal outcome unless treated promptly. Dr. Loumiotis, has vast experience treating aortic emergencies.

Ross Procedure: Young patients with a diseased aortic valve may be candidates for a valve replacement with their own pulmonary valve. Dr. Loumiotis performs this unique procedure.`,
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
    contentLayout: "article",
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
        body: `Dr. Loumiotis performs a unique procedure to restore Aortic Valve function - also known as the Aortic Valve Repair.

Think of your aortic valve as a one-way door in your heart that makes sure blood flows out to your body correctly. When it's not working well, it can cause problems. Aortic valve repair is like fixing that door instead of replacing the whole thing. Here are the main benefits in simple terms:

Keeps Your Own Valve: The biggest plus is that you get to keep your original heart valve. This is generally better than a replacement because your own tissue is less likely to cause problems down the road.

Lower Risk of Infection: Artificial valves, whether mechanical or biological, have a higher risk of getting infected. Repairing your own valve avoids this added risk.

No Need for Blood Thinners (Usually): Mechanical heart valves require you to take blood-thinning medication for the rest of your life to prevent clots. With a repaired valve, most people don't need these medications, which can have side effects and require regular monitoring. Biological replacement valves also sometimes require blood thinners, at least for a period.

Better Long-Term Survival: Studies have shown that in many cases, people who have their aortic valve repaired have better long-term survival compared to those who receive a replacement.

Better Heart Function: A properly repaired valve works more like your natural valve, which can lead to better overall heart function and less strain on your heart muscle.

Potentially Fewer Re-operations: While repairs can sometimes need to be redone over time, in some situations, a good repair can last a long time and potentially reduce the need for future surgeries compared to certain types of replacement valves.

More Natural Blood Flow: Your own repaired valve allows for a more natural and gentle flow of blood compared to an artificial valve.`,
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
    contentLayout: "article",
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
        name: "What is the Ross Operation?",
        body: `The Ross Procedure is a specialized form of aortic valve replacement in which a patient's own pulmonary valve is used to replace the diseased aortic valve. The pulmonary valve is then replaced with a donor valve (homograft). It was developed in the late 1960s by Dr. Donald Ross.

This operation is unique because it is the only valve replacement that uses the patient's own living tissue. Unlike mechanical valves, it does not require lifelong anticoagulation, carries a low risk of stroke and infection, and—most importantly—has the potential to grow and adapt with the patient, making it especially valuable for younger patients.`,
      },
      {
        name: "Who is a Good Candidate?",
        body: `Candidacy for the Ross Procedure depends on two main factors:

Patient-specific factors

Younger, active, or athletic patients

Individuals without significant comorbidities

Patients seeking to avoid anticoagulation therapy

Heart-specific factors

Normal heart function

No significant coronary artery disease

No connective tissue disorders (e.g., Marfan syndrome, Loeys-Dietz)

In properly selected patients, the Ross Procedure offers excellent long-term durability and quality of life.`,
      },
      {
        name: "What Are the Cons?",
        body: `While highly beneficial for certain patients, the Ross Procedure does have drawbacks:

Technical complexity – It is one of the most technically demanding operations in cardiac surgery and should only be performed at experienced centers.

Two-valve involvement – Since the pulmonary valve is moved to replace the aortic valve, the procedure affects both the aortic and pulmonary positions.

Reoperation risk – Over time, the pulmonary homograft may degenerate, sometimes requiring reintervention.

Limited availability – Not all centers or surgeons offer the Ross Procedure due to the expertise required.`,
      },
      {
        name: "What Are the Risks?",
        body: `The risks of the Ross Procedure are similar to other major open-heart surgeries, including:

Bleeding

Stroke

Myocardial infarction (heart attack)

Heart block requiring a pacemaker

Death (though rare in experienced hands)

At specialized centers, these risks are significantly reduced, and outcomes are excellent.`,
      },
    ],
  },
];

export function getProcedure(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}
