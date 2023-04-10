import {
  Flex,
  Input,
  Img,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
// import * as yup from "yup";

type Inputs = {
  nama: string;
  notelp: number;
  tempatlahir: string;
  tanggallahir: string;
  foto: string;
  porto: string;
};

// const schema = yup.object().shape({
//     picture: yup
//     .mixed().required("You need to provide a file")
//     .test("type", "This input only accept jpeg", (value) => {
//         return value && value[0].type == "image/jpeg";
//     }),
// })

let array = [
  {
    Pertanyaan: "Nama Lengkap",
    Name: "nama",
    PropertyName: "text",
    Required: "This input is required",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Nomor Telepon",
    Name: "notelp",
    PropertyName: "text",
    Required: "This input is required",
    PatternValue: /\d+/,
    PatternMessage: "This input is number only",
  },
  {
    Pertanyaan: "Tempat Lahir",
    Name: "tempatlahir",
    PropertyName: "text",
    Required: "",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Tempat Lahir",
    Name: "tanggallahir",
    PropertyName: "date",
    Required: "",
    PatternValue: "",
    PatternMessage: "",
  },
  {
    Pertanyaan: "Foto",
    Name: "foto",
    PropertyName: "file",
    Required: "This input is required",
    PatternValue: "",
    PatternMessage: "",
    Formats: ["image/png", "image/jpg", "image/jpeg", "image/webp"],
    FormatMessage: "This input only accept picture",
  },
  {
    Pertanyaan: "Portofolio",
    Name: "porto",
    PropertyName: "file",
    Required: "This input is required",
    PatternValue: "",
    PatternMessage: "",
    Formats: ["application/pdf"],
    FormatMessage: "This input only accept PDF",
  },
];

const Label = {
  color: "#c28824",
  fontFamily: "TrajanPro-Bold",
  "@media (max-width: 600px)": {
    fontSize: "0.5vw",
  },
};

const ListItems = ({ register, errors }: any) => {
  const [viewImage, setImage] = useState<any>();

  const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("ada lo");
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };
  return (
    <Flex flexDir={"column"} gap="1rem" mx={"5vw"}>
      {array.map((e: any, index: number) => {
        return (
          <FormControl key={index} isInvalid={errors[e.Name as number] as any}>
            <label style={Label}>{e.Pertanyaan}</label>
            <Input
              color="white"
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
                    e.format?.includes(files[0]?.type) || e.FormatMessage,
                },
              })}
              onChange={onChangeImage}
            />
            {errors[e.Name] && (
              <FormErrorMessage>{errors[e.Name].message}</FormErrorMessage>
            )}
            {e.Name == "foto" && (
              <Flex
                alignItems={"center"}
                justifyContent={{ base: "center", md: "start" }}
                flexDir={{ base: "column", md: "row" }}>
                <Box
                  mx="1rem"
                  my={"1rem"}
                  boxShadow={"0 0 0 1px white"}
                  width="7.5rem"
                  height={"10rem"}
                  style={{ aspectRatio: "3/4" }}
                  overflow="revert">
                  <Img height={"auto"} width="100%" src={viewImage} />
                </Box>
                <Box>
                  <Text color="white">
                    Jika foto melebihi atau kurang dari ukuran frame kemungkinan
                    ukuran foto bukan 3 x 4 cm
                  </Text>
                </Box>
              </Flex>
            )}
          </FormControl>
        );
      })}
    </Flex>
  );
};

//     const InputName = e.Name;
//     const Required = e.Required;
//     const PatternValue = e.PatternValue;
//     const PatternMessage = e.PatternMessage;
//     const Formats = [e.Formats, e.Formats1, e.Formats2, e.Formats3];
//     console.log(Formats);
//     const FormatMessage = e.FormatMessage;

//     return (
//       <div
//         key={index}
//         style={{
//           marginBottom: "2vw",
//           width: "60%",
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}>

//         <label style={Label}>{e.Pertanyaan}</label>
//         <input
//           type={e.PropertyName}
//           name={e.Name}
//           {...register(InputName, {
//             required: Required,
//             pattern: {
//               value: PatternValue,
//               message: PatternMessage,
//             },
//             validate: {
//               acceptedFormats: (files: any) =>
//                 Formats.includes(files[0]?.type) || FormatMessage,
//             },
//           })}
//           style={{ width: "100%", borderRadius: "15px" }}
//         />
//         {errors.[e.name] && <ErrorMessage>hello</ErrorMessage> }
//         {/* <ErrorMessage
//           errors={errors}
//           name={e.Name}
//           render={(messages: any) => {
//             // console.log("messages", messages);
//             return messages
//               ? Object.entries(messages).map(([type, message]) => (
//                   <p
//                     style={{ color: "red", fontFamily: "TrajanPro-Bold" }}
//                     key={type}>
//                     {message}
//                   </p>
//                 ))
//               : null;
//           }}
//         /> */}
//       </div>
//     );
//   });

const FormRecruit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ criteriaMode: "all" });

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
  };

  function buttonHover(e: any) {
    e.target.style.boxShadow = "inset 0 0 0 2em #c28824";
    e.target.style.color = "black";
  }

  function buttonOut(e: any) {
    e.target.style.boxShadow = "none";
    e.target.style.color = "#c28824";
  }

  return (
    <Flex
      id="formRecruit"
      w="70%"
      maxW="1366px"
      mx="auto"
      my="5vw"
      flexDirection={"column"}
      justifyContent="center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          border: "2px solid #c28824",
          borderRadius: "15px",
          padding: "3vw 0",
        }}>
        <ListItems register={register} errors={errors} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="submit"
            onMouseOver={buttonHover}
            onMouseOut={buttonOut}
            style={{
              width: "6vw",
              height: "3vw",
              fontSize: "16px",
              fontFamily: "TrajanPro-Bold",
              color: "#c28824",
              backgroundColor: "black",
              border: "2px solid #c28824",
              borderRadius: "10px",
              marginTop: "2vw",
              cursor: "pointer",
            }}
          />
        </div>
      </form>
    </Flex>
  );
};

export { FormRecruit as FormRecruit };
