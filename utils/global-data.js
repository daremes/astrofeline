export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Astra Noir Studio';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Futuristic Film-Noir Multimedia Experiences';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© 2024 Astra Noir Studio · Crafted in the shadows of tomorrow.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
