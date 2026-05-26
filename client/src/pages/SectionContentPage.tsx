import { Helmet } from "react-helmet-async";
import { Link, Navigate, useLocation } from "react-router-dom";
import { SECTION_PAGES } from "../data/navigation";
import founderImage from "../assets/images/founder.png";
import buildingImage from "../assets/images/building.png";
import academicCalendar2023Url from "../assets/pdf/Academic Calender-2023-24.pdf?url";
import academicCalendar2024Url from "../assets/pdf/ACADEMIC CALENDER 2024-2025.pdf?url";
import studentFeedbackSsrUrl from "../assets/pdf/Students Feedback 2025-26 SSR.pdf?url";
import studentFeedbackSsr1Url from "../assets/pdf/Students Feedback 2025-26 SSR (1).pdf?url";
import studentFeedbackSsr2Url from "../assets/pdf/Students Feedback 2025-26 SSR (2).pdf?url";

const CDC_ROLES = [
  {
    title: "Strategic Planning & Development",
    points: [
      "Formulates long-term and short-term development plans for academic, infrastructural, and institutional growth.",
      "Recommends measures to improve quality of education and student services.",
    ],
  },
  {
    title: "Academic Enhancement",
    points: [
      "Suggests new academic programs and ensures relevance of existing courses in alignment with industry needs.",
      "Supports implementation of effective teaching-learning methods and faculty development programs.",
    ],
  },
  {
    title: "Infrastructure & Facilities",
    points: [
      "Proposes upgrades and additions to college infrastructure and learning resources.",
      "Ensures optimal use of resources for student and staff welfare.",
    ],
  },
  {
    title: "Financial Planning",
    points: [
      "Recommends annual financial estimates and monitors proper utilization of funds.",
      "Assists in generating financial support through grants, donations, or CSR partnerships.",
    ],
  },
  {
    title: "Stakeholder Engagement",
    points: [
      "Encourages collaboration with industry, alumni, and other educational institutions.",
      "Strengthens community engagement and outreach activities.",
    ],
  },
  {
    title: "Student Development",
    points: [
      "Supports initiatives for skill development, personality growth, and career guidance.",
      "Enhances opportunities for placements, internships, and higher education.",
    ],
  },
  {
    title: "Governance & Transparency",
    points: [
      "Assists in framing policies for effective governance, discipline, and inclusiveness.",
      "Reviews and monitors the progress of college initiatives and ensures accountability.",
    ],
  },
];

const CDC_MEMBERS = [
  { name: "Hon. Shri Sudhir Y. Mandke", designation: "Founder & Chairman, MHHF", role: "Chairperson CDC" },
  { name: "Mrs. Madhuri Mandke", designation: "Secretary MHHF", role: "Representative - Social Field" },
  { name: "Mr. Indraneil Mandke", designation: "Trustee", role: "Industry Representative" },
  { name: "Mrs. Radhika Godbole", designation: "Managing Director, MHHF", role: "Management Member" },
  { name: "Dr. Ambadas T. Bhosale", designation: "Principal", role: "Member Secretary" },
  { name: "Prof. Amruta Bhide", designation: "Assistant Professor", role: "IQAC Co-ordinator" },
  { name: "Prof. Vaishali Karkare", designation: "Assistant Professor", role: "Teaching Representative" },
  { name: "Dr. Sanjay Patankar", designation: "Assistant Professor", role: "Teaching Representative" },
  { name: "Ms. Surekha Padwale", designation: "Admin. Officer", role: "Non-Teaching Representative" },
  { name: "Ms. Dhanashree Hulawale", designation: "Student", role: "Alumni Representative" },
];

const COMMITTEE_ADVANTAGES = [
  {
    title: "Expertise",
    description:
      "Committees bring together people with relevant expertise from different parts of the organization so focused groups can make informed decisions.",
  },
  {
    title: "Efficiency",
    description: "Committees streamline meetings by delegating tasks and examining complex issues in detail.",
  },
  {
    title: "Oversight",
    description: "Committees provide a closer look at critical areas such as risk management, financial reporting, and governance.",
  },
  {
    title: "Problem-solving",
    description: "Committees provide a logical forum for solving problems and presenting multiple points of view.",
  },
  {
    title: "Teamwork",
    description: "Committee participation fosters team spirit and mutual understanding between employees and stakeholders.",
  },
  {
    title: "Leadership training",
    description: "Committees can be a training ground for future leaders to test and refine their skills and abilities.",
  },
  {
    title: "Developing skills",
    description:
      "Committees help students develop leadership, communication, time management, vigilance, spontaneity, and useful networks.",
  },
];

const STATUTORY_COMMITTEES = [
  "College Development Committee",
  "Internal Quality Assurance Cell",
  "Anti-Ragging Committee",
  "Grievance Redressal Committee",
  "Internal Complaints Committee",
  "Examination Committee",
  "Admission Committee",
  "Student Welfare Committee",
];

const LIBRARY_STATS = [
  { label: "Books", value: "3000+" },
  { label: "Magazines / Periodicals / Journals", value: "20" },
  { label: "Rare or Special Books", value: "20" },
  { label: "Computers with Internet", value: "02" },
];

const LIBRARY_SERVICES = [
  "OPAC (Online Public Access Catalogue) through VRIDHHI Software is implemented to check the availability and status of library material.",
  "All books in the library have barcodes for referencing.",
  "Computer and Internet facility is provided to staff and students.",
  "Facility to print and photocopy study material is available to students, if required.",
  "Latest editions of competitive examination books are made available in the library.",
  "Daily newspapers in English and Marathi are available for users.",
  "Drinking water facility is provided.",
  "Display stands allow users to know the latest arrivals of books and magazines.",
  "Every year Saraswati Pooja and Vachan Prerna Din (15th Oct) are celebrated in the library.",
  "Student and faculty feedback is welcomed and acted upon to continuously improve library services.",
];

const LIBRARY_RULES = [
  "Student ID and own library card are compulsory to get books issued. Library card is non-transferable.",
  "Maximum 2 books will be issued against library card for 7 days only.",
  "Late charge of 1 rupee per day per book will be charged after 7 days.",
  "Periodicals, journals and reference material will be issued against ID card.",
  "If any book is damaged or lost, student will have to replace the same at own cost.",
  "Eatables and water bottles are not allowed inside the library.",
  "Silence, decorum and discipline must be maintained in the library.",
  "Readers should ensure that cell phones are in switch off or silent mode at all times in the library.",
  "Online and offline computer services are for academic use only and not to be used for commercial or personal purposes.",
  "Students must follow library rules set from time to time. Failing to do so may result in suspension, cancellation, or permanent blacklisting from admission to and borrowing of books from the library.",
];

const INFRASTRUCTURE_FACILITIES = [
  {
    title: "Central & Convenient Location",
    description:
      "Right next to upcoming metro station, with bus stop exactly opposite the premises and a convenient location near Paud Phata Flyover.",
  },
  {
    title: "Library & Knowledge Resource Center",
    description:
      "An extensive library which houses books, magazines, periodicals and learning resources that keep students gainfully engaged.",
  },
  {
    title: "Spacious and Airy Classrooms",
    description: "A clean and comfortable environment to support high productivity for every student.",
  },
  {
    title: "Boys & Girls Common Rooms",
    description: "Separate common rooms for boys and girls to relax between busy academic schedules.",
  },
  {
    title: "Computer Lab",
    description:
      "A spacious computer laboratory equipped with latest computers, software, high speed internet facility, server and UPS backup.",
  },
  {
    title: "Gymnasium & Games Room",
    description:
      "A well-equipped gymnasium and indoor games room where students can build physical fitness and sportsman spirit.",
  },
  {
    title: "AV and Presentation Room",
    description: "A dedicated audio-visual room to make presentations more interesting, effective and engaging.",
  },
  {
    title: "Seminar Hall",
    description:
      "A seminar hall with seating capacity of 100. Seminars, lectures and workshops are conducted here regularly.",
  },
];

