import m from 'mithril';

export const heading = (title, subtitle) => {
  const h1 = m('h1.title', title);
  const h3 = m('h3.subtitle', subtitle);

  return [h1, h3];
};
