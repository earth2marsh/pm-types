// ——— PM Orientation Quiz ———
// Six orientations (unique keys): Adv (Advocate), Innov (Innovator), Tech (Technologist),
// Arch (Architect), Growth, Oper (Operator)

const questions = [
  // 1 Advocate vs Innovator (neighbors - share vertex)
  {
    leftKey: "Adv",
    rightKey: "Innov",
    leftClaim: "You believe the best product decisions are those that prioritize user feedback and engagement.",
    leftExample: "When deciding on feature updates, you prioritize enhancements that address user complaints and suggestions, aiming to boost satisfaction and retention.",
    rightClaim: "You are driven by the desire to break new ground and introduce solutions that redefine how users interact with your product.",
    rightExample: "When deciding on feature updates, you push for the inclusion of state-of-the-art technology that can provide new ways for users to engage with the product, even if it means a steeper learning curve."
  },

  // 2 Growth vs Operator (neighbors - share vertex)
  {
    leftKey: "Growth",
    rightKey: "Oper",
    leftClaim: "You are focused on accelerating the company's growth through strategic initiatives that expand market reach and enhance product offerings to capture more market share.",
    leftExample: "In planning sessions, you advocate for investing in market expansion and new product lines that promise high growth, even if they require significant upfront investment.",
    rightClaim: "You excel in optimizing existing resources and processes to improve profitability and operational efficiency.",
    rightExample: "In planning sessions, you focus on refining internal processes and enhancing the efficiency of existing product lines to improve margins and reduce waste."
  },

  // 3 Architect vs Technologist (neighbors - share vertex)
  {
    leftKey: "Arch",
    rightKey: "Tech",
    leftClaim: "You prioritize establishing a robust and scalable architecture, ensuring that the product’s backbone can support both current needs and future growth without compromise.",
    leftExample: "In technology strategy meetings, you champion architectural improvements and robust infrastructure upgrades that prepare the product for future expansions and integrations.",
    rightClaim: "You are motivated by leveraging cutting-edge technologies to push the boundaries of what the product can achieve, focusing on incorporating the latest innovations.",
    rightExample: "In technology strategy meetings, you argue for the adoption of new tech trends like AI or blockchain that can significantly enhance product capabilities, prioritizing technological advancement over immediate architectural needs."
  },

  // 4 Advocate vs Architect (opposites)
  {
    leftKey: "Adv",
    rightKey: "Arch",
    leftClaim: "You are most motivated when your work directly improves the user experience. You prioritize projects that have a clear benefit to the user, even if they are challenging from a technical standpoint.",
    leftExample: "When faced with budget constraints, you argue for prioritizing features that users have explicitly requested, believing that user satisfaction leads to long-term success.",
    rightClaim: "You prioritize building a solid and scalable product infrastructure. You believe that a strong technical foundation ensures the product’s long-term viability and adaptability.",
    rightExample: "When faced with budget constraints, you advocate for foundational technical improvements that will make the product more robust and flexible in the future, even if they are less visible to users."
  },

  // 5 Operator vs Innovator (opposites)
  {
    leftKey: "Oper",
    rightKey: "Innov",
    leftClaim: "You focus on optimizing product operations and processes to maximize efficiency and reduce costs. You excel at making strategic decisions that enhance business operations.",
    leftExample: "When planning new features, you prioritize those that streamline operations or enhance existing revenue streams, ensuring the business runs more smoothly and profitably.",
    rightClaim: "You thrive on exploring new ideas and pushing the boundaries of what’s possible with technology to meet emerging user needs. You champion innovative solutions that may disrupt standard operations.",
    rightExample: "When planning new features, you are drawn to those that offer something entirely new to the market, focusing on long-term potential rather than immediate efficiency."
  },

  // 6 Growth vs Technologist (opposites)
  {
    leftKey: "Growth",
    rightKey: "Tech",
    leftClaim: "Your primary focus is on scaling the business and driving revenue. You are adept at leveraging both new and existing products to tap into new markets and demographic segments.",
    leftExample: "In strategy meetings, you advocate for entering new markets or developing features tailored to demographics that could open up significant new revenue streams.",
    rightClaim: "You are captivated by the possibilities of new technologies and how they can revolutionize products. You are passionate about incorporating the latest technological advancements into the product.",
    rightExample: "In strategy meetings, you push for the adoption of emerging technologies that can transform the product offering, even if the initial cost and integration complexity are high."
  },

  // 7 Advocate vs Growth (share side)
  {
    leftKey: "Adv",
    rightKey: "Growth",
    leftClaim: "You prioritize initiatives that directly enhance the user experience, often focusing on immediate user feedback and satisfaction to guide product development.",
    leftExample: "When presented with budget allocation decisions, you argue for spending on user experience enhancements and customer service improvements to ensure high user satisfaction.",
    rightClaim: "You focus on scaling the business and expanding market reach, prioritizing strategic initiatives that drive revenue growth and market penetration.",
    rightExample: "When presented with budget allocation decisions, you advocate for investing in marketing campaigns and market research that aim to open new markets and increase sales volume."
  },

  // 8 Operator vs Architect (share side)
  {
    leftKey: "Oper",
    rightKey: "Arch",
    leftClaim: "You excel in refining and optimizing operational processes to ensure the business runs efficiently, focusing on immediate returns and cost-saving measures.",
    leftExample: "In product development discussions, you prioritize initiatives that streamline operations and reduce production costs, even if it means sticking with existing technologies.",
    rightClaim: "You focus on building a strong and scalable technical foundation, prioritizing long-term sustainability and adaptability of the product’s architecture.",
    rightExample: "In product development discussions, you push for investing in advanced infrastructure and scalable systems that can support future growth, even if it requires a higher initial investment."
  },

  // 9 Technologist vs Innovator (share side)
  {
    leftKey: "Tech",
    rightKey: "Innov",
    leftClaim: "You are driven by the latest technological advancements, focusing on integrating cutting-edge technologies that enhance the product’s technical capabilities.",
    leftExample: "In strategy meetings, you advocate for the integration of emerging technologies that increase product performance and capabilities, focusing on staying ahead in technological innovation.",
    rightClaim: "You are motivated by creating new market opportunities and redefining user interactions, often pioneering unconventional solutions to meet emerging user needs.",
    rightExample: "In strategy meetings, you push for exploring radical new ideas and market opportunities that diverge from traditional paths, focusing on innovation that disrupts existing market norms."
  },

  // 10 Business vs User — map to Growth (business-first) vs Advocate (user-first)
  {
    leftKey: "Growth",
    rightKey: "Adv",
    leftClaim: "You prioritize clear, measurable business outcomes and commit to initiatives with strong, modelled ROI.",
    leftExample: "When planning a feature, you start from revenue impact—forecasting retention, conversion, and payback before committing scope.",
    rightClaim: "You prioritize enriching the user experience even if the business impact is longer-tailed or less certain.",
    rightExample: "When planning a feature, you start from user research and feedback sessions to validate that it truly solves user needs."
  },

  // 11 User vs Tech — map to Advocate (user-first) vs Technologist (tech-first)
  {
    leftKey: "Adv",
    rightKey: "Tech",
    leftClaim: "You believe understanding user needs should drive technology choices; usability trumps novelty.",
    leftExample: "In technical discussions, you bring real customer stories and jobs-to-be-done to guide decisions.",
    rightClaim: "You believe breakthrough technology unlocks new value; feasibility and performance set the guardrails.",
    rightExample: "In technical discussions, you advocate adopting a new platform/library to enable capabilities users can’t get today."
  },

  // 12 Tech vs Business — map to Architect (tech-foundation) vs Growth (business-first)
  {
    leftKey: "Arch",
    rightKey: "Growth",
    leftClaim: "You see a robust, scalable foundation as the essential enabler of future outcomes.",
    leftExample: "You support investing in platform reliability and core refactors before layering on more features.",
    rightClaim: "You believe the business must capture value quickly to survive and fund further investment.",
    rightExample: "You push to deliver monetizable slices now and iterate, proving ROI before deeper platform work."
  }
];

