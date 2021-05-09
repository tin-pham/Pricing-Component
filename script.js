const checkbox = document.querySelector('[type="checkbox"]');

// DOM all price
const prices = document.querySelectorAll('.price__amount');

function changeToMonth() {
  prices.forEach((price) => {
    if (price.dataset.id === 'basic') {
      price.innerHTML = '<span>$</span>19.99';
    } else if (price.dataset.id === 'pro') {
      price.innerHTML = '<span>$</span>29.99';
    } else {
      price.innerHTML = '<span>$</span>39.99';
    }
  });
}

function changeToYear() {
  prices.forEach((price) => {
    if (price.dataset.id === 'basic') {
      price.innerHTML = '<span>$</span>199.99';
    } else if (price.dataset.id === 'pro') {
      price.innerHTML = '<span>$</span>299.99';
    } else {
      price.innerHTML = '<span>$</span>399.99';
    }
  });
}

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    // Change to Monthly
    changeToMonth();
  } else {
    changeToYear();
  }
});

checkbox.addEventListener('keypress', (e) => {
  console.log(e);
  if (e.key === 'ArrowRight') {
    changeToMonth();
  } else if (e.key === 'ArrowLeft') {
    changeToYear();
  }
});
