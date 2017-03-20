var mapNodes = document.querySelectorAll('.map__twinkle');
mapNodes.forEach(function(node, index) {
  node.classList.add('map__twinkle--active');
  node.style['animation-delay'] = index / 7 + 's';
})
