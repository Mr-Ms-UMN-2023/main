import {
  Flex,
  Box,
  Button,
  Text,
  Link,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Img,
  Stack,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import { array } from "../../data/formRegisterMrMs";
import styles from "@/styles/element.module.css";

const Label = {
  color: "#c28824",
  fontFamily: "TrajanPro-Bold",
  "@media (max-width: 600px)": {
    fontSize: "0.5vw",
  },
};

const ListItems = ({ register, errors }: any) => {
  const [viewImage, setImage] = useState<any>();
  const [viewImage1, setImage1] = useState<any>();
  const [viewImage2, setImage2] = useState<any>();
  const [viewImage3, setImage3] = useState<any>();

  const onChangeImage = (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      console.log(imageURL);
      name == "picture" && setImage(imageURL);
      name == "personality_screenshot" && setImage1(imageURL);
      name == "grades_screenshot" && setImage2(imageURL);
      name == "student_card_screenshot" && setImage3(imageURL);
    }
  };

  const previewLink = (name: string) => {
    if (name == "personality_screenshot") return `${viewImage1}`;
    if (name == "grades_screenshot") return `${viewImage2}`;
    if (name == "student_card_screenshot") return `${viewImage3}`;
  };

  const displayPreview = (e: any) => {
    if (e.Name == "picture")
      return (
        <Flex
          alignItems={"center"}
          justifyContent={{ base: "center", md: "start" }}
          flexDir={{ base: "column", md: "row" }}>
          <Box
            mx="1rem"
            my={"1rem"}
            boxShadow={"0 0 0 1px #c28824"}
            width="7.5rem"
            height={"10rem"}
            style={{ aspectRatio: "3/4" }}
            overflow="revert">
            <Img height={"auto"} width="100%" src={viewImage} />
          </Box>
        </Flex>
      );
    else {
      if (
        e.Name == "personality_screenshot" ||
        e.Name == "grades_screenshot" ||
        e.Name == "student_card_screenshot"
      )
        return (
          <Link
            color="#c28824"
            rel="noreferrer"
            target={"_blank"}
            href={previewLink(e.Name)}>
            {viewImage1 &&
              e.Name == "personality_screenshot" &&
              `preview link ${e.Pertanyaan}`}
            {viewImage2 &&
              e.Name == "grades_screenshot" &&
              `preview link ${e.Pertanyaan}`}
            {viewImage3 &&
              e.Name == "student_card_screenshot" &&
              `preview link ${e.Pertanyaan}`}
          </Link>
        );
    }
  };

  const inputType = (e: any) => {
    if (e.PropertyName == "DropDown") {
      return (
        <Select
          borderColor={"#c28824"}
          marginTop={"0.5rem"}
          color="#c28824"
          type={e.PropertyName}
          name={e.Name}
          {...register(e.Name, {
            required: {
              value: e.Required == "" ? false : true,
              message: e.Required,
            },
            pattern: {
              value: e.PatternValue,
              message: e.PatternMessage,
            },
            validate: {
              acceptedFormats: (files: any) =>
                e.Formats?.includes(files[0]?.type) || e.FormatMessage,
            },
          })}>
          <option value="" selected disabled hidden>
            Choose here
          </option>
          {e.ArrayDrop.map((x: string, index: number) => (
            <option
              style={{ color: "black" }}
              key={index}
              value={e.ArrayDropValue[index]}>
              {x}
            </option>
          ))}
        </Select>
      );
    } else {
      if (e.PropertyName == "file") {
        return (
          <>
            <Input
              className={styles.custom_file_input}
              bg={"black"}
              borderColor={"#c28824"}
              marginTop={"0.5rem"}
              w="100%"
              h="100%"
              color="#c28824"
              type={e.PropertyName}
              name={e.Name}
              {...register(e.Name, {
                required: {
                  value: e.Required == "" ? false : true,
                  message: e.Required,
                },
                pattern: {
                  value: e.PatternValue,
                  message: e.PatternMessage,
                },
                validate: {
                  acceptedFormats: (files: any) =>
                    e.Formats?.includes(files[0]?.type) || e.FormatMessage,
                },
              })}
              onChange={(x: any) => onChangeImage(e.Name, x)}
            />
          </>
        );
      } else {
        return (
          <Input
            borderColor={"#c28824"}
            marginTop={"0.5rem"}
            color="#c28824"
            type={e.PropertyName}
            name={e.Name}
            {...register(e.Name, {
              required: {
                value: e.Required == "" ? false : true,
                message: e.Required,
              },
              pattern: {
                value: e.PatternValue,
                message: e.PatternMessage,
              },
              validate: {
                acceptedFormats: (files: any) =>
                  e.Formats?.includes(files[0]?.type) || e.FormatMessage,
              },
            })}
            onChange={(x: any) => onChangeImage(e.Name, x)}
          />
        );
      }
    }
  };

  return (
    <Flex flexDir={"column"} gap="1.5rem" mx={"5vw"}>
      {array.map((e: any, index: number) => {
        return (
          <FormControl key={index} isInvalid={errors[e.Name as number] as any}>
            <label style={Label}>{e.Pertanyaan}</label>
            {inputType(e)}
            {errors[e.Name] && (
              <FormErrorMessage>{errors[e.Name].message}</FormErrorMessage>
            )}
            {displayPreview(e)}
          </FormControl>
        );
      })}
    </Flex>
  );
};

export { ListItems as ListItems };
