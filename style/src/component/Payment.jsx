import React from "react";
import style from "./credit.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Icon,
  styled,
  Button,
} from "@chakra-ui/react";
import {
  AiFillCalendar,
  AiOutlineCalendar,
  AiOutlineCreditCard,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { CheckIcon, PhoneIcon } from "@chakra-ui/icons";
const Payment = () => {
  return (
    <div className={style.superparent}>
      <div className={style.imgdiv}></div>
      <div className={style.form}>
        <Stack spacing={4}>
<label htmlFor="">CARDHOLDER NAME</label>          
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={AiOutlineUserAdd} color="red.500" />}
            />
            <Input type="tel" placeholder="John Smith" />
          </InputGroup>
<label htmlFor="">CARD NUMBER</label>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={AiOutlineCreditCard} color="red.500" />}
            />
            <Input type="tel" placeholder="4256 7890 5678 4532" />
          </InputGroup>
          <div className={style.ccv}>
              <div>
            <label htmlFor="">Month</label>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={AiOutlineCalendar} color="red.500" />}
              />
              <Input type="tel" placeholder="04" />
            </InputGroup>
            </div>
            <div>
            <label htmlFor="">Year</label>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={AiFillCalendar} color="red.500" />}
              />
              <Input type="tel" placeholder="2022" />
            </InputGroup>
            </div>
            <div>
            <label htmlFor="">CCV</label>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={BiLock} color="red.500" />}
              />
              <Input type="tel" placeholder="ccv" />
            </InputGroup>
            </div>
          </div>
        </Stack>
    <p> Payment amount: 12300 P</p>
   

    

  <Button className={style.paybtn} colorScheme='pink' variant='solid'  backgroundColor='red.500'>
    PAY
  </Button>
 

          </div>
    </div>
  );
};

export default Payment;
