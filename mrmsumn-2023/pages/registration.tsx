import { Loading, Navbar, FormRecruit } from "@/components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Form = () => {
  const router = useRouter();

  const closeBatchOne = 4;
  const openBatchTwo = 8;
  const closeBatchTwo = 12;
  const [dayTime, setDayTime] = useState<number>(new Date().getDate());
  const [close, setClose] = useState(
    (dayTime >= closeBatchOne && dayTime < openBatchTwo) ||
      dayTime > closeBatchTwo
  );

  const time = () => {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();

    let date: string = String(year) + String(month) + String(day);
    setDayTime(day);
  };

  useEffect(() => {
    if (
      (dayTime >= closeBatchOne && dayTime < openBatchTwo) ||
      dayTime > closeBatchTwo
    ) {
      setClose(true);
      router.push("/");
      return;
    }

    let nowTime = setInterval(() => time(), 1000);

    return () => clearInterval(nowTime);
  }, []);

  useEffect(() => {
    if (
      (dayTime >= closeBatchOne && dayTime < openBatchTwo) ||
      dayTime > closeBatchTwo
    ) {
      setClose(true);
      router.push("/");
      return;
    }
  }, [dayTime]);

  return (
    <>
      {!close && (
        <>
          <Navbar />
          <FormRecruit />
        </>
      )}
    </>
  );
};

export default Form;