// ——— State ———
let current = 0; // question index
const answers = new Array(questions.length).fill(null); // store one of: "strongA","weakA","neutral","weakB","strongB"

// ——— Scoring ———
function computeScores() {
  const scores = { Adv:0, Innov:0, Tech:0, Arch:0, Growth:0, Oper:0 };
  answers.forEach((choice, idx) => {
    if (!choice) return;
    const { leftKey, rightKey } = questions[idx];
    switch (choice) {
      case "strongA": scores[leftKey]+=3; break;
      case "weakA":   scores[leftKey]+=2; scores[rightKey]+=1; break;
      case "neutral": scores[leftKey]+=1; scores[rightKey]+=1; break;
      case "weakB":   scores[rightKey]+=2; scores[leftKey]+=1; break;
      case "strongB": scores[rightKey]+=3; break;
    }
  });
  return scores;
}

// ——— Rendering ———
function renderQuestion() {
  const q = questions[current];
  const total = questions.length;
  document.getElementById('qNum').textContent = (current+1);
  document.getElementById('qTotal').textContent = total;
  document.getElementById('bar').style.width = ((current)/total*100)+"%";

  const selected = answers[current];

  const html = `
    <div class="claims">
      <div class="claim left">
        <p>${q.leftClaim}</p>
        <p class="example">Example: ${q.leftExample}</p>
      </div>
      <div class="claim right">
        <p>${q.rightClaim}</p>
        <p class="example">Example: ${q.rightExample}</p>
      </div>
    </div>

    <div id="sliderContainer">
      <div class="slider-line"></div>
      <div id="radios">
        <input type="radio" id="strongA" name="choices" value="strongA" ${selected==="strongA"?"checked":""}>
        <label for="strongA"><span></span><p>Definitely</p></label>

        <input type="radio" id="weakA" name="choices" value="weakA" ${selected==="weakA"?"checked":""}>
        <label for="weakA"><span></span><p>Somewhat</p></label>

        <input type="radio" id="neutral" name="choices" value="neutral" ${selected==="neutral"?"checked":""}>
        <label for="neutral"><span></span><p>Neutral<br><small>(neither/both)</small></p></label>

        <input type="radio" id="weakB" name="choices" value="weakB" ${selected==="weakB"?"checked":""}>
        <label for="weakB"><span></span><p>Somewhat</p></label>

        <input type="radio" id="strongB" name="choices" value="strongB" ${selected==="strongB"?"checked":""}>
        <label for="strongB"><span></span><p>Definitely</p></label>
      </div>
    </div>
  `;
  document.getElementById('questionContainer').innerHTML = html;

  // Attach change handler
  document.querySelectorAll('input[name="choices"]').forEach(el => {
    el.addEventListener('change', (e) => {
      answers[current] = e.target.value; // store latest only
      // do not advance; Next button controls nav
      updateNavButtons();
    });
  });

  updateNavButtons();
}

function updateNavButtons() {
  const prev = document.getElementById('prevButton');
  const next = document.getElementById('nextButton');
  prev.disabled = current === 0;
  // Require a selection to proceed
  next.disabled = answers[current] === null;
}

function prevQuestion() {
  if (current > 0) { current--; renderQuestion(); }
}

function nextQuestion() {
  if (current < questions.length-1) {
    current++;
    renderQuestion();
  } else {
    // done
    const totals = computeScores();
    const params = new URLSearchParams(totals).toString();
    window.location.href = "results.html?" + params;
  }
}

// ——— Init ———
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('prevButton').addEventListener('click', prevQuestion);
  document.getElementById('nextButton').addEventListener('click', nextQuestion);
  renderQuestion();
});