const IDP_LIST_ITEMS = [
  {
    title: "List Title",
    description:
      "This is a Paragraph. Click on \"Edit Text\" or double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.",
  },
  {
    title: "List Title",
    description:
      "This is a Paragraph. Click on \"Edit Text\" or double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.",
  },
  {
    title: "List Title",
    description:
      "This is a Paragraph. Click on \"Edit Text\" or double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.",
  },
  {
    title: "List Title",
    description:
      "This is a Paragraph. Click on \"Edit Text\" or double click on the text box to start editing the content and make sure to add any relevant details or information that you want to share with your visitors.",
  },
];

const COURSE_PROGRAMS = [
  {
    title: "Bachelor of Commerce (B.Com)",
    linkLabel: "Know more about B.Com",
    href: "/commerce",
    description:
      "A 3-year undergraduate program that develops core knowledge in accounting, finance, business law, and economics, with opportunities for higher studies and careers in corporate, banking, and entrepreneurship.",
  },
  {
    title: "Bachelor of Business Administration (BBA)",
    linkLabel: "Know more about BBA",
    href: "/academics/bba",
    description:
      "A 3-year professional program designed for future leaders and managers, with focus on business strategy, communication, marketing, HR, projects, internships, and industry exposure.",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    linkLabel: "Know more about BCA",
    href: "/academics/bca",
    description:
      "A 3-year program for students passionate about information technology, software development, programming, databases, and emerging technologies.",
  },
];

const WHY_MANDKE = [
  "SPPU-Affiliated, AICTE Approved & Government Recognized Programs",
  "Industry-Oriented Curriculum",
  "Placement Support & Career Guidance",
  "Skill Development Beyond Academics",
  "Student-Centric Environment with Extracurriculars",
];

const NEP_FEATURES = [
  {
    title: "Choice-Based Credit System (CBCS)",
    description: "Students can select subjects across disciplines to design a personalized learning pathway.",
  },
  {
    title: "Multiple Entry & Exit Options",
    description: "Flexibility to complete education at different stages with recognized certifications.",
  },
  {
    title: "Skill Development Focus",
    description: "Integration of employability skills, internships, projects, and value-added courses.",
  },
  {
    title: "Multidisciplinary Learning",
    description: "Opportunities to combine Commerce, Management, IT, and other streams.",
  },
  {
    title: "Holistic Development",
    description: "Equal emphasis on academics, research, innovation, extracurriculars, and ethics.",
  },
];

const COURSE_RESOURCES = [
  {
    label: "NEP FY B.Com Sem-I Integrated Syllabus",
    href: "http://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/NEP_FY%20B.Com%20Sem-I_Intergrated%20Syllabus%20File_06.07.2024_08072024.pdf",
  },
  {
    label: "Course Details & Objectives",
    href: "https://www.mandkecollege.net/_files/ugd/73986d_08695abcccdc4670937de0e695f72039.pdf",
  },
  {
    label: "Course Details & Objectives",
    href: "https://www.mandkecollege.net/_files/ugd/73986d_547512f15c134661a32947598352dc7f.pdf",
  },
];

const BCOM_ADMISSION_STEPS = [
  "Make an enquiry with the Admissions Office in person, through the enquiry form on the website, or call 99229 65506.",
  "Produce physical original / notarised photocopy of necessary documents or send a photo / scanned copy of your recent marklist.",
  "Once you qualify for admission, pay fees for your desired course.",
  "After fee payment, fill out the form sent to you on WhatsApp/Email to register yourself for college facilities.",
  "Once admission is confirmed, you will receive a college E-ID which will allow you to attend classes.",
];

const BCOM_DOCUMENTS = ["Marklist", "Transfer Certificate", "Scanned Photo", "Fee Receipt"];

const ACADEMIC_CALENDARS = [
  { title: "Academic Calendar 2023-2024", url: academicCalendar2023Url },
  { title: "Academic Calendar 2024-2025", url: academicCalendar2024Url },
];

const STUDENT_FEEDBACK_RESOURCES = [
  { title: "Students Feedback 2025-26 SSR", url: studentFeedbackSsrUrl },
  { title: "Students Feedback 2025-26 SSR (1)", url: studentFeedbackSsr1Url },
  { title: "Students Feedback 2025-26 SSR (2)", url: studentFeedbackSsr2Url },
];

const DISTANCE_ADVANTAGES = [
  "Degree Certificate from one of India's foremost institutes in the Western Region",
  "Complete graduation or post-graduation from the place of your choice - Location no bar",
  "Complete graduation or post-graduation post 12th Std. passing at any time - Age no bar",
  "Advantage of having college / study centre as caretaker, guide and point of contact",
  "Use of infrastructure of study centre, if required",
  "Access to qualified faculty in study centres for continuous guidance",
  "Up to date study material",
];

const DISTANCE_COURSES = [
  {
    title: "Bachelor of Commerce - BCom",
    href: "https://unipune.ac.in/SoL/Prospectus22/Prospectus%20BCom_20072022.pdf",
  },
  {
    title: "Masters of Commerce - MCom",
    href: "https://unipune.ac.in/SoL/Prospectus22/M.Com.%20Prospectus%20Eng_08102022.pdf",
  },
  {
    title: "Bachelor of Arts - BA",
    href: "https://unipune.ac.in/SoL/Prospectus22/%E0%A4%AC%E0%A5%80.%E0%A4%8F.%20%E0%A4%AE%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%A4%E0%A5%80%E0%A4%AA%E0%A5%81%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE_23072022.pdf",
  },
  {
    title: "Masters of Arts - MA",
    href: "https://unipune.ac.in/SoL/Prospectus22/M%20A%20English_10102022.pdf",
  },
];

const DISTANCE_TAGS = ["Remote Working", "Information Technology"];

const DISTANCE_ADMISSION_STEPS = [
  "Register Yourself as Student of Digital University",
  "Login for Admission Form and choose Smt. Sudhatai Mandke College as Study Centre",
  "Pay Fee and Print Form (2 copies - Student & Study Centre)",
  "Submit Admission Form to Study Centre. Refer to the document list and instructions.",
];

const DISTANCE_RESOURCES = [
  {
    label: "Admission Notice 2024-25",
    href: "https://unipune.ac.in/SOL/pdf/pdf2024/BA-BCom%20(ODL)_Admission%20Notice_2024-25_16052024.pdf",
  },
  {
    label: "B.Com Prospectus",
    href: "https://unipune.ac.in/SoL/Prospectus22/Prospectus%20BCom_20072022.pdf",
  },
  {
    label: "M.Com Prospectus",
    href: "https://unipune.ac.in/SoL/Prospectus22/M.Com.%20Prospectus%20Eng_08102022.pdf",
  },
  {
    label: "M.A. English Prospectus",
    href: "https://unipune.ac.in/SoL/Prospectus22/M%20A%20English_10102022.pdf",
  },
  {
    label: "B.A. Prospectus",
    href: "https://unipune.ac.in/SoL/Prospectus22/%E0%A4%AC%E0%A5%80.%E0%A4%8F.%20%E0%A4%AE%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%A4%E0%A5%80%E0%A4%AA%E0%A5%81%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A4%BF%E0%A4%95%E0%A4%BE_23072022.pdf",
  },
];

const DISTANCE_ADMISSION_LINKS = [
  {
    label: "Read this before you apply (Click Here)",
    href: "https://unipune.ac.in/SOL/pdf/pdf2024/BA-BCom%20(ODL)_Admission%20Notice_2024-25_16052024.pdf",
  },
  {
    label: "Tutorial of Online Application (Click Here)",
    href: "https://sppu.digitaluniversity.ac/",
  },
  {
    label: "Document List and Instructions (Click Here)",
    href: "https://beta.unipune.ac.in/SOL/pdf/pdf2024/Form_Submission_English_20052024.pdf",
  },
  {
    label: "ABC ID Tutorial (Click Here)",
    href: "https://www.abc.gov.in/",
  },
  {
    label: "ABC FAQ (Click Here)",
    href: "https://www.abc.gov.in/faq.php",
  },
];

