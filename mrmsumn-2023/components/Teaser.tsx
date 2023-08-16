import { Flex, AspectRatio } from "@chakra-ui/react";
import { useRef, useEffect, useState } from "react";

const Teaser = () => {
  const [scrollY, setScrollY] = useState(0);
  const [teaser, setTeaser] = useState("");

  const content = useRef<HTMLDivElement>(null);
  const youtube = useRef<HTMLDivElement[]>([]);

  const handleScroll = () => {
    window.pageYOffset;
    let scroll = window.pageYOffset / 5;

    setScrollY(scroll * 2.2);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (
      content?.current &&
      (scrollY / 2.2) * 5 >=
        content?.current?.offsetTop - content?.current?.offsetHeight
    ) {
      // Check for browser
      let userAgent = navigator.userAgent;

      if (userAgent.match(/firefox|fxios/i)) {
        setTeaser("https://www.youtube.com/embed/N8noHibx5lw?autoplay=1");
      } else {
        setTeaser(
          "https://www.youtube.com/embed/N8noHibx5lw?mute=1&autoplay=1"
        );
      }
    }
  }, [scrollY]);

  return (
    <Flex
      minH={"100vh"}
      minW={"100vw"}
      px="5vw"
      ref={content}
      justifyContent={"center"}
      alignItems="center"
      padding={"0px"}
      position={"relative"}>
      <AspectRatio
        ref={(el: HTMLDivElement) => youtube.current.push(el!)}
        transform={
          "scale(" +
          (content?.current?.offsetTop &&
          window.pageYOffset < content?.current?.offsetTop
            ? window.pageYOffset / content?.current?.offsetTop
            : 1) +
          ")"
        }
        opacity={
          content?.current?.offsetTop &&
          window.pageYOffset / content?.current?.offsetTop
        }
        minW={"90vw"}
        minH={"90vh"}
        ratio={{ base: 9 / 16, md: 16 / 9 }}>
        <iframe
          width="560"
          height="315"
          src={teaser}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; no user gesture is required"
          allowFullScreen></iframe>
      </AspectRatio>
    </Flex>
  );
};

export { Teaser as Teaser };
