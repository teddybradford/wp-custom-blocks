import { render } from 'react-dom';
import * as components from 'components';

function isValidComponent(k: string): k is keyof typeof components {
  return k in components;
}

function renderComponents() {
  const elements = document.querySelectorAll('[data-component]');

  elements.forEach((element) => {
    const componentName = element.getAttribute('data-component');

    if (componentName && isValidComponent(componentName)) {
      const Component = components[componentName];
      const children = element.innerHTML;
      render(<Component children={children} />, element);
    }
  });
}

window.addEventListener('DOMContentLoaded', renderComponents);
