const translations = {
  en: {
    // Header
    name: "Võ Tất Nhật Thiện",
    title: "Roblox Developer",
    switchLang: "English",

    // Contact
    contactTitle: "Contact",
    email: "nhatthien18@gmail.com",
    phone: "",
    location: "Ben Thanh Ward, Ho Chi Minh City, Vietnam",
    github: "github.com/VtntGaming",
    linkedin: "www.linkedin.com/in/vtntosu",

    // Summary
    summaryTitle: "Summary",
    summaryText:
      "Roblox developer with 8 years of programming experience (since 2018), focused on building and improving game experiences with strong front-end and UX/UI orientation.",

    // Experience
    experienceTitle: "Experience",
    experiences: [
      {
        role: "Roblox Developer",
        company: "Leco Studio",
        period: "05/2025 - Present",
        details: [
          "Work with Lua/Luau on Roblox Engine.",
          "Work most with front-end, including UX/UI.",
        ],
      }
    ],

    // Education
    educationTitle: "Education",
    educations: [
      {
        degree: "4th-year Student",
        school: "Ho Chi Minh City University of Technology (HUTECH)",
        period: "2022 - Present",
        details: "",
      },
    ],

    // Skills
    skillsTitle: "Skills",
    skillCategories: [
      { category: "Roblox Experience", items: "8 years (since 2018)" },
      { category: "Programming Languages", items: "Java, JavaScript, C#, C/C++, Python" },
      { category: "Proficient Languages", items: "Lua, Luau" },
      { category: "Game Engines", items: "Roblox, Unity 2D, LOVE2D, GameMaker" },
      { category: "Management Tools", items: "GitHub, GitHub Desktop, GitHub Copilot, GitLab, Trello, Asana, Desmos" },
    ],

    // Projects
    projectsTitle: "Projects",
    projects: [
      {
        name: "Roblox Game Development",
        tech: "Lua, Luau, Roblox Engine",
        description: "Develop and maintain Roblox game features, with strong focus on front-end systems and UX/UI quality.",
      },
    ],

    // Certifications
    certificationsTitle: "Certifications",
    certifications: [],

    // Languages
    languagesTitle: "Languages",
    languages: [
      { lang: "Vietnamese", level: "Native" },
      { lang: "English", level: "Professional working proficiency" },
      { lang: "Japanese", level: "Low-basic proficiency" },
    ],

    // Interests
    interestsTitle: "Interests",
    interests: "Making a lot of projects to improve skills & creativities, listen to music and playing rhythm games.",
  },

  vi: {
    // Header
    name: "Võ Tất Nhật Thiện",
    title: "Lập trình viên Roblox",
    switchLang: "Tiếng Việt",

    // Contact
    contactTitle: "Liên hệ",
    email: "nhatthien18@gmail.com",
    phone: "",
    location: "Phường Bến Thành, TP. Hồ Chí Minh, Việt Nam",
    github: "github.com/VtntGaming",
    linkedin: "www.linkedin.com/in/vtntosu",

    // Summary
    summaryTitle: "Giới thiệu",
    summaryText:
      "Lập trình viên Roblox với 8 năm kinh nghiệm (từ 2018), tập trung xây dựng và tối ưu trải nghiệm game, làm mạnh ở mảng front-end và UX/UI.",

    // Experience
    experienceTitle: "Kinh nghiệm làm việc",
    experiences: [
      {
        role: "Lập trình viên Roblox",
        company: "Leco Studio",
        period: "05/2025 - Hiện tại",
        details: [
          "Làm việc với Lua/Luau trên Roblox Engine.",
          "Làm chủ yếu với front-end, bao gồm UX/UI.",
        ],
      }
    ],

    // Education
    educationTitle: "Học vấn",
    educations: [
      {
        degree: "Sinh viên năm 4",
        school: "Trường Đại học Công nghệ TPHCM - Ho Chi Minh City University of Technology (HUTECH)",
        period: "2022 - Hiện tại",
        details: "",
      },
    ],

    // Skills
    skillsTitle: "Kỹ năng",
    skillCategories: [
      { category: "Kinh nghiệm Roblox", items: "8 năm (từ 2018)" },
      { category: "Ngôn ngữ", items: "Java, JavaScript, C#, C/C++, Python" },
      { category: "Ngôn ngữ thành thạo", items: "Lua, Luau" },
      { category: "Game engine", items: "Roblox, Unity 2D, LOVE2D, GameMaker" },
      { category: "Công cụ quản lý", items: "GitHub, GitHub Desktop, GitHub Copilot, GitLab, Trello, Asana, Desmos" },
    ],

    // Projects
    projectsTitle: "Dự án",
    projects: [
      {
        name: "Phát triển game Roblox",
        tech: "Lua, Luau, Roblox Engine",
        description: "Phát triển và bảo trì tính năng game Roblox, tập trung vào hệ thống front-end và chất lượng UX/UI.",
      },
    ],

    // Certifications
    certificationsTitle: "Chứng chỉ",
    certifications: [],

    // Languages
    languagesTitle: "Ngoại ngữ",
    languages: [
      { lang: "Tiếng Việt", level: "Bản ngữ" },
      { lang: "Tiếng Anh", level: "Thành thạo chuyên nghiệp" },
      { lang: "Tiếng Nhật", level: "Hiểu biết cơ bản" },
    ],

    // Interests
    interestsTitle: "Sở thích",
    interests: "Tạo và test kỹ năng và tính sáng tạo từ những project nhỏ lẻ. Thích nghe nhạc và chơi các game nhịp điệu (game âm nhạc)",
  },
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Header
  document.getElementById("cv-name").textContent = t.name;
  document.getElementById("cv-title").textContent = t.title;
  document.getElementById("lang-toggle").textContent = t.switchLang;

  // Contact
  document.getElementById("contact-title").textContent = t.contactTitle;
  document.getElementById("contact-email").textContent = t.email;
  document.getElementById("contact-email").href = "mailto:" + t.email;
//   document.getElementById("contact-phone").textContent = t.phone;
  document.getElementById("contact-location").textContent = t.location;
  document.getElementById("contact-github").textContent = t.github;
  document.getElementById("contact-github").href = "https://" + t.github;
  document.getElementById("contact-linkedin").textContent = t.linkedin;
  document.getElementById("contact-linkedin").href = "https://" + t.linkedin;

  // Summary
  document.getElementById("summary-title").textContent = t.summaryTitle;
  document.getElementById("summary-text").textContent = t.summaryText;

  // Experience
  document.getElementById("experience-title").textContent = t.experienceTitle;
  const expContainer = document.getElementById("experience-list");
  expContainer.innerHTML = "";
  t.experiences.forEach((exp) => {
    const div = document.createElement("div");
    div.className = "entry";

    const header = document.createElement("div");
    header.className = "entry-header";

    const roleCompany = document.createElement("h3");
    roleCompany.innerHTML =
      exp.role + ' <span class="separator">|</span> <span class="company">' + escapeHtml(exp.company) + "</span>";

    const period = document.createElement("span");
    period.className = "period";
    period.textContent = exp.period;

    header.appendChild(roleCompany);
    header.appendChild(period);
    div.appendChild(header);

    const ul = document.createElement("ul");
    exp.details.forEach((detail) => {
      const li = document.createElement("li");
      li.textContent = detail;
      ul.appendChild(li);
    });
    div.appendChild(ul);

    expContainer.appendChild(div);
  });

  // Education
  document.getElementById("education-title").textContent = t.educationTitle;
  const eduContainer = document.getElementById("education-list");
  eduContainer.innerHTML = "";
  t.educations.forEach((edu) => {
    const div = document.createElement("div");
    div.className = "entry";

    const header = document.createElement("div");
    header.className = "entry-header";

    const degreeSchool = document.createElement("h3");
    degreeSchool.innerHTML =
      escapeHtml(edu.degree) +
      ' <span class="separator">|</span> <span class="company">' +
      escapeHtml(edu.school) +
      "</span>";

    const period = document.createElement("span");
    period.className = "period";
    period.textContent = edu.period;

    header.appendChild(degreeSchool);
    header.appendChild(period);
    div.appendChild(header);

    if (edu.details) {
      const p = document.createElement("p");
      p.textContent = edu.details;
      div.appendChild(p);
    }

    eduContainer.appendChild(div);
  });

  // Skills
  document.getElementById("skills-title").textContent = t.skillsTitle;
  const skillsContainer = document.getElementById("skills-list");
  skillsContainer.innerHTML = "";
  t.skillCategories.forEach((cat) => {
    const div = document.createElement("div");
    div.className = "skill-row";

    const label = document.createElement("span");
    label.className = "skill-category";
    label.textContent = cat.category;

    const items = document.createElement("span");
    items.className = "skill-items";
    items.textContent = cat.items;

    div.appendChild(label);
    div.appendChild(items);
    skillsContainer.appendChild(div);
  });

  // Projects
  document.getElementById("projects-title").textContent = t.projectsTitle;
  const projContainer = document.getElementById("projects-list");
  projContainer.innerHTML = "";
  t.projects.forEach((proj) => {
    const div = document.createElement("div");
    div.className = "entry";

    const header = document.createElement("div");
    header.className = "entry-header";

    const nameEl = document.createElement("h3");
    nameEl.textContent = proj.name;

    const techEl = document.createElement("span");
    techEl.className = "period";
    techEl.textContent = proj.tech;

    header.appendChild(nameEl);
    header.appendChild(techEl);
    div.appendChild(header);

    const desc = document.createElement("p");
    desc.textContent = proj.description;
    div.appendChild(desc);

    projContainer.appendChild(div);
  });

  // Certifications
  document.getElementById("certifications-title").textContent = t.certificationsTitle;
  const certContainer = document.getElementById("certifications-list");
  certContainer.innerHTML = "";
  t.certifications.forEach((cert) => {
    const li = document.createElement("li");
    li.textContent = cert;
    certContainer.appendChild(li);
  });

  // Languages
  document.getElementById("languages-title").textContent = t.languagesTitle;
  const langContainer = document.getElementById("languages-list");
  langContainer.innerHTML = "";
  t.languages.forEach((l) => {
    const div = document.createElement("div");
    div.className = "skill-row";

    const langName = document.createElement("span");
    langName.className = "skill-category";
    langName.textContent = l.lang;

    const levelName = document.createElement("span");
    levelName.className = "skill-items";
    levelName.textContent = l.level;

    div.appendChild(langName);
    div.appendChild(levelName);
    langContainer.appendChild(div);
  });

  // Interests
  document.getElementById("interests-title").textContent = t.interestsTitle;
  document.getElementById("interests-text").textContent = t.interests;

  // Update html lang attribute
  document.documentElement.lang = lang;
}

function toggleLanguage() {
  setLanguage(currentLang === "en" ? "vi" : "en");
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

document.addEventListener("DOMContentLoaded", function () {
  setLanguage("en");
});
