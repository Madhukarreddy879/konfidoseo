export interface StateHub {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  metaDescription: string;
  heroTagline: string;
  hubCities: string[];
  collegeFilterKey: string;
  entranceExams: string[];
  counsellingBody: string;
  quotaRulesOverview: string;
  admissionSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const stateHubsData: Record<string, StateHub> = {
  "telangana": {
    slug: "telangana",
    name: "Telangana & Hyderabad",
    shortName: "Telangana",
    title: "Top Engineering Colleges in Telangana & Hyderabad 2025: Fees, EAMCET Cutoffs, Management Quota",
    metaDescription: "Find top engineering colleges in Hyderabad & Telangana. Compare 2025 TS EAMCET closing ranks, Category-B management quota fees, and placement reports. Free counselling by Konfido.",
    heroTagline: "Hyderabad is India's premier tech capital, home to top autonomous institutions and private state universities with direct recruitment from Google, Microsoft, Amazon, and Qualcomm.",
    hubCities: ["Hyderabad", "Warangal", "Sangareddy", "Siddipet"],
    collegeFilterKey: "Telangana",
    entranceExams: ["TS EAMCET", "JEE Main", "Category-B Direct Quota"],
    counsellingBody: "Telangana State Council of Higher Education (TSCHE)",
    quotaRulesOverview: "In Telangana engineering colleges, 70% of seats are filled via TS EAMCET convenor quota (Category-A), while 30% seats are reserved under Category-B Management / NRI quota. Direct admission under Category-B is open for students with minimum 45%–50% in 12th PCM without requiring high EAMCET ranks.",
    admissionSteps: [
      {
        title: "TS EAMCET & Profile Assessment",
        desc: "Evaluate your TS EAMCET rank or 10+2 PCM percentage to identify eligible Category-A and Category-B seats across Hyderabad universities."
      },
      {
        title: "Autonomous vs Private Univ Selection",
        desc: "Compare top choices like SNIST, Anurag, Mahindra University, Woxsen, and SR University based on fee budget and preferred branch (CSE/AI)."
      },
      {
        title: "Category-B / Direct Seat Booking",
        desc: "Assistance with official institutional quota forms, transparent fee payment via official university accounts, and fee concession verification."
      },
      {
        title: "Seat Confirmation & Reporting",
        desc: "Get your confirmed provisional seat allotment letter before official counselling rounds conclude."
      }
    ],
    faqs: [
      {
        q: "What is Category-B admission in Telangana engineering colleges?",
        a: "Category-B refers to the 30% management quota seats in private and autonomous engineering colleges in Telangana. These seats are filled directly by college managements on merit basis (10+2 PCM marks or JEE Main/EAMCET rank) without state counselling web options."
      },
      {
        q: "What is the fee structure for B.Tech in Hyderabad top colleges?",
        a: "Convenor quota fees range from ₹85,000 to ₹1,45,000 per year as fixed by TAFRC. Category-B / Management quota fees range from ₹1,50,000 to ₹3,50,000 per year depending on the branch and institution (e.g. SNIST, Anurag, Mahindra, Woxsen)."
      },
      {
        q: "Can non-local or other-state students join engineering colleges in Hyderabad?",
        a: "Yes. Other-state students are eligible for 15% unreserved seats in TS EAMCET counselling, and have 100% eligibility for Category-B management quota seats and private universities like Mahindra, Woxsen, and SR University."
      },
      {
        q: "Which are the best colleges in Hyderabad for B.Tech Computer Science (CSE)?",
        a: "Top institutions include Sreenidhi (SNIST), Anurag University, Mahindra University, Woxsen University, CBIT, and JNTUH affiliated autonomous colleges."
      },
      {
        q: "How does Konfido assist with Telangana engineering admissions?",
        a: "Konfido provides 100% free guidance, helping parents and students navigate Category-B quota applications, cutoff comparisons, transparent fee receipts, and seat locking."
      }
    ]
  },
  "andhra-pradesh": {
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    shortName: "Andhra Pradesh",
    title: "Top Engineering Colleges in Andhra Pradesh 2025: Fees, AP EAPCET Cutoffs, Direct Admission",
    metaDescription: "Explore premier engineering colleges in Andhra Pradesh across Vijayawada, Guntur, Vizag, and Tirupati. Check 2025 AP EAPCET cutoffs, Category-B fees, and placements. Free counselling.",
    heroTagline: "Andhra Pradesh features world-class deemed universities and top-tier autonomous institutions renowned for massive campus placement drives and state-of-the-art research centers.",
    hubCities: ["Vijayawada", "Guntur", "Visakhapatnam", "Tirupati", "Kakinada"],
    collegeFilterKey: "Andhra Pradesh",
    entranceExams: ["AP EAPCET", "KLEEE", "V-SAT", "GAT", "JEE Main", "Category-B"],
    counsellingBody: "Andhra Pradesh State Council of Higher Education (APSCHE)",
    quotaRulesOverview: "Andhra Pradesh engineering colleges offer admissions through AP EAPCET for 70% Category-A seats. The remaining 30% Category-B management quota seats are allotted to eligible students based on 10+2 PCM merit, making it possible to enter top institutions like KL University, Vignan, and VVIT directly.",
    admissionSteps: [
      {
        title: "AP EAPCET & Merit Evaluation",
        desc: "Analyze your entrance score or intermediate board marks to map suitable engineering institutions across coastal Andhra and Rayalaseema."
      },
      {
        title: "Deemed vs State Autonomous Shortlisting",
        desc: "Choose between premier deemed universities (KL University, Vignan, GITAM) and top autonomous colleges (VVIT, Aditya, Mohan Babu University)."
      },
      {
        title: "Category-B & Scholarship Application",
        desc: "Secure direct admission under Category-B management quota and apply for merit-based fee concessions."
      },
      {
        title: "Document Verification & Seat Letter",
        desc: "Complete official verification and receive the university's provisional allotment letter."
      }
    ],
    faqs: [
      {
        q: "What are the top private engineering universities in Andhra Pradesh?",
        a: "Koneru Lakshmaiah Education Foundation (KL University), Vignan's University (VFSTR), GITAM Visakhapatnam, Mohan Babu University (MBU), and Aditya University are among the highest-ranked private institutions in AP."
      },
      {
        q: "How does Category-B management quota work in Andhra Pradesh?",
        a: "Category-B quota comprises 30% of total approved intake. Admissions are conducted directly based on JEE Main ranks or Intermediate (10+2) PCM marks (minimum 50%)."
      },
      {
        q: "What is the average placement package at KL University and Vignan?",
        a: "KL University reports an average package of ₹9.7 LPA with a high of ₹58 LPA. Vignan University reports an average package of ₹6.8 LPA with over 85% placement records."
      },
      {
        q: "What is the annual tuition fee in AP engineering colleges?",
        a: "State autonomous colleges charge between ₹70,000 to ₹1,25,000 per year under convenor quota. Deemed and private universities range from ₹1,80,000 to ₹3,90,000 per annum depending on the branch."
      },
      {
        q: "Does Konfido help with spot round admissions in AP?",
        a: "Yes. Konfido tracks real-time institutional vacancy in spot admissions and Category-B seats across all major AP universities."
      }
    ]
  },
  "karnataka": {
    slug: "karnataka",
    name: "Karnataka & Bengaluru",
    shortName: "Karnataka",
    title: "Top Engineering Colleges in Bengaluru & Karnataka 2025: KCET, COMEDK, Management Quota Fees",
    metaDescription: "Complete guide to top engineering colleges in Bengaluru and Karnataka. Compare 2025 COMEDK / KCET cutoffs, direct management quota seat costs, and placement statistics.",
    heroTagline: "Bengaluru is Asia's Silicon Valley. Studying engineering in Bengaluru gives students unprecedented access to multinational tech headquarters, high-paying product startups, and ₹50+ LPA placement opportunities.",
    hubCities: ["Bengaluru", "Hubballi", "Mysuru", "Mangaluru"],
    collegeFilterKey: "Karnataka",
    entranceExams: ["KCET", "COMEDK UGET", "PESSAT", "Uni-GAUGE", "Management Quota"],
    counsellingBody: "Karnataka Examinations Authority (KEA) & COMEDK",
    quotaRulesOverview: "Karnataka engineering institutions divide seats among KCET (for Karnataka candidates, 45%), COMEDK (All India merit, 30%), and Management Quota (25%). Management quota in premier colleges like MSRIT, PES, RV, and Jain allows students from any state to secure CSE/AI seats directly based on 12th PCM marks.",
    admissionSteps: [
      {
        title: "Rank & Budget Mapping",
        desc: "Match your COMEDK/KCET ranks or direct admission budget against Bengaluru's top institutions."
      },
      {
        title: "College & Quota Selection",
        desc: "Compare tier-1 engineering institutions: MS Ramaiah (MSRIT), PES University, RV University, Jain University, Presidency, and REVA."
      },
      {
        title: "Direct Quota Application & Seat Locking",
        desc: "Navigate the official institutional management quota process with transparent fee receipts and no third-party hidden charges."
      },
      {
        title: "Campus Joining & Hostel Assistance",
        desc: "Receive your official admission order and secure hostel accommodation in Bengaluru."
      }
    ],
    faqs: [
      {
        q: "Can non-Karnataka students get admission in Bengaluru engineering colleges?",
        a: "Yes! Students from any Indian state can apply through COMEDK UGET (All India quota) or through direct Management Quota in institutions like Ramaiah, PES, RV, Jain, and Presidency University."
      },
      {
        q: "What is the management quota fee for CSE in Bengaluru colleges?",
        a: "Management quota fees vary by institution tier. Top-tier colleges range from ₹3.5L to ₹6.5L per year for CSE and allied specializations like AI/ML and Data Science."
      },
      {
        q: "Why are Bengaluru engineering colleges preferred for IT placements?",
        a: "Over 80% of Fortune 500 tech companies have R&D centers in Bengaluru. Students get direct internship access and high-paying campus placements averaging ₹8 LPA to ₹12 LPA."
      },
      {
        q: "What is the difference between KCET and COMEDK?",
        a: "KCET is strictly for Karnataka domicile candidates with government-subsidized fees. COMEDK is an all-India entrance examination open to students from all states for private engineering colleges in Karnataka."
      },
      {
        q: "How does Konfido assist with Bengaluru engineering admissions?",
        a: "Konfido specializes in direct quota seat booking, fee negotiation transparency, and branch availability tracking across Bengaluru's top 10 colleges."
      }
    ]
  },
  "tamil-nadu": {
    slug: "tamil-nadu",
    name: "Tamil Nadu & Chennai",
    shortName: "Tamil Nadu",
    title: "Top Engineering Colleges in Tamil Nadu & Chennai 2025: Fees, VIT, SRM, Amrita Direct Admission",
    metaDescription: "Compare premier engineering universities in Chennai and Tamil Nadu. Check 2025 fees, cutoffs, placements, and direct admission routes for VIT Vellore, SRM, Amrita, Sathyabama, and Saveetha.",
    heroTagline: "Tamil Nadu is home to India's most prestigious deemed universities, recognized globally for modern infrastructure, international semester exchange, and unmatched placement records.",
    hubCities: ["Chennai", "Vellore", "Coimbatore", "Tirunelveli"],
    collegeFilterKey: "Tamil Nadu",
    entranceExams: ["VITEEE", "SRMJEEE", "AEEE", "TNEA", "Direct Quota"],
    counsellingBody: "Directorate of Technical Education (DoTE) & Individual Deemed Universities",
    quotaRulesOverview: "Private Deemed Universities in Tamil Nadu (VIT, SRM, Amrita, Sathyabama, Vel Tech, Saveetha) conduct their own national entrance tests and offer direct institutional quota seats for students seeking admission based on Class 12 board marks.",
    admissionSteps: [
      {
        title: "University & Exam Analysis",
        desc: "Evaluate your VITEEE, SRMJEEE, or 12th board percentage to map target branches across Tamil Nadu."
      },
      {
        title: "Campus Preference Selection",
        desc: "Choose between premier campuses like VIT (Vellore/Chennai), SRM Kattankulathur, Amrita Coimbatore, and Sathyabama."
      },
      {
        title: "Direct Quota & Category Fee Mapping",
        desc: "Navigate fee category structures (Category 1 to Category 5 in VIT) and management quota seat allocation."
      },
      {
        title: "Provisional Allotment & Onboarding",
        desc: "Complete document verification and secure confirmed provisional admission letter."
      }
    ],
    faqs: [
      {
        q: "What are the top deemed engineering universities in Tamil Nadu?",
        a: "Vellore Institute of Technology (VIT), SRM Institute of Science and Technology, Amrita Vishwa Vidyapeetham, Sathyabama Institute, and Saveetha University are consistently ranked in India's top 50 by NIRF."
      },
      {
        q: "Can I get direct admission in VIT or SRM without entrance exams?",
        a: "While entrance exams (VITEEE / SRMJEEE) are primary, both universities have institutional management quota and higher category fee slabs (Category 3/4/5) where students can secure seats based on 12th board PCM merit."
      },
      {
        q: "What is the fee structure for B.Tech in VIT Vellore?",
        a: "VIT has a tiered category system. Category 1 tuition fee starts around ₹1.98 Lakh per year, scaling up to ₹4.93 Lakh per year for Category 5 for B.Tech CSE. Hostel fees range from ₹1.1L to ₹1.8L."
      },
      {
        q: "What is the placement record of SRM Kattankulathur and VIT?",
        a: "Both universities place over 90% of eligible students annually, with highest packages crossing ₹1 Crore per annum and over 900+ companies visiting campus."
      },
      {
        q: "How does Konfido assist with Tamil Nadu college admissions?",
        a: "Konfido helps students choose the right campus, calculate category fee trade-offs, and secure verified direct seats in VIT, SRM, Sathyabama, and other top Chennai institutions."
      }
    ]
  },
  "north-west-india": {
    slug: "north-west-india",
    name: "North & West India Mega-Campuses",
    shortName: "North & West India",
    title: "Top Engineering Universities in North & West India 2025: Bennett, Chandigarh Univ, LPU, Chitkara",
    metaDescription: "Explore top national private universities across Punjab, Delhi-NCR, Rajasthan, and Gujarat. Compare fees, JEE Main cutoffs, scholarships, and mega campus placement records.",
    heroTagline: "Mega-campuses like Bennett University, Chandigarh University, Chitkara, and LPU offer sprawling 200+ acre infrastructures, cutting-edge AI laboratories, and global corporate placement drives.",
    hubCities: ["Delhi-NCR / Greater Noida", "Mohali / Chandigarh", "Phagwara / Jalandhar", "Jaipur", "Ahmedabad / Rajkot"],
    collegeFilterKey: "North/West",
    entranceExams: ["JEE Main", "CUCET", "LPUNEST", "GUJCET", "Direct 12th Merit"],
    counsellingBody: "Direct University Directorate & State Admission Committees",
    quotaRulesOverview: "Most premier private universities in North and West India offer direct admission based on 10+2 board merit or JEE Main scores, accompanied by generous merit scholarships (up to 50%–100% tuition waiver for high scorers).",
    admissionSteps: [
      {
        title: "Merit & Scholarship Evaluation",
        desc: "Evaluate 12th board percentages and JEE Main percentiles to qualify for maximum tuition fee scholarship slabs."
      },
      {
        title: "Institution Shortlisting",
        desc: "Compare top choices: Bennett University (Times Group), Chandigarh University, Chitkara, LPU, Graphic Era, and GD Goenka."
      },
      {
        title: "Direct Application & Scholarship Lock",
        desc: "Apply directly through our authorized institutional desk to lock your scholarship and preferred branch."
      },
      {
        title: "Offer Letter & Hostel Allotment",
        desc: "Receive formal university offer letter, pay official fees, and reserve air-conditioned hostel rooms."
      }
    ],
    faqs: [
      {
        q: "What makes Bennett University (Greater Noida) a top choice for B.Tech?",
        a: "Bennett University is founded by The Times of India Group with academic collaboration with Georgia Tech. It offers an average package of ₹11.1 LPA and a highest offer of ₹1.2 Crore per annum, located right in the Delhi-NCR corporate corridor."
      },
      {
        q: "How does Chandigarh University (CU) achieve high placement volumes?",
        a: "Chandigarh University is NIRF #38 and hosts over 900+ companies annually (including Google, Microsoft, and Amazon). Over 9,000+ placement offers are generated each season."
      },
      {
        q: "Are scholarships available in North Indian private universities?",
        a: "Yes! Universities like LPU, Chandigarh University, and Chitkara offer up to 100% scholarship based on 12th board marks, JEE Main percentile, or their internal entrance exams."
      },
      {
        q: "Can students from South India adapt to North Indian university campuses?",
        a: "Yes. Major universities like Bennett, CU, Chitkara, and LPU have dedicated South Indian food mess facilities, thousands of students from Telangana, AP, Karnataka, and Tamil Nadu, and 24/7 guarded residential campuses."
      },
      {
        q: "How does Konfido help with national university admissions?",
        a: "Konfido assists South Indian students with end-to-end admission guidance, scholarship maximization, travel coordination, and hostel booking."
      }
    ]
  }
};
