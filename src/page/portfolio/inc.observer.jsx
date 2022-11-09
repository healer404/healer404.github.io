import {useEffect, useState} from 'react';

const RefObserver = (ref) =>{
  const [sectionHeader, setSectionHeader] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
          if(entry.isIntersecting){ setSectionHeader(true); }
      },{
        root: null,
        rootMargin: "0px",
        threshold: 0.1
      }
    );
    if(ref.current){
      observer.observe(ref.current);
    }
  }, [ref]);

  return sectionHeader;
}
export default RefObserver;