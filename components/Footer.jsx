const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full h-52 mt-24 border-gray-900 border-t-2 flex justify-center items-center'>
      Sample Footer &copy; {year}.
    </footer>
  );
};

export default Footer;