const CO_CURRICULAR_ACTIVITIES = [
  {
    title: "Vidyathi Vyaktimatva Vikas",
    paragraphs: [
      "Initially started as the Vidhyarthini Vyaktimatva Vikas, the college has conducted several seminars and lectures by top women achievers to encourage female students to become strong, independent and confident.",
      "Now the format has changed for the better, to benefit all students male and female alike. The college plans an annual lecture series spanning over 3 days, inviting industry experts, specialists and entrepreneurs from various walks of life.",
      "These speakers share their sea of knowledge and experiences with students, giving them a peek into a plethora of opportunities available to them and guiding them towards achieving their goals.",
    ],
    images: ["IMG_6977.jpg", "vid-manch1.jpg", "V-Vikas.png"],
  },
  {
    title: "Student Council",
    paragraphs: [
      "The Student Council is a group of volunteer students chosen by their peers, who work together with a teacher representative within the framework of the college.",
      "It provides a bridge of communication and student expression between students and college. The other activities of the Student Council include assistance in college affairs and activities, opportunities for leadership experience, organizing social events, community projects and encouraging students.",
      "The SMCC Student Council meets regularly to understand issues faced by students and effectively communicates them to the respective offices so that solutions may be generated and implemented for the benefit of students.",
    ],
    images: ["Student Council.jpg", "IMG_1209.jpg", "Suggestion box (2).jpg"],
  },
  {
    title: "Soft Skill Development",
    paragraphs: [
      "Soft skills are a combination of people skills, social skills, communication skills, character or personality traits, attitudes, career attributes, and social and emotional intelligence quotients.",
      "These skills enable students to navigate their environment, work well with others, perform well, and achieve their goals while complementing technical or academic skills.",
      "At SMCC, we provide every input to our students for their all-round development. Lectures and training exercises from eminent speakers are conducted for public speaking with confidence, resume writing and interview skills, career selection and career approach.",
    ],
    images: ["Soft Skill 1.jpg", "Soft Skill.jpg", "Soft Skill 2010 353.jpg"],
  },
  {
    title: "Industrial Visits and Campus Visits of Industry Experts",
    paragraphs: [
      "Theoretical knowledge helps students understand fundamental concepts and know how something works. Practical knowledge ensures that students are able to actually do something instead of simply knowing how to do it.",
      "For students to make strides in real-world scenarios, SMCC puts equal stress on both theoretical and practical knowledge.",
      "SMCC allows students to experience first-hand what it takes to excel in various fields through industrial visits and campus visits of industry experts who share their valuable knowledge.",
    ],
    images: ["IMG-20141218-WA0013.jpg", "factory visit.jpg", "Industry visit.jpg"],
  },
  {
    title: "SMCC Bazaar",
    paragraphs: [
      "SMCC Bazaar is the perfect opportunity for students to showcase their business skills and implement the theoretical and practical knowledge they have received in college.",
      "This is an entrepreneurship-building activity. Stalls are set up and students are encouraged to make and sell their products over a weekend in college.",
      "This helps students get hands-on experience of running their own business and earning real profits, building confidence in their abilities and ideas.",
    ],
    images: [],
  },
];

const EXTRA_CURRICULAR_ACTIVITIES = [
  {
    title: "National Service Scheme (NSS)",
    paragraphs: [
      "This scheme is under the Ministry of Youth Affairs and Sports, Government of India and NSS cell, Higher and Technical Education, Govt. of Maharashtra.",
      "The main aim of the NSS is development of the personality of college students through community service. Their motto is 'NOT ME BUT YOU'.",
      "SMCC has been conducting the NSS program successfully since 2005 and has adopted one village around Pune every year for community work to be conducted as per the requirement of the village in coordination with local authorities.",
      "Through our NSS programme, we have helped in reconstruction and cleaning of toilets, built sand dams, conducted seminars in villages on alcohol abuse, guided many on how to stay sober, helped in construction of temple, conducted AADHAR card drive, free dental checkups, seminars for women on female hygiene and many more activities for the betterment of adopted villages and residents.",
      "Swacch Bharat, Nirbhay Kanya, Blood Donation Camp, Visit to Orphanage, Teaching rural children, etc. are other activities conducted under NSS.",
    ],
    images: ["Visit to Orphanage.jpg", "NSS CAMP 2018-2019 (8).jpeg", "river cleaning.jpg"],
  },
  {
    title: "Intra-College Competitions",
    paragraphs: [
      "Intra-college competitions encourage student camaraderie, allow students to showcase their talents and help them thrive in healthy competition.",
      "Debate and elocution competitions are held to help students get over their fear of public speaking and express themselves with clarity and confidence.",
      "Competitions like cooking, dance, art, poem and story writing, etc. for both boys and girls help break gender barriers.",
    ],
    images: ["debate.png", "dance.jpg", "cooking.png"],
  },
  {
    title: "Cultural Activities",
    paragraphs: [
      "Cultural activities form an integral part of student experience at SMCC. They inculcate a sense of responsibility towards society, appreciation for what students have, pride in their history and confidence to face the real world.",
      "Students volunteer in local community work with officials for activities like promoting the use of helmets and following traffic rules, conducting a 'NO TO PLASTIC' drive, and helping NGOs in collection of waste material during Ganpati Festival.",
      "We celebrate anniversaries of important people, Republic Day and Independence Day.",
      "Traditional Day is a fun way for students to showcase their culture.",
      "We also have a Ganpati Festival in college in which students and teachers participate with great enthusiasm. Many competitions and activities are conducted during this time, with special care taken so that traditions are properly followed.",
    ],
    images: ["IMG_0040.jpg", "flag.jpg", "march.jpg"],
  },
  {
    title: "Sports and Physical Education",
    paragraphs: [
      "We give a lot of importance to sports and physical education, because we believe healthy body equals healthy mind. Sports also helps build an individual's character and imbibe a sportsman's spirit.",
      "The college has a well-equipped gymnasium, table tennis table, chess, carrom, etc.",
      "The college encourages deserving students to pursue careers in sport, and we have been fortunate to have our alumnus Kedar Jadhav, Member Indian Cricket Team, prove it.",
      "We have participated in inter-college cricket and kabaddi. Intra-college competitions for table tennis, chess and carrom are conducted.",
      "A Patanjali certified teacher is called to celebrate Yoga Day with great energy.",
    ],
    images: ["G-Physcical Education Gymkhana (4).jpg", "table tennis.jpg", "20190621_083740.jpg"],
  },
];

