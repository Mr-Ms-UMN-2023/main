import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

type Inputs = {
    nama: string,
    notelp: string,
    tempatlahir: string,
    tanggallahir: string,
    foto: file,
    porto: file,
};

const FormRecruit = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({criteriaMode: "all"}); 
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    let array = [
        {
            "Pertanyaan":"Nama Lengkap",
            "Name":"nama",
            "PropertyName":"text",
            "Required":"This input is required",
            "PatternValue":"",
            "PatternMessage":""
        },
        {
            "Pertanyaan":"Nomor Telepon",
            "Name":"notelp",
            "PropertyName":"text",
            "Required":"This input is required",
            "PatternValue":/\d+/,
            "PatternMessage":"This input is number only"
        },
        {
            "Pertanyaan":"Tempat Lahir",
            "Name":"tempatlahir",
            "PropertyName":"text",
            "Required":"",
            "PatternValue":"",
            "PatternMessage":""
        },
        {
            "Pertanyaan":"Tempat Lahir",
            "Name":"tanggallahir",
            "PropertyName":"date",
            "Required":"",
            "PatternValue":"",
            "PatternMessage":""
        },
        {
            "Pertanyaan":"Foto",
            "Name":"foto",
            "PropertyName":"file",
            "Required":"",
            "PatternValue":"",
            "PatternMessage":""
        },
        {
            "Pertanyaan":"Portofolio",
            "Name":"porto",
            "PropertyName":"file",
            "Required":"",
            "PatternValue":"",
            "PatternMessage":""
        },
    ]

    function buttonHover(e) {
        e.target.style.boxShadow = 'inset 0 0 0 2em #c28824';
        e.target.style.color = 'black';
    }

    function buttonOut(e) {
        e.target.style.boxShadow = 'none';
        e.target.style.color = '#c28824';
    }

    const Label = {
        color:'#c28824',
        fontFamily:'TrajanPro-Bold',
        '@media (max-width: 600px)': {
            fontSize: '0.5vw',
        },
    };

    const listItems = array.map(
        (e) => {
            const InputName = e.Name;
            const Required = e.Required;
            const PatternValue = e.PatternValue;
            const PatternMessage = e.PatternMessage;
            return (
                <div style={{ marginBottom:'2vw', width:'60%', marginLeft:'auto', marginRight:'auto' }}>
                    <label style={Label}>{e.Pertanyaan}</label>
                    
                    <input type={e.PropertyName} name={e.Name} 
                        {...register(InputName, { 
                            required: Required,
                            pattern: {
                                value: PatternValue,
                                message: PatternMessage,
                            }
                        })} 
                        style={{ width:'100%', borderRadius:'15px', color:'white' }}/>
                    <ErrorMessage
                        errors={errors}
                        name={e.Name}
                        render={({ messages }) => {
                        // console.log("messages", messages);
                        return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                <p style={{ color:'red', fontFamily:'TrajanPro-Bold' }} key={type}>{message}</p>
                            ))
                            : null;
                        }}
                    />
                    
                    {/* <input type={e.PropertyName} name={e.Name} {...register(InputName, { required: true })} style={{ width:'100%', borderRadius:'15px' }}/>
                    {errors.nama && <span style={{ color:'red', fontFamily:'TrajanPro-Bold' }}>This field is required</span>} */}
                </div>
            )
        }   
    )

    return (
        <Box>
            <Flex
            id="formRecruit"
            h="100vh"
            w="70%"
            maxW="1366px"
            mx="auto"
            my="5vw"
            flexDirection={"column"}
            justifyContent="center"
            position="relative">
                <form onSubmit={handleSubmit(onSubmit)} style={{ border:'2px solid #c28824', borderRadius:'15px', padding:'3vw 0' }}>
                    {listItems}
                    <div style={{ display:'flex', justifyContent:'center'}}>
                        <input type="submit" onMouseOver={ buttonHover } onMouseOut={ buttonOut } style={{ 
                            width:'6vw',
                            height:'3vw',
                            fontSize:'16px',
                            fontFamily:'TrajanPro-Bold',
                            color:'#c28824',
                            backgroundColor:'black',
                            border:'2px solid #c28824', 
                            borderRadius:'10px', 
                            marginTop:'2vw',
                            cursor: 'pointer'
                        }}/>
                    </div>
                </form>
            </Flex>
        </Box>
    );
};

export { FormRecruit as FormRecruit };