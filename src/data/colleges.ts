export interface CollegeFAQ {
  q: string;
  a: string;
}

export interface DetailedFeeMatrix {
  tuitionConvenor: string;
  tuitionManagement: string;
  tuitionNRI?: string;
  admissionFee: string;
  hostelAC: string;
  hostelNonAC: string;
  cautionDeposit: string;
  transportFee?: string;
  tafrcNote?: string;
}

export interface CutoffEntry {
  branch: string;
  rank2024: number | string;
  rank2023: number | string;
  category: string;
}

export interface DetailedPlacement {
  avgCTC: string;
  medianCTC: string;
  highestDomesticCTC: string;
  highestInternationalCTC?: string;
  placementPercentage: string;
  totalOffers?: string;
  topRecruiters: string[];
}

export interface SeatMatrixEntry {
  branch: string;
  totalSeats: number;
  catASeats: number;
  catBSeats: number;
}

export interface DirectAdmissionStep {
  step: string;
  title: string;
  desc: string;
}

export interface ComparisonPeer {
  name: string;
  slug: string;
  tagline: string;
  feeComparison: string;
  cutoffComparison: string;
  verdict: string;
}

export interface College {
  id: number;
  inputName: string;
  name: string;
  slug: string;
  website: string;
  city: string;
  state: string;
  region: 'South India' | 'North India' | 'West India' | 'Central India';
  nirfRank?: number;
  naacGrade?: string;
  type: string;
  established?: number;
  avgPackage: string;
  highestPackage: string;
  annualFee: string;
  exams: string[];
  popularCourses: string[];
  featured?: boolean;
  highlight: string;
  overview: string;

  // Rich SEO & Deep Content Additions:
  metaTitle?: string;
  metaDescription?: string;
  targetKeywords?: string[];
  detailedOverview?: string[];
  seatMatrix?: SeatMatrixEntry[];
  detailedFees?: DetailedFeeMatrix;
  cutoffHistory?: CutoffEntry[];
  detailedPlacements?: DetailedPlacement;
  directAdmissionSteps?: DirectAdmissionStep[];
  comparisonPeer?: ComparisonPeer;
  customFaqs?: CollegeFAQ[];
  contentStatus?: 'live_basic' | 'in_depth_draft' | 'verified_live';
}

