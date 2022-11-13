import {useEffect, useState} from 'react';

const Observer = (ref) =>{
  const [element, setElement] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
          if(entry.isIntersecting){ setElement(true); }
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

  return element;
}
export default Observer;