const STUDENT_SUPPORT_ACTIVITIES = [
  {
    title: "Earn and Learn",
    paragraphs: [
      "The main objective of the scheme is to develop a student as a multifaceted personality with academic excellence and a commitment to an egalitarian society.",
      "This scheme is undertaken for the benefit of students coming from rural areas, who are economically backward, intelligent and meritorious but cannot afford higher education.",
      "It inculcates in the student the idea that no work is big or small and develops a work culture with the right aptitude, helping our youth stay gainfully employed.",
      "Smt. Sudhatai Mandke College has adopted this scheme for the last 10 years and in turn made higher education accessible and available to the poor, meritorious and marginalized.",
      "Students interested in the above scheme should contact Student Development Office (SDO) before September 10th every year.",
    ],
    images: ["IMG20191128125701_edited.jpg", "tabs.jpg", "IMG-20191220-WA0003.jpg"],
  },
  {
    title: "Grievance Redressal Cell",
    paragraphs: [
      "Grievance Redressal Cell addresses grievances of the students. Grievances related to examinations, infrastructure, harassment, ragging, etc. are addressed by the cell.",
      "A Suggestion Box is placed in the college and suggestions given by students are implemented if possible or necessary.",
      "Some grievances are directly brought to the notice of the Principal or committee members, the student president and other student office bearers of the college.",
      "Thus the committee directly and indirectly involves students in the administration of the college.",
    ],
    images: ["Student Council.jpg", "Grievance-redressal-mechanisms-Utkal-Today.jpg", "grievence-redressal-1170.jpg"],
  },
  {
    title: "Anti Ragging Cell",
    paragraphs: [
      "At Smt. Sudhatai Mandke College, we deal with ragging related complaints very seriously. We are always striving to be a ragging free environment.",
      "The Ragging Prevention Committee makes sure they educate and counsel students about the negative effects of ragging and the importance of a conducive ragging free environment.",
      "The Anti Ragging Committee makes sure that in the event of a ragging incident, student complaints are dealt with seriously and urgently.",
      "For all information regarding UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009, students can refer to the official UGC anti-ragging resources.",
    ],
    images: ["unnamed.jpg", "IMG_0246_edited_edited.jpg", "iStock-1130620580.jpg"],
    links: [
      {
        label: "Anti Ragging Form of UGC (Click Here)",
        href: "https://www.antiragging.in/Site/Affidavits_Registration.aspx",
      },
    ],
  },
  {
    title: "Nirbhay Kanya Abhiyaan - Prevention of Sexual Harrasment on Campus and Confidence Building in Female Students",
    paragraphs: [
      "This is a scheme introduced by the University to develop the confidence and personality of lady students who come from rural areas and deprived sections of society.",
      "The main objective of this scheme is to develop a critical mind, self-confidence and a commitment to society. Lady students are given training in health, law and social activities.",
      "They are also given training in self-employment and other activities that enhance social confidence. Training in self-defense and how to defend oneself in any situation is also provided, making them fearless and ready to face unwanted situations.",
      "This scheme is open to all regular lady students from affiliated colleges / institutes.",
      "Students interested in the above scheme should contact Student Development Office (SDO) before September 10th every year.",
    ],
    images: ["classroom2.jpg", "working women.jfif", "krav-maga.jpg"],
  },
  {
    title: "Special Guidance Scheme",
    paragraphs: [
      "The basic objective of this scheme is to help students who are deprived of the latest knowledge of the subject they have undertaken at the first year level.",
      "Secondly, it aims to inculcate the urge to educate oneself with education that liberates one internally as well as externally.",
      "Thirdly, it offers guidance to students in their career choices and the relevant subjects to be pursued by them to attain their best potential.",
      "The enrollment under this scheme is basically for students who are economically and financially backward and also for reserved category students. There is no limit on the number of students.",
      "Students interested in the above scheme should contact Student Development Office (SDO) before September 10th every year.",
    ],
    images: ["IMG_1209.jpg", "Hands", "induction.jpg"],
  },
  {
    title: "Disaster Management Program",
    paragraphs: [
      "University of Pune has established a Disaster Management Cell. 140 NSS Programme Officers and 60 other teachers have been trained in disaster management at YASHADA Pune for five days each.",
      "The College has established a disaster management cell consisting of 30 students. Workshops on disaster management are organised in college.",
      "Under Samarth Bharat Abhiyan, colleges in the vicinity of SPPU have adopted 371 villages for their overall development and to promote activities such as watershed management, literacy in energy, agriculture awareness, health and hygiene, sports activities and promoting education.",
      "SMC students through their NSS Program have conducted many such activities in their adopted villages.",
      "Students interested in the above scheme should contact Student Development Office (SDO) before September 10th every year.",
    ],
    points: [
      "Conducted lectures and de-addiction drives for alcohol and tobacco in the village.",
      "Constructed water channels in fields as per requirement of farmers.",
      "Helped in construction of temple.",
      "Conducted free health checkups in coordination with city doctors.",
      "Conducted cleanliness drives.",
      "Taught Yoga to locals.",
      "Performed variety entertainment show for villagers.",
      "Conducted AADHAR registration drive.",
      "Counselled local youth about importance of education and available opportunities in urban areas.",
    ],
    images: ["river cleaning.jpg", "Disaster Mgmt.jpg", "IMG20200805112716.jpg"],
  },
];

const COLLEGE_EVENT_REPORTS = [
  {
    title: "Event Report 2025-2026",
    events: [
      "Rakhi For Nation - 05 AUG 2025",
      "BaktiYog On Occasion of International Yoga Day - 21 JUNE 2025",
    ],
  },
  {
    title: "Event Report 2023-2024",
    events: [
      "Pune Book Festival Visit - 21 DEC 2024",
      "The Constitution Day - 26 NOV 2024",
      "Pandit Jawaharlal Nehru Jayanti & Childers day celebration - 15 NOV 2024",
      "Voting Awareness Week - 13 NOV to 18 NOV 2024",
      "District Level Intercollege Social and literature Competition - 29 OCT 2024",
      "Teachers Day Celebration - 5 SEPT 2024",
      "Self Defence Training using Kruv Maga - 04 SEPT 2024",
      "International Youth Day Celebration & Anti Ragging - 12 AUG 2024",
      "Lokmanya Tilak Punyatithi & Annabhau Sathe Jayanti - 01 AUG 2024",
    ],
  },
];

