export function initXeroTips() {
  const accordionItems = document.querySelectorAll('.accordion-header');

  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      const isActive = parent.classList.contains('active');

      // Close all other items
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherContent = otherItem.querySelector('.accordion-content');
        if (otherContent) otherContent.style.maxHeight = null;
      });

      // Toggle current item
      if (!isActive) {
        parent.classList.add('active');
        const content = parent.querySelector('.accordion-content');
        if (content) content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
}
