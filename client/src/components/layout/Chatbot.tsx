import { FormEvent, useState } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

const QUICK_PROMPTS = [
  "Admission",
  "Courses",
  "Fees",
  "Eligibility",
  "Documents",
  "Scholarship",
  "Timings",
  "Location",
  "WhatsApp",
  "BBA",
  "BCA",
  "B.Com",
];

const ANSWERS = [
  {
    keywords: ["admission", "apply", "form", "enroll"],
    text: "Admissions are open for 2026-27. You can apply from the Admissions page, or contact the office on +91 99229 65506 for help.",
  },
  {
    keywords: ["course", "courses", "program"],
    text: "The college offers B.Com, BBA, BCA, and distance education pathways. Tell me which course you want and I can guide you to the right section.",
  },
  {
    keywords: ["b.com", "bcom", "commerce"],
    text: "B.Com is available for students interested in commerce, accounting, finance, business, and higher education pathways under SPPU affiliation.",
  },
  {
    keywords: ["bba", "management", "business administration"],
    text: "BBA focuses on management, leadership, entrepreneurship, and industry exposure. You can visit the BBA page or call admissions for current intake details.",
  },
  {
    keywords: ["bca", "computer", "software", "coding", "it"],
    text: "BCA is for students interested in software development, data, AI, cybersecurity, and IT careers. Contact admissions for eligibility and intake support.",
  },
  {
    keywords: ["fee", "fees", "payment", "scholarship"],
    text: "For the latest fee details, please contact the admissions office at +91 99229 65506 or admissions.mandkecollege@gmail.com.",
  },
  {
    keywords: ["eligibility", "eligible", "qualification", "12th", "hsc"],
    text: "For undergraduate courses, students generally need 10+2 / HSC or an equivalent qualification. The office can confirm course-wise eligibility.",
  },
  {
    keywords: ["document", "documents", "certificate", "marksheet", "photo"],
    text: "Common admission documents include marksheets, leaving/transfer certificate, ID proof, photos, caste or scholarship documents if applicable, and contact details.",
  },
  {
    keywords: ["scholarship", "concession", "category"],
    text: "Scholarship or concession guidance depends on category and government rules. Please keep your certificates ready and ask the office for the latest process.",
  },
  {
    keywords: ["contact", "phone", "call", "email", "address", "location"],
    text: "You can reach Mandke College at +91 99229 65506 or admissions.mandkecollege@gmail.com. The campus is at Mandke Growth Centre, Paud Road, Kothrud, Pune - 411038.",
  },
  {
    keywords: ["whatsapp", "message"],
    text: "You can chat on WhatsApp at +91 99229 65506 for quick admission and enquiry support.",
  },
  {
    keywords: ["time", "hours", "timing", "timings", "open"],
    text: "Office hours are usually Monday to Saturday, 9:00 am to 5:00 pm. Please call before visiting to confirm holiday schedules.",
  },
  {
    keywords: ["naac", "accreditation", "cgpa"],
    text: "Smt. Sudhatai Mandke College is NAAC accredited and affiliated to Savitribai Phule Pune University.",
  },
  {
    keywords: ["library", "books", "study"],
    text: "The college has library support for students. For membership, rules, and resources, please visit the Library section or contact the office.",
  },
  {
    keywords: ["placement", "job", "career"],
    text: "The college supports career development through mentoring, skill development, and placement-focused activities.",
  },
];

function createReply(input: string) {
  const normalized = input.toLowerCase();
  const answer = ANSWERS.find((item) => item.keywords.some((keyword) => normalized.includes(keyword)));

  return (
    answer?.text ||
    "Thanks for your message. I can help with admissions, courses, fees, eligibility, documents, scholarships, contact details, timings, and location. For personal help, call +91 99229 65506."
  );
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "bot",
      text: "Hello! I am the Mandke College chatbot. Ask me about admissions, courses, fees, eligibility, documents, scholarships, contact, location, or timings.",
    },
  ]);

  const sendMessage = (text: string) => {
    const cleanText = text.trim();
    if (!cleanText) return;

    setMessages((current) => {
      const nextId = current.length + 1;
      return [
        ...current,
        { id: nextId, from: "user", text: cleanText },
        { id: nextId + 1, from: "bot", text: createReply(cleanText) },
      ];
    });
    setInput("");
    setIsOpen(true);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="fixed bottom-[5.75rem] left-5 z-[56] md:bottom-24 md:left-auto md:right-5">
      {isOpen ? (
        <section
          className="w-[min(calc(100vw-2.5rem),23rem)] overflow-hidden rounded-btn border border-borderSoft bg-white shadow-lift"
          aria-label="Mandke College chatbot"
        >
          <div className="flex items-center justify-between bg-primary px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" aria-hidden />
              <p className="text-sm font-bold">College Chatbot</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-btn text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close chatbot"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto bg-section px-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}>
                <p
                  className={`max-w-[85%] rounded-btn px-3 py-2 text-sm leading-relaxed shadow-sm ${
                    message.from === "user" ? "bg-primary text-white" : "bg-white text-textPrimary"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-borderSoft bg-white p-3">
            <div className="mb-3 flex max-h-28 flex-wrap gap-2 overflow-y-auto pr-1">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-btn border border-primary/20 px-3 py-1.5 text-xs font-bold text-primary hover:border-accent hover:text-accent"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form onSubmit={onSubmit} className="flex gap-2">
              <label htmlFor="chatbot-message" className="sr-only">
                Chat message
              </label>
              <input
                id="chatbot-message"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Type your question"
                className="min-h-[44px] min-w-0 flex-1 rounded-btn border border-borderSoft px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-btn bg-accent text-white hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" aria-hidden />
              </button>
            </form>
          </div>
        </section>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime-300 text-black shadow-card ring-1 ring-borderSoft transition hover:bg-lime-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Open college chatbot"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
        </button>
      )}
    </div>
  );
}
