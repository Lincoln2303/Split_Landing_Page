// II.05. First we save the left, and right side to a var:
const left = document.querySelector('.left');
const right = document.querySelector('.right');
// II.06. We'll also need the container: (NOTE: Because that's where we're adding the classes to)
const container = document.querySelector('.container');

// II.07. We add eventlistener for the left-side:
// NOTE: 'mouseenter' is technically hover, and when that happens, we're calling an arrow function take the container and add classlist
left.addEventListener('mouseenter', () => container.classList.add('hover-left')); 
// II.08. We remove the class: (NOTE: When we don't hover the left-side anymore)
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

// II.09. We do exactly the same thing with the right-side:
// AFTER: We add transition effect when we hover these in css (II.10.)
right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));