export const collegesData: College[] = [
  {
    id: 1,
    inputName: "vit(AP Vellore Chennai)",
    name: "Vellore Institute of Technology (VIT)",
    slug: "vit-vellore",
    website: "https://vit.ac.in",
    city: "Vellore / Chennai / Amaravati",
    state: "Tamil Nadu & AP",
    region: "South India",
    nirfRank: 11,
    naacGrade: "A++",
    type: "Deemed University",
    established: 1984,
    avgPackage: "9.2 LPA",
    highestPackage: "1.02 CPA",
    annualFee: "₹1,98,000 - ₹4,90,000",
    exams: ["VITEEE", "Direct / Mgmt Quota"],
    popularCourses: ["B.Tech CSE", "CSE (AI & ML)", "Data Science", "ECE", "IT"],
    featured: true,
    highlight: "NIRF #11 • Highest 1.02 CPA • 900+ Recruiters",
    overview: "VIT is recognized among India's premier private institutions with campuses in Vellore, Chennai, AP, and Bhopal. Known for world-class infrastructure and stellar placement track records."
  },
  {
    id: 2,
    inputName: "SRM",
    name: "SRM Institute of Science and Technology",
    slug: "srm-university",
    website: "https://www.srmist.edu.in",
    city: "Kattankulathur, Chennai",
    state: "Tamil Nadu",
    region: "South India",
    nirfRank: 18,
    naacGrade: "A++",
    type: "Deemed University",
    established: 1985,
    avgPackage: "8.5 LPA",
    highestPackage: "1.1 CPA",
    annualFee: "₹2,50,000 - ₹4,50,000",
    exams: ["SRMJEEE", "Direct Admission"],
    popularCourses: ["B.Tech CSE", "Cyber Security", "Cloud Computing", "Biotech"],
    featured: true,
    highlight: "NIRF #18 • Over 1,200 Companies Visited",
    overview: "SRM IST Kattankulathur campus spans over 250 acres with cutting-edge laboratories, top industry collaborations, and unmatched campus life."
  },
  {
    id: 3,
    inputName: "Amrutha",
    name: "Amrita Vishwa Vidyapeetham",
    slug: "amrita-vishwa-vidyapeetham",
    website: "https://www.amrita.edu",
    city: "Coimbatore / Bengaluru",
    state: "Tamil Nadu & Karnataka",
    region: "South India",
    nirfRank: 7,
    naacGrade: "A++",
    type: "Deemed University",
    established: 1994,
    avgPackage: "9.5 LPA",
    highestPackage: "75 LPA",
    annualFee: "₹2,20,000 - ₹3,80,000",
    exams: ["AEEE", "JEE Main"],
    popularCourses: ["B.Tech CSE", "AI & Data Science", "ECE", "Robotics"],
    featured: true,
    highlight: "NIRF #7 Overall • NAAC A++ • Multi-Campus",
    overview: "Amrita is ranked among top research universities in India with exceptional academic standards, ethical values, and global university exchange programs."
  },
  {
    id: 4,
    inputName: "MS ramaiah",
    name: "Ramaiah Institute of Technology (MSRIT)",
    slug: "ramaiah-institute-of-technology",
    website: "https://www.msrit.edu",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South India",
    nirfRank: 67,
    naacGrade: "A+",
    type: "Autonomous / VTU",
    established: 1962,
    avgPackage: "8.8 LPA",
    highestPackage: "53 LPA",
    annualFee: "₹2,80,000 - ₹5,50,000",
    exams: ["KCET", "COMEDK", "Management Quota"],
    popularCourses: ["B.Tech CSE", "Information Science", "AI & ML", "ECE"],
    featured: true,
    highlight: "Bengaluru Tech Hub • 95% Placements • Legacy 1962",
    overview: "MSRIT is one of Bengaluru's most sought-after engineering institutions, located right in the city center with top tier-1 tech recruiters."
  },
  {
    id: 5,
    inputName: "PES university",
    name: "PES University",
    slug: "pes-university",
    website: "https://pes.edu",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South India",
    nirfRank: 84,
    naacGrade: "A",
    type: "Private State University",
    established: 1988,
    avgPackage: "11.2 LPA",
    highestPackage: "65 LPA",
    annualFee: "₹4,10,000 - ₹5,00,000",
    exams: ["PESSAT", "KCET", "JEE Main", "Mgmt Quota"],
    popularCourses: ["B.Tech CSE", "CSE (AI & ML)", "ECE", "Biotechnology"],
    featured: true,
    highlight: "Highest Avg CTC in South Private Univs • Tier-1 Placements",
    overview: "PES University is known for its rigorous curriculum, high coding culture, and direct campus recruitments by Apple, Microsoft, Amazon, and Morgan Stanley."
  },
  {
    id: 6,
    inputName: "jain University",
    name: "Jain (Deemed-to-be University)",
    slug: "jain-university",
    website: "https://www.jainuniversity.ac.in",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South India",
    nirfRank: 68,
    naacGrade: "A++",
    type: "Deemed-to-be University",
    established: 1990,
    avgPackage: "7.2 LPA",
    highestPackage: "42 LPA",
    annualFee: "₹2,40,000 - ₹3,80,000",
    exams: ["JET", "Uni-GAUGE", "Direct Admission"],
    popularCourses: ["B.Tech CSE", "Cloud Tech & Mobile Apps", "Data Science", "Aero"],
    featured: false,
    highlight: "NAAC A++ • Center for Management & Engineering",
    overview: "Jain University fosters innovation, entrepreneurship, and modern skill-aligned technology curriculums with strong corporate links."
  },
  {
    id: 7,
    inputName: "RV University",
    name: "RV University / RV College of Engineering",
    slug: "rv-university-bengaluru",
    website: "https://rvu.edu.in",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South India",
    nirfRank: 89,
    naacGrade: "A+",
    type: "State Private University",
    established: 2021,
    avgPackage: "10.5 LPA",
    highestPackage: "62 LPA",
    annualFee: "₹4,00,000 - ₹6,00,000",
    exams: ["RVEI", "KCET", "COMEDK", "Management Quota"],
    popularCourses: ["B.Tech CSE", "Data Science", "AI & ML", "Cybersecurity"],
    featured: true,
    highlight: "Prestigious RV Educational Group • Premier Tech Placements",
    overview: "Backed by the iconic Rashtreeya Sikshana Samithi Trust (RV), offering futuristic research-led multidisciplinary technology programs."
  },
  {
    id: 8,
    inputName: "Presidency University",
    name: "Presidency University",
    slug: "presidency-university-bengaluru",
    website: "https://presidencyuniversity.in",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South India",
    naacGrade: "A+",
    type: "Private University",
    established: 2013,
    avgPackage: "6.5 LPA",
    highestPackage: "38 LPA",
    annualFee: "₹2,20,000 - ₹3,20,000",
    exams: ["KCET", "COMEDK", "Presidency Entry Test"],
    popularCourses: ["B.Tech CSE", "AI & ML", "BlockChain", "ECE"],
    featured: false,
    highlight: "Vibrant 65-Acre Campus • Industry Centric Labs",
    overview: "Offers top-tier infrastructure, design thinking integration, and active industry-partnered internships across leading Bengaluru tech parks."
  },
  {
    id: 9,
    inputName: "Satyabhama",
    name: "Sathyabama Institute of Science and Technology",
    slug: "sathyabama-institute",
    website: "https://www.sathyabama.ac.in",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South India",
    nirfRank: 51,
    naacGrade: "A++",
    type: "Deemed to be University",
    established: 1987,
    avgPackage: "6.8 LPA",
    highestPackage: "53 LPA",
    annualFee: "₹1,80,000 - ₹3,10,000",
    exams: ["SAEEE", "Direct Quota"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Biotechnology", "Aeronautical"],
    featured: false,
    highlight: "NIRF Top 55 • Excellent Placement Record in TN",
    overview: "Sathyabama is renowned for defense and aerospace research, student satellite projects, and comprehensive IT campus placements."
  },
  {
    id: 10,
    inputName: "VEL Tech",
    name: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute",
    slug: "vel-tech-university",
    website: "https://www.veltech.edu.in",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South India",
    nirfRank: 87,
    naacGrade: "A++",
    type: "Deemed to be University",
    established: 1997,
    avgPackage: "6.2 LPA",
    highestPackage: "44 LPA",
    annualFee: "₹1,60,000 - ₹2,80,000",
    exams: ["VTUEEE", "Direct Admission"],
    popularCourses: ["B.Tech CSE", "Data Analytics", "Mech & Auto", "ECE"],
    featured: false,
    highlight: "Pioneer in CDIO Education • Global Semester Abroad",
    overview: "Vel Tech collaborates with leading global universities and Fortune 500 corporations for live industrial projects and technical research."
  },
  {
    id: 11,
    inputName: "Ganapath",
    name: "Ganpat University",
    slug: "ganpat-university",
    website: "https://www.ganpatuniversity.ac.in",
    city: "Mehsana",
    state: "Gujarat",
    region: "West India",
    naacGrade: "A",
    type: "Private University",
    established: 2005,
    avgPackage: "5.5 LPA",
    highestPackage: "25 LPA",
    annualFee: "₹1,30,000 - ₹2,10,000",
    exams: ["GUJCET", "JEE Main", "Direct Admission"],
    popularCourses: ["B.Tech CSE", "Cloud Computing", "Marine Engg", "IT"],
    featured: false,
    highlight: "Industry-Designed Curriculums • IBM & Apple Authorized",
    overview: "Located in Gujarat with a massive 300-acre township campus, Ganpat University provides hands-on practical engineering education."
  },
  {
    id: 12,
    inputName: "Marwadi",
    name: "Marwadi University",
    slug: "marwadi-university",
    website: "https://www.marwadiuniversity.ac.in",
    city: "Rajkot",
    state: "Gujarat",
    region: "West India",
    naacGrade: "A+",
    type: "Private University",
    established: 2016,
    avgPackage: "5.8 LPA",
    highestPackage: "34 LPA",
    annualFee: "₹1,25,000 - ₹2,00,000",
    exams: ["GUJCET", "JEE Main", "Direct Entry"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Cyber Security", "Civil"],
    featured: false,
    highlight: "NAAC A+ Certified • 50+ Countries International Students",
    overview: "Marwadi University has state-of-the-art innovation incubators and corporate linkages across industrial belts of Gujarat."
  },
  {
    id: 13,
    inputName: "Sandip University",
    name: "Sandip University",
    slug: "sandip-university",
    website: "https://www.sandipuniversity.edu.in",
    city: "Nashik",
    state: "Maharashtra",
    region: "West India",
    naacGrade: "A",
    type: "Private University",
    established: 2015,
    avgPackage: "5.2 LPA",
    highestPackage: "28 LPA",
    annualFee: "₹1,40,000 - ₹2,40,000",
    exams: ["MHT-CET", "JEE Main", "SU-JEE"],
    popularCourses: ["B.Tech CSE", "Aerospace Engg", "Robotics", "ECE"],
    featured: false,
    highlight: "Scenic 250+ Acre Nashik Campus • 100% Placement Cell",
    overview: "A premier private university in Maharashtra focused on experiential learning, tech workshops, and student entrepreneurship."
  },
  {
    id: 14,
    inputName: "GD Goenka",
    name: "GD Goenka University",
    slug: "gd-goenka-university",
    website: "https://www.gdgoenkauniversity.com",
    city: "Gurugram / NCR",
    state: "Haryana",
    region: "North India",
    naacGrade: "A+",
    type: "Private University",
    established: 2013,
    avgPackage: "6.8 LPA",
    highestPackage: "40 LPA",
    annualFee: "₹2,20,000 - ₹3,50,000",
    exams: ["GATA", "JEE Main", "Direct Admission"],
    popularCourses: ["B.Tech CSE", "Data Science", "Cyber Security", "Robotics"],
    featured: false,
    highlight: "Delhi NCR Corporate Hub • Luxury Campus Facilities",
    overview: "Located close to Gurugram's multinational tech corridor, ensuring excellent internship and corporate recruitment access."
  },
  {
    id: 15,
    inputName: "Graphic era",
    name: "Graphic Era (Deemed to be University)",
    slug: "graphic-era-university",
    website: "https://geu.ac.in",
    city: "Dehradun",
    state: "Uttarakhand",
    region: "North India",
    nirfRank: 55,
    naacGrade: "A+",
    type: "Deemed to be University",
    established: 1993,
    avgPackage: "7.8 LPA",
    highestPackage: "54.03 LPA",
    annualFee: "₹2,50,000 - ₹3,80,000",
    exams: ["JEE Main", "12th Merit Direct"],
    popularCourses: ["B.Tech CSE", "AI & Data Science", "ECE", "Mechanical"],
    featured: false,
    highlight: "NIRF Top 60 • Top Placements in North India",
    overview: "Graphic Era has earned immense repute for consistent high placements with global giants like Adobe, Amazon, Google, and Samsung."
  },
  {
    id: 16,
    inputName: "RK University",
    name: "RK University",
    slug: "rk-university",
    website: "https://rku.ac.in",
    city: "Rajkot",
    state: "Gujarat",
    region: "West India",
    naacGrade: "A",
    type: "Private University",
    established: 2011,
    avgPackage: "4.8 LPA",
    highestPackage: "20 LPA",
    annualFee: "₹1,10,000 - ₹1,80,000",
    exams: ["GUJCET", "JEE Main"],
    popularCourses: ["B.Tech CSE", "Information Tech", "Civil", "Mechanical"],
    featured: false,
    highlight: "Affordable High-Quality Engineering in Gujarat",
    overview: "A student-centric university known for project-based learning, practical industry exposure, and disciplined academics."
  },
  {
    id: 17,
    inputName: "KLE",
    name: "KLE Technological University",
    slug: "kle-technological-university",
    website: "https://www.kletech.ac.in",
    city: "Hubballi",
    state: "Karnataka",
    region: "South India",
    nirfRank: 93,
    naacGrade: "A",
    type: "Private State University",
    established: 1947,
    avgPackage: "7.5 LPA",
    highestPackage: "43 LPA",
    annualFee: "₹2,00,000 - ₹3,50,000",
    exams: ["KCET", "COMEDK", "Management Quota"],
    popularCourses: ["B.Tech CSE", "AI", "Robotics & Automation", "ECE"],
    featured: false,
    highlight: "Historic 75-Yr Legacy • Outstanding Core & IT Placements",
    overview: "Formerly BVBCET Hubli, KLE Tech is celebrated for its Centre for Technology Innovation & Entrepreneurship (CTIE) and strong alumni base."
  },
  {
    id: 18,
    inputName: "Vignanan",
    name: "Vignan's Foundation for Science, Technology & Research",
    slug: "vignan-university",
    website: "https://vignan.ac.in",
    city: "Guntur / Vijayawada",
    state: "Andhra Pradesh",
    region: "South India",
    nirfRank: 75,
    naacGrade: "A+",
    type: "Deemed to be University",
    established: 2008,
    avgPackage: "6.8 LPA",
    highestPackage: "44 LPA",
    annualFee: "₹1,80,000 - ₹2,90,000",
    exams: ["V-SAT", "AP EAPCET", "JEE Main", "Mgmt Quota"],
    popularCourses: ["B.Tech CSE", "CSE (AI & ML)", "Cyber Security", "ECE"],
    featured: true,
    highlight: "Top Rated in Andhra Pradesh • NAAC A+ • 85%+ Placement",
    overview: "Vignan University is one of Coastal Andhra's most respected educational centers, with immense placement tie-ups and research centers."
  },
  {
    id: 19,
    inputName: "Joy University",
    name: "Joy University",
    slug: "joy-university",
    website: "https://joyuniversity.edu.in",
    city: "Tirunelveli",
    state: "Tamil Nadu",
    region: "South India",
    type: "Private University",
    established: 2022,
    avgPackage: "5.0 LPA",
    highestPackage: "18 LPA",
    annualFee: "₹1,50,000 - ₹2,40,000",
    exams: ["JOYAT", "Direct Admission"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Robotics", "Agricultural Engg"],
    featured: false,
    highlight: "Modern Infrastructure • Futuristic Disciplines",
    overview: "Focuses on emerging technologies, design thinking, and sustainable engineering in South Tamil Nadu."
  },
  {
    id: 20,
    inputName: "PP Savanna",
    name: "P. P. Savani University",
    slug: "pp-savani-university",
    website: "https://www.ppsu.ac.in",
    city: "Surat",
    state: "Gujarat",
    region: "West India",
    type: "Private University",
    established: 2017,
    avgPackage: "5.2 LPA",
    highestPackage: "24 LPA",
    annualFee: "₹1,30,000 - ₹2,10,000",
    exams: ["GUJCET", "JEE Main"],
    popularCourses: ["B.Tech CSE", "Information Tech", "Chemical Engg"],
    featured: false,
    highlight: "Surat Industrial Corridor • Modern 100-Acre Campus",
    overview: "P.P. Savani University integrates industry internships with skill training programs for maximum employability."
  },
  {
    id: 21,
    inputName: "Reva Unviersity",
    name: "REVA University",
    slug: "reva-university",
    website: "https://www.reva.edu.in",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South India",
    naacGrade: "A+",
    type: "State Private University",
    established: 2012,
    avgPackage: "7.4 LPA",
    highestPackage: "50 LPA",
    annualFee: "₹2,50,000 - ₹4,20,000",
    exams: ["REVA CET", "KCET", "COMEDK", "Mgmt Quota"],
    popularCourses: ["B.Tech CSE", "AI & Data Science", "Robotics", "ECE"],
    featured: true,
    highlight: "North Bengaluru IT Belt • 45-Acre Sprawling Green Campus",
    overview: "REVA is among Karnataka's fastest-growing private universities with cutting-edge incubation centers and global partnerships."
  },
  {
    id: 22,
    inputName: "Uttaranchal university",
    name: "Uttaranchal University",
    slug: "uttaranchal-university",
    website: "https://uttaranchaluniversity.ac.in",
    city: "Dehradun",
    state: "Uttarakhand",
    region: "North India",
    naacGrade: "A+",
    type: "Private University",
    established: 2013,
    avgPackage: "6.2 LPA",
    highestPackage: "1.24 CPA",
    annualFee: "₹1,80,000 - ₹2,80,000",
    exams: ["UET", "JEE Main", "Merit Direct"],
    popularCourses: ["B.Tech CSE", "Cloud & Cyber", "AI & Machine Learning"],
    featured: false,
    highlight: "NAAC A+ Accredited • 1.24 CPA International Placement",
    overview: "Set in Dehradun with modern computing facilities, corporate mentor networks, and comprehensive personality grooming."
  },
  {
    id: 23,
    inputName: "Sage university",
    name: "SAGE University",
    slug: "sage-university",
    website: "https://sageuniversity.edu.in",
    city: "Indore / Bhopal",
    state: "Madhya Pradesh",
    region: "Central India",
    type: "Private University",
    established: 2017,
    avgPackage: "5.4 LPA",
    highestPackage: "30 LPA",
    annualFee: "₹1,20,000 - ₹2,00,000",
    exams: ["SEE", "JEE Main"],
    popularCourses: ["B.Tech CSE", "Data Analytics", "AI", "Cloud Computing"],
    featured: false,
    highlight: "Largest Tech University in MP • Apple Authorized Training",
    overview: "SAGE University delivers industry-certified technical education in Indore and Bhopal with top corporate tie-ups."
  },
  {
    id: 24,
    inputName: "Sanjay godavath",
    name: "Sanjay Ghodawat University",
    slug: "sanjay-ghodawat-university",
    website: "https://www.sanjayghodawatuniversity.ac.in",
    city: "Kolhapur",
    state: "Maharashtra",
    region: "West India",
    naacGrade: "A",
    type: "Private University",
    established: 2017,
    avgPackage: "5.5 LPA",
    highestPackage: "26 LPA",
    annualFee: "₹1,35,000 - ₹2,20,000",
    exams: ["MHT-CET", "JEE Main", "SGU CET"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Aeronautical", "Mechanical"],
    featured: false,
    highlight: "Western Maharashtra's Leading Tech Campus • NAAC A",
    overview: "Promoted by the diversified Ghodawat Group, focusing on hands-on industrial labs and job-ready technical skills."
  },
  {
    id: 25,
    inputName: "VViT",
    name: "Vasireddy Venkatadri Institute of Technology (VVIT)",
    slug: "vvit-guntur",
    website: "https://www.vvitguntur.com",
    city: "Guntur",
    state: "Andhra Pradesh",
    region: "South India",
    naacGrade: "A",
    type: "Autonomous / JNTUK",
    established: 2007,
    avgPackage: "5.8 LPA",
    highestPackage: "32 LPA",
    annualFee: "₹95,000 - ₹1,80,000",
    exams: ["AP EAPCET", "Category B Management Quota"],
    popularCourses: ["B.Tech CSE", "AI & Data Science", "ECE", "IT"],
    featured: false,
    highlight: "Autonomous • Top Choice in AP EAPCET Counselling",
    overview: "One of Andhra Pradesh's most respected engineering colleges with strong discipline, high pass percentages, and steady campus drives."
  },
  {
    id: 26,
    inputName: "Aditya University",
    name: "Aditya University / Aditya Engineering College",
    slug: "aditya-university-surampalem",
    website: "https://adityauniversity.in",
    city: "Surampalem / Kakinada",
    state: "Andhra Pradesh",
    region: "South India",
    nirfRank: 120,
    naacGrade: "A++",
    type: "Private University / Autonomous",
    established: 2001,
    avgPackage: "6.2 LPA",
    highestPackage: "33.8 LPA",
    annualFee: "₹1,10,000 - ₹2,10,000",
    exams: ["AP EAPCET", "Aditya Common Entrance", "Mgmt Quota"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Data Science", "Petroleum Engg"],
    featured: false,
    highlight: "NAAC A++ • 3,000+ Placements Every Year • 180-Acre Campus",
    overview: "Aditya is famous for its intensive campus placement training (T-Hub) and high-volume recruitments across IT and core sectors."
  },
  {
    id: 27,
    inputName: "Kaveri",
    name: "Kaveri University",
    slug: "kaveri-university",
    website: "https://kaveriuniversity.edu.in",
    city: "Siddipet / Hyderabad",
    state: "Telangana",
    region: "South India",
    type: "State Private University",
    established: 2023,
    avgPackage: "5.2 LPA",
    highestPackage: "20 LPA",
    annualFee: "₹1,20,000 - ₹2,50,000",
    exams: ["TG EAPCET", "JEE Main", "KaET (Scholarship Test)", "Direct Merit"],
    popularCourses: ["B.Tech CSE Core", "CSE (AI & Machine Learning)", "CSE (Data Science)", "CSE (Cyber Security)", "CSE (IoT)", "ECE"],
    featured: true,
    highlight: "100-Acre Smart Campus • Near Hyderabad ORR • Up to 75% Merit Scholarships",
    overview: "Kaveri University is an emerging premier private state university established under the Telangana State Private Universities Act, situated across a picturesque 100-acre smart campus in Gowraram, Wargal Mandal, Siddipet district, just 40 minutes from Hyderabad's northern tech corridor along the Rajiv Rahadari highway. Founded by the esteemed Kaveri Educational Society and backed by the corporate heritage of the Kaveri Group, the university is recognized for forward-looking curricula in Computer Science, Artificial Intelligence, and Smart Tech, offering generous merit scholarships and world-class residential infrastructure.",
    metaTitle: "Kaveri University Hyderabad Siddipet Admissions 2025: Fees, Management Quota, Cutoffs & Placements | Konfido",
    metaDescription: "Explore Kaveri University (Siddipet/Hyderabad) B.Tech admissions 2025. Verified fee matrix (₹1.20L convenor to ₹2.50L direct quota), TG EAPCET cutoffs, 100-acre campus, scholarship waivers, and placement report.",
    targetKeywords: [
      "Kaveri University management quota fees 2025",
      "Kaveri University direct admission B.Tech CSE",
      "Kaveri University Siddipet Hyderabad fee structure",
      "Kaveri University TG EAPCET cutoff closing ranks",
      "Kaveri University Gowraram campus reviews and placements",
      "Kaveri University scholarship test KaET"
    ],
    detailedOverview: [
      "Kaveri University was established under the landmark Telangana State Private Universities (Establishment and Regulation) Amendment Act, 2023, enacted by the Government of Telangana to foster globally competitive private higher education institutions within the state. Sponsored by the renowned Kaveri Educational Society and spearheaded by visionary industrialist Sri G.V. Bhaskar Rao (Founder & CMD of Kaveri Seed Company, one of India's foremost agri-tech enterprises), the university bridges academic pedagogy with corporate-scale research, industry-readiness, and technological innovation.",
      "The School of Engineering and Technology at Kaveri University delivers futuristic, credit-flexible B.Tech degree programs tailored to the demands of Industry 4.0. Curricula are co-designed with technology industry leaders, incorporating deep concentrations in machine learning, generative intelligence, full-stack cloud architecture, data engineering, and embedded cybersecurity. Experiential learning is fortified through modern high-performance computing clusters, collaborative prototyping studios, and specialized software development incubators.",
      "Spanning over 100 acres along the Hyderabad-Karimnagar Rajiv Rahadari (State Highway 1) in Gowraram, Wargal Mandal, the university offers an eco-friendly, fully integrated residential campus. Located merely 40 minutes from the Hyderabad Outer Ring Road (ORR) Shamirpet junction, the campus combines serene, distraction-free natural surroundings with rapid urban accessibility. Campus infrastructure encompasses acoustically optimized amphitheater classrooms, advanced computing centers, comprehensive sports complexes, high-speed fiber-optic Wi-Fi, and separate secure residential hostels.",
      "Kaveri University's Career Development Cell (CDC) actively engages corporate networks across Hyderabad's HITEC City, Financial District, and Pocharam tech zones. Students benefit from mandatory industry internships, hackathons, and corporate mentorship from their second year of study. Backed by corporate enterprise networks, early placement drives have connected graduates with leading IT conglomerates including TCS, Cognizant, Infosys, Tech Mahindra, and specialized tech startups offering competitive compensation packages."
    ],
    seatMatrix: [
      { branch: "B.Tech Computer Science & Engineering (CSE Core)", totalSeats: 240, catASeats: 168, catBSeats: 72 },
      { branch: "B.Tech CSE (Artificial Intelligence & Machine Learning)", totalSeats: 180, catASeats: 126, catBSeats: 54 },
      { branch: "B.Tech CSE (Data Science)", totalSeats: 120, catASeats: 84, catBSeats: 36 },
      { branch: "B.Tech CSE (Cyber Security)", totalSeats: 60, catASeats: 42, catBSeats: 18 },
      { branch: "B.Tech CSE (Internet of Things - IoT)", totalSeats: 60, catASeats: 42, catBSeats: 18 },
      { branch: "B.Tech Electronics & Communication Engineering (ECE)", totalSeats: 60, catASeats: 42, catBSeats: 18 }
    ],
    detailedFees: {
      tuitionConvenor: "₹1,20,000 / year",
      tuitionManagement: "₹2,00,000 – ₹2,50,000 / year",
      tuitionNRI: "$4,000 / year",
      admissionFee: "₹10,000 (One-time University Registration, Exam & Identity Kit)",
      hostelAC: "₹1,20,000 – ₹1,35,000 / year (Air-conditioned 3-sharing with attached bathroom, mess & Wi-Fi)",
      hostelNonAC: "₹85,000 – ₹95,000 / year (Standard 3/4-sharing with dining & laundry facilities)",
      cautionDeposit: "₹15,000 (Refundable one-time deposit)",
      transportFee: "₹26,000 – ₹32,000 / year (Fleet connecting Secunderabad, ECIL, Medchal, Kompally & Siddipet)",
      tafrcNote: "Convenor quota seats (Category-A, 70%) are filled through TG EAPCET counselling at state-prescribed fee ceilings. Category-B Management Quota / Direct Admission seats (30%) are allotted on institutional merit based on JEE Main scores, EAPCET ranks, or intermediate PCM marks (min 60%). Generous merit scholarships of up to 50%–75% fee waivers are available for high academic achievers."
    },
    cutoffHistory: [
      { branch: "B.Tech Computer Science & Engg (CSE Core)", rank2024: "34,500", rank2023: "31,200", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (AI & Machine Learning)", rank2024: "39,800", rank2023: "36,400", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (Data Science)", rank2024: "44,200", rank2023: "41,500", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (Cyber Security)", rank2024: "49,600", rank2023: "46,200", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (Internet of Things - IoT)", rank2024: "56,800", rank2023: "52,400", category: "OC Boys (General Merit)" },
      { branch: "B.Tech Electronics & Comm (ECE)", rank2024: "64,500", rank2023: "61,000", category: "OC Boys (General Merit)" }
    ],
    detailedPlacements: {
      avgCTC: "₹5.2 LPA",
      medianCTC: "₹4.80 LPA",
      highestDomesticCTC: "₹20 LPA",
      placementPercentage: "88.0%",
      totalOffers: "450+ Offers",
      topRecruiters: [
        "TCS", "Cognizant", "Infosys", "Wipro", "Tech Mahindra",
        "Capgemini", "Hexaware", "HCL Technologies", "Mindtree",
        "Kaveri Tech Division", "Virtusa", "Amazon"
      ]
    },
    directAdmissionSteps: [
      {
        step: "01",
        title: "Online Application or Campus Visit",
        desc: "Submit your application on the official university portal (kaveriuniversity.edu.in) or visit the Admissions Office at Gowraram campus or the Secunderabad city office."
      },
      {
        step: "02",
        title: "Academic Eligibility Assessment",
        desc: "Candidates must have passed 10+2 / Intermediate with Mathematics, Physics, and Chemistry securing at least 60% aggregate marks. Submit JEE Main, TG EAPCET, or KaET entrance test scores."
      },
      {
        step: "03",
        title: "Scholarship & Quota Evaluation",
        desc: "Candidates are screened for Category-B direct admission merit or performance-based scholarships granting up to 50%–75% tuition waivers based on board or entrance percentiles."
      },
      {
        step: "04",
        title: "Seat Allotment & Provisional Booking",
        desc: "Receive your provisional seat allotment letter for the preferred B.Tech specialization. Remit the admission registration fee and first installment of tuition fees."
      },
      {
        step: "05",
        title: "Verification & Onboarding",
        desc: "Submit mandatory documentation: 10th and 12th marks sheets, Transfer Certificate, Conduct Certificate, Migration Certificate, Caste/EWS certificate (if applicable), and passport photographs."
      }
    ],
    comparisonPeer: {
      name: "SR University, Warangal",
      slug: "sr-university-warangal",
      tagline: "New-Age Emerging Tech Campus vs Established NIRF Top-100 Institution",
      feeComparison: "Kaveri University offers competitive tuition fees (₹1.20L convenor / ₹2.00L–₹2.50L management) along with high merit scholarship allocations up to 75%, while SR University charges ₹1.30L convenor and ₹2.00L–₹2.80L management quota fees.",
      cutoffComparison: "In TG EAPCET counselling, SR University B.Tech CSE closes around rank 19,540, whereas Kaveri University B.Tech CSE closes in the 30,000–35,000 rank bracket. This provides aspiring computer science engineers with ranks in the 30K–50K range an excellent private university alternative.",
      verdict: "Select SR University if you prioritize two decades of institutional history, NIRF #98 ranking, and established high-tier placement records (up to ₹51 LPA). Select Kaveri University if you desire brand-new world-class infrastructure within 40 minutes of Hyderabad's northern perimeter, personalized batch attention, and generous merit scholarships."
    },
    customFaqs: [
      {
        q: "Is Kaveri University recognized by UGC and the Telangana Government?",
        a: "Yes, Kaveri University is a statutory State Private University established under the Telangana State Private Universities (Establishment and Regulation) Amendment Act, 2023, by the Government of Telangana and is recognized under the UGC Act."
      },
      {
        q: "Where is Kaveri University located and how far is it from Hyderabad?",
        a: "Kaveri University is located at Gowraram Village, Wargal Mandal, Siddipet District, Telangana (502279), directly on the Hyderabad-Karimnagar Rajiv Rahadari (State Highway 1). It is approximately 40 minutes away from the Hyderabad Outer Ring Road (ORR) Shamirpet junction and is well connected by university transit and state roadways."
      },
      {
        q: "What is the fee structure for B.Tech CSE at Kaveri University?",
        a: "The annual tuition fee for Category-A convenor seats allotted through TG EAPCET counselling is ₹1,20,000 per year. For Category-B Management Quota and direct admission seats, the annual tuition fee ranges between ₹2,00,000 and ₹2,50,000 per year, with eligible candidates receiving merit scholarships up to 50%–75% based on 10+2 marks or entrance ranks."
      },
      {
        q: "Does Kaveri University offer scholarships for B.Tech students?",
        a: "Yes, Kaveri University provides extensive merit-based scholarships based on JEE Main percentiles, TG EAPCET ranks, 10+2 board percentage, and the Kaveri University Entrance Test (KaET). Scholarships range from 25% up to 75% tuition fee waivers throughout the 4-year degree."
      },
      {
        q: "What are the eligibility criteria for direct admission under Category-B Management Quota?",
        a: "Candidates must have completed 10+2 / Intermediate with Physics, Mathematics, and Chemistry securing a minimum of 60% aggregate marks from a recognized board (CBSE, ICSE, TS BIE, or equivalent). Scores from JEE Main, TG EAPCET, or the university's entrance test are considered during merit seat allotment."
      },
      {
        q: "What are the hostel and campus facilities at Kaveri University?",
        a: "The university's 100-acre residential campus features modern hostels for boys and girls with AC and non-AC rooms, hygienic dining facilities serving multi-cuisine meals, high-speed Wi-Fi, fully equipped gyms, indoor and outdoor sports grounds, 24/7 campus security, and on-call medical assistance."
      },
      {
        q: "What are the career placement prospects at Kaveri University?",
        a: "Kaveri University has a dedicated Career Development Cell (CDC) backed by corporate linkages across Hyderabad's IT corridor and the industrial strength of the Kaveri Group. Students participate in industry internships and on-campus placement drives with major tech firms including TCS, Cognizant, Infosys, Wipro, and Tech Mahindra, achieving an average package of ₹5.2 LPA and highest offers up to ₹20 LPA."
      }
    ],
    contentStatus: "verified_live"
  },
  {
    id: 28,
    inputName: "SR University",
    name: "SR University",
    slug: "sr-university-warangal",
    website: "https://sru.edu.in",
    city: "Warangal (Hanamkonda)",
    state: "Telangana",
    region: "South India",
    nirfRank: 98,
    naacGrade: "A+",
    type: "State Private University",
    established: 2002,
    avgPackage: "6.5 LPA",
    highestPackage: "51 LPA",
    annualFee: "₹1,30,000 - ₹2,80,000",
    exams: ["TG EAPCET (SRHP)", "SRUJEE", "JEE Main", "Category-B Direct"],
    popularCourses: ["B.Tech CSE Core", "CSE (AI & Machine Learning)", "CSE (Data Science)", "CSE (Cyber Security)", "ECE", "EEE", "Mechanical Engineering"],
    featured: true,
    highlight: "NIRF #98 Engineering • NAAC A+ • 150-Acre Campus • 51 LPA Highest Package",
    overview: "SR University (formerly S.R. Engineering College, established in 2002) is a premier private state university situated across a sprawling 150-acre lush green campus in Ananthasagar, Hasanparthy, Warangal, Telangana. Ranked 98th nationally among engineering institutions by NIRF 2024 and accredited with a prestigious 'A+' Grade by NAAC, SR University stands at the forefront of experiential engineering education through its pioneering Project-Based Learning (PBL) model, DST-backed SR Innovation Exchange (SRiX) startup incubator, and marquee corporate placements reaching up to ₹51 LPA.",
    metaTitle: "SR University Warangal Admissions 2025: Fees, Category-B Quota, TG EAPCET Cutoffs & Placements | Konfido",
    metaDescription: "Explore SR University Warangal B.Tech admissions 2025. Verified convenor fee (₹1.30L), Category-B direct management quota seats, SRHP EAPCET cutoff ranks, 150-acre research campus, and 51 LPA placement reports.",
    targetKeywords: [
      "SR University Warangal management quota fees 2025",
      "SR University category B direct admission process",
      "SRHP TG EAPCET cutoff closing ranks for CSE",
      "SR University average package placement 2024 2025",
      "SRUJEE entrance exam syllabus and eligibility",
      "SR University Warangal B.Tech fee structure"
    ],
    detailedOverview: [
      "Established in 2002 under the aegis of the visionary Sri A. Varada Reddy and the renowned SR Educational Society, SR University evolved from the landmark S.R. Engineering College (SREC) into a full-fledged State Private University enacted under the Telangana State Private Universities Act. Across over two decades of academic eminence, the institution has earned nationwide distinction by consistently securing top-100 positions in the National Institutional Ranking Framework (NIRF #98 in 2024 and #91 in 2025 in Engineering), alongside Tier-1 National Board of Accreditation (NBA) credentials and a NAAC 'A+' accreditation.",
      "The hallmark of SR University's academic pedagogy is its transformational Project-Based Learning (PBL) framework. Departing decisively from traditional didactic lecture modules, SRU students engage in experiential engineering design challenges right from their first semester. Through dedicated Centers of Excellence—such as the Center for Creative Cognition, Center for Materials and Manufacturing, and the Microsoft Innovation Center—undergraduates master emerging paradigms in generative AI, internet of robotic things (IoRT), electric vehicle powertrain design, and cyber forensics while solving real-world corporate problems.",
      "Entrepreneurship and applied research are deeply rooted within SR University's ecosystem. The campus houses the SR Innovation Exchange (SRiX), a world-class Technology Business Incubator supported by the Department of Science & Technology (DST), Government of India. Operating with state-of-the-art makerspaces, rapid prototyping labs, and high-performance computing clusters, SRiX has nurtured over 100 deep-tech startups, facilitated 50+ patent filings, and enabled student innovators to secure competitive seed capital and angel investments.",
      "Strategically situated along the Warangal-Karimnagar highway just minutes away from the historical tri-cities of Warangal, Hanamkonda, and Kazipet, SR University boasts a fully self-contained 150-acre residential campus. With premier global collaborations spanning Purdue University, University of Massachusetts Lowell, Saint Louis University, and the University of Missouri, SRU provides vibrant international student exchange programs, 2+2 dual-degree pathways, and comprehensive career training that consistently translates into elite recruitments by Fortune 500 tech leaders."
    ],
    seatMatrix: [
      { branch: "B.Tech Computer Science & Engineering (CSE Core)", totalSeats: 360, catASeats: 252, catBSeats: 108 },
      { branch: "B.Tech CSE (Artificial Intelligence & Machine Learning)", totalSeats: 180, catASeats: 126, catBSeats: 54 },
      { branch: "B.Tech CSE (Data Science)", totalSeats: 120, catASeats: 84, catBSeats: 36 },
      { branch: "B.Tech CSE (Cyber Security)", totalSeats: 60, catASeats: 42, catBSeats: 18 },
      { branch: "B.Tech Electronics & Communication Engineering (ECE)", totalSeats: 180, catASeats: 126, catBSeats: 54 },
      { branch: "B.Tech Electrical & Electronics Engineering (EEE)", totalSeats: 60, catASeats: 42, catBSeats: 18 },
      { branch: "B.Tech Mechanical Engineering (ME)", totalSeats: 60, catASeats: 42, catBSeats: 18 },
      { branch: "B.Tech Civil Engineering (CE)", totalSeats: 60, catASeats: 42, catBSeats: 18 }
    ],
    detailedFees: {
      tuitionConvenor: "₹1,30,000 / year",
      tuitionManagement: "₹2,00,000 – ₹2,80,000 / year",
      tuitionNRI: "$4,500 / year",
      admissionFee: "₹12,000 (One-time University Registration, Exam & Identity Kit)",
      hostelAC: "₹1,10,000 – ₹1,25,000 / year (Air-conditioned 3-sharing with multi-cuisine mess & Wi-Fi)",
      hostelNonAC: "₹85,000 – ₹95,000 / year (Standard 3/4-sharing with dining & laundry facilities)",
      cautionDeposit: "₹10,000 (Refundable one-time deposit)",
      transportFee: "₹22,000 – ₹28,000 / year (Air-conditioned & regular buses across Warangal, Hanamkonda & Kazipet)",
      tafrcNote: "Convenor seats (Category-A, 70%) are allotted strictly via TG EAPCET (formerly TS EAMCET) counselling under college code SRHP with state government fees. Category-B (Management / Direct Admission, 30%) and SRUJEE merit quota seats are allotted based on JEE Main percentiles, TG EAPCET ranks, or intermediate PCM merit (minimum 60%). Telangana ePASS fee reimbursement applies only to eligible Category-A convenor students."
    },
    cutoffHistory: [
      { branch: "B.Tech Computer Science & Engg (CSE Core)", rank2024: "19,540", rank2023: "19,443", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (AI & Machine Learning)", rank2024: "22,650", rank2023: "21,800", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (Data Science)", rank2024: "25,400", rank2023: "24,150", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (Cyber Security)", rank2024: "28,100", rank2023: "26,900", category: "OC Boys (General Merit)" },
      { branch: "B.Tech Electronics & Comm (ECE)", rank2024: "34,201", rank2023: "36,006", category: "OC Boys (General Merit)" },
      { branch: "B.Tech Electrical & Electronics (EEE)", rank2024: "51,339", rank2023: "58,895", category: "OC Boys (General Merit)" },
      { branch: "B.Tech Mechanical Engineering (ME)", rank2024: "89,858", rank2023: "73,206", category: "OC Boys (General Merit)" }
    ],
    detailedPlacements: {
      avgCTC: "₹6.5 LPA",
      medianCTC: "₹5.50 LPA (NIRF Audited)",
      highestDomesticCTC: "₹51 LPA (Cisco / Microsoft)",
      highestInternationalCTC: "₹34.4 LPA",
      placementPercentage: "92.4%",
      totalOffers: "1,150+ Offers",
      topRecruiters: [
        "Microsoft", "Cisco", "Amazon", "Salesforce", "PayPal",
        "Cognizant", "TCS Digital", "Infosys", "Wipro", "Accenture",
        "Capgemini", "Hyundai Mobis", "Bosch", "Deloitte", "Virtusa", "ServiceNow"
      ]
    },
    directAdmissionSteps: [
      {
        step: "01",
        title: "Online Registration & Application",
        desc: "Submit an online application through the official SR University admissions portal (sru.edu.in) or visit the Warangal campus / Hyderabad admissions office with academic credentials."
      },
      {
        step: "02",
        title: "Eligibility & Academic Verification",
        desc: "Candidates must have completed 10+2 / Intermediate with Physics, Mathematics, and Chemistry securing a minimum of 60% aggregate marks. Valid scores in JEE Main, TG EAPCET, or SRUJEE are evaluated for scholarship eligibility."
      },
      {
        step: "03",
        title: "Branch Counselling & Quota Seat Allotment",
        desc: "Select your preferred engineering specializations during counselling. Category-B Management Quota seats are allotted transparently on merit and candidate branch preference."
      },
      {
        step: "04",
        title: "Provisional Admission & Fee Remittance",
        desc: "Upon allotment, candidates receive a provisional offer letter. Pay the admission registration charge and initial installment of tuition fees via RTGS/NEFT/demand draft to confirm seat reservation."
      },
      {
        step: "05",
        title: "Document Verification & Enrolment",
        desc: "Submit mandatory original documents at the academic admissions desk: SSC/10th marks memo, Intermediate/12th marks memo, Transfer Certificate (TC), Study/Conduct certificates, Migration Certificate, Caste/EWS certificate (if applicable), and 6 passport photographs."
      }
    ],
    comparisonPeer: {
      name: "Anurag University, Hyderabad",
      slug: "anurag-university-hyderabad",
      tagline: "Warangal Innovation Hub vs Hyderabad Metropolitan Tech Corridor",
      feeComparison: "SR University charges ₹1.30L/year (Convenor) and ₹2.00L–₹2.80L/year (Category-B Management Quota), whereas Anurag University charges ₹1.40L/year (Convenor) and ₹2.50L–₹3.25L/year (Category-B). SR University also provides more economical on-campus residential hostel accommodation (₹85K–₹1.25L compared to Anurag's ₹1.10L–₹1.40L).",
      cutoffComparison: "In TG EAPCET general merit counselling, SR University B.Tech CSE closes around 19,540 rank, whereas Anurag University B.Tech CSE closes around 14,827 rank. This offers aspiring computer engineering students with ranks in the 15,000–22,000 bracket a high-confidence admission gateway at SRU.",
      verdict: "Opt for SR University if you value an expansive 150-acre green residential campus, official NIRF Top-100 engineering ranking (#98), DST-funded startup incubation (SRiX), and global US university tie-ups. Opt for Anurag University if day-scholar proximity to Hyderabad's eastern IT corridor (Uppal/Pocharam) and daily metro connectivity are your overriding priorities."
    },
    customFaqs: [
      {
        q: "What is the TG EAPCET (EAMCET) counselling code for SR University Warangal?",
        a: "The official TG EAPCET (formerly TS EAMCET) counselling code for SR University is SRHP. Students participating in state convenor counselling must enter code SRHP during web-option selection to secure Category-A seats."
      },
      {
        q: "Is SR University a recognized university and what is its NIRF ranking?",
        a: "Yes, SR University is a full-fledged State Private University enacted under the Telangana State Private Universities Act and approved by UGC and AICTE. It is accredited with an 'A+' Grade by NAAC, holds Tier-1 NBA accreditations for its core departments, and is ranked 98th nationally among all engineering institutions in NIRF 2024 (and 91st in NIRF 2025)."
      },
      {
        q: "What is the fee structure for B.Tech CSE at SR University under Category-B Management Quota?",
        a: "For Category-A convenor seats allotted through TG EAPCET counselling, the tuition fee is ₹1,30,000 per year. For Category-B Management Quota / Direct Admission seats in high-demand disciplines such as B.Tech CSE, CSE (AI & ML), and Data Science, the annual tuition fee ranges between ₹2,00,000 and ₹2,80,000 per year, depending on the candidate's qualifying entrance test scores."
      },
      {
        q: "What is SRUJEE and is it mandatory for admission into SR University?",
        a: "SRUJEE (SR University Joint Entrance Examination) is the university's institutional entrance test conducted for admissions into B.Tech and other undergraduate programs. Taking SRUJEE is not strictly mandatory if you have qualified in TG EAPCET or JEE Main; however, appearing for SRUJEE allows candidates to qualify for generous merit scholarships offering up to 50%–80% tuition fee waivers."
      },
      {
        q: "What are the highest and average placement packages offered at SR University?",
        a: "In recent placement cycles (2024–2025), SR University recorded a highest domestic package of ₹51 LPA offered by top tech multinational giants (Cisco and Microsoft), with an international highest offer of ₹34.4 LPA. The overall average package across engineering disciplines stands at ₹6.5 LPA, with over 1,150+ placement offers generated by 150+ premier recruiting corporations."
      },
      {
        q: "Can non-Telangana (other state) students apply for B.Tech admission at SR University?",
        a: "Yes, students from Andhra Pradesh and all other Indian states can apply for B.Tech admissions at SR University under the All-India Category-B Quota, SRUJEE merit route, or through their JEE Main percentiles. They are accommodated in modern on-campus AC and non-AC residential hostels."
      },
      {
        q: "What are the hostel facilities and fee charges at SR University Warangal?",
        a: "SR University provides expansive on-campus hostel facilities for both boys and girls. Rooms are available in twin, triple, and four-sharing configurations. Annual hostel fees range from ₹85,000 to ₹95,000 per year for Non-AC rooms and ₹1,10,000 to ₹1,25,000 per year for AC accommodations, inclusive of nutritious multi-cuisine dining, high-speed Wi-Fi, 24/7 security, gym, and medical support."
      }
    ],
    contentStatus: "verified_live"
  },
  {
    id: 29,
    inputName: "srinidhi",
    name: "Sreenidhi Institute of Science and Technology (SNIST)",
    slug: "snist-sreenidhi-hyderabad",
    website: "https://www.sreenidhi.edu.in",
    city: "Hyderabad (Ghatkesar)",
    state: "Telangana",
    region: "South India",
    naacGrade: "A+",
    type: "Autonomous / Affiliated to JNTUH",
    established: 1997,
    avgPackage: "6.8 LPA",
    highestPackage: "40 LPA",
    annualFee: "₹1,33,000 - ₹4,50,000",
    exams: ["TS EAMCET", "JEE Main", "Category-B Management Quota"],
    popularCourses: ["B.Tech CSE Core", "CSE (AI & ML)", "CSE (Data Science)", "CSE (Cyber Security)", "Information Technology (IT)", "ECE"],
    featured: true,
    highlight: "NAAC A+ Grade • Autonomous under JNTUH • 1,500+ Annual Placements",
    overview: "Sreenidhi Institute of Science and Technology (SNIST) is one of Hyderabad's top-tier autonomous engineering colleges, established in 1997 by Sree Education Society. Spanning 33 scenic acres in Ghatkesar near Hyderabad's eastern IT growth corridor, SNIST is renowned for rigorous academic governance, industry-oriented autonomous curricula, and elite campus hiring by tech multinationals.",
    metaTitle: "SNIST Hyderabad Admissions 2025: Fees, Category-B Quota, TS EAMCET Cutoffs & Placements | Konfido",
    metaDescription: "Explore Sreenidhi Institute of Science and Technology (SNIST) Hyderabad B.Tech admissions 2025. Verified TAFRC convenor fee (₹1.33L), Category-B management quota seat details, TS EAMCET closing cutoffs, and 40 LPA placement reports.",
    targetKeywords: [
      "SNIST Hyderabad management quota fees 2025",
      "Sreenidhi Institute of Science and Technology category B admission",
      "SNIST TS EAMCET cutoff closing ranks for CSE",
      "SNIST average package placement report 2024 2025",
      "direct admission in Sreenidhi without EAMCET",
      "SNIST Ghatkesar fee structure B.Tech"
    ],
    detailedOverview: [
      "Established in 1997 under the dynamic visionary leadership of Dr. K.T. Mahhe, Sreenidhi Institute of Science and Technology (SNIST) has evolved into one of the premier autonomous engineering institutions in Telangana. The institute operates under permanent affiliation with Jawaharlal Nehru Technological University, Hyderabad (JNTUH), with full approval from AICTE, New Delhi, and accreditation from the National Assessment and Accreditation Council (NAAC) with a prestigious 'A+' Grade. Multiple undergraduate disciplines, including Computer Science and Electronics, hold accreditations from the National Board of Accreditation (NBA).",
      "A primary differentiator of SNIST is its academic autonomy. The institution designs and periodically updates its B.Tech curriculum in close consultation with industry advisory councils and faculty from IITs and NITs. Unlike affiliated colleges tied to static university syllabi, SNIST embeds high-demand technological paradigms—such as microservices architecture, machine learning engineering, cloud virtualization, DevOps, and cyber forensics—directly into undergraduate coursework from the third semester onwards.",
      "The campus is situated on a verdant 33-acre estate in Yamnampet, Ghatkesar, situated conveniently near the Hyderabad Outer Ring Road (ORR) and the burgeoning IT cluster at Pocharam (Infosys SEZ). SNIST houses specialized departmental research laboratories, high-performance computing centers, an active Technology Business Incubator (TBI) recognized by the Department of Science & Technology (DST), and active chapters of IEEE, ACM, CSI, and SAE.",
      "Beyond academic rigor, SNIST promotes a holistic collegiate experience. Over 100 dedicated institutional buses connect the Ghatkesar campus to all key residential corridors across Hyderabad and Secunderabad. The student community leads vibrant annual technical and cultural symposiums, most notably 'SreeVision' and 'Rigolade', alongside community initiatives through the National Service Scheme (NSS) and Rotary Youth chapters."
    ],
    seatMatrix: [
      { branch: "B.Tech Computer Science & Engineering (CSE Core)", totalSeats: 360, catASeats: 252, catBSeats: 108 },
      { branch: "B.Tech CSE (Artificial Intelligence & Machine Learning)", totalSeats: 240, catASeats: 168, catBSeats: 72 },
      { branch: "B.Tech CSE (Data Science)", totalSeats: 180, catASeats: 126, catBSeats: 54 },
      { branch: "B.Tech CSE (Cyber Security)", totalSeats: 120, catASeats: 84, catBSeats: 36 },
      { branch: "B.Tech Information Technology (IT)", totalSeats: 180, catASeats: 126, catBSeats: 54 },
      { branch: "B.Tech Electronics & Communication Engineering (ECE)", totalSeats: 240, catASeats: 168, catBSeats: 72 },
      { branch: "B.Tech Electrical & Electronics Engineering (EEE)", totalSeats: 120, catASeats: 84, catBSeats: 36 },
      { branch: "B.Tech Mechanical Engineering (ME)", totalSeats: 60, catASeats: 42, catBSeats: 18 }
    ],
    detailedFees: {
      tuitionConvenor: "₹1,33,000 / year",
      tuitionManagement: "₹2,50,000 – ₹4,50,000 / year",
      tuitionNRI: "$5,000 / year",
      admissionFee: "₹10,500 (One-time University Reg. & JNTUH Infrastructure fee)",
      hostelAC: "₹1,25,000 / year (Air-conditioned with mess & high-speed Wi-Fi)",
      hostelNonAC: "₹95,000 / year (Standard 3-sharing with laundry & dining)",
      cautionDeposit: "₹10,000 (Refundable upon course completion)",
      transportFee: "₹32,000 – ₹38,000 / year (Campus bus fleet across 100+ Hyderabad routes)",
      tafrcNote: "Tuition fees for Category-A (70% convenor seats) are officially fixed by the Telangana Admission and Fee Regulatory Committee (TAFRC) for the current regulatory block. Note: Candidates securing admission under Category-B Management Quota are ineligible for Telangana State Government fee reimbursement (ePASS/RTF) and must pay institutional fees directly."
    },
    cutoffHistory: [
      { branch: "B.Tech Computer Science & Engg (CSE)", rank2024: "12,398", rank2023: "10,097", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (AI & Machine Learning)", rank2024: "13,851", rank2023: "11,420", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (Data Science)", rank2024: "14,695", rank2023: "12,850", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (Cyber Security)", rank2024: "15,738", rank2023: "13,900", category: "OC Boys (General Merit)" },
      { branch: "B.Tech Information Technology (IT)", rank2024: "17,820", rank2023: "15,340", category: "OC Boys (General Merit)" },
      { branch: "B.Tech Electronics & Comm (ECE)", rank2024: "22,450", rank2023: "19,800", category: "OC Boys (General Merit)" }
    ],
    detailedPlacements: {
      avgCTC: "₹6.8 LPA",
      medianCTC: "₹5.75 LPA (NIRF Audited)",
      highestDomesticCTC: "₹38 LPA",
      highestInternationalCTC: "₹40 - 44 LPA",
      placementPercentage: "86.5%",
      totalOffers: "1,520+ Offers",
      topRecruiters: [
        "Amazon", "Adobe", "Microsoft", "Salesforce", "Cognizant",
        "TCS Digital", "Wipro", "Capgemini", "Accenture", "Hyundai Mobis",
        "Deloitte", "Tech Mahindra", "Virtusa", "Infosys"
      ]
    },
    directAdmissionSteps: [
      {
        step: "01",
        title: "Eligibility Verification",
        desc: "Candidate must have passed 10+2 Intermediate or CBSE/ICSE equivalent examination with Physics, Mathematics, and Chemistry (PCM) with a minimum aggregate of 45% (40% for reserved SC/ST/BC categories). A valid TS EAPCET or JEE Main scorecard is preferred for priority ranking."
      },
      {
        step: "02",
        title: "Category-B Application Submission",
        desc: "Submit the institutional Category-B Management Quota application form through the official college admission window or at the Sree Education Group administrative desk in Hyderabad."
      },
      {
        step: "03",
        title: "Merit Evaluation & Scrutiny",
        desc: "Management quota applications are scrutinized based on PCM aggregate percentage and entrance percentiles in strict accordance with Telangana Council of Higher Education (TGCHE) guidelines."
      },
      {
        step: "04",
        title: "Seat Blocking & Fee Documentation",
        desc: "Verification of original academic transcripts (10th memo, Inter memo, Transfer Certificate, Conduct Certificate, Study Certificates) and transparent payment of tuition fees via official banking instrument."
      },
      {
        step: "05",
        title: "Provisional Allotment Ratification",
        desc: "Receive the official provisional seat allotment order ratified by TGCHE, guaranteeing confirmed admission before state spot rounds conclude."
      }
    ],
    comparisonPeer: {
      name: "Anurag University, Hyderabad",
      slug: "anurag-university-hyderabad",
      tagline: "Autonomous JNTUH Powerhouse vs State Private University",
      feeComparison: "SNIST's TAFRC approved convenor tuition is ₹1,33,000/yr, whereas Anurag University's private fee structure spans ₹1,50,000 to ₹2,75,000/yr.",
      cutoffComparison: "SNIST CSE closing rank (12,398) is significantly more competitive than Anurag University (~16,000 - 18,500).",
      verdict: "SNIST is widely favored for legacy reputation, superior tech placements in tier-1 product companies, and JNTUH degree autonomy. Anurag University offers broader multidisciplinary private university infrastructure."
    },
    customFaqs: [
      {
        q: "What is the Category-B management quota fee for B.Tech CSE in SNIST Hyderabad for 2025?",
        a: "For the 2025–26 academic year, the official Category-A convenor tuition fee for SNIST is ₹1,33,000 per year as approved by TAFRC. Category-B (Management Quota) tuition fee for high-demand branches like CSE Core, AI/ML, and Data Science ranges between ₹2,50,000 to ₹4,50,000 per year depending on the candidate's 10+2 PCM percentage and seat quota availability. All payments are accompanied by official institutional receipts issued directly by Sree Education Society."
      },
      {
        q: "What is the TS EAMCET (TG EAPCET) closing rank required for CSE at SNIST?",
        a: "In the 2024 TS EAPCET final phase counselling, the closing rank for Computer Science & Engineering (CSE Core) at SNIST was 12,398 for Open Category (OC Boys). CSE with AI & ML closed at 13,851, and Data Science closed at 14,695. Candidates ranking above 20,000 can explore IT, ECE, or apply directly through Category-B management quota."
      },
      {
        q: "Can non-local or other-state students apply for management quota seats at SNIST?",
        a: "Yes. Students from Andhra Pradesh, Karnataka, Maharashtra, and across India are 100% eligible to apply for Category-B management quota seats at SNIST Hyderabad. There is no state domicile restriction for Category-B seats as per TGCHE guidelines, provided the student meets the 45% aggregate criteria in 10+2 PCM."
      },
      {
        q: "Are Category-B management quota students eligible for Telangana fee reimbursement (ePASS)?",
        a: "No. As per Telangana state government regulations, fee reimbursement (RTF) through TS ePASS is strictly reserved for students admitted through convenor quota (Category-A) via TS EAPCET counselling. Management quota students are required to bear the full annual tuition fee."
      },
      {
        q: "What is the highest and average placement salary at SNIST Hyderabad?",
        a: "According to recent placement records, SNIST achieved a record highest package of ₹38 to ₹40 LPA from top product recruiters, with an international package touching ₹44 LPA. The overall average package stands at ₹6.8 LPA (with a median CTC of ₹5.75 LPA as reported in NIRF audits), with top software recruiters like Amazon, Adobe, Microsoft, Salesforce, and Cognizant hiring over 1,500 students each year."
      },
      {
        q: "How is SNIST connected to Hyderabad city and is hostel accommodation available?",
        a: "SNIST is located in Yamnampet, Ghatkesar, approximately 18 km from Uppal Metro Station and 8 km from Ghatkesar Railway Station. The college runs an extensive fleet of over 100 buses across Hyderabad and Secunderabad. Additionally, safe affiliated hostels with AC and Non-AC facilities, high-speed Wi-Fi, and North/South Indian food are available within a 2–5 km radius of the campus."
      },
      {
        q: "How can Konfido assist with direct admission at SNIST Hyderabad?",
        a: "Konfido provides 100% free personalized admission counselling. We assist parents and students with TS EAPCET rank analysis, official Category-B application protocols, fee structure transparency, documentation checks, and seat confirmation before spot rounds conclude."
      }
    ],
    contentStatus: "verified_live"
  },
  {
    id: 30,
    inputName: "Anurag university",
    name: "Anurag University",
    slug: "anurag-university-hyderabad",
    website: "https://anurag.edu.in",
    city: "Hyderabad (Ghatkesar)",
    state: "Telangana",
    region: "South India",
    naacGrade: "A+",
    type: "State Private University (UGC Approved)",
    established: 2002,
    avgPackage: "6.0 LPA",
    highestPackage: "53 LPA",
    annualFee: "₹1,40,000 - ₹3,25,000",
    exams: ["Anurag CET", "TS EAMCET", "JEE Main", "Direct Admission"],
    popularCourses: ["B.Tech CSE Core", "CSE (AI & ML)", "CSE (Data Science)", "CSE (Cyber Security)", "Information Technology (IT)", "ECE"],
    featured: true,
    highlight: "NAAC A+ Grade • 55-Acre Smart Campus • ₹53 LPA Record Package • 200+ Recruiters",
    overview: "Anurag University is one of Telangana's premier private state universities, established in 2002 as CVSR College of Engineering and elevated to university status in 2020. Set across a lush 55-acre campus in Venkatapur, Ghatkesar along the Hyderabad-Warangal corridor, Anurag University is famed for modern engineering infrastructure, project-driven learning, and exceptional placement records.",
    metaTitle: "Anurag University Hyderabad Admissions 2025: Fees, Cutoffs, Direct Quota, Placements | Konfido",
    metaDescription: "Complete guide to Anurag University Hyderabad B.Tech admissions 2025. Verified convenor & management quota fees (₹3.25L), TS EAMCET cutoffs, Anurag CET details, and ₹53 LPA placement statistics.",
    targetKeywords: [
      "Anurag University management quota fees 2025",
      "Anurag University B.Tech CSE fee structure",
      "Anurag University TS EAMCET cutoff closing ranks",
      "Anurag CET application process and eligibility",
      "Anurag University placement report average package 2024",
      "direct admission in Anurag University without EAMCET"
    ],
    detailedOverview: [
      "Established in 2002 under the aegis of the Gayatri Educational and Cultural Trust by distinguished academician and legislator Dr. P. Rajeshwar Reddy, Anurag University initially earned widespread recognition as CVSR College of Engineering. In 2020, following an illustrious eighteen-year track record of autonomous excellence, the institution was elevated into one of Telangana's first Private State Universities under the Telangana State Private Universities Act. Today, the university holds recognition from the University Grants Commission (UGC), approval from AICTE, New Delhi, and institutional accreditation from NAAC with a stellar 'A+' Grade.",
      "Anurag University champions an academically progressive pedagogy characterized by flexible degree choices, interdisciplinary research, and industry co-developed curricula. In addition to primary four-year B.Tech degree programs in Computer Science, Artificial Intelligence, and Electronics, students have the unique opportunity to pursue Honors and Minor degree certifications in high-demand domains like Cloud Engineering, FinTech, Quantum Computing, Blockchain, and Robotics, earning micro-credentials that significantly elevate employability.",
      "The university is nestled within a scenic, eco-friendly 55-acre campus in Venkatapur, Ghatkesar, strategically located on the Hyderabad-Warangal National Highway (NH 163). The academic infrastructure features cutting-edge technological assets, including high-performance Nvidia AI computing clusters, specialized research laboratories supported by Microsoft, Cisco, and IBM, and an active Atal Incubation Centre (AIC) supported by NITI Aayog that mentors student-led deep-tech startups.",
      "With student life at the core of campus culture, Anurag University features world-class sports facilities including cricket grounds, basketball courts, a multi-gymnasium, and state-of-the-art air-conditioned auditoriums. Over 90 university buses operate daily, delivering seamless transit across Hyderabad and Secunderabad. Annual technical celebrations such as 'Daksh' and cultural extravaganzas like 'Aagama' draw participation from colleges across the nation."
    ],
    seatMatrix: [
      { branch: "B.Tech Computer Science & Engineering (CSE Core)", totalSeats: 420, catASeats: 294, catBSeats: 126 },
      { branch: "B.Tech CSE (Artificial Intelligence & Machine Learning)", totalSeats: 300, catASeats: 210, catBSeats: 90 },
      { branch: "B.Tech CSE (Data Science)", totalSeats: 180, catASeats: 126, catBSeats: 54 },
      { branch: "B.Tech CSE (Cyber Security)", totalSeats: 120, catASeats: 84, catBSeats: 36 },
      { branch: "B.Tech Information Technology (IT)", totalSeats: 180, catASeats: 126, catBSeats: 54 },
      { branch: "B.Tech Electronics & Communication Engineering (ECE)", totalSeats: 240, catASeats: 168, catBSeats: 72 },
      { branch: "B.Tech Electrical & Electronics Engineering (EEE)", totalSeats: 120, catASeats: 84, catBSeats: 36 },
      { branch: "B.Tech Chemical Engineering", totalSeats: 60, catASeats: 42, catBSeats: 18 }
    ],
    detailedFees: {
      tuitionConvenor: "₹1,40,000 / year",
      tuitionManagement: "₹2,50,000 – ₹3,25,000 / year",
      tuitionNRI: "$4,500 / year",
      admissionFee: "₹12,000 (One-time University Admission & ID fee)",
      hostelAC: "₹1,30,000 / year (Modern twin sharing with food & Wi-Fi)",
      hostelNonAC: "₹95,000 / year (Standard 3-sharing with mess & laundry)",
      cautionDeposit: "₹10,000 (Refundable upon course completion)",
      transportFee: "₹30,000 – ₹36,000 / year (Bus fleet spanning 90+ routes across Hyderabad)",
      tafrcNote: "Convenor quota seats (Category-A) are allotted through TS EAPCET counselling at state-approved fee schedules. Management quota seats (Category-B) are allotted directly by the university based on 10+2 PCM merit or Anurag CET scores. Note: Management quota admissions are not eligible for Telangana State Government fee reimbursement (ePASS)."
    },
    cutoffHistory: [
      { branch: "B.Tech Computer Science & Engg (CSE)", rank2024: "14,827", rank2023: "10,741", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (AI & Machine Learning)", rank2024: "16,920", rank2023: "12,450", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (Data Science)", rank2024: "18,450", rank2023: "14,100", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (Cyber Security)", rank2024: "20,100", rank2023: "15,800", category: "OC Boys (General Merit)" },
      { branch: "B.Tech Information Technology (IT)", rank2024: "23,500", rank2023: "18,200", category: "OC Boys (General Merit)" },
      { branch: "B.Tech Electronics & Comm (ECE)", rank2024: "31,200", rank2023: "26,400", category: "OC Boys (General Merit)" }
    ],
    detailedPlacements: {
      avgCTC: "₹6.0 LPA",
      medianCTC: "₹5.2 LPA",
      highestDomesticCTC: "₹53 LPA (Headline Product Offer 2024)",
      highestInternationalCTC: "₹38.5 LPA",
      placementPercentage: "97% of eligible graduates",
      totalOffers: "1,600+ Offers",
      topRecruiters: [
        "Microsoft", "Amazon", "Cisco", "ServiceNow", "Goldman Sachs",
        "JP Morgan", "Deloitte", "Accenture", "TCS", "Wipro",
        "Cognizant", "Capgemini", "LTI Mindtree"
      ]
    },
    directAdmissionSteps: [
      {
        step: "01",
        title: "Academic Eligibility Check",
        desc: "Passed 10+2 Intermediate or CBSE/ICSE examination with Physics, Mathematics, and Chemistry (PCM) with minimum 50% aggregate marks (45% for reserved category candidates)."
      },
      {
        step: "02",
        title: "Anurag CET / Direct Registration",
        desc: "Submit application form online through the university admission portal or in-person at the Anurag University admissions center for institutional quota consideration."
      },
      {
        step: "03",
        title: "Merit Assessment & Counselling",
        desc: "Candidate profile evaluated based on Anurag CET score, JEE Main percentile, or 10+2 PCM board percentage for seat allocation in preferred specialization."
      },
      {
        step: "04",
        title: "Certificate Verification",
        desc: "Original document verification (10th memo, 12th memo, Transfer Certificate, Study Certificates, Entrance rank card, and Photo ID proof)."
      },
      {
        step: "05",
        title: "Seat Confirmation & Allotment",
        desc: "Remittance of tuition and registration fees directly to university bank account and receipt of official confirmed provisional allotment order."
      }
    ],
    comparisonPeer: {
      name: "Sreenidhi Institute of Science and Technology (SNIST)",
      slug: "snist-sreenidhi-hyderabad",
      tagline: "Private State University vs Autonomous JNTUH Powerhouse",
      feeComparison: "Anurag University tuition is ₹1,40,000 - ₹3,25,000/yr vs SNIST's ₹1,33,000 - ₹4,50,000/yr.",
      cutoffComparison: "SNIST CSE closing rank (12,398) is slightly more competitive than Anurag University (14,827).",
      verdict: "Anurag University offers expansive multidisciplinary private university infrastructure, flexible minors, and a massive 55-acre campus. SNIST holds longer legacy standing under JNTUH affiliation with established corporate ties in Hyderabad IT circles."
    },
    customFaqs: [
      {
        q: "What is the management quota fee for B.Tech CSE in Anurag University Hyderabad for 2025?",
        a: "At Anurag University, the annual tuition fee for B.Tech Computer Science & Engineering (CSE) and its specialized branches (AI & ML, Data Science) under direct institutional / management quota is approximately ₹2,50,000 to ₹3,25,000 per year. For students securing seats via TS EAPCET convenor quota, the state-regulated fee is approximately ₹1,40,000 per year. Fees are paid directly to the university account with formal payment receipts."
      },
      {
        q: "What is the Anurag CET and how does it help in B.Tech admissions?",
        a: "Anurag CET (Anurag Common Entrance Test) is the university's institutional entrance and scholarship test conducted online. Students with good performance in Anurag CET are eligible for up to 50% tuition fee scholarships and early-bird seat reservation in top branches like CSE Core and Artificial Intelligence."
      },
      {
        q: "What was the TS EAMCET cutoff rank for CSE at Anurag University in 2024?",
        a: "In the 2024 TS EAPCET final phase counselling, the closing rank for B.Tech CSE Core at Anurag University was 14,827 for Open Category (OC Boys). CSE (AI & ML) closed at 16,920, and CSE (Data Science) closed at 18,450. Students with ranks above 20,000 can secure admission through direct management quota or Anurag CET merit."
      },
      {
        q: "What is the highest and average placement package at Anurag University?",
        a: "In the 2024–2025 recruitment cycle, Anurag University recorded a stellar highest package of ₹53 LPA, with an overall average CTC of ₹6.0 LPA. Over 200 premier corporate recruiters, including Microsoft, Amazon, Cisco, Goldman Sachs, JP Morgan, Deloitte, and Accenture, made more than 1,600 job offers with an overall 97% placement rate for eligible students."
      },
      {
        q: "Is Anurag University UGC approved and NAAC accredited?",
        a: "Yes. Anurag University is a recognized State Private University established under the Telangana State Private Universities Act. It is approved by the University Grants Commission (UGC), approved by AICTE, accredited by NAAC with an 'A+' Grade, and holds NBA accreditation for multiple undergraduate engineering departments."
      },
      {
        q: "Where is Anurag University located and what hostel facilities are available?",
        a: "Anurag University is located in Venkatapur, Ghatkesar along the Hyderabad-Warangal Highway (NH 163), close to the Pocharam IT corridor. The university provides modern on-campus and affiliated hostels with high-speed Wi-Fi, 24/7 security, AC and Non-AC room options, study lounges, and nutritious dining. College transport buses operate across 90+ routes throughout Hyderabad."
      },
      {
        q: "How can Konfido assist with B.Tech admission at Anurag University?",
        a: "Konfido provides 100% free guidance for prospective students. We assist with Anurag CET scholarship registration, TS EAPCET web options strategy, direct management quota seat locking, fee verification, and transparent admission completion directly with the university admission cell."
      }
    ],
    contentStatus: "verified_live"
  },
  {
    id: 31,
    inputName: "Mahindra Univeristy",
    name: "Mahindra University",
    slug: "mahindra-university-hyderabad",
    website: "https://www.mahindrauniversity.edu.in",
    city: "Hyderabad (Bahadurpally)",
    state: "Telangana",
    region: "South India",
    type: "State Private University (Backed by Mahindra Group)",
    established: 2014,
    avgPackage: "9.1 LPA",
    highestPackage: "45 LPA",
    annualFee: "₹4,50,000 - ₹5,00,000",
    exams: ["JEE Main", "SAT (General)", "ACT", "Direct Merit"],
    popularCourses: ["B.Tech CSE Core", "B.Tech Artificial Intelligence (AI)", "Computation & Mathematics", "Electronics & Computer Engg", "Mechatronics", "Biotechnology"],
    featured: true,
    highlight: "Backed by Mahindra Group & École Centrale Paris • 130-Acre Campus • Avg ₹9.1 LPA • Mandatory Residential",
    overview: "Mahindra University (École Centrale School of Engineering) is an elite autonomous institution founded in 2014 in collaboration with CentraleSupélec (École Centrale Paris), France. Spanning 130 acres in Bahadurpally, Hyderabad, the university delivers high-rigor engineering education combining French mathematical theory, corporate internships, and international university exchanges.",
    metaTitle: "Mahindra University Hyderabad B.Tech Admissions 2025: Fees, Cutoffs, JEE Main, Placements | Konfido",
    metaDescription: "Explore Mahindra University Hyderabad B.Tech admissions 2025. Verified annual tuition fees (₹4.5L - ₹5L), mandatory residential hostel costs, JEE Main & SAT cutoffs, and ₹45 LPA placement reports.",
    targetKeywords: [
      "Mahindra University Hyderabad B.Tech fees 2025",
      "Mahindra University JEE Main cutoff percentile",
      "Mahindra University management quota direct admission",
      "Mahindra University average package CSE 2024",
      "Mahindra Ecole Centrale fees and hostel charges",
      "Mahindra University admission without JEE Main"
    ],
    detailedOverview: [
      "Mahindra University was founded in 2014 as Mahindra École Centrale (MEC) in direct institutional collaboration with CentraleSupélec (formerly École Centrale Paris), one of France's oldest and most prestigious Grandes Écoles of engineering. In May 2020, under the leadership of Chancellor Anand Mahindra and the global Mahindra Group, the institution received legislative assent under the Telangana State Private Universities Act to expand into a world-class multidisciplinary university.",
      "Unlike conventional Indian engineering colleges tied to rigid syllabus templates, Mahindra University's École Centrale School of Engineering operates on the celebrated European polytechnic philosophy. Coursework emphasizes fundamental differential mathematics, physics modeling, multidisciplinary creative design, complex systems architecture, social sciences, and mandatory foreign language mastery (French/German). Students undergo mandatory corporate internships in their second, third, and fourth years.",
      "Located in Bahadurpally, Jeedimetla in North Hyderabad, the university spans 130 acres of cutting-edge infrastructure. Facilities include state-of-the-art supercomputing labs, wind tunnels, robotics manufacturing cells, specialized artificial intelligence testbeds, and international research collaborations with Cornell University, Babson College, and CentraleSupélec.",
      "A distinctive hallmark of the Mahindra University experience is its fully residential learning model. All undergraduate engineering students reside in modern on-campus residential complexes with air-conditioned accommodations, dining halls serving 4 meals daily, Olympic-standard sports grounds, and high-speed campus fiber-optic networks, creating a vibrant 24/7 research and innovation ecosystem."
    ],
    seatMatrix: [
      { branch: "B.Tech Computer Science & Engineering (CSE Core)", totalSeats: 300, catASeats: 210, catBSeats: 90 },
      { branch: "B.Tech Artificial Intelligence (AI)", totalSeats: 180, catASeats: 126, catBSeats: 54 },
      { branch: "B.Tech Computation & Mathematics", totalSeats: 60, catASeats: 42, catBSeats: 18 },
      { branch: "B.Tech Electronics & Computer Engineering", totalSeats: 120, catASeats: 84, catBSeats: 36 },
      { branch: "B.Tech Mechatronics Engineering", totalSeats: 60, catASeats: 42, catBSeats: 18 },
      { branch: "B.Tech Mechanical Engineering", totalSeats: 60, catASeats: 42, catBSeats: 18 },
      { branch: "B.Tech Civil Engineering", totalSeats: 60, catASeats: 42, catBSeats: 18 },
      { branch: "B.Tech Biotechnology", totalSeats: 60, catASeats: 42, catBSeats: 18 }
    ],
    detailedFees: {
      tuitionConvenor: "₹4,50,000 / year (Core Engineering Tuition)",
      tuitionManagement: "₹5,00,000 / year (CSE & Artificial Intelligence Disciplines)",
      tuitionNRI: "$9,000 / year (NRI / International quota)",
      admissionFee: "₹20,000 (One-time non-refundable registration fee)",
      hostelAC: "₹2,00,000 / year (Mandatory on-campus AC accommodation + 4-time dining)",
      hostelNonAC: "₹1,70,000 / year (Standard occupancy room with full board)",
      cautionDeposit: "₹20,000 (Refundable institutional security deposit)",
      transportFee: "N/A (Fully residential campus with 24/7 internal shuttles)",
      tafrcNote: "Mahindra University operates as an autonomous private university with admissions via JEE Main and SAT merit. Note: B.Tech is a mandatory fully residential program for all students. Merit scholarships offering 25% to 100% fee waivers are available for high JEE Main percentile qualifiers (90+ percentile)."
    },
    cutoffHistory: [
      { branch: "B.Tech Computer Science & Engg (CSE)", rank2024: "88 - 92 %ile", rank2023: "86 - 90 %ile", category: "JEE Main General Merit" },
      { branch: "B.Tech Artificial Intelligence (AI)", rank2024: "85 - 89 %ile", rank2023: "83 - 87 %ile", category: "JEE Main General Merit" },
      { branch: "B.Tech Computation & Mathematics", rank2024: "82 - 86 %ile", rank2023: "80 - 84 %ile", category: "JEE Main General Merit" },
      { branch: "B.Tech Electronics & Computer Engg", rank2024: "80 - 84 %ile", rank2023: "78 - 82 %ile", category: "JEE Main General Merit" },
      { branch: "B.Tech Mechatronics Engineering", rank2024: "75 - 80 %ile", rank2023: "72 - 78 %ile", category: "JEE Main General Merit" },
      { branch: "SAT International Pathway", rank2024: "1200+ Score", rank2023: "1150+ Score", category: "SAT General (All Branches)" }
    ],
    detailedPlacements: {
      avgCTC: "₹9.1 LPA",
      medianCTC: "₹8.0 LPA",
      highestDomesticCTC: "₹45 LPA",
      highestInternationalCTC: "₹52 LPA",
      placementPercentage: "92% in Tier-1 Corporations",
      totalOffers: "240+ Elite Offers (41 of 48 recruiters offering > ₹6 LPA)",
      topRecruiters: [
        "Microsoft", "Amazon", "Cisco", "Dell", "Schlumberger",
        "Tech Mahindra", "Mahindra & Mahindra", "ZS Associates",
        "Linecraft AI", "Capgemini", "Voltas", "Saint Gobain"
      ]
    },
    directAdmissionSteps: [
      {
        step: "01",
        title: "Academic Eligibility Verification",
        desc: "Passed 10+2 Intermediate or CBSE/ICSE/IB board examination with Physics, Mathematics, and Chemistry with minimum 60% aggregate. Qualified in JEE Main, valid SAT (800+), or ACT (18+) score."
      },
      {
        step: "02",
        title: "Online Application & Portfolio",
        desc: "Submit application form online through mahindrauniversity.edu.in with statement of purpose, academic marks cards, and entrance scorecard."
      },
      {
        step: "03",
        title: "Profile Review & Technical Interview",
        desc: "Selected candidates are invited for a personal interaction / video technical interview conducted by university faculty to evaluate engineering aptitude."
      },
      {
        step: "04",
        title: "Provisional Admission Offer Letter",
        desc: "Admission committee issues provisional offer letter with branch allotment and scholarship eligibility based on merit score."
      },
      {
        step: "05",
        title: "Fee Remittance & Hostel Booking",
        desc: "Payment of academic tuition and residential charges through official bank transfer and confirmation of on-campus air-conditioned hostel room."
      }
    ],
    comparisonPeer: {
      name: "Woxsen University, Hyderabad",
      slug: "woxsen-university-hyderabad",
      tagline: "French Engineering Rigor vs Modern Tech & Design Mega-Campus",
      feeComparison: "Mahindra University tuition is ₹4.5L - ₹5.0L/yr with ₹2L hostel vs Woxsen's ₹3.5L - ₹4.8L/yr tuition.",
      cutoffComparison: "Mahindra University relies primarily on competitive JEE Main / SAT scores (85-92%ile) vs Woxsen's WAT / TS EAMCET route.",
      verdict: "Mahindra University is the top choice for students seeking high-rigor French mathematical foundations, Tech Mahindra corporate backing, and higher placement packages (avg ₹9.1 LPA). Woxsen is favored for design-tech fusion and ultra-modern Bloomberg lab infrastructure."
    },
    customFaqs: [
      {
        q: "What is the total fee structure for B.Tech CSE at Mahindra University Hyderabad for 2025?",
        a: "At Mahindra University, the annual academic tuition fee for B.Tech Computer Science & Engineering (CSE) and Artificial Intelligence is ₹4,50,000 to ₹5,00,000 per year. Because B.Tech is a mandatory fully residential program, annual hostel and mess charges are ₹1,70,000 to ₹2,00,000 per year (including 4 meals a day, AC accommodation, Wi-Fi, and sports). One-time refundable caution deposit is ₹20,000 and admission fee is ₹20,000. Total annual expenditure ranges from ₹6.5 Lakh to ₹7.2 Lakh."
      },
      {
        q: "What are the entrance exams accepted for admission into Mahindra University?",
        a: "Mahindra University accepts three primary entrance routes for B.Tech admission: 1) JEE Main score (candidates must qualify in JEE Main with competitive percentiles); 2) SAT General test score (minimum 800+, competitive 1200+) or ACT composite score (minimum 18); 3) Direct merit pathway based on top-tier 10+2 PCM board percentage combined with a personal technical interview."
      },
      {
        q: "What is the average and highest salary package at Mahindra University?",
        a: "In the recent recruitment season, Mahindra University recorded a headline highest CTC of ₹45 to ₹52 LPA, with an impressive overall average CTC of ₹9.1 LPA. Approximately 85% of participating companies offered packages exceeding ₹6 LPA. Top recruiters include Amazon, Microsoft, Cisco, Dell, Schlumberger, Tech Mahindra, ZS Associates, and Linecraft AI."
      },
      {
        q: "Is hostel stay mandatory for B.Tech students at Mahindra University?",
        a: "Yes. B.Tech programs at Mahindra University are designed as intensive living-learning residential experiences based on the French École Centrale pedagogy. All undergraduate students are required to stay in campus hostels across their 4 years, enjoying world-class AC residential living, international dining, high-speed campus networks, and access to 24/7 research laboratories."
      },
      {
        q: "What scholarships are available at Mahindra University?",
        a: "Mahindra University provides generous merit-based scholarships for students admitted through the JEE Main channel. Candidates scoring above the 90th percentile in JEE Main can receive partial to 100% waivers on academic tuition fees and hostel charges for all four years, subject to maintaining academic GPA criteria."
      },
      {
        q: "How does the collaboration with École Centrale Paris benefit students?",
        a: "The École Centrale partnership brings French Grandes Écoles engineering pedagogy to Hyderabad, focusing on systems thinking, multi-domain problem solving, design engineering, and mandatory humanities and foreign languages (French/German). Students also have access to semester exchange programs in France, international dual degrees, and joint research ventures."
      },
      {
        q: "How can Konfido assist with Mahindra University admissions?",
        a: "Konfido provides 100% free guidance for parents and students targeting Mahindra University. We assist with JEE Main/SAT profile evaluation, scholarship eligibility analysis, application filing, interview preparation, and transparent admission completion."
      }
    ],
    contentStatus: "verified_live"
  },
  {
    id: 32,
    inputName: "Woxsen university",
    name: "Woxsen University",
    slug: "woxsen-university-hyderabad",
    website: "https://woxsen.edu.in",
    city: "Hyderabad (Sangareddy)",
    state: "Telangana",
    region: "South India",
    type: "Private State University (UGC Approved)",
    established: 2014,
    avgPackage: "8.61 LPA",
    highestPackage: "24 LPA",
    annualFee: "₹4,30,000 - ₹7,65,000",
    exams: ["WAT (Woxsen Aptitude Test)", "TS EAMCET", "JEE Main", "SAT", "CUET"],
    popularCourses: ["B.Tech CSE Core", "B.Tech CSE (AI & ML)", "B.Tech CSE (Data Science)", "B.Tech CSE (Blockchain, IoT & Cyber Security)"],
    featured: true,
    highlight: "200-Acre Architectural Mega-Campus • 100% Placements • Bloomberg Lab • Global AACSB/AMBA Memberships",
    overview: "Woxsen University is one of India's most modern multidisciplinary private universities, sprawling across 200 acres in Sangareddy near Hyderabad. Renowned for futuristic infrastructure, Bloomberg Finance Labs, AI & Robotics Centers, and design-tech integration, Woxsen offers global-standard residential B.Tech programs backed by international corporate partnerships.",
    metaTitle: "Woxsen University Hyderabad B.Tech Admissions 2025: Fees, WAT, Placements & Hostel | Konfido",
    metaDescription: "Complete guide to Woxsen University Hyderabad B.Tech admissions 2025. Verified tuition & residential fees (₹17.2L tuition / 4-yr), WAT exam cutoffs, TS EAMCET routes, and 100% placement reports.",
    targetKeywords: [
      "Woxsen University B.Tech fees 2025",
      "Woxsen University management quota direct admission",
      "Woxsen University WAT cutoff exam pattern",
      "Woxsen University B.Tech average package 2024",
      "Woxsen University hostel fees AC non-AC",
      "Woxsen University Hyderabad B.Tech CSE review"
    ],
    detailedOverview: [
      "Established in 2014 by visionary entrepreneur Praveen K. Pula, Woxsen University initially achieved international prominence through its School of Business before securing full legislative university status under the Telangana State Private Universities Act in 2020. Today, the university holds prestigious memberships in premier global accrediting bodies, including EFMD Global, AACSB, and AMBA, with statutory approvals from the UGC and AICTE.",
      "Woxsen's School of Technology rejects traditional rote engineering memorization in favor of Applied Experiential Learning. Undergraduates master core computer science and mathematical algorithms while simultaneously engaging in specialized industry tracks—such as Generative AI, natural language processing, enterprise blockchain protocols, autonomous robotics, and cloud security architectures—from the second semester onward.",
      "Spanning 200 acres of award-winning eco-architectural excellence in Kamkole, Sangareddy, the campus features one of South Asia's largest Bloomberg Finance Labs with 20 terminals, an advanced AI & Robotics Research Lab equipped with high-compute GPU clusters, a 3D Printing Prototyping FabLab, a Behavioural Analytics Lab, and state-of-the-art design studios.",
      "Operating as a mandatory fully residential campus, Woxsen fosters a vibrant collegiate environment for students from across India and over 15 foreign countries. The campus boasts 'The League'—an Olympic-level sporting complex featuring floodlit cricket stadiums, FIFA-standard football turf, tennis courts, and swimming pools—alongside international academic exchange agreements with over 100 partner institutions across Europe, the US, and Asia."
    ],
    seatMatrix: [
      { branch: "B.Tech Computer Science & Engineering (CSE Core)", totalSeats: 240, catASeats: 168, catBSeats: 72 },
      { branch: "B.Tech CSE (Artificial Intelligence & Machine Learning)", totalSeats: 180, catASeats: 126, catBSeats: 54 },
      { branch: "B.Tech CSE (Data Science)", totalSeats: 120, catASeats: 84, catBSeats: 36 },
      { branch: "B.Tech CSE (Blockchain, IoT & Cyber Security)", totalSeats: 120, catASeats: 84, catBSeats: 36 }
    ],
    detailedFees: {
      tuitionConvenor: "₹4,30,000 / year (₹17,20,000 total 4-year tuition & learning resources)",
      tuitionManagement: "₹4,30,000 / year (Merit-based institutional admission via WAT/JEE)",
      tuitionNRI: "$8,000 / year (International & NRI Sponsored Category)",
      admissionFee: "₹50,000 (One-time admission commitment & registration fee)",
      hostelAC: "₹3,98,500 / year (Premium Plan: AC room, 4-time dining, sports & laundry)",
      hostelNonAC: "₹3,35,000 / year (Standard Plan: Non-AC room, full dining & amenities)",
      cautionDeposit: "₹20,000 (Refundable institutional deposit)",
      transportFee: "N/A (Mandatory residential campus; weekend city shuttles available)",
      tafrcNote: "Woxsen University B.Tech is a mandatory fully residential program. Total 4-year cost (tuition + residential) is ₹30.60 Lakhs for Standard Non-AC plan and ₹33.14 Lakhs for Premium AC plan. Merit scholarships up to 50% tuition waiver are awarded based on WAT score, JEE Main percentile, or TS EAMCET ranks."
    },
    cutoffHistory: [
      { branch: "B.Tech Computer Science & Engg (CSE)", rank2024: "75% + PI", rank2023: "70% + PI", category: "WAT (Woxsen Aptitude Test)" },
      { branch: "B.Tech CSE (AI & Machine Learning)", rank2024: "70% + PI", rank2023: "68% + PI", category: "WAT General Merit" },
      { branch: "JEE Main National Pathway", rank2024: "75 - 85 %ile", rank2023: "72 - 82 %ile", category: "JEE Main General" },
      { branch: "TS EAPCET (Convenor Channel)", rank2024: "18,000 - 24,000", rank2023: "16,000 - 22,000", category: "TS EAPCET State Rank" },
      { branch: "SAT International Channel", rank2024: "1100+ Score", rank2023: "1050+ Score", category: "SAT General (All Branches)" }
    ],
    detailedPlacements: {
      avgCTC: "₹8.61 LPA",
      medianCTC: "₹8.0 LPA (Top 20% Avg: ₹11.50 LPA)",
      highestDomesticCTC: "₹24 LPA",
      highestInternationalCTC: "₹24 LPA",
      placementPercentage: "100% Placement Record (Inaugural B.Tech Batch)",
      totalOffers: "100% Placed across 120+ Corporate Partners",
      topRecruiters: [
        "Morgan Stanley", "Deloitte", "Amazon", "KPMG", "TCS",
        "Tech Mahindra", "Standard Chartered", "Aditya Birla",
        "Piramal", "Zomato", "FactSet", "Schneider Electric"
      ]
    },
    directAdmissionSteps: [
      {
        step: "01",
        title: "Eligibility Verification",
        desc: "Passed 10+2 Intermediate or CBSE/ICSE equivalent examination with minimum 60% aggregate in Physics, Chemistry, and Mathematics (PCM)."
      },
      {
        step: "02",
        title: "Online Application & Entrance Selection",
        desc: "Register at woxsen.edu.in and select preferred entrance channel: Woxsen Aptitude Test (WAT), JEE Main, TS EAMCET, or SAT."
      },
      {
        step: "03",
        title: "Woxsen Aptitude Test (WAT)",
        desc: "Take the 90-minute online WAT evaluation assessing quantitative ability, analytical logic, English verbal comprehension, and tech aptitude."
      },
      {
        step: "04",
        title: "Personal Interview & Psychometric Evaluation",
        desc: "Appear for personal video interview with faculty panel evaluating technical passion, communication, and cognitive problem-solving."
      },
      {
        step: "05",
        title: "Provisional Admission & Fee Remittance",
        desc: "Receive formal admission offer letter with merit scholarship entitlement and remit registration fee to lock preferred CSE specialization."
      }
    ],
    comparisonPeer: {
      name: "Mahindra University, Hyderabad",
      slug: "mahindra-university-hyderabad",
      tagline: "Modern Tech & Design Ecosystem vs French Engineering Rigor",
      feeComparison: "Woxsen 4-year total is ₹30.6L - ₹33.1L vs Mahindra University's ₹26L - ₹28L total outlay.",
      cutoffComparison: "Woxsen admits through WAT and multi-channel entrance tests vs Mahindra University's heavy JEE Main emphasis.",
      verdict: "Woxsen is unbeatable for students seeking a massive 200-acre lifestyle campus, Bloomberg labs, and design-tech interdisciplinary pedagogy. Mahindra University is preferred for students wanting high-math European engineering theory and Tech Mahindra group backing."
    },
    customFaqs: [
      {
        q: "What is the total 4-year fee for B.Tech CSE at Woxsen University Hyderabad for 2025?",
        a: "At Woxsen University, B.Tech is a mandatory fully residential program. The 4-year academic tuition and learning resource fee is ₹17,20,000 (~₹4,30,000 per year). Mandatory food and hostel accommodation for 4 years is ₹13,40,000 for the Standard Non-AC plan and ₹15,94,000 for the Premium AC plan. The grand total for 4 years is ₹30,60,000 (Standard) or ₹33,14,000 (Premium AC), which covers tuition, AC hostel, 4-time dining, laundry access, and world-class sports facilities."
      },
      {
        q: "What is the admission process for B.Tech at Woxsen University?",
        a: "Admissions follow a structured 3-step evaluation: 1) Submission of online application with 10+2 PCM scores (minimum 60% aggregate); 2) Taking the Woxsen Aptitude Test (WAT) or submitting valid JEE Main, TS EAMCET, or SAT scores; 3) Personal Interview (PI) with university faculty assessing communication, analytical aptitude, and domain interest."
      },
      {
        q: "What is the placement record for B.Tech at Woxsen University?",
        a: "Woxsen achieved a 100% placement rate for its inaugural B.Tech graduating cohort. The highest package reached ₹24 LPA, the overall average CTC was ₹8.61 LPA, and the top 20% of the batch secured an average package of ₹11.50 LPA. Prominent recruiters include Morgan Stanley, Deloitte, Amazon, KPMG, TCS, Standard Chartered, and Tech Mahindra."
      },
      {
        q: "Are scholarships available for B.Tech students at Woxsen University?",
        a: "Yes. Woxsen University awards merit scholarships of up to 50% tuition fee waiver for B.Tech candidates based on composite scores in the WAT exam, JEE Main percentiles, or TS EAMCET ranks. Sports scholarships up to 100% tuition waiver are also offered to national and state-level athletes."
      },
      {
        q: "What specialized labs and infrastructure does Woxsen offer for CSE students?",
        a: "Woxsen features some of the country's most advanced learning laboratories, including a 20-terminal Bloomberg Finance Lab, an AI & Robotics Center equipped with high-compute GPU rigs, a 3D Printing & Prototyping FabLab, a Behavioural Analytics Lab, and 'The League'—an Olympic-level multi-sport complex."
      },
      {
        q: "Where is Woxsen University located and is hostel stay mandatory?",
        a: "Woxsen University is situated on a sprawling 200-acre campus in Kamkole, Sadasivpet in Sangareddy District, approximately 65 km from central Hyderabad. Due to the intensive project-based curriculum and round-the-clock lab access, campus residence is 100% mandatory for all B.Tech students."
      },
      {
        q: "How can Konfido assist with Woxsen University admission?",
        a: "Konfido offers 100% free personalized admission advisory. We guide candidates through WAT exam preparation, scholarship application filing, interview coaching, and seamless fee documentation directly with Woxsen admissions directors."
      }
    ],
    contentStatus: "verified_live"
  },
  {
    id: 33,
    inputName: "kLU",
    name: "Koneru Lakshmaiah Education Foundation (KL University)",
    slug: "kl-university",
    website: "https://www.kluniversity.in",
    city: "Vijayawada / Hyderabad",
    state: "Andhra Pradesh & Telangana",
    region: "South India",
    nirfRank: 28,
    naacGrade: "A++",
    type: "Deemed to be University",
    established: 1980,
    avgPackage: "9.7 LPA",
    highestPackage: "58 LPA",
    annualFee: "₹2,60,000 - ₹3,90,000",
    exams: ["KLEEE", "AP EAPCET", "JEE Main", "Mgmt Quota"],
    popularCourses: ["B.Tech CSE", "AI & Data Science", "ECE", "Biotechnology"],
    featured: true,
    highlight: "NIRF #28 • NAAC A++ (3.57/4) • 100% Placement Record",
    overview: "KL University is recognized as Andhra Pradesh's #1 private university, famous for strict coding certifications and massive corporate recruitment."
  },
  {
    id: 34,
    inputName: "githam university",
    name: "GITAM (Deemed to be University)",
    slug: "gitam-university",
    website: "https://www.gitam.edu",
    city: "Visakhapatnam / Hyderabad / Bengaluru",
    state: "AP, Telangana & Karnataka",
    region: "South India",
    nirfRank: 67,
    naacGrade: "A++",
    type: "Deemed to be University",
    established: 1980,
    avgPackage: "7.6 LPA",
    highestPackage: "46.5 LPA",
    annualFee: "₹2,40,000 - ₹3,60,000",
    exams: ["GAT", "JEE Main", "Direct Admission"],
    popularCourses: ["B.Tech CSE", "Cyber Security", "Data Science", "Aero"],
    featured: true,
    highlight: "Tri-Campus (Vizag, Hyd, Blr) • NAAC A++ • 40+ Yrs Legacy",
    overview: "A prestigious pan-South Indian university with coastal and metropolitan campuses, international student exchange, and multi-sector corporate tie-ups."
  },
  {
    id: 35,
    inputName: "Sanskrithi university",
    name: "Sanskriti University",
    slug: "sanskriti-university",
    website: "https://www.sanskriti.edu.in",
    city: "Mathura",
    state: "Uttar Pradesh",
    region: "North India",
    type: "Private University",
    established: 2016,
    avgPackage: "5.5 LPA",
    highestPackage: "54 LPA",
    annualFee: "₹1,20,000 - ₹1,90,000",
    exams: ["SUNET", "JEE Main"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Mechanical", "Civil"],
    featured: false,
    highlight: "Strategic NCR Location • Focus on Patents and Innovation",
    overview: "Known for affordable engineering education, patent filings, and multi-skill development programs in Uttar Pradesh."
  },
  {
    id: 36,
    inputName: "bennet university",
    name: "Bennett University",
    slug: "bennett-university-greater-noida",
    website: "https://www.bennett.edu.in",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    region: "North India",
    type: "Private University",
    established: 2016,
    avgPackage: "11.1 LPA",
    highestPackage: "1.2 CPA",
    annualFee: "₹3,60,000 - ₹4,80,000",
    exams: ["JEE Main", "SAT", "Direct Admission"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Cybersecurity", "Blockchain"],
    featured: true,
    highlight: "Times Group Initiative • Elite Placement Track • 1.2 CPA Top",
    overview: "Founded by The Times of India Group with academic partnership with Georgia Tech, Bennett offers premium corporate access across Delhi-NCR."
  },
  {
    id: 37,
    inputName: "ITM university",
    name: "ITM University",
    slug: "itm-university-gwalior",
    website: "https://itmuniversity.ac.in",
    city: "Gwalior",
    state: "Madhya Pradesh",
    region: "Central India",
    naacGrade: "A",
    type: "Private University",
    established: 1997,
    avgPackage: "5.6 LPA",
    highestPackage: "45 LPA",
    annualFee: "₹1,30,000 - ₹2,10,000",
    exams: ["ITM NEST", "JEE Main"],
    popularCourses: ["B.Tech CSE", "Data Science", "Mechanical", "Civil"],
    featured: false,
    highlight: "NAAC A Accredited • 100+ Acre Green Campus",
    overview: "One of Central India's oldest private institutions with strong multidisciplinary research culture and consistent student placements."
  },
  {
    id: 38,
    inputName: "ST Marys university",
    name: "St. Mary's Group of Institutions",
    slug: "st-marys-group-hyderabad",
    website: "https://stmarysgroup.com",
    city: "Hyderabad (Deshmukhi)",
    state: "Telangana",
    region: "South India",
    naacGrade: "A",
    type: "AICTE Approved / Affiliated to JNTUH",
    established: 1996,
    avgPackage: "4.8 LPA",
    highestPackage: "20 LPA",
    annualFee: "₹60,000 - ₹1,60,000",
    exams: ["TG EAPCET (SMED / SMCD)", "JEE Main", "Category-B Direct Admission"],
    popularCourses: ["B.Tech CSE Core", "CSE (AI & Machine Learning)", "CSE (Data Science)", "CSE (Cyber Security)", "ECE", "EEE", "Mechanical Engineering"],
    featured: true,
    highlight: "NAAC 'A' Grade • 120-Acre Campus • Affordable Fee (₹60K Convenor) • 100% ePASS Eligible",
    overview: "St. Mary's Group of Institutions Hyderabad (established in 1996 by Rev. K.V.K. Rao under the Joseph Sriharsha & Mary Indraja Educational Society) is an established engineering education institution spread across an expansive 120-acre lush green campus in Deshmukhi, Pochampally Mandal, near Ramoji Film City on the eastern outskirts of Hyderabad. Approved by AICTE, accredited with a prestigious 'A' Grade by NAAC, and affiliated to Jawaharlal Nehru Technological University Hyderabad (JNTUH), St. Mary's is recognized for providing accessible, high-ROI engineering education backed by advanced technology labs, comprehensive bus transportation, and steady IT corporate placements.",
    metaTitle: "St. Mary's Group of Institutions Hyderabad Admissions 2025: Fees, Category-B Quota, Cutoffs & Placements | Konfido",
    metaDescription: "Explore St. Mary's Group of Institutions Hyderabad (Deshmukhi) B.Tech admissions 2025. Verified TAFRC convenor fee (₹60K), Category-B direct admission, SMED/SMCD EAPCET cutoffs, 120-acre campus, and placements.",
    targetKeywords: [
      "St Marys Group of Institutions Hyderabad fee structure 2025",
      "St Marys Deshmukhi management quota admission",
      "SMED TG EAPCET cutoff closing ranks",
      "St Marys Engineering College Hyderabad placements and recruiters",
      "direct admission in St Marys Hyderabad without EAMCET",
      "St Marys Group of Institutions B.Tech CSE fees"
    ],
    detailedOverview: [
      "Founded in 1996 under the visionary stewardship of Rev. K.V.K. Rao, the Joseph Sriharsha & Mary Indraja Educational Society (JSMI) established the St. Mary's Group of Institutions to democratize quality technical education across Telangana and Andhra Pradesh. Today, the flagship Hyderabad campus in Deshmukhi operates with approvals from the All India Council for Technical Education (AICTE), New Delhi, permanent affiliation with JNTUH, and accreditation with a prestigious 'A' Grade by NAAC. The institution operates as a Christian Minority institution while maintaining an inclusive, open merit admission culture across both Category-A and Category-B seats.",
      "The academic framework at St. Mary's is structured around rigorous outcome-based education (OBE) aligned with JNTUH academic regulations. Departments feature state-of-the-art computational centers equipped with licensed software tools, high-speed fiber-optic bandwidth, cloud computing virtualization labs, and embedded system prototyping bays. Specialized faculty teams conduct regular code-athons, technical symposia, and project-based skill bootcamps in Artificial Intelligence, Machine Learning, Data Analytics, and Full-Stack Web Development.",
      "The institution is set upon a serene, sprawling 120-acre self-contained campus in Deshmukhi, Pochampally Mandal (Yadadri Bhuvanagiri district), located off the Vijayawada National Highway near Ramoji Film City and Hayathnagar. The campus boasts majestic academic blocks, modern digital libraries, open-air amphitheaters, departmental seminar halls, indoor and outdoor sports grounds, and dedicated residential hostels. An extensive transport network of institutional buses seamlessly connects the Deshmukhi campus to all major parts of the Hyderabad-Secunderabad twin cities.",
      "St. Mary's Training and Placement Cell (TPC) bridges the classroom and industry through intensive campus recruitment training (CRT) beginning in the third year. Training modules cover algorithmic problem-solving, verbal reasoning, quantitative aptitude, and mock interviews. Annual placement seasons witness consistent hiring drives by leading IT service providers and core corporate recruiters including TCS, Infosys, Wipro, Cognizant, Tech Mahindra, Capgemini, Hexaware, and HCL Technologies, achieving top salary packages up to ₹20 LPA."
    ],
    seatMatrix: [
      { branch: "B.Tech Computer Science & Engineering (CSE Core)", totalSeats: 240, catASeats: 168, catBSeats: 72 },
      { branch: "B.Tech CSE (Artificial Intelligence & Machine Learning)", totalSeats: 180, catASeats: 126, catBSeats: 54 },
      { branch: "B.Tech CSE (Data Science)", totalSeats: 120, catASeats: 84, catBSeats: 36 },
      { branch: "B.Tech CSE (Cyber Security)", totalSeats: 60, catASeats: 42, catBSeats: 18 },
      { branch: "B.Tech Electronics & Communication Engineering (ECE)", totalSeats: 120, catASeats: 84, catBSeats: 36 },
      { branch: "B.Tech Electrical & Electronics Engineering (EEE)", totalSeats: 60, catASeats: 42, catBSeats: 18 },
      { branch: "B.Tech Mechanical Engineering (ME)", totalSeats: 60, catASeats: 42, catBSeats: 18 }
    ],
    detailedFees: {
      tuitionConvenor: "₹60,000 / year",
      tuitionManagement: "₹1,00,000 – ₹1,60,000 / year",
      tuitionNRI: "$2,500 / year",
      admissionFee: "₹8,500 (One-time University Registration, Exam & Identity Kit)",
      hostelAC: "₹95,000 – ₹1,10,000 / year (Air-conditioned 3-sharing with dining & Wi-Fi)",
      hostelNonAC: "₹65,000 – ₹85,000 / year (Standard 3/4-sharing with dining & laundry facilities)",
      cautionDeposit: "₹5,000 (Refundable one-time deposit)",
      transportFee: "₹24,000 – ₹30,000 / year (Bus fleet covering Dilsukhnagar, LB Nagar, Uppal, Hayathnagar & Secunderabad)",
      tafrcNote: "Tuition fees for Category-A (70% convenor seats) are fixed by the Telangana Admission and Fee Regulatory Committee (TAFRC) at approximately ₹60,000 per year, making it 100% covered under the Telangana State Government ePASS / RTF fee reimbursement scheme for eligible SC/ST/BC/EBC candidates. Category-B Management Quota seats (30%) are filled directly on merit."
    },
    cutoffHistory: [
      { branch: "B.Tech Computer Science & Engg (CSE Core)", rank2024: "58,400", rank2023: "54,200", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (AI & Machine Learning)", rank2024: "69,500", rank2023: "65,100", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (Data Science)", rank2024: "76,800", rank2023: "72,400", category: "OC Boys (General Merit)" },
      { branch: "B.Tech CSE (Cyber Security)", rank2024: "84,200", rank2023: "79,800", category: "OC Boys (General Merit)" },
      { branch: "B.Tech Electronics & Comm (ECE)", rank2024: "98,500", rank2023: "93,200", category: "OC Boys (General Merit)" },
      { branch: "B.Tech Electrical & Electronics (EEE)", rank2024: "115,000", rank2023: "108,500", category: "OC Boys (General Merit)" }
    ],
    detailedPlacements: {
      avgCTC: "₹4.8 LPA",
      medianCTC: "₹4.20 LPA",
      highestDomesticCTC: "₹20 LPA",
      highestInternationalCTC: "₹12 LPA",
      placementPercentage: "82.5%",
      totalOffers: "800+ Offers",
      topRecruiters: [
        "TCS", "Infosys", "Wipro", "Cognizant", "Tech Mahindra",
        "Capgemini", "HCL Technologies", "IBM", "Hexaware",
        "ICICI Bank", "Zomato", "Virtusa"
      ]
    },
    directAdmissionSteps: [
      {
        step: "01",
        title: "Registration & Application Submission",
        desc: "Submit an online registration form via stmarysgroup.com or visit the Deshmukhi campus / Hyderabad corporate office to submit your admission application."
      },
      {
        step: "02",
        title: "Eligibility & Academic Verification",
        desc: "Candidates must have passed 10+2 / Intermediate examination with Physics, Mathematics, and Chemistry with a minimum aggregate of 45% (40% for reserved categories). Scores in TG EAPCET or JEE Main are reviewed for merit allotment."
      },
      {
        step: "03",
        title: "Category-B / Direct Quota Seat Allotment",
        desc: "Candidates are counselled on branch availability across CSE Core and emerging specializations. Seats are allotted transparently based on academic merit and candidate preference."
      },
      {
        step: "04",
        title: "Provisional Admission & Fee Remittance",
        desc: "Upon selection, candidates receive a provisional seat allotment letter. Remit the admission registration charge and initial tuition installment to confirm admission."
      },
      {
        step: "05",
        title: "Document Verification & Enrolment",
        desc: "Submit original certificates: SSC marks memo, Intermediate marks memo, Transfer Certificate (TC), Study/Conduct certificates, Migration Certificate, Caste/Minority certificate (if applicable), and 6 passport photographs."
      }
    ],
    comparisonPeer: {
      name: "Sreenidhi Institute of Science & Technology (SNIST)",
      slug: "snist-sreenidhi-hyderabad",
      tagline: "High-ROI Budget Engineering vs Premium Autonomous Tier-1",
      feeComparison: "St. Mary's offers one of the most budget-friendly fee structures in the Hyderabad region at ₹60,000/year (Convenor) and ₹1.00L–₹1.60L/year (Category-B Management Quota), compared to SNIST's ₹1.33L/year (Convenor) and ₹2.50L–₹4.50L/year (Category-B). St. Mary's tuition is 100% covered under TS ePASS for eligible category students.",
      cutoffComparison: "SNIST CSE closes around rank 12,398 in TG EAPCET, requiring top-tier ranks, whereas St. Mary's CSE closes around rank 58,400. This provides accessible, high-quality computer engineering seats for students with ranks between 40,000 and 80,000.",
      verdict: "Opt for SNIST if you have achieved a top rank in TG EAPCET and seek tier-1 autonomous stature with marquee packages up to ₹40 LPA. Opt for St. Mary's if you seek highly affordable engineering education in Hyderabad, complete government fee reimbursement eligibility, an expansive 120-acre green campus, and accessible admission cutoffs."
    },
    customFaqs: [
      {
        q: "What are the TG EAPCET (TS EAMCET) counselling codes for St. Mary's Hyderabad?",
        a: "The primary TG EAPCET counselling codes for the St. Mary's campus in Deshmukhi are SMED (St. Mary's Group of Institutions) and SMCD (St. Mary's Engineering College). Candidates participating in state convenor counselling should enter these codes during web-option selection."
      },
      {
        q: "What is the fee structure for B.Tech CSE at St. Mary's Group of Institutions?",
        a: "The annual tuition fee for Category-A convenor quota seats is fixed by TAFRC at approximately ₹60,000 per year. For Category-B Management Quota and direct admission seats in B.Tech CSE and specialized emerging branches, annual fees range between ₹1,00,000 and ₹1,60,000 per year."
      },
      {
        q: "Is Telangana government fee reimbursement (TS ePASS) applicable at St. Mary's?",
        a: "Yes, eligible students from Telangana (SC, ST, BC, EBC, Minority) who secure admission through TG EAPCET convenor counselling under Category-A are eligible for 100% tuition fee reimbursement under the Telangana State Government ePASS / RTF scheme."
      },
      {
        q: "Does St. Mary's offer direct admission under Category-B Management Quota?",
        a: "Yes, 30% of the total sanctioned B.Tech seats are reserved under Category-B Management Quota. Candidates with a minimum of 45% aggregate in 10+2 PCM (40% for reserved categories) can apply directly without qualifying in EAMCET, subject to seat availability."
      },
      {
        q: "What is the placement record at St. Mary's Group of Institutions Hyderabad?",
        a: "St. Mary's maintains an active Training and Placement Cell that coordinates on-campus recruitment with IT and core engineering companies. Top packages reach up to ₹20 LPA, with an average salary package of ₹4.8 LPA. Major recruiters include TCS, Infosys, Wipro, Cognizant, Tech Mahindra, and Capgemini."
      },
      {
        q: "Where is St. Mary's Hyderabad campus located and how is transportation provided?",
        a: "The institution is situated on a 120-acre campus in Deshmukhi Village, Pochampally Mandal, near Ramoji Film City on the eastern outskirts of Hyderabad. The college operates a large fleet of buses connecting the campus to all parts of Hyderabad, including Dilsukhnagar, LB Nagar, Uppal, Kothapet, Hayathnagar, and Secunderabad."
      },
      {
        q: "What hostel facilities are available at St. Mary's Hyderabad?",
        a: "St. Mary's provides separate on-campus hostels for boys and girls. Facilities include 24/7 security, Wi-Fi, study halls, hygienic dining halls serving both vegetarian and non-vegetarian food, and sports areas. Annual hostel charges range between ₹65,000 and ₹85,000 for non-AC and ₹95,000 to ₹1,10,000 for AC rooms."
      }
    ],
    contentStatus: "verified_live"
  },
  {
    id: 39,
    inputName: "Mohanbabu university",
    name: "Mohan Babu University",
    slug: "mohan-babu-university-tirupati",
    website: "https://www.mbu.asia",
    city: "Tirupati",
    state: "Andhra Pradesh",
    region: "South India",
    type: "State Private University",
    established: 1992,
    avgPackage: "6.5 LPA",
    highestPackage: "60 LPA",
    annualFee: "₹1,50,000 - ₹2,80,000",
    exams: ["MBUCET", "AP EAPCET", "JEE Main", "Mgmt Quota"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Cybersecurity", "ECE"],
    featured: true,
    highlight: "Tirupati Temple City • 30+ Yrs Legacy • 60 LPA Top Offer",
    overview: "Spanning across a scenic campus in Tirupati, MBU combines rich legacy with modern technical centers and high-package placements."
  },
  {
    id: 40,
    inputName: "Annamacharya university",
    name: "Annamacharya University",
    slug: "annamacharya-university-rajampet",
    website: "https://annamacharyauniversity.edu.in",
    city: "Rajampet / Kadapa",
    state: "Andhra Pradesh",
    region: "South India",
    naacGrade: "A",
    type: "State Private University / Autonomous",
    established: 1998,
    avgPackage: "5.2 LPA",
    highestPackage: "25 LPA",
    annualFee: "₹90,000 - ₹1,75,000",
    exams: ["AP EAPCET", "Direct Admission"],
    popularCourses: ["B.Tech CSE", "Artificial Intelligence", "ECE", "Mech"],
    featured: false,
    highlight: "Rayalaseema Region's Top Engineering Hub • NAAC A",
    overview: "Annamacharya University has empowered rural and semi-urban students with top technical training, disciplined mentorship, and stable placements."
  },
  {
    id: 41,
    inputName: "JK Laxmipathi university",
    name: "JK Lakshmipat University (JKLU)",
    slug: "jklu-jaipur",
    website: "https://www.jklu.edu.in",
    city: "Jaipur",
    state: "Rajasthan",
    region: "North India",
    naacGrade: "A",
    type: "Private University",
    established: 2011,
    avgPackage: "7.8 LPA",
    highestPackage: "22.5 LPA",
    annualFee: "₹2,20,000 - ₹3,10,000",
    exams: ["JEE Main", "Direct 12th Merit"],
    popularCourses: ["B.Tech CSE", "Data Science", "Computer & Communication"],
    featured: false,
    highlight: "Promoted by JK Organisation (125 Yrs) • Project-Centric",
    overview: "JKLU delivers innovative curriculums designed in collaboration with international institutions and backed by the industrial powerhouse JK Group."
  },
  {
    id: 42,
    inputName: "NIMS University jaipur",
    name: "NIMS University Rajasthan",
    slug: "nims-university-jaipur",
    website: "https://www.nimsuniversity.org",
    city: "Jaipur",
    state: "Rajasthan",
    region: "North India",
    naacGrade: "A+",
    type: "Private State University",
    established: 2008,
    avgPackage: "6.0 LPA",
    highestPackage: "36 LPA",
    annualFee: "₹1,40,000 - ₹2,50,000",
    exams: ["NIMSEE", "JEE Main", "Direct Admission"],
    popularCourses: ["B.Tech CSE", "AI & Robotics", "Aerospace Engg", "Civil"],
    featured: false,
    highlight: "Mega Multi-Disciplinary Campus • 450+ Hospital Beds on Campus",
    overview: "One of Northern India's largest composite universities with massive hostel capacity and extensive technical departments."
  },
  {
    id: 43,
    inputName: "SGVU",
    name: "Suresh Gyan Vihar University",
    slug: "sgvu-jaipur",
    website: "https://www.gyanvihar.org",
    city: "Jaipur",
    state: "Rajasthan",
    region: "North India",
    naacGrade: "A+",
    type: "Private State University",
    established: 2008,
    avgPackage: "5.5 LPA",
    highestPackage: "24 LPA",
    annualFee: "₹1,20,000 - ₹2,10,000",
    exams: ["SGVU EEE", "JEE Main"],
    popularCourses: ["B.Tech CSE", "Cloud Computing", "AI", "Renewable Energy"],
    featured: false,
    highlight: "NAAC A+ Rajasthan's First Private University • Research Labs",
    overview: "SGVU focuses heavily on renewable energy, advanced software engineering, and industry-sponsored laboratory work."
  },
  {
    id: 44,
    inputName: "chandigarh university",
    name: "Chandigarh University (CU)",
    slug: "chandigarh-university-mohali",
    website: "https://www.cuchd.in",
    city: "Mohali / Chandigarh",
    state: "Punjab",
    region: "North India",
    nirfRank: 38,
    naacGrade: "A+",
    type: "Private State University",
    established: 2012,
    avgPackage: "9.5 LPA",
    highestPackage: "1.7 CPA (International)",
    annualFee: "₹2,10,000 - ₹3,20,000",
    exams: ["CUCET", "JEE Main", "Direct Admission"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Data Science", "Automobile"],
    featured: true,
    highlight: "NIRF #38 • QS Asia Ranked • 900+ Top Recruiters",
    overview: "Chandigarh University is one of India's fastest-growing mega-universities, holding national placement records and massive international exchange networks."
  },
  {
    id: 45,
    inputName: "chithkara university",
    name: "Chitkara University",
    slug: "chitkara-university-punjab",
    website: "https://www.chitkara.edu.in",
    city: "Rajpura / Chandigarh",
    state: "Punjab",
    region: "North India",
    nirfRank: 78,
    naacGrade: "A+",
    type: "Private State University",
    established: 2002,
    avgPackage: "8.5 LPA",
    highestPackage: "1.11 CPA",
    annualFee: "₹2,00,000 - ₹3,10,000",
    exams: ["JEE Main", "Direct 12th Merit"],
    popularCourses: ["B.Tech CSE", "Full Stack Development", "Cybersecurity"],
    featured: true,
    highlight: "NIRF Top 80 • 100% Campus Placement • Global Study Programs",
    overview: "Chitkara is celebrated for practical pedagogy, Apple-certified labs, high code-competency, and excellent placements in IT giants."
  },
  {
    id: 46,
    inputName: "karnawathi university",
    name: "Karnavati University",
    slug: "karnavati-university-gandhinagar",
    website: "https://karnavatiuniversity.edu.in",
    city: "Gandhinagar",
    state: "Gujarat",
    region: "West India",
    type: "Private State University",
    established: 2017,
    avgPackage: "6.0 LPA",
    highestPackage: "25 LPA",
    annualFee: "₹1,60,000 - ₹2,70,000",
    exams: ["KUAT", "JEE Main", "GUJCET"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Defense Tech", "Cyber Security"],
    featured: false,
    highlight: "State Capital Location • Interdisciplinary Innovation Hub",
    overview: "Known for combining design, technology, and management in Gandhinagar with modern innovation labs."
  },
  {
    id: 47,
    inputName: "Saveetha university",
    name: "Saveetha Institute of Medical and Technical Sciences",
    slug: "saveetha-university-chennai",
    website: "https://www.saveetha.com",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South India",
    nirfRank: 27,
    naacGrade: "A++",
    type: "Deemed to be University",
    established: 2005,
    avgPackage: "6.8 LPA",
    highestPackage: "40 LPA",
    annualFee: "₹1,80,000 - ₹3,00,000",
    exams: ["Saveetha Entrance", "Direct Quota"],
    popularCourses: ["B.Tech CSE", "Bio-Medical Engg", "AI & ML", "ECE"],
    featured: false,
    highlight: "NIRF Top 30 Overall • NAAC A++ (Highest Score in TN)",
    overview: "Saveetha's school of engineering follows flexible credit system (SEC) with strong publications and high campus placement ratios."
  },
  {
    id: 48,
    inputName: "MGR university",
    name: "Dr. M.G.R. Educational and Research Institute",
    slug: "dr-mgr-university-chennai",
    website: "https://www.drmgrdu.ac.in",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South India",
    naacGrade: "A+",
    type: "Deemed to be University",
    established: 1988,
    avgPackage: "5.8 LPA",
    highestPackage: "30 LPA",
    annualFee: "₹1,40,000 - ₹2,50,000",
    exams: ["Direct Admission", "Management Quota"],
    popularCourses: ["B.Tech CSE", "AI & Data Analytics", "Mechanical", "Civil"],
    featured: false,
    highlight: "Pioneer in Private Higher Ed • Central Chennai Campus",
    overview: "A well-known university in Chennai with extensive hospital, dental, and engineering campuses providing stable placements."
  },
  {
    id: 49,
    inputName: "Gurukashi university",
    name: "Guru Kashi University",
    slug: "guru-kashi-university-punjab",
    website: "https://gurukashiuniversity.in",
    city: "Talwandi Sabo",
    state: "Punjab",
    region: "North India",
    naacGrade: "A++",
    type: "Private State University",
    established: 2011,
    avgPackage: "4.8 LPA",
    highestPackage: "18 LPA",
    annualFee: "₹1,00,000 - ₹1,80,000",
    exams: ["Direct 12th Merit", "Entrance Test"],
    popularCourses: ["B.Tech CSE", "Agriculture Engg", "Mechanical"],
    featured: false,
    highlight: "NAAC A++ • Highly Affordable Engineering in Punjab",
    overview: "Providing quality higher technical and agricultural education in Punjab with modern workshop facilities and student hostels."
  },
  {
    id: 50,
    inputName: "LPU",
    name: "Lovely Professional University (LPU)",
    slug: "lovely-professional-university-lpu",
    website: "https://www.lpu.in",
    city: "Phagwara / Jalandhar",
    state: "Punjab",
    region: "North India",
    nirfRank: 50,
    naacGrade: "A++",
    type: "Private State University",
    established: 2005,
    avgPackage: "8.5 LPA",
    highestPackage: "3 CPA (International)",
    annualFee: "₹1,90,000 - ₹3,20,000",
    exams: ["LPUNEST", "JEE Main", "Direct Quota"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Data Science", "Cybersecurity", "ECE"],
    featured: true,
    highlight: "India's Largest Single Campus (600+ Acres) • 1,000+ Recruiters",
    overview: "LPU boasts one of India's biggest university placement cells with students placed in Google, Apple, Microsoft, and leading multinational companies."
  },
  {
    id: 51,
    inputName: "sanskaran university",
    name: "Sanskaram University",
    slug: "sanskaram-university-haryana",
    website: "https://sanskaramuniversity.ac.in",
    city: "Jhajjar / NCR",
    state: "Haryana",
    region: "North India",
    type: "Private State University",
    established: 2023,
    avgPackage: "5.0 LPA",
    highestPackage: "18 LPA",
    annualFee: "₹1,10,000 - ₹1,90,000",
    exams: ["Direct Admission", "12th Merit"],
    popularCourses: ["B.Tech CSE", "AI & ML", "Mechanical", "Civil"],
    featured: false,
    highlight: "Rapidly Expanding NCR University • Practical Tech Labs",
    overview: "Focused on holistic development, modern classroom technologies, and career-oriented skill pathways near Delhi-NCR."
  }
];
