import  { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const sections = ['about', 'projects', 'achievements', 'experiences', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      // Define your section ids
     
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust if necessary
          return scrollPosition >= element.offsetTop && scrollPosition <= element.offsetTop + element.offsetHeight;
        }
        return false;
      });
      setActiveSection(currentSection || sections[0]);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav className="fixed hidden md:flex top-5 left-0 w-full z-50  justify-center ">
      <ul className="flex space-x-4 justify-center rounded-full w-fit bg-white/50 backdrop-blur-md bg-opacity-95 shadow-md px-4 py-2">
        {/* Map your navigation items here */}
        {sections.map(section => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`text-gray-600 hover:text-gray-900 text-sm md:text-lg  ${
                activeSection === section ? 'text-blue-500 font-semibold rounded-full p-2 shadow-md transition-all duration-800' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    <nav className="fixed md:hidden bottom-5 left-0 w-full z-50  justify-center flex">
      <ul className="flex space-x-4 justify-center rounded-full w-fit bg-white/50 backdrop-blur-md bg-opacity-95 shadow-md px-4 py-2">
        {/* Map your navigation items here */}
        {sections.map(section => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`text-gray-600 hover:text-gray-900 text-sm md:text-lg  ${
                activeSection === section ? 'text-blue-500 font-semibold rounded-full p-2 shadow-md transition-all duration-800' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
