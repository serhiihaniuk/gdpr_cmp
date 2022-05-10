import {FunctionComponent, useEffect, useRef} from 'preact/compat';
import {createFocusTrap} from 'focus-trap';

// eslint-disable-next-line react/prop-types
const FocusTrap: FunctionComponent<{cssSelector: string}> = ({cssSelector, children}) => {
  const focusTrap = useRef(null) as any;
  const containerRef = useRef(null) as any;
  const prevContainer = useRef(null) as any;

  useEffect(() => {
    if (!focusTrap.current) {
      prevContainer.current = containerRef.current; // save to compare later
      focusTrap.current = createFocusTrap([containerRef.current, cssSelector], {
        allowOutsideClick(event: any) {
          return event.target.id === 'trap1' || event.target.id === 'trap2';
        },
      });
      focusTrap.current.activate();
    } else if (prevContainer.current !== containerRef.current) {
      // assume containerRef has changed and update trap
      prevContainer.current = containerRef.current; // save to compare later
      focusTrap.current.updateContainerElements([containerRef.current, '#container2']);
    }
  }); // every render

  useEffect(() => {
    // clean-up
    return function() {
      // deactivate the trap if we had created it
      if (focusTrap.current) {
        focusTrap.current.deactivate();
        focusTrap.current = null;
      }
    };
  }, []);

  return (
    <>{children}</>
  );
};
export default FocusTrap;
