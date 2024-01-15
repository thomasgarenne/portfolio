import { useEffect, useState } from "react";

function ScrollBarProgess() {
	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
	  const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop;
		const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const currentScrollProgress = (scrollTop / scrollHeight) * 100;
		setScrollProgress(currentScrollProgress);
	  };
  
	  // Ajouter un écouteur d'événement pour le défilement dès que le composant est monté
	  document.addEventListener('scroll', handleScroll);
  
	  // Nettoyer l'écouteur d'événement lors du démontage du composant
	  return () => {
		document.removeEventListener('scroll', handleScroll);
	  };
	}, []);
  return (
	<div className='scroll-progress' style={{ width: `${scrollProgress}%` }}></div>
  )
}

export default ScrollBarProgess