"use client";

import { useEffect, useRef, useState } from "react";
import { FaHome, FaPeopleCarry, FaStopwatch, FaUsers } from "react-icons/fa";
import { stats } from "@/utils/siteData";

const icons = [FaHome, FaStopwatch, FaPeopleCarry, FaUsers];

export default function StatsCounter() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(true);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-grid" ref={ref}>
      {stats.map((item, index) => {
        const Icon = icons[index];
        return (
          <div className="stat-item" key={item.label}>
            <Icon />
            <strong>{active ? <CountTo value={item.value} /> : 0}</strong>
            <span />
            <p>{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}

function CountTo({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();
    const duration = 1600 + Math.min(value, 1000);
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.ceil(value * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return count;
}
