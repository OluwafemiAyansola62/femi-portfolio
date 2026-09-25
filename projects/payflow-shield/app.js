const toast = document.querySelector('.toast');

function notify(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(notify.timer);
  notify.timer = window.setTimeout(() => toast.classList.remove('show'), 2800);
}

document.querySelectorAll('[data-demo]').forEach((button) => {
  button.addEventListener('click', () => {
    notify('Demo request captured. Connect this action to your CRM or API.');
  });
});

document.querySelector('[data-sandbox]')?.addEventListener('click', () => {
  document.querySelector('#product')?.scrollIntoView({ behavior: 'smooth' });
  notify('Sandbox loaded with simulated receivables data.');
});

document.querySelector('[data-pricing]')?.addEventListener('click', () => {
  notify('Starter $149 • Growth $499 • Enterprise custom');
});

const invoices = [...document.querySelectorAll('.invoice')];
document.querySelectorAll('[data-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;
    invoices.forEach((invoice) => {
      invoice.hidden = filter !== 'all' && invoice.dataset.risk !== filter;
    });
  });
});

// Keep the prototype honest: all displayed financial figures are simulated demo data.
console.info('PayFlow Shield prototype loaded with simulated data.');
