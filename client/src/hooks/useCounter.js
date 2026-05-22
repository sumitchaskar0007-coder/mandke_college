import { useEffect, useRef, useState } from "react";
export function useCounter(target, duration = 1200) {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting || started.current)
                    return;
                started.current = true;
                const start = performance.now();
                const step = (now) => {
                    const t = Math.min(1, (now - start) / duration);
                    const eased = 1 - (1 - t) ** 2;
                    setValue(Math.round(target * eased));
                    if (t < 1)
                        requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            });
        }, { threshold: 0.3 });
        obs.observe(el);
        return () => obs.disconnect();
    }, [target, duration]);
    return { ref, value };
}
