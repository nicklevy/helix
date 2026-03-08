const taxData = {
  "2026": [
    { date: "31 January", title: "Self Assessment Deadline", description: "Online Self Assessment tax return deadline and balancing payment due for 2024/25.", color: "#b45309", bg: "#fffbeb", border: "#f59e0b" },
    { date: "05 April", title: "End of Tax Year", description: "The 2025/26 tax year ends. Ensure all income and expenses are recorded.", color: "#15803d", bg: "#f0fdf4", border: "#22c55e" },
    { date: "31 July", title: "Payment on Account", description: "Second Payment on Account for Self Assessment (2025/26) due to HMRC.", color: "#1d4ed8", bg: "#eff6ff", border: "#3b82f6" },
    { date: "Corporation Tax", title: "Company Deadline", description: "Due 9 months and 1 day after your company's accounting period ends.", color: "#334155", bg: "#f8fafc", border: "#64748b" }
  ],
  "2027": [
    { date: "31 January", title: "Self Assessment Deadline", description: "Online Self Assessment tax return deadline and balancing payment due for 2025/26.", color: "#b45309", bg: "#fffbeb", border: "#f59e0b" },
    { date: "05 April", title: "End of Tax Year", description: "The 2026/27 tax year ends. Ensure all records are up to date.", color: "#15803d", bg: "#f0fdf4", border: "#22c55e" },
    { date: "31 July", title: "Payment on Account", description: "Second Payment on Account for Self Assessment (2026/27) due to HMRC.", color: "#1d4ed8", bg: "#eff6ff", border: "#3b82f6" },
    { date: "Corporation Tax", title: "Company Deadline", description: "Due 9 months and 1 day after your company's accounting period ends.", color: "#334155", bg: "#f8fafc", border: "#64748b" }
  ],
  "2028": [
    { date: "31 January", title: "Self Assessment Deadline", description: "Online Self Assessment tax return deadline and balancing payment due for 2026/27.", color: "#b45309", bg: "#fffbeb", border: "#f59e0b" },
    { date: "05 April", title: "End of Tax Year", description: "The 2027/28 tax year ends. Final day for tax-efficient planning.", color: "#15803d", bg: "#f0fdf4", border: "#22c55e" },
    { date: "31 July", title: "Payment on Account", description: "Second Payment on Account for Self Assessment (2027/28) due to HMRC.", color: "#1d4ed8", bg: "#eff6ff", border: "#3b82f6" },
    { date: "Corporation Tax", title: "Company Deadline", description: "Due 9 months and 1 day after your company's accounting period ends.", color: "#334155", bg: "#f8fafc", border: "#64748b" }
  ]
};

export function initTaxDeadlines() {
  const yearSelect = document.getElementById('tax-year-select');
  const deadlinesGrid = document.getElementById('deadlines-grid');

  if (!yearSelect || !deadlinesGrid) return;

  yearSelect.addEventListener('change', (e) => {
    const year = e.target.value;
    updateDeadlines(year);
  });

  function updateDeadlines(year) {
    const deadlines = taxData[year];
    deadlinesGrid.innerHTML = deadlines.map(item => `
      <div style="padding: 1.5rem; background: ${item.bg}; border-left: 4px solid ${item.border}; border-radius: 0 var(--radius-md) var(--radius-md) 0; transition: transform 0.2s ease;">
        <h4 style="font-weight: 700; color: ${item.color}; margin-bottom: 0.5rem;">${item.date}</h4>
        <p style="margin: 0; font-weight: 600; font-size: 1rem; margin-bottom: 0.25rem;">${item.title}</p>
        <p style="margin: 0; font-size: 0.95rem; color: var(--text-muted);">${item.description}</p>
      </div>
    `).join('');
  }
}
