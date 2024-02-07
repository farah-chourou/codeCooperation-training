"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const bot = ["7ajra", "war9a", "m9ass"];

function Page() {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  useEffect(() => {
    let bot = getRandomValue();
    console.log("bot--->" + bot);
    console.log("you--->" + selectedValue);
    if (bot === selectedValue) {
      setResult("equal 🤷‍♂️");
    } else if (
      bot === "war9a" &&
      (selectedValue === "m9ass" || selectedValue === "7ajra")
    ) {
      setResult("you win ❤");
    } else if (bot === "m9ass" && selectedValue === "7ajra") {
      setResult("Bot win 😢 ");
    } else if (bot === "7ajra" && selectedValue === "m9ass") {
      setResult("Bot win 😢 ");
    } else if (bot === "7ajra" && selectedValue === "war9a") {
      setResult("You win  ❤");
    }
  }, [selectedValue]);

  const handleButtonClick = (value: string) => {
    setSelectedValue(value);
  };
  function getRandomValue(): string {
    const randomIndex = Math.floor(Math.random() * bot.length);
    return bot[randomIndex];
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2  justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <h5 className="text-xl font-extrabold tracking-tight md:text-3xl mb-8">
          This is our Game build by farah & zayneb
        </h5>
        <div className="flex flex-row  md:flex-col items-center gap-4">
          <Button
            variant="outline"
            onClick={() => handleButtonClick("7ajra")}
            className="text-blue border-blue-500 hover:bg-blue-600"
          >
            7ajra 😢{" "}
          </Button>
          <Button
            variant="outline"
            onClick={() => handleButtonClick("war9a")}
            className="text-blue border-blue-500 hover:bg-blue-600"
          >
            war9a 🤷‍♂️
          </Button>
          <Button
            variant="outline"
            onClick={() => handleButtonClick("m9ass")}
            className="text-blue border-blue-500 hover:bg-blue-600"
          >
            m9ass 😒
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center  gap-24  ">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {result}
        </h1>
        <div> fff</div>
      </div>
    </div>
  );
}

export default Page;
