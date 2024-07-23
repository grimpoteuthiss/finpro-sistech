import { FC, useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

const CountdownTimer: FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    countdown();
    const interval = setInterval(countdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div id="offers" className="flex items-center justify-center w-full gap-1.5 count-down-main">
      {["days", "hours", "minutes", "seconds"].map((unit, index) => (
        <div key={unit} className="flex items-center gap-1.5">
          <div className="rounded-xl bg-red-600 py-1 min-w-[60px] flex items-center justify-center flex-col gap-1 aspect-square px-1">
            <h3 className="countdown-element font-manrope font-semibold text-lg text-white text-center">
              {timeLeft[unit as keyof typeof timeLeft]}
            </h3>
          </div>
          {index < 3 && (
            <h3 className="font-manrope font-semibold text-lg text-white">:</h3>
          )}
        </div>
      ))}
    </div>
  );
};

const Countdown: FC = () => {
  const targetDate = "2024-12-31T23:59:59"; // Set your target date here

  return (
    <div className="flex items-center justify-center bg-black">
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
};

export { Countdown };