export function SectionContentPage() {
  const { pathname } = useLocation();
  const page = SECTION_PAGES.find((entry) => entry.to === pathname);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const isFoundersMessage = pathname === "/about/founders-message";
  const isCollegeDevelopmentCommittee = pathname === "/about/college-development-committee";
  const isImportantCommittees = pathname === "/about/important-committees";
  const isInfrastructure = pathname === "/about/infrastructure";
  const isIdp = pathname === "/about/idp-24-29";
  const isCourses = pathname === "/academics/courses";
  const isNep = pathname === "/academics/nep-2020";
  const isBba = pathname === "/academics/bba";
  const isBca = pathname === "/academics/bca";
  const isAdmissionProcess = pathname === "/academics/admission-process";
  const isAcademicBankCredits = pathname === "/academics/academic-bank-of-credits";
  const isAcademicCalendar = pathname === "/academics/academic-calendar";
  const isAboutDistanceEducation = pathname === "/distance-education/about-de";
  const isDistanceCourses = pathname === "/distance-education/courses-de";
  const isDistanceAdmission = pathname === "/distance-education/admission-de";
  const isCoCurricular = pathname === "/activities/co-curricular";
  const isExtraCurricular = pathname === "/activities/extra-curricular";
  const isStudentSupport = pathname === "/activities/student-support";
  const isCollegeEvents = pathname === "/activities/events";
  const isStudentSatisfactionSurvey = pathname === "/stakeholders/student-satisfaction-survey";
  const isFeedbackReport = pathname === "/stakeholders/feedback-report-21-22";

  return (
    <>
      <Helmet>
        <title>{page.label} - Mandke College</title>
      </Helmet>

      <section className="bg-section py-16">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-sm font-bold uppercase tracking-widest text-accent">{page.group}</p>
          <h1 className="mt-3 font-heading text-4xl font-bold text-primary md:text-5xl">{page.label}</h1>
          <p className="mt-4 text-textSecondary">{page.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div
          className={`rounded-btn border border-borderSoft bg-white p-6 shadow-card ${
            isFoundersMessage ? "grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-start" : ""
          }`}
        >
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary">{isFoundersMessage ? "Sudhir Mandke" : page.label}</h2>
            <div className="mt-4 space-y-4 text-textSecondary">
              {page.content?.length ? (
                page.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
              ) : (
                <p>Content, notices, PDFs, forms, and detailed information for this section can be published here.</p>
              )}
            </div>
            {isFoundersMessage ? (
              <div className="mt-6 font-semibold text-primary">
                <p>Shri. Sudhir Y Mandke</p>
                <p>Founder / Chairman</p>
              </div>
            ) : null}
            {page.highlights?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {page.highlights.map((highlight) => (
                  <span key={highlight} className="rounded-btn bg-section px-3 py-1.5 text-sm font-semibold text-primary">
                    {highlight}
                  </span>
                ))}
              </div>
            ) : null}
            {isStudentSatisfactionSurvey || isFeedbackReport ? (
              <div className="mt-8 rounded-btn border border-borderSoft bg-section p-5">
                <h3 className="font-heading text-2xl font-bold text-primary">Student Feedback PDFs</h3>
                <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                  Access student satisfaction survey and feedback documents for review and institutional quality improvement.
                </p>
                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  {STUDENT_FEEDBACK_RESOURCES.map((resource) => (
                    <a
                      key={resource.title}
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-btn bg-white px-4 py-3 text-sm font-bold text-accent shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      {resource.title}
                      <span className="mt-1 block text-xs font-semibold text-textSecondary">Open PDF</span>
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
            {isCollegeDevelopmentCommittee ? (
              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-primary">Key Roles and Responsibilities</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {CDC_ROLES.map((item) => (
                    <article key={item.title} className="rounded-btn border border-borderSoft bg-section p-4">
                      <h4 className="font-heading text-lg font-bold text-primary">{item.title}</h4>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-textSecondary">
                        {item.points.map((point) => (
                          <li key={point}>- {point}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>

                <div className="mt-10 overflow-hidden rounded-btn border border-borderSoft bg-white">
                  <div className="bg-primary px-5 py-4">
                    <h3 className="font-heading text-xl font-bold text-white">CDC Members</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] border-collapse text-left">
                      <thead className="bg-section text-primary">
                        <tr>
                          <th className="px-5 py-3 text-sm font-bold uppercase">Name</th>
                          <th className="px-5 py-3 text-sm font-bold uppercase">Designation</th>
                          <th className="px-5 py-3 text-sm font-bold uppercase">Role in CDC</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CDC_MEMBERS.map((member, index) => (
                          <tr key={member.name} className={index % 2 === 0 ? "bg-white" : "bg-section/70"}>
                            <td className="px-5 py-3 text-sm font-semibold text-primary">{member.name}</td>
                            <td className="px-5 py-3 text-sm text-textSecondary">{member.designation}</td>
                            <td className="px-5 py-3 text-sm text-textSecondary">{member.role}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ) : null}
            {isImportantCommittees ? (
              <div className="mt-8">
                <h3 className="font-heading text-xl font-bold text-primary">
                  Advantages of Having Relevant Committees for College & Students
                </h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {COMMITTEE_ADVANTAGES.map((item) => (
                    <article key={item.title} className="rounded-btn border border-borderSoft bg-section p-4">
                      <h4 className="font-heading text-lg font-bold text-primary">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-textSecondary">{item.description}</p>
                    </article>
                  ))}
                </div>

                <div className="mt-10 rounded-btn border border-borderSoft bg-section p-5">
                  <h3 className="font-heading text-xl font-bold text-primary">Statutory Committees</h3>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {STATUTORY_COMMITTEES.map((committee) => (
                      <div key={committee} className="rounded-btn bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm">
                        {committee}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
            {isInfrastructure ? (
              <div className="mt-8">
                <div className="overflow-hidden rounded-btn border border-borderSoft bg-section">
                  <img src={buildingImage} alt="Smt. Sudhatai Mandke College infrastructure" className="max-h-[360px] w-full object-cover" />
                </div>

                <div className="mt-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">Knowledge Resource Center</p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-primary">Library</h3>
                  <p className="mt-4 leading-relaxed text-textSecondary">
                    A well-equipped and well-managed library is the foundation of modern educational structure. The importance of
                    library in education can be appreciated properly and precisely only if we try to understand the changing
                    concepts of education. Today, education bereft of library service is like a body without soul.
                  </p>
                  <p className="mt-3 text-sm font-semibold text-primary">- The College Library Manual</p>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {LIBRARY_STATS.map((stat) => (
                    <div key={stat.label} className="rounded-btn border border-borderSoft bg-section p-4">
                      <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="mt-1 text-sm font-semibold text-textSecondary">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-btn border border-borderSoft bg-section p-5">
                  <h3 className="font-heading text-xl font-bold text-primary">Facilities & Services</h3>
                  <ul className="mt-4 grid gap-3 text-sm leading-relaxed text-textSecondary md:grid-cols-2">
                    {LIBRARY_SERVICES.map((service) => (
                      <li key={service}>- {service}</li>
                    ))}
                  </ul>
                  <div className="mt-5 space-y-2 text-sm font-semibold text-accent">
                    <a
                      href="https://smcc.vriddhionline.com/DataCenter_01OnlineOPAC.aspx?UniqueID=ST_MANDKE"
                      target="_blank"
                      rel="noreferrer"
                      className="block hover:underline"
                    >
                      OPAC - VRIDHHI Software
                    </a>
                    <a href="https://www.indianjournals.com/" target="_blank" rel="noreferrer" className="block hover:underline">
                      Indian Journals
                    </a>
                    <a href="https://www.dsij.in/" target="_blank" rel="noreferrer" className="block hover:underline">
                      Dalal Street Investment Journal
                    </a>
                  </div>
                </div>

                <div className="mt-8 grid gap-5 lg:grid-cols-2">
                  <div className="rounded-btn border border-borderSoft bg-white p-5 shadow-sm">
                    <h3 className="font-heading text-xl font-bold text-primary">Commerce and Language Lab</h3>
                    <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                      Commerce Lab is set up to showcase charts and projects made by the students.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                      The Language Lab houses books and CDs in many languages. Students use the same for honing language
                      skills or learning a new language.
                    </p>
                  </div>
                  <div className="rounded-btn border border-borderSoft bg-white p-5 shadow-sm">
                    <h3 className="font-heading text-xl font-bold text-primary">Timing</h3>
                    <div className="mt-4 space-y-2 text-sm text-textSecondary">
                      <p>Monday to Friday: 8am - 3pm</p>
                      <p>Saturday: 8am - 1pm</p>
                      <p>Lunch Break: 1pm - 1:30pm</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-btn border border-borderSoft bg-section p-5">
                  <h3 className="font-heading text-xl font-bold text-primary">Library Rules</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-textSecondary">
                    {LIBRARY_RULES.map((rule) => (
                      <li key={rule}>- {rule}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <h3 className="font-heading text-2xl font-bold text-primary">Campus Facilities</h3>
                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    {INFRASTRUCTURE_FACILITIES.map((facility) => (
                      <article key={facility.title} className="overflow-hidden rounded-btn border border-borderSoft bg-white shadow-sm">
                        <img
                          src={buildingImage}
                          alt={facility.title}
                          className="h-44 w-full object-cover"
                        />
                        <div className="p-5">
                          <h4 className="font-heading text-lg font-bold text-primary">{facility.title}</h4>
                          <p className="mt-2 text-sm leading-relaxed text-textSecondary">{facility.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
            {isIdp ? (
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-btn bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:brightness-105"
                >
                  Click Here
                </Link>

                <div className="mt-8 rounded-btn border border-borderSoft bg-section p-5">
                  <h3 className="font-heading text-2xl font-bold text-primary">Section Title</h3>
                  <p className="mt-3 leading-relaxed text-textSecondary">
                    This is a Paragraph. Click on "Edit Text" or double click on the text box to start editing the
                    content and make sure to add any relevant details or information that you want to share with your
                    visitors.
                  </p>
                </div>

                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {IDP_LIST_ITEMS.map((item, index) => (
                    <article key={`${item.title}-${index}`} className="rounded-btn border border-borderSoft bg-white p-5 shadow-sm">
                      <h4 className="font-heading text-xl font-bold text-primary">{item.title}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-textSecondary">{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
            {isCourses ? (
              <div className="mt-8">
                <h3 className="font-heading text-2xl font-bold text-primary">Programs We Offer</h3>
                <div className="mt-5 grid gap-5 lg:grid-cols-3">
                  {COURSE_PROGRAMS.map((program) => (
                    <article key={program.title} className="flex flex-col rounded-btn border border-borderSoft bg-section p-5">
                      <h4 className="font-heading text-xl font-bold text-primary">{program.title}</h4>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-textSecondary">{program.description}</p>
                      <Link to={program.href} className="mt-5 text-sm font-bold text-accent hover:underline">
                        {program.linkLabel}
                      </Link>
                    </article>
                  ))}
                </div>

                <div className="mt-10 rounded-btn border border-borderSoft bg-white p-5 shadow-sm">
                  <h3 className="font-heading text-2xl font-bold text-primary">Why Choose Mandke College?</h3>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {WHY_MANDKE.map((item) => (
                      <div key={item} className="rounded-btn bg-section px-4 py-3 text-sm font-semibold text-primary">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">NEP 2020</p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-primary">
                    Adopting the National Education Policy at Mandke College
                  </h3>
                  <p className="mt-4 leading-relaxed text-textSecondary">
                    Smt. Sudhatai Mandke College is proud to align its academic framework with the National Education
                    Policy (NEP) 2020, introduced by the Government of India to make higher education more holistic,
                    flexible, multidisciplinary, and skill-driven.
                  </p>
                  <p className="mt-3 leading-relaxed text-textSecondary">
                    By adopting NEP guidelines, we ensure that our students are prepared not only with academic knowledge
                    but also with the 21st-century skills required for careers, entrepreneurship, and lifelong learning.
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {NEP_FEATURES.map((feature) => (
                      <article key={feature.title} className="rounded-btn border border-borderSoft bg-section p-4">
                        <h4 className="font-heading text-lg font-bold text-primary">{feature.title}</h4>
                        <p className="mt-2 text-sm leading-relaxed text-textSecondary">{feature.description}</p>
                      </article>
                    ))}
                  </div>
                  <div className="mt-6 rounded-btn border border-accent/30 bg-amber-50 p-5">
                    <h4 className="font-heading text-lg font-bold text-primary">Commitment to Students</h4>
                    <p className="mt-2 text-sm leading-relaxed text-textSecondary">
                      Through NEP 2020 adoption, Mandke College aims to provide greater academic flexibility, enhanced
                      career opportunities, and a global standard of education while staying true to its vision of
                      building competent and responsible graduates.
                    </p>
                  </div>
                </div>

                <div className="mt-10 rounded-btn border border-borderSoft bg-section p-5">
                  <h3 className="font-heading text-2xl font-bold text-primary">Course Resources</h3>
                  <div className="mt-4 grid gap-3">
                    {COURSE_RESOURCES.map((resource, index) => (
                      <a
                        key={`${resource.href}-${index}`}
                        href={resource.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-btn bg-white px-4 py-3 text-sm font-bold text-accent shadow-sm hover:underline"
                      >
                        {resource.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
            {isNep ? (
              <div className="mt-8">
                <h3 className="font-heading text-2xl font-bold text-primary">Key Features of NEP Implementation</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {NEP_FEATURES.map((feature) => (
                    <article key={feature.title} className="rounded-btn border border-borderSoft bg-section p-4">
                      <h4 className="font-heading text-lg font-bold text-primary">{feature.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-textSecondary">{feature.description}</p>
                    </article>
                  ))}
                </div>
                <div className="mt-8 rounded-btn border border-accent/30 bg-amber-50 p-5">
                  <h3 className="font-heading text-xl font-bold text-primary">Commitment to Students</h3>
                  <p className="mt-3 leading-relaxed text-textSecondary">
                    Through NEP 2020 adoption, Mandke College aims to provide greater academic flexibility, enhanced
                    career opportunities, and a global standard of education while staying true to its vision of building
                    competent and responsible graduates.
                  </p>
                </div>
              </div>
            ) : null}
            {isBba || isBca ? (
              <div className="mt-8">
                <div className="overflow-hidden rounded-btn border border-borderSoft bg-section">
                  <img
                    src={buildingImage}
                    alt={isBba ? "Business Meeting" : "Laptop and Notebook"}
                    className="max-h-[360px] w-full object-cover"
                  />
                </div>
                <div className="mt-8 rounded-btn border border-borderSoft bg-section p-5">
                  <h3 className="font-heading text-2xl font-bold text-primary">Course Details & Objectives</h3>
                  <p className="mt-3 leading-relaxed text-textSecondary">
                    {isBba
                      ? "The BBA program builds management knowledge, leadership ability, communication, entrepreneurship, and digital business readiness through classroom learning, case studies, projects, industry visits, and internships."
                      : "The BCA program builds strong foundations in computer applications, software development, programming, databases, emerging technologies, problem-solving, and communication through practical learning and industry-oriented exposure."}
                  </p>
                </div>
              </div>
            ) : null}
            {isAdmissionProcess ? (
              <div className="mt-8">
                <div className="rounded-btn border border-accent/30 bg-amber-50 p-5">
                  <h3 className="font-heading text-xl font-bold text-primary">Important</h3>
                  <p className="mt-2 font-semibold text-textSecondary">
                    MHT-CET is COMPULSORY for all students interested in BCA / BBA Course.
                  </p>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  <section className="rounded-btn border border-borderSoft bg-section p-5">
                    <h3 className="font-heading text-2xl font-bold text-primary">Admission Process for BBA & BCA</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-textSecondary">
                      <li>- Click on the CET Cell CAP link below and follow the steps.</li>
                      <li>- In the Technical Education Panel, look for Under Graduate Courses.</li>
                      <li>- Click on the BCA/BBA/BMS/BBM/MBA(Integrated)/MCA(Integrated) link and follow the steps.</li>
                      <li>- Use DTE CODE <span className="font-bold text-primary">16260</span> to choose Smt. Sudhatai Mandke College.</li>
                    </ul>
                    <div className="mt-5 grid gap-3">
                      <a
                        href="https://cetcell.mahacet.org/cap-_2025-26/"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-btn bg-white px-4 py-3 text-sm font-bold text-accent shadow-sm hover:underline"
                      >
                        CET Cell CAP 2025-26 (Click Here)
                      </a>
                      <a
                        href="https://youtu.be/yFGNvfI3pGw"
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-btn bg-white px-4 py-3 text-sm font-bold text-accent shadow-sm hover:underline"
                      >
                        CAP Form Tutorial (Click Here)
                      </a>
                    </div>
                    <p className="mt-5 text-sm font-semibold text-primary">Help: 9922965506 / 9577060606</p>
                  </section>

                  <section className="rounded-btn border border-borderSoft bg-white p-5 shadow-sm">
                    <h3 className="font-heading text-2xl font-bold text-primary">Admission Process for B.Com</h3>
                    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-textSecondary">
                      {BCOM_ADMISSION_STEPS.map((step) => (
                        <li key={step}>- {step}</li>
                      ))}
                    </ul>
                    <h4 className="mt-6 font-heading text-lg font-bold text-primary">Documents to be Uploaded</h4>
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      {BCOM_DOCUMENTS.map((doc) => (
                        <div key={doc} className="rounded-btn bg-section px-3 py-2 text-sm font-semibold text-primary">
                          {doc}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            ) : null}
            {isAcademicBankCredits ? (
              <div className="mt-8 rounded-btn border border-borderSoft bg-section p-5">
                <h3 className="font-heading text-2xl font-bold text-primary">Academic Bank of Credits (ABC)</h3>
                <p className="mt-3 leading-relaxed text-textSecondary">
                  Academic Bank of Credits (ABC) is a virtual/digital storehouse that contains information of the credits
                  earned by individual students throughout their learning journey using DigiLocker.
                </p>
                <p className="mt-3 leading-relaxed text-textSecondary">
                  It enables students to store and share academic records for enhanced access to opportunities. As per new
                  UGC rules every student is required to register for APAAR / ABC ID.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://www.abc.gov.in/faq.php"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-btn bg-primary px-5 py-2.5 text-sm font-bold text-white"
                  >
                    ABC FAQ
                  </a>
                  <a
                    href="https://www.abc.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-btn border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary"
                  >
                    Create ABC ID Tutorial
                  </a>
                </div>
              </div>
            ) : null}
            {isAcademicCalendar ? (
              <div className="mt-8 rounded-btn border border-borderSoft bg-section p-5">
                <h3 className="font-heading text-2xl font-bold text-primary">Academic Calendar PDFs</h3>
                <p className="mt-3 leading-relaxed text-textSecondary">
                  View or download the academic calendars for the respective academic years.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {ACADEMIC_CALENDARS.map((calendar) => (
                    <a
                      key={calendar.title}
                      href={calendar.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-btn bg-white px-5 py-3 text-sm font-bold text-accent shadow-sm hover:underline"
                    >
                      {calendar.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
            {isAboutDistanceEducation ? (
              <div className="mt-8">
                <div className="rounded-btn border border-borderSoft bg-section p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">Approved Centre</p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-primary">
                    SPPU School of Open Learning (Distance Education)
                  </h3>
                  <p className="mt-4 leading-relaxed text-textSecondary">
                    Savitribai Phule Pune University is popularly known as the Oxford of the East and has graded
                    autonomy status by UGC. Study centres work as caretakers of learners and provide essential personal
                    contact under the guidelines of the School of Open Learning.
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="font-heading text-2xl font-bold text-primary">Advantages</h3>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {DISTANCE_ADVANTAGES.map((advantage) => (
                      <div key={advantage} className="rounded-btn border border-borderSoft bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm">
                        {advantage}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 rounded-btn border border-borderSoft bg-section p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">Courses offered at</p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-primary">
                    SMC - Centre for Distance Education
                  </h3>
                  <p className="mt-4 leading-relaxed text-textSecondary">
                    Location and age is no bar for obtaining a Graduation or Post Graduation Degree at your own time.
                    Open and Distance Learning (ODL) is flexible in regard to modalities and timing of teaching and
                    learning as also admission criteria, without compromising necessary quality considerations.
                  </p>
                  <p className="mt-3 leading-relaxed text-textSecondary">
                    The School of Open Learning offers Undergraduate/Postgraduate Degree courses in Arts and Commerce.
                    The medium of instruction is Marathi and English.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {DISTANCE_TAGS.map((tag) => (
                      <span key={tag} className="rounded-btn bg-white px-3 py-1.5 text-sm font-semibold text-primary shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {DISTANCE_COURSES.map((course) => (
                    <a
                      key={course.title}
                      href={course.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-btn border border-borderSoft bg-white p-4 text-sm font-bold text-primary shadow-sm transition hover:border-accent hover:text-accent"
                    >
                      {course.title}
                      <span className="mt-2 block text-xs font-bold text-accent">Prospectus PDF (Click Here)</span>
                    </a>
                  ))}
                </div>
                <div className="mt-8 rounded-btn border border-borderSoft bg-section p-5">
                  <h3 className="font-heading text-xl font-bold text-primary">Eligibility</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-textSecondary">
                    <li>- To be eligible for Under Graduate Courses, candidate must have completed 10+2 / HSC.</li>
                    <li>- To be eligible for Post Graduate Courses, candidate must have completed bachelor's degree.</li>
                  </ul>
                </div>
                <div className="mt-8 rounded-btn border border-accent/30 bg-amber-50 p-5">
                  <h3 className="font-heading text-xl font-bold text-primary">Admission Notice for Academic Year 2024-25</h3>
                  <p className="mt-2 text-textSecondary">
                    All you need is a Laptop, PC or mobile with a good internet connection. Click on the links below and
                    follow the easy instructions.
                  </p>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {DISTANCE_ADMISSION_LINKS.slice(0, 3).map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-btn bg-white px-4 py-3 text-sm font-bold text-accent shadow-sm hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-btn border border-borderSoft bg-section p-5">
                  <h3 className="font-heading text-2xl font-bold text-primary">Admission Process for Distance Education</h3>
                  <div className="mt-5 grid gap-3">
                    {DISTANCE_ADMISSION_STEPS.map((step, index) => (
                      <div key={step} className="rounded-btn bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm">
                        STEP{index + 1}: {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-btn border border-borderSoft bg-white p-5 shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-primary">Academic Bank of Credits (ABC)</h3>
                  <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                    Academic Bank of Credits (ABC) is a virtual/digital storehouse that contains information of the
                    credits earned by individual students throughout their learning journey using DigiLocker. As per new
                    UGC rules every student is required to register for APAAR / ABC ID.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {DISTANCE_ADMISSION_LINKS.slice(3).map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-[44px] items-center justify-center rounded-btn bg-primary px-5 py-2.5 text-sm font-bold text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
            {isDistanceCourses ? (
              <div className="mt-8">
                <div className="rounded-btn border border-borderSoft bg-section p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">Courses offered at</p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-primary">
                    SMC - Centre for Distance Education
                  </h3>
                  <p className="mt-4 leading-relaxed text-textSecondary">
                    Location and age is no bar for obtaining a Graduation or Post Graduation Degree at your own time.
                    Open and Distance Learning (ODL) is a system where teachers and learners need not necessarily be
                    present either at the same place or same time and is flexible in regard to modalities and timing of
                    teaching and learning as also the admission criteria without compromising necessary quality
                    considerations.
                  </p>
                  <p className="mt-3 leading-relaxed text-textSecondary">
                    The School of Open Learning (SoL) offers Undergraduate/Postgraduate Degree courses in the Arts and
                    Commerce faculty. The medium of instruction of all courses is Marathi and English. This supports
                    continuing education, skill updating of in-service personnel, and learners located at educationally
                    disadvantageous locations.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {DISTANCE_TAGS.map((tag) => (
                      <span key={tag} className="rounded-btn bg-white px-3 py-1.5 text-sm font-semibold text-primary shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {DISTANCE_COURSES.map((course) => (
                    <a
                      key={course.title}
                      href={course.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-btn border border-borderSoft bg-white p-4 text-sm font-bold text-primary shadow-sm transition hover:border-accent hover:text-accent"
                    >
                      {course.title}
                      <span className="mt-2 block text-xs font-bold text-accent">Prospectus PDF (Click Here)</span>
                    </a>
                  ))}
                </div>
                <div className="mt-8 rounded-btn border border-borderSoft bg-section p-5">
                  <h3 className="font-heading text-xl font-bold text-primary">Eligibility</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-textSecondary">
                    <li>- To be eligible for Under Graduate Courses, candidate must have completed 10+2 / HSC.</li>
                    <li>- To be eligible for Post Graduate Courses, candidate must have completed bachelor's degree.</li>
                  </ul>
                </div>
                <div className="mt-8 rounded-btn border border-borderSoft bg-white p-5 shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-primary">Course Prospectus Links</h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {DISTANCE_RESOURCES.slice(1).map((resource) => (
                      <a
                        key={resource.href}
                        href={resource.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-btn bg-section px-4 py-3 text-sm font-bold text-accent hover:underline"
                      >
                        {resource.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
            {isDistanceAdmission ? (
              <div className="mt-8">
                <div className="rounded-btn border border-accent/30 bg-amber-50 p-5">
                  <h3 className="font-heading text-xl font-bold text-primary">Admission Notice for Academic Year 2024-25</h3>
                  <p className="mt-2 text-textSecondary">
                    All you need is a Laptop, PC or mobile with a good internet connection. Click on the links below and
                    follow the easy instructions.
                  </p>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    {DISTANCE_ADMISSION_LINKS.slice(0, 3).map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-btn bg-white px-4 py-3 text-sm font-bold text-accent shadow-sm hover:underline"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-btn border border-borderSoft bg-section p-5">
                  <h3 className="font-heading text-2xl font-bold text-primary">Admission Process for Distance Education</h3>
                  <div className="mt-5 grid gap-3">
                    {DISTANCE_ADMISSION_STEPS.map((step, index) => (
                      <div key={step} className="rounded-btn bg-white px-4 py-3 text-sm font-semibold text-primary shadow-sm">
                        STEP{index + 1}: {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-btn border border-borderSoft bg-white p-5 shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-primary">Academic Bank of Credits (ABC)</h3>
                  <p className="mt-3 text-sm leading-relaxed text-textSecondary">
                    Academic Bank of Credits (ABC) is a virtual/digital storehouse that contains information of the
                    credits earned by individual students throughout their learning journey using DigiLocker. As per new
                    UGC rules every student is required to register for APAAR / ABC ID.
                  </p>
                  <a
                    href="https://www.abc.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-btn bg-primary px-5 py-2.5 text-sm font-bold text-white"
                  >
                    ABC ID Tutorial (Click Here)
                  </a>
                  <a
                    href="https://www.abc.gov.in/faq.php"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-0 mt-3 inline-flex min-h-[44px] items-center justify-center rounded-btn border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary sm:ml-3 sm:mt-4"
                  >
                    ABC FAQ (Click Here)
                  </a>
                </div>
                <div className="mt-6 rounded-btn border border-borderSoft bg-section p-5">
                  <h3 className="font-heading text-xl font-bold text-primary">Important Links</h3>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    {DISTANCE_RESOURCES.map((resource) => (
                      <a
                        key={resource.href}
                        href={resource.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-btn bg-white px-4 py-3 text-sm font-bold text-accent shadow-sm hover:underline"
                      >
                        {resource.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
            {isCoCurricular ? (
              <div className="mt-8 space-y-8">
                {CO_CURRICULAR_ACTIVITIES.map((activity, index) => (
                  <article
                    key={activity.title}
                    className={`rounded-btn border border-borderSoft p-5 ${
                      index % 2 === 0 ? "bg-section" : "bg-white shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-accent">Co-Curricular Activities</p>
                        <h3 className="mt-2 font-heading text-2xl font-bold text-primary">{activity.title}</h3>
                        <div className="mt-4 space-y-3 text-sm leading-relaxed text-textSecondary">
                          {activity.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                        {activity.images.length ? (
                          activity.images.map((imageName) => (
                            <div
                              key={imageName}
                              className="flex min-h-[96px] items-center justify-center rounded-btn border border-dashed border-primary/30 bg-white px-4 py-5 text-center text-sm font-semibold text-primary shadow-sm"
                            >
                              {imageName}
                            </div>
                          ))
                        ) : (
                          <div className="flex min-h-[120px] items-center justify-center rounded-btn border border-dashed border-primary/30 bg-white px-4 py-5 text-center text-sm font-semibold text-primary shadow-sm">
                            SMCC Bazaar Photos
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
            {isExtraCurricular ? (
              <div className="mt-8 space-y-8">
                {EXTRA_CURRICULAR_ACTIVITIES.map((activity, index) => (
                  <article
                    key={activity.title}
                    className={`rounded-btn border border-borderSoft p-5 ${
                      index % 2 === 0 ? "bg-section" : "bg-white shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-accent">Extra-Curricular Activities</p>
                        <h3 className="mt-2 font-heading text-2xl font-bold text-primary">{activity.title}</h3>
                        <div className="mt-4 space-y-3 text-sm leading-relaxed text-textSecondary">
                          {activity.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                        {activity.images.map((imageName) => (
                          <div
                            key={imageName}
                            className="flex min-h-[96px] items-center justify-center rounded-btn border border-dashed border-primary/30 bg-white px-4 py-5 text-center text-sm font-semibold text-primary shadow-sm"
                          >
                            {imageName}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
            {isStudentSupport ? (
              <div className="mt-8 space-y-8">
                {STUDENT_SUPPORT_ACTIVITIES.map((activity, index) => (
                  <article
                    key={activity.title}
                    className={`rounded-btn border border-borderSoft p-5 ${
                      index % 2 === 0 ? "bg-section" : "bg-white shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest text-accent">Student Welfare and Development</p>
                        <h3 className="mt-2 font-heading text-2xl font-bold text-primary">{activity.title}</h3>
                        <div className="mt-4 space-y-3 text-sm leading-relaxed text-textSecondary">
                          {activity.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                        {activity.points?.length ? (
                          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-textSecondary">
                            {activity.points.map((point) => (
                              <li key={point}>- {point}</li>
                            ))}
                          </ul>
                        ) : null}
                        {activity.links?.length ? (
                          <div className="mt-5 flex flex-wrap gap-3">
                            {activity.links.map((link) => (
                              <a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-[44px] items-center justify-center rounded-btn bg-primary px-5 py-2.5 text-sm font-bold text-white"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                        {activity.images.map((imageName) => (
                          <div
                            key={imageName}
                            className="flex min-h-[96px] items-center justify-center rounded-btn border border-dashed border-primary/30 bg-white px-4 py-5 text-center text-sm font-semibold text-primary shadow-sm"
                          >
                            {imageName}
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
            {isCollegeEvents ? (
              <div className="mt-8">
                <div className="rounded-btn border border-borderSoft bg-section p-5">
                  <p className="text-sm font-bold uppercase tracking-widest text-accent">Importance</p>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-primary">College Events & Activities</h3>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-textSecondary">
                    <p>
                      College Events & Fests provide students with an opportunity to showcase their talents. As students
                      perform in front of live audiences, they experience a boost in their confidence levels. College
                      fests are crucial to shape the overall personality of students.
                    </p>
                    <p>
                      Cultural events serve as a way to bring together students, teachers, and families from diverse
                      backgrounds. When students actively participate in cultural events, they have the chance to
                      collaborate, learn from one another, and build meaningful relationships.
                    </p>
                    <p>
                      Celebrating the Jayanti & Punyatithi of important individuals is a way of recognising their
                      contributions and their impact on our lives. It is a way to remember them respectfully and learn
                      more about them.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                  {COLLEGE_EVENT_REPORTS.map((report) => (
                    <article key={report.title} className="rounded-btn border border-borderSoft bg-white p-5 shadow-sm">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <h3 className="font-heading text-2xl font-bold text-primary">{report.title}</h3>
                        <span className="rounded-btn bg-section px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-accent">
                          PDF pending
                        </span>
                      </div>
                      <h4 className="mt-5 text-sm font-bold uppercase tracking-widest text-accent">Event List</h4>
                      <ul className="mt-4 space-y-3 text-sm leading-relaxed text-textSecondary">
                        {report.events.map((event) => (
                          <li key={event} className="rounded-btn bg-section px-4 py-3">
                            {event}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-btn bg-primary px-5 py-2.5 text-sm font-bold text-white"
              >
                Contact Office
              </Link>
              <Link
                to="/admissions"
                className="inline-flex min-h-[44px] items-center justify-center rounded-btn border-2 border-primary px-5 py-2.5 text-sm font-bold text-primary"
              >
                Admissions
              </Link>
            </div>
          </div>

          {isFoundersMessage ? (
            <figure className="overflow-hidden rounded-btn border border-borderSoft bg-section">
              <img src={founderImage} alt="Shri. Sudhir Y Mandke" className="h-full min-h-[280px] w-full object-cover" />
            </figure>
          ) : null}
        </div>
      </section>
    </>
  );
